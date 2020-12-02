(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler", "@angular/compiler-cli/src/version", "@angular/compiler-cli/src/metadata/index", "@angular/compiler-cli/src/transformers/api", "@angular/compiler-cli/src/transformers/entry_points", "@angular/compiler-cli/src/perform_compile", "@angular/compiler-cli/src/tooling", "@angular/compiler-cli/src/transformers/util", "@angular/compiler-cli/src/ngtsc/tsc_plugin"], factory);
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
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var compiler_1 = require("@angular/compiler");
    exports.StaticReflector = compiler_1.StaticReflector;
    exports.StaticSymbol = compiler_1.StaticSymbol;
    var version_1 = require("@angular/compiler-cli/src/version");
    exports.VERSION = version_1.VERSION;
    tslib_1.__exportStar(require("@angular/compiler-cli/src/metadata/index"), exports);
    tslib_1.__exportStar(require("@angular/compiler-cli/src/transformers/api"), exports);
    tslib_1.__exportStar(require("@angular/compiler-cli/src/transformers/entry_points"), exports);
    tslib_1.__exportStar(require("@angular/compiler-cli/src/perform_compile"), exports);
    tslib_1.__exportStar(require("@angular/compiler-cli/src/tooling"), exports);
    var util_1 = require("@angular/compiler-cli/src/transformers/util");
    exports.ngToTsDiagnostic = util_1.ngToTsDiagnostic;
    var tsc_plugin_1 = require("@angular/compiler-cli/src/ngtsc/tsc_plugin");
    exports.NgTscPlugin = tsc_plugin_1.NgTscPlugin;
    file_system_1.setFileSystem(new file_system_1.NodeJSFileSystem());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsMkVBQXdFO0lBRXhFLDhDQUF5SDtJQUF4RCxxQ0FBQSxlQUFlLENBQUE7SUFBRSxrQ0FBQSxZQUFZLENBQUE7SUFDOUYsNkRBQXNDO0lBQTlCLDRCQUFBLE9BQU8sQ0FBQTtJQUVmLG1GQUErQjtJQUMvQixxRkFBdUM7SUFDdkMsOEZBQWdEO0lBRWhELG9GQUFzQztJQUN0Qyw0RUFBOEI7SUFLOUIsb0VBQXlEO0lBQWpELGtDQUFBLGdCQUFnQixDQUFBO0lBQ3hCLHlFQUFtRDtJQUEzQyxtQ0FBQSxXQUFXLENBQUE7SUFFbkIsMkJBQWEsQ0FBQyxJQUFJLDhCQUFnQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Tm9kZUpTRmlsZVN5c3RlbSwgc2V0RmlsZVN5c3RlbX0gZnJvbSAnLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuXG5leHBvcnQge0FvdENvbXBpbGVySG9zdCwgQW90Q29tcGlsZXJIb3N0IGFzIFN0YXRpY1JlZmxlY3Rvckhvc3QsIFN0YXRpY1JlZmxlY3RvciwgU3RhdGljU3ltYm9sfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5leHBvcnQge1ZFUlNJT059IGZyb20gJy4vc3JjL3ZlcnNpb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9tZXRhZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy90cmFuc2Zvcm1lcnMvYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3RyYW5zZm9ybWVycy9lbnRyeV9wb2ludHMnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9wZXJmb3JtX2NvbXBpbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvdG9vbGluZyc7XG5cbi8vIFRPRE8odGJvc2NoKTogcmVtb3ZlIHRoaXMgb25jZSB1c2FnZXMgaW4gRzMgYXJlIGNoYW5nZWQgdG8gYENvbXBpbGVyT3B0aW9uc2BcbmV4cG9ydCB7Q29tcGlsZXJPcHRpb25zIGFzIEFuZ3VsYXJDb21waWxlck9wdGlvbnN9IGZyb20gJy4vc3JjL3RyYW5zZm9ybWVycy9hcGknO1xuXG5leHBvcnQge25nVG9Uc0RpYWdub3N0aWN9IGZyb20gJy4vc3JjL3RyYW5zZm9ybWVycy91dGlsJztcbmV4cG9ydCB7TmdUc2NQbHVnaW59IGZyb20gJy4vc3JjL25ndHNjL3RzY19wbHVnaW4nO1xuXG5zZXRGaWxlU3lzdGVtKG5ldyBOb2RlSlNGaWxlU3lzdGVtKCkpO1xuIl19