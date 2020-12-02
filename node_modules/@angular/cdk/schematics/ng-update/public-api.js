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
        define("@angular/cdk/schematics/ng-update/public-api", ["require", "exports", "@angular/cdk/schematics/ng-update/data/index", "@angular/cdk/schematics/ng-update/devkit-migration", "@angular/cdk/schematics/ng-update/devkit-migration-rule", "@angular/cdk/schematics/ng-update/html-parsing/angular", "@angular/cdk/schematics/ng-update/html-parsing/elements", "@angular/cdk/schematics/ng-update/typescript/base-types", "@angular/cdk/schematics/ng-update/typescript/imports", "@angular/cdk/schematics/ng-update/typescript/literal", "@angular/cdk/schematics/ng-update/typescript/module-specifiers", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("@angular/cdk/schematics/ng-update/data/index"));
    __export(require("@angular/cdk/schematics/ng-update/devkit-migration"));
    __export(require("@angular/cdk/schematics/ng-update/devkit-migration-rule"));
    __export(require("@angular/cdk/schematics/ng-update/html-parsing/angular"));
    __export(require("@angular/cdk/schematics/ng-update/html-parsing/elements"));
    __export(require("@angular/cdk/schematics/ng-update/typescript/base-types"));
    __export(require("@angular/cdk/schematics/ng-update/typescript/imports"));
    __export(require("@angular/cdk/schematics/ng-update/typescript/literal"));
    __export(require("@angular/cdk/schematics/ng-update/typescript/module-specifiers"));
    __export(require("@angular/cdk/schematics/ng-update/upgrade-data"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy9uZy11cGRhdGUvcHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7OztJQUVILGtFQUE2QjtJQUM3Qix3RUFBbUM7SUFDbkMsNkVBQXdDO0lBQ3hDLDRFQUF1QztJQUN2Qyw2RUFBd0M7SUFDeEMsNkVBQXdDO0lBQ3hDLDBFQUFxQztJQUNyQywwRUFBcUM7SUFDckMsb0ZBQStDO0lBQy9DLG9FQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2RhdGEvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9kZXZraXQtbWlncmF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZGV2a2l0LW1pZ3JhdGlvbi1ydWxlJztcbmV4cG9ydCAqIGZyb20gJy4vaHRtbC1wYXJzaW5nL2FuZ3VsYXInO1xuZXhwb3J0ICogZnJvbSAnLi9odG1sLXBhcnNpbmcvZWxlbWVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlc2NyaXB0L2Jhc2UtdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlc2NyaXB0L2ltcG9ydHMnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlc2NyaXB0L2xpdGVyYWwnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlc2NyaXB0L21vZHVsZS1zcGVjaWZpZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vdXBncmFkZS1kYXRhJztcbiJdfQ==