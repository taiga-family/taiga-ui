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
        define("@angular/compiler-cli/src/ngtsc/cycles/src/analyzer", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Analyzes a `ts.Program` for cycles.
     */
    var CycleAnalyzer = /** @class */ (function () {
        function CycleAnalyzer(importGraph) {
            this.importGraph = importGraph;
        }
        /**
         * Check whether adding an import from `from` to `to` would create a cycle in the `ts.Program`.
         */
        CycleAnalyzer.prototype.wouldCreateCycle = function (from, to) {
            // Import of 'from' -> 'to' is illegal if an edge 'to' -> 'from' already exists.
            return this.importGraph.transitiveImportsOf(to).has(from);
        };
        /**
         * Record a synthetic import from `from` to `to`.
         *
         * This is an import that doesn't exist in the `ts.Program` but will be considered as part of the
         * import graph for cycle creation.
         */
        CycleAnalyzer.prototype.recordSyntheticImport = function (from, to) {
            this.importGraph.addSyntheticImport(from, to);
        };
        return CycleAnalyzer;
    }());
    exports.CycleAnalyzer = CycleAnalyzer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2N5Y2xlcy9zcmMvYW5hbHl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFNSDs7T0FFRztJQUNIO1FBQ0UsdUJBQW9CLFdBQXdCO1lBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQUcsQ0FBQztRQUVoRDs7V0FFRztRQUNILHdDQUFnQixHQUFoQixVQUFpQixJQUFtQixFQUFFLEVBQWlCO1lBQ3JELGdGQUFnRjtZQUNoRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILDZDQUFxQixHQUFyQixVQUFzQixJQUFtQixFQUFFLEVBQWlCO1lBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDSCxvQkFBQztJQUFELENBQUMsQUFwQkQsSUFvQkM7SUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0ltcG9ydEdyYXBofSBmcm9tICcuL2ltcG9ydHMnO1xuXG4vKipcbiAqIEFuYWx5emVzIGEgYHRzLlByb2dyYW1gIGZvciBjeWNsZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBDeWNsZUFuYWx5emVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbXBvcnRHcmFwaDogSW1wb3J0R3JhcGgpIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgYWRkaW5nIGFuIGltcG9ydCBmcm9tIGBmcm9tYCB0byBgdG9gIHdvdWxkIGNyZWF0ZSBhIGN5Y2xlIGluIHRoZSBgdHMuUHJvZ3JhbWAuXG4gICAqL1xuICB3b3VsZENyZWF0ZUN5Y2xlKGZyb206IHRzLlNvdXJjZUZpbGUsIHRvOiB0cy5Tb3VyY2VGaWxlKTogYm9vbGVhbiB7XG4gICAgLy8gSW1wb3J0IG9mICdmcm9tJyAtPiAndG8nIGlzIGlsbGVnYWwgaWYgYW4gZWRnZSAndG8nIC0+ICdmcm9tJyBhbHJlYWR5IGV4aXN0cy5cbiAgICByZXR1cm4gdGhpcy5pbXBvcnRHcmFwaC50cmFuc2l0aXZlSW1wb3J0c09mKHRvKS5oYXMoZnJvbSk7XG4gIH1cblxuICAvKipcbiAgICogUmVjb3JkIGEgc3ludGhldGljIGltcG9ydCBmcm9tIGBmcm9tYCB0byBgdG9gLlxuICAgKlxuICAgKiBUaGlzIGlzIGFuIGltcG9ydCB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGB0cy5Qcm9ncmFtYCBidXQgd2lsbCBiZSBjb25zaWRlcmVkIGFzIHBhcnQgb2YgdGhlXG4gICAqIGltcG9ydCBncmFwaCBmb3IgY3ljbGUgY3JlYXRpb24uXG4gICAqL1xuICByZWNvcmRTeW50aGV0aWNJbXBvcnQoZnJvbTogdHMuU291cmNlRmlsZSwgdG86IHRzLlNvdXJjZUZpbGUpOiB2b2lkIHtcbiAgICB0aGlzLmltcG9ydEdyYXBoLmFkZFN5bnRoZXRpY0ltcG9ydChmcm9tLCB0byk7XG4gIH1cbn1cbiJdfQ==