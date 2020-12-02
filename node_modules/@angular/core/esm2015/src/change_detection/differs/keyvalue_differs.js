/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/change_detection/differs/keyvalue_differs.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Optional, SkipSelf, ɵɵdefineInjectable } from '../../di';
import { DefaultKeyValueDifferFactory } from './default_keyvalue_differ';
/**
 * A differ that tracks changes made to an object over time.
 *
 * \@publicApi
 * @record
 * @template K, V
 */
export function KeyValueDiffer() { }
if (false) {
    /**
     * Compute a difference between the previous state and the new `object` state.
     *
     * @param {?} object containing the new value.
     * @return {?} an object describing the difference. The return value is only valid until the next
     * `diff()` invocation.
     */
    KeyValueDiffer.prototype.diff = function (object) { };
    /**
     * Compute a difference between the previous state and the new `object` state.
     *
     * @param {?} object containing the new value.
     * @return {?} an object describing the difference. The return value is only valid until the next
     * `diff()` invocation.
     */
    KeyValueDiffer.prototype.diff = function (object) { };
}
/**
 * An object describing the changes in the `Map` or `{[k:string]: string}` since last time
 * `KeyValueDiffer#diff()` was invoked.
 *
 * \@publicApi
 * @record
 * @template K, V
 */
export function KeyValueChanges() { }
if (false) {
    /**
     * Iterate over all changes. `KeyValueChangeRecord` will contain information about changes
     * to each item.
     * @param {?} fn
     * @return {?}
     */
    KeyValueChanges.prototype.forEachItem = function (fn) { };
    /**
     * Iterate over changes in the order of original Map showing where the original items
     * have moved.
     * @param {?} fn
     * @return {?}
     */
    KeyValueChanges.prototype.forEachPreviousItem = function (fn) { };
    /**
     * Iterate over all keys for which values have changed.
     * @param {?} fn
     * @return {?}
     */
    KeyValueChanges.prototype.forEachChangedItem = function (fn) { };
    /**
     * Iterate over all added items.
     * @param {?} fn
     * @return {?}
     */
    KeyValueChanges.prototype.forEachAddedItem = function (fn) { };
    /**
     * Iterate over all removed items.
     * @param {?} fn
     * @return {?}
     */
    KeyValueChanges.prototype.forEachRemovedItem = function (fn) { };
}
/**
 * Record representing the item change information.
 *
 * \@publicApi
 * @record
 * @template K, V
 */
export function KeyValueChangeRecord() { }
if (false) {
    /**
     * Current key in the Map.
     * @type {?}
     */
    KeyValueChangeRecord.prototype.key;
    /**
     * Current value for the key or `null` if removed.
     * @type {?}
     */
    KeyValueChangeRecord.prototype.currentValue;
    /**
     * Previous value for the key or `null` if added.
     * @type {?}
     */
    KeyValueChangeRecord.prototype.previousValue;
}
/**
 * Provides a factory for {\@link KeyValueDiffer}.
 *
 * \@publicApi
 * @record
 */
export function KeyValueDifferFactory() { }
if (false) {
    /**
     * Test to see if the differ knows how to diff this kind of object.
     * @param {?} objects
     * @return {?}
     */
    KeyValueDifferFactory.prototype.supports = function (objects) { };
    /**
     * Create a `KeyValueDiffer`.
     * @template K, V
     * @return {?}
     */
    KeyValueDifferFactory.prototype.create = function () { };
}
/**
 * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
 *
 * \@publicApi
 */
export class KeyValueDiffers {
    /**
     * @param {?} factories
     */
    constructor(factories) {
        this.factories = factories;
    }
    /**
     * @template S
     * @param {?} factories
     * @param {?=} parent
     * @return {?}
     */
    static create(factories, parent) {
        if (parent) {
            /** @type {?} */
            const copied = parent.factories.slice();
            factories = factories.concat(copied);
        }
        return new KeyValueDiffers(factories);
    }
    /**
     * Takes an array of {\@link KeyValueDifferFactory} and returns a provider used to extend the
     * inherited {\@link KeyValueDiffers} instance with the provided factories and return a new
     * {\@link KeyValueDiffers} instance.
     *
     * \@usageNotes
     * ### Example
     *
     * The following example shows how to extend an existing list of factories,
     * which will only be applied to the injector for this component and its children.
     * This step is all that's required to make a new {\@link KeyValueDiffer} available.
     *
     * ```
     * \@Component({
     *   viewProviders: [
     *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
     *   ]
     * })
     * ```
     * @template S
     * @param {?} factories
     * @return {?}
     */
    static extend(factories) {
        return {
            provide: KeyValueDiffers,
            useFactory: (/**
             * @param {?} parent
             * @return {?}
             */
            (parent) => {
                if (!parent) {
                    // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
                    // to bootstrap(), which would override default pipes instead of extending them.
                    throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                }
                return KeyValueDiffers.create(factories, parent);
            }),
            // Dependency technically isn't optional, but we can provide a better error message this way.
            deps: [[KeyValueDiffers, new SkipSelf(), new Optional()]]
        };
    }
    /**
     * @param {?} kv
     * @return {?}
     */
    find(kv) {
        /** @type {?} */
        const factory = this.factories.find((/**
         * @param {?} f
         * @return {?}
         */
        f => f.supports(kv)));
        if (factory) {
            return factory;
        }
        throw new Error(`Cannot find a differ supporting object '${kv}'`);
    }
}
/** @nocollapse */
KeyValueDiffers.ɵprov = ɵɵdefineInjectable({
    token: KeyValueDiffers,
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => new KeyValueDiffers([new DefaultKeyValueDifferFactory()]))
});
if (false) {
    /**
     * @nocollapse
     * @type {?}
     */
    KeyValueDiffers.ɵprov;
    /**
     * @deprecated v4.0.0 - Should be private.
     * @type {?}
     */
    KeyValueDiffers.prototype.factories;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5dmFsdWVfZGlmZmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2NoYW5nZV9kZXRlY3Rpb24vZGlmZmVycy9rZXl2YWx1ZV9kaWZmZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFrQixrQkFBa0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNoRixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7QUFRdkUsb0NBb0JDOzs7Ozs7Ozs7SUFaQyxzREFBb0Q7Ozs7Ozs7O0lBU3BELHNEQUFrRTs7Ozs7Ozs7OztBQVdwRSxxQ0EyQkM7Ozs7Ozs7O0lBdEJDLDBEQUErRDs7Ozs7OztJQU0vRCxrRUFBdUU7Ozs7OztJQUt2RSxpRUFBc0U7Ozs7OztJQUt0RSwrREFBb0U7Ozs7OztJQUtwRSxpRUFBc0U7Ozs7Ozs7OztBQVF4RSwwQ0FlQzs7Ozs7O0lBWEMsbUNBQWdCOzs7OztJQUtoQiw0Q0FBOEI7Ozs7O0lBSzlCLDZDQUErQjs7Ozs7Ozs7QUFRakMsMkNBVUM7Ozs7Ozs7SUFOQyxrRUFBZ0M7Ozs7OztJQUtoQyx5REFBcUM7Ozs7Ozs7QUFRdkMsTUFBTSxPQUFPLGVBQWU7Ozs7SUFhMUIsWUFBWSxTQUFrQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBSSxTQUFrQyxFQUFFLE1BQXdCO1FBQzNFLElBQUksTUFBTSxFQUFFOztrQkFDSixNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDdkMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNCRCxNQUFNLENBQUMsTUFBTSxDQUFJLFNBQWtDO1FBQ2pELE9BQU87WUFDTCxPQUFPLEVBQUUsZUFBZTtZQUN4QixVQUFVOzs7O1lBQUUsQ0FBQyxNQUF1QixFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1gsMEZBQTBGO29CQUMxRixnRkFBZ0Y7b0JBQ2hGLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQztpQkFDNUU7Z0JBQ0QsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUE7O1lBRUQsSUFBSSxFQUFFLENBQUMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDMUQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLEVBQU87O2NBQ0osT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQztRQUN4RCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7QUFqRU0scUJBQUssR0FBRyxrQkFBa0IsQ0FBQztJQUNoQyxLQUFLLEVBQUUsZUFBZTtJQUN0QixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPOzs7SUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLElBQUksNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLENBQUE7Q0FDekUsQ0FBQyxDQUFDOzs7Ozs7SUFKSCxzQkFJRzs7Ozs7SUFLSCxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T3B0aW9uYWwsIFNraXBTZWxmLCBTdGF0aWNQcm92aWRlciwgybXJtWRlZmluZUluamVjdGFibGV9IGZyb20gJy4uLy4uL2RpJztcbmltcG9ydCB7RGVmYXVsdEtleVZhbHVlRGlmZmVyRmFjdG9yeX0gZnJvbSAnLi9kZWZhdWx0X2tleXZhbHVlX2RpZmZlcic7XG5cblxuLyoqXG4gKiBBIGRpZmZlciB0aGF0IHRyYWNrcyBjaGFuZ2VzIG1hZGUgdG8gYW4gb2JqZWN0IG92ZXIgdGltZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS2V5VmFsdWVEaWZmZXI8SywgVj4ge1xuICAvKipcbiAgICogQ29tcHV0ZSBhIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgcHJldmlvdXMgc3RhdGUgYW5kIHRoZSBuZXcgYG9iamVjdGAgc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSBvYmplY3QgY29udGFpbmluZyB0aGUgbmV3IHZhbHVlLlxuICAgKiBAcmV0dXJucyBhbiBvYmplY3QgZGVzY3JpYmluZyB0aGUgZGlmZmVyZW5jZS4gVGhlIHJldHVybiB2YWx1ZSBpcyBvbmx5IHZhbGlkIHVudGlsIHRoZSBuZXh0XG4gICAqIGBkaWZmKClgIGludm9jYXRpb24uXG4gICAqL1xuICBkaWZmKG9iamVjdDogTWFwPEssIFY+KTogS2V5VmFsdWVDaGFuZ2VzPEssIFY+fG51bGw7XG5cbiAgLyoqXG4gICAqIENvbXB1dGUgYSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHByZXZpb3VzIHN0YXRlIGFuZCB0aGUgbmV3IGBvYmplY3RgIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5ldyB2YWx1ZS5cbiAgICogQHJldHVybnMgYW4gb2JqZWN0IGRlc2NyaWJpbmcgdGhlIGRpZmZlcmVuY2UuIFRoZSByZXR1cm4gdmFsdWUgaXMgb25seSB2YWxpZCB1bnRpbCB0aGUgbmV4dFxuICAgKiBgZGlmZigpYCBpbnZvY2F0aW9uLlxuICAgKi9cbiAgZGlmZihvYmplY3Q6IHtba2V5OiBzdHJpbmddOiBWfSk6IEtleVZhbHVlQ2hhbmdlczxzdHJpbmcsIFY+fG51bGw7XG4gIC8vIFRPRE8oVFMyLjEpOiBkaWZmPEtQIGV4dGVuZHMgc3RyaW5nPih0aGlzOiBLZXlWYWx1ZURpZmZlcjxLUCwgVj4sIG9iamVjdDogUmVjb3JkPEtQLCBWPik6XG4gIC8vIEtleVZhbHVlRGlmZmVyPEtQLCBWPjtcbn1cblxuLyoqXG4gKiBBbiBvYmplY3QgZGVzY3JpYmluZyB0aGUgY2hhbmdlcyBpbiB0aGUgYE1hcGAgb3IgYHtbazpzdHJpbmddOiBzdHJpbmd9YCBzaW5jZSBsYXN0IHRpbWVcbiAqIGBLZXlWYWx1ZURpZmZlciNkaWZmKClgIHdhcyBpbnZva2VkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBLZXlWYWx1ZUNoYW5nZXM8SywgVj4ge1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGFsbCBjaGFuZ2VzLiBgS2V5VmFsdWVDaGFuZ2VSZWNvcmRgIHdpbGwgY29udGFpbiBpbmZvcm1hdGlvbiBhYm91dCBjaGFuZ2VzXG4gICAqIHRvIGVhY2ggaXRlbS5cbiAgICovXG4gIGZvckVhY2hJdGVtKGZuOiAocjogS2V5VmFsdWVDaGFuZ2VSZWNvcmQ8SywgVj4pID0+IHZvaWQpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgY2hhbmdlcyBpbiB0aGUgb3JkZXIgb2Ygb3JpZ2luYWwgTWFwIHNob3dpbmcgd2hlcmUgdGhlIG9yaWdpbmFsIGl0ZW1zXG4gICAqIGhhdmUgbW92ZWQuXG4gICAqL1xuICBmb3JFYWNoUHJldmlvdXNJdGVtKGZuOiAocjogS2V5VmFsdWVDaGFuZ2VSZWNvcmQ8SywgVj4pID0+IHZvaWQpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIGtleXMgZm9yIHdoaWNoIHZhbHVlcyBoYXZlIGNoYW5nZWQuXG4gICAqL1xuICBmb3JFYWNoQ2hhbmdlZEl0ZW0oZm46IChyOiBLZXlWYWx1ZUNoYW5nZVJlY29yZDxLLCBWPikgPT4gdm9pZCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBhbGwgYWRkZWQgaXRlbXMuXG4gICAqL1xuICBmb3JFYWNoQWRkZWRJdGVtKGZuOiAocjogS2V5VmFsdWVDaGFuZ2VSZWNvcmQ8SywgVj4pID0+IHZvaWQpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHJlbW92ZWQgaXRlbXMuXG4gICAqL1xuICBmb3JFYWNoUmVtb3ZlZEl0ZW0oZm46IChyOiBLZXlWYWx1ZUNoYW5nZVJlY29yZDxLLCBWPikgPT4gdm9pZCk6IHZvaWQ7XG59XG5cbi8qKlxuICogUmVjb3JkIHJlcHJlc2VudGluZyB0aGUgaXRlbSBjaGFuZ2UgaW5mb3JtYXRpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEtleVZhbHVlQ2hhbmdlUmVjb3JkPEssIFY+IHtcbiAgLyoqXG4gICAqIEN1cnJlbnQga2V5IGluIHRoZSBNYXAuXG4gICAqL1xuICByZWFkb25seSBrZXk6IEs7XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgdmFsdWUgZm9yIHRoZSBrZXkgb3IgYG51bGxgIGlmIHJlbW92ZWQuXG4gICAqL1xuICByZWFkb25seSBjdXJyZW50VmFsdWU6IFZ8bnVsbDtcblxuICAvKipcbiAgICogUHJldmlvdXMgdmFsdWUgZm9yIHRoZSBrZXkgb3IgYG51bGxgIGlmIGFkZGVkLlxuICAgKi9cbiAgcmVhZG9ubHkgcHJldmlvdXNWYWx1ZTogVnxudWxsO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGEgZmFjdG9yeSBmb3Ige0BsaW5rIEtleVZhbHVlRGlmZmVyfS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS2V5VmFsdWVEaWZmZXJGYWN0b3J5IHtcbiAgLyoqXG4gICAqIFRlc3QgdG8gc2VlIGlmIHRoZSBkaWZmZXIga25vd3MgaG93IHRvIGRpZmYgdGhpcyBraW5kIG9mIG9iamVjdC5cbiAgICovXG4gIHN1cHBvcnRzKG9iamVjdHM6IGFueSk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGBLZXlWYWx1ZURpZmZlcmAuXG4gICAqL1xuICBjcmVhdGU8SywgVj4oKTogS2V5VmFsdWVEaWZmZXI8SywgVj47XG59XG5cbi8qKlxuICogQSByZXBvc2l0b3J5IG9mIGRpZmZlcmVudCBNYXAgZGlmZmluZyBzdHJhdGVnaWVzIHVzZWQgYnkgTmdDbGFzcywgTmdTdHlsZSwgYW5kIG90aGVycy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZURpZmZlcnMge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1cHJvdiA9IMm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICB0b2tlbjogS2V5VmFsdWVEaWZmZXJzLFxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICBmYWN0b3J5OiAoKSA9PiBuZXcgS2V5VmFsdWVEaWZmZXJzKFtuZXcgRGVmYXVsdEtleVZhbHVlRGlmZmVyRmFjdG9yeSgpXSlcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHY0LjAuMCAtIFNob3VsZCBiZSBwcml2YXRlLlxuICAgKi9cbiAgZmFjdG9yaWVzOiBLZXlWYWx1ZURpZmZlckZhY3RvcnlbXTtcblxuICBjb25zdHJ1Y3RvcihmYWN0b3JpZXM6IEtleVZhbHVlRGlmZmVyRmFjdG9yeVtdKSB7XG4gICAgdGhpcy5mYWN0b3JpZXMgPSBmYWN0b3JpZXM7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlPFM+KGZhY3RvcmllczogS2V5VmFsdWVEaWZmZXJGYWN0b3J5W10sIHBhcmVudD86IEtleVZhbHVlRGlmZmVycyk6IEtleVZhbHVlRGlmZmVycyB7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgY29uc3QgY29waWVkID0gcGFyZW50LmZhY3Rvcmllcy5zbGljZSgpO1xuICAgICAgZmFjdG9yaWVzID0gZmFjdG9yaWVzLmNvbmNhdChjb3BpZWQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEtleVZhbHVlRGlmZmVycyhmYWN0b3JpZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGFuIGFycmF5IG9mIHtAbGluayBLZXlWYWx1ZURpZmZlckZhY3Rvcnl9IGFuZCByZXR1cm5zIGEgcHJvdmlkZXIgdXNlZCB0byBleHRlbmQgdGhlXG4gICAqIGluaGVyaXRlZCB7QGxpbmsgS2V5VmFsdWVEaWZmZXJzfSBpbnN0YW5jZSB3aXRoIHRoZSBwcm92aWRlZCBmYWN0b3JpZXMgYW5kIHJldHVybiBhIG5ld1xuICAgKiB7QGxpbmsgS2V5VmFsdWVEaWZmZXJzfSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIGhvdyB0byBleHRlbmQgYW4gZXhpc3RpbmcgbGlzdCBvZiBmYWN0b3JpZXMsXG4gICAqIHdoaWNoIHdpbGwgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBpbmplY3RvciBmb3IgdGhpcyBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICogVGhpcyBzdGVwIGlzIGFsbCB0aGF0J3MgcmVxdWlyZWQgdG8gbWFrZSBhIG5ldyB7QGxpbmsgS2V5VmFsdWVEaWZmZXJ9IGF2YWlsYWJsZS5cbiAgICpcbiAgICogYGBgXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHZpZXdQcm92aWRlcnM6IFtcbiAgICogICAgIEtleVZhbHVlRGlmZmVycy5leHRlbmQoW25ldyBJbW11dGFibGVNYXBEaWZmZXIoKV0pXG4gICAqICAgXVxuICAgKiB9KVxuICAgKiBgYGBcbiAgICovXG4gIHN0YXRpYyBleHRlbmQ8Uz4oZmFjdG9yaWVzOiBLZXlWYWx1ZURpZmZlckZhY3RvcnlbXSk6IFN0YXRpY1Byb3ZpZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZTogS2V5VmFsdWVEaWZmZXJzLFxuICAgICAgdXNlRmFjdG9yeTogKHBhcmVudDogS2V5VmFsdWVEaWZmZXJzKSA9PiB7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgLy8gVHlwaWNhbGx5IHdvdWxkIG9jY3VyIHdoZW4gY2FsbGluZyBLZXlWYWx1ZURpZmZlcnMuZXh0ZW5kIGluc2lkZSBvZiBkZXBlbmRlbmNpZXMgcGFzc2VkXG4gICAgICAgICAgLy8gdG8gYm9vdHN0cmFwKCksIHdoaWNoIHdvdWxkIG92ZXJyaWRlIGRlZmF1bHQgcGlwZXMgaW5zdGVhZCBvZiBleHRlbmRpbmcgdGhlbS5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBleHRlbmQgS2V5VmFsdWVEaWZmZXJzIHdpdGhvdXQgYSBwYXJlbnQgaW5qZWN0b3InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gS2V5VmFsdWVEaWZmZXJzLmNyZWF0ZShmYWN0b3JpZXMsIHBhcmVudCk7XG4gICAgICB9LFxuICAgICAgLy8gRGVwZW5kZW5jeSB0ZWNobmljYWxseSBpc24ndCBvcHRpb25hbCwgYnV0IHdlIGNhbiBwcm92aWRlIGEgYmV0dGVyIGVycm9yIG1lc3NhZ2UgdGhpcyB3YXkuXG4gICAgICBkZXBzOiBbW0tleVZhbHVlRGlmZmVycywgbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpXV1cbiAgICB9O1xuICB9XG5cbiAgZmluZChrdjogYW55KTogS2V5VmFsdWVEaWZmZXJGYWN0b3J5IHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5mYWN0b3JpZXMuZmluZChmID0+IGYuc3VwcG9ydHMoa3YpKTtcbiAgICBpZiAoZmFjdG9yeSkge1xuICAgICAgcmV0dXJuIGZhY3Rvcnk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgYSBkaWZmZXIgc3VwcG9ydGluZyBvYmplY3QgJyR7a3Z9J2ApO1xuICB9XG59XG4iXX0=