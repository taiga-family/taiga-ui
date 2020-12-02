/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
export function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    const from = clamp(fromIndex, array.length - 1);
    /** @type {?} */
    const to = clamp(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    const target = array[from];
    /** @type {?} */
    const delta = to < from ? -1 : 1;
    for (let i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
export function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const from = clamp(currentIndex, currentArray.length - 1);
    /** @type {?} */
    const to = clamp(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
export function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const to = clamp(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp(value, max) {
    return Math.max(0, Math.min(max, value));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvZHJhZy1kcm9wL2RyYWctdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFNLFVBQVUsZUFBZSxDQUFVLEtBQVUsRUFBRSxTQUFpQixFQUFFLE9BQWU7O1VBQy9FLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztVQUN6QyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUUzQyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7UUFDZixPQUFPO0tBQ1I7O1VBRUssTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O1VBQ3BCLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDdkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7S0FDN0I7SUFFRCxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLENBQUM7Ozs7Ozs7Ozs7QUFVRCxNQUFNLFVBQVUsaUJBQWlCLENBQVUsWUFBaUIsRUFDakIsV0FBZ0IsRUFDaEIsWUFBb0IsRUFDcEIsV0FBbUI7O1VBQ3RELElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztVQUNuRCxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDO0lBRWpELElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtRQUN2QixXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1RDtBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQVdELE1BQU0sVUFBVSxhQUFhLENBQVUsWUFBaUIsRUFDakIsV0FBZ0IsRUFDaEIsWUFBb0IsRUFDcEIsV0FBbUI7O1VBQ2xELEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFFakQsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO1FBQ3ZCLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUN2RDtBQUNILENBQUM7Ozs7Ozs7QUFHRCxTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsR0FBVztJQUN2QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIE1vdmVzIGFuIGl0ZW0gb25lIGluZGV4IGluIGFuIGFycmF5IHRvIGFub3RoZXIuXG4gKiBAcGFyYW0gYXJyYXkgQXJyYXkgaW4gd2hpY2ggdG8gbW92ZSB0aGUgaXRlbS5cbiAqIEBwYXJhbSBmcm9tSW5kZXggU3RhcnRpbmcgaW5kZXggb2YgdGhlIGl0ZW0uXG4gKiBAcGFyYW0gdG9JbmRleCBJbmRleCB0byB3aGljaCB0aGUgaXRlbSBzaG91bGQgYmUgbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlSXRlbUluQXJyYXk8VCA9IGFueT4oYXJyYXk6IFRbXSwgZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBmcm9tID0gY2xhbXAoZnJvbUluZGV4LCBhcnJheS5sZW5ndGggLSAxKTtcbiAgY29uc3QgdG8gPSBjbGFtcCh0b0luZGV4LCBhcnJheS5sZW5ndGggLSAxKTtcblxuICBpZiAoZnJvbSA9PT0gdG8pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0YXJnZXQgPSBhcnJheVtmcm9tXTtcbiAgY29uc3QgZGVsdGEgPSB0byA8IGZyb20gPyAtMSA6IDE7XG5cbiAgZm9yIChsZXQgaSA9IGZyb207IGkgIT09IHRvOyBpICs9IGRlbHRhKSB7XG4gICAgYXJyYXlbaV0gPSBhcnJheVtpICsgZGVsdGFdO1xuICB9XG5cbiAgYXJyYXlbdG9dID0gdGFyZ2V0O1xufVxuXG5cbi8qKlxuICogTW92ZXMgYW4gaXRlbSBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyLlxuICogQHBhcmFtIGN1cnJlbnRBcnJheSBBcnJheSBmcm9tIHdoaWNoIHRvIHRyYW5zZmVyIHRoZSBpdGVtLlxuICogQHBhcmFtIHRhcmdldEFycmF5IEFycmF5IGludG8gd2hpY2ggdG8gcHV0IHRoZSBpdGVtLlxuICogQHBhcmFtIGN1cnJlbnRJbmRleCBJbmRleCBvZiB0aGUgaXRlbSBpbiBpdHMgY3VycmVudCBhcnJheS5cbiAqIEBwYXJhbSB0YXJnZXRJbmRleCBJbmRleCBhdCB3aGljaCB0byBpbnNlcnQgdGhlIGl0ZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2ZlckFycmF5SXRlbTxUID0gYW55PihjdXJyZW50QXJyYXk6IFRbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheTogVFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZnJvbSA9IGNsYW1wKGN1cnJlbnRJbmRleCwgY3VycmVudEFycmF5Lmxlbmd0aCAtIDEpO1xuICBjb25zdCB0byA9IGNsYW1wKHRhcmdldEluZGV4LCB0YXJnZXRBcnJheS5sZW5ndGgpO1xuXG4gIGlmIChjdXJyZW50QXJyYXkubGVuZ3RoKSB7XG4gICAgdGFyZ2V0QXJyYXkuc3BsaWNlKHRvLCAwLCBjdXJyZW50QXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKTtcbiAgfVxufVxuXG4vKipcbiAqIENvcGllcyBhbiBpdGVtIGZyb20gb25lIGFycmF5IHRvIGFub3RoZXIsIGxlYXZpbmcgaXQgaW4gaXRzXG4gKiBvcmlnaW5hbCBwb3NpdGlvbiBpbiBjdXJyZW50IGFycmF5LlxuICogQHBhcmFtIGN1cnJlbnRBcnJheSBBcnJheSBmcm9tIHdoaWNoIHRvIGNvcHkgdGhlIGl0ZW0uXG4gKiBAcGFyYW0gdGFyZ2V0QXJyYXkgQXJyYXkgaW50byB3aGljaCBpcyBjb3B5IHRoZSBpdGVtLlxuICogQHBhcmFtIGN1cnJlbnRJbmRleCBJbmRleCBvZiB0aGUgaXRlbSBpbiBpdHMgY3VycmVudCBhcnJheS5cbiAqIEBwYXJhbSB0YXJnZXRJbmRleCBJbmRleCBhdCB3aGljaCB0byBpbnNlcnQgdGhlIGl0ZW0uXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFycmF5SXRlbTxUID0gYW55PihjdXJyZW50QXJyYXk6IFRbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5OiBUW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgdG8gPSBjbGFtcCh0YXJnZXRJbmRleCwgdGFyZ2V0QXJyYXkubGVuZ3RoKTtcblxuICBpZiAoY3VycmVudEFycmF5Lmxlbmd0aCkge1xuICAgIHRhcmdldEFycmF5LnNwbGljZSh0bywgMCwgY3VycmVudEFycmF5W2N1cnJlbnRJbmRleF0pO1xuICB9XG59XG5cbi8qKiBDbGFtcHMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBhIG1heGltdW0uICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG59XG4iXX0=