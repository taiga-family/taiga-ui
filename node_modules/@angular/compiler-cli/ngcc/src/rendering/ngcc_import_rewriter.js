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
        define("@angular/compiler-cli/ngcc/src/rendering/ngcc_import_rewriter", ["require", "exports", "@angular/compiler-cli/src/ngtsc/imports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var NgccFlatImportRewriter = /** @class */ (function () {
        function NgccFlatImportRewriter() {
        }
        NgccFlatImportRewriter.prototype.shouldImportSymbol = function (symbol, specifier) {
            if (specifier === '@angular/core') {
                // Don't use imports for @angular/core symbols in a flat bundle, as they'll be visible
                // directly.
                return false;
            }
            else {
                return true;
            }
        };
        NgccFlatImportRewriter.prototype.rewriteSymbol = function (symbol, specifier) {
            if (specifier === '@angular/core') {
                return imports_1.validateAndRewriteCoreSymbol(symbol);
            }
            else {
                return symbol;
            }
        };
        NgccFlatImportRewriter.prototype.rewriteSpecifier = function (originalModulePath, inContextOfFile) {
            return originalModulePath;
        };
        return NgccFlatImportRewriter;
    }());
    exports.NgccFlatImportRewriter = NgccFlatImportRewriter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjY19pbXBvcnRfcmV3cml0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvcmVuZGVyaW5nL25nY2NfaW1wb3J0X3Jld3JpdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsbUVBQXdGO0lBRXhGO1FBQUE7UUFzQkEsQ0FBQztRQXJCQyxtREFBa0IsR0FBbEIsVUFBbUIsTUFBYyxFQUFFLFNBQWlCO1lBQ2xELElBQUksU0FBUyxLQUFLLGVBQWUsRUFBRTtnQkFDakMsc0ZBQXNGO2dCQUN0RixZQUFZO2dCQUNaLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUM7YUFDYjtRQUNILENBQUM7UUFFRCw4Q0FBYSxHQUFiLFVBQWMsTUFBYyxFQUFFLFNBQWlCO1lBQzdDLElBQUksU0FBUyxLQUFLLGVBQWUsRUFBRTtnQkFDakMsT0FBTyxzQ0FBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDTCxPQUFPLE1BQU0sQ0FBQzthQUNmO1FBQ0gsQ0FBQztRQUVELGlEQUFnQixHQUFoQixVQUFpQixrQkFBMEIsRUFBRSxlQUF1QjtZQUNsRSxPQUFPLGtCQUFrQixDQUFDO1FBQzVCLENBQUM7UUFDSCw2QkFBQztJQUFELENBQUMsQUF0QkQsSUFzQkM7SUF0Qlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW1wb3J0UmV3cml0ZXIsIHZhbGlkYXRlQW5kUmV3cml0ZUNvcmVTeW1ib2x9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9pbXBvcnRzJztcblxuZXhwb3J0IGNsYXNzIE5nY2NGbGF0SW1wb3J0UmV3cml0ZXIgaW1wbGVtZW50cyBJbXBvcnRSZXdyaXRlciB7XG4gIHNob3VsZEltcG9ydFN5bWJvbChzeW1ib2w6IHN0cmluZywgc3BlY2lmaWVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoc3BlY2lmaWVyID09PSAnQGFuZ3VsYXIvY29yZScpIHtcbiAgICAgIC8vIERvbid0IHVzZSBpbXBvcnRzIGZvciBAYW5ndWxhci9jb3JlIHN5bWJvbHMgaW4gYSBmbGF0IGJ1bmRsZSwgYXMgdGhleSdsbCBiZSB2aXNpYmxlXG4gICAgICAvLyBkaXJlY3RseS5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV3cml0ZVN5bWJvbChzeW1ib2w6IHN0cmluZywgc3BlY2lmaWVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChzcGVjaWZpZXIgPT09ICdAYW5ndWxhci9jb3JlJykge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlQW5kUmV3cml0ZUNvcmVTeW1ib2woc3ltYm9sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICB9XG4gIH1cblxuICByZXdyaXRlU3BlY2lmaWVyKG9yaWdpbmFsTW9kdWxlUGF0aDogc3RyaW5nLCBpbkNvbnRleHRPZkZpbGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9yaWdpbmFsTW9kdWxlUGF0aDtcbiAgfVxufVxuIl19