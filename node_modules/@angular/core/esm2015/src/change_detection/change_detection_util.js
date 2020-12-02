/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/change_detection/change_detection_util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { looseIdentical } from '../util/comparison';
import { getSymbolIterator } from '../util/symbol';
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function devModeEqual(a, b) {
    /** @type {?} */
    const isListLikeIterableA = isListLikeIterable(a);
    /** @type {?} */
    const isListLikeIterableB = isListLikeIterable(b);
    if (isListLikeIterableA && isListLikeIterableB) {
        return areIterablesEqual(a, b, devModeEqual);
    }
    else {
        /** @type {?} */
        const isAObject = a && (typeof a === 'object' || typeof a === 'function');
        /** @type {?} */
        const isBObject = b && (typeof b === 'object' || typeof b === 'function');
        if (!isListLikeIterableA && isAObject && !isListLikeIterableB && isBObject) {
            return true;
        }
        else {
            return looseIdentical(a, b);
        }
    }
}
/**
 * Indicates that the result of a {\@link Pipe} transformation has changed even though the
 * reference has not changed.
 *
 * Wrapped values are unwrapped automatically during the change detection, and the unwrapped value
 * is stored.
 *
 * Example:
 *
 * ```
 * if (this._latestValue === this._latestReturnedValue) {
 *    return this._latestReturnedValue;
 *  } else {
 *    this._latestReturnedValue = this._latestValue;
 *    return WrappedValue.wrap(this._latestValue); // this will force update
 *  }
 * ```
 *
 * \@publicApi
 */
export class WrappedValue {
    /**
     * @param {?} value
     */
    constructor(value) {
        this.wrapped = value;
    }
    /**
     * Creates a wrapped value.
     * @param {?} value
     * @return {?}
     */
    static wrap(value) {
        return new WrappedValue(value);
    }
    /**
     * Returns the underlying value of a wrapped value.
     * Returns the given `value` when it is not wrapped.
     *
     * @param {?} value
     * @return {?}
     */
    static unwrap(value) {
        return WrappedValue.isWrapped(value) ? value.wrapped : value;
    }
    /**
     * Returns true if `value` is a wrapped value.
     * @param {?} value
     * @return {?}
     */
    static isWrapped(value) {
        return value instanceof WrappedValue;
    }
}
if (false) {
    /**
     * @deprecated from 5.3, use `unwrap()` instead - will switch to protected
     * @type {?}
     */
    WrappedValue.prototype.wrapped;
}
/**
 * @param {?} obj
 * @return {?}
 */
export function isListLikeIterable(obj) {
    if (!isJsObject(obj))
        return false;
    return Array.isArray(obj) ||
        (!(obj instanceof Map) && // JS Map are iterables but return entries as [k, v]
            getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
}
/**
 * @param {?} a
 * @param {?} b
 * @param {?} comparator
 * @return {?}
 */
export function areIterablesEqual(a, b, comparator) {
    /** @type {?} */
    const iterator1 = a[getSymbolIterator()]();
    /** @type {?} */
    const iterator2 = b[getSymbolIterator()]();
    while (true) {
        /** @type {?} */
        const item1 = iterator1.next();
        /** @type {?} */
        const item2 = iterator2.next();
        if (item1.done && item2.done)
            return true;
        if (item1.done || item2.done)
            return false;
        if (!comparator(item1.value, item2.value))
            return false;
    }
}
/**
 * @param {?} obj
 * @param {?} fn
 * @return {?}
 */
export function iterateListLike(obj, fn) {
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        /** @type {?} */
        const iterator = obj[getSymbolIterator()]();
        /** @type {?} */
        let item;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}
/**
 * @param {?} o
 * @return {?}
 */
export function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbl91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFakQsTUFBTSxVQUFVLFlBQVksQ0FBQyxDQUFNLEVBQUUsQ0FBTTs7VUFDbkMsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOztVQUMzQyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDakQsSUFBSSxtQkFBbUIsSUFBSSxtQkFBbUIsRUFBRTtRQUM5QyxPQUFPLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDOUM7U0FBTTs7Y0FDQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQzs7Y0FDbkUsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUM7UUFDekUsSUFBSSxDQUFDLG1CQUFtQixJQUFJLFNBQVMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLFNBQVMsRUFBRTtZQUMxRSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0I7S0FDRjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCRCxNQUFNLE9BQU8sWUFBWTs7OztJQUl2QixZQUFZLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFVO1FBQ3BCLE9BQU8sSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQVU7UUFDdEIsT0FBTyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFVO1FBQ3pCLE9BQU8sS0FBSyxZQUFZLFlBQVksQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7Ozs7OztJQXZCQywrQkFBYTs7Ozs7O0FBeUJmLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxHQUFRO0lBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDbkMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDLElBQVMsb0RBQW9EO1lBQ2xGLGlCQUFpQixFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBRSwwQ0FBMEM7QUFDL0UsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FDN0IsQ0FBTSxFQUFFLENBQU0sRUFBRSxVQUF1Qzs7VUFDbkQsU0FBUyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUU7O1VBQ3BDLFNBQVMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFO0lBRTFDLE9BQU8sSUFBSSxFQUFFOztjQUNMLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFOztjQUN4QixLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRTtRQUM5QixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMxQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO0tBQ3pEO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxHQUFRLEVBQUUsRUFBbUI7SUFDM0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNaO0tBQ0Y7U0FBTTs7Y0FDQyxRQUFRLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRTs7WUFDdkMsSUFBUztRQUNiLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7S0FDRjtBQUNILENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxDQUFNO0lBQy9CLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQztBQUMxRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2xvb3NlSWRlbnRpY2FsfSBmcm9tICcuLi91dGlsL2NvbXBhcmlzb24nO1xuaW1wb3J0IHtnZXRTeW1ib2xJdGVyYXRvcn0gZnJvbSAnLi4vdXRpbC9zeW1ib2wnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGV2TW9kZUVxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gIGNvbnN0IGlzTGlzdExpa2VJdGVyYWJsZUEgPSBpc0xpc3RMaWtlSXRlcmFibGUoYSk7XG4gIGNvbnN0IGlzTGlzdExpa2VJdGVyYWJsZUIgPSBpc0xpc3RMaWtlSXRlcmFibGUoYik7XG4gIGlmIChpc0xpc3RMaWtlSXRlcmFibGVBICYmIGlzTGlzdExpa2VJdGVyYWJsZUIpIHtcbiAgICByZXR1cm4gYXJlSXRlcmFibGVzRXF1YWwoYSwgYiwgZGV2TW9kZUVxdWFsKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpc0FPYmplY3QgPSBhICYmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xuICAgIGNvbnN0IGlzQk9iamVjdCA9IGIgJiYgKHR5cGVvZiBiID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgYiA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgaWYgKCFpc0xpc3RMaWtlSXRlcmFibGVBICYmIGlzQU9iamVjdCAmJiAhaXNMaXN0TGlrZUl0ZXJhYmxlQiAmJiBpc0JPYmplY3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9vc2VJZGVudGljYWwoYSwgYik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgdGhlIHJlc3VsdCBvZiBhIHtAbGluayBQaXBlfSB0cmFuc2Zvcm1hdGlvbiBoYXMgY2hhbmdlZCBldmVuIHRob3VnaCB0aGVcbiAqIHJlZmVyZW5jZSBoYXMgbm90IGNoYW5nZWQuXG4gKlxuICogV3JhcHBlZCB2YWx1ZXMgYXJlIHVud3JhcHBlZCBhdXRvbWF0aWNhbGx5IGR1cmluZyB0aGUgY2hhbmdlIGRldGVjdGlvbiwgYW5kIHRoZSB1bndyYXBwZWQgdmFsdWVcbiAqIGlzIHN0b3JlZC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogaWYgKHRoaXMuX2xhdGVzdFZhbHVlID09PSB0aGlzLl9sYXRlc3RSZXR1cm5lZFZhbHVlKSB7XG4gKiAgICByZXR1cm4gdGhpcy5fbGF0ZXN0UmV0dXJuZWRWYWx1ZTtcbiAqICB9IGVsc2Uge1xuICogICAgdGhpcy5fbGF0ZXN0UmV0dXJuZWRWYWx1ZSA9IHRoaXMuX2xhdGVzdFZhbHVlO1xuICogICAgcmV0dXJuIFdyYXBwZWRWYWx1ZS53cmFwKHRoaXMuX2xhdGVzdFZhbHVlKTsgLy8gdGhpcyB3aWxsIGZvcmNlIHVwZGF0ZVxuICogIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFdyYXBwZWRWYWx1ZSB7XG4gIC8qKiBAZGVwcmVjYXRlZCBmcm9tIDUuMywgdXNlIGB1bndyYXAoKWAgaW5zdGVhZCAtIHdpbGwgc3dpdGNoIHRvIHByb3RlY3RlZCAqL1xuICB3cmFwcGVkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHRoaXMud3JhcHBlZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSB3cmFwcGVkIHZhbHVlLiAqL1xuICBzdGF0aWMgd3JhcCh2YWx1ZTogYW55KTogV3JhcHBlZFZhbHVlIHtcbiAgICByZXR1cm4gbmV3IFdyYXBwZWRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5kZXJseWluZyB2YWx1ZSBvZiBhIHdyYXBwZWQgdmFsdWUuXG4gICAqIFJldHVybnMgdGhlIGdpdmVuIGB2YWx1ZWAgd2hlbiBpdCBpcyBub3Qgd3JhcHBlZC5cbiAgICoqL1xuICBzdGF0aWMgdW53cmFwKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBXcmFwcGVkVmFsdWUuaXNXcmFwcGVkKHZhbHVlKSA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBhIHdyYXBwZWQgdmFsdWUuICovXG4gIHN0YXRpYyBpc1dyYXBwZWQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFdyYXBwZWRWYWx1ZSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgV3JhcHBlZFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xpc3RMaWtlSXRlcmFibGUob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgaWYgKCFpc0pzT2JqZWN0KG9iaikpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKSB8fFxuICAgICAgKCEob2JqIGluc3RhbmNlb2YgTWFwKSAmJiAgICAgIC8vIEpTIE1hcCBhcmUgaXRlcmFibGVzIGJ1dCByZXR1cm4gZW50cmllcyBhcyBbaywgdl1cbiAgICAgICBnZXRTeW1ib2xJdGVyYXRvcigpIGluIG9iaik7ICAvLyBKUyBJdGVyYWJsZSBoYXZlIGEgU3ltYm9sLml0ZXJhdG9yIHByb3Bcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZUl0ZXJhYmxlc0VxdWFsKFxuICAgIGE6IGFueSwgYjogYW55LCBjb21wYXJhdG9yOiAoYTogYW55LCBiOiBhbnkpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgY29uc3QgaXRlcmF0b3IxID0gYVtnZXRTeW1ib2xJdGVyYXRvcigpXSgpO1xuICBjb25zdCBpdGVyYXRvcjIgPSBiW2dldFN5bWJvbEl0ZXJhdG9yKCldKCk7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBpdGVtMSA9IGl0ZXJhdG9yMS5uZXh0KCk7XG4gICAgY29uc3QgaXRlbTIgPSBpdGVyYXRvcjIubmV4dCgpO1xuICAgIGlmIChpdGVtMS5kb25lICYmIGl0ZW0yLmRvbmUpIHJldHVybiB0cnVlO1xuICAgIGlmIChpdGVtMS5kb25lIHx8IGl0ZW0yLmRvbmUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIWNvbXBhcmF0b3IoaXRlbTEudmFsdWUsIGl0ZW0yLnZhbHVlKSkgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVyYXRlTGlzdExpa2Uob2JqOiBhbnksIGZuOiAocDogYW55KSA9PiBhbnkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmbihvYmpbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpdGVyYXRvciA9IG9ialtnZXRTeW1ib2xJdGVyYXRvcigpXSgpO1xuICAgIGxldCBpdGVtOiBhbnk7XG4gICAgd2hpbGUgKCEoKGl0ZW0gPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpKSB7XG4gICAgICBmbihpdGVtLnZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSnNPYmplY3QobzogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvICE9PSBudWxsICYmICh0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbyA9PT0gJ29iamVjdCcpO1xufVxuIl19