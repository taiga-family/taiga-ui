(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/packages/configuration", ["require", "exports", "tslib", "crypto", "semver", "vm", "@angular/compiler-cli/src/ngtsc/file_system"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var crypto_1 = require("crypto");
    var semver_1 = require("semver");
    var vm = require("vm");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    /**
     * The default configuration for ngcc.
     *
     * This is the ultimate fallback configuration that ngcc will use if there is no configuration
     * for a package at the package level or project level.
     *
     * This configuration is for packages that are "dead" - i.e. no longer maintained and so are
     * unlikely to be fixed to work with ngcc, nor provide a package level config of their own.
     *
     * The fallback process for looking up configuration is:
     *
     * Project -> Package -> Default
     *
     * If a package provides its own configuration then that would override this default one.
     *
     * Also application developers can always provide configuration at their project level which
     * will override everything else.
     *
     * Note that the fallback is package based not entry-point based.
     * For example, if a there is configuration for a package at the project level this will replace all
     * entry-point configurations that may have been provided in the package level or default level
     * configurations, even if the project level configuration does not provide for a given entry-point.
     */
    exports.DEFAULT_NGCC_CONFIG = {
        packages: {
            // Add default package configuration here. For example:
            // '@angular/fire@^5.2.0': {
            //   entryPoints: {
            //     './database-deprecated': {ignore: true},
            //   },
            // },
            // The package does not contain any `.metadata.json` files in the root directory but only inside
            // `dist/`. Without this config, ngcc does not realize this is a ViewEngine-built Angular
            // package that needs to be compiled to Ivy.
            'angular2-highcharts': {
                entryPoints: {
                    '.': {
                        override: {
                            main: './index.js',
                        },
                    },
                },
            },
            // The `dist/` directory has a duplicate `package.json` pointing to the same files, which (under
            // certain configurations) can causes ngcc to try to process the files twice and fail.
            // Ignore the `dist/` entry-point.
            'ng2-dragula': {
                entryPoints: {
                    './dist': { ignore: true },
                },
            },
        },
    };
    var NGCC_CONFIG_FILENAME = 'ngcc.config.js';
    /**
     * Ngcc has a hierarchical configuration system that lets us "fix up" packages that do not
     * work with ngcc out of the box.
     *
     * There are three levels at which configuration can be declared:
     *
     * * Default level - ngcc comes with built-in configuration for well known cases.
     * * Package level - a library author publishes a configuration with their package to fix known
     *   issues.
     * * Project level - the application developer provides a configuration that fixes issues specific
     *   to the libraries used in their application.
     *
     * Ngcc will match configuration based on the package name but also on its version. This allows
     * configuration to provide different fixes to different version ranges of a package.
     *
     * * Package level configuration is specific to the package version where the configuration is
     *   found.
     * * Default and project level configuration should provide version ranges to ensure that the
     *   configuration is only applied to the appropriate versions of a package.
     *
     * When getting a configuration for a package (via `getConfig()`) the caller should provide the
     * version of the package in question, if available. If it is not provided then the first available
     * configuration for a package is returned.
     */
    var NgccConfiguration = /** @class */ (function () {
        function NgccConfiguration(fs, baseDir) {
            this.fs = fs;
            this.cache = new Map();
            this.defaultConfig = this.processProjectConfig(baseDir, exports.DEFAULT_NGCC_CONFIG);
            this.projectConfig = this.processProjectConfig(baseDir, this.loadProjectConfig(baseDir));
            this.hash = this.computeHash();
        }
        /**
         * Get a configuration for the given `version` of a package at `packagePath`.
         *
         * @param packagePath The path to the package whose config we want.
         * @param version The version of the package whose config we want, or `null` if the package's
         * package.json did not exist or was invalid.
         */
        NgccConfiguration.prototype.getConfig = function (packagePath, version) {
            var cacheKey = packagePath + (version !== null ? "@" + version : '');
            if (this.cache.has(cacheKey)) {
                return this.cache.get(cacheKey);
            }
            var projectLevelConfig = findSatisfactoryVersion(this.projectConfig.packages[packagePath], version);
            if (projectLevelConfig !== null) {
                this.cache.set(cacheKey, projectLevelConfig);
                return projectLevelConfig;
            }
            var packageLevelConfig = this.loadPackageConfig(packagePath, version);
            if (packageLevelConfig !== null) {
                this.cache.set(cacheKey, packageLevelConfig);
                return packageLevelConfig;
            }
            var defaultLevelConfig = findSatisfactoryVersion(this.defaultConfig.packages[packagePath], version);
            if (defaultLevelConfig !== null) {
                this.cache.set(cacheKey, defaultLevelConfig);
                return defaultLevelConfig;
            }
            return { versionRange: '*', entryPoints: {} };
        };
        NgccConfiguration.prototype.processProjectConfig = function (baseDir, projectConfig) {
            var processedConfig = { packages: {} };
            for (var packagePathAndVersion in projectConfig.packages) {
                var packageConfig = projectConfig.packages[packagePathAndVersion];
                if (packageConfig) {
                    var _a = tslib_1.__read(this.splitPathAndVersion(packagePathAndVersion), 2), packagePath = _a[0], _b = _a[1], versionRange = _b === void 0 ? '*' : _b;
                    var absPackagePath = file_system_1.resolve(baseDir, 'node_modules', packagePath);
                    var entryPoints = this.processEntryPoints(absPackagePath, packageConfig);
                    processedConfig.packages[absPackagePath] = processedConfig.packages[absPackagePath] || [];
                    processedConfig.packages[absPackagePath].push(tslib_1.__assign(tslib_1.__assign({}, packageConfig), { versionRange: versionRange, entryPoints: entryPoints }));
                }
            }
            return processedConfig;
        };
        NgccConfiguration.prototype.loadProjectConfig = function (baseDir) {
            var configFilePath = file_system_1.join(baseDir, NGCC_CONFIG_FILENAME);
            if (this.fs.exists(configFilePath)) {
                try {
                    return this.evalSrcFile(configFilePath);
                }
                catch (e) {
                    throw new Error("Invalid project configuration file at \"" + configFilePath + "\": " + e.message);
                }
            }
            else {
                return { packages: {} };
            }
        };
        NgccConfiguration.prototype.loadPackageConfig = function (packagePath, version) {
            var configFilePath = file_system_1.join(packagePath, NGCC_CONFIG_FILENAME);
            if (this.fs.exists(configFilePath)) {
                try {
                    var packageConfig = this.evalSrcFile(configFilePath);
                    return tslib_1.__assign(tslib_1.__assign({}, packageConfig), { versionRange: version || '*', entryPoints: this.processEntryPoints(packagePath, packageConfig) });
                }
                catch (e) {
                    throw new Error("Invalid package configuration file at \"" + configFilePath + "\": " + e.message);
                }
            }
            else {
                return null;
            }
        };
        NgccConfiguration.prototype.evalSrcFile = function (srcPath) {
            var src = this.fs.readFile(srcPath);
            var theExports = {};
            var sandbox = {
                module: { exports: theExports },
                exports: theExports,
                require: require,
                __dirname: file_system_1.dirname(srcPath),
                __filename: srcPath
            };
            vm.runInNewContext(src, sandbox, { filename: srcPath });
            return sandbox.module.exports;
        };
        NgccConfiguration.prototype.processEntryPoints = function (packagePath, packageConfig) {
            var processedEntryPoints = {};
            for (var entryPointPath in packageConfig.entryPoints) {
                // Change the keys to be absolute paths
                processedEntryPoints[file_system_1.resolve(packagePath, entryPointPath)] =
                    packageConfig.entryPoints[entryPointPath];
            }
            return processedEntryPoints;
        };
        NgccConfiguration.prototype.splitPathAndVersion = function (packagePathAndVersion) {
            var versionIndex = packagePathAndVersion.lastIndexOf('@');
            // Note that > 0 is because we don't want to match @ at the start of the line
            // which is what you would have with a namespaced package, e.g. `@angular/common`.
            return versionIndex > 0 ?
                [
                    packagePathAndVersion.substring(0, versionIndex),
                    packagePathAndVersion.substring(versionIndex + 1)
                ] :
                [packagePathAndVersion, undefined];
        };
        NgccConfiguration.prototype.computeHash = function () {
            return crypto_1.createHash('md5').update(JSON.stringify(this.projectConfig)).digest('hex');
        };
        return NgccConfiguration;
    }());
    exports.NgccConfiguration = NgccConfiguration;
    function findSatisfactoryVersion(configs, version) {
        if (configs === undefined) {
            return null;
        }
        if (version === null) {
            // The package has no version (!) - perhaps the entry-point was from a deep import, which made
            // it impossible to find the package.json.
            // So just return the first config that matches the package name.
            return configs[0];
        }
        return configs.find(function (config) { return semver_1.satisfies(version, config.versionRange, { includePrerelease: true }); }) ||
            null;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9wYWNrYWdlcy9jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILGlDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsdUJBQXlCO0lBRXpCLDJFQUFrRztJQStEbEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FzQkc7SUFDVSxRQUFBLG1CQUFtQixHQUFzQjtRQUNwRCxRQUFRLEVBQUU7WUFDUix1REFBdUQ7WUFDdkQsNEJBQTRCO1lBQzVCLG1CQUFtQjtZQUNuQiwrQ0FBK0M7WUFDL0MsT0FBTztZQUNQLEtBQUs7WUFFTCxnR0FBZ0c7WUFDaEcseUZBQXlGO1lBQ3pGLDRDQUE0QztZQUM1QyxxQkFBcUIsRUFBRTtnQkFDckIsV0FBVyxFQUFFO29CQUNYLEdBQUcsRUFBRTt3QkFDSCxRQUFRLEVBQUU7NEJBQ1IsSUFBSSxFQUFFLFlBQVk7eUJBQ25CO3FCQUNGO2lCQUNGO2FBQ0Y7WUFFRCxnR0FBZ0c7WUFDaEcsc0ZBQXNGO1lBQ3RGLGtDQUFrQztZQUNsQyxhQUFhLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFO29CQUNYLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7aUJBQ3pCO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFNRixJQUFNLG9CQUFvQixHQUFHLGdCQUFnQixDQUFDO0lBRTlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVCRztJQUNIO1FBTUUsMkJBQW9CLEVBQWMsRUFBRSxPQUF1QjtZQUF2QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1lBSDFCLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztZQUl4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFP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Q2hELHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2lCQUNsRCxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRU8sdUNBQVcsR0FBbkI7WUFDRSxPQUFPLG1CQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BGLENBQUM7UUFDSCx3QkFBQztJQUFELENBQUMsQUF6SUQsSUF5SUM7SUF6SVksOENBQWlCO0lBMkk5QixTQUFTLHVCQUF1QixDQUFDLE9BQTJDLEVBQUUsT0FBb0I7UUFFaEcsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsOEZBQThGO1lBQzlGLDBDQUEwQztZQUMxQyxpRUFBaUU7WUFDakUsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ1IsVUFBQSxNQUFNLElBQUksT0FBQSxrQkFBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBbEUsQ0FBa0UsQ0FBQztZQUNwRixJQUFJLENBQUM7SUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtjcmVhdGVIYXNofSBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHtzYXRpc2ZpZXN9IGZyb20gJ3NlbXZlcic7XG5pbXBvcnQgKiBhcyB2bSBmcm9tICd2bSc7XG5cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIGRpcm5hbWUsIEZpbGVTeXN0ZW0sIGpvaW4sIHJlc29sdmV9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5cbmltcG9ydCB7UGFja2FnZUpzb25Gb3JtYXRQcm9wZXJ0aWVzTWFwfSBmcm9tICcuL2VudHJ5X3BvaW50JztcblxuLyoqXG4gKiBUaGUgZm9ybWF0IG9mIGEgcHJvamVjdCBsZXZlbCBjb25maWd1cmF0aW9uIGZpbGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdjY1Byb2plY3RDb25maWc8VCA9IE5nY2NQYWNrYWdlQ29uZmlnPiB7XG4gIC8qKlxuICAgKiBUaGUgcGFja2FnZXMgdGhhdCBhcmUgY29uZmlndXJlZCBieSB0aGlzIHByb2plY3QgY29uZmlnLlxuICAgKi9cbiAgcGFja2FnZXM6IHtbcGFja2FnZVBhdGg6IHN0cmluZ106IFR9O1xufVxuXG4vKipcbiAqIFRoZSBmb3JtYXQgb2YgYSBwYWNrYWdlIGxldmVsIGNvbmZpZ3VyYXRpb24gZmlsZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2NjUGFja2FnZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBUaGUgZW50cnktcG9pbnRzIHRvIGNvbmZpZ3VyZSBmb3IgdGhpcyBwYWNrYWdlLlxuICAgKlxuICAgKiBJbiB0aGUgY29uZmlnIGZpbGUgdGhlIGtleXMgY2FuIGJlIHBhdGhzIHJlbGF0aXZlIHRvIHRoZSBwYWNrYWdlIHBhdGg7XG4gICAqIGJ1dCB3aGVuIGJlaW5nIHJlYWQgYmFjayBmcm9tIHRoZSBgTmdjY0NvbmZpZ3VyYXRpb25gIHNlcnZpY2UsIHRoZXNlIHBhdGhzXG4gICAqIHdpbGwgYmUgYWJzb2x1dGUuXG4gICAqL1xuICBlbnRyeVBvaW50czoge1tlbnRyeVBvaW50UGF0aDogc3RyaW5nXTogTmdjY0VudHJ5UG9pbnRDb25maWc7fTtcbiAgLyoqXG4gICAqIEEgY29sbGVjdGlvbiBvZiByZWdleGVzIHRoYXQgbWF0Y2ggZGVlcCBpbXBvcnRzIHRvIGlnbm9yZSwgZm9yIHRoaXMgcGFja2FnZSwgcmF0aGVyIHRoYW5cbiAgICogZGlzcGxheWluZyBhIHdhcm5pbmcuXG4gICAqL1xuICBpZ25vcmFibGVEZWVwSW1wb3J0TWF0Y2hlcnM/OiBSZWdFeHBbXTtcbn1cblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGFuIGVudHJ5LXBvaW50LlxuICpcbiAqIFRoZSBleGlzdGVuY2Ugb2YgYSBjb25maWd1cmF0aW9uIGZvciBhIHBhdGggdGVsbHMgbmdjYyB0aGF0IHRoaXMgc2hvdWxkIGJlIGNvbnNpZGVyZWQgZm9yXG4gKiBwcm9jZXNzaW5nIGFzIGFuIGVudHJ5LXBvaW50LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nY2NFbnRyeVBvaW50Q29uZmlnIHtcbiAgLyoqIERvIG5vdCBwcm9jZXNzIChvciBldmVuIGFja25vd2xlZGdlIHRoZSBleGlzdGVuY2Ugb2YpIHRoaXMgZW50cnktcG9pbnQsIGlmIHRydWUuICovXG4gIGlnbm9yZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGlzIHByb3BlcnR5LCBpZiBwcm92aWRlZCwgaG9sZHMgdmFsdWVzIHRoYXQgd2lsbCBvdmVycmlkZSBlcXVpdmFsZW50IHByb3BlcnRpZXMgaW4gYW5cbiAgICogZW50cnktcG9pbnQncyBwYWNrYWdlLmpzb24gZmlsZS5cbiAgICovXG4gIG92ZXJyaWRlPzogUGFja2FnZUpzb25Gb3JtYXRQcm9wZXJ0aWVzTWFwO1xuXG4gIC8qKlxuICAgKiBOb3JtYWxseSwgbmdjYyB3aWxsIHNraXAgY29tcGlsYXRpb24gb2YgZW50cnlwb2ludHMgdGhhdCBjb250YWluIGltcG9ydHMgdGhhdCBjYW4ndCBiZSByZXNvbHZlZFxuICAgKiBvciB1bmRlcnN0b29kLiBJZiB0aGlzIG9wdGlvbiBpcyBzcGVjaWZpZWQsIG5nY2Mgd2lsbCBwcm9jZWVkIHdpdGggY29tcGlsaW5nIHRoZSBlbnRyeXBvaW50XG4gICAqIGV2ZW4gaW4gdGhlIGZhY2Ugb2Ygc3VjaCBtaXNzaW5nIGRlcGVuZGVuY2llcy5cbiAgICovXG4gIGlnbm9yZU1pc3NpbmdEZXBlbmRlbmNpZXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGluZyB0aGlzIG9wdGlvbiBmb3IgYW4gZW50cnlwb2ludCB0ZWxscyBuZ2NjIHRoYXQgZGVlcCBpbXBvcnRzIG1pZ2h0IGJlIHVzZWQgZm9yIHRoZSBmaWxlc1xuICAgKiBpdCBjb250YWlucywgYW5kIHRoYXQgaXQgc2hvdWxkIGdlbmVyYXRlIHByaXZhdGUgcmUtZXhwb3J0cyBhbG9uZ3NpZGUgdGhlIE5nTW9kdWxlIG9mIGFsbCB0aGVcbiAgICogZGlyZWN0aXZlcy9waXBlcyBpdCBtYWtlcyBhdmFpbGFibGUgaW4gc3VwcG9ydCBvZiB0aG9zZSBpbXBvcnRzLlxuICAgKi9cbiAgZ2VuZXJhdGVEZWVwUmVleHBvcnRzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIGZvciBuZ2NjLlxuICpcbiAqIFRoaXMgaXMgdGhlIHVsdGltYXRlIGZhbGxiYWNrIGNvbmZpZ3VyYXRpb24gdGhhdCBuZ2NjIHdpbGwgdXNlIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyYXRpb25cbiAqIGZvciBhIHBhY2thZ2UgYXQgdGhlIHBhY2thZ2UgbGV2ZWwgb3IgcHJvamVjdCBsZXZlbC5cbiAqXG4gKiBUaGlzIGNvbmZpZ3VyYXRpb24gaXMgZm9yIHBhY2thZ2VzIHRoYXQgYXJlIFwiZGVhZFwiIC0gaS5lLiBubyBsb25nZXIgbWFpbnRhaW5lZCBhbmQgc28gYXJlXG4gKiB1bmxpa2VseSB0byBiZSBmaXhlZCB0byB3b3JrIHdpdGggbmdjYywgbm9yIHByb3ZpZGUgYSBwYWNrYWdlIGxldmVsIGNvbmZpZyBvZiB0aGVpciBvd24uXG4gKlxuICogVGhlIGZhbGxiYWNrIHByb2Nlc3MgZm9yIGxvb2tpbmcgdXAgY29uZmlndXJhdGlvbiBpczpcbiAqXG4gKiBQcm9qZWN0IC0+IFBhY2thZ2UgLT4gRGVmYXVsdFxuICpcbiAqIElmIGEgcGFja2FnZSBwcm92aWRlcyBpdHMgb3duIGNvbmZpZ3VyYXRpb24gdGhlbiB0aGF0IHdvdWxkIG92ZXJyaWRlIHRoaXMgZGVmYXVsdCBvbmUuXG4gKlxuICogQWxzbyBhcHBsaWNhdGlvbiBkZXZlbG9wZXJzIGNhbiBhbHdheXMgcHJvdmlkZSBjb25maWd1cmF0aW9uIGF0IHRoZWlyIHByb2plY3QgbGV2ZWwgd2hpY2hcbiAqIHdpbGwgb3ZlcnJpZGUgZXZlcnl0aGluZyBlbHNlLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgZmFsbGJhY2sgaXMgcGFja2FnZSBiYXNlZCBub3QgZW50cnktcG9pbnQgYmFzZWQuXG4gKiBGb3IgZXhhbXBsZSwgaWYgYSB0aGVyZSBpcyBjb25maWd1cmF0aW9uIGZvciBhIHBhY2thZ2UgYXQgdGhlIHByb2plY3QgbGV2ZWwgdGhpcyB3aWxsIHJlcGxhY2UgYWxsXG4gKiBlbnRyeS1wb2ludCBjb25maWd1cmF0aW9ucyB0aGF0IG1heSBoYXZlIGJlZW4gcHJvdmlkZWQgaW4gdGhlIHBhY2thZ2UgbGV2ZWwgb3IgZGVmYXVsdCBsZXZlbFxuICogY29uZmlndXJhdGlvbnMsIGV2ZW4gaWYgdGhlIHByb2plY3QgbGV2ZWwgY29uZmlndXJhdGlvbiBkb2VzIG5vdCBwcm92aWRlIGZvciBhIGdpdmVuIGVudHJ5LXBvaW50LlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9OR0NDX0NPTkZJRzogTmdjY1Byb2plY3RDb25maWcgPSB7XG4gIHBhY2thZ2VzOiB7XG4gICAgLy8gQWRkIGRlZmF1bHQgcGFja2FnZSBjb25maWd1cmF0aW9uIGhlcmUuIEZvciBleGFtcGxlOlxuICAgIC8vICdAYW5ndWxhci9maXJlQF41LjIuMCc6IHtcbiAgICAvLyAgIGVudHJ5UG9pbnRzOiB7XG4gICAgLy8gICAgICcuL2RhdGFiYXNlLWRlcHJlY2F0ZWQnOiB7aWdub3JlOiB0cnVlfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcblxuICAgIC8vIFRoZSBwYWNrYWdlIGRvZXMgbm90IGNvbnRhaW4gYW55IGAubWV0YWRhdGEuanNvbmAgZmlsZXMgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IGJ1dCBvbmx5IGluc2lkZVxuICAgIC8vIGBkaXN0L2AuIFdpdGhvdXQgdGhpcyBjb25maWcsIG5nY2MgZG9lcyBub3QgcmVhbGl6ZSB0aGlzIGlzIGEgVmlld0VuZ2luZS1idWlsdCBBbmd1bGFyXG4gICAgLy8gcGFja2FnZSB0aGF0IG5lZWRzIHRvIGJlIGNvbXBpbGVkIHRvIEl2eS5cbiAgICAnYW5ndWxhcjItaGlnaGNoYXJ0cyc6IHtcbiAgICAgIGVudHJ5UG9pbnRzOiB7XG4gICAgICAgICcuJzoge1xuICAgICAgICAgIG92ZXJyaWRlOiB7XG4gICAgICAgICAgICBtYWluOiAnLi9pbmRleC5qcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIFRoZSBgZGlzdC9gIGRpcmVjdG9yeSBoYXMgYSBkdXBsaWNhdGUgYHBhY2thZ2UuanNvbmAgcG9pbnRpbmcgdG8gdGhlIHNhbWUgZmlsZXMsIHdoaWNoICh1bmRlclxuICAgIC8vIGNlcnRhaW4gY29uZmlndXJhdGlvbnMpIGNhbiBjYXVzZXMgbmdjYyB0byB0cnkgdG8gcHJvY2VzcyB0aGUgZmlsZXMgdHdpY2UgYW5kIGZhaWwuXG4gICAgLy8gSWdub3JlIHRoZSBgZGlzdC9gIGVudHJ5LXBvaW50LlxuICAgICduZzItZHJhZ3VsYSc6IHtcbiAgICAgIGVudHJ5UG9pbnRzOiB7XG4gICAgICAgICcuL2Rpc3QnOiB7aWdub3JlOiB0cnVlfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG5cbmludGVyZmFjZSBWZXJzaW9uZWRQYWNrYWdlQ29uZmlnIGV4dGVuZHMgTmdjY1BhY2thZ2VDb25maWcge1xuICB2ZXJzaW9uUmFuZ2U6IHN0cmluZztcbn1cblxuY29uc3QgTkdDQ19DT05GSUdfRklMRU5BTUUgPSAnbmdjYy5jb25maWcuanMnO1xuXG4vKipcbiAqIE5nY2MgaGFzIGEgaGllcmFyY2hpY2FsIGNvbmZpZ3VyYXRpb24gc3lzdGVtIHRoYXQgbGV0cyB1cyBcImZpeCB1cFwiIHBhY2thZ2VzIHRoYXQgZG8gbm90XG4gKiB3b3JrIHdpdGggbmdjYyBvdXQgb2YgdGhlIGJveC5cbiAqXG4gKiBUaGVyZSBhcmUgdGhyZWUgbGV2ZWxzIGF0IHdoaWNoIGNvbmZpZ3VyYXRpb24gY2FuIGJlIGRlY2xhcmVkOlxuICpcbiAqICogRGVmYXVsdCBsZXZlbCAtIG5nY2MgY29tZXMgd2l0aCBidWlsdC1pbiBjb25maWd1cmF0aW9uIGZvciB3ZWxsIGtub3duIGNhc2VzLlxuICogKiBQYWNrYWdlIGxldmVsIC0gYSBsaWJyYXJ5IGF1dGhvciBwdWJsaXNoZXMgYSBjb25maWd1cmF0aW9uIHdpdGggdGhlaXIgcGFja2FnZSB0byBmaXgga25vd25cbiAqICAgaXNzdWVzLlxuICogKiBQcm9qZWN0IGxldmVsIC0gdGhlIGFwcGxpY2F0aW9uIGRldmVsb3BlciBwcm92aWRlcyBhIGNvbmZpZ3VyYXRpb24gdGhhdCBmaXhlcyBpc3N1ZXMgc3BlY2lmaWNcbiAqICAgdG8gdGhlIGxpYnJhcmllcyB1c2VkIGluIHRoZWlyIGFwcGxpY2F0aW9uLlxuICpcbiAqIE5nY2Mgd2lsbCBtYXRjaCBjb25maWd1cmF0aW9uIGJhc2VkIG9uIHRoZSBwYWNrYWdlIG5hbWUgYnV0IGFsc28gb24gaXRzIHZlcnNpb24uIFRoaXMgYWxsb3dzXG4gKiBjb25maWd1cmF0aW9uIHRvIHByb3ZpZGUgZGlmZmVyZW50IGZpeGVzIHRvIGRpZmZlcmVudCB2ZXJzaW9uIHJhbmdlcyBvZiBhIHBhY2thZ2UuXG4gKlxuICogKiBQYWNrYWdlIGxldmVsIGNvbmZpZ3VyYXRpb24gaXMgc3BlY2lmaWMgdG8gdGhlIHBhY2thZ2UgdmVyc2lvbiB3aGVyZSB0aGUgY29uZmlndXJhdGlvbiBpc1xuICogICBmb3VuZC5cbiAqICogRGVmYXVsdCBhbmQgcHJvamVjdCBsZXZlbCBjb25maWd1cmF0aW9uIHNob3VsZCBwcm92aWRlIHZlcnNpb24gcmFuZ2VzIHRvIGVuc3VyZSB0aGF0IHRoZVxuICogICBjb25maWd1cmF0aW9uIGlzIG9ubHkgYXBwbGllZCB0byB0aGUgYXBwcm9wcmlhdGUgdmVyc2lvbnMgb2YgYSBwYWNrYWdlLlxuICpcbiAqIFdoZW4gZ2V0dGluZyBhIGNvbmZpZ3VyYXRpb24gZm9yIGEgcGFja2FnZSAodmlhIGBnZXRDb25maWcoKWApIHRoZSBjYWxsZXIgc2hvdWxkIHByb3ZpZGUgdGhlXG4gKiB2ZXJzaW9uIG9mIHRoZSBwYWNrYWdlIGluIHF1ZXN0aW9uLCBpZiBhdmFpbGFibGUuIElmIGl0IGlzIG5vdCBwcm92aWRlZCB0aGVuIHRoZSBmaXJzdCBhdmFpbGFibGVcbiAqIGNvbmZpZ3VyYXRpb24gZm9yIGEgcGFja2FnZSBpcyByZXR1cm5lZC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5nY2NDb25maWd1cmF0aW9uIHtcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBOZ2NjUHJvamVjdENvbmZpZzxWZXJzaW9uZWRQYWNrYWdlQ29uZmlnW10+O1xuICBwcml2YXRlIHByb2plY3RDb25maWc6IE5nY2NQcm9qZWN0Q29uZmlnPFZlcnNpb25lZFBhY2thZ2VDb25maWdbXT47XG4gIHByaXZhdGUgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgVmVyc2lvbmVkUGFja2FnZUNvbmZpZz4oKTtcbiAgcmVhZG9ubHkgaGFzaDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZnM6IEZpbGVTeXN0ZW0sIGJhc2VEaXI6IEFic29sdXRlRnNQYXRoKSB7XG4gICAgdGhpcy5kZWZhdWx0Q29uZmlnID0gdGhpcy5wcm9jZXNzUHJvamVjdENvbmZpZyhiYXNlRGlyLCBERUZBVUxUX05HQ0NfQ09ORklHKTtcbiAgICB0aGlzLnByb2plY3RDb25maWcgPSB0aGlzLnByb2Nlc3NQcm9qZWN0Q29uZmlnKGJhc2VEaXIsIHRoaXMubG9hZFByb2plY3RDb25maWcoYmFzZURpcikpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuY29tcHV0ZUhhc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l2ZW4gYHZlcnNpb25gIG9mIGEgcGFja2FnZSBhdCBgcGFja2FnZVBhdGhgLlxuICAgKlxuICAgKiBAcGFyYW0gcGFja2FnZVBhdGggVGhlIHBhdGggdG8gdGhlIHBhY2thZ2Ugd2hvc2UgY29uZmlnIHdlIHdhbnQuXG4gICAqIEBwYXJhbSB2ZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBwYWNrYWdlIHdob3NlIGNvbmZpZyB3ZSB3YW50LCBvciBgbnVsbGAgaWYgdGhlIHBhY2thZ2Unc1xuICAgKiBwYWNrYWdlLmpzb24gZGlkIG5vdCBleGlzdCBvciB3YXMgaW52YWxpZC5cbiAgICovXG4gIGdldENvbmZpZyhwYWNrYWdlUGF0aDogQWJzb2x1dGVGc1BhdGgsIHZlcnNpb246IHN0cmluZ3xudWxsKTogVmVyc2lvbmVkUGFja2FnZUNvbmZpZyB7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBwYWNrYWdlUGF0aCArICh2ZXJzaW9uICE9PSBudWxsID8gYEAke3ZlcnNpb259YCA6ICcnKTtcbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoY2FjaGVLZXkpITtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0TGV2ZWxDb25maWcgPVxuICAgICAgICBmaW5kU2F0aXNmYWN0b3J5VmVyc2lvbih0aGlzLnByb2plY3RDb25maWcucGFja2FnZXNbcGFja2FnZVBhdGhdLCB2ZXJzaW9uKTtcbiAgICBpZiAocHJvamVjdExldmVsQ29uZmlnICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNhY2hlLnNldChjYWNoZUtleSwgcHJvamVjdExldmVsQ29uZmlnKTtcbiAgICAgIHJldHVybiBwcm9qZWN0TGV2ZWxDb25maWc7XG4gICAgfVxuXG4gICAgY29uc3QgcGFja2FnZUxldmVsQ29uZmlnID0gdGhpcy5sb2FkUGFja2FnZUNvbmZpZyhwYWNrYWdlUGF0aCwgdmVyc2lvbik7XG4gICAgaWYgKHBhY2thZ2VMZXZlbENvbmZpZyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jYWNoZS5zZXQoY2FjaGVLZXksIHBhY2thZ2VMZXZlbENvbmZpZyk7XG4gICAgICByZXR1cm4gcGFja2FnZUxldmVsQ29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRMZXZlbENvbmZpZyA9XG4gICAgICAgIGZpbmRTYXRpc2ZhY3RvcnlWZXJzaW9uKHRoaXMuZGVmYXVsdENvbmZpZy5wYWNrYWdlc1twYWNrYWdlUGF0aF0sIHZlcnNpb24pO1xuICAgIGlmIChkZWZhdWx0TGV2ZWxDb25maWcgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2FjaGUuc2V0KGNhY2hlS2V5LCBkZWZhdWx0TGV2ZWxDb25maWcpO1xuICAgICAgcmV0dXJuIGRlZmF1bHRMZXZlbENvbmZpZztcbiAgICB9XG5cbiAgICByZXR1cm4ge3ZlcnNpb25SYW5nZTogJyonLCBlbnRyeVBvaW50czoge319O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzUHJvamVjdENvbmZpZyhiYXNlRGlyOiBBYnNvbHV0ZUZzUGF0aCwgcHJvamVjdENvbmZpZzogTmdjY1Byb2plY3RDb25maWcpOlxuICAgICAgTmdjY1Byb2plY3RDb25maWc8VmVyc2lvbmVkUGFja2FnZUNvbmZpZ1tdPiB7XG4gICAgY29uc3QgcHJvY2Vzc2VkQ29uZmlnOiBOZ2NjUHJvamVjdENvbmZpZzxWZXJzaW9uZWRQYWNrYWdlQ29uZmlnW10+ID0ge3BhY2thZ2VzOiB7fX07XG4gICAgZm9yIChjb25zdCBwYWNrYWdlUGF0aEFuZFZlcnNpb24gaW4gcHJvamVjdENvbmZpZy5wYWNrYWdlcykge1xuICAgICAgY29uc3QgcGFja2FnZUNvbmZpZyA9IHByb2plY3RDb25maWcucGFja2FnZXNbcGFja2FnZVBhdGhBbmRWZXJzaW9uXTtcbiAgICAgIGlmIChwYWNrYWdlQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IFtwYWNrYWdlUGF0aCwgdmVyc2lvblJhbmdlID0gJyonXSA9IHRoaXMuc3BsaXRQYXRoQW5kVmVyc2lvbihwYWNrYWdlUGF0aEFuZFZlcnNpb24pO1xuICAgICAgICBjb25zdCBhYnNQYWNrYWdlUGF0aCA9IHJlc29sdmUoYmFzZURpciwgJ25vZGVfbW9kdWxlcycsIHBhY2thZ2VQYXRoKTtcbiAgICAgICAgY29uc3QgZW50cnlQb2ludHMgPSB0aGlzLnByb2Nlc3NFbnRyeVBvaW50cyhhYnNQYWNrYWdlUGF0aCwgcGFja2FnZUNvbmZpZyk7XG4gICAgICAgIHByb2Nlc3NlZENvbmZpZy5wYWNrYWdlc1thYnNQYWNrYWdlUGF0aF0gPSBwcm9jZXNzZWRDb25maWcucGFja2FnZXNbYWJzUGFja2FnZVBhdGhdIHx8IFtdO1xuICAgICAgICBwcm9jZXNzZWRDb25maWcucGFja2FnZXNbYWJzUGFja2FnZVBhdGhdLnB1c2goXG4gICAgICAgICAgICB7Li4ucGFja2FnZUNvbmZpZywgdmVyc2lvblJhbmdlLCBlbnRyeVBvaW50c30pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvY2Vzc2VkQ29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUHJvamVjdENvbmZpZyhiYXNlRGlyOiBBYnNvbHV0ZUZzUGF0aCk6IE5nY2NQcm9qZWN0Q29uZmlnIHtcbiAgICBjb25zdCBjb25maWdGaWxlUGF0aCA9IGpvaW4oYmFzZURpciwgTkdDQ19DT05GSUdfRklMRU5BTUUpO1xuICAgIGlmICh0aGlzLmZzLmV4aXN0cyhjb25maWdGaWxlUGF0aCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWxTcmNGaWxlKGNvbmZpZ0ZpbGVQYXRoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByb2plY3QgY29uZmlndXJhdGlvbiBmaWxlIGF0IFwiJHtjb25maWdGaWxlUGF0aH1cIjogYCArIGUubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7cGFja2FnZXM6IHt9fTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRQYWNrYWdlQ29uZmlnKHBhY2thZ2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCwgdmVyc2lvbjogc3RyaW5nfG51bGwpOlxuICAgICAgVmVyc2lvbmVkUGFja2FnZUNvbmZpZ3xudWxsIHtcbiAgICBjb25zdCBjb25maWdGaWxlUGF0aCA9IGpvaW4ocGFja2FnZVBhdGgsIE5HQ0NfQ09ORklHX0ZJTEVOQU1FKTtcbiAgICBpZiAodGhpcy5mcy5leGlzdHMoY29uZmlnRmlsZVBhdGgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYWNrYWdlQ29uZmlnID0gdGhpcy5ldmFsU3JjRmlsZShjb25maWdGaWxlUGF0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucGFja2FnZUNvbmZpZyxcbiAgICAgICAgICB2ZXJzaW9uUmFuZ2U6IHZlcnNpb24gfHwgJyonLFxuICAgICAgICAgIGVudHJ5UG9pbnRzOiB0aGlzLnByb2Nlc3NFbnRyeVBvaW50cyhwYWNrYWdlUGF0aCwgcGFja2FnZUNvbmZpZyksXG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYWNrYWdlIGNvbmZpZ3VyYXRpb24gZmlsZSBhdCBcIiR7Y29uZmlnRmlsZVBhdGh9XCI6IGAgKyBlLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV2YWxTcmNGaWxlKHNyY1BhdGg6IEFic29sdXRlRnNQYXRoKTogYW55IHtcbiAgICBjb25zdCBzcmMgPSB0aGlzLmZzLnJlYWRGaWxlKHNyY1BhdGgpO1xuICAgIGNvbnN0IHRoZUV4cG9ydHMgPSB7fTtcbiAgICBjb25zdCBzYW5kYm94ID0ge1xuICAgICAgbW9kdWxlOiB7ZXhwb3J0czogdGhlRXhwb3J0c30sXG4gICAgICBleHBvcnRzOiB0aGVFeHBvcnRzLFxuICAgICAgcmVxdWlyZSxcbiAgICAgIF9fZGlybmFtZTogZGlybmFtZShzcmNQYXRoKSxcbiAgICAgIF9fZmlsZW5hbWU6IHNyY1BhdGhcbiAgICB9O1xuICAgIHZtLnJ1bkluTmV3Q29udGV4dChzcmMsIHNhbmRib3gsIHtmaWxlbmFtZTogc3JjUGF0aH0pO1xuICAgIHJldHVybiBzYW5kYm94Lm1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzRW50cnlQb2ludHMocGFja2FnZVBhdGg6IEFic29sdXRlRnNQYXRoLCBwYWNrYWdlQ29uZmlnOiBOZ2NjUGFja2FnZUNvbmZpZyk6XG4gICAgICB7W2VudHJ5UG9pbnRQYXRoOiBzdHJpbmddOiBOZ2NjRW50cnlQb2ludENvbmZpZzt9IHtcbiAgICBjb25zdCBwcm9jZXNzZWRFbnRyeVBvaW50czoge1tlbnRyeVBvaW50UGF0aDogc3RyaW5nXTogTmdjY0VudHJ5UG9pbnRDb25maWc7fSA9IHt9O1xuICAgIGZvciAoY29uc3QgZW50cnlQb2ludFBhdGggaW4gcGFja2FnZUNvbmZpZy5lbnRyeVBvaW50cykge1xuICAgICAgLy8gQ2hhbmdlIHRoZSBrZXlzIHRvIGJlIGFic29sdXRlIHBhdGhzXG4gICAgICBwcm9jZXNzZWRFbnRyeVBvaW50c1tyZXNvbHZlKHBhY2thZ2VQYXRoLCBlbnRyeVBvaW50UGF0aCldID1cbiAgICAgICAgICBwYWNrYWdlQ29uZmlnLmVudHJ5UG9pbnRzW2VudHJ5UG9pbnRQYXRoXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2Nlc3NlZEVudHJ5UG9pbnRzO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGxpdFBhdGhBbmRWZXJzaW9uKHBhY2thZ2VQYXRoQW5kVmVyc2lvbjogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nfHVuZGVmaW5lZF0ge1xuICAgIGNvbnN0IHZlcnNpb25JbmRleCA9IHBhY2thZ2VQYXRoQW5kVmVyc2lvbi5sYXN0SW5kZXhPZignQCcpO1xuICAgIC8vIE5vdGUgdGhhdCA+IDAgaXMgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIG1hdGNoIEAgYXQgdGhlIHN0YXJ0IG9mIHRoZSBsaW5lXG4gICAgLy8gd2hpY2ggaXMgd2hhdCB5b3Ugd291bGQgaGF2ZSB3aXRoIGEgbmFtZXNwYWNlZCBwYWNrYWdlLCBlLmcuIGBAYW5ndWxhci9jb21tb25gLlxuICAgIHJldHVybiB2ZXJzaW9uSW5kZXggPiAwID9cbiAgICAgICAgW1xuICAgICAgICAgIHBhY2thZ2VQYXRoQW5kVmVyc2lvbi5zdWJzdHJpbmcoMCwgdmVyc2lvbkluZGV4KSxcbiAgICAgICAgICBwYWNrYWdlUGF0aEFuZFZlcnNpb24uc3Vic3RyaW5nKHZlcnNpb25JbmRleCArIDEpXG4gICAgICAgIF0gOlxuICAgICAgICBbcGFja2FnZVBhdGhBbmRWZXJzaW9uLCB1bmRlZmluZWRdO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlSGFzaCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBjcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0Q29uZmlnKSkuZGlnZXN0KCdoZXgnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kU2F0aXNmYWN0b3J5VmVyc2lvbihjb25maWdzOiBWZXJzaW9uZWRQYWNrYWdlQ29uZmlnW118dW5kZWZpbmVkLCB2ZXJzaW9uOiBzdHJpbmd8bnVsbCk6XG4gICAgVmVyc2lvbmVkUGFja2FnZUNvbmZpZ3xudWxsIHtcbiAgaWYgKGNvbmZpZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSBudWxsKSB7XG4gICAgLy8gVGhlIHBhY2thZ2UgaGFzIG5vIHZlcnNpb24gKCEpIC0gcGVyaGFwcyB0aGUgZW50cnktcG9pbnQgd2FzIGZyb20gYSBkZWVwIGltcG9ydCwgd2hpY2ggbWFkZVxuICAgIC8vIGl0IGltcG9zc2libGUgdG8gZmluZCB0aGUgcGFja2FnZS5qc29uLlxuICAgIC8vIFNvIGp1c3QgcmV0dXJuIHRoZSBmaXJzdCBjb25maWcgdGhhdCBtYXRjaGVzIHRoZSBwYWNrYWdlIG5hbWUuXG4gICAgcmV0dXJuIGNvbmZpZ3NbMF07XG4gIH1cbiAgcmV0dXJuIGNvbmZpZ3MuZmluZChcbiAgICAgICAgICAgICBjb25maWcgPT4gc2F0aXNmaWVzKHZlcnNpb24sIGNvbmZpZy52ZXJzaW9uUmFuZ2UsIHtpbmNsdWRlUHJlcmVsZWFzZTogdHJ1ZX0pKSB8fFxuICAgICAgbnVsbDtcbn1cbiJdfQ==