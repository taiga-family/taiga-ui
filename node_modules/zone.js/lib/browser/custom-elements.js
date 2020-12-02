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
        define("zone.js/lib/browser/custom-elements", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function patchCustomElements(_global, api) {
        var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
        if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
            return;
        }
        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }
    exports.patchCustomElements = patchCustomElements;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvYnJvd3Nlci9jdXN0b20tZWxlbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxTQUFnQixtQkFBbUIsQ0FBQyxPQUFZLEVBQUUsR0FBaUI7UUFDM0QsSUFBQSwyQkFBNkMsRUFBNUMsd0JBQVMsRUFBRSxnQkFBaUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsRUFBRTtZQUMxRixPQUFPO1NBQ1I7UUFFRCxJQUFNLFNBQVMsR0FDWCxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFFakcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQVZELGtEQVVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hDdXN0b21FbGVtZW50cyhfZ2xvYmFsOiBhbnksIGFwaTogX1pvbmVQcml2YXRlKSB7XG4gIGNvbnN0IHtpc0Jyb3dzZXIsIGlzTWl4fSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCkgITtcbiAgaWYgKCghaXNCcm93c2VyICYmICFpc01peCkgfHwgIV9nbG9iYWxbJ2N1c3RvbUVsZW1lbnRzJ10gfHwgISgnY3VzdG9tRWxlbWVudHMnIGluIF9nbG9iYWwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY2FsbGJhY2tzID1cbiAgICAgIFsnY29ubmVjdGVkQ2FsbGJhY2snLCAnZGlzY29ubmVjdGVkQ2FsbGJhY2snLCAnYWRvcHRlZENhbGxiYWNrJywgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayddO1xuXG4gIGFwaS5wYXRjaENhbGxiYWNrcyhhcGksIF9nbG9iYWwuY3VzdG9tRWxlbWVudHMsICdjdXN0b21FbGVtZW50cycsICdkZWZpbmUnLCBjYWxsYmFja3MpO1xufVxuIl19