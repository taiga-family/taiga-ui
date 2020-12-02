/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/operators/switch_tap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
/**
 * Perform a side effect through a switchMap for every emission on the source Observable,
 * but return an Observable that is identical to the source. It's essentially the same as
 * the `tap` operator, but if the side effectful `next` function returns an ObservableInput,
 * it will wait before continuing with the original value.
 * @template T
 * @param {?} next
 * @return {?}
 */
export function switchTap(next) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return source.pipe(switchMap((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            /** @type {?} */
            const nextResult = next(v);
            if (nextResult) {
                return from(nextResult).pipe(map((/**
                 * @return {?}
                 */
                () => v)));
            }
            return from([v]);
        })));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoX3RhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci9zcmMvb3BlcmF0b3JzL3N3aXRjaF90YXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLElBQUksRUFBNEMsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztBQVE5QyxNQUFNLFVBQVUsU0FBUyxDQUFJLElBQXlDO0lBRXBFOzs7O0lBQU8sVUFBUyxNQUFNO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7O2tCQUN6QixVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLFVBQVUsRUFBRTtnQkFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7O2dCQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDNUM7WUFDRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ZnJvbSwgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZhYmxlSW5wdXR9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIFBlcmZvcm0gYSBzaWRlIGVmZmVjdCB0aHJvdWdoIGEgc3dpdGNoTWFwIGZvciBldmVyeSBlbWlzc2lvbiBvbiB0aGUgc291cmNlIE9ic2VydmFibGUsXG4gKiBidXQgcmV0dXJuIGFuIE9ic2VydmFibGUgdGhhdCBpcyBpZGVudGljYWwgdG8gdGhlIHNvdXJjZS4gSXQncyBlc3NlbnRpYWxseSB0aGUgc2FtZSBhc1xuICogdGhlIGB0YXBgIG9wZXJhdG9yLCBidXQgaWYgdGhlIHNpZGUgZWZmZWN0ZnVsIGBuZXh0YCBmdW5jdGlvbiByZXR1cm5zIGFuIE9ic2VydmFibGVJbnB1dCxcbiAqIGl0IHdpbGwgd2FpdCBiZWZvcmUgY29udGludWluZyB3aXRoIHRoZSBvcmlnaW5hbCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRhcDxUPihuZXh0OiAoeDogVCkgPT4gdm9pZHxPYnNlcnZhYmxlSW5wdXQ8YW55Pik6XG4gICAgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiBzb3VyY2UucGlwZShzd2l0Y2hNYXAodiA9PiB7XG4gICAgICBjb25zdCBuZXh0UmVzdWx0ID0gbmV4dCh2KTtcbiAgICAgIGlmIChuZXh0UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBmcm9tKG5leHRSZXN1bHQpLnBpcGUobWFwKCgpID0+IHYpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tKFt2XSk7XG4gICAgfSkpO1xuICB9O1xufVxuIl19