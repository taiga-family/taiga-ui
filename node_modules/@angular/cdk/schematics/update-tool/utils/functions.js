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
        define("@angular/cdk/schematics/update-tool/utils/functions", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    /**
     * Unwraps a given expression TypeScript node. Expressions can be wrapped within multiple
     * parentheses. e.g. "(((({exp}))))()". The function should return the TypeScript node
     * referring to the inner expression. e.g "exp".
     */
    function unwrapExpression(node) {
        return ts.isParenthesizedExpression(node) ? unwrapExpression(node.expression) : node;
    }
    exports.unwrapExpression = unwrapExpression;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL3VwZGF0ZS10b29sL3V0aWxzL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILGlDQUFpQztJQUVqQzs7OztPQUlHO0lBQ0gsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBOEM7UUFDN0UsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZGLENBQUM7SUFGRCw0Q0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuLyoqXG4gKiBVbndyYXBzIGEgZ2l2ZW4gZXhwcmVzc2lvbiBUeXBlU2NyaXB0IG5vZGUuIEV4cHJlc3Npb25zIGNhbiBiZSB3cmFwcGVkIHdpdGhpbiBtdWx0aXBsZVxuICogcGFyZW50aGVzZXMuIGUuZy4gXCIoKCgoe2V4cH0pKSkpKClcIi4gVGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gdGhlIFR5cGVTY3JpcHQgbm9kZVxuICogcmVmZXJyaW5nIHRvIHRoZSBpbm5lciBleHByZXNzaW9uLiBlLmcgXCJleHBcIi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcEV4cHJlc3Npb24obm9kZTogdHMuRXhwcmVzc2lvbnx0cy5QYXJlbnRoZXNpemVkRXhwcmVzc2lvbik6IHRzLkV4cHJlc3Npb24ge1xuICByZXR1cm4gdHMuaXNQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihub2RlKSA/IHVud3JhcEV4cHJlc3Npb24obm9kZS5leHByZXNzaW9uKSA6IG5vZGU7XG59XG4iXX0=