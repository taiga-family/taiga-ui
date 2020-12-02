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
        define("@angular/compiler-cli/src/ngtsc/cycles", ["require", "exports", "@angular/compiler-cli/src/ngtsc/cycles/src/analyzer", "@angular/compiler-cli/src/ngtsc/cycles/src/imports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var analyzer_1 = require("@angular/compiler-cli/src/ngtsc/cycles/src/analyzer");
    exports.CycleAnalyzer = analyzer_1.CycleAnalyzer;
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/cycles/src/imports");
    exports.ImportGraph = imports_1.ImportGraph;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2N5Y2xlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILGdGQUE2QztJQUFyQyxtQ0FBQSxhQUFhLENBQUE7SUFDckIsOEVBQTBDO0lBQWxDLGdDQUFBLFdBQVcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtDeWNsZUFuYWx5emVyfSBmcm9tICcuL3NyYy9hbmFseXplcic7XG5leHBvcnQge0ltcG9ydEdyYXBofSBmcm9tICcuL3NyYy9pbXBvcnRzJztcbiJdfQ==