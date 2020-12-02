"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const cssNano = require("cssnano");
const webpack_sources_1 = require("webpack-sources");
function hook(compiler, action) {
    compiler.hooks.compilation.tap('optimize-css-webpack-plugin', (compilation) => {
        compilation.hooks.optimizeChunkAssets.tapPromise('optimize-css-webpack-plugin', chunks => action(compilation, chunks));
    });
}
class OptimizeCssWebpackPlugin {
    constructor(options) {
        this._options = {
            sourceMap: false,
            test: file => file.endsWith('.css'),
            ...options,
        };
    }
    apply(compiler) {
        hook(compiler, (compilation, chunks) => {
            const files = [...compilation.additionalChunkAssets];
            chunks.forEach(chunk => {
                if (chunk.files && chunk.files.length > 0) {
                    files.push(...chunk.files);
                }
            });
            const actions = files
                .filter(file => this._options.test(file))
                .map(async (file) => {
                const asset = compilation.assets[file];
                if (!asset) {
                    return;
                }
                let content;
                // tslint:disable-next-line: no-any
                let map;
                if (this._options.sourceMap && asset.sourceAndMap) {
                    const sourceAndMap = asset.sourceAndMap();
                    content = sourceAndMap.source;
                    map = sourceAndMap.map;
                }
                else {
                    content = asset.source();
                }
                if (content.length === 0) {
                    return;
                }
                const cssNanoOptions = {
                    preset: ['default', {
                            // Disable SVG optimization, as this can cause optimizations which are not compatible in all browsers.
                            svgo: false,
                        }],
                };
                const postCssOptions = {
                    from: file,
                    map: map && { annotation: false, prev: map },
                };
                const output = await new Promise((resolve, reject) => {
                    // the last parameter is not in the typings
                    // tslint:disable-next-line: no-any
                    cssNano.process(content, postCssOptions, cssNanoOptions)
                        .then(resolve)
                        .catch(reject);
                });
                const warnings = output.warnings();
                if (warnings.length) {
                    compilation.warnings.push(...warnings.map(({ text }) => text));
                }
                let newSource;
                if (output.map) {
                    newSource = new webpack_sources_1.SourceMapSource(output.css, file, 
                    // tslint:disable-next-line: no-any
                    output.map.toString(), content, map);
                }
                else {
                    newSource = new webpack_sources_1.RawSource(output.css);
                }
                compilation.assets[file] = newSource;
            });
            return Promise.all(actions);
        });
    }
}
exports.OptimizeCssWebpackPlugin = OptimizeCssWebpackPlugin;
