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
        define("@angular/compiler-cli/src/ngtsc/typecheck", ["require", "exports", "@angular/compiler-cli/src/ngtsc/typecheck/src/context", "@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics", "@angular/compiler-cli/src/ngtsc/typecheck/src/host", "@angular/compiler-cli/src/ngtsc/typecheck/src/type_check_file"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var context_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/context");
    exports.TypeCheckContext = context_1.TypeCheckContext;
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics");
    exports.isTemplateDiagnostic = diagnostics_1.isTemplateDiagnostic;
    var host_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/host");
    exports.TypeCheckProgramHost = host_1.TypeCheckProgramHost;
    var type_check_file_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/type_check_file");
    exports.typeCheckFilePath = type_check_file_1.typeCheckFilePath;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3R5cGVjaGVjay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUdILGlGQUErQztJQUF2QyxxQ0FBQSxnQkFBZ0IsQ0FBQTtJQUN4Qix5RkFBMkU7SUFBL0MsNkNBQUEsb0JBQW9CLENBQUE7SUFDaEQsMkVBQWdEO0lBQXhDLHNDQUFBLG9CQUFvQixDQUFBO0lBQzVCLGlHQUF3RDtJQUFoRCw4Q0FBQSxpQkFBaUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvYXBpJztcbmV4cG9ydCB7VHlwZUNoZWNrQ29udGV4dH0gZnJvbSAnLi9zcmMvY29udGV4dCc7XG5leHBvcnQge1RlbXBsYXRlRGlhZ25vc3RpYywgaXNUZW1wbGF0ZURpYWdub3N0aWN9IGZyb20gJy4vc3JjL2RpYWdub3N0aWNzJztcbmV4cG9ydCB7VHlwZUNoZWNrUHJvZ3JhbUhvc3R9IGZyb20gJy4vc3JjL2hvc3QnO1xuZXhwb3J0IHt0eXBlQ2hlY2tGaWxlUGF0aH0gZnJvbSAnLi9zcmMvdHlwZV9jaGVja19maWxlJztcbiJdfQ==