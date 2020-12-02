/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/platform_id.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
export const PLATFORM_BROWSER_ID = 'browser';
/** @type {?} */
export const PLATFORM_SERVER_ID = 'server';
/** @type {?} */
export const PLATFORM_WORKER_APP_ID = 'browserWorkerApp';
/** @type {?} */
export const PLATFORM_WORKER_UI_ID = 'browserWorkerUi';
/**
 * Returns whether a platform id represents a browser platform.
 * \@publicApi
 * @param {?} platformId
 * @return {?}
 */
export function isPlatformBrowser(platformId) {
    return platformId === PLATFORM_BROWSER_ID;
}
/**
 * Returns whether a platform id represents a server platform.
 * \@publicApi
 * @param {?} platformId
 * @return {?}
 */
export function isPlatformServer(platformId) {
    return platformId === PLATFORM_SERVER_ID;
}
/**
 * Returns whether a platform id represents a web worker app platform.
 * \@publicApi
 * @param {?} platformId
 * @return {?}
 */
export function isPlatformWorkerApp(platformId) {
    return platformId === PLATFORM_WORKER_APP_ID;
}
/**
 * Returns whether a platform id represents a web worker UI platform.
 * \@publicApi
 * @param {?} platformId
 * @return {?}
 */
export function isPlatformWorkerUi(platformId) {
    return platformId === PLATFORM_WORKER_UI_ID;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1faWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL3BsYXRmb3JtX2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsU0FBUzs7QUFDNUMsTUFBTSxPQUFPLGtCQUFrQixHQUFHLFFBQVE7O0FBQzFDLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxrQkFBa0I7O0FBQ3hELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxpQkFBaUI7Ozs7Ozs7QUFNdEQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFVBQWtCO0lBQ2xELE9BQU8sVUFBVSxLQUFLLG1CQUFtQixDQUFDO0FBQzVDLENBQUM7Ozs7Ozs7QUFNRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsVUFBa0I7SUFDakQsT0FBTyxVQUFVLEtBQUssa0JBQWtCLENBQUM7QUFDM0MsQ0FBQzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxVQUFrQjtJQUNwRCxPQUFPLFVBQVUsS0FBSyxzQkFBc0IsQ0FBQztBQUMvQyxDQUFDOzs7Ozs7O0FBTUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFVBQWtCO0lBQ25ELE9BQU8sVUFBVSxLQUFLLHFCQUFxQixDQUFDO0FBQzlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjb25zdCBQTEFURk9STV9CUk9XU0VSX0lEID0gJ2Jyb3dzZXInO1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX1NFUlZFUl9JRCA9ICdzZXJ2ZXInO1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX1dPUktFUl9BUFBfSUQgPSAnYnJvd3NlcldvcmtlckFwcCc7XG5leHBvcnQgY29uc3QgUExBVEZPUk1fV09SS0VSX1VJX0lEID0gJ2Jyb3dzZXJXb3JrZXJVaSc7XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIGEgcGxhdGZvcm0gaWQgcmVwcmVzZW50cyBhIGJyb3dzZXIgcGxhdGZvcm0uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkOiBPYmplY3QpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBsYXRmb3JtSWQgPT09IFBMQVRGT1JNX0JST1dTRVJfSUQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIGEgcGxhdGZvcm0gaWQgcmVwcmVzZW50cyBhIHNlcnZlciBwbGF0Zm9ybS5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZDogT2JqZWN0KTogYm9vbGVhbiB7XG4gIHJldHVybiBwbGF0Zm9ybUlkID09PSBQTEFURk9STV9TRVJWRVJfSUQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIGEgcGxhdGZvcm0gaWQgcmVwcmVzZW50cyBhIHdlYiB3b3JrZXIgYXBwIHBsYXRmb3JtLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGF0Zm9ybVdvcmtlckFwcChwbGF0Zm9ybUlkOiBPYmplY3QpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBsYXRmb3JtSWQgPT09IFBMQVRGT1JNX1dPUktFUl9BUFBfSUQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIGEgcGxhdGZvcm0gaWQgcmVwcmVzZW50cyBhIHdlYiB3b3JrZXIgVUkgcGxhdGZvcm0uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYXRmb3JtV29ya2VyVWkocGxhdGZvcm1JZDogT2JqZWN0KTogYm9vbGVhbiB7XG4gIHJldHVybiBwbGF0Zm9ybUlkID09PSBQTEFURk9STV9XT1JLRVJfVUlfSUQ7XG59XG4iXX0=