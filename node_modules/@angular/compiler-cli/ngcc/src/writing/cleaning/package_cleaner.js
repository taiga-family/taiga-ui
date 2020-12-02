(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/writing/cleaning/package_cleaner", ["require", "exports", "tslib", "@angular/compiler-cli/ngcc/src/packages/build_marker", "@angular/compiler-cli/ngcc/src/writing/cleaning/cleaning_strategies", "@angular/compiler-cli/ngcc/src/writing/cleaning/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var build_marker_1 = require("@angular/compiler-cli/ngcc/src/packages/build_marker");
    var cleaning_strategies_1 = require("@angular/compiler-cli/ngcc/src/writing/cleaning/cleaning_strategies");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/writing/cleaning/utils");
    /**
     * A class that can clean ngcc artifacts from a directory.
     */
    var PackageCleaner = /** @class */ (function () {
        function PackageCleaner(fs, cleaners) {
            this.fs = fs;
            this.cleaners = cleaners;
        }
        /**
         * Recurse through the file-system cleaning files and directories as determined by the configured
         * cleaning-strategies.
         *
         * @param directory the current directory to clean
         */
        PackageCleaner.prototype.clean = function (directory) {
            var e_1, _a, e_2, _b;
            var basenames = this.fs.readdir(directory);
            try {
                for (var basenames_1 = tslib_1.__values(basenames), basenames_1_1 = basenames_1.next(); !basenames_1_1.done; basenames_1_1 = basenames_1.next()) {
                    var basename = basenames_1_1.value;
                    if (basename === 'node_modules') {
                        continue;
                    }
                    var path = this.fs.resolve(directory, basename);
                    try {
                        for (var _c = (e_2 = void 0, tslib_1.__values(this.cleaners)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var cleaner = _d.value;
                            if (cleaner.canClean(path, basename)) {
                                cleaner.clean(path, basename);
                                break;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    // Recurse into subdirectories (note that a cleaner may have removed this path)
                    if (utils_1.isLocalDirectory(this.fs, path)) {
                        this.clean(path);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (basenames_1_1 && !basenames_1_1.done && (_a = basenames_1.return)) _a.call(basenames_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        return PackageCleaner;
    }());
    exports.PackageCleaner = PackageCleaner;
    /**
     * Iterate through the given `entryPoints` identifying the package for each that has at least one
     * outdated processed format, then cleaning those packages.
     *
     * Note that we have to clean entire packages because there is no clear file-system boundary
     * between entry-points within a package. So if one entry-point is outdated we have to clean
     * everything within that package.
     *
     * @param fileSystem the current file-system
     * @param entryPoints the entry-points that have been collected for this run of ngcc
     * @returns true if packages needed to be cleaned.
     */
    function cleanOutdatedPackages(fileSystem, entryPoints) {
        var e_3, _a, e_4, _b;
        var packagesToClean = new Set();
        try {
            for (var entryPoints_1 = tslib_1.__values(entryPoints), entryPoints_1_1 = entryPoints_1.next(); !entryPoints_1_1.done; entryPoints_1_1 = entryPoints_1.next()) {
                var entryPoint = entryPoints_1_1.value;
                if (build_marker_1.needsCleaning(entryPoint.packageJson)) {
                    packagesToClean.add(entryPoint.package);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (entryPoints_1_1 && !entryPoints_1_1.done && (_a = entryPoints_1.return)) _a.call(entryPoints_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var cleaner = new PackageCleaner(fileSystem, [
            new cleaning_strategies_1.PackageJsonCleaner(fileSystem),
            new cleaning_strategies_1.NgccDirectoryCleaner(fileSystem),
            new cleaning_strategies_1.BackupFileCleaner(fileSystem),
        ]);
        try {
            for (var packagesToClean_1 = tslib_1.__values(packagesToClean), packagesToClean_1_1 = packagesToClean_1.next(); !packagesToClean_1_1.done; packagesToClean_1_1 = packagesToClean_1.next()) {
                var packagePath = packagesToClean_1_1.value;
                cleaner.clean(packagePath);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (packagesToClean_1_1 && !packagesToClean_1_1.done && (_b = packagesToClean_1.return)) _b.call(packagesToClean_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return packagesToClean.size > 0;
    }
    exports.cleanOutdatedPackages = cleanOutdatedPackages;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZV9jbGVhbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL3dyaXRpbmcvY2xlYW5pbmcvcGFja2FnZV9jbGVhbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVFBLHFGQUEwRDtJQUcxRCwyR0FBb0g7SUFDcEgsK0VBQXlDO0lBRXpDOztPQUVHO0lBQ0g7UUFDRSx3QkFBb0IsRUFBYyxFQUFVLFFBQTRCO1lBQXBELE9BQUUsR0FBRixFQUFFLENBQVk7WUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFHLENBQUM7UUFFNUU7Ozs7O1dBS0c7UUFDSCw4QkFBSyxHQUFMLFVBQU0sU0FBeUI7O1lBQzdCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztnQkFDN0MsS0FBdUIsSUFBQSxjQUFBLGlCQUFBLFNBQVMsQ0FBQSxvQ0FBQSwyREFBRTtvQkFBN0IsSUFBTSxRQUFRLHNCQUFBO29CQUNqQixJQUFJLFFBQVEsS0FBSyxjQUFjLEVBQUU7d0JBQy9CLFNBQVM7cUJBQ1Y7b0JBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzt3QkFDbEQsS0FBc0IsSUFBQSxvQkFBQSxpQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUEsZ0JBQUEsNEJBQUU7NEJBQWhDLElBQU0sT0FBTyxXQUFBOzRCQUNoQixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dDQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztnQ0FDOUIsTUFBTTs2QkFDUDt5QkFDRjs7Ozs7Ozs7O29CQUNELCtFQUErRTtvQkFDL0UsSUFBSSx3QkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO3dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNsQjtpQkFDRjs7Ozs7Ozs7O1FBQ0gsQ0FBQztRQUNILHFCQUFDO0lBQUQsQ0FBQyxBQTdCRCxJQTZCQztJQTdCWSx3Q0FBYztJQWdDM0I7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxTQUFnQixxQkFBcUIsQ0FBQyxVQUFzQixFQUFFLFdBQXlCOztRQUNyRixJQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQzs7WUFDbEQsS0FBeUIsSUFBQSxnQkFBQSxpQkFBQSxXQUFXLENBQUEsd0NBQUEsaUVBQUU7Z0JBQWpDLElBQU0sVUFBVSx3QkFBQTtnQkFDbkIsSUFBSSw0QkFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDekMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pDO2FBQ0Y7Ozs7Ozs7OztRQUVELElBQU0sT0FBTyxHQUFHLElBQUksY0FBYyxDQUFDLFVBQVUsRUFBRTtZQUM3QyxJQUFJLHdDQUFrQixDQUFDLFVBQVUsQ0FBQztZQUNsQyxJQUFJLDBDQUFvQixDQUFDLFVBQVUsQ0FBQztZQUNwQyxJQUFJLHVDQUFpQixDQUFDLFVBQVUsQ0FBQztTQUNsQyxDQUFDLENBQUM7O1lBQ0gsS0FBMEIsSUFBQSxvQkFBQSxpQkFBQSxlQUFlLENBQUEsZ0RBQUEsNkVBQUU7Z0JBQXRDLElBQU0sV0FBVyw0QkFBQTtnQkFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM1Qjs7Ozs7Ozs7O1FBRUQsT0FBTyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBbEJELHNEQWtCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIEZpbGVTeXN0ZW19IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge25lZWRzQ2xlYW5pbmd9IGZyb20gJy4uLy4uL3BhY2thZ2VzL2J1aWxkX21hcmtlcic7XG5pbXBvcnQge0VudHJ5UG9pbnR9IGZyb20gJy4uLy4uL3BhY2thZ2VzL2VudHJ5X3BvaW50JztcblxuaW1wb3J0IHtCYWNrdXBGaWxlQ2xlYW5lciwgQ2xlYW5pbmdTdHJhdGVneSwgTmdjY0RpcmVjdG9yeUNsZWFuZXIsIFBhY2thZ2VKc29uQ2xlYW5lcn0gZnJvbSAnLi9jbGVhbmluZ19zdHJhdGVnaWVzJztcbmltcG9ydCB7aXNMb2NhbERpcmVjdG9yeX0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogQSBjbGFzcyB0aGF0IGNhbiBjbGVhbiBuZ2NjIGFydGlmYWN0cyBmcm9tIGEgZGlyZWN0b3J5LlxuICovXG5leHBvcnQgY2xhc3MgUGFja2FnZUNsZWFuZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZzOiBGaWxlU3lzdGVtLCBwcml2YXRlIGNsZWFuZXJzOiBDbGVhbmluZ1N0cmF0ZWd5W10pIHt9XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2UgdGhyb3VnaCB0aGUgZmlsZS1zeXN0ZW0gY2xlYW5pbmcgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIGFzIGRldGVybWluZWQgYnkgdGhlIGNvbmZpZ3VyZWRcbiAgICogY2xlYW5pbmctc3RyYXRlZ2llcy5cbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdG9yeSB0aGUgY3VycmVudCBkaXJlY3RvcnkgdG8gY2xlYW5cbiAgICovXG4gIGNsZWFuKGRpcmVjdG9yeTogQWJzb2x1dGVGc1BhdGgpIHtcbiAgICBjb25zdCBiYXNlbmFtZXMgPSB0aGlzLmZzLnJlYWRkaXIoZGlyZWN0b3J5KTtcbiAgICBmb3IgKGNvbnN0IGJhc2VuYW1lIG9mIGJhc2VuYW1lcykge1xuICAgICAgaWYgKGJhc2VuYW1lID09PSAnbm9kZV9tb2R1bGVzJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZnMucmVzb2x2ZShkaXJlY3RvcnksIGJhc2VuYW1lKTtcbiAgICAgIGZvciAoY29uc3QgY2xlYW5lciBvZiB0aGlzLmNsZWFuZXJzKSB7XG4gICAgICAgIGlmIChjbGVhbmVyLmNhbkNsZWFuKHBhdGgsIGJhc2VuYW1lKSkge1xuICAgICAgICAgIGNsZWFuZXIuY2xlYW4ocGF0aCwgYmFzZW5hbWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBSZWN1cnNlIGludG8gc3ViZGlyZWN0b3JpZXMgKG5vdGUgdGhhdCBhIGNsZWFuZXIgbWF5IGhhdmUgcmVtb3ZlZCB0aGlzIHBhdGgpXG4gICAgICBpZiAoaXNMb2NhbERpcmVjdG9yeSh0aGlzLmZzLCBwYXRoKSkge1xuICAgICAgICB0aGlzLmNsZWFuKHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8qKlxuICogSXRlcmF0ZSB0aHJvdWdoIHRoZSBnaXZlbiBgZW50cnlQb2ludHNgIGlkZW50aWZ5aW5nIHRoZSBwYWNrYWdlIGZvciBlYWNoIHRoYXQgaGFzIGF0IGxlYXN0IG9uZVxuICogb3V0ZGF0ZWQgcHJvY2Vzc2VkIGZvcm1hdCwgdGhlbiBjbGVhbmluZyB0aG9zZSBwYWNrYWdlcy5cbiAqXG4gKiBOb3RlIHRoYXQgd2UgaGF2ZSB0byBjbGVhbiBlbnRpcmUgcGFja2FnZXMgYmVjYXVzZSB0aGVyZSBpcyBubyBjbGVhciBmaWxlLXN5c3RlbSBib3VuZGFyeVxuICogYmV0d2VlbiBlbnRyeS1wb2ludHMgd2l0aGluIGEgcGFja2FnZS4gU28gaWYgb25lIGVudHJ5LXBvaW50IGlzIG91dGRhdGVkIHdlIGhhdmUgdG8gY2xlYW5cbiAqIGV2ZXJ5dGhpbmcgd2l0aGluIHRoYXQgcGFja2FnZS5cbiAqXG4gKiBAcGFyYW0gZmlsZVN5c3RlbSB0aGUgY3VycmVudCBmaWxlLXN5c3RlbVxuICogQHBhcmFtIGVudHJ5UG9pbnRzIHRoZSBlbnRyeS1wb2ludHMgdGhhdCBoYXZlIGJlZW4gY29sbGVjdGVkIGZvciB0aGlzIHJ1biBvZiBuZ2NjXG4gKiBAcmV0dXJucyB0cnVlIGlmIHBhY2thZ2VzIG5lZWRlZCB0byBiZSBjbGVhbmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5PdXRkYXRlZFBhY2thZ2VzKGZpbGVTeXN0ZW06IEZpbGVTeXN0ZW0sIGVudHJ5UG9pbnRzOiBFbnRyeVBvaW50W10pOiBib29sZWFuIHtcbiAgY29uc3QgcGFja2FnZXNUb0NsZWFuID0gbmV3IFNldDxBYnNvbHV0ZUZzUGF0aD4oKTtcbiAgZm9yIChjb25zdCBlbnRyeVBvaW50IG9mIGVudHJ5UG9pbnRzKSB7XG4gICAgaWYgKG5lZWRzQ2xlYW5pbmcoZW50cnlQb2ludC5wYWNrYWdlSnNvbikpIHtcbiAgICAgIHBhY2thZ2VzVG9DbGVhbi5hZGQoZW50cnlQb2ludC5wYWNrYWdlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGVhbmVyID0gbmV3IFBhY2thZ2VDbGVhbmVyKGZpbGVTeXN0ZW0sIFtcbiAgICBuZXcgUGFja2FnZUpzb25DbGVhbmVyKGZpbGVTeXN0ZW0pLFxuICAgIG5ldyBOZ2NjRGlyZWN0b3J5Q2xlYW5lcihmaWxlU3lzdGVtKSxcbiAgICBuZXcgQmFja3VwRmlsZUNsZWFuZXIoZmlsZVN5c3RlbSksXG4gIF0pO1xuICBmb3IgKGNvbnN0IHBhY2thZ2VQYXRoIG9mIHBhY2thZ2VzVG9DbGVhbikge1xuICAgIGNsZWFuZXIuY2xlYW4ocGFja2FnZVBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIHBhY2thZ2VzVG9DbGVhbi5zaXplID4gMDtcbn1cbiJdfQ==