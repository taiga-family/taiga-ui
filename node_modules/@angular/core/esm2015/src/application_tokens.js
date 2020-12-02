/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/application_tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from './di';
/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {\@link ViewEncapsulation#Emulated ViewEncapsulation.Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {\@link Injector}
 * using this token.
 * \@publicApi
 * @type {?}
 */
export const APP_ID = new InjectionToken('AppId');
/**
 * @return {?}
 */
export function _appIdRandomProviderFactory() {
    return `${_randomChar()}${_randomChar()}${_randomChar()}`;
}
/**
 * Providers that will generate a random APP_ID_TOKEN.
 * \@publicApi
 * @type {?}
 */
export const APP_ID_RANDOM_PROVIDER = {
    provide: APP_ID,
    useFactory: _appIdRandomProviderFactory,
    deps: (/** @type {?} */ ([])),
};
/**
 * @return {?}
 */
function _randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 25));
}
/**
 * A function that will be executed when a platform is initialized.
 * \@publicApi
 * @type {?}
 */
export const PLATFORM_INITIALIZER = new InjectionToken('Platform Initializer');
/**
 * A token that indicates an opaque platform id.
 * \@publicApi
 * @type {?}
 */
export const PLATFORM_ID = new InjectionToken('Platform ID');
/**
 * All callbacks provided via this token will be called for every component that is bootstrapped.
 * Signature of the callback:
 *
 * `(componentRef: ComponentRef) => void`.
 *
 * \@publicApi
 * @type {?}
 */
export const APP_BOOTSTRAP_LISTENER = new InjectionToken('appBootstrapListener');
/**
 * A token which indicates the root directory of the application
 * \@publicApi
 * @type {?}
 */
export const PACKAGE_ROOT_URL = new InjectionToken('Application Packages Root URL');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fdG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvYXBwbGljYXRpb25fdG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7OztBQWNwQyxNQUFNLE9BQU8sTUFBTSxHQUFHLElBQUksY0FBYyxDQUFTLE9BQU8sQ0FBQzs7OztBQUV6RCxNQUFNLFVBQVUsMkJBQTJCO0lBQ3pDLE9BQU8sR0FBRyxXQUFXLEVBQUUsR0FBRyxXQUFXLEVBQUUsR0FBRyxXQUFXLEVBQUUsRUFBRSxDQUFDO0FBQzVELENBQUM7Ozs7OztBQU1ELE1BQU0sT0FBTyxzQkFBc0IsR0FBRztJQUNwQyxPQUFPLEVBQUUsTUFBTTtJQUNmLFVBQVUsRUFBRSwyQkFBMkI7SUFDdkMsSUFBSSxFQUFFLG1CQUFPLEVBQUUsRUFBQTtDQUNoQjs7OztBQUVELFNBQVMsV0FBVztJQUNsQixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQzs7Ozs7O0FBTUQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUFvQixzQkFBc0IsQ0FBQzs7Ozs7O0FBTWpHLE1BQU0sT0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQVMsYUFBYSxDQUFDOzs7Ozs7Ozs7O0FBVXBFLE1BQU0sT0FBTyxzQkFBc0IsR0FDL0IsSUFBSSxjQUFjLENBQThDLHNCQUFzQixDQUFDOzs7Ozs7QUFNM0YsTUFBTSxPQUFPLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFTLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tICcuL2RpJztcbmltcG9ydCB7Q29tcG9uZW50UmVmfSBmcm9tICcuL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeSc7XG5cblxuLyoqXG4gKiBBIERJIFRva2VuIHJlcHJlc2VudGluZyBhIHVuaXF1ZSBzdHJpbmcgaWQgYXNzaWduZWQgdG8gdGhlIGFwcGxpY2F0aW9uIGJ5IEFuZ3VsYXIgYW5kIHVzZWRcbiAqIHByaW1hcmlseSBmb3IgcHJlZml4aW5nIGFwcGxpY2F0aW9uIGF0dHJpYnV0ZXMgYW5kIENTUyBzdHlsZXMgd2hlblxuICoge0BsaW5rIFZpZXdFbmNhcHN1bGF0aW9uI0VtdWxhdGVkIFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkfSBpcyBiZWluZyB1c2VkLlxuICpcbiAqIElmIHlvdSBuZWVkIHRvIGF2b2lkIHJhbmRvbWx5IGdlbmVyYXRlZCB2YWx1ZSB0byBiZSB1c2VkIGFzIGFuIGFwcGxpY2F0aW9uIGlkLCB5b3UgY2FuIHByb3ZpZGVcbiAqIGEgY3VzdG9tIHZhbHVlIHZpYSBhIERJIHByb3ZpZGVyIDwhLS0gVE9ETzogcHJvdmlkZXIgLS0+IGNvbmZpZ3VyaW5nIHRoZSByb290IHtAbGluayBJbmplY3Rvcn1cbiAqIHVzaW5nIHRoaXMgdG9rZW4uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfSUQgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignQXBwSWQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9hcHBJZFJhbmRvbVByb3ZpZGVyRmFjdG9yeSgpIHtcbiAgcmV0dXJuIGAke19yYW5kb21DaGFyKCl9JHtfcmFuZG9tQ2hhcigpfSR7X3JhbmRvbUNoYXIoKX1gO1xufVxuXG4vKipcbiAqIFByb3ZpZGVycyB0aGF0IHdpbGwgZ2VuZXJhdGUgYSByYW5kb20gQVBQX0lEX1RPS0VOLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQVBQX0lEX1JBTkRPTV9QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogQVBQX0lELFxuICB1c2VGYWN0b3J5OiBfYXBwSWRSYW5kb21Qcm92aWRlckZhY3RvcnksXG4gIGRlcHM6IDxhbnlbXT5bXSxcbn07XG5cbmZ1bmN0aW9uIF9yYW5kb21DaGFyKCk6IHN0cmluZyB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpKTtcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIGEgcGxhdGZvcm0gaXMgaW5pdGlhbGl6ZWQuXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBQTEFURk9STV9JTklUSUFMSVpFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBcnJheTwoKSA9PiB2b2lkPj4oJ1BsYXRmb3JtIEluaXRpYWxpemVyJyk7XG5cbi8qKlxuICogQSB0b2tlbiB0aGF0IGluZGljYXRlcyBhbiBvcGFxdWUgcGxhdGZvcm0gaWQuXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBQTEFURk9STV9JRCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxPYmplY3Q+KCdQbGF0Zm9ybSBJRCcpO1xuXG4vKipcbiAqIEFsbCBjYWxsYmFja3MgcHJvdmlkZWQgdmlhIHRoaXMgdG9rZW4gd2lsbCBiZSBjYWxsZWQgZm9yIGV2ZXJ5IGNvbXBvbmVudCB0aGF0IGlzIGJvb3RzdHJhcHBlZC5cbiAqIFNpZ25hdHVyZSBvZiB0aGUgY2FsbGJhY2s6XG4gKlxuICogYChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZikgPT4gdm9pZGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQVBQX0JPT1RTVFJBUF9MSVNURU5FUiA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPEFycmF5PChjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZD4+KCdhcHBCb290c3RyYXBMaXN0ZW5lcicpO1xuXG4vKipcbiAqIEEgdG9rZW4gd2hpY2ggaW5kaWNhdGVzIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgYXBwbGljYXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFBBQ0tBR0VfUk9PVF9VUkwgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignQXBwbGljYXRpb24gUGFja2FnZXMgUm9vdCBVUkwnKTtcbiJdfQ==