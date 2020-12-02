/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/utils/type_guards.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { UrlTree } from '../url_tree';
/**
 * Simple function check, but generic so type inference will flow. Example:
 *
 * function product(a: number, b: number) {
 *   return a * b;
 * }
 *
 * if (isFunction<product>(fn)) {
 *   return fn(1, 2);
 * } else {
 *   throw "Must provide the `product` function";
 * }
 * @template T
 * @param {?} v
 * @return {?}
 */
export function isFunction(v) {
    return typeof v === 'function';
}
/**
 * @param {?} v
 * @return {?}
 */
export function isBoolean(v) {
    return typeof v === 'boolean';
}
/**
 * @param {?} v
 * @return {?}
 */
export function isUrlTree(v) {
    return v instanceof UrlTree;
}
/**
 * @param {?} guard
 * @return {?}
 */
export function isCanLoad(guard) {
    return guard && isFunction(guard.canLoad);
}
/**
 * @param {?} guard
 * @return {?}
 */
export function isCanActivate(guard) {
    return guard && isFunction(guard.canActivate);
}
/**
 * @param {?} guard
 * @return {?}
 */
export function isCanActivateChild(guard) {
    return guard && isFunction(guard.canActivateChild);
}
/**
 * @template T
 * @param {?} guard
 * @return {?}
 */
export function isCanDeactivate(guard) {
    return guard && isFunction(guard.canDeactivate);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZV9ndWFyZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9yb3V0ZXIvc3JjL3V0aWxzL3R5cGVfZ3VhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXBDLE1BQU0sVUFBVSxVQUFVLENBQUksQ0FBTTtJQUNsQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUNqQyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsQ0FBTTtJQUM5QixPQUFPLE9BQU8sQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUNoQyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsQ0FBTTtJQUM5QixPQUFPLENBQUMsWUFBWSxPQUFPLENBQUM7QUFDOUIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQVU7SUFDbEMsT0FBTyxLQUFLLElBQUksVUFBVSxDQUFVLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyRCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBVTtJQUN0QyxPQUFPLEtBQUssSUFBSSxVQUFVLENBQWMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQVU7SUFDM0MsT0FBTyxLQUFLLElBQUksVUFBVSxDQUFtQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2RSxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFJLEtBQVU7SUFDM0MsT0FBTyxLQUFLLElBQUksVUFBVSxDQUFtQixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDcEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuRGVhY3RpdmF0ZSwgQ2FuTG9hZH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge1VybFRyZWV9IGZyb20gJy4uL3VybF90cmVlJztcblxuLyoqXG4gKiBTaW1wbGUgZnVuY3Rpb24gY2hlY2ssIGJ1dCBnZW5lcmljIHNvIHR5cGUgaW5mZXJlbmNlIHdpbGwgZmxvdy4gRXhhbXBsZTpcbiAqXG4gKiBmdW5jdGlvbiBwcm9kdWN0KGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gKiAgIHJldHVybiBhICogYjtcbiAqIH1cbiAqXG4gKiBpZiAoaXNGdW5jdGlvbjxwcm9kdWN0PihmbikpIHtcbiAqICAgcmV0dXJuIGZuKDEsIDIpO1xuICogfSBlbHNlIHtcbiAqICAgdGhyb3cgXCJNdXN0IHByb3ZpZGUgdGhlIGBwcm9kdWN0YCBmdW5jdGlvblwiO1xuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbjxUPih2OiBhbnkpOiB2IGlzIFQge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odjogYW55KTogdiBpcyBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnYm9vbGVhbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VybFRyZWUodjogYW55KTogdiBpcyBVcmxUcmVlIHtcbiAgcmV0dXJuIHYgaW5zdGFuY2VvZiBVcmxUcmVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDYW5Mb2FkKGd1YXJkOiBhbnkpOiBndWFyZCBpcyBDYW5Mb2FkIHtcbiAgcmV0dXJuIGd1YXJkICYmIGlzRnVuY3Rpb248Q2FuTG9hZD4oZ3VhcmQuY2FuTG9hZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NhbkFjdGl2YXRlKGd1YXJkOiBhbnkpOiBndWFyZCBpcyBDYW5BY3RpdmF0ZSB7XG4gIHJldHVybiBndWFyZCAmJiBpc0Z1bmN0aW9uPENhbkFjdGl2YXRlPihndWFyZC5jYW5BY3RpdmF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NhbkFjdGl2YXRlQ2hpbGQoZ3VhcmQ6IGFueSk6IGd1YXJkIGlzIENhbkFjdGl2YXRlQ2hpbGQge1xuICByZXR1cm4gZ3VhcmQgJiYgaXNGdW5jdGlvbjxDYW5BY3RpdmF0ZUNoaWxkPihndWFyZC5jYW5BY3RpdmF0ZUNoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FuRGVhY3RpdmF0ZTxUPihndWFyZDogYW55KTogZ3VhcmQgaXMgQ2FuRGVhY3RpdmF0ZTxUPiB7XG4gIHJldHVybiBndWFyZCAmJiBpc0Z1bmN0aW9uPENhbkRlYWN0aXZhdGU8VD4+KGd1YXJkLmNhbkRlYWN0aXZhdGUpO1xufVxuIl19