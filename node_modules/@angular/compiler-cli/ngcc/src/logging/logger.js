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
        define("@angular/compiler-cli/ngcc/src/logging/logger", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["debug"] = 0] = "debug";
        LogLevel[LogLevel["info"] = 1] = "info";
        LogLevel[LogLevel["warn"] = 2] = "warn";
        LogLevel[LogLevel["error"] = 3] = "error";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2xvZ2dpbmcvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBY0gsSUFBWSxRQUtYO0lBTEQsV0FBWSxRQUFRO1FBQ2xCLHlDQUFLLENBQUE7UUFDTCx1Q0FBSSxDQUFBO1FBQ0osdUNBQUksQ0FBQTtRQUNKLHlDQUFLLENBQUE7SUFDUCxDQUFDLEVBTFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFLbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIGlmIHlvdSB3YW50IHRvIHByb3ZpZGUgZGlmZmVyZW50IGxvZ2dpbmdcbiAqIG91dHB1dCBmcm9tIHRoZSBzdGFuZGFyZCBDb25zb2xlTG9nZ2VyLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIExvZ2dlciB7XG4gIGxldmVsOiBMb2dMZXZlbDtcbiAgZGVidWcoLi4uYXJnczogc3RyaW5nW10pOiB2b2lkO1xuICBpbmZvKC4uLmFyZ3M6IHN0cmluZ1tdKTogdm9pZDtcbiAgd2FybiguLi5hcmdzOiBzdHJpbmdbXSk6IHZvaWQ7XG4gIGVycm9yKC4uLmFyZ3M6IHN0cmluZ1tdKTogdm9pZDtcbn1cblxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBkZWJ1ZyxcbiAgaW5mbyxcbiAgd2FybixcbiAgZXJyb3IsXG59XG4iXX0=