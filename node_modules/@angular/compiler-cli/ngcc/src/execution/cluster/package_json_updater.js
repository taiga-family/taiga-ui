/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/execution/cluster/package_json_updater", ["require", "exports", "tslib", "cluster", "@angular/compiler-cli/ngcc/src/writing/package_json_updater", "@angular/compiler-cli/ngcc/src/execution/cluster/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /// <reference types="node" />
    var cluster = require("cluster");
    var package_json_updater_1 = require("@angular/compiler-cli/ngcc/src/writing/package_json_updater");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/execution/cluster/utils");
    /**
     * A `PackageJsonUpdater` for cluster workers that will send update changes to the master process so
     * that it can safely handle update operations on multiple processes.
     */
    var ClusterWorkerPackageJsonUpdater = /** @class */ (function () {
        function ClusterWorkerPackageJsonUpdater() {
            if (cluster.isMaster) {
                throw new Error('Tried to create cluster worker PackageJsonUpdater on the master process.');
            }
        }
        ClusterWorkerPackageJsonUpdater.prototype.createUpdate = function () {
            var _this = this;
            return new package_json_updater_1.PackageJsonUpdate(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.writeChanges.apply(_this, tslib_1.__spread(args));
            });
        };
        /**
         * Apply the changes in-memory (if necessary) and send a message to the master process.
         */
        ClusterWorkerPackageJsonUpdater.prototype.writeChanges = function (changes, packageJsonPath, preExistingParsedJson) {
            var e_1, _a;
            if (preExistingParsedJson) {
                try {
                    for (var changes_1 = tslib_1.__values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                        var _b = tslib_1.__read(changes_1_1.value, 2), propPath = _b[0], value = _b[1];
                        if (propPath.length === 0) {
                            throw new Error("Missing property path for writing value to '" + packageJsonPath + "'.");
                        }
                        // No need to take property positioning into account for in-memory representations.
                        package_json_updater_1.applyChange(preExistingParsedJson, propPath, value, 'unimportant');
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            utils_1.sendMessageToMaster({
                type: 'update-package-json',
                packageJsonPath: packageJsonPath,
                changes: changes,
            });
        };
        return ClusterWorkerPackageJsonUpdater;
    }());
    exports.ClusterWorkerPackageJsonUpdater = ClusterWorkerPackageJsonUpdater;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZV9qc29uX3VwZGF0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvZXhlY3V0aW9uL2NsdXN0ZXIvcGFja2FnZV9qc29uX3VwZGF0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsOEJBQThCO0lBRTlCLGlDQUFtQztJQUluQyxvR0FBeUg7SUFFekgsZ0ZBQTRDO0lBRzVDOzs7T0FHRztJQUNIO1FBQ0U7WUFDRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEVBQTBFLENBQUMsQ0FBQzthQUM3RjtRQUNILENBQUM7UUFFRCxzREFBWSxHQUFaO1lBQUEsaUJBRUM7WUFEQyxPQUFPLElBQUksd0NBQWlCLENBQUM7Z0JBQUMsY0FBTztxQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO29CQUFQLHlCQUFPOztnQkFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLE9BQWpCLEtBQUksbUJBQWlCLElBQUk7WUFBekIsQ0FBMEIsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFFRDs7V0FFRztRQUNILHNEQUFZLEdBQVosVUFDSSxPQUE0QixFQUFFLGVBQStCLEVBQzdELHFCQUFrQzs7WUFDcEMsSUFBSSxxQkFBcUIsRUFBRTs7b0JBQ3pCLEtBQWdDLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7d0JBQTlCLElBQUEseUNBQWlCLEVBQWhCLGdCQUFRLEVBQUUsYUFBSzt3QkFDekIsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs0QkFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBK0MsZUFBZSxPQUFJLENBQUMsQ0FBQzt5QkFDckY7d0JBRUQsbUZBQW1GO3dCQUNuRixrQ0FBVyxDQUFDLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7cUJBQ3BFOzs7Ozs7Ozs7YUFDRjtZQUVELDJCQUFtQixDQUFDO2dCQUNsQixJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixlQUFlLGlCQUFBO2dCQUNmLE9BQU8sU0FBQTthQUNSLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDSCxzQ0FBQztJQUFELENBQUMsQUFsQ0QsSUFrQ0M7SUFsQ1ksMEVBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm5vZGVcIiAvPlxuXG5pbXBvcnQgKiBhcyBjbHVzdGVyIGZyb20gJ2NsdXN0ZXInO1xuXG5pbXBvcnQge0Fic29sdXRlRnNQYXRofSBmcm9tICcuLi8uLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tICcuLi8uLi9wYWNrYWdlcy9lbnRyeV9wb2ludCc7XG5pbXBvcnQge2FwcGx5Q2hhbmdlLCBQYWNrYWdlSnNvbkNoYW5nZSwgUGFja2FnZUpzb25VcGRhdGUsIFBhY2thZ2VKc29uVXBkYXRlcn0gZnJvbSAnLi4vLi4vd3JpdGluZy9wYWNrYWdlX2pzb25fdXBkYXRlcic7XG5cbmltcG9ydCB7c2VuZE1lc3NhZ2VUb01hc3Rlcn0gZnJvbSAnLi91dGlscyc7XG5cblxuLyoqXG4gKiBBIGBQYWNrYWdlSnNvblVwZGF0ZXJgIGZvciBjbHVzdGVyIHdvcmtlcnMgdGhhdCB3aWxsIHNlbmQgdXBkYXRlIGNoYW5nZXMgdG8gdGhlIG1hc3RlciBwcm9jZXNzIHNvXG4gKiB0aGF0IGl0IGNhbiBzYWZlbHkgaGFuZGxlIHVwZGF0ZSBvcGVyYXRpb25zIG9uIG11bHRpcGxlIHByb2Nlc3Nlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIENsdXN0ZXJXb3JrZXJQYWNrYWdlSnNvblVwZGF0ZXIgaW1wbGVtZW50cyBQYWNrYWdlSnNvblVwZGF0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoY2x1c3Rlci5pc01hc3Rlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmllZCB0byBjcmVhdGUgY2x1c3RlciB3b3JrZXIgUGFja2FnZUpzb25VcGRhdGVyIG9uIHRoZSBtYXN0ZXIgcHJvY2Vzcy4nKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVVcGRhdGUoKTogUGFja2FnZUpzb25VcGRhdGUge1xuICAgIHJldHVybiBuZXcgUGFja2FnZUpzb25VcGRhdGUoKC4uLmFyZ3MpID0+IHRoaXMud3JpdGVDaGFuZ2VzKC4uLmFyZ3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgY2hhbmdlcyBpbi1tZW1vcnkgKGlmIG5lY2Vzc2FyeSkgYW5kIHNlbmQgYSBtZXNzYWdlIHRvIHRoZSBtYXN0ZXIgcHJvY2Vzcy5cbiAgICovXG4gIHdyaXRlQ2hhbmdlcyhcbiAgICAgIGNoYW5nZXM6IFBhY2thZ2VKc29uQ2hhbmdlW10sIHBhY2thZ2VKc29uUGF0aDogQWJzb2x1dGVGc1BhdGgsXG4gICAgICBwcmVFeGlzdGluZ1BhcnNlZEpzb24/OiBKc29uT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKHByZUV4aXN0aW5nUGFyc2VkSnNvbikge1xuICAgICAgZm9yIChjb25zdCBbcHJvcFBhdGgsIHZhbHVlXSBvZiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChwcm9wUGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgcHJvcGVydHkgcGF0aCBmb3Igd3JpdGluZyB2YWx1ZSB0byAnJHtwYWNrYWdlSnNvblBhdGh9Jy5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIG5lZWQgdG8gdGFrZSBwcm9wZXJ0eSBwb3NpdGlvbmluZyBpbnRvIGFjY291bnQgZm9yIGluLW1lbW9yeSByZXByZXNlbnRhdGlvbnMuXG4gICAgICAgIGFwcGx5Q2hhbmdlKHByZUV4aXN0aW5nUGFyc2VkSnNvbiwgcHJvcFBhdGgsIHZhbHVlLCAndW5pbXBvcnRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZVRvTWFzdGVyKHtcbiAgICAgIHR5cGU6ICd1cGRhdGUtcGFja2FnZS1qc29uJyxcbiAgICAgIHBhY2thZ2VKc29uUGF0aCxcbiAgICAgIGNoYW5nZXMsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==