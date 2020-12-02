/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/pipes/keyvalue_pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { KeyValueDiffers, Pipe } from '@angular/core';
/**
 * @template K, V
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function makeKeyValuePair(key, value) {
    return { key: key, value: value };
}
/**
 * A key value pair.
 * Usually used to represent the key value pairs from a Map or Object.
 *
 * \@publicApi
 * @record
 * @template K, V
 */
export function KeyValue() { }
if (false) {
    /** @type {?} */
    KeyValue.prototype.key;
    /** @type {?} */
    KeyValue.prototype.value;
}
/**
 * \@ngModule CommonModule
 * \@description
 *
 * Transforms Object or Map into an array of key value pairs.
 *
 * The output array will be ordered by keys.
 * By default the comparator will be by Unicode point value.
 * You can optionally pass a compareFn if your keys are complex types.
 *
 * \@usageNotes
 * ### Examples
 *
 * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
 * pipe.
 *
 * {\@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
 *
 * \@publicApi
 */
export class KeyValuePipe {
    /**
     * @param {?} differs
     */
    constructor(differs) {
        this.differs = differs;
        this.keyValues = [];
    }
    /**
     * @template K, V
     * @param {?} input
     * @param {?=} compareFn
     * @return {?}
     */
    transform(input, compareFn = defaultComparator) {
        if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
            return null;
        }
        if (!this.differ) {
            // make a differ for whatever type we've been passed in
            this.differ = this.differs.find(input).create();
        }
        /** @type {?} */
        const differChanges = this.differ.diff((/** @type {?} */ (input)));
        if (differChanges) {
            this.keyValues = [];
            differChanges.forEachItem((/**
             * @param {?} r
             * @return {?}
             */
            (r) => {
                this.keyValues.push(makeKeyValuePair(r.key, (/** @type {?} */ (r.currentValue))));
            }));
            this.keyValues.sort(compareFn);
        }
        return this.keyValues;
    }
}
KeyValuePipe.decorators = [
    { type: Pipe, args: [{ name: 'keyvalue', pure: false },] }
];
/** @nocollapse */
KeyValuePipe.ctorParameters = () => [
    { type: KeyValueDiffers }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    KeyValuePipe.prototype.differ;
    /**
     * @type {?}
     * @private
     */
    KeyValuePipe.prototype.keyValues;
    /**
     * @type {?}
     * @private
     */
    KeyValuePipe.prototype.differs;
}
/**
 * @template K, V
 * @param {?} keyValueA
 * @param {?} keyValueB
 * @return {?}
 */
export function defaultComparator(keyValueA, keyValueB) {
    /** @type {?} */
    const a = keyValueA.key;
    /** @type {?} */
    const b = keyValueB.key;
    // if same exit with 0;
    if (a === b)
        return 0;
    // make sure that undefined are at the end of the sort.
    if (a === undefined)
        return 1;
    if (b === undefined)
        return -1;
    // make sure that nulls are at the end of the sort.
    if (a === null)
        return 1;
    if (b === null)
        return -1;
    if (typeof a == 'string' && typeof b == 'string') {
        return a < b ? -1 : 1;
    }
    if (typeof a == 'number' && typeof b == 'number') {
        return a - b;
    }
    if (typeof a == 'boolean' && typeof b == 'boolean') {
        return a < b ? -1 : 1;
    }
    // `a` and `b` are of different types. Compare their string values.
    /** @type {?} */
    const aString = String(a);
    /** @type {?} */
    const bString = String(b);
    return aString == bString ? 0 : aString < bString ? -1 : 1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5dmFsdWVfcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvcGlwZXMva2V5dmFsdWVfcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQXdELGVBQWUsRUFBRSxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRTFILFNBQVMsZ0JBQWdCLENBQU8sR0FBTSxFQUFFLEtBQVE7SUFDOUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7Ozs7OztBQVFELDhCQUdDOzs7SUFGQyx1QkFBTzs7SUFDUCx5QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCWCxNQUFNLE9BQU8sWUFBWTs7OztJQUN2QixZQUE2QixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUc3QyxjQUFTLEdBQThCLEVBQUUsQ0FBQztJQUhNLENBQUM7Ozs7Ozs7SUEyQnpELFNBQVMsQ0FDTCxLQUEwRCxFQUMxRCxZQUE4RCxpQkFBaUI7UUFFakYsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksR0FBRyxDQUFDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUU7WUFDcEUsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pEOztjQUVLLGFBQWEsR0FBK0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUM7UUFFaEYsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsYUFBYSxDQUFDLFdBQVc7Ozs7WUFBQyxDQUFDLENBQTZCLEVBQUUsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxtQkFBQSxDQUFDLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7O1lBcERGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQzs7OztZQXJDMEIsZUFBZTs7Ozs7OztJQXlDNUUsOEJBQTBDOzs7OztJQUMxQyxpQ0FBa0Q7Ozs7O0lBSHRDLCtCQUF5Qzs7Ozs7Ozs7QUFxRHZELE1BQU0sVUFBVSxpQkFBaUIsQ0FDN0IsU0FBeUIsRUFBRSxTQUF5Qjs7VUFDaEQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHOztVQUNqQixDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUc7SUFDdkIsdUJBQXVCO0lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0Qix1REFBdUQ7SUFDdkQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQyxLQUFLLFNBQVM7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9CLG1EQUFtRDtJQUNuRCxJQUFJLENBQUMsS0FBSyxJQUFJO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDekIsSUFBSSxDQUFDLEtBQUssSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QjtJQUNELElBQUksT0FBTyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDZDtJQUNELElBQUksT0FBTyxDQUFDLElBQUksU0FBUyxJQUFJLE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRTtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkI7OztVQUVLLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDOztVQUNuQixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6QixPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0tleVZhbHVlQ2hhbmdlUmVjb3JkLCBLZXlWYWx1ZUNoYW5nZXMsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIFBpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiBtYWtlS2V5VmFsdWVQYWlyPEssIFY+KGtleTogSywgdmFsdWU6IFYpOiBLZXlWYWx1ZTxLLCBWPiB7XG4gIHJldHVybiB7a2V5OiBrZXksIHZhbHVlOiB2YWx1ZX07XG59XG5cbi8qKlxuICogQSBrZXkgdmFsdWUgcGFpci5cbiAqIFVzdWFsbHkgdXNlZCB0byByZXByZXNlbnQgdGhlIGtleSB2YWx1ZSBwYWlycyBmcm9tIGEgTWFwIG9yIE9iamVjdC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS2V5VmFsdWU8SywgVj4ge1xuICBrZXk6IEs7XG4gIHZhbHVlOiBWO1xufVxuXG4vKipcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFRyYW5zZm9ybXMgT2JqZWN0IG9yIE1hcCBpbnRvIGFuIGFycmF5IG9mIGtleSB2YWx1ZSBwYWlycy5cbiAqXG4gKiBUaGUgb3V0cHV0IGFycmF5IHdpbGwgYmUgb3JkZXJlZCBieSBrZXlzLlxuICogQnkgZGVmYXVsdCB0aGUgY29tcGFyYXRvciB3aWxsIGJlIGJ5IFVuaWNvZGUgcG9pbnQgdmFsdWUuXG4gKiBZb3UgY2FuIG9wdGlvbmFsbHkgcGFzcyBhIGNvbXBhcmVGbiBpZiB5b3VyIGtleXMgYXJlIGNvbXBsZXggdHlwZXMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICMjIyBFeGFtcGxlc1xuICpcbiAqIFRoaXMgZXhhbXBsZXMgc2hvdyBob3cgYW4gT2JqZWN0IG9yIGEgTWFwIGNhbiBiZSBpdGVyYXRlZCBieSBuZ0ZvciB3aXRoIHRoZSB1c2Ugb2YgdGhpcyBrZXl2YWx1ZVxuICogcGlwZS5cbiAqXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2tleXZhbHVlX3BpcGUudHMgcmVnaW9uPSdLZXlWYWx1ZVBpcGUnfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQFBpcGUoe25hbWU6ICdrZXl2YWx1ZScsIHB1cmU6IGZhbHNlfSlcbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpIHt9XG5cbiAgcHJpdmF0ZSBkaWZmZXIhOiBLZXlWYWx1ZURpZmZlcjxhbnksIGFueT47XG4gIHByaXZhdGUga2V5VmFsdWVzOiBBcnJheTxLZXlWYWx1ZTxhbnksIGFueT4+ID0gW107XG5cbiAgdHJhbnNmb3JtPEssIFY+KGlucHV0OiBudWxsLCBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8SywgVj4sIGI6IEtleVZhbHVlPEssIFY+KSA9PiBudW1iZXIpOiBudWxsO1xuICB0cmFuc2Zvcm08Vj4oXG4gICAgICBpbnB1dDoge1trZXk6IHN0cmluZ106IFZ9fE1hcDxzdHJpbmcsIFY+LFxuICAgICAgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPHN0cmluZywgVj4sIGI6IEtleVZhbHVlPHN0cmluZywgVj4pID0+IG51bWJlcik6XG4gICAgICBBcnJheTxLZXlWYWx1ZTxzdHJpbmcsIFY+PjtcbiAgdHJhbnNmb3JtPFY+KFxuICAgICAgaW5wdXQ6IHtba2V5OiBzdHJpbmddOiBWfXxNYXA8c3RyaW5nLCBWPnxudWxsLFxuICAgICAgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPHN0cmluZywgVj4sIGI6IEtleVZhbHVlPHN0cmluZywgVj4pID0+IG51bWJlcik6XG4gICAgICBBcnJheTxLZXlWYWx1ZTxzdHJpbmcsIFY+PnxudWxsO1xuICB0cmFuc2Zvcm08Vj4oXG4gICAgICBpbnB1dDoge1trZXk6IG51bWJlcl06IFZ9fE1hcDxudW1iZXIsIFY+LFxuICAgICAgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPG51bWJlciwgVj4sIGI6IEtleVZhbHVlPG51bWJlciwgVj4pID0+IG51bWJlcik6XG4gICAgICBBcnJheTxLZXlWYWx1ZTxudW1iZXIsIFY+PjtcbiAgdHJhbnNmb3JtPFY+KFxuICAgICAgaW5wdXQ6IHtba2V5OiBudW1iZXJdOiBWfXxNYXA8bnVtYmVyLCBWPnxudWxsLFxuICAgICAgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPG51bWJlciwgVj4sIGI6IEtleVZhbHVlPG51bWJlciwgVj4pID0+IG51bWJlcik6XG4gICAgICBBcnJheTxLZXlWYWx1ZTxudW1iZXIsIFY+PnxudWxsO1xuICB0cmFuc2Zvcm08SywgVj4oaW5wdXQ6IE1hcDxLLCBWPiwgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPEssIFY+LCBiOiBLZXlWYWx1ZTxLLCBWPikgPT4gbnVtYmVyKTpcbiAgICAgIEFycmF5PEtleVZhbHVlPEssIFY+PjtcbiAgdHJhbnNmb3JtPEssIFY+KFxuICAgICAgaW5wdXQ6IE1hcDxLLCBWPnxudWxsLFxuICAgICAgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPEssIFY+LCBiOiBLZXlWYWx1ZTxLLCBWPikgPT4gbnVtYmVyKTogQXJyYXk8S2V5VmFsdWU8SywgVj4+fG51bGw7XG4gIHRyYW5zZm9ybTxLLCBWPihcbiAgICAgIGlucHV0OiBudWxsfHtba2V5OiBzdHJpbmddOiBWLCBba2V5OiBudW1iZXJdOiBWfXxNYXA8SywgVj4sXG4gICAgICBjb21wYXJlRm46IChhOiBLZXlWYWx1ZTxLLCBWPiwgYjogS2V5VmFsdWU8SywgVj4pID0+IG51bWJlciA9IGRlZmF1bHRDb21wYXJhdG9yKTpcbiAgICAgIEFycmF5PEtleVZhbHVlPEssIFY+PnxudWxsIHtcbiAgICBpZiAoIWlucHV0IHx8ICghKGlucHV0IGluc3RhbmNlb2YgTWFwKSAmJiB0eXBlb2YgaW5wdXQgIT09ICdvYmplY3QnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRpZmZlcikge1xuICAgICAgLy8gbWFrZSBhIGRpZmZlciBmb3Igd2hhdGV2ZXIgdHlwZSB3ZSd2ZSBiZWVuIHBhc3NlZCBpblxuICAgICAgdGhpcy5kaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZChpbnB1dCkuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlmZmVyQ2hhbmdlczogS2V5VmFsdWVDaGFuZ2VzPEssIFY+fG51bGwgPSB0aGlzLmRpZmZlci5kaWZmKGlucHV0IGFzIGFueSk7XG5cbiAgICBpZiAoZGlmZmVyQ2hhbmdlcykge1xuICAgICAgdGhpcy5rZXlWYWx1ZXMgPSBbXTtcbiAgICAgIGRpZmZlckNoYW5nZXMuZm9yRWFjaEl0ZW0oKHI6IEtleVZhbHVlQ2hhbmdlUmVjb3JkPEssIFY+KSA9PiB7XG4gICAgICAgIHRoaXMua2V5VmFsdWVzLnB1c2gobWFrZUtleVZhbHVlUGFpcihyLmtleSwgci5jdXJyZW50VmFsdWUhKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMua2V5VmFsdWVzLnNvcnQoY29tcGFyZUZuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMua2V5VmFsdWVzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0Q29tcGFyYXRvcjxLLCBWPihcbiAgICBrZXlWYWx1ZUE6IEtleVZhbHVlPEssIFY+LCBrZXlWYWx1ZUI6IEtleVZhbHVlPEssIFY+KTogbnVtYmVyIHtcbiAgY29uc3QgYSA9IGtleVZhbHVlQS5rZXk7XG4gIGNvbnN0IGIgPSBrZXlWYWx1ZUIua2V5O1xuICAvLyBpZiBzYW1lIGV4aXQgd2l0aCAwO1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIDA7XG4gIC8vIG1ha2Ugc3VyZSB0aGF0IHVuZGVmaW5lZCBhcmUgYXQgdGhlIGVuZCBvZiB0aGUgc29ydC5cbiAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIDE7XG4gIGlmIChiID09PSB1bmRlZmluZWQpIHJldHVybiAtMTtcbiAgLy8gbWFrZSBzdXJlIHRoYXQgbnVsbHMgYXJlIGF0IHRoZSBlbmQgb2YgdGhlIHNvcnQuXG4gIGlmIChhID09PSBudWxsKSByZXR1cm4gMTtcbiAgaWYgKGIgPT09IG51bGwpIHJldHVybiAtMTtcbiAgaWYgKHR5cGVvZiBhID09ICdzdHJpbmcnICYmIHR5cGVvZiBiID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGEgPCBiID8gLTEgOiAxO1xuICB9XG4gIGlmICh0eXBlb2YgYSA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgYiA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfVxuICBpZiAodHlwZW9mIGEgPT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiBiID09ICdib29sZWFuJykge1xuICAgIHJldHVybiBhIDwgYiA/IC0xIDogMTtcbiAgfVxuICAvLyBgYWAgYW5kIGBiYCBhcmUgb2YgZGlmZmVyZW50IHR5cGVzLiBDb21wYXJlIHRoZWlyIHN0cmluZyB2YWx1ZXMuXG4gIGNvbnN0IGFTdHJpbmcgPSBTdHJpbmcoYSk7XG4gIGNvbnN0IGJTdHJpbmcgPSBTdHJpbmcoYik7XG4gIHJldHVybiBhU3RyaW5nID09IGJTdHJpbmcgPyAwIDogYVN0cmluZyA8IGJTdHJpbmcgPyAtMSA6IDE7XG59XG4iXX0=