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
        define("zone.js/lib/browser/register-element", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function registerElementPatch(_global, api) {
        var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
        if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
            return;
        }
        var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
    }
    exports.registerElementPatch = registerElementPatch;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL2Jyb3dzZXIvcmVnaXN0ZXItZWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILFNBQWdCLG9CQUFvQixDQUFDLE9BQVksRUFBRSxHQUFpQjtRQUM1RCxJQUFBLDJCQUE2QyxFQUE1Qyx3QkFBUyxFQUFFLGdCQUFpQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsSUFBVSxPQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0UsT0FBTztTQUNSO1FBRUQsSUFBTSxTQUFTLEdBQ1gsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBRTVGLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQVZELG9EQVVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJFbGVtZW50UGF0Y2goX2dsb2JhbDogYW55LCBhcGk6IF9ab25lUHJpdmF0ZSkge1xuICBjb25zdCB7aXNCcm93c2VyLCBpc01peH0gPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpICE7XG4gIGlmICgoIWlzQnJvd3NlciAmJiAhaXNNaXgpIHx8ICEoJ3JlZ2lzdGVyRWxlbWVudCcgaW4gKDxhbnk+X2dsb2JhbCkuZG9jdW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY2FsbGJhY2tzID1cbiAgICAgIFsnY3JlYXRlZENhbGxiYWNrJywgJ2F0dGFjaGVkQ2FsbGJhY2snLCAnZGV0YWNoZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXTtcblxuICBhcGkucGF0Y2hDYWxsYmFja3MoYXBpLCBkb2N1bWVudCwgJ0RvY3VtZW50JywgJ3JlZ2lzdGVyRWxlbWVudCcsIGNhbGxiYWNrcyk7XG59XG4iXX0=