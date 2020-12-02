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
        define("@angular/cdk/schematics/ng-update/data/element-selectors", ["require", "exports", "@angular/cdk/schematics/update-tool/target-version"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const target_version_1 = require("@angular/cdk/schematics/update-tool/target-version");
    exports.elementSelectors = {
        [target_version_1.TargetVersion.V6]: []
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL2RhdGEvZWxlbWVudC1zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx1RkFBK0Q7SUFVbEQsUUFBQSxnQkFBZ0IsR0FBK0M7UUFDMUUsQ0FBQyw4QkFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7S0FDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1RhcmdldFZlcnNpb259IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL3RhcmdldC12ZXJzaW9uJztcbmltcG9ydCB7VmVyc2lvbkNoYW5nZXN9IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL3ZlcnNpb24tY2hhbmdlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFNlbGVjdG9yVXBncmFkZURhdGEge1xuICAvKiogVGhlIGVsZW1lbnQgbmFtZSB0byByZXBsYWNlLiAqL1xuICByZXBsYWNlOiBzdHJpbmc7XG4gIC8qKiBUaGUgbmV3IG5hbWUgZm9yIHRoZSBlbGVtZW50LiAqL1xuICByZXBsYWNlV2l0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZWxlbWVudFNlbGVjdG9yczogVmVyc2lvbkNoYW5nZXM8RWxlbWVudFNlbGVjdG9yVXBncmFkZURhdGE+ID0ge1xuICBbVGFyZ2V0VmVyc2lvbi5WNl06IFtdXG59O1xuIl19