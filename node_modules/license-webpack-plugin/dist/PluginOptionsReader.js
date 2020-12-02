"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginOptionsReader = /** @class */ (function () {
    function PluginOptionsReader(context) {
        this.context = context;
    }
    PluginOptionsReader.prototype.readOptions = function (options) {
        var licenseInclusionTest = options.licenseInclusionTest || (function () { return true; });
        var unacceptableLicenseTest = options.unacceptableLicenseTest || (function () { return false; });
        var perChunkOutput = options.perChunkOutput === undefined;
        var licenseTemplateDir = options.licenseTemplateDir;
        var licenseTextOverrides = options.licenseTextOverrides || {};
        var licenseTypeOverrides = options.licenseTypeOverrides || {};
        var handleUnacceptableLicense = options.handleUnacceptableLicense || (function () { });
        var handleMissingLicenseText = options.handleMissingLicenseText || (function () { return null; });
        var renderLicenses = options.renderLicenses ||
            (function (modules) {
                return modules
                    .sort(function (left, right) {
                    return left.name < right.name ? -1 : 1;
                })
                    .reduce(function (file, module) {
                    return "" + file + module.name + (module.licenseId ? "\n" + module.licenseId : '') + (module.licenseText ? "\n" + module.licenseText : '') + "\n\n";
                }, '')
                    .trim() + "\n";
            });
        var renderBanner = options.renderBanner ||
            (function (filename) {
                return "/*! License information is available at " + filename + " */";
            });
        var outputFilename = options.outputFilename ||
            (perChunkOutput ? '[name].licenses.txt' : 'licenses.txt');
        var addBanner = options.addBanner === undefined ? false : options.addBanner;
        var chunkIncludeExcludeTest = options.chunkIncludeExcludeTest || (function () { return true; });
        var modulesDirectories = options.modulesDirectories || null;
        var additionalChunkModules = options.additionalChunkModules || {};
        var additionalModules = options.additionalModules || [];
        var preferredLicenseTypes = options.preferredLicenseTypes || [];
        var handleLicenseAmbiguity = options.handleLicenseAmbiguity ||
            (function (_packageName, licenses) {
                return licenses[0].type;
            });
        var handleMissingLicenseType = options.handleMissingLicenseType || (function () { return null; });
        var licenseFileOverrides = options.licenseFileOverrides || {};
        var excludedPackageTest = options.excludedPackageTest || (function () { return false; });
        var stats = {
            warnings: options.stats && options.stats.warnings !== undefined
                ? options.stats.warnings
                : true,
            errors: options.stats && options.stats.errors !== undefined
                ? options.stats.errors
                : true
        };
        var constructedOptions = {
            licenseInclusionTest: licenseInclusionTest,
            unacceptableLicenseTest: unacceptableLicenseTest,
            perChunkOutput: perChunkOutput,
            licenseTemplateDir: licenseTemplateDir,
            licenseTextOverrides: licenseTextOverrides,
            licenseFileOverrides: licenseFileOverrides,
            licenseTypeOverrides: licenseTypeOverrides,
            handleUnacceptableLicense: handleUnacceptableLicense,
            handleMissingLicenseText: handleMissingLicenseText,
            renderLicenses: renderLicenses,
            renderBanner: renderBanner,
            outputFilename: outputFilename,
            addBanner: addBanner,
            chunkIncludeExcludeTest: chunkIncludeExcludeTest,
            modulesDirectories: modulesDirectories,
            additionalChunkModules: additionalChunkModules,
            additionalModules: additionalModules,
            preferredLicenseTypes: preferredLicenseTypes,
            handleLicenseAmbiguity: handleLicenseAmbiguity,
            handleMissingLicenseType: handleMissingLicenseType,
            excludedPackageTest: excludedPackageTest,
            stats: stats,
            buildRoot: this.context
        };
        return constructedOptions;
    };
    return PluginOptionsReader;
}());
exports.PluginOptionsReader = PluginOptionsReader;
