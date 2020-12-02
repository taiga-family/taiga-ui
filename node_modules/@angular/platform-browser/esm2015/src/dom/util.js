/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/src/dom/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵglobal as global } from '@angular/core';
/** @type {?} */
const CAMEL_CASE_REGEXP = /([A-Z])/g;
/** @type {?} */
const DASH_CASE_REGEXP = /-([a-z])/g;
/**
 * @param {?} input
 * @return {?}
 */
export function camelCaseToDashCase(input) {
    return input.replace(CAMEL_CASE_REGEXP, (/**
     * @param {...?} m
     * @return {?}
     */
    (...m) => '-' + m[1].toLowerCase()));
}
/**
 * @param {?} input
 * @return {?}
 */
export function dashCaseToCamelCase(input) {
    return input.replace(DASH_CASE_REGEXP, (/**
     * @param {...?} m
     * @return {?}
     */
    (...m) => m[1].toUpperCase()));
}
/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param {?} name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param {?} value The value to export.
 * @return {?}
 */
export function exportNgVar(name, value) {
    if (typeof COMPILED === 'undefined' || !COMPILED) {
        // Note: we can't export `ng` when using closure enhanced optimization as:
        // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
        // - we can't declare a closure extern as the namespace `ng` is already used within Google
        //   for typings for angularJS (via `goog.provide('ng....')`).
        /** @type {?} */
        const ng = global['ng'] = ((/** @type {?} */ (global['ng']))) || {};
        ng[name] = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2RvbS91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztNQUUxQyxpQkFBaUIsR0FBRyxVQUFVOztNQUM5QixnQkFBZ0IsR0FBRyxXQUFXOzs7OztBQUdwQyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBYTtJQUMvQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCOzs7O0lBQUUsQ0FBQyxHQUFHLENBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO0FBQ3hGLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQWE7SUFDL0MsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQjs7OztJQUFFLENBQUMsR0FBRyxDQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO0FBQ2pGLENBQUM7Ozs7Ozs7OztBQVNELE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBWSxFQUFFLEtBQVU7SUFDbEQsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksQ0FBQyxRQUFRLEVBQUU7Ozs7OztjQUsxQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFvQyxDQUFDLElBQUksRUFBRTtRQUNsRixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHvJtWdsb2JhbCBhcyBnbG9iYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBDQU1FTF9DQVNFX1JFR0VYUCA9IC8oW0EtWl0pL2c7XG5jb25zdCBEQVNIX0NBU0VfUkVHRVhQID0gLy0oW2Etel0pL2c7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRvRGFzaENhc2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKENBTUVMX0NBU0VfUkVHRVhQLCAoLi4ubTogc3RyaW5nW10pID0+ICctJyArIG1bMV0udG9Mb3dlckNhc2UoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXNoQ2FzZVRvQ2FtZWxDYXNlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaW5wdXQucmVwbGFjZShEQVNIX0NBU0VfUkVHRVhQLCAoLi4ubTogc3RyaW5nW10pID0+IG1bMV0udG9VcHBlckNhc2UoKSk7XG59XG5cbi8qKlxuICogRXhwb3J0cyB0aGUgdmFsdWUgdW5kZXIgYSBnaXZlbiBgbmFtZWAgaW4gdGhlIGdsb2JhbCBwcm9wZXJ0eSBgbmdgLiBGb3IgZXhhbXBsZSBgbmcucHJvYmVgIGlmXG4gKiBgbmFtZWAgaXMgYCdwcm9iZSdgLlxuICogQHBhcmFtIG5hbWUgTmFtZSB1bmRlciB3aGljaCBpdCB3aWxsIGJlIGV4cG9ydGVkLiBLZWVwIGluIG1pbmQgdGhpcyB3aWxsIGJlIGEgcHJvcGVydHkgb2YgdGhlXG4gKiBnbG9iYWwgYG5nYCBvYmplY3QuXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGV4cG9ydC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydE5nVmFyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICBpZiAodHlwZW9mIENPTVBJTEVEID09PSAndW5kZWZpbmVkJyB8fCAhQ09NUElMRUQpIHtcbiAgICAvLyBOb3RlOiB3ZSBjYW4ndCBleHBvcnQgYG5nYCB3aGVuIHVzaW5nIGNsb3N1cmUgZW5oYW5jZWQgb3B0aW1pemF0aW9uIGFzOlxuICAgIC8vIC0gY2xvc3VyZSBkZWNsYXJlcyBnbG9iYWxzIGl0c2VsZiBmb3IgbWluaWZpZWQgbmFtZXMsIHdoaWNoIHNvbWV0aW1lcyBjbG9iYmVyIG91ciBgbmdgIGdsb2JhbFxuICAgIC8vIC0gd2UgY2FuJ3QgZGVjbGFyZSBhIGNsb3N1cmUgZXh0ZXJuIGFzIHRoZSBuYW1lc3BhY2UgYG5nYCBpcyBhbHJlYWR5IHVzZWQgd2l0aGluIEdvb2dsZVxuICAgIC8vICAgZm9yIHR5cGluZ3MgZm9yIGFuZ3VsYXJKUyAodmlhIGBnb29nLnByb3ZpZGUoJ25nLi4uLicpYCkuXG4gICAgY29uc3QgbmcgPSBnbG9iYWxbJ25nJ10gPSAoZ2xvYmFsWyduZyddIGFzIHtba2V5OiBzdHJpbmddOiBhbnl9IHwgdW5kZWZpbmVkKSB8fCB7fTtcbiAgICBuZ1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG4iXX0=