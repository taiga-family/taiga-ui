(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/packages/entry_point_manifest", ["require", "exports", "tslib", "crypto", "@angular/compiler-cli/ngcc/src/packages/build_marker", "@angular/compiler-cli/ngcc/src/packages/entry_point"], factory);
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
    var build_marker_1 = require("@angular/compiler-cli/ngcc/src/packages/build_marker");
    var entry_point_1 = require("@angular/compiler-cli/ngcc/src/packages/entry_point");
    /**
     * Manages reading and writing a manifest file that contains a list of all the entry-points that
     * were found below a given basePath.
     *
     * This is a super-set of the entry-points that are actually processed for a given run of ngcc,
     * since some may already be processed, or excluded if they do not have the required format.
     */
    var EntryPointManifest = /** @class */ (function () {
        function EntryPointManifest(fs, config, logger) {
            this.fs = fs;
            this.config = config;
            this.logger = logger;
        }
        /**
         * Try to get the entry-point info from a manifest file for the given `basePath` if it exists and
         * is not out of date.
         *
         * Reasons for the manifest to be out of date are:
         *
         * * the file does not exist
         * * the ngcc version has changed
         * * the package lock-file (i.e. yarn.lock or package-lock.json) has changed
         * * the project configuration has changed
         * * one or more entry-points in the manifest are not valid
         *
         * @param basePath The path that would contain the entry-points and the manifest file.
         * @returns an array of entry-point information for all entry-points found below the given
         * `basePath` or `null` if the manifest was out of date.
         */
        EntryPointManifest.prototype.readEntryPointsUsingManifest = function (basePath) {
            var e_1, _a;
            try {
                if (this.fs.basename(basePath) !== 'node_modules') {
                    return null;
                }
                var manifestPath = this.getEntryPointManifestPath(basePath);
                if (!this.fs.exists(manifestPath)) {
                    return null;
                }
                var computedLockFileHash = this.computeLockFileHash(basePath);
                if (computedLockFileHash === null) {
                    return null;
                }
                var _b = JSON.parse(this.fs.readFile(manifestPath)), ngccVersion = _b.ngccVersion, configFileHash = _b.configFileHash, lockFileHash = _b.lockFileHash, entryPointPaths = _b.entryPointPaths;
                if (ngccVersion !== build_marker_1.NGCC_VERSION || configFileHash !== this.config.hash ||
                    lockFileHash !== computedLockFileHash) {
                    return null;
                }
                this.logger.debug("Entry-point manifest found for " + basePath + " so loading entry-point information directly.");
                var startTime = Date.now();
                var entryPoints = [];
                try {
                    for (var entryPointPaths_1 = tslib_1.__values(entryPointPaths), entryPointPaths_1_1 = entryPointPaths_1.next(); !entryPointPaths_1_1.done; entryPointPaths_1_1 = entryPointPaths_1.next()) {
                        var _c = tslib_1.__read(entryPointPaths_1_1.value, 5), packagePath = _c[0], entryPointPath = _c[1], _d = _c[2], dependencyPaths = _d === void 0 ? [] : _d, _e = _c[3], missingPaths = _e === void 0 ? [] : _e, _f = _c[4], deepImportPaths = _f === void 0 ? [] : _f;
                        var result = entry_point_1.getEntryPointInfo(this.fs, this.config, this.logger, this.fs.resolve(basePath, packagePath), this.fs.resolve(basePath, entryPointPath));
                        if (result === entry_point_1.NO_ENTRY_POINT || result === entry_point_1.INCOMPATIBLE_ENTRY_POINT) {
                            throw new Error("The entry-point manifest at " + manifestPath + " contained an invalid pair of package paths: [" + packagePath + ", " + entryPointPath + "]");
                        }
                        else {
                            entryPoints.push({
                                entryPoint: result,
                                depInfo: {
                                    dependencies: new Set(dependencyPaths),
                                    missing: new Set(missingPaths),
                                    deepImports: new Set(deepImportPaths),
                                }
                            });
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (entryPointPaths_1_1 && !entryPointPaths_1_1.done && (_a = entryPointPaths_1.return)) _a.call(entryPointPaths_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var duration = Math.round((Date.now() - startTime) / 100) / 10;
                this.logger.debug("Reading entry-points using the manifest entries took " + duration + "s.");
                return entryPoints;
            }
            catch (e) {
                this.logger.warn("Unable to read the entry-point manifest for " + basePath + ":\n", e.stack || e.toString());
                return null;
            }
        };
        /**
         * Write a manifest file at the given `basePath`.
         *
         * The manifest includes the current ngcc version and hashes of the package lock-file and current
         * project config. These will be used to check whether the manifest file is out of date. See
         * `readEntryPointsUsingManifest()`.
         *
         * @param basePath The path where the manifest file is to be written.
         * @param entryPoints A collection of entry-points to record in the manifest.
         */
        EntryPointManifest.prototype.writeEntryPointManifest = function (basePath, entryPoints) {
            var _this = this;
            if (this.fs.basename(basePath) !== 'node_modules') {
                return;
            }
            var lockFileHash = this.computeLockFileHash(basePath);
            if (lockFileHash === null) {
                return;
            }
            var manifest = {
                ngccVersion: build_marker_1.NGCC_VERSION,
                configFileHash: this.config.hash,
                lockFileHash: lockFileHash,
                entryPointPaths: entryPoints.map(function (e) {
                    var entryPointPaths = [
                        _this.fs.relative(basePath, e.entryPoint.package),
                        _this.fs.relative(basePath, e.entryPoint.path),
                    ];
                    // Only add depInfo arrays if needed.
                    if (e.depInfo.dependencies.size > 0) {
                        entryPointPaths[2] = Array.from(e.depInfo.dependencies);
                    }
                    else if (e.depInfo.missing.size > 0 || e.depInfo.deepImports.size > 0) {
                        entryPointPaths[2] = [];
                    }
                    if (e.depInfo.missing.size > 0) {
                        entryPointPaths[3] = Array.from(e.depInfo.missing);
                    }
                    else if (e.depInfo.deepImports.size > 0) {
                        entryPointPaths[3] = [];
                    }
                    if (e.depInfo.deepImports.size > 0) {
                        entryPointPaths[4] = Array.from(e.depInfo.deepImports);
                    }
                    return entryPointPaths;
                }),
            };
            this.fs.writeFile(this.getEntryPointManifestPath(basePath), JSON.stringify(manifest));
        };
        EntryPointManifest.prototype.getEntryPointManifestPath = function (basePath) {
            return this.fs.resolve(basePath, '__ngcc_entry_points__.json');
        };
        EntryPointManifest.prototype.computeLockFileHash = function (basePath) {
            var e_2, _a;
            var directory = this.fs.dirname(basePath);
            try {
                for (var _b = tslib_1.__values(['yarn.lock', 'package-lock.json']), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var lockFileName = _c.value;
                    var lockFilePath = this.fs.resolve(directory, lockFileName);
                    if (this.fs.exists(lockFilePath)) {
                        var lockFileContents = this.fs.readFile(lockFilePath);
                        return crypto_1.createHash('md5').update(lockFileContents).digest('hex');
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return null;
        };
        return EntryPointManifest;
    }());
    exports.EntryPointManifest = EntryPointManifest;
    /**
     * A specialized implementation of the `EntryPointManifest` that can be used to invalidate the
     * current manifest file.
     *
     * It always returns `null` from the `readEntryPointsUsingManifest()` method, which forces a new
     * manifest to be created, which will overwrite the current file when `writeEntryPointManifest()`
     * is called.
     */
    var InvalidatingEntryPointManifest = /** @class */ (function (_super) {
        tslib_1.__extends(InvalidatingEntryPointManifest, _super);
        function InvalidatingEntryPointManifest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InvalidatingEntryPointManifest.prototype.readEntryPointsUsingManifest = function (_basePath) {
            return null;
        };
        return InvalidatingEntryPointManifest;
    }(EntryPointManifest));
    exports.InvalidatingEntryPointManifest = InvalidatingEntryPointManifest;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlfcG9pbnRfbWFuaWZlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvcGFja2FnZXMvZW50cnlfcG9pbnRfbWFuaWZlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsaUNBQWtDO0lBTWxDLHFGQUE0QztJQUU1QyxtRkFBMEY7SUFFMUY7Ozs7OztPQU1HO0lBQ0g7UUFDRSw0QkFBb0IsRUFBYyxFQUFVLE1BQXlCLEVBQVUsTUFBYztZQUF6RSxPQUFFLEdBQUYsRUFBRSxDQUFZO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQUcsQ0FBQztRQUVqRzs7Ozs7Ozs7Ozs7Ozs7O1dBZUc7UUFDSCx5REFBNEIsR0FBNUIsVUFBNkIsUUFBd0I7O1lBQ25ELElBQUk7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxjQUFjLEVBQUU7b0JBQ2pELE9BQU8sSUFBSSxDQUFDO2lCQUNiO2dCQUVELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNqQyxPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFFRCxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7b0JBQ2pDLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2dCQUVLLElBQUEsK0NBQ2tFLEVBRGpFLDRCQUFXLEVBQUUsa0NBQWMsRUFBRSw4QkFBWSxFQUFFLG9DQUNzQixDQUFDO2dCQUN6RSxJQUFJLFdBQVcsS0FBSywyQkFBWSxJQUFJLGNBQWMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ25FLFlBQVksS0FBSyxvQkFBb0IsRUFBRTtvQkFDekMsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0NBQ2QsUUFBUSxrREFBK0MsQ0FBQyxDQUFDO2dCQUM3RCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRTdCLElBQU0sV0FBVyxHQUFpQyxFQUFFLENBQUM7O29CQUNyRCxLQUVnRSxJQUFBLG9CQUFBLGlCQUFBLGVBQWUsQ0FBQSxnREFBQSw2RUFBRTt3QkFEeEUsSUFBQSxpREFDbUQsRUFEbEQsbUJBQVcsRUFBRSxzQkFBYyxFQUFFLFVBQW9CLEVBQXBCLHlDQUFvQixFQUFFLFVBQWlCLEVBQWpCLHNDQUFpQixFQUN2QyxVQUFvQixFQUFwQix5Q0FBb0I7d0JBQ3pELElBQU0sTUFBTSxHQUFHLCtCQUFpQixDQUM1QixJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQ3pFLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLE1BQU0sS0FBSyw0QkFBYyxJQUFJLE1BQU0sS0FBSyxzQ0FBd0IsRUFBRTs0QkFDcEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FDWixZQUFZLHNEQUFpRCxXQUFXLFVBQ3hFLGNBQWMsTUFBRyxDQUFDLENBQUM7eUJBQ3hCOzZCQUFNOzRCQUNMLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0NBQ2YsVUFBVSxFQUFFLE1BQU07Z0NBQ2xCLE9BQU8sRUFBRTtvQ0FDUCxZQUFZLEVBQUUsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDO29DQUN0QyxPQUFPLEVBQUUsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDO29DQUM5QixXQUFXLEVBQUUsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDO2lDQUN0Qzs2QkFDRixDQUFDLENBQUM7eUJBQ0o7cUJBQ0Y7Ozs7Ozs7OztnQkFDRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMERBQXdELFFBQVEsT0FBSSxDQUFDLENBQUM7Z0JBQ3hGLE9BQU8sV0FBVyxDQUFDO2FBQ3BCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1osaURBQStDLFFBQVEsUUFBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzNGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0gsb0RBQXVCLEdBQXZCLFVBQXdCLFFBQXdCLEVBQUUsV0FBeUM7WUFBM0YsaUJBcUNDO1lBbkNDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssY0FBYyxFQUFFO2dCQUNqRCxPQUFPO2FBQ1I7WUFFRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUN6QixPQUFPO2FBQ1I7WUFDRCxJQUFNLFFBQVEsR0FBMkI7Z0JBQ3ZDLFdBQVcsRUFBRSwyQkFBWTtnQkFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDaEMsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLGVBQWUsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztvQkFDaEMsSUFBTSxlQUFlLEdBQW9CO3dCQUN2QyxLQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7d0JBQ2hELEtBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztxQkFDOUMsQ0FBQztvQkFDRixxQ0FBcUM7b0JBQ3JDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTt3QkFDbkMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDekQ7eUJBQU0sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7d0JBQ3ZFLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7cUJBQ3pCO29CQUNELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTt3QkFDOUIsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDcEQ7eUJBQU0sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO3dCQUN6QyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUN6QjtvQkFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ3hEO29CQUNELE9BQU8sZUFBZSxDQUFDO2dCQUN6QixDQUFDLENBQUM7YUFDSCxDQUFDO1lBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4RixDQUFDO1FBRU8sc0RBQXlCLEdBQWpDLFVBQWtDLFFBQXdCO1lBQ3hELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDakUsQ0FBQztRQUVPLGdEQUFtQixHQUEzQixVQUE0QixRQUF3Qjs7WUFDbEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O2dCQUM1QyxLQUEyQixJQUFBLEtBQUEsaUJBQUEsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBMUQsSUFBTSxZQUFZLFdBQUE7b0JBQ3JCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTt3QkFDaEMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDeEQsT0FBTyxtQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDakU7aUJBQ0Y7Ozs7Ozs7OztZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNILHlCQUFDO0lBQUQsQ0FBQyxBQTlJRCxJQThJQztJQTlJWSxnREFBa0I7SUFnSi9COzs7Ozs7O09BT0c7SUFDSDtRQUFvRCwwREFBa0I7UUFBdEU7O1FBSUEsQ0FBQztRQUhDLHFFQUE0QixHQUE1QixVQUE2QixTQUF5QjtZQUNwRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDSCxxQ0FBQztJQUFELENBQUMsQUFKRCxDQUFvRCxrQkFBa0IsR0FJckU7SUFKWSx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2NyZWF0ZUhhc2h9IGZyb20gJ2NyeXB0byc7XG5cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIEZpbGVTeXN0ZW0sIFBhdGhTZWdtZW50fSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtFbnRyeVBvaW50V2l0aERlcGVuZGVuY2llc30gZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2RlcGVuZGVuY3lfaG9zdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2luZy9sb2dnZXInO1xuXG5pbXBvcnQge05HQ0NfVkVSU0lPTn0gZnJvbSAnLi9idWlsZF9tYXJrZXInO1xuaW1wb3J0IHtOZ2NjQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7Z2V0RW50cnlQb2ludEluZm8sIElOQ09NUEFUSUJMRV9FTlRSWV9QT0lOVCwgTk9fRU5UUllfUE9JTlR9IGZyb20gJy4vZW50cnlfcG9pbnQnO1xuXG4vKipcbiAqIE1hbmFnZXMgcmVhZGluZyBhbmQgd3JpdGluZyBhIG1hbmlmZXN0IGZpbGUgdGhhdCBjb250YWlucyBhIGxpc3Qgb2YgYWxsIHRoZSBlbnRyeS1wb2ludHMgdGhhdFxuICogd2VyZSBmb3VuZCBiZWxvdyBhIGdpdmVuIGJhc2VQYXRoLlxuICpcbiAqIFRoaXMgaXMgYSBzdXBlci1zZXQgb2YgdGhlIGVudHJ5LXBvaW50cyB0aGF0IGFyZSBhY3R1YWxseSBwcm9jZXNzZWQgZm9yIGEgZ2l2ZW4gcnVuIG9mIG5nY2MsXG4gKiBzaW5jZSBzb21lIG1heSBhbHJlYWR5IGJlIHByb2Nlc3NlZCwgb3IgZXhjbHVkZWQgaWYgdGhleSBkbyBub3QgaGF2ZSB0aGUgcmVxdWlyZWQgZm9ybWF0LlxuICovXG5leHBvcnQgY2xhc3MgRW50cnlQb2ludE1hbmlmZXN0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmczogRmlsZVN5c3RlbSwgcHJpdmF0ZSBjb25maWc6IE5nY2NDb25maWd1cmF0aW9uLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7fVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gZ2V0IHRoZSBlbnRyeS1wb2ludCBpbmZvIGZyb20gYSBtYW5pZmVzdCBmaWxlIGZvciB0aGUgZ2l2ZW4gYGJhc2VQYXRoYCBpZiBpdCBleGlzdHMgYW5kXG4gICAqIGlzIG5vdCBvdXQgb2YgZGF0ZS5cbiAgICpcbiAgICogUmVhc29ucyBmb3IgdGhlIG1hbmlmZXN0IHRvIGJlIG91dCBvZiBkYXRlIGFyZTpcbiAgICpcbiAgICogKiB0aGUgZmlsZSBkb2VzIG5vdCBleGlzdFxuICAgKiAqIHRoZSBuZ2NjIHZlcnNpb24gaGFzIGNoYW5nZWRcbiAgICogKiB0aGUgcGFja2FnZSBsb2NrLWZpbGUgKGkuZS4geWFybi5sb2NrIG9yIHBhY2thZ2UtbG9jay5qc29uKSBoYXMgY2hhbmdlZFxuICAgKiAqIHRoZSBwcm9qZWN0IGNvbmZpZ3VyYXRpb24gaGFzIGNoYW5nZWRcbiAgICogKiBvbmUgb3IgbW9yZSBlbnRyeS1wb2ludHMgaW4gdGhlIG1hbmlmZXN0IGFyZSBub3QgdmFsaWRcbiAgICpcbiAgICogQHBhcmFtIGJhc2VQYXRoIFRoZSBwYXRoIHRoYXQgd291bGQgY29udGFpbiB0aGUgZW50cnktcG9pbnRzIGFuZCB0aGUgbWFuaWZlc3QgZmlsZS5cbiAgICogQHJldHVybnMgYW4gYXJyYXkgb2YgZW50cnktcG9pbnQgaW5mb3JtYXRpb24gZm9yIGFsbCBlbnRyeS1wb2ludHMgZm91bmQgYmVsb3cgdGhlIGdpdmVuXG4gICAqIGBiYXNlUGF0aGAgb3IgYG51bGxgIGlmIHRoZSBtYW5pZmVzdCB3YXMgb3V0IG9mIGRhdGUuXG4gICAqL1xuICByZWFkRW50cnlQb2ludHNVc2luZ01hbmlmZXN0KGJhc2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IEVudHJ5UG9pbnRXaXRoRGVwZW5kZW5jaWVzW118bnVsbCB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmZzLmJhc2VuYW1lKGJhc2VQYXRoKSAhPT0gJ25vZGVfbW9kdWxlcycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hbmlmZXN0UGF0aCA9IHRoaXMuZ2V0RW50cnlQb2ludE1hbmlmZXN0UGF0aChiYXNlUGF0aCk7XG4gICAgICBpZiAoIXRoaXMuZnMuZXhpc3RzKG1hbmlmZXN0UGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkTG9ja0ZpbGVIYXNoID0gdGhpcy5jb21wdXRlTG9ja0ZpbGVIYXNoKGJhc2VQYXRoKTtcbiAgICAgIGlmIChjb21wdXRlZExvY2tGaWxlSGFzaCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge25nY2NWZXJzaW9uLCBjb25maWdGaWxlSGFzaCwgbG9ja0ZpbGVIYXNoLCBlbnRyeVBvaW50UGF0aHN9ID1cbiAgICAgICAgICBKU09OLnBhcnNlKHRoaXMuZnMucmVhZEZpbGUobWFuaWZlc3RQYXRoKSkgYXMgRW50cnlQb2ludE1hbmlmZXN0RmlsZTtcbiAgICAgIGlmIChuZ2NjVmVyc2lvbiAhPT0gTkdDQ19WRVJTSU9OIHx8IGNvbmZpZ0ZpbGVIYXNoICE9PSB0aGlzLmNvbmZpZy5oYXNoIHx8XG4gICAgICAgICAgbG9ja0ZpbGVIYXNoICE9PSBjb21wdXRlZExvY2tGaWxlSGFzaCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYEVudHJ5LXBvaW50IG1hbmlmZXN0IGZvdW5kIGZvciAke1xuICAgICAgICAgIGJhc2VQYXRofSBzbyBsb2FkaW5nIGVudHJ5LXBvaW50IGluZm9ybWF0aW9uIGRpcmVjdGx5LmApO1xuICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgY29uc3QgZW50cnlQb2ludHM6IEVudHJ5UG9pbnRXaXRoRGVwZW5kZW5jaWVzW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3RcbiAgICAgICAgICAgICAgIFtwYWNrYWdlUGF0aCwgZW50cnlQb2ludFBhdGgsIGRlcGVuZGVuY3lQYXRocyA9IFtdLCBtaXNzaW5nUGF0aHMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZXBJbXBvcnRQYXRocyA9IFtdXSBvZiBlbnRyeVBvaW50UGF0aHMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2V0RW50cnlQb2ludEluZm8oXG4gICAgICAgICAgICB0aGlzLmZzLCB0aGlzLmNvbmZpZywgdGhpcy5sb2dnZXIsIHRoaXMuZnMucmVzb2x2ZShiYXNlUGF0aCwgcGFja2FnZVBhdGgpLFxuICAgICAgICAgICAgdGhpcy5mcy5yZXNvbHZlKGJhc2VQYXRoLCBlbnRyeVBvaW50UGF0aCkpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBOT19FTlRSWV9QT0lOVCB8fCByZXN1bHQgPT09IElOQ09NUEFUSUJMRV9FTlRSWV9QT0lOVCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGVudHJ5LXBvaW50IG1hbmlmZXN0IGF0ICR7XG4gICAgICAgICAgICAgIG1hbmlmZXN0UGF0aH0gY29udGFpbmVkIGFuIGludmFsaWQgcGFpciBvZiBwYWNrYWdlIHBhdGhzOiBbJHtwYWNrYWdlUGF0aH0sICR7XG4gICAgICAgICAgICAgIGVudHJ5UG9pbnRQYXRofV1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnRyeVBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgIGVudHJ5UG9pbnQ6IHJlc3VsdCxcbiAgICAgICAgICAgIGRlcEluZm86IHtcbiAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBuZXcgU2V0KGRlcGVuZGVuY3lQYXRocyksXG4gICAgICAgICAgICAgIG1pc3Npbmc6IG5ldyBTZXQobWlzc2luZ1BhdGhzKSxcbiAgICAgICAgICAgICAgZGVlcEltcG9ydHM6IG5ldyBTZXQoZGVlcEltcG9ydFBhdGhzKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJvdW5kKChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKSAvIDEwMCkgLyAxMDtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBSZWFkaW5nIGVudHJ5LXBvaW50cyB1c2luZyB0aGUgbWFuaWZlc3QgZW50cmllcyB0b29rICR7ZHVyYXRpb259cy5gKTtcbiAgICAgIHJldHVybiBlbnRyeVBvaW50cztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKFxuICAgICAgICAgIGBVbmFibGUgdG8gcmVhZCB0aGUgZW50cnktcG9pbnQgbWFuaWZlc3QgZm9yICR7YmFzZVBhdGh9OlxcbmAsIGUuc3RhY2sgfHwgZS50b1N0cmluZygpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIG1hbmlmZXN0IGZpbGUgYXQgdGhlIGdpdmVuIGBiYXNlUGF0aGAuXG4gICAqXG4gICAqIFRoZSBtYW5pZmVzdCBpbmNsdWRlcyB0aGUgY3VycmVudCBuZ2NjIHZlcnNpb24gYW5kIGhhc2hlcyBvZiB0aGUgcGFja2FnZSBsb2NrLWZpbGUgYW5kIGN1cnJlbnRcbiAgICogcHJvamVjdCBjb25maWcuIFRoZXNlIHdpbGwgYmUgdXNlZCB0byBjaGVjayB3aGV0aGVyIHRoZSBtYW5pZmVzdCBmaWxlIGlzIG91dCBvZiBkYXRlLiBTZWVcbiAgICogYHJlYWRFbnRyeVBvaW50c1VzaW5nTWFuaWZlc3QoKWAuXG4gICAqXG4gICAqIEBwYXJhbSBiYXNlUGF0aCBUaGUgcGF0aCB3aGVyZSB0aGUgbWFuaWZlc3QgZmlsZSBpcyB0byBiZSB3cml0dGVuLlxuICAgKiBAcGFyYW0gZW50cnlQb2ludHMgQSBjb2xsZWN0aW9uIG9mIGVudHJ5LXBvaW50cyB0byByZWNvcmQgaW4gdGhlIG1hbmlmZXN0LlxuICAgKi9cbiAgd3JpdGVFbnRyeVBvaW50TWFuaWZlc3QoYmFzZVBhdGg6IEFic29sdXRlRnNQYXRoLCBlbnRyeVBvaW50czogRW50cnlQb2ludFdpdGhEZXBlbmRlbmNpZXNbXSk6XG4gICAgICB2b2lkIHtcbiAgICBpZiAodGhpcy5mcy5iYXNlbmFtZShiYXNlUGF0aCkgIT09ICdub2RlX21vZHVsZXMnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbG9ja0ZpbGVIYXNoID0gdGhpcy5jb21wdXRlTG9ja0ZpbGVIYXNoKGJhc2VQYXRoKTtcbiAgICBpZiAobG9ja0ZpbGVIYXNoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1hbmlmZXN0OiBFbnRyeVBvaW50TWFuaWZlc3RGaWxlID0ge1xuICAgICAgbmdjY1ZlcnNpb246IE5HQ0NfVkVSU0lPTixcbiAgICAgIGNvbmZpZ0ZpbGVIYXNoOiB0aGlzLmNvbmZpZy5oYXNoLFxuICAgICAgbG9ja0ZpbGVIYXNoOiBsb2NrRmlsZUhhc2gsXG4gICAgICBlbnRyeVBvaW50UGF0aHM6IGVudHJ5UG9pbnRzLm1hcChlID0+IHtcbiAgICAgICAgY29uc3QgZW50cnlQb2ludFBhdGhzOiBFbnRyeVBvaW50UGF0aHMgPSBbXG4gICAgICAgICAgdGhpcy5mcy5yZWxhdGl2ZShiYXNlUGF0aCwgZS5lbnRyeVBvaW50LnBhY2thZ2UpLFxuICAgICAgICAgIHRoaXMuZnMucmVsYXRpdmUoYmFzZVBhdGgsIGUuZW50cnlQb2ludC5wYXRoKSxcbiAgICAgICAgXTtcbiAgICAgICAgLy8gT25seSBhZGQgZGVwSW5mbyBhcnJheXMgaWYgbmVlZGVkLlxuICAgICAgICBpZiAoZS5kZXBJbmZvLmRlcGVuZGVuY2llcy5zaXplID4gMCkge1xuICAgICAgICAgIGVudHJ5UG9pbnRQYXRoc1syXSA9IEFycmF5LmZyb20oZS5kZXBJbmZvLmRlcGVuZGVuY2llcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5kZXBJbmZvLm1pc3Npbmcuc2l6ZSA+IDAgfHwgZS5kZXBJbmZvLmRlZXBJbXBvcnRzLnNpemUgPiAwKSB7XG4gICAgICAgICAgZW50cnlQb2ludFBhdGhzWzJdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuZGVwSW5mby5taXNzaW5nLnNpemUgPiAwKSB7XG4gICAgICAgICAgZW50cnlQb2ludFBhdGhzWzNdID0gQXJyYXkuZnJvbShlLmRlcEluZm8ubWlzc2luZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5kZXBJbmZvLmRlZXBJbXBvcnRzLnNpemUgPiAwKSB7XG4gICAgICAgICAgZW50cnlQb2ludFBhdGhzWzNdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuZGVwSW5mby5kZWVwSW1wb3J0cy5zaXplID4gMCkge1xuICAgICAgICAgIGVudHJ5UG9pbnRQYXRoc1s0XSA9IEFycmF5LmZyb20oZS5kZXBJbmZvLmRlZXBJbXBvcnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cnlQb2ludFBhdGhzO1xuICAgICAgfSksXG4gICAgfTtcbiAgICB0aGlzLmZzLndyaXRlRmlsZSh0aGlzLmdldEVudHJ5UG9pbnRNYW5pZmVzdFBhdGgoYmFzZVBhdGgpLCBKU09OLnN0cmluZ2lmeShtYW5pZmVzdCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbnRyeVBvaW50TWFuaWZlc3RQYXRoKGJhc2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCkge1xuICAgIHJldHVybiB0aGlzLmZzLnJlc29sdmUoYmFzZVBhdGgsICdfX25nY2NfZW50cnlfcG9pbnRzX18uanNvbicpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlTG9ja0ZpbGVIYXNoKGJhc2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IHN0cmluZ3xudWxsIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSB0aGlzLmZzLmRpcm5hbWUoYmFzZVBhdGgpO1xuICAgIGZvciAoY29uc3QgbG9ja0ZpbGVOYW1lIG9mIFsneWFybi5sb2NrJywgJ3BhY2thZ2UtbG9jay5qc29uJ10pIHtcbiAgICAgIGNvbnN0IGxvY2tGaWxlUGF0aCA9IHRoaXMuZnMucmVzb2x2ZShkaXJlY3RvcnksIGxvY2tGaWxlTmFtZSk7XG4gICAgICBpZiAodGhpcy5mcy5leGlzdHMobG9ja0ZpbGVQYXRoKSkge1xuICAgICAgICBjb25zdCBsb2NrRmlsZUNvbnRlbnRzID0gdGhpcy5mcy5yZWFkRmlsZShsb2NrRmlsZVBhdGgpO1xuICAgICAgICByZXR1cm4gY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKGxvY2tGaWxlQ29udGVudHMpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYEVudHJ5UG9pbnRNYW5pZmVzdGAgdGhhdCBjYW4gYmUgdXNlZCB0byBpbnZhbGlkYXRlIHRoZVxuICogY3VycmVudCBtYW5pZmVzdCBmaWxlLlxuICpcbiAqIEl0IGFsd2F5cyByZXR1cm5zIGBudWxsYCBmcm9tIHRoZSBgcmVhZEVudHJ5UG9pbnRzVXNpbmdNYW5pZmVzdCgpYCBtZXRob2QsIHdoaWNoIGZvcmNlcyBhIG5ld1xuICogbWFuaWZlc3QgdG8gYmUgY3JlYXRlZCwgd2hpY2ggd2lsbCBvdmVyd3JpdGUgdGhlIGN1cnJlbnQgZmlsZSB3aGVuIGB3cml0ZUVudHJ5UG9pbnRNYW5pZmVzdCgpYFxuICogaXMgY2FsbGVkLlxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZGF0aW5nRW50cnlQb2ludE1hbmlmZXN0IGV4dGVuZHMgRW50cnlQb2ludE1hbmlmZXN0IHtcbiAgcmVhZEVudHJ5UG9pbnRzVXNpbmdNYW5pZmVzdChfYmFzZVBhdGg6IEFic29sdXRlRnNQYXRoKTogRW50cnlQb2ludFdpdGhEZXBlbmRlbmNpZXNbXXxudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbnRyeVBvaW50UGF0aHMgPSBbXG4gIHN0cmluZyxcbiAgc3RyaW5nLFxuICBBcnJheTxBYnNvbHV0ZUZzUGF0aD4/LFxuICBBcnJheTxBYnNvbHV0ZUZzUGF0aHxQYXRoU2VnbWVudD4/LFxuICBBcnJheTxBYnNvbHV0ZUZzUGF0aD4/LFxuXTtcblxuLyoqXG4gKiBUaGUgSlNPTiBmb3JtYXQgb2YgdGhlIG1hbmlmZXN0IGZpbGUgdGhhdCBpcyB3cml0dGVuIHRvIGRpc2suXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnlQb2ludE1hbmlmZXN0RmlsZSB7XG4gIG5nY2NWZXJzaW9uOiBzdHJpbmc7XG4gIGNvbmZpZ0ZpbGVIYXNoOiBzdHJpbmc7XG4gIGxvY2tGaWxlSGFzaDogc3RyaW5nO1xuICBlbnRyeVBvaW50UGF0aHM6IEVudHJ5UG9pbnRQYXRoc1tdO1xufVxuIl19