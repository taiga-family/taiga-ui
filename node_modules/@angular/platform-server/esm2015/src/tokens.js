/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * Config object passed to initialize the platform.
 *
 * \@publicApi
 * @record
 */
export function PlatformConfig() { }
if (false) {
    /** @type {?|undefined} */
    PlatformConfig.prototype.document;
    /** @type {?|undefined} */
    PlatformConfig.prototype.url;
}
/**
 * The DI token for setting the initial config for the platform.
 *
 * \@publicApi
 * @type {?}
 */
export const INITIAL_CONFIG = new InjectionToken('Server.INITIAL_CONFIG');
/**
 * A function that will be executed when calling `renderModuleFactory` or `renderModule` just
 * before current platform state is rendered to string.
 *
 * \@publicApi
 * @type {?}
 */
export const BEFORE_APP_SERIALIZED = new InjectionToken('Server.RENDER_MODULE_HOOK');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tc2VydmVyL3NyYy90b2tlbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU83QyxvQ0FHQzs7O0lBRkMsa0NBQWtCOztJQUNsQiw2QkFBYTs7Ozs7Ozs7QUFRZixNQUFNLE9BQU8sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFpQix1QkFBdUIsQ0FBQzs7Ozs7Ozs7QUFRekYsTUFBTSxPQUFPLHFCQUFxQixHQUM5QixJQUFJLGNBQWMsQ0FBb0MsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIENvbmZpZyBvYmplY3QgcGFzc2VkIHRvIGluaXRpYWxpemUgdGhlIHBsYXRmb3JtLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGF0Zm9ybUNvbmZpZyB7XG4gIGRvY3VtZW50Pzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogVGhlIERJIHRva2VuIGZvciBzZXR0aW5nIHRoZSBpbml0aWFsIGNvbmZpZyBmb3IgdGhlIHBsYXRmb3JtLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IElOSVRJQUxfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFBsYXRmb3JtQ29uZmlnPignU2VydmVyLklOSVRJQUxfQ09ORklHJyk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBjYWxsaW5nIGByZW5kZXJNb2R1bGVGYWN0b3J5YCBvciBgcmVuZGVyTW9kdWxlYCBqdXN0XG4gKiBiZWZvcmUgY3VycmVudCBwbGF0Zm9ybSBzdGF0ZSBpcyByZW5kZXJlZCB0byBzdHJpbmcuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQkVGT1JFX0FQUF9TRVJJQUxJWkVEID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48QXJyYXk8KCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4+PignU2VydmVyLlJFTkRFUl9NT0RVTEVfSE9PSycpO1xuIl19