/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/di/forward_ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getClosureSafeProperty } from '../util/property';
import { stringify } from '../util/stringify';
/**
 * An interface that a function passed into {\@link forwardRef} has to implement.
 *
 * \@usageNotes
 * ### Example
 *
 * {\@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref_fn'}
 * \@publicApi
 * @record
 */
export function ForwardRefFn() { }
/** @type {?} */
const __forward_ref__ = getClosureSafeProperty({ __forward_ref__: getClosureSafeProperty });
/**
 * Allows to refer to references which are not yet defined.
 *
 * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
 * DI is declared, but not yet defined. It is also used when the `token` which we use when creating
 * a query is not yet defined.
 *
 * \@usageNotes
 * ### Example
 * {\@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
 * \@publicApi
 * @param {?} forwardRefFn
 * @return {?}
 */
export function forwardRef(forwardRefFn) {
    ((/** @type {?} */ (forwardRefFn))).__forward_ref__ = forwardRef;
    ((/** @type {?} */ (forwardRefFn))).toString = (/**
     * @return {?}
     */
    function () {
        return stringify(this());
    });
    return ((/** @type {?} */ ((/** @type {?} */ (forwardRefFn)))));
}
/**
 * Lazily retrieves the reference value from a forwardRef.
 *
 * Acts as the identity function when given a non-forward-ref value.
 *
 * \@usageNotes
 * ### Example
 *
 * {\@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
 *
 * @see `forwardRef`
 * \@publicApi
 * @template T
 * @param {?} type
 * @return {?}
 */
export function resolveForwardRef(type) {
    return isForwardRef(type) ? type() : type;
}
/**
 * Checks whether a function is wrapped by a `forwardRef`.
 * @param {?} fn
 * @return {?}
 */
export function isForwardRef(fn) {
    return typeof fn === 'function' && fn.hasOwnProperty(__forward_ref__) &&
        fn.__forward_ref__ === forwardRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yd2FyZF9yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kaS9mb3J3YXJkX3JlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7O0FBYTVDLGtDQUVDOztNQUVLLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQyxFQUFDLGVBQWUsRUFBRSxzQkFBc0IsRUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjekYsTUFBTSxVQUFVLFVBQVUsQ0FBQyxZQUEwQjtJQUNuRCxDQUFDLG1CQUFLLFlBQVksRUFBQSxDQUFDLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztJQUNqRCxDQUFDLG1CQUFLLFlBQVksRUFBQSxDQUFDLENBQUMsUUFBUTs7O0lBQUc7UUFDN0IsT0FBTyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUEsQ0FBQztJQUNGLE9BQU8sQ0FBQyxtQkFBVyxtQkFBSyxZQUFZLEVBQUEsRUFBQSxDQUFDLENBQUM7QUFDeEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlRCxNQUFNLFVBQVUsaUJBQWlCLENBQUksSUFBTztJQUMxQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM1QyxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEVBQU87SUFDbEMsT0FBTyxPQUFPLEVBQUUsS0FBSyxVQUFVLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFDakUsRUFBRSxDQUFDLGVBQWUsS0FBSyxVQUFVLENBQUM7QUFDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge2dldENsb3N1cmVTYWZlUHJvcGVydHl9IGZyb20gJy4uL3V0aWwvcHJvcGVydHknO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4uL3V0aWwvc3RyaW5naWZ5JztcblxuXG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIHRoYXQgYSBmdW5jdGlvbiBwYXNzZWQgaW50byB7QGxpbmsgZm9yd2FyZFJlZn0gaGFzIHRvIGltcGxlbWVudC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIyMjIEV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9mb3J3YXJkX3JlZi9mb3J3YXJkX3JlZl9zcGVjLnRzIHJlZ2lvbj0nZm9yd2FyZF9yZWZfZm4nfVxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvcndhcmRSZWZGbiB7XG4gICgpOiBhbnk7XG59XG5cbmNvbnN0IF9fZm9yd2FyZF9yZWZfXyA9IGdldENsb3N1cmVTYWZlUHJvcGVydHkoe19fZm9yd2FyZF9yZWZfXzogZ2V0Q2xvc3VyZVNhZmVQcm9wZXJ0eX0pO1xuXG4vKipcbiAqIEFsbG93cyB0byByZWZlciB0byByZWZlcmVuY2VzIHdoaWNoIGFyZSBub3QgeWV0IGRlZmluZWQuXG4gKlxuICogRm9yIGluc3RhbmNlLCBgZm9yd2FyZFJlZmAgaXMgdXNlZCB3aGVuIHRoZSBgdG9rZW5gIHdoaWNoIHdlIG5lZWQgdG8gcmVmZXIgdG8gZm9yIHRoZSBwdXJwb3NlcyBvZlxuICogREkgaXMgZGVjbGFyZWQsIGJ1dCBub3QgeWV0IGRlZmluZWQuIEl0IGlzIGFsc28gdXNlZCB3aGVuIHRoZSBgdG9rZW5gIHdoaWNoIHdlIHVzZSB3aGVuIGNyZWF0aW5nXG4gKiBhIHF1ZXJ5IGlzIG5vdCB5ZXQgZGVmaW5lZC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIyMjIEV4YW1wbGVcbiAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL2ZvcndhcmRfcmVmL2ZvcndhcmRfcmVmX3NwZWMudHMgcmVnaW9uPSdmb3J3YXJkX3JlZid9XG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkUmVmKGZvcndhcmRSZWZGbjogRm9yd2FyZFJlZkZuKTogVHlwZTxhbnk+IHtcbiAgKDxhbnk+Zm9yd2FyZFJlZkZuKS5fX2ZvcndhcmRfcmVmX18gPSBmb3J3YXJkUmVmO1xuICAoPGFueT5mb3J3YXJkUmVmRm4pLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeSh0aGlzKCkpO1xuICB9O1xuICByZXR1cm4gKDxUeXBlPGFueT4+PGFueT5mb3J3YXJkUmVmRm4pO1xufVxuXG4vKipcbiAqIExhemlseSByZXRyaWV2ZXMgdGhlIHJlZmVyZW5jZSB2YWx1ZSBmcm9tIGEgZm9yd2FyZFJlZi5cbiAqXG4gKiBBY3RzIGFzIHRoZSBpZGVudGl0eSBmdW5jdGlvbiB3aGVuIGdpdmVuIGEgbm9uLWZvcndhcmQtcmVmIHZhbHVlLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL2ZvcndhcmRfcmVmL2ZvcndhcmRfcmVmX3NwZWMudHMgcmVnaW9uPSdyZXNvbHZlX2ZvcndhcmRfcmVmJ31cbiAqXG4gKiBAc2VlIGBmb3J3YXJkUmVmYFxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUZvcndhcmRSZWY8VD4odHlwZTogVCk6IFQge1xuICByZXR1cm4gaXNGb3J3YXJkUmVmKHR5cGUpID8gdHlwZSgpIDogdHlwZTtcbn1cblxuLyoqIENoZWNrcyB3aGV0aGVyIGEgZnVuY3Rpb24gaXMgd3JhcHBlZCBieSBhIGBmb3J3YXJkUmVmYC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ZvcndhcmRSZWYoZm46IGFueSk6IGZuIGlzKCkgPT4gYW55IHtcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbi5oYXNPd25Qcm9wZXJ0eShfX2ZvcndhcmRfcmVmX18pICYmXG4gICAgICBmbi5fX2ZvcndhcmRfcmVmX18gPT09IGZvcndhcmRSZWY7XG59XG4iXX0=