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
        define("@angular/cdk/schematics/update-tool/target-version", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Possible versions that can be automatically migrated by `ng update`. */
    // Used in an `Object.keys` call below so it can't be `const enum`.
    // tslint:disable-next-line:prefer-const-enum
    var TargetVersion;
    (function (TargetVersion) {
        TargetVersion["V6"] = "version 6";
        TargetVersion["V7"] = "version 7";
        TargetVersion["V8"] = "version 8";
        TargetVersion["V9"] = "version 9";
        TargetVersion["V10"] = "version 10";
    })(TargetVersion = exports.TargetVersion || (exports.TargetVersion = {}));
    /**
     * Returns all versions that are supported by "ng update". The versions are determined
     * based on the "TargetVersion" enum.
     */
    function getAllVersionNames() {
        return Object.keys(TargetVersion)
            .filter(enumValue => typeof TargetVersion[enumValue] === 'string');
    }
    exports.getAllVersionNames = getAllVersionNames;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0LXZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXBkYXRlLXRvb2wvdGFyZ2V0LXZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCwyRUFBMkU7SUFDM0UsbUVBQW1FO0lBQ25FLDZDQUE2QztJQUM3QyxJQUFZLGFBTVg7SUFORCxXQUFZLGFBQWE7UUFDdkIsaUNBQWdCLENBQUE7UUFDaEIsaUNBQWdCLENBQUE7UUFDaEIsaUNBQWdCLENBQUE7UUFDaEIsaUNBQWdCLENBQUE7UUFDaEIsbUNBQWtCLENBQUE7SUFDcEIsQ0FBQyxFQU5XLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBTXhCO0lBRUQ7OztPQUdHO0lBQ0gsU0FBZ0Isa0JBQWtCO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDNUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUhELGdEQUdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKiBQb3NzaWJsZSB2ZXJzaW9ucyB0aGF0IGNhbiBiZSBhdXRvbWF0aWNhbGx5IG1pZ3JhdGVkIGJ5IGBuZyB1cGRhdGVgLiAqL1xuLy8gVXNlZCBpbiBhbiBgT2JqZWN0LmtleXNgIGNhbGwgYmVsb3cgc28gaXQgY2FuJ3QgYmUgYGNvbnN0IGVudW1gLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25zdC1lbnVtXG5leHBvcnQgZW51bSBUYXJnZXRWZXJzaW9uIHtcbiAgVjYgPSAndmVyc2lvbiA2JyxcbiAgVjcgPSAndmVyc2lvbiA3JyxcbiAgVjggPSAndmVyc2lvbiA4JyxcbiAgVjkgPSAndmVyc2lvbiA5JyxcbiAgVjEwID0gJ3ZlcnNpb24gMTAnLFxufVxuXG4vKipcbiAqIFJldHVybnMgYWxsIHZlcnNpb25zIHRoYXQgYXJlIHN1cHBvcnRlZCBieSBcIm5nIHVwZGF0ZVwiLiBUaGUgdmVyc2lvbnMgYXJlIGRldGVybWluZWRcbiAqIGJhc2VkIG9uIHRoZSBcIlRhcmdldFZlcnNpb25cIiBlbnVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVmVyc2lvbk5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKFRhcmdldFZlcnNpb24pXG4gICAgICAuZmlsdGVyKGVudW1WYWx1ZSA9PiB0eXBlb2YgVGFyZ2V0VmVyc2lvbltlbnVtVmFsdWVdID09PSAnc3RyaW5nJyk7XG59XG4iXX0=