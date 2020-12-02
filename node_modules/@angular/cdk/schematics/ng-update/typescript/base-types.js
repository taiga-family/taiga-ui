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
        define("@angular/cdk/schematics/ng-update/typescript/base-types", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    /** Determines the base types of the specified class declaration. */
    function determineBaseTypes(node) {
        if (!node.heritageClauses) {
            return null;
        }
        return node.heritageClauses
            .reduce((types, clause) => types.concat(clause.types), [])
            .map(typeExpression => typeExpression.expression)
            .filter(expression => expression && ts.isIdentifier(expression))
            .map((identifier) => identifier.text);
    }
    exports.determineBaseTypes = determineBaseTypes;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy9uZy11cGRhdGUvdHlwZXNjcmlwdC9iYXNlLXR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBRWpDLG9FQUFvRTtJQUNwRSxTQUFnQixrQkFBa0IsQ0FBQyxJQUF5QjtRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsZUFBZTthQUN0QixNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFzQyxDQUFDO2FBQzdGLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7YUFDaEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDL0QsR0FBRyxDQUFDLENBQUMsVUFBeUIsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFWRCxnREFVQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuLyoqIERldGVybWluZXMgdGhlIGJhc2UgdHlwZXMgb2YgdGhlIHNwZWNpZmllZCBjbGFzcyBkZWNsYXJhdGlvbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVCYXNlVHlwZXMobm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IHN0cmluZ1tdfG51bGwge1xuICBpZiAoIW5vZGUuaGVyaXRhZ2VDbGF1c2VzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbm9kZS5oZXJpdGFnZUNsYXVzZXNcbiAgICAgIC5yZWR1Y2UoKHR5cGVzLCBjbGF1c2UpID0+IHR5cGVzLmNvbmNhdChjbGF1c2UudHlwZXMpLCBbXSBhcyB0cy5FeHByZXNzaW9uV2l0aFR5cGVBcmd1bWVudHNbXSlcbiAgICAgIC5tYXAodHlwZUV4cHJlc3Npb24gPT4gdHlwZUV4cHJlc3Npb24uZXhwcmVzc2lvbilcbiAgICAgIC5maWx0ZXIoZXhwcmVzc2lvbiA9PiBleHByZXNzaW9uICYmIHRzLmlzSWRlbnRpZmllcihleHByZXNzaW9uKSlcbiAgICAgIC5tYXAoKGlkZW50aWZpZXI6IHRzLklkZW50aWZpZXIpID0+IGlkZW50aWZpZXIudGV4dCk7XG59XG4iXX0=