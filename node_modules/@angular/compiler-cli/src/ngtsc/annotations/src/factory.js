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
        define("@angular/compiler-cli/src/ngtsc/annotations/src/factory", ["require", "exports", "@angular/compiler"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compiler_1 = require("@angular/compiler");
    function compileNgFactoryDefField(metadata) {
        var res = compiler_1.compileFactoryFunction(metadata);
        return { name: 'ɵfac', initializer: res.factory, statements: res.statements, type: res.type };
    }
    exports.compileNgFactoryDefField = compileNgFactoryDefField;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvYW5ub3RhdGlvbnMvc3JjL2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBNEU7SUFJNUUsU0FBZ0Isd0JBQXdCLENBQUMsUUFBMkI7UUFDbEUsSUFBTSxHQUFHLEdBQUcsaUNBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsT0FBTyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQztJQUM5RixDQUFDO0lBSEQsNERBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29tcGlsZUZhY3RvcnlGdW5jdGlvbiwgUjNGYWN0b3J5TWV0YWRhdGF9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuaW1wb3J0IHtDb21waWxlUmVzdWx0fSBmcm9tICcuLi8uLi90cmFuc2Zvcm0nO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZU5nRmFjdG9yeURlZkZpZWxkKG1ldGFkYXRhOiBSM0ZhY3RvcnlNZXRhZGF0YSk6IENvbXBpbGVSZXN1bHQge1xuICBjb25zdCByZXMgPSBjb21waWxlRmFjdG9yeUZ1bmN0aW9uKG1ldGFkYXRhKTtcbiAgcmV0dXJuIHtuYW1lOiAnybVmYWMnLCBpbml0aWFsaXplcjogcmVzLmZhY3RvcnksIHN0YXRlbWVudHM6IHJlcy5zdGF0ZW1lbnRzLCB0eXBlOiByZXMudHlwZX07XG59XG4iXX0=