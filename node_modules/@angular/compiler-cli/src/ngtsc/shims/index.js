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
        define("@angular/compiler-cli/src/ngtsc/shims", ["require", "exports", "@angular/compiler-cli/src/ngtsc/shims/src/factory_generator", "@angular/compiler-cli/src/ngtsc/shims/src/factory_tracker", "@angular/compiler-cli/src/ngtsc/shims/src/summary_generator", "@angular/compiler-cli/src/ngtsc/shims/src/typecheck_shim"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var factory_generator_1 = require("@angular/compiler-cli/src/ngtsc/shims/src/factory_generator");
    exports.FactoryGenerator = factory_generator_1.FactoryGenerator;
    exports.generatedFactoryTransform = factory_generator_1.generatedFactoryTransform;
    var factory_tracker_1 = require("@angular/compiler-cli/src/ngtsc/shims/src/factory_tracker");
    exports.FactoryTracker = factory_tracker_1.FactoryTracker;
    var summary_generator_1 = require("@angular/compiler-cli/src/ngtsc/shims/src/summary_generator");
    exports.SummaryGenerator = summary_generator_1.SummaryGenerator;
    var typecheck_shim_1 = require("@angular/compiler-cli/src/ngtsc/shims/src/typecheck_shim");
    exports.TypeCheckShimGenerator = typecheck_shim_1.TypeCheckShimGenerator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3NoaW1zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBS0gsaUdBQWlHO0lBQXpGLCtDQUFBLGdCQUFnQixDQUFBO0lBQWUsd0RBQUEseUJBQXlCLENBQUE7SUFDaEUsNkZBQXFEO0lBQTdDLDJDQUFBLGNBQWMsQ0FBQTtJQUN0QixpR0FBeUQ7SUFBakQsK0NBQUEsZ0JBQWdCLENBQUE7SUFDeEIsMkZBQTREO0lBQXBELGtEQUFBLHNCQUFzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm5vZGVcIiAvPlxuXG5leHBvcnQge1NoaW1HZW5lcmF0b3J9IGZyb20gJy4vc3JjL2FwaSc7XG5leHBvcnQge0ZhY3RvcnlHZW5lcmF0b3IsIEZhY3RvcnlJbmZvLCBnZW5lcmF0ZWRGYWN0b3J5VHJhbnNmb3JtfSBmcm9tICcuL3NyYy9mYWN0b3J5X2dlbmVyYXRvcic7XG5leHBvcnQge0ZhY3RvcnlUcmFja2VyfSBmcm9tICcuL3NyYy9mYWN0b3J5X3RyYWNrZXInO1xuZXhwb3J0IHtTdW1tYXJ5R2VuZXJhdG9yfSBmcm9tICcuL3NyYy9zdW1tYXJ5X2dlbmVyYXRvcic7XG5leHBvcnQge1R5cGVDaGVja1NoaW1HZW5lcmF0b3J9IGZyb20gJy4vc3JjL3R5cGVjaGVja19zaGltJztcbiJdfQ==