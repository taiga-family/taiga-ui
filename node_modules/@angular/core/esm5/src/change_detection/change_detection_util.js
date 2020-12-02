/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { looseIdentical } from '../util/comparison';
import { getSymbolIterator } from '../util/symbol';
export function devModeEqual(a, b) {
    var isListLikeIterableA = isListLikeIterable(a);
    var isListLikeIterableB = isListLikeIterable(b);
    if (isListLikeIterableA && isListLikeIterableB) {
        return areIterablesEqual(a, b, devModeEqual);
    }
    else {
        var isAObject = a && (typeof a === 'object' || typeof a === 'function');
        var isBObject = b && (typeof b === 'object' || typeof b === 'function');
        if (!isListLikeIterableA && isAObject && !isListLikeIterableB && isBObject) {
            return true;
        }
        else {
            return looseIdentical(a, b);
        }
    }
}
/**
 * Indicates that the result of a {@link Pipe} transformation has changed even though the
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
 * @publicApi
 */
var WrappedValue = /** @class */ (function () {
    function WrappedValue(value) {
        this.wrapped = value;
    }
    /** Creates a wrapped value. */
    WrappedValue.wrap = function (value) {
        return new WrappedValue(value);
    };
    /**
     * Returns the underlying value of a wrapped value.
     * Returns the given `value` when it is not wrapped.
     **/
    WrappedValue.unwrap = function (value) {
        return WrappedValue.isWrapped(value) ? value.wrapped : value;
    };
    /** Returns true if `value` is a wrapped value. */
    WrappedValue.isWrapped = function (value) {
        return value instanceof WrappedValue;
    };
    return WrappedValue;
}());
export { WrappedValue };
export function isListLikeIterable(obj) {
    if (!isJsObject(obj))
        return false;
    return Array.isArray(obj) ||
        (!(obj instanceof Map) && // JS Map are iterables but return entries as [k, v]
            getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
}
export function areIterablesEqual(a, b, comparator) {
    var iterator1 = a[getSymbolIterator()]();
    var iterator2 = b[getSymbolIterator()]();
    while (true) {
        var item1 = iterator1.next();
        var item2 = iterator2.next();
        if (item1.done && item2.done)
            return true;
        if (item1.done || item2.done)
            return false;
        if (!comparator(item1.value, item2.value))
            return false;
    }
}
export function iterateListLike(obj, fn) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        var iterator = obj[getSymbolIterator()]();
        var item = void 0;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}
export function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbl91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE1BQU0sVUFBVSxZQUFZLENBQUMsQ0FBTSxFQUFFLENBQU07SUFDekMsSUFBTSxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxJQUFNLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELElBQUksbUJBQW1CLElBQUksbUJBQW1CLEVBQUU7UUFDOUMsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQzlDO1NBQU07UUFDTCxJQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUM7UUFDMUUsSUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxTQUFTLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxTQUFTLEVBQUU7WUFDMUUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0tBQ0Y7QUFDSCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSDtJQUlFLHNCQUFZLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUErQjtJQUN4QixpQkFBSSxHQUFYLFVBQVksS0FBVTtRQUNwQixPQUFPLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O1FBR0k7SUFDRyxtQkFBTSxHQUFiLFVBQWMsS0FBVTtRQUN0QixPQUFPLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDO0lBRUQsa0RBQWtEO0lBQzNDLHNCQUFTLEdBQWhCLFVBQWlCLEtBQVU7UUFDekIsT0FBTyxLQUFLLFlBQVksWUFBWSxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEdBQVE7SUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNuQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUMsSUFBUyxvREFBb0Q7WUFDbEYsaUJBQWlCLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFFLDBDQUEwQztBQUMvRSxDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUM3QixDQUFNLEVBQUUsQ0FBTSxFQUFFLFVBQXVDO0lBQ3pELElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUMzQyxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFFM0MsT0FBTyxJQUFJLEVBQUU7UUFDWCxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDekQ7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxHQUFRLEVBQUUsRUFBbUI7SUFDM0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNaO0tBQ0Y7U0FBTTtRQUNMLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksU0FBSyxDQUFDO1FBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQjtLQUNGO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsQ0FBTTtJQUMvQixPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUM7QUFDMUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtsb29zZUlkZW50aWNhbH0gZnJvbSAnLi4vdXRpbC9jb21wYXJpc29uJztcbmltcG9ydCB7Z2V0U3ltYm9sSXRlcmF0b3J9IGZyb20gJy4uL3V0aWwvc3ltYm9sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRldk1vZGVFcXVhbChhOiBhbnksIGI6IGFueSk6IGJvb2xlYW4ge1xuICBjb25zdCBpc0xpc3RMaWtlSXRlcmFibGVBID0gaXNMaXN0TGlrZUl0ZXJhYmxlKGEpO1xuICBjb25zdCBpc0xpc3RMaWtlSXRlcmFibGVCID0gaXNMaXN0TGlrZUl0ZXJhYmxlKGIpO1xuICBpZiAoaXNMaXN0TGlrZUl0ZXJhYmxlQSAmJiBpc0xpc3RMaWtlSXRlcmFibGVCKSB7XG4gICAgcmV0dXJuIGFyZUl0ZXJhYmxlc0VxdWFsKGEsIGIsIGRldk1vZGVFcXVhbCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaXNBT2JqZWN0ID0gYSAmJiAodHlwZW9mIGEgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbiAgICBjb25zdCBpc0JPYmplY3QgPSBiICYmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgPT09ICdmdW5jdGlvbicpO1xuICAgIGlmICghaXNMaXN0TGlrZUl0ZXJhYmxlQSAmJiBpc0FPYmplY3QgJiYgIWlzTGlzdExpa2VJdGVyYWJsZUIgJiYgaXNCT2JqZWN0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvb3NlSWRlbnRpY2FsKGEsIGIpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IHRoZSByZXN1bHQgb2YgYSB7QGxpbmsgUGlwZX0gdHJhbnNmb3JtYXRpb24gaGFzIGNoYW5nZWQgZXZlbiB0aG91Z2ggdGhlXG4gKiByZWZlcmVuY2UgaGFzIG5vdCBjaGFuZ2VkLlxuICpcbiAqIFdyYXBwZWQgdmFsdWVzIGFyZSB1bndyYXBwZWQgYXV0b21hdGljYWxseSBkdXJpbmcgdGhlIGNoYW5nZSBkZXRlY3Rpb24sIGFuZCB0aGUgdW53cmFwcGVkIHZhbHVlXG4gKiBpcyBzdG9yZWQuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIGlmICh0aGlzLl9sYXRlc3RWYWx1ZSA9PT0gdGhpcy5fbGF0ZXN0UmV0dXJuZWRWYWx1ZSkge1xuICogICAgcmV0dXJuIHRoaXMuX2xhdGVzdFJldHVybmVkVmFsdWU7XG4gKiAgfSBlbHNlIHtcbiAqICAgIHRoaXMuX2xhdGVzdFJldHVybmVkVmFsdWUgPSB0aGlzLl9sYXRlc3RWYWx1ZTtcbiAqICAgIHJldHVybiBXcmFwcGVkVmFsdWUud3JhcCh0aGlzLl9sYXRlc3RWYWx1ZSk7IC8vIHRoaXMgd2lsbCBmb3JjZSB1cGRhdGVcbiAqICB9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBXcmFwcGVkVmFsdWUge1xuICAvKiogQGRlcHJlY2F0ZWQgZnJvbSA1LjMsIHVzZSBgdW53cmFwKClgIGluc3RlYWQgLSB3aWxsIHN3aXRjaCB0byBwcm90ZWN0ZWQgKi9cbiAgd3JhcHBlZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgd3JhcHBlZCB2YWx1ZS4gKi9cbiAgc3RhdGljIHdyYXAodmFsdWU6IGFueSk6IFdyYXBwZWRWYWx1ZSB7XG4gICAgcmV0dXJuIG5ldyBXcmFwcGVkVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVuZGVybHlpbmcgdmFsdWUgb2YgYSB3cmFwcGVkIHZhbHVlLlxuICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBgdmFsdWVgIHdoZW4gaXQgaXMgbm90IHdyYXBwZWQuXG4gICAqKi9cbiAgc3RhdGljIHVud3JhcCh2YWx1ZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gV3JhcHBlZFZhbHVlLmlzV3JhcHBlZCh2YWx1ZSkgPyB2YWx1ZS53cmFwcGVkIDogdmFsdWU7XG4gIH1cblxuICAvKiogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgYSB3cmFwcGVkIHZhbHVlLiAqL1xuICBzdGF0aWMgaXNXcmFwcGVkKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBXcmFwcGVkVmFsdWUge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFdyYXBwZWRWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMaXN0TGlrZUl0ZXJhYmxlKG9iajogYW55KTogYm9vbGVhbiB7XG4gIGlmICghaXNKc09iamVjdChvYmopKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG9iaikgfHxcbiAgICAgICghKG9iaiBpbnN0YW5jZW9mIE1hcCkgJiYgICAgICAvLyBKUyBNYXAgYXJlIGl0ZXJhYmxlcyBidXQgcmV0dXJuIGVudHJpZXMgYXMgW2ssIHZdXG4gICAgICAgZ2V0U3ltYm9sSXRlcmF0b3IoKSBpbiBvYmopOyAgLy8gSlMgSXRlcmFibGUgaGF2ZSBhIFN5bWJvbC5pdGVyYXRvciBwcm9wXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVJdGVyYWJsZXNFcXVhbChcbiAgICBhOiBhbnksIGI6IGFueSwgY29tcGFyYXRvcjogKGE6IGFueSwgYjogYW55KSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGl0ZXJhdG9yMSA9IGFbZ2V0U3ltYm9sSXRlcmF0b3IoKV0oKTtcbiAgY29uc3QgaXRlcmF0b3IyID0gYltnZXRTeW1ib2xJdGVyYXRvcigpXSgpO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgaXRlbTEgPSBpdGVyYXRvcjEubmV4dCgpO1xuICAgIGNvbnN0IGl0ZW0yID0gaXRlcmF0b3IyLm5leHQoKTtcbiAgICBpZiAoaXRlbTEuZG9uZSAmJiBpdGVtMi5kb25lKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoaXRlbTEuZG9uZSB8fCBpdGVtMi5kb25lKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFjb21wYXJhdG9yKGl0ZW0xLnZhbHVlLCBpdGVtMi52YWx1ZSkpIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlcmF0ZUxpc3RMaWtlKG9iajogYW55LCBmbjogKHA6IGFueSkgPT4gYW55KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgZm4ob2JqW2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaXRlcmF0b3IgPSBvYmpbZ2V0U3ltYm9sSXRlcmF0b3IoKV0oKTtcbiAgICBsZXQgaXRlbTogYW55O1xuICAgIHdoaWxlICghKChpdGVtID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSkge1xuICAgICAgZm4oaXRlbS52YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0pzT2JqZWN0KG86IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbyAhPT0gbnVsbCAmJiAodHlwZW9mIG8gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG8gPT09ICdvYmplY3QnKTtcbn1cbiJdfQ==