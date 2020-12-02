/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/utils/collection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵisObservable as isObservable, ɵisPromise as isPromise } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, last as lastValue, map } from 'rxjs/operators';
import { PRIMARY_OUTLET } from '../shared';
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function shallowEqualArrays(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; ++i) {
        if (!shallowEqual(a[i], b[i]))
            return false;
    }
    return true;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function shallowEqual(a, b) {
    // Casting Object.keys return values to include `undefined` as there are some cases
    // in IE 11 where this can happen. Cannot provide a test because the behavior only
    // exists in certain circumstances in IE 11, therefore doing this cast ensures the
    // logic is correct for when this edge case is hit.
    /** @type {?} */
    const k1 = (/** @type {?} */ (Object.keys(a)));
    /** @type {?} */
    const k2 = (/** @type {?} */ (Object.keys(b)));
    if (!k1 || !k2 || k1.length != k2.length) {
        return false;
    }
    /** @type {?} */
    let key;
    for (let i = 0; i < k1.length; i++) {
        key = k1[i];
        if (!equalArraysOrString(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
/**
 * Test equality for arrays of strings or a string.
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function equalArraysOrString(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length != b.length)
            return false;
        return a.every((/**
         * @param {?} aItem
         * @return {?}
         */
        aItem => b.indexOf(aItem) > -1));
    }
    else {
        return a === b;
    }
}
/**
 * Flattens single-level nested arrays.
 * @template T
 * @param {?} arr
 * @return {?}
 */
export function flatten(arr) {
    return Array.prototype.concat.apply([], arr);
}
/**
 * Return the last element of an array.
 * @template T
 * @param {?} a
 * @return {?}
 */
export function last(a) {
    return a.length > 0 ? a[a.length - 1] : null;
}
/**
 * Verifys all booleans in an array are `true`.
 * @param {?} bools
 * @return {?}
 */
export function and(bools) {
    return !bools.some((/**
     * @param {?} v
     * @return {?}
     */
    v => !v));
}
/**
 * @template K, V
 * @param {?} map
 * @param {?} callback
 * @return {?}
 */
export function forEach(map, callback) {
    for (const prop in map) {
        if (map.hasOwnProperty(prop)) {
            callback(map[prop], prop);
        }
    }
}
/**
 * @template A, B
 * @param {?} obj
 * @param {?} fn
 * @return {?}
 */
export function waitForMap(obj, fn) {
    if (Object.keys(obj).length === 0) {
        return of({});
    }
    /** @type {?} */
    const waitHead = [];
    /** @type {?} */
    const waitTail = [];
    /** @type {?} */
    const res = {};
    forEach(obj, (/**
     * @param {?} a
     * @param {?} k
     * @return {?}
     */
    (a, k) => {
        /** @type {?} */
        const mapped = fn(k, a).pipe(map((/**
         * @param {?} r
         * @return {?}
         */
        (r) => res[k] = r)));
        if (k === PRIMARY_OUTLET) {
            waitHead.push(mapped);
        }
        else {
            waitTail.push(mapped);
        }
    }));
    // Closure compiler has problem with using spread operator here. So we use "Array.concat".
    // Note that we also need to cast the new promise because TypeScript cannot infer the type
    // when calling the "of" function through "Function.apply"
    return ((/** @type {?} */ (of.apply(null, waitHead.concat(waitTail)))))
        .pipe(concatAll(), lastValue(), map((/**
     * @return {?}
     */
    () => res)));
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function wrapIntoObservable(value) {
    if (isObservable(value)) {
        return value;
    }
    if (isPromise(value)) {
        // Use `Promise.resolve()` to wrap promise-like instances.
        // Required ie when a Resolver returns a AngularJS `$q` promise to correctly trigger the
        // change detection.
        return from(Promise.resolve(value));
    }
    return of(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQWtCLGFBQWEsSUFBSSxZQUFZLEVBQUUsVUFBVSxJQUFJLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUMsSUFBSSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFTLGNBQWMsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0FBRWpELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxDQUFRLEVBQUUsQ0FBUTtJQUNuRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUssQ0FBQztJQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztLQUM3QztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxDQUFTLEVBQUUsQ0FBUzs7Ozs7O1VBS3pDLEVBQUUsR0FBRyxtQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF3Qjs7VUFDM0MsRUFBRSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQXdCO0lBQ2pELElB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LGNBQWMsRUFBRTtZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQyxFQUFDLENBQUM7SUFFSCwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBEQUEwRDtJQUMxRCxPQUFPLENBQUMsbUJBQUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUE2QixDQUFDO1NBQzFFLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBSSxLQUFpQztJQUNyRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDcEIsMERBQTBEO1FBQzFELHdGQUF3RjtRQUN4RixvQkFBb0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZUZhY3RvcnksIMm1aXNPYnNlcnZhYmxlIGFzIGlzT2JzZXJ2YWJsZSwgybVpc1Byb21pc2UgYXMgaXNQcm9taXNlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZnJvbSwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjb25jYXRBbGwsIGxhc3QgYXMgbGFzdFZhbHVlLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtQYXJhbXMsIFBSSU1BUllfT1VUTEVUfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsQXJyYXlzKGE6IGFueVtdLCBiOiBhbnlbXSk6IGJvb2xlYW4ge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgIGlmICghc2hhbGxvd0VxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93RXF1YWwoYTogUGFyYW1zLCBiOiBQYXJhbXMpOiBib29sZWFuIHtcbiAgLy8gQ2FzdGluZyBPYmplY3Qua2V5cyByZXR1cm4gdmFsdWVzIHRvIGluY2x1ZGUgYHVuZGVmaW5lZGAgYXMgdGhlcmUgYXJlIHNvbWUgY2FzZXNcbiAgLy8gaW4gSUUgMTEgd2hlcmUgdGhpcyBjYW4gaGFwcGVuLiBDYW5ub3QgcHJvdmlkZSBhIHRlc3QgYmVjYXVzZSB0aGUgYmVoYXZpb3Igb25seVxuICAvLyBleGlzdHMgaW4gY2VydGFpbiBjaXJjdW1zdGFuY2VzIGluIElFIDExLCB0aGVyZWZvcmUgZG9pbmcgdGhpcyBjYXN0IGVuc3VyZXMgdGhlXG4gIC8vIGxvZ2ljIGlzIGNvcnJlY3QgZm9yIHdoZW4gdGhpcyBlZGdlIGNhc2UgaXMgaGl0LlxuICBjb25zdCBrMSA9IE9iamVjdC5rZXlzKGEpIGFzIHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICBjb25zdCBrMiA9IE9iamVjdC5rZXlzKGIpIGFzIHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICBpZiAoIWsxIHx8ICFrMiB8fCBrMS5sZW5ndGggIT0gazIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxldCBrZXk6IHN0cmluZztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrMS5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGsxW2ldO1xuICAgIGlmICghZXF1YWxBcnJheXNPclN0cmluZyhhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogVGVzdCBlcXVhbGl0eSBmb3IgYXJyYXlzIG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbEFycmF5c09yU3RyaW5nKGE6IHN0cmluZ3xzdHJpbmdbXSwgYjogc3RyaW5nfHN0cmluZ1tdKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGEpICYmIEFycmF5LmlzQXJyYXkoYikpIHtcbiAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gYS5ldmVyeShhSXRlbSA9PiBiLmluZGV4T2YoYUl0ZW0pID4gLTEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9XG59XG5cbi8qKlxuICogRmxhdHRlbnMgc2luZ2xlLWxldmVsIG5lc3RlZCBhcnJheXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuPFQ+KGFycjogVFtdW10pOiBUW10ge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhc3Q8VD4oYTogVFtdKTogVHxudWxsIHtcbiAgcmV0dXJuIGEubGVuZ3RoID4gMCA/IGFbYS5sZW5ndGggLSAxXSA6IG51bGw7XG59XG5cbi8qKlxuICogVmVyaWZ5cyBhbGwgYm9vbGVhbnMgaW4gYW4gYXJyYXkgYXJlIGB0cnVlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFuZChib29sczogYm9vbGVhbltdKTogYm9vbGVhbiB7XG4gIHJldHVybiAhYm9vbHMuc29tZSh2ID0+ICF2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2g8SywgVj4obWFwOiB7W2tleTogc3RyaW5nXTogVn0sIGNhbGxiYWNrOiAodjogViwgazogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBtYXApIHtcbiAgICBpZiAobWFwLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBjYWxsYmFjayhtYXBbcHJvcF0sIHByb3ApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvck1hcDxBLCBCPihcbiAgICBvYmo6IHtbazogc3RyaW5nXTogQX0sIGZuOiAoazogc3RyaW5nLCBhOiBBKSA9PiBPYnNlcnZhYmxlPEI+KTogT2JzZXJ2YWJsZTx7W2s6IHN0cmluZ106IEJ9PiB7XG4gIGlmIChPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvZih7fSk7XG4gIH1cblxuICBjb25zdCB3YWl0SGVhZDogT2JzZXJ2YWJsZTxCPltdID0gW107XG4gIGNvbnN0IHdhaXRUYWlsOiBPYnNlcnZhYmxlPEI+W10gPSBbXTtcbiAgY29uc3QgcmVzOiB7W2s6IHN0cmluZ106IEJ9ID0ge307XG5cbiAgZm9yRWFjaChvYmosIChhOiBBLCBrOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtYXBwZWQgPSBmbihrLCBhKS5waXBlKG1hcCgocjogQikgPT4gcmVzW2tdID0gcikpO1xuICAgIGlmIChrID09PSBQUklNQVJZX09VVExFVCkge1xuICAgICAgd2FpdEhlYWQucHVzaChtYXBwZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YWl0VGFpbC5wdXNoKG1hcHBlZCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBDbG9zdXJlIGNvbXBpbGVyIGhhcyBwcm9ibGVtIHdpdGggdXNpbmcgc3ByZWFkIG9wZXJhdG9yIGhlcmUuIFNvIHdlIHVzZSBcIkFycmF5LmNvbmNhdFwiLlxuICAvLyBOb3RlIHRoYXQgd2UgYWxzbyBuZWVkIHRvIGNhc3QgdGhlIG5ldyBwcm9taXNlIGJlY2F1c2UgVHlwZVNjcmlwdCBjYW5ub3QgaW5mZXIgdGhlIHR5cGVcbiAgLy8gd2hlbiBjYWxsaW5nIHRoZSBcIm9mXCIgZnVuY3Rpb24gdGhyb3VnaCBcIkZ1bmN0aW9uLmFwcGx5XCJcbiAgcmV0dXJuIChvZi5hcHBseShudWxsLCB3YWl0SGVhZC5jb25jYXQod2FpdFRhaWwpKSBhcyBPYnNlcnZhYmxlPE9ic2VydmFibGU8Qj4+KVxuICAgICAgLnBpcGUoY29uY2F0QWxsKCksIGxhc3RWYWx1ZSgpLCBtYXAoKCkgPT4gcmVzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwSW50b09ic2VydmFibGU8VD4odmFsdWU6IFR8UHJvbWlzZTxUPnxPYnNlcnZhYmxlPFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChpc09ic2VydmFibGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKGlzUHJvbWlzZSh2YWx1ZSkpIHtcbiAgICAvLyBVc2UgYFByb21pc2UucmVzb2x2ZSgpYCB0byB3cmFwIHByb21pc2UtbGlrZSBpbnN0YW5jZXMuXG4gICAgLy8gUmVxdWlyZWQgaWUgd2hlbiBhIFJlc29sdmVyIHJldHVybnMgYSBBbmd1bGFySlMgYCRxYCBwcm9taXNlIHRvIGNvcnJlY3RseSB0cmlnZ2VyIHRoZVxuICAgIC8vIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAgcmV0dXJuIGZyb20oUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gb2YodmFsdWUpO1xufVxuIl19