/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/debug/proxy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from '../util/global';
/**
 * Used to inform TS about the `Proxy` class existing globally.
 * @record
 */
function GlobalWithProxy() { }
if (false) {
    /** @type {?} */
    GlobalWithProxy.prototype.Proxy;
}
/**
 * Creates an instance of a `Proxy` and creates with an empty target object and binds it to the
 * provided handler.
 *
 * The reason why this function exists is because IE doesn't support
 * the `Proxy` class. For this reason an error must be thrown.
 * @param {?} handler
 * @return {?}
 */
export function createProxy(handler) {
    /** @type {?} */
    const g = (/** @type {?} */ ((/** @type {?} */ (global))));
    if (!g.Proxy) {
        throw new Error('Proxy is not supported in this browser');
    }
    return new g.Proxy({}, handler);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kZWJ1Zy9wcm94eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBS3RDLDhCQUVDOzs7SUFEQyxnQ0FBb0I7Ozs7Ozs7Ozs7O0FBVXRCLE1BQU0sVUFBVSxXQUFXLENBQUMsT0FBMEI7O1VBQzlDLENBQUMsR0FBRyxtQkFBQSxtQkFBQSxNQUFNLEVBQU8sRUFBbUI7SUFDMUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7S0FDM0Q7SUFDRCxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Z2xvYmFsfSBmcm9tICcuLi91dGlsL2dsb2JhbCc7XG5cbi8qKlxuICogVXNlZCB0byBpbmZvcm0gVFMgYWJvdXQgdGhlIGBQcm94eWAgY2xhc3MgZXhpc3RpbmcgZ2xvYmFsbHkuXG4gKi9cbmludGVyZmFjZSBHbG9iYWxXaXRoUHJveHkge1xuICBQcm94eTogdHlwZW9mIFByb3h5O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBgUHJveHlgIGFuZCBjcmVhdGVzIHdpdGggYW4gZW1wdHkgdGFyZ2V0IG9iamVjdCBhbmQgYmluZHMgaXQgdG8gdGhlXG4gKiBwcm92aWRlZCBoYW5kbGVyLlxuICpcbiAqIFRoZSByZWFzb24gd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzIGlzIGJlY2F1c2UgSUUgZG9lc24ndCBzdXBwb3J0XG4gKiB0aGUgYFByb3h5YCBjbGFzcy4gRm9yIHRoaXMgcmVhc29uIGFuIGVycm9yIG11c3QgYmUgdGhyb3duLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHkoaGFuZGxlcjogUHJveHlIYW5kbGVyPGFueT4pOiB7fSB7XG4gIGNvbnN0IGcgPSBnbG9iYWwgYXMgYW55IGFzIEdsb2JhbFdpdGhQcm94eTtcbiAgaWYgKCFnLlByb3h5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQcm94eSBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpO1xuICB9XG4gIHJldHVybiBuZXcgZy5Qcm94eSh7fSwgaGFuZGxlcik7XG59XG4iXX0=