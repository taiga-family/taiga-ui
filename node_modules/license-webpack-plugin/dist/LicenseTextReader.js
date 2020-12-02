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
var LicenseTextReader = /** @class */ (function () {
    function LicenseTextReader(logger, fileSystem, fileOverrides, textOverrides, templateDir, handleMissingLicenseText) {
        this.logger = logger;
        this.fileSystem = fileSystem;
        this.fileOverrides = fileOverrides;
        this.textOverrides = textOverrides;
        this.templateDir = templateDir;
        this.handleMissingLicenseText = handleMissingLicenseText;
    }
    LicenseTextReader.prototype.readLicense = function (compilation, module, licenseType) {
        if (this.textOverrides[module.name]) {
            return this.textOverrides[module.name];
        }
        if (this.fileOverrides[module.name]) {
            return this.readText(module.directory, this.fileOverrides[module.name]);
        }
        if (licenseType && licenseType.indexOf('SEE LICENSE IN ') === 0) {
            var filename = licenseType.split(' ')[3];
            return this.fileSystem.isFileInDirectory(filename, module.directory)
                ? this.readText(module.directory, filename)
                : null;
        }
        var pathsInModuleDirectory = this.fileSystem.listPaths(module.directory);
        var guessedLicenseFilename = this.guessLicenseFilename(pathsInModuleDirectory, module.directory);
        if (guessedLicenseFilename !== null) {
            return this.readText(module.directory, guessedLicenseFilename);
        }
        if (this.templateDir) {
            var templateFilename = licenseType + ".txt";
            var templateFilePath = this.fileSystem.join(this.templateDir, templateFilename);
            if (this.fileSystem.isFileInDirectory(templateFilePath, this.templateDir)) {
                return this.fileSystem
                    .readFileAsUtf8(templateFilePath)
                    .replace(/\r\n/g, '\n');
            }
        }
        this.logger.warn(compilation, "could not find any license file for " + module.name + ". Use the licenseTextOverrides option to add the license text if desired.");
        return this.handleMissingLicenseText(module.name, licenseType);
    };
    LicenseTextReader.prototype.readText = function (directory, filename) {
        return this.fileSystem
            .readFileAsUtf8(this.fileSystem.join(directory, filename))
            .replace(/\r\n/g, '\n');
    };
    LicenseTextReader.prototype.guessLicenseFilename = function (paths, modulePath) {
        try {
            for (var paths_1 = __values(paths), paths_1_1 = paths_1.next(); !paths_1_1.done; paths_1_1 = paths_1.next()) {
                var path = paths_1_1.value;
                var filePath = this.fileSystem.join(modulePath, path);
                if (/^licen[cs]e/i.test(path) && !this.fileSystem.isDirectory(filePath)) {
                    return path;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (paths_1_1 && !paths_1_1.done && (_a = paths_1.return)) _a.call(paths_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
        var e_1, _a;
    };
    return LicenseTextReader;
}());
exports.LicenseTextReader = LicenseTextReader;
