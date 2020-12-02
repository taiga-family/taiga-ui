/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ERROR_DEBUG_CONTEXT, ERROR_LOGGER, ERROR_ORIGINAL_ERROR, ERROR_TYPE } from './util/errors';
/**
 * @param {?} error
 * @return {?}
 */
export function getType(error) {
    return ((/** @type {?} */ (error)))[ERROR_TYPE];
}
/**
 * @param {?} error
 * @return {?}
 */
export function getDebugContext(error) {
    return ((/** @type {?} */ (error)))[ERROR_DEBUG_CONTEXT];
}
/**
 * @param {?} error
 * @return {?}
 */
export function getOriginalError(error) {
    return ((/** @type {?} */ (error)))[ERROR_ORIGINAL_ERROR];
}
/**
 * @param {?} error
 * @return {?}
 */
export function getErrorLogger(error) {
    return ((/** @type {?} */ (error)))[ERROR_LOGGER] || defaultErrorLogger;
}
/**
 * @param {?} console
 * @param {...?} values
 * @return {?}
 */
function defaultErrorLogger(console, ...values) {
    ((/** @type {?} */ (console.error)))(...values);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUdsRyxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQVk7SUFDbEMsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQVk7SUFDMUMsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM3QyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUFZO0lBQzNDLE9BQU8sQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQVk7SUFDekMsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksa0JBQWtCLENBQUM7QUFDNUQsQ0FBQzs7Ozs7O0FBR0QsU0FBUyxrQkFBa0IsQ0FBQyxPQUFnQixFQUFFLEdBQUcsTUFBYTtJQUM1RCxDQUFDLG1CQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtFUlJPUl9ERUJVR19DT05URVhULCBFUlJPUl9MT0dHRVIsIEVSUk9SX09SSUdJTkFMX0VSUk9SLCBFUlJPUl9UWVBFfSBmcm9tICcuL3V0aWwvZXJyb3JzJztcbmltcG9ydCB7RGVidWdDb250ZXh0fSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZShlcnJvcjogRXJyb3IpOiBGdW5jdGlvbiB7XG4gIHJldHVybiAoZXJyb3IgYXMgYW55KVtFUlJPUl9UWVBFXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlYnVnQ29udGV4dChlcnJvcjogRXJyb3IpOiBEZWJ1Z0NvbnRleHQge1xuICByZXR1cm4gKGVycm9yIGFzIGFueSlbRVJST1JfREVCVUdfQ09OVEVYVF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmlnaW5hbEVycm9yKGVycm9yOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIChlcnJvciBhcyBhbnkpW0VSUk9SX09SSUdJTkFMX0VSUk9SXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yTG9nZ2VyKGVycm9yOiBFcnJvcik6IChjb25zb2xlOiBDb25zb2xlLCAuLi52YWx1ZXM6IGFueVtdKSA9PiB2b2lkIHtcbiAgcmV0dXJuIChlcnJvciBhcyBhbnkpW0VSUk9SX0xPR0dFUl0gfHwgZGVmYXVsdEVycm9yTG9nZ2VyO1xufVxuXG5cbmZ1bmN0aW9uIGRlZmF1bHRFcnJvckxvZ2dlcihjb25zb2xlOiBDb25zb2xlLCAuLi52YWx1ZXM6IGFueVtdKSB7XG4gICg8YW55PmNvbnNvbGUuZXJyb3IpKC4uLnZhbHVlcyk7XG59Il19