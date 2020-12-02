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
        define("@angular/compiler-cli/src/ngtsc/annotations/src/references_registry", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * This registry does nothing, since ngtsc does not currently need
     * this functionality.
     * The ngcc tool implements a working version for its purposes.
     */
    var NoopReferencesRegistry = /** @class */ (function () {
        function NoopReferencesRegistry() {
        }
        NoopReferencesRegistry.prototype.add = function (source) {
            var references = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                references[_i - 1] = arguments[_i];
            }
        };
        return NoopReferencesRegistry;
    }());
    exports.NoopReferencesRegistry = NoopReferencesRegistry;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlc19yZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvYW5ub3RhdGlvbnMvc3JjL3JlZmVyZW5jZXNfcmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFpQkg7Ozs7T0FJRztJQUNIO1FBQUE7UUFFQSxDQUFDO1FBREMsb0NBQUcsR0FBSCxVQUFJLE1BQXNCO1lBQUUsb0JBQTBDO2lCQUExQyxVQUEwQyxFQUExQyxxQkFBMEMsRUFBMUMsSUFBMEM7Z0JBQTFDLG1DQUEwQzs7UUFBUyxDQUFDO1FBQ2xGLDZCQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFGWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gJy4uLy4uL2ltcG9ydHMnO1xuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSBpZiB5b3Ugd2FudCBEZWNvcmF0b3JIYW5kbGVycyB0byByZWdpc3RlclxuICogcmVmZXJlbmNlcyB0aGF0IHRoZXkgZmluZCBpbiB0aGVpciBhbmFseXNpcyBvZiB0aGUgY29kZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWZlcmVuY2VzUmVnaXN0cnkge1xuICAvKipcbiAgICogUmVnaXN0ZXIgb25lIG9yIG1vcmUgcmVmZXJlbmNlcyBpbiB0aGUgcmVnaXN0cnkuXG4gICAqIEBwYXJhbSByZWZlcmVuY2VzIEEgY29sbGVjdGlvbiBvZiByZWZlcmVuY2VzIHRvIHJlZ2lzdGVyLlxuICAgKi9cbiAgYWRkKHNvdXJjZTogdHMuRGVjbGFyYXRpb24sIC4uLnJlZmVyZW5jZXM6IFJlZmVyZW5jZTx0cy5EZWNsYXJhdGlvbj5bXSk6IHZvaWQ7XG59XG5cbi8qKlxuICogVGhpcyByZWdpc3RyeSBkb2VzIG5vdGhpbmcsIHNpbmNlIG5ndHNjIGRvZXMgbm90IGN1cnJlbnRseSBuZWVkXG4gKiB0aGlzIGZ1bmN0aW9uYWxpdHkuXG4gKiBUaGUgbmdjYyB0b29sIGltcGxlbWVudHMgYSB3b3JraW5nIHZlcnNpb24gZm9yIGl0cyBwdXJwb3Nlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vb3BSZWZlcmVuY2VzUmVnaXN0cnkgaW1wbGVtZW50cyBSZWZlcmVuY2VzUmVnaXN0cnkge1xuICBhZGQoc291cmNlOiB0cy5EZWNsYXJhdGlvbiwgLi4ucmVmZXJlbmNlczogUmVmZXJlbmNlPHRzLkRlY2xhcmF0aW9uPltdKTogdm9pZCB7fVxufSJdfQ==