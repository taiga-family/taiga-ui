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
        define("@angular/compiler-cli/src/ngtsc/imports", ["require", "exports", "@angular/compiler-cli/src/ngtsc/imports/src/alias", "@angular/compiler-cli/src/ngtsc/imports/src/core", "@angular/compiler-cli/src/ngtsc/imports/src/default", "@angular/compiler-cli/src/ngtsc/imports/src/emitter", "@angular/compiler-cli/src/ngtsc/imports/src/references", "@angular/compiler-cli/src/ngtsc/imports/src/resolver"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var alias_1 = require("@angular/compiler-cli/src/ngtsc/imports/src/alias");
    exports.AliasStrategy = alias_1.AliasStrategy;
    exports.PrivateExportAliasingHost = alias_1.PrivateExportAliasingHost;
    exports.UnifiedModulesAliasingHost = alias_1.UnifiedModulesAliasingHost;
    var core_1 = require("@angular/compiler-cli/src/ngtsc/imports/src/core");
    exports.NoopImportRewriter = core_1.NoopImportRewriter;
    exports.R3SymbolsImportRewriter = core_1.R3SymbolsImportRewriter;
    exports.validateAndRewriteCoreSymbol = core_1.validateAndRewriteCoreSymbol;
    var default_1 = require("@angular/compiler-cli/src/ngtsc/imports/src/default");
    exports.DefaultImportTracker = default_1.DefaultImportTracker;
    exports.NOOP_DEFAULT_IMPORT_RECORDER = default_1.NOOP_DEFAULT_IMPORT_RECORDER;
    var emitter_1 = require("@angular/compiler-cli/src/ngtsc/imports/src/emitter");
    exports.AbsoluteModuleStrategy = emitter_1.AbsoluteModuleStrategy;
    exports.ImportFlags = emitter_1.ImportFlags;
    exports.LocalIdentifierStrategy = emitter_1.LocalIdentifierStrategy;
    exports.LogicalProjectStrategy = emitter_1.LogicalProjectStrategy;
    exports.ReferenceEmitter = emitter_1.ReferenceEmitter;
    exports.RelativePathStrategy = emitter_1.RelativePathStrategy;
    exports.UnifiedModulesStrategy = emitter_1.UnifiedModulesStrategy;
    var references_1 = require("@angular/compiler-cli/src/ngtsc/imports/src/references");
    exports.Reference = references_1.Reference;
    var resolver_1 = require("@angular/compiler-cli/src/ngtsc/imports/src/resolver");
    exports.ModuleResolver = resolver_1.ModuleResolver;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2ltcG9ydHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCwyRUFBK0c7SUFBekYsZ0NBQUEsYUFBYSxDQUFBO0lBQUUsNENBQUEseUJBQXlCLENBQUE7SUFBRSw2Q0FBQSwwQkFBMEIsQ0FBQTtJQUMxRix5RUFBcUg7SUFBN0Ysb0NBQUEsa0JBQWtCLENBQUE7SUFBRSx5Q0FBQSx1QkFBdUIsQ0FBQTtJQUFFLDhDQUFBLDRCQUE0QixDQUFBO0lBQ2pHLCtFQUF3RztJQUF6RSx5Q0FBQSxvQkFBb0IsQ0FBQTtJQUFFLGlEQUFBLDRCQUE0QixDQUFBO0lBQ2pGLCtFQUEwTTtJQUFsTSwyQ0FBQSxzQkFBc0IsQ0FBQTtJQUFFLGdDQUFBLFdBQVcsQ0FBQTtJQUFFLDRDQUFBLHVCQUF1QixDQUFBO0lBQUUsMkNBQUEsc0JBQXNCLENBQUE7SUFBeUIscUNBQUEsZ0JBQWdCLENBQUE7SUFBRSx5Q0FBQSxvQkFBb0IsQ0FBQTtJQUFFLDJDQUFBLHNCQUFzQixDQUFBO0lBRW5MLHFGQUF5RDtJQUFuQyxpQ0FBQSxTQUFTLENBQUE7SUFDL0IsaUZBQThDO0lBQXRDLG9DQUFBLGNBQWMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtBbGlhc2luZ0hvc3QsIEFsaWFzU3RyYXRlZ3ksIFByaXZhdGVFeHBvcnRBbGlhc2luZ0hvc3QsIFVuaWZpZWRNb2R1bGVzQWxpYXNpbmdIb3N0fSBmcm9tICcuL3NyYy9hbGlhcyc7XG5leHBvcnQge0ltcG9ydFJld3JpdGVyLCBOb29wSW1wb3J0UmV3cml0ZXIsIFIzU3ltYm9sc0ltcG9ydFJld3JpdGVyLCB2YWxpZGF0ZUFuZFJld3JpdGVDb3JlU3ltYm9sfSBmcm9tICcuL3NyYy9jb3JlJztcbmV4cG9ydCB7RGVmYXVsdEltcG9ydFJlY29yZGVyLCBEZWZhdWx0SW1wb3J0VHJhY2tlciwgTk9PUF9ERUZBVUxUX0lNUE9SVF9SRUNPUkRFUn0gZnJvbSAnLi9zcmMvZGVmYXVsdCc7XG5leHBvcnQge0Fic29sdXRlTW9kdWxlU3RyYXRlZ3ksIEltcG9ydEZsYWdzLCBMb2NhbElkZW50aWZpZXJTdHJhdGVneSwgTG9naWNhbFByb2plY3RTdHJhdGVneSwgUmVmZXJlbmNlRW1pdFN0cmF0ZWd5LCBSZWZlcmVuY2VFbWl0dGVyLCBSZWxhdGl2ZVBhdGhTdHJhdGVneSwgVW5pZmllZE1vZHVsZXNTdHJhdGVneX0gZnJvbSAnLi9zcmMvZW1pdHRlcic7XG5leHBvcnQge1JlZXhwb3J0fSBmcm9tICcuL3NyYy9yZWV4cG9ydCc7XG5leHBvcnQge093bmluZ01vZHVsZSwgUmVmZXJlbmNlfSBmcm9tICcuL3NyYy9yZWZlcmVuY2VzJztcbmV4cG9ydCB7TW9kdWxlUmVzb2x2ZXJ9IGZyb20gJy4vc3JjL3Jlc29sdmVyJztcbiJdfQ==