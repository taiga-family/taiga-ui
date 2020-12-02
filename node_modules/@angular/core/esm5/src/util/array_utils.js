/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertEqual, assertLessThanOrEqual } from './assert';
/**
 * Equivalent to ES6 spread, add each item to an array.
 *
 * @param items The items to add
 * @param arr The array to which you want to add the items
 */
export function addAllToArray(items, arr) {
    for (var i = 0; i < items.length; i++) {
        arr.push(items[i]);
    }
}
/**
 * Flattens an array.
 */
export function flatten(list, dst) {
    if (dst === undefined)
        dst = list;
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        if (Array.isArray(item)) {
            // we need to inline it.
            if (dst === list) {
                // Our assumption that the list was already flat was wrong and
                // we need to clone flat since we need to write to it.
                dst = list.slice(0, i);
            }
            flatten(item, dst);
        }
        else if (dst !== list) {
            dst.push(item);
        }
    }
    return dst;
}
export function deepForEach(input, fn) {
    input.forEach(function (value) { return Array.isArray(value) ? deepForEach(value, fn) : fn(value); });
}
export function addToArray(arr, index, value) {
    // perf: array.push is faster than array.splice!
    if (index >= arr.length) {
        arr.push(value);
    }
    else {
        arr.splice(index, 0, value);
    }
}
export function removeFromArray(arr, index) {
    // perf: array.pop is faster than array.splice!
    if (index >= arr.length - 1) {
        return arr.pop();
    }
    else {
        return arr.splice(index, 1)[0];
    }
}
export function newArray(size, value) {
    var list = [];
    for (var i = 0; i < size; i++) {
        list.push(value);
    }
    return list;
}
/**
 * Remove item from array (Same as `Array.splice()` but faster.)
 *
 * `Array.splice()` is not as fast because it has to allocate an array for the elements which were
 * removed. This causes memory pressure and slows down code when most of the time we don't
 * care about the deleted items array.
 *
 * https://jsperf.com/fast-array-splice (About 20x faster)
 *
 * @param array Array to splice
 * @param index Index of element in array to remove.
 * @param count Number of items to remove.
 */
export function arraySplice(array, index, count) {
    var length = array.length - count;
    while (index < length) {
        array[index] = array[index + count];
        index++;
    }
    while (count--) {
        array.pop(); // shrink the array
    }
}
/**
 * Same as `Array.splice(index, 0, value)` but faster.
 *
 * `Array.splice()` is not fast because it has to allocate an array for the elements which were
 * removed. This causes memory pressure and slows down code when most of the time we don't
 * care about the deleted items array.
 *
 * @param array Array to splice.
 * @param index Index in array where the `value` should be added.
 * @param value Value to add to array.
 */
export function arrayInsert(array, index, value) {
    ngDevMode && assertLessThanOrEqual(index, array.length, 'Can\'t insert past array end.');
    var end = array.length;
    while (end > index) {
        var previousEnd = end - 1;
        array[end] = array[previousEnd];
        end = previousEnd;
    }
    array[index] = value;
}
/**
 * Same as `Array.splice2(index, 0, value1, value2)` but faster.
 *
 * `Array.splice()` is not fast because it has to allocate an array for the elements which were
 * removed. This causes memory pressure and slows down code when most of the time we don't
 * care about the deleted items array.
 *
 * @param array Array to splice.
 * @param index Index in array where the `value` should be added.
 * @param value1 Value to add to array.
 * @param value2 Value to add to array.
 */
export function arrayInsert2(array, index, value1, value2) {
    ngDevMode && assertLessThanOrEqual(index, array.length, 'Can\'t insert past array end.');
    var end = array.length;
    if (end == index) {
        // inserting at the end.
        array.push(value1, value2);
    }
    else if (end === 1) {
        // corner case when we have less items in array than we have items to insert.
        array.push(value2, array[0]);
        array[0] = value1;
    }
    else {
        end--;
        array.push(array[end - 1], array[end]);
        while (end > index) {
            var previousEnd = end - 2;
            array[end] = array[previousEnd];
            end--;
        }
        array[index] = value1;
        array[index + 1] = value2;
    }
}
/**
 * Insert a `value` into an `array` so that the array remains sorted.
 *
 * NOTE:
 * - Duplicates are not allowed, and are ignored.
 * - This uses binary search algorithm for fast inserts.
 *
 * @param array A sorted array to insert into.
 * @param value The value to insert.
 * @returns index of the inserted value.
 */
export function arrayInsertSorted(array, value) {
    var index = arrayIndexOfSorted(array, value);
    if (index < 0) {
        // if we did not find it insert it.
        index = ~index;
        arrayInsert(array, index, value);
    }
    return index;
}
/**
 * Remove `value` from a sorted `array`.
 *
 * NOTE:
 * - This uses binary search algorithm for fast removals.
 *
 * @param array A sorted array to remove from.
 * @param value The value to remove.
 * @returns index of the removed value.
 *   - positive index if value found and removed.
 *   - negative index if value not found. (`~index` to get the value where it should have been
 *     inserted)
 */
export function arrayRemoveSorted(array, value) {
    var index = arrayIndexOfSorted(array, value);
    if (index >= 0) {
        arraySplice(array, index, 1);
    }
    return index;
}
/**
 * Get an index of an `value` in a sorted `array`.
 *
 * NOTE:
 * - This uses binary search algorithm for fast removals.
 *
 * @param array A sorted array to binary search.
 * @param value The value to look for.
 * @returns index of the value.
 *   - positive index if value found.
 *   - negative index if value not found. (`~index` to get the value where it should have been
 *     located)
 */
export function arrayIndexOfSorted(array, value) {
    return _arrayIndexOfSorted(array, value, 0);
}
/**
 * Set a `value` for a `key`.
 *
 * @param keyValueArray to modify.
 * @param key The key to locate or create.
 * @param value The value to set for a `key`.
 * @returns index (always even) of where the value vas set.
 */
export function keyValueArraySet(keyValueArray, key, value) {
    var index = keyValueArrayIndexOf(keyValueArray, key);
    if (index >= 0) {
        // if we found it set it.
        keyValueArray[index | 1] = value;
    }
    else {
        index = ~index;
        arrayInsert2(keyValueArray, index, key, value);
    }
    return index;
}
/**
 * Retrieve a `value` for a `key` (on `undefined` if not found.)
 *
 * @param keyValueArray to search.
 * @param key The key to locate.
 * @return The `value` stored at the `key` location or `undefined if not found.
 */
export function keyValueArrayGet(keyValueArray, key) {
    var index = keyValueArrayIndexOf(keyValueArray, key);
    if (index >= 0) {
        // if we found it retrieve it.
        return keyValueArray[index | 1];
    }
    return undefined;
}
/**
 * Retrieve a `key` index value in the array or `-1` if not found.
 *
 * @param keyValueArray to search.
 * @param key The key to locate.
 * @returns index of where the key is (or should have been.)
 *   - positive (even) index if key found.
 *   - negative index if key not found. (`~index` (even) to get the index where it should have
 *     been inserted.)
 */
export function keyValueArrayIndexOf(keyValueArray, key) {
    return _arrayIndexOfSorted(keyValueArray, key, 1);
}
/**
 * Delete a `key` (and `value`) from the `KeyValueArray`.
 *
 * @param keyValueArray to modify.
 * @param key The key to locate or delete (if exist).
 * @returns index of where the key was (or should have been.)
 *   - positive (even) index if key found and deleted.
 *   - negative index if key not found. (`~index` (even) to get the index where it should have
 *     been.)
 */
export function keyValueArrayDelete(keyValueArray, key) {
    var index = keyValueArrayIndexOf(keyValueArray, key);
    if (index >= 0) {
        // if we found it remove it.
        arraySplice(keyValueArray, index, 2);
    }
    return index;
}
/**
 * INTERNAL: Get an index of an `value` in a sorted `array` by grouping search by `shift`.
 *
 * NOTE:
 * - This uses binary search algorithm for fast removals.
 *
 * @param array A sorted array to binary search.
 * @param value The value to look for.
 * @param shift grouping shift.
 *   - `0` means look at every location
 *   - `1` means only look at every other (even) location (the odd locations are to be ignored as
 *         they are values.)
 * @returns index of the value.
 *   - positive index if value found.
 *   - negative index if value not found. (`~index` to get the value where it should have been
 * inserted)
 */
function _arrayIndexOfSorted(array, value, shift) {
    ngDevMode && assertEqual(Array.isArray(array), true, 'Expecting an array');
    var start = 0;
    var end = array.length >> shift;
    while (end !== start) {
        var middle = start + ((end - start) >> 1); // find the middle.
        var current = array[middle << shift];
        if (value === current) {
            return (middle << shift);
        }
        else if (current > value) {
            end = middle;
        }
        else {
            start = middle + 1; // We already searched middle so make it non-inclusive by adding 1
        }
    }
    return ~(end << shift);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXlfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy91dGlsL2FycmF5X3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFNUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQVksRUFBRSxHQUFVO0lBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLElBQVcsRUFBRSxHQUFXO0lBQzlDLElBQUksR0FBRyxLQUFLLFNBQVM7UUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsd0JBQXdCO1lBQ3hCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDaEIsOERBQThEO2dCQUM5RCxzREFBc0Q7Z0JBQ3RELEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QjtZQUNELE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDcEI7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QUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxtQkFBbUI7UUFDakUsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUU7WUFDckIsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQztTQUMxQjthQUFNLElBQUksT0FBTyxHQUFHLEtBQUssRUFBRTtZQUMxQixHQUFHLEdBQUcsTUFBTSxDQUFDO1NBQ2Q7YUFBTTtZQUNMLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUUsa0VBQWtFO1NBQ3hGO0tBQ0Y7SUFDRCxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUM7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHthc3NlcnRFcXVhbCwgYXNzZXJ0TGVzc1RoYW5PckVxdWFsfSBmcm9tICcuL2Fzc2VydCc7XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBFUzYgc3ByZWFkLCBhZGQgZWFjaCBpdGVtIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSBpdGVtcyBUaGUgaXRlbXMgdG8gYWRkXG4gKiBAcGFyYW0gYXJyIFRoZSBhcnJheSB0byB3aGljaCB5b3Ugd2FudCB0byBhZGQgdGhlIGl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRBbGxUb0FycmF5KGl0ZW1zOiBhbnlbXSwgYXJyOiBhbnlbXSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyLnB1c2goaXRlbXNbaV0pO1xuICB9XG59XG5cbi8qKlxuICogRmxhdHRlbnMgYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGxpc3Q6IGFueVtdLCBkc3Q/OiBhbnlbXSk6IGFueVtdIHtcbiAgaWYgKGRzdCA9PT0gdW5kZWZpbmVkKSBkc3QgPSBsaXN0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGxpc3RbaV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIC8vIHdlIG5lZWQgdG8gaW5saW5lIGl0LlxuICAgICAgaWYgKGRzdCA9PT0gbGlzdCkge1xuICAgICAgICAvLyBPdXIgYXNzdW1wdGlvbiB0aGF0IHRoZSBsaXN0IHdhcyBhbHJlYWR5IGZsYXQgd2FzIHdyb25nIGFuZFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGNsb25lIGZsYXQgc2luY2Ugd2UgbmVlZCB0byB3cml0ZSB0byBpdC5cbiAgICAgICAgZHN0ID0gbGlzdC5zbGljZSgwLCBpKTtcbiAgICAgIH1cbiAgICAgIGZsYXR0ZW4oaXRlbSwgZHN0KTtcbiAgICB9IGVsc2UgaWYgKGRzdCAhPT0gbGlzdCkge1xuICAgICAgZHN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRm9yRWFjaDxUPihpbnB1dDogKFR8YW55W10pW10sIGZuOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcbiAgaW5wdXQuZm9yRWFjaCh2YWx1ZSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IGRlZXBGb3JFYWNoKHZhbHVlLCBmbikgOiBmbih2YWx1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9BcnJheShhcnI6IGFueVtdLCBpbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gIC8vIHBlcmY6IGFycmF5LnB1c2ggaXMgZmFzdGVyIHRoYW4gYXJyYXkuc3BsaWNlIVxuICBpZiAoaW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAwLCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheShhcnI6IGFueVtdLCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgLy8gcGVyZjogYXJyYXkucG9wIGlzIGZhc3RlciB0aGFuIGFycmF5LnNwbGljZSFcbiAgaWYgKGluZGV4ID49IGFyci5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIGFyci5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlbMF07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0FycmF5PFQgPSBhbnk+KHNpemU6IG51bWJlcik6IFRbXTtcbmV4cG9ydCBmdW5jdGlvbiBuZXdBcnJheTxUPihzaXplOiBudW1iZXIsIHZhbHVlOiBUKTogVFtdO1xuZXhwb3J0IGZ1bmN0aW9uIG5ld0FycmF5PFQ+KHNpemU6IG51bWJlciwgdmFsdWU/OiBUKTogVFtdIHtcbiAgY29uc3QgbGlzdDogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgbGlzdC5wdXNoKHZhbHVlISk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbi8qKlxuICogUmVtb3ZlIGl0ZW0gZnJvbSBhcnJheSAoU2FtZSBhcyBgQXJyYXkuc3BsaWNlKClgIGJ1dCBmYXN0ZXIuKVxuICpcbiAqIGBBcnJheS5zcGxpY2UoKWAgaXMgbm90IGFzIGZhc3QgYmVjYXVzZSBpdCBoYXMgdG8gYWxsb2NhdGUgYW4gYXJyYXkgZm9yIHRoZSBlbGVtZW50cyB3aGljaCB3ZXJlXG4gKiByZW1vdmVkLiBUaGlzIGNhdXNlcyBtZW1vcnkgcHJlc3N1cmUgYW5kIHNsb3dzIGRvd24gY29kZSB3aGVuIG1vc3Qgb2YgdGhlIHRpbWUgd2UgZG9uJ3RcbiAqIGNhcmUgYWJvdXQgdGhlIGRlbGV0ZWQgaXRlbXMgYXJyYXkuXG4gKlxuICogaHR0cHM6Ly9qc3BlcmYuY29tL2Zhc3QtYXJyYXktc3BsaWNlIChBYm91dCAyMHggZmFzdGVyKVxuICpcbiAqIEBwYXJhbSBhcnJheSBBcnJheSB0byBzcGxpY2VcbiAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiBlbGVtZW50IGluIGFycmF5IHRvIHJlbW92ZS5cbiAqIEBwYXJhbSBjb3VudCBOdW1iZXIgb2YgaXRlbXMgdG8gcmVtb3ZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlTcGxpY2UoYXJyYXk6IGFueVtdLCBpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCAtIGNvdW50O1xuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBhcnJheVtpbmRleCArIGNvdW50XTtcbiAgICBpbmRleCsrO1xuICB9XG4gIHdoaWxlIChjb3VudC0tKSB7XG4gICAgYXJyYXkucG9wKCk7ICAvLyBzaHJpbmsgdGhlIGFycmF5XG4gIH1cbn1cblxuLyoqXG4gKiBTYW1lIGFzIGBBcnJheS5zcGxpY2UoaW5kZXgsIDAsIHZhbHVlKWAgYnV0IGZhc3Rlci5cbiAqXG4gKiBgQXJyYXkuc3BsaWNlKClgIGlzIG5vdCBmYXN0IGJlY2F1c2UgaXQgaGFzIHRvIGFsbG9jYXRlIGFuIGFycmF5IGZvciB0aGUgZWxlbWVudHMgd2hpY2ggd2VyZVxuICogcmVtb3ZlZC4gVGhpcyBjYXVzZXMgbWVtb3J5IHByZXNzdXJlIGFuZCBzbG93cyBkb3duIGNvZGUgd2hlbiBtb3N0IG9mIHRoZSB0aW1lIHdlIGRvbid0XG4gKiBjYXJlIGFib3V0IHRoZSBkZWxldGVkIGl0ZW1zIGFycmF5LlxuICpcbiAqIEBwYXJhbSBhcnJheSBBcnJheSB0byBzcGxpY2UuXG4gKiBAcGFyYW0gaW5kZXggSW5kZXggaW4gYXJyYXkgd2hlcmUgdGhlIGB2YWx1ZWAgc2hvdWxkIGJlIGFkZGVkLlxuICogQHBhcmFtIHZhbHVlIFZhbHVlIHRvIGFkZCB0byBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5SW5zZXJ0KGFycmF5OiBhbnlbXSwgaW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0TGVzc1RoYW5PckVxdWFsKGluZGV4LCBhcnJheS5sZW5ndGgsICdDYW5cXCd0IGluc2VydCBwYXN0IGFycmF5IGVuZC4nKTtcbiAgbGV0IGVuZCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGVuZCA+IGluZGV4KSB7XG4gICAgY29uc3QgcHJldmlvdXNFbmQgPSBlbmQgLSAxO1xuICAgIGFycmF5W2VuZF0gPSBhcnJheVtwcmV2aW91c0VuZF07XG4gICAgZW5kID0gcHJldmlvdXNFbmQ7XG4gIH1cbiAgYXJyYXlbaW5kZXhdID0gdmFsdWU7XG59XG5cbi8qKlxuICogU2FtZSBhcyBgQXJyYXkuc3BsaWNlMihpbmRleCwgMCwgdmFsdWUxLCB2YWx1ZTIpYCBidXQgZmFzdGVyLlxuICpcbiAqIGBBcnJheS5zcGxpY2UoKWAgaXMgbm90IGZhc3QgYmVjYXVzZSBpdCBoYXMgdG8gYWxsb2NhdGUgYW4gYXJyYXkgZm9yIHRoZSBlbGVtZW50cyB3aGljaCB3ZXJlXG4gKiByZW1vdmVkLiBUaGlzIGNhdXNlcyBtZW1vcnkgcHJlc3N1cmUgYW5kIHNsb3dzIGRvd24gY29kZSB3aGVuIG1vc3Qgb2YgdGhlIHRpbWUgd2UgZG9uJ3RcbiAqIGNhcmUgYWJvdXQgdGhlIGRlbGV0ZWQgaXRlbXMgYXJyYXkuXG4gKlxuICogQHBhcmFtIGFycmF5IEFycmF5IHRvIHNwbGljZS5cbiAqIEBwYXJhbSBpbmRleCBJbmRleCBpbiBhcnJheSB3aGVyZSB0aGUgYHZhbHVlYCBzaG91bGQgYmUgYWRkZWQuXG4gKiBAcGFyYW0gdmFsdWUxIFZhbHVlIHRvIGFkZCB0byBhcnJheS5cbiAqIEBwYXJhbSB2YWx1ZTIgVmFsdWUgdG8gYWRkIHRvIGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlJbnNlcnQyKGFycmF5OiBhbnlbXSwgaW5kZXg6IG51bWJlciwgdmFsdWUxOiBhbnksIHZhbHVlMjogYW55KTogdm9pZCB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnRMZXNzVGhhbk9yRXF1YWwoaW5kZXgsIGFycmF5Lmxlbmd0aCwgJ0NhblxcJ3QgaW5zZXJ0IHBhc3QgYXJyYXkgZW5kLicpO1xuICBsZXQgZW5kID0gYXJyYXkubGVuZ3RoO1xuICBpZiAoZW5kID09IGluZGV4KSB7XG4gICAgLy8gaW5zZXJ0aW5nIGF0IHRoZSBlbmQuXG4gICAgYXJyYXkucHVzaCh2YWx1ZTEsIHZhbHVlMik7XG4gIH0gZWxzZSBpZiAoZW5kID09PSAxKSB7XG4gICAgLy8gY29ybmVyIGNhc2Ugd2hlbiB3ZSBoYXZlIGxlc3MgaXRlbXMgaW4gYXJyYXkgdGhhbiB3ZSBoYXZlIGl0ZW1zIHRvIGluc2VydC5cbiAgICBhcnJheS5wdXNoKHZhbHVlMiwgYXJyYXlbMF0pO1xuICAgIGFycmF5WzBdID0gdmFsdWUxO1xuICB9IGVsc2Uge1xuICAgIGVuZC0tO1xuICAgIGFycmF5LnB1c2goYXJyYXlbZW5kIC0gMV0sIGFycmF5W2VuZF0pO1xuICAgIHdoaWxlIChlbmQgPiBpbmRleCkge1xuICAgICAgY29uc3QgcHJldmlvdXNFbmQgPSBlbmQgLSAyO1xuICAgICAgYXJyYXlbZW5kXSA9IGFycmF5W3ByZXZpb3VzRW5kXTtcbiAgICAgIGVuZC0tO1xuICAgIH1cbiAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTE7XG4gICAgYXJyYXlbaW5kZXggKyAxXSA9IHZhbHVlMjtcbiAgfVxufVxuXG4vKipcbiAqIEluc2VydCBhIGB2YWx1ZWAgaW50byBhbiBgYXJyYXlgIHNvIHRoYXQgdGhlIGFycmF5IHJlbWFpbnMgc29ydGVkLlxuICpcbiAqIE5PVEU6XG4gKiAtIER1cGxpY2F0ZXMgYXJlIG5vdCBhbGxvd2VkLCBhbmQgYXJlIGlnbm9yZWQuXG4gKiAtIFRoaXMgdXNlcyBiaW5hcnkgc2VhcmNoIGFsZ29yaXRobSBmb3IgZmFzdCBpbnNlcnRzLlxuICpcbiAqIEBwYXJhbSBhcnJheSBBIHNvcnRlZCBhcnJheSB0byBpbnNlcnQgaW50by5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zZXJ0LlxuICogQHJldHVybnMgaW5kZXggb2YgdGhlIGluc2VydGVkIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlJbnNlcnRTb3J0ZWQoYXJyYXk6IHN0cmluZ1tdLCB2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgbGV0IGluZGV4ID0gYXJyYXlJbmRleE9mU29ydGVkKGFycmF5LCB2YWx1ZSk7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICAvLyBpZiB3ZSBkaWQgbm90IGZpbmQgaXQgaW5zZXJ0IGl0LlxuICAgIGluZGV4ID0gfmluZGV4O1xuICAgIGFycmF5SW5zZXJ0KGFycmF5LCBpbmRleCwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYHZhbHVlYCBmcm9tIGEgc29ydGVkIGBhcnJheWAuXG4gKlxuICogTk9URTpcbiAqIC0gVGhpcyB1c2VzIGJpbmFyeSBzZWFyY2ggYWxnb3JpdGhtIGZvciBmYXN0IHJlbW92YWxzLlxuICpcbiAqIEBwYXJhbSBhcnJheSBBIHNvcnRlZCBhcnJheSB0byByZW1vdmUgZnJvbS5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMgaW5kZXggb2YgdGhlIHJlbW92ZWQgdmFsdWUuXG4gKiAgIC0gcG9zaXRpdmUgaW5kZXggaWYgdmFsdWUgZm91bmQgYW5kIHJlbW92ZWQuXG4gKiAgIC0gbmVnYXRpdmUgaW5kZXggaWYgdmFsdWUgbm90IGZvdW5kLiAoYH5pbmRleGAgdG8gZ2V0IHRoZSB2YWx1ZSB3aGVyZSBpdCBzaG91bGQgaGF2ZSBiZWVuXG4gKiAgICAgaW5zZXJ0ZWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVJlbW92ZVNvcnRlZChhcnJheTogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBpbmRleCA9IGFycmF5SW5kZXhPZlNvcnRlZChhcnJheSwgdmFsdWUpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGFycmF5U3BsaWNlKGFycmF5LCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5cbi8qKlxuICogR2V0IGFuIGluZGV4IG9mIGFuIGB2YWx1ZWAgaW4gYSBzb3J0ZWQgYGFycmF5YC5cbiAqXG4gKiBOT1RFOlxuICogLSBUaGlzIHVzZXMgYmluYXJ5IHNlYXJjaCBhbGdvcml0aG0gZm9yIGZhc3QgcmVtb3ZhbHMuXG4gKlxuICogQHBhcmFtIGFycmF5IEEgc29ydGVkIGFycmF5IHRvIGJpbmFyeSBzZWFyY2guXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGxvb2sgZm9yLlxuICogQHJldHVybnMgaW5kZXggb2YgdGhlIHZhbHVlLlxuICogICAtIHBvc2l0aXZlIGluZGV4IGlmIHZhbHVlIGZvdW5kLlxuICogICAtIG5lZ2F0aXZlIGluZGV4IGlmIHZhbHVlIG5vdCBmb3VuZC4gKGB+aW5kZXhgIHRvIGdldCB0aGUgdmFsdWUgd2hlcmUgaXQgc2hvdWxkIGhhdmUgYmVlblxuICogICAgIGxvY2F0ZWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUluZGV4T2ZTb3J0ZWQoYXJyYXk6IHN0cmluZ1tdLCB2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIF9hcnJheUluZGV4T2ZTb3J0ZWQoYXJyYXksIHZhbHVlLCAwKTtcbn1cblxuXG4vKipcbiAqIGBLZXlWYWx1ZUFycmF5YCBpcyBhbiBhcnJheSB3aGVyZSBldmVuIHBvc2l0aW9ucyBjb250YWluIGtleXMgYW5kIG9kZCBwb3NpdGlvbnMgY29udGFpbiB2YWx1ZXMuXG4gKlxuICogYEtleVZhbHVlQXJyYXlgIHByb3ZpZGVzIGEgdmVyeSBlZmZpY2llbnQgd2F5IG9mIGl0ZXJhdGluZyBvdmVyIGl0cyBjb250ZW50cy4gRm9yIHNtYWxsXG4gKiBzZXRzICh+MTApIHRoZSBjb3N0IG9mIGJpbmFyeSBzZWFyY2hpbmcgYW4gYEtleVZhbHVlQXJyYXlgIGhhcyBhYm91dCB0aGUgc2FtZSBwZXJmb3JtYW5jZVxuICogY2hhcmFjdGVyaXN0aWNzIHRoYXQgb2YgYSBgTWFwYCB3aXRoIHNpZ25pZmljYW50bHkgYmV0dGVyIG1lbW9yeSBmb290cHJpbnQuXG4gKlxuICogSWYgdXNlZCBhcyBhIGBNYXBgIHRoZSBrZXlzIGFyZSBzdG9yZWQgaW4gYWxwaGFiZXRpY2FsIG9yZGVyIHNvIHRoYXQgdGhleSBjYW4gYmUgYmluYXJ5IHNlYXJjaGVkXG4gKiBmb3IgcmV0cmlldmFsLlxuICpcbiAqIFNlZTogYGtleVZhbHVlQXJyYXlTZXRgLCBga2V5VmFsdWVBcnJheUdldGAsIGBrZXlWYWx1ZUFycmF5SW5kZXhPZmAsIGBrZXlWYWx1ZUFycmF5RGVsZXRlYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBLZXlWYWx1ZUFycmF5PFZBTFVFPiBleHRlbmRzIEFycmF5PFZBTFVFfHN0cmluZz4ge1xuICBfX2JyYW5kX186ICdhcnJheS1tYXAnO1xufVxuXG4vKipcbiAqIFNldCBhIGB2YWx1ZWAgZm9yIGEgYGtleWAuXG4gKlxuICogQHBhcmFtIGtleVZhbHVlQXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIGtleSBUaGUga2V5IHRvIGxvY2F0ZSBvciBjcmVhdGUuXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBmb3IgYSBga2V5YC5cbiAqIEByZXR1cm5zIGluZGV4IChhbHdheXMgZXZlbikgb2Ygd2hlcmUgdGhlIHZhbHVlIHZhcyBzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBrZXlWYWx1ZUFycmF5U2V0PFY+KFxuICAgIGtleVZhbHVlQXJyYXk6IEtleVZhbHVlQXJyYXk8Vj4sIGtleTogc3RyaW5nLCB2YWx1ZTogVik6IG51bWJlciB7XG4gIGxldCBpbmRleCA9IGtleVZhbHVlQXJyYXlJbmRleE9mKGtleVZhbHVlQXJyYXksIGtleSk7XG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgLy8gaWYgd2UgZm91bmQgaXQgc2V0IGl0LlxuICAgIGtleVZhbHVlQXJyYXlbaW5kZXggfCAxXSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGluZGV4ID0gfmluZGV4O1xuICAgIGFycmF5SW5zZXJ0MihrZXlWYWx1ZUFycmF5LCBpbmRleCwga2V5LCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcbiAqIFJldHJpZXZlIGEgYHZhbHVlYCBmb3IgYSBga2V5YCAob24gYHVuZGVmaW5lZGAgaWYgbm90IGZvdW5kLilcbiAqXG4gKiBAcGFyYW0ga2V5VmFsdWVBcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0ga2V5IFRoZSBrZXkgdG8gbG9jYXRlLlxuICogQHJldHVybiBUaGUgYHZhbHVlYCBzdG9yZWQgYXQgdGhlIGBrZXlgIGxvY2F0aW9uIG9yIGB1bmRlZmluZWQgaWYgbm90IGZvdW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24ga2V5VmFsdWVBcnJheUdldDxWPihrZXlWYWx1ZUFycmF5OiBLZXlWYWx1ZUFycmF5PFY+LCBrZXk6IHN0cmluZyk6IFZ8dW5kZWZpbmVkIHtcbiAgY29uc3QgaW5kZXggPSBrZXlWYWx1ZUFycmF5SW5kZXhPZihrZXlWYWx1ZUFycmF5LCBrZXkpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIC8vIGlmIHdlIGZvdW5kIGl0IHJldHJpZXZlIGl0LlxuICAgIHJldHVybiBrZXlWYWx1ZUFycmF5W2luZGV4IHwgMV0gYXMgVjtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFJldHJpZXZlIGEgYGtleWAgaW5kZXggdmFsdWUgaW4gdGhlIGFycmF5IG9yIGAtMWAgaWYgbm90IGZvdW5kLlxuICpcbiAqIEBwYXJhbSBrZXlWYWx1ZUFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSBrZXkgVGhlIGtleSB0byBsb2NhdGUuXG4gKiBAcmV0dXJucyBpbmRleCBvZiB3aGVyZSB0aGUga2V5IGlzIChvciBzaG91bGQgaGF2ZSBiZWVuLilcbiAqICAgLSBwb3NpdGl2ZSAoZXZlbikgaW5kZXggaWYga2V5IGZvdW5kLlxuICogICAtIG5lZ2F0aXZlIGluZGV4IGlmIGtleSBub3QgZm91bmQuIChgfmluZGV4YCAoZXZlbikgdG8gZ2V0IHRoZSBpbmRleCB3aGVyZSBpdCBzaG91bGQgaGF2ZVxuICogICAgIGJlZW4gaW5zZXJ0ZWQuKVxuICovXG5leHBvcnQgZnVuY3Rpb24ga2V5VmFsdWVBcnJheUluZGV4T2Y8Vj4oa2V5VmFsdWVBcnJheTogS2V5VmFsdWVBcnJheTxWPiwga2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gX2FycmF5SW5kZXhPZlNvcnRlZChrZXlWYWx1ZUFycmF5IGFzIHN0cmluZ1tdLCBrZXksIDEpO1xufVxuXG4vKipcbiAqIERlbGV0ZSBhIGBrZXlgIChhbmQgYHZhbHVlYCkgZnJvbSB0aGUgYEtleVZhbHVlQXJyYXlgLlxuICpcbiAqIEBwYXJhbSBrZXlWYWx1ZUFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSBrZXkgVGhlIGtleSB0byBsb2NhdGUgb3IgZGVsZXRlIChpZiBleGlzdCkuXG4gKiBAcmV0dXJucyBpbmRleCBvZiB3aGVyZSB0aGUga2V5IHdhcyAob3Igc2hvdWxkIGhhdmUgYmVlbi4pXG4gKiAgIC0gcG9zaXRpdmUgKGV2ZW4pIGluZGV4IGlmIGtleSBmb3VuZCBhbmQgZGVsZXRlZC5cbiAqICAgLSBuZWdhdGl2ZSBpbmRleCBpZiBrZXkgbm90IGZvdW5kLiAoYH5pbmRleGAgKGV2ZW4pIHRvIGdldCB0aGUgaW5kZXggd2hlcmUgaXQgc2hvdWxkIGhhdmVcbiAqICAgICBiZWVuLilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGtleVZhbHVlQXJyYXlEZWxldGU8Vj4oa2V5VmFsdWVBcnJheTogS2V5VmFsdWVBcnJheTxWPiwga2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBpbmRleCA9IGtleVZhbHVlQXJyYXlJbmRleE9mKGtleVZhbHVlQXJyYXksIGtleSk7XG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgLy8gaWYgd2UgZm91bmQgaXQgcmVtb3ZlIGl0LlxuICAgIGFycmF5U3BsaWNlKGtleVZhbHVlQXJyYXksIGluZGV4LCAyKTtcbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5cblxuLyoqXG4gKiBJTlRFUk5BTDogR2V0IGFuIGluZGV4IG9mIGFuIGB2YWx1ZWAgaW4gYSBzb3J0ZWQgYGFycmF5YCBieSBncm91cGluZyBzZWFyY2ggYnkgYHNoaWZ0YC5cbiAqXG4gKiBOT1RFOlxuICogLSBUaGlzIHVzZXMgYmluYXJ5IHNlYXJjaCBhbGdvcml0aG0gZm9yIGZhc3QgcmVtb3ZhbHMuXG4gKlxuICogQHBhcmFtIGFycmF5IEEgc29ydGVkIGFycmF5IHRvIGJpbmFyeSBzZWFyY2guXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHNoaWZ0IGdyb3VwaW5nIHNoaWZ0LlxuICogICAtIGAwYCBtZWFucyBsb29rIGF0IGV2ZXJ5IGxvY2F0aW9uXG4gKiAgIC0gYDFgIG1lYW5zIG9ubHkgbG9vayBhdCBldmVyeSBvdGhlciAoZXZlbikgbG9jYXRpb24gKHRoZSBvZGQgbG9jYXRpb25zIGFyZSB0byBiZSBpZ25vcmVkIGFzXG4gKiAgICAgICAgIHRoZXkgYXJlIHZhbHVlcy4pXG4gKiBAcmV0dXJucyBpbmRleCBvZiB0aGUgdmFsdWUuXG4gKiAgIC0gcG9zaXRpdmUgaW5kZXggaWYgdmFsdWUgZm91bmQuXG4gKiAgIC0gbmVnYXRpdmUgaW5kZXggaWYgdmFsdWUgbm90IGZvdW5kLiAoYH5pbmRleGAgdG8gZ2V0IHRoZSB2YWx1ZSB3aGVyZSBpdCBzaG91bGQgaGF2ZSBiZWVuXG4gKiBpbnNlcnRlZClcbiAqL1xuZnVuY3Rpb24gX2FycmF5SW5kZXhPZlNvcnRlZChhcnJheTogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcsIHNoaWZ0OiBudW1iZXIpOiBudW1iZXIge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RXF1YWwoQXJyYXkuaXNBcnJheShhcnJheSksIHRydWUsICdFeHBlY3RpbmcgYW4gYXJyYXknKTtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgbGV0IGVuZCA9IGFycmF5Lmxlbmd0aCA+PiBzaGlmdDtcbiAgd2hpbGUgKGVuZCAhPT0gc3RhcnQpIHtcbiAgICBjb25zdCBtaWRkbGUgPSBzdGFydCArICgoZW5kIC0gc3RhcnQpID4+IDEpOyAgLy8gZmluZCB0aGUgbWlkZGxlLlxuICAgIGNvbnN0IGN1cnJlbnQgPSBhcnJheVttaWRkbGUgPDwgc2hpZnRdO1xuICAgIGlmICh2YWx1ZSA9PT0gY3VycmVudCkge1xuICAgICAgcmV0dXJuIChtaWRkbGUgPDwgc2hpZnQpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudCA+IHZhbHVlKSB7XG4gICAgICBlbmQgPSBtaWRkbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0ID0gbWlkZGxlICsgMTsgIC8vIFdlIGFscmVhZHkgc2VhcmNoZWQgbWlkZGxlIHNvIG1ha2UgaXQgbm9uLWluY2x1c2l2ZSBieSBhZGRpbmcgMVxuICAgIH1cbiAgfVxuICByZXR1cm4gfihlbmQgPDwgc2hpZnQpO1xufVxuIl19