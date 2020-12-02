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
        define("@angular/compiler-cli/src/ngtsc/scope/src/api", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9zY29wZS9zcmMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmVNZXRhLCBQaXBlTWV0YX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEnO1xuXG5cbi8qKlxuICogRGF0YSBmb3Igb25lIG9mIGEgZ2l2ZW4gTmdNb2R1bGUncyBzY29wZXMgKGVpdGhlciBjb21waWxhdGlvbiBzY29wZSBvciBleHBvcnQgc2NvcGVzKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTY29wZURhdGEge1xuICAvKipcbiAgICogRGlyZWN0aXZlcyBpbiB0aGUgZXhwb3J0ZWQgc2NvcGUgb2YgdGhlIG1vZHVsZS5cbiAgICovXG4gIGRpcmVjdGl2ZXM6IERpcmVjdGl2ZU1ldGFbXTtcblxuICAvKipcbiAgICogUGlwZXMgaW4gdGhlIGV4cG9ydGVkIHNjb3BlIG9mIHRoZSBtb2R1bGUuXG4gICAqL1xuICBwaXBlczogUGlwZU1ldGFbXTtcbn1cblxuLyoqXG4gKiBBbiBleHBvcnQgc2NvcGUgb2YgYW4gTmdNb2R1bGUsIGNvbnRhaW5pbmcgdGhlIGRpcmVjdGl2ZXMvcGlwZXMgaXQgY29udHJpYnV0ZXMgdG8gb3RoZXIgTmdNb2R1bGVzXG4gKiB3aGljaCBpbXBvcnQgaXQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXhwb3J0U2NvcGUge1xuICAvKipcbiAgICogVGhlIHNjb3BlIGV4cG9ydGVkIGJ5IGFuIE5nTW9kdWxlLCBhbmQgYXZhaWxhYmxlIGZvciBpbXBvcnQuXG4gICAqL1xuICBleHBvcnRlZDogU2NvcGVEYXRhO1xufVxuIl19