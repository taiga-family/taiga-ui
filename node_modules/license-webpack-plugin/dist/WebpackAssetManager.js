"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack_sources_1 = require("webpack-sources");
var WebpackAssetManager = /** @class */ (function () {
    function WebpackAssetManager(outputFilename, licensesRenderer) {
        this.outputFilename = outputFilename;
        this.licensesRenderer = licensesRenderer;
    }
    WebpackAssetManager.prototype.writeChunkLicenses = function (modules, compilation, chunk) {
        var text = this.licensesRenderer.renderLicenses(modules);
        if (text && text.trim()) {
            var filename = compilation.getPath(this.outputFilename, { chunk: chunk });
            compilation.assets[filename] = new webpack_sources_1.RawSource(text);
        }
    };
    WebpackAssetManager.prototype.writeChunkBanners = function (modules, compilation, chunk) {
        var filename = compilation.getPath(this.outputFilename, { chunk: chunk });
        var text = this.licensesRenderer.renderBanner(filename, modules);
        if (text && text.trim()) {
            chunk.files
                .filter(function (file) { return /\.js$/.test(file); })
                .forEach(function (file) {
                compilation.assets[file] = new webpack_sources_1.ConcatSource(text, compilation.assets[file]);
            });
        }
    };
    WebpackAssetManager.prototype.writeAllLicenses = function (modules, compilation) {
        var text = this.licensesRenderer.renderLicenses(modules);
        if (text) {
            compilation.assets[this.outputFilename] = new webpack_sources_1.RawSource(text);
        }
    };
    return WebpackAssetManager;
}());
exports.WebpackAssetManager = WebpackAssetManager;
