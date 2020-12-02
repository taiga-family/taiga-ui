/**
 * @license
 * Copyright Google LLC All Rights Reserved.
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
        define("@angular/cdk/schematics/ng-add/package-config", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Sorts the keys of the given object.
     * @returns A new object instance with sorted keys
     */
    function sortObjectByKeys(obj) {
        return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key]) && result, {});
    }
    /** Adds a package to the package.json in the given host tree. */
    function addPackageToPackageJson(host, pkg, version) {
        if (host.exists('package.json')) {
            const sourceText = host.read('package.json').toString('utf-8');
            const json = JSON.parse(sourceText);
            if (!json.dependencies) {
                json.dependencies = {};
            }
            if (!json.dependencies[pkg]) {
                json.dependencies[pkg] = version;
                json.dependencies = sortObjectByKeys(json.dependencies);
            }
            host.overwrite('package.json', JSON.stringify(json, null, 2));
        }
        return host;
    }
    exports.addPackageToPackageJson = addPackageToPackageJson;
    /** Gets the version of the specified package by looking at the package.json in the given tree. */
    function getPackageVersionFromPackageJson(tree, name) {
        if (!tree.exists('package.json')) {
            return null;
        }
        const packageJson = JSON.parse(tree.read('package.json').toString('utf8'));
        if (packageJson.dependencies && packageJson.dependencies[name]) {
            return packageJson.dependencies[name];
        }
        return null;
    }
    exports.getPackageVersionFromPackageJson = getPackageVersionFromPackageJson;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctYWRkL3BhY2thZ2UtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBSUg7OztPQUdHO0lBQ0gsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFXO1FBQ25DLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSxTQUFnQix1QkFBdUIsQ0FBQyxJQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWU7UUFFOUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2FBQ3hCO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN6RDtZQUVELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBbkJELDBEQW1CQztJQUVELGtHQUFrRztJQUNsRyxTQUFnQixnQ0FBZ0MsQ0FBQyxJQUFVLEVBQUUsSUFBWTtRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRTVFLElBQUksV0FBVyxDQUFDLFlBQVksSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlELE9BQU8sV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQVpELDRFQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VHJlZX0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuXG4vKipcbiAqIFNvcnRzIHRoZSBrZXlzIG9mIHRoZSBnaXZlbiBvYmplY3QuXG4gKiBAcmV0dXJucyBBIG5ldyBvYmplY3QgaW5zdGFuY2Ugd2l0aCBzb3J0ZWQga2V5c1xuICovXG5mdW5jdGlvbiBzb3J0T2JqZWN0QnlLZXlzKG9iajogb2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiAocmVzdWx0W2tleV0gPSBvYmpba2V5XSkgJiYgcmVzdWx0LCB7fSk7XG59XG5cbi8qKiBBZGRzIGEgcGFja2FnZSB0byB0aGUgcGFja2FnZS5qc29uIGluIHRoZSBnaXZlbiBob3N0IHRyZWUuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdDogVHJlZSwgcGtnOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZyk6IFRyZWUge1xuXG4gIGlmIChob3N0LmV4aXN0cygncGFja2FnZS5qc29uJykpIHtcbiAgICBjb25zdCBzb3VyY2VUZXh0ID0gaG9zdC5yZWFkKCdwYWNrYWdlLmpzb24nKSEudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gICAgY29uc3QganNvbiA9IEpTT04ucGFyc2Uoc291cmNlVGV4dCk7XG5cbiAgICBpZiAoIWpzb24uZGVwZW5kZW5jaWVzKSB7XG4gICAgICBqc29uLmRlcGVuZGVuY2llcyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghanNvbi5kZXBlbmRlbmNpZXNbcGtnXSkge1xuICAgICAganNvbi5kZXBlbmRlbmNpZXNbcGtnXSA9IHZlcnNpb247XG4gICAgICBqc29uLmRlcGVuZGVuY2llcyA9IHNvcnRPYmplY3RCeUtleXMoanNvbi5kZXBlbmRlbmNpZXMpO1xuICAgIH1cblxuICAgIGhvc3Qub3ZlcndyaXRlKCdwYWNrYWdlLmpzb24nLCBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKSk7XG4gIH1cblxuICByZXR1cm4gaG9zdDtcbn1cblxuLyoqIEdldHMgdGhlIHZlcnNpb24gb2YgdGhlIHNwZWNpZmllZCBwYWNrYWdlIGJ5IGxvb2tpbmcgYXQgdGhlIHBhY2thZ2UuanNvbiBpbiB0aGUgZ2l2ZW4gdHJlZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWNrYWdlVmVyc2lvbkZyb21QYWNrYWdlSnNvbih0cmVlOiBUcmVlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCF0cmVlLmV4aXN0cygncGFja2FnZS5qc29uJykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHBhY2thZ2VKc29uID0gSlNPTi5wYXJzZSh0cmVlLnJlYWQoJ3BhY2thZ2UuanNvbicpIS50b1N0cmluZygndXRmOCcpKTtcblxuICBpZiAocGFja2FnZUpzb24uZGVwZW5kZW5jaWVzICYmIHBhY2thZ2VKc29uLmRlcGVuZGVuY2llc1tuYW1lXSkge1xuICAgIHJldHVybiBwYWNrYWdlSnNvbi5kZXBlbmRlbmNpZXNbbmFtZV07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==