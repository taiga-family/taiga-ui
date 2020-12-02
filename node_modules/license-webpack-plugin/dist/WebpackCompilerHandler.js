"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WebpackCompilerHandler = /** @class */ (function () {
    function WebpackCompilerHandler(chunkIncludeTester, chunkHandler, assetManager, moduleCache, addBanner, perChunkOutput, additionalChunkModules, additionalModules) {
        this.chunkIncludeTester = chunkIncludeTester;
        this.chunkHandler = chunkHandler;
        this.assetManager = assetManager;
        this.moduleCache = moduleCache;
        this.addBanner = addBanner;
        this.perChunkOutput = perChunkOutput;
        this.additionalChunkModules = additionalChunkModules;
        this.additionalModules = additionalModules;
    }
    WebpackCompilerHandler.prototype.handleCompiler = function (compiler) {
        var _this = this;
        if (typeof compiler.hooks !== 'undefined') {
            compiler.hooks.compilation.tap('LicenseWebpackPlugin', function (compilation) {
                compilation.hooks.optimizeChunkAssets.tap('LicenseWebpackPlugin', function (chunks) {
                    _this.iterateChunks(compilation, chunks);
                });
            });
        }
        else if (typeof compiler.plugin !== 'undefined') {
            compiler.plugin('compilation', function (compilation) {
                if (typeof compilation.plugin !== 'undefined') {
                    compilation.plugin('optimize-chunk-assets', function (chunks, callback) {
                        _this.iterateChunks(compilation, chunks);
                        callback();
                    });
                }
            });
        }
    };
    WebpackCompilerHandler.prototype.iterateChunks = function (compilation, chunks) {
        var _this = this;
        var _loop_1 = function (chunk) {
            if (this_1.chunkIncludeTester.isIncluded(chunk.name)) {
                this_1.chunkHandler.processChunk(compilation, chunk, this_1.moduleCache);
                if (this_1.additionalChunkModules[chunk.name]) {
                    this_1.additionalChunkModules[chunk.name].forEach(function (module) {
                        return _this.chunkHandler.processModule(compilation, chunk, _this.moduleCache, module);
                    });
                }
                if (this_1.additionalModules.length > 0) {
                    this_1.additionalModules.forEach(function (module) {
                        return _this.chunkHandler.processModule(compilation, chunk, _this.moduleCache, module);
                    });
                }
                if (this_1.perChunkOutput) {
                    this_1.assetManager.writeChunkLicenses(this_1.moduleCache.getAllModulesForChunk(chunk.name), compilation, chunk);
                }
                if (this_1.addBanner) {
                    this_1.assetManager.writeChunkBanners(this_1.moduleCache.getAllModulesForChunk(chunk.name), compilation, chunk);
                }
            }
        };
        var this_1 = this;
        try {
            for (var chunks_1 = __values(chunks), chunks_1_1 = chunks_1.next(); !chunks_1_1.done; chunks_1_1 = chunks_1.next()) {
                var chunk = chunks_1_1.value;
                _loop_1(chunk);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (chunks_1_1 && !chunks_1_1.done && (_a = chunks_1.return)) _a.call(chunks_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!this.perChunkOutput) {
            this.assetManager.writeAllLicenses(this.moduleCache.getAllModules(), compilation);
        }
        var e_1, _a;
    };
    return WebpackCompilerHandler;
}());
exports.WebpackCompilerHandler = WebpackCompilerHandler;
