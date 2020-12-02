"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const path = require("path");
const webpack_sources_1 = require("webpack-sources");
const augment_index_html_1 = require("../utilities/index-file/augment-index-html");
const strip_bom_1 = require("../utilities/strip-bom");
function readFile(filename, compilation) {
    return new Promise((resolve, reject) => {
        compilation.inputFileSystem.readFile(filename, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(strip_bom_1.stripBom(data.toString()));
        });
    });
}
class IndexHtmlWebpackPlugin {
    constructor(options) {
        this._options = {
            input: 'index.html',
            output: 'index.html',
            entrypoints: ['polyfills', 'main'],
            noModuleEntrypoints: [],
            moduleEntrypoints: [],
            sri: false,
            ...options,
        };
    }
    apply(compiler) {
        compiler.hooks.emit.tapPromise('index-html-webpack-plugin', async (compilation) => {
            // Get input html file
            const inputContent = await readFile(this._options.input, compilation);
            compilation.fileDependencies.add(this._options.input);
            // Get all files for selected entrypoints
            const files = [];
            const noModuleFiles = [];
            const moduleFiles = [];
            for (const [entryName, entrypoint] of compilation.entrypoints) {
                const entryFiles = ((entrypoint && entrypoint.getFiles()) || []).map((f) => ({
                    name: entryName,
                    file: f,
                    extension: path.extname(f),
                }));
                if (this._options.noModuleEntrypoints.includes(entryName)) {
                    noModuleFiles.push(...entryFiles);
                }
                else if (this._options.moduleEntrypoints.includes(entryName)) {
                    moduleFiles.push(...entryFiles);
                }
                else {
                    files.push(...entryFiles);
                }
            }
            const loadOutputFile = (name) => compilation.assets[name].source();
            let indexSource = await augment_index_html_1.augmentIndexHtml({
                input: this._options.input,
                inputContent,
                baseHref: this._options.baseHref,
                deployUrl: this._options.deployUrl,
                sri: this._options.sri,
                crossOrigin: this._options.crossOrigin,
                files,
                noModuleFiles,
                loadOutputFile,
                moduleFiles,
                entrypoints: this._options.entrypoints,
                lang: this._options.lang,
            });
            if (this._options.postTransform) {
                indexSource = await this._options.postTransform(indexSource);
            }
            // Add to compilation assets
            compilation.assets[this._options.output] = new webpack_sources_1.RawSource(indexSource);
        });
    }
}
exports.IndexHtmlWebpackPlugin = IndexHtmlWebpackPlugin;
