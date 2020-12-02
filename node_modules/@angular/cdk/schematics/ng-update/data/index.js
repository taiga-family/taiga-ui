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
        define("@angular/cdk/schematics/ng-update/data/index", ["require", "exports", "@angular/cdk/schematics/ng-update/data/attribute-selectors", "@angular/cdk/schematics/ng-update/data/class-names", "@angular/cdk/schematics/ng-update/data/constructor-checks", "@angular/cdk/schematics/ng-update/data/css-selectors", "@angular/cdk/schematics/ng-update/data/element-selectors", "@angular/cdk/schematics/ng-update/data/input-names", "@angular/cdk/schematics/ng-update/data/method-call-checks", "@angular/cdk/schematics/ng-update/data/output-names", "@angular/cdk/schematics/ng-update/data/property-names"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("@angular/cdk/schematics/ng-update/data/attribute-selectors"));
    __export(require("@angular/cdk/schematics/ng-update/data/class-names"));
    __export(require("@angular/cdk/schematics/ng-update/data/constructor-checks"));
    __export(require("@angular/cdk/schematics/ng-update/data/css-selectors"));
    __export(require("@angular/cdk/schematics/ng-update/data/element-selectors"));
    __export(require("@angular/cdk/schematics/ng-update/data/input-names"));
    __export(require("@angular/cdk/schematics/ng-update/data/method-call-checks"));
    __export(require("@angular/cdk/schematics/ng-update/data/output-names"));
    __export(require("@angular/cdk/schematics/ng-update/data/property-names"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL2RhdGEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7Ozs7SUFFSCxnRkFBc0M7SUFDdEMsd0VBQThCO0lBQzlCLCtFQUFxQztJQUNyQywwRUFBZ0M7SUFDaEMsOEVBQW9DO0lBQ3BDLHdFQUE4QjtJQUM5QiwrRUFBcUM7SUFDckMseUVBQStCO0lBQy9CLDJFQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2F0dHJpYnV0ZS1zZWxlY3RvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy1uYW1lcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0cnVjdG9yLWNoZWNrcyc7XG5leHBvcnQgKiBmcm9tICcuL2Nzcy1zZWxlY3RvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50LXNlbGVjdG9ycyc7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0LW5hbWVzJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0aG9kLWNhbGwtY2hlY2tzJztcbmV4cG9ydCAqIGZyb20gJy4vb3V0cHV0LW5hbWVzJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvcGVydHktbmFtZXMnO1xuIl19