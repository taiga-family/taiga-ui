/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/portal/portal-injector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * \@docs-private
 */
export class PortalInjector {
    /**
     * @param {?} _parentInjector
     * @param {?} _customTokens
     */
    constructor(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    get(token, notFoundValue) {
        /** @type {?} */
        const value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PortalInjector.prototype._parentInjector;
    /**
     * @type {?}
     * @private
     */
    PortalInjector.prototype._customTokens;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWluamVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9wb3J0YWwvcG9ydGFsLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3pCLFlBQ1UsZUFBeUIsRUFDekIsYUFBZ0M7UUFEaEMsb0JBQWUsR0FBZixlQUFlLENBQVU7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBQUksQ0FBQzs7Ozs7O0lBRS9DLEdBQUcsQ0FBQyxLQUFVLEVBQUUsYUFBbUI7O2NBQzNCLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDaEMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRjs7Ozs7O0lBWkcseUNBQWlDOzs7OztJQUNqQyx1Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQ3VzdG9tIGluamVjdG9yIHRvIGJlIHVzZWQgd2hlbiBwcm92aWRpbmcgY3VzdG9tXG4gKiBpbmplY3Rpb24gdG9rZW5zIHRvIGNvbXBvbmVudHMgaW5zaWRlIGEgcG9ydGFsLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgUG9ydGFsSW5qZWN0b3IgaW1wbGVtZW50cyBJbmplY3RvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3BhcmVudEluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9jdXN0b21Ub2tlbnM6IFdlYWtNYXA8YW55LCBhbnk+KSB7IH1cblxuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk6IGFueSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9jdXN0b21Ub2tlbnMuZ2V0KHRva2VuKTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEluamVjdG9yLmdldDxhbnk+KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcbiAgfVxufVxuIl19