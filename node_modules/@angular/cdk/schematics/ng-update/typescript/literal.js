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
        define("@angular/cdk/schematics/ng-update/typescript/literal", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    /** Finds all start indices of the given search string in the input string. */
    function findAllSubstringIndices(input, search) {
        const result = [];
        let i = -1;
        while ((i = input.indexOf(search, i + 1)) !== -1) {
            result.push(i);
        }
        return result;
    }
    exports.findAllSubstringIndices = findAllSubstringIndices;
    /**
     * Checks whether the given node is either a string literal or a no-substitution template
     * literal. Note that we cannot use `ts.isStringLiteralLike()` because if developers update
     * an outdated project, their TypeScript version is not automatically being updated
     * and therefore could throw because the function is not available yet.
     * https://github.com/Microsoft/TypeScript/commit/8518343dc8762475a5e92c9f80b5c5725bd81796
     */
    function isStringLiteralLike(node) {
        return ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node);
    }
    exports.isStringLiteralLike = isStringLiteralLike;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0ZXJhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy9uZy11cGRhdGUvdHlwZXNjcmlwdC9saXRlcmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBRWpDLDhFQUE4RTtJQUM5RSxTQUFnQix1QkFBdUIsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNuRSxNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBUEQsMERBT0M7SUFFRDs7Ozs7O09BTUc7SUFDSCxTQUFnQixtQkFBbUIsQ0FBQyxJQUFhO1FBRS9DLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUhELGtEQUdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG4vKiogRmluZHMgYWxsIHN0YXJ0IGluZGljZXMgb2YgdGhlIGdpdmVuIHNlYXJjaCBzdHJpbmcgaW4gdGhlIGlucHV0IHN0cmluZy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsU3Vic3RyaW5nSW5kaWNlcyhpbnB1dDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICBsZXQgaSA9IC0xO1xuICB3aGlsZSAoKGkgPSBpbnB1dC5pbmRleE9mKHNlYXJjaCwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICByZXN1bHQucHVzaChpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBub2RlIGlzIGVpdGhlciBhIHN0cmluZyBsaXRlcmFsIG9yIGEgbm8tc3Vic3RpdHV0aW9uIHRlbXBsYXRlXG4gKiBsaXRlcmFsLiBOb3RlIHRoYXQgd2UgY2Fubm90IHVzZSBgdHMuaXNTdHJpbmdMaXRlcmFsTGlrZSgpYCBiZWNhdXNlIGlmIGRldmVsb3BlcnMgdXBkYXRlXG4gKiBhbiBvdXRkYXRlZCBwcm9qZWN0LCB0aGVpciBUeXBlU2NyaXB0IHZlcnNpb24gaXMgbm90IGF1dG9tYXRpY2FsbHkgYmVpbmcgdXBkYXRlZFxuICogYW5kIHRoZXJlZm9yZSBjb3VsZCB0aHJvdyBiZWNhdXNlIHRoZSBmdW5jdGlvbiBpcyBub3QgYXZhaWxhYmxlIHlldC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9jb21taXQvODUxODM0M2RjODc2MjQ3NWE1ZTkyYzlmODBiNWM1NzI1YmQ4MTc5NlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdMaXRlcmFsTGlrZShub2RlOiB0cy5Ob2RlKTpcbiAgICBub2RlIGlzICh0cy5TdHJpbmdMaXRlcmFsIHwgdHMuTm9TdWJzdGl0dXRpb25UZW1wbGF0ZUxpdGVyYWwpIHtcbiAgcmV0dXJuIHRzLmlzU3RyaW5nTGl0ZXJhbChub2RlKSB8fCB0cy5pc05vU3Vic3RpdHV0aW9uVGVtcGxhdGVMaXRlcmFsKG5vZGUpO1xufVxuIl19