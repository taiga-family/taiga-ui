/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * @docs-private
 */
var PortalInjector = /** @class */ (function () {
    function PortalInjector(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    PortalInjector.prototype.get = function (token, notFoundValue) {
        var value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return PortalInjector;
}());
export { PortalInjector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWluamVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9wb3J0YWwvcG9ydGFsLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUlIOzs7O0dBSUc7QUFDSDtJQUNFLHdCQUNVLGVBQXlCLEVBQ3pCLGFBQWdDO1FBRGhDLG9CQUFlLEdBQWYsZUFBZSxDQUFVO1FBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUFJLENBQUM7SUFFL0MsNEJBQUcsR0FBSCxVQUFJLEtBQVUsRUFBRSxhQUFtQjtRQUNqQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQ3VzdG9tIGluamVjdG9yIHRvIGJlIHVzZWQgd2hlbiBwcm92aWRpbmcgY3VzdG9tXG4gKiBpbmplY3Rpb24gdG9rZW5zIHRvIGNvbXBvbmVudHMgaW5zaWRlIGEgcG9ydGFsLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgUG9ydGFsSW5qZWN0b3IgaW1wbGVtZW50cyBJbmplY3RvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3BhcmVudEluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9jdXN0b21Ub2tlbnM6IFdlYWtNYXA8YW55LCBhbnk+KSB7IH1cblxuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk6IGFueSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9jdXN0b21Ub2tlbnMuZ2V0KHRva2VuKTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEluamVjdG9yLmdldDxhbnk+KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcbiAgfVxufVxuIl19