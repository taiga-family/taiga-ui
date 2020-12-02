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
        define("@angular/cdk/schematics/utils/index", ["require", "exports", "@angular/cdk/schematics/utils/ast", "@angular/cdk/schematics/utils/ast/ng-module-imports", "@angular/cdk/schematics/utils/build-component", "@angular/cdk/schematics/utils/get-project", "@angular/cdk/schematics/utils/html-manipulation", "@angular/cdk/schematics/utils/parse5-element", "@angular/cdk/schematics/utils/project-index-file", "@angular/cdk/schematics/utils/project-main-file", "@angular/cdk/schematics/utils/project-style-file", "@angular/cdk/schematics/utils/project-targets", "@angular/cdk/schematics/utils/schematic-options"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("@angular/cdk/schematics/utils/ast"));
    __export(require("@angular/cdk/schematics/utils/ast/ng-module-imports"));
    __export(require("@angular/cdk/schematics/utils/build-component"));
    __export(require("@angular/cdk/schematics/utils/get-project"));
    __export(require("@angular/cdk/schematics/utils/html-manipulation"));
    __export(require("@angular/cdk/schematics/utils/parse5-element"));
    __export(require("@angular/cdk/schematics/utils/project-index-file"));
    __export(require("@angular/cdk/schematics/utils/project-main-file"));
    __export(require("@angular/cdk/schematics/utils/project-style-file"));
    __export(require("@angular/cdk/schematics/utils/project-targets"));
    __export(require("@angular/cdk/schematics/utils/schematic-options"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7Ozs7SUFFSCx1REFBc0I7SUFDdEIseUVBQXdDO0lBQ3hDLG1FQUFrQztJQUNsQywrREFBOEI7SUFDOUIscUVBQW9DO0lBQ3BDLGtFQUFpQztJQUNqQyxzRUFBcUM7SUFDckMscUVBQW9DO0lBQ3BDLHNFQUFxQztJQUNyQyxtRUFBa0M7SUFDbEMscUVBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vYXN0JztcbmV4cG9ydCAqIGZyb20gJy4vYXN0L25nLW1vZHVsZS1pbXBvcnRzJztcbmV4cG9ydCAqIGZyb20gJy4vYnVpbGQtY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZ2V0LXByb2plY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9odG1sLW1hbmlwdWxhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3BhcnNlNS1lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdC1pbmRleC1maWxlJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdC1tYWluLWZpbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0LXN0eWxlLWZpbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0LXRhcmdldHMnO1xuZXhwb3J0ICogZnJvbSAnLi9zY2hlbWF0aWMtb3B0aW9ucyc7XG4iXX0=