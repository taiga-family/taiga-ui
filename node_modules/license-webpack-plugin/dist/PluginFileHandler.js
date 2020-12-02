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
var PluginFileHandler = /** @class */ (function () {
    function PluginFileHandler(fileSystem, buildRoot, modulesDirectories, excludedPackageTest) {
        this.fileSystem = fileSystem;
        this.buildRoot = buildRoot;
        this.modulesDirectories = modulesDirectories;
        this.excludedPackageTest = excludedPackageTest;
    }
    PluginFileHandler.prototype.getModule = function (filename) {
        if (filename === null || filename === undefined) {
            return null;
        }
        if (this.modulesDirectories !== null) {
            var foundInModuleDirectory = false;
            try {
                for (var _a = __values(this.modulesDirectories), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var modulesDirectory = _b.value;
                    if (this.fileSystem.isFileInDirectory(filename, modulesDirectory)) {
                        foundInModuleDirectory = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (!foundInModuleDirectory) {
                return null;
            }
        }
        var module = this.findModuleDir(filename);
        if (module !== null && this.excludedPackageTest(module.name)) {
            return null;
        }
        return module;
        var e_1, _c;
    };
    PluginFileHandler.prototype.findModuleDir = function (filename) {
        var pathSeparator = this.fileSystem.pathSeparator;
        var dirOfModule = filename.substring(0, filename.lastIndexOf(pathSeparator));
        var oldDirOfModule = null;
        while (!this.dirContainsValidPackageJson(dirOfModule)) {
            // check parent directory
            oldDirOfModule = dirOfModule;
            dirOfModule = this.fileSystem.resolvePath("" + dirOfModule + pathSeparator + ".." + pathSeparator);
            // reached filesystem root
            if (oldDirOfModule === dirOfModule) {
                return null;
            }
        }
        if (this.buildRoot === dirOfModule) {
            return null;
        }
        var packageJson = this.parsePackageJson(dirOfModule);
        return {
            name: packageJson.name,
            directory: dirOfModule
        };
    };
    PluginFileHandler.prototype.parsePackageJson = function (dirOfModule) {
        var packageJsonText = this.fileSystem.readFileAsUtf8(this.fileSystem.join(dirOfModule, PluginFileHandler.PACKAGE_JSON));
        var packageJson = JSON.parse(packageJsonText);
        return packageJson;
    };
    PluginFileHandler.prototype.dirContainsValidPackageJson = function (dirOfModule) {
        if (!this.fileSystem.pathExists(this.fileSystem.join(dirOfModule, PluginFileHandler.PACKAGE_JSON))) {
            return false;
        }
        var packageJson = this.parsePackageJson(dirOfModule);
        return !!packageJson.name;
    };
    PluginFileHandler.PACKAGE_JSON = 'package.json';
    return PluginFileHandler;
}());
exports.PluginFileHandler = PluginFileHandler;
