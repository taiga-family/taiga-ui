/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/operators/prioritized_guard_value.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { combineLatest } from 'rxjs';
import { filter, map, scan, startWith, switchMap, take } from 'rxjs/operators';
import { isUrlTree } from '../utils/type_guards';
/** @type {?} */
const INITIAL_VALUE = Symbol('INITIAL_VALUE');
/**
 * @return {?}
 */
export function prioritizedGuardValue() {
    return switchMap((/**
     * @param {?} obs
     * @return {?}
     */
    obs => {
        return (/** @type {?} */ (combineLatest(...obs.map((/**
         * @param {?} o
         * @return {?}
         */
        o => o.pipe(take(1), startWith((/** @type {?} */ (INITIAL_VALUE)))))))
            .pipe(scan((/**
         * @param {?} acc
         * @param {?} list
         * @return {?}
         */
        (acc, list) => {
            /** @type {?} */
            let isPending = false;
            return list.reduce((/**
             * @param {?} innerAcc
             * @param {?} val
             * @param {?} i
             * @return {?}
             */
            (innerAcc, val, i) => {
                if (innerAcc !== INITIAL_VALUE)
                    return innerAcc;
                // Toggle pending flag if any values haven't been set yet
                if (val === INITIAL_VALUE)
                    isPending = true;
                // Any other return values are only valid if we haven't yet hit a pending
                // call. This guarantees that in the case of a guard at the bottom of the
                // tree that returns a redirect, we will wait for the higher priority
                // guard at the top to finish before performing the redirect.
                if (!isPending) {
                    // Early return when we hit a `false` value as that should always
                    // cancel navigation
                    if (val === false)
                        return val;
                    if (i === list.length - 1 || isUrlTree(val)) {
                        return val;
                    }
                }
                return innerAcc;
            }), acc);
        }), INITIAL_VALUE), filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item !== INITIAL_VALUE)), map((/**
         * @param {?} item
         * @return {?}
         */
        item => isUrlTree(item) ? item : item === true)), //
        take(1))));
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdGl6ZWRfZ3VhcmRfdmFsdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9yb3V0ZXIvc3JjL29wZXJhdG9ycy9wcmlvcml0aXplZF9ndWFyZF92YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsYUFBYSxFQUErQixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7O01BRXpDLGFBQWEsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDOzs7O0FBRzdDLE1BQU0sVUFBVSxxQkFBcUI7SUFFbkMsT0FBTyxTQUFTOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUU7UUFDckIsT0FBTyxtQkFBQSxhQUFhLENBQ1QsR0FBRyxHQUFHLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLG1CQUFBLGFBQWEsRUFBa0IsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUM1RSxJQUFJLENBQ0QsSUFBSTs7Ozs7UUFDQSxDQUFDLEdBQW1CLEVBQUUsSUFBc0IsRUFBRSxFQUFFOztnQkFDMUMsU0FBUyxHQUFHLEtBQUs7WUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTTs7Ozs7O1lBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQVMsRUFBRSxFQUFFO2dCQUM5QyxJQUFJLFFBQVEsS0FBSyxhQUFhO29CQUFFLE9BQU8sUUFBUSxDQUFDO2dCQUVoRCx5REFBeUQ7Z0JBQ3pELElBQUksR0FBRyxLQUFLLGFBQWE7b0JBQUUsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFFNUMseUVBQXlFO2dCQUN6RSx5RUFBeUU7Z0JBQ3pFLHFFQUFxRTtnQkFDckUsNkRBQTZEO2dCQUM3RCxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNkLGlFQUFpRTtvQkFDakUsb0JBQW9CO29CQUNwQixJQUFJLEdBQUcsS0FBSyxLQUFLO3dCQUFFLE9BQU8sR0FBRyxDQUFDO29CQUU5QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzNDLE9BQU8sR0FBRyxDQUFDO3FCQUNaO2lCQUNGO2dCQUVELE9BQU8sUUFBUSxDQUFDO1lBQ2xCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsR0FDRCxhQUFhLENBQUMsRUFDbEIsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBQyxFQUN0QyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQyxFQUFHLEVBQUU7UUFDeEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQStCLENBQUM7SUFDekQsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIE9wZXJhdG9yRnVuY3Rpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgc2Nhbiwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtVcmxUcmVlfSBmcm9tICcuLi91cmxfdHJlZSc7XG5pbXBvcnQge2lzVXJsVHJlZX0gZnJvbSAnLi4vdXRpbHMvdHlwZV9ndWFyZHMnO1xuXG5jb25zdCBJTklUSUFMX1ZBTFVFID0gU3ltYm9sKCdJTklUSUFMX1ZBTFVFJyk7XG5kZWNsYXJlIHR5cGUgSU5URVJJTV9WQUxVRVMgPSB0eXBlb2YgSU5JVElBTF9WQUxVRSB8IGJvb2xlYW4gfCBVcmxUcmVlO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpb3JpdGl6ZWRHdWFyZFZhbHVlKCk6XG4gICAgT3BlcmF0b3JGdW5jdGlvbjxPYnNlcnZhYmxlPGJvb2xlYW58VXJsVHJlZT5bXSwgYm9vbGVhbnxVcmxUcmVlPiB7XG4gIHJldHVybiBzd2l0Y2hNYXAob2JzID0+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgICAgIC4uLm9icy5tYXAobyA9PiBvLnBpcGUodGFrZSgxKSwgc3RhcnRXaXRoKElOSVRJQUxfVkFMVUUgYXMgSU5URVJJTV9WQUxVRVMpKSkpXG4gICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICBzY2FuKFxuICAgICAgICAgICAgICAgICAgICAgICAoYWNjOiBJTlRFUklNX1ZBTFVFUywgbGlzdDogSU5URVJJTV9WQUxVRVNbXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKGlubmVyQWNjLCB2YWwsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyQWNjICE9PSBJTklUSUFMX1ZBTFVFKSByZXR1cm4gaW5uZXJBY2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBwZW5kaW5nIGZsYWcgaWYgYW55IHZhbHVlcyBoYXZlbid0IGJlZW4gc2V0IHlldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gSU5JVElBTF9WQUxVRSkgaXNQZW5kaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW55IG90aGVyIHJldHVybiB2YWx1ZXMgYXJlIG9ubHkgdmFsaWQgaWYgd2UgaGF2ZW4ndCB5ZXQgaGl0IGEgcGVuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbC4gVGhpcyBndWFyYW50ZWVzIHRoYXQgaW4gdGhlIGNhc2Ugb2YgYSBndWFyZCBhdCB0aGUgYm90dG9tIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlZSB0aGF0IHJldHVybnMgYSByZWRpcmVjdCwgd2Ugd2lsbCB3YWl0IGZvciB0aGUgaGlnaGVyIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBndWFyZCBhdCB0aGUgdG9wIHRvIGZpbmlzaCBiZWZvcmUgcGVyZm9ybWluZyB0aGUgcmVkaXJlY3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUGVuZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFYXJseSByZXR1cm4gd2hlbiB3ZSBoaXQgYSBgZmFsc2VgIHZhbHVlIGFzIHRoYXQgc2hvdWxkIGFsd2F5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYW5jZWwgbmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBmYWxzZSkgcmV0dXJuIHZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gbGlzdC5sZW5ndGggLSAxIHx8IGlzVXJsVHJlZSh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJBY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgfSwgYWNjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgSU5JVElBTF9WQUxVRSksXG4gICAgICAgICAgICAgICAgICAgZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gSU5JVElBTF9WQUxVRSksXG4gICAgICAgICAgICAgICAgICAgbWFwKGl0ZW0gPT4gaXNVcmxUcmVlKGl0ZW0pID8gaXRlbSA6IGl0ZW0gPT09IHRydWUpLCAgLy9cbiAgICAgICAgICAgICAgICAgICB0YWtlKDEpKSBhcyBPYnNlcnZhYmxlPGJvb2xlYW58VXJsVHJlZT47XG4gIH0pO1xufVxuIl19