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
        define("@angular/compiler-cli/src/ngtsc/entry_point", ["require", "exports", "@angular/compiler-cli/src/ngtsc/entry_point/src/generator", "@angular/compiler-cli/src/ngtsc/entry_point/src/logic", "@angular/compiler-cli/src/ngtsc/entry_point/src/private_export_checker", "@angular/compiler-cli/src/ngtsc/entry_point/src/reference_graph"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var generator_1 = require("@angular/compiler-cli/src/ngtsc/entry_point/src/generator");
    exports.FlatIndexGenerator = generator_1.FlatIndexGenerator;
    var logic_1 = require("@angular/compiler-cli/src/ngtsc/entry_point/src/logic");
    exports.findFlatIndexEntryPoint = logic_1.findFlatIndexEntryPoint;
    var private_export_checker_1 = require("@angular/compiler-cli/src/ngtsc/entry_point/src/private_export_checker");
    exports.checkForPrivateExports = private_export_checker_1.checkForPrivateExports;
    var reference_graph_1 = require("@angular/compiler-cli/src/ngtsc/entry_point/src/reference_graph");
    exports.ReferenceGraph = reference_graph_1.ReferenceGraph;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2VudHJ5X3BvaW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsdUZBQW1EO0lBQTNDLHlDQUFBLGtCQUFrQixDQUFBO0lBQzFCLCtFQUFvRDtJQUE1QywwQ0FBQSx1QkFBdUIsQ0FBQTtJQUMvQixpSEFBb0U7SUFBNUQsMERBQUEsc0JBQXNCLENBQUE7SUFDOUIsbUdBQXFEO0lBQTdDLDJDQUFBLGNBQWMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtGbGF0SW5kZXhHZW5lcmF0b3J9IGZyb20gJy4vc3JjL2dlbmVyYXRvcic7XG5leHBvcnQge2ZpbmRGbGF0SW5kZXhFbnRyeVBvaW50fSBmcm9tICcuL3NyYy9sb2dpYyc7XG5leHBvcnQge2NoZWNrRm9yUHJpdmF0ZUV4cG9ydHN9IGZyb20gJy4vc3JjL3ByaXZhdGVfZXhwb3J0X2NoZWNrZXInO1xuZXhwb3J0IHtSZWZlcmVuY2VHcmFwaH0gZnJvbSAnLi9zcmMvcmVmZXJlbmNlX2dyYXBoJztcbiJdfQ==