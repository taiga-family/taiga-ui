"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebpackModuleFileIterator = /** @class */ (function () {
    function WebpackModuleFileIterator() {
    }
    WebpackModuleFileIterator.prototype.iterateFiles = function (chunkModule, callback) {
        callback(chunkModule.resource ||
            (chunkModule.rootModule && chunkModule.rootModule.resource));
        if (Array.isArray(chunkModule.fileDependencies)) {
            var fileDependencies = chunkModule.fileDependencies;
            fileDependencies.forEach(callback);
        }
        if (Array.isArray(chunkModule.dependencies)) {
            chunkModule.dependencies.forEach(function (module) {
                return callback(module.originModule && module.originModule.resource);
            });
        }
    };
    return WebpackModuleFileIterator;
}());
exports.WebpackModuleFileIterator = WebpackModuleFileIterator;
