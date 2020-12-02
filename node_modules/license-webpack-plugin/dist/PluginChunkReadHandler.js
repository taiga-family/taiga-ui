"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WebpackChunkModuleIterator_1 = require("./WebpackChunkModuleIterator");
var WebpackModuleFileIterator_1 = require("./WebpackModuleFileIterator");
var PluginChunkReadHandler = /** @class */ (function () {
    function PluginChunkReadHandler(logger, fileHandler, licenseTypeIdentifier, licenseTextReader, licensePolicy, fileSystem) {
        this.logger = logger;
        this.fileHandler = fileHandler;
        this.licenseTypeIdentifier = licenseTypeIdentifier;
        this.licenseTextReader = licenseTextReader;
        this.licensePolicy = licensePolicy;
        this.fileSystem = fileSystem;
        this.moduleIterator = new WebpackChunkModuleIterator_1.WebpackChunkModuleIterator();
        this.fileIterator = new WebpackModuleFileIterator_1.WebpackModuleFileIterator();
    }
    PluginChunkReadHandler.prototype.processChunk = function (compilation, chunk, moduleCache) {
        var _this = this;
        this.moduleIterator.iterateModules(chunk, function (module) {
            _this.fileIterator.iterateFiles(module, function (filename) {
                var module = _this.fileHandler.getModule(filename);
                _this.processModule(compilation, chunk, moduleCache, module);
            });
        });
    };
    PluginChunkReadHandler.prototype.getPackageJson = function (directory) {
        var filename = "" + directory + this.fileSystem.pathSeparator + "package.json";
        return JSON.parse(this.fileSystem.readFileAsUtf8(filename));
    };
    PluginChunkReadHandler.prototype.processModule = function (compilation, chunk, moduleCache, module) {
        if (module && !moduleCache.alreadySeenForChunk(chunk.name, module.name)) {
            var alreadyIncludedModule = moduleCache.getModule(module.name);
            if (alreadyIncludedModule !== null) {
                moduleCache.registerModule(chunk.name, alreadyIncludedModule);
            }
            else {
                // module not yet in cache
                var packageJson = this.getPackageJson(module.directory);
                var licenseType = this.licenseTypeIdentifier.findLicenseIdentifier(compilation, module.name, packageJson);
                if (this.licensePolicy.isLicenseUnacceptableFor(licenseType)) {
                    this.logger.error(compilation, "unacceptable license found for " + module.name + ": " + licenseType);
                    this.licensePolicy.handleUnacceptableLicense(module.name, licenseType);
                }
                if (this.licensePolicy.isLicenseWrittenFor(licenseType)) {
                    var licenseText = this.licenseTextReader.readLicense(compilation, module, licenseType);
                    moduleCache.registerModule(chunk.name, __assign({ licenseText: licenseText,
                        packageJson: packageJson }, module, { licenseId: licenseType }));
                }
            }
            moduleCache.markSeenForChunk(chunk.name, module.name);
        }
    };
    return PluginChunkReadHandler;
}());
exports.PluginChunkReadHandler = PluginChunkReadHandler;
