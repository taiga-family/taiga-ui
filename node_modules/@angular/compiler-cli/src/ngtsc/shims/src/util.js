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
        define("@angular/compiler-cli/src/ngtsc/shims/src/util", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function generatedModuleName(originalModuleName, originalFileName, genSuffix) {
        var moduleName;
        if (originalFileName.endsWith('/index.ts')) {
            moduleName = originalModuleName + '/index' + genSuffix;
        }
        else {
            moduleName = originalModuleName + genSuffix;
        }
        return moduleName;
    }
    exports.generatedModuleName = generatedModuleName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2Mvc2hpbXMvc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxTQUFnQixtQkFBbUIsQ0FDL0Isa0JBQTBCLEVBQUUsZ0JBQXdCLEVBQUUsU0FBaUI7UUFDekUsSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFDLFVBQVUsR0FBRyxrQkFBa0IsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1NBQ3hEO2FBQU07WUFDTCxVQUFVLEdBQUcsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQVZELGtEQVVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVkTW9kdWxlTmFtZShcbiAgICBvcmlnaW5hbE1vZHVsZU5hbWU6IHN0cmluZywgb3JpZ2luYWxGaWxlTmFtZTogc3RyaW5nLCBnZW5TdWZmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBtb2R1bGVOYW1lOiBzdHJpbmc7XG4gIGlmIChvcmlnaW5hbEZpbGVOYW1lLmVuZHNXaXRoKCcvaW5kZXgudHMnKSkge1xuICAgIG1vZHVsZU5hbWUgPSBvcmlnaW5hbE1vZHVsZU5hbWUgKyAnL2luZGV4JyArIGdlblN1ZmZpeDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGVOYW1lID0gb3JpZ2luYWxNb2R1bGVOYW1lICsgZ2VuU3VmZml4O1xuICB9XG5cbiAgcmV0dXJuIG1vZHVsZU5hbWU7XG59XG4iXX0=