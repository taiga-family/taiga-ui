"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_sources_1 = require("webpack-sources");
const loaderUtils = require('loader-utils');
const build_optimizer_1 = require("./build-optimizer");
exports.buildOptimizerLoaderPath = __filename;
const alwaysProcess = (path) => 
// Always process TS files.
path.endsWith('.ts') ||
    path.endsWith('.tsx') ||
    // Always process factory files.
    path.endsWith('.ngfactory.js') ||
    path.endsWith('.ngstyle.js');
function buildOptimizerLoader(content, previousSourceMap) {
    this.cacheable();
    const callback = this.async();
    if (!callback) {
        throw new Error('Async loader support is required.');
    }
    const skipBuildOptimizer = this._module && this._module.factoryMeta && this._module.factoryMeta.skipBuildOptimizer;
    if (!alwaysProcess(this.resourcePath) && skipBuildOptimizer) {
        // Skip loading processing this file with Build Optimizer if we determined in
        // BuildOptimizerWebpackPlugin that we shouldn't.
        // Webpack typings for previousSourceMap are wrong, they are JSON objects and not strings.
        // tslint:disable-next-line:no-any
        this.callback(null, content, previousSourceMap);
        return;
    }
    const options = loaderUtils.getOptions(this) || {};
    const boOutput = build_optimizer_1.buildOptimizer({
        content,
        originalFilePath: this.resourcePath,
        inputFilePath: this.resourcePath,
        outputFilePath: this.resourcePath,
        emitSourceMap: options.sourceMap,
        isSideEffectFree: this._module && this._module.factoryMeta && this._module.factoryMeta.sideEffectFree,
    });
    if (boOutput.emitSkipped || boOutput.content === null) {
        // tslint:disable-next-line:no-any
        this.callback(null, content, previousSourceMap);
        return;
    }
    const intermediateSourceMap = boOutput.sourceMap;
    let newContent = boOutput.content;
    let newSourceMap;
    if (options.sourceMap && intermediateSourceMap) {
        // Webpack doesn't need sourceMappingURL since we pass them on explicitely.
        newContent = newContent.replace(/^\/\/# sourceMappingURL=[^\r\n]*/gm, '');
        if (previousSourceMap) {
            // Use http://sokra.github.io/source-map-visualization/ to validate sourcemaps make sense.
            // The last argument is not yet in the typings
            // tslint:disable-next-line: no-any
            newSourceMap = new webpack_sources_1.SourceMapSource(newContent, this.resourcePath, intermediateSourceMap, content, previousSourceMap, true).map();
        }
        else {
            // Otherwise just return our generated sourcemap.
            newSourceMap = intermediateSourceMap;
        }
    }
    // Webpack typings for previousSourceMap are wrong, they are JSON objects and not strings.
    // tslint:disable-next-line:no-any
    callback(null, newContent, newSourceMap);
}
exports.default = buildOptimizerLoader;
