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
        define("@angular/compiler-cli/src/tooling", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @module
     * @description
     * Tooling support helpers.
     */
    /**
     * Known values for global variables in `@angular/core` that Terser should set using
     * https://github.com/terser-js/terser#conditional-compilation
     */
    exports.GLOBAL_DEFS_FOR_TERSER = {
        ngDevMode: false,
        ngI18nClosureMode: false,
    };
    exports.GLOBAL_DEFS_FOR_TERSER_WITH_AOT = tslib_1.__assign(tslib_1.__assign({}, exports.GLOBAL_DEFS_FOR_TERSER), { ngJitMode: false });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvdG9vbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSDs7OztPQUlHO0lBRUg7OztPQUdHO0lBQ1UsUUFBQSxzQkFBc0IsR0FBRztRQUNwQyxTQUFTLEVBQUUsS0FBSztRQUNoQixpQkFBaUIsRUFBRSxLQUFLO0tBQ3pCLENBQUM7SUFFVyxRQUFBLCtCQUErQix5Q0FDdkMsOEJBQXNCLEtBQ3pCLFNBQVMsRUFBRSxLQUFLLElBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogVG9vbGluZyBzdXBwb3J0IGhlbHBlcnMuXG4gKi9cblxuLyoqXG4gKiBLbm93biB2YWx1ZXMgZm9yIGdsb2JhbCB2YXJpYWJsZXMgaW4gYEBhbmd1bGFyL2NvcmVgIHRoYXQgVGVyc2VyIHNob3VsZCBzZXQgdXNpbmdcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90ZXJzZXItanMvdGVyc2VyI2NvbmRpdGlvbmFsLWNvbXBpbGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBHTE9CQUxfREVGU19GT1JfVEVSU0VSID0ge1xuICBuZ0Rldk1vZGU6IGZhbHNlLFxuICBuZ0kxOG5DbG9zdXJlTW9kZTogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgR0xPQkFMX0RFRlNfRk9SX1RFUlNFUl9XSVRIX0FPVCA9IHtcbiAgLi4uR0xPQkFMX0RFRlNfRk9SX1RFUlNFUixcbiAgbmdKaXRNb2RlOiBmYWxzZSxcbn07XG4iXX0=