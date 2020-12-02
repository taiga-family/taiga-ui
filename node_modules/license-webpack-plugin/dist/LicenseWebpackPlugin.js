"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChunkIncludeExcludeTester_1 = require("./ChunkIncludeExcludeTester");
var PluginChunkReadHandler_1 = require("./PluginChunkReadHandler");
var PluginFileHandler_1 = require("./PluginFileHandler");
var WebpackFileSystem_1 = require("./WebpackFileSystem");
var PluginLicenseTypeIdentifier_1 = require("./PluginLicenseTypeIdentifier");
var LicenseTextReader_1 = require("./LicenseTextReader");
var WebpackCompilerHandler_1 = require("./WebpackCompilerHandler");
var PluginModuleCache_1 = require("./PluginModuleCache");
var WebpackAssetManager_1 = require("./WebpackAssetManager");
var PluginLicensesRenderer_1 = require("./PluginLicensesRenderer");
var PluginLicensePolicy_1 = require("./PluginLicensePolicy");
var PluginLicenseTestRunner_1 = require("./PluginLicenseTestRunner");
var PluginOptionsReader_1 = require("./PluginOptionsReader");
var Logger_1 = require("./Logger");
var LicenseWebpackPlugin = /** @class */ (function () {
    function LicenseWebpackPlugin(pluginOptions) {
        if (pluginOptions === void 0) { pluginOptions = {}; }
        this.pluginOptions = pluginOptions;
    }
    LicenseWebpackPlugin.prototype.apply = function (compiler) {
        var fileSystem = new WebpackFileSystem_1.WebpackFileSystem(compiler.inputFileSystem);
        var optionsReader = new PluginOptionsReader_1.PluginOptionsReader(compiler.context);
        var options = optionsReader.readOptions(this.pluginOptions);
        var logger = new Logger_1.Logger(options.stats);
        var fileHandler = new PluginFileHandler_1.PluginFileHandler(fileSystem, options.buildRoot, options.modulesDirectories, options.excludedPackageTest);
        var licenseTypeIdentifier = new PluginLicenseTypeIdentifier_1.PluginLicenseTypeIdentifier(logger, options.licenseTypeOverrides, options.preferredLicenseTypes, options.handleLicenseAmbiguity, options.handleMissingLicenseType);
        var licenseTextReader = new LicenseTextReader_1.LicenseTextReader(logger, fileSystem, options.licenseFileOverrides, options.licenseTextOverrides, options.licenseTemplateDir, options.handleMissingLicenseText);
        var licenseTestRunner = new PluginLicenseTestRunner_1.PluginLicenseTestRunner(options.licenseInclusionTest);
        var unacceptableLicenseTestRunner = new PluginLicenseTestRunner_1.PluginLicenseTestRunner(options.unacceptableLicenseTest);
        var policy = new PluginLicensePolicy_1.PluginLicensePolicy(licenseTestRunner, unacceptableLicenseTestRunner, options.handleUnacceptableLicense, options.handleMissingLicenseText);
        var readHandler = new PluginChunkReadHandler_1.PluginChunkReadHandler(logger, fileHandler, licenseTypeIdentifier, licenseTextReader, policy, fileSystem);
        var licenseRenderer = new PluginLicensesRenderer_1.PluginLicensesRenderer(options.renderLicenses, options.renderBanner);
        var moduleCache = new PluginModuleCache_1.PluginModuleCache();
        var assetManager = new WebpackAssetManager_1.WebpackAssetManager(options.outputFilename, licenseRenderer);
        var chunkIncludeExcludeTester = new ChunkIncludeExcludeTester_1.ChunkIncludeExcludeTester(options.chunkIncludeExcludeTest);
        var handler = new WebpackCompilerHandler_1.WebpackCompilerHandler(chunkIncludeExcludeTester, readHandler, assetManager, moduleCache, options.addBanner, options.perChunkOutput, options.additionalChunkModules, options.additionalModules);
        handler.handleCompiler(compiler);
    };
    return LicenseWebpackPlugin;
}());
exports.LicenseWebpackPlugin = LicenseWebpackPlugin;
