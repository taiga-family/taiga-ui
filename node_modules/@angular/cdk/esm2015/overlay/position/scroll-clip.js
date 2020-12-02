/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/position/scroll-clip.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is scrolled out of view
 */
export function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some((/**
     * @param {?} containerBounds
     * @return {?}
     */
    containerBounds => {
        /** @type {?} */
        const outsideAbove = element.bottom < containerBounds.top;
        /** @type {?} */
        const outsideBelow = element.top > containerBounds.bottom;
        /** @type {?} */
        const outsideLeft = element.right < containerBounds.left;
        /** @type {?} */
        const outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    }));
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is clipped
 */
export function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some((/**
     * @param {?} scrollContainerRect
     * @return {?}
     */
    scrollContainerRect => {
        /** @type {?} */
        const clippedAbove = element.top < scrollContainerRect.top;
        /** @type {?} */
        const clippedBelow = element.bottom > scrollContainerRect.bottom;
        /** @type {?} */
        const clippedLeft = element.left < scrollContainerRect.left;
        /** @type {?} */
        const clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWNsaXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvcG9zaXRpb24vc2Nyb2xsLWNsaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxPQUFtQixFQUFFLGdCQUE4QjtJQUM5RixPQUFPLGdCQUFnQixDQUFDLElBQUk7Ozs7SUFBQyxlQUFlLENBQUMsRUFBRTs7Y0FDdkMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLEdBQUc7O2NBQ25ELFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxNQUFNOztjQUNuRCxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSTs7Y0FDbEQsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUs7UUFFekQsT0FBTyxZQUFZLElBQUksWUFBWSxJQUFJLFdBQVcsSUFBSSxZQUFZLENBQUM7SUFDckUsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7OztBQVVELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxPQUFtQixFQUFFLGdCQUE4QjtJQUM3RixPQUFPLGdCQUFnQixDQUFDLElBQUk7Ozs7SUFBQyxtQkFBbUIsQ0FBQyxFQUFFOztjQUMzQyxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHOztjQUNwRCxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxNQUFNOztjQUMxRCxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxJQUFJOztjQUNyRCxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxLQUFLO1FBRTlELE9BQU8sWUFBWSxJQUFJLFlBQVksSUFBSSxXQUFXLElBQUksWUFBWSxDQUFDO0lBQ3JFLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUT0RPKGplbGJvdXJuKTogbW92ZSB0aGlzIHRvIGxpdmUgd2l0aCB0aGUgcmVzdCBvZiB0aGUgc2Nyb2xsaW5nIGNvZGVcbi8vIFRPRE8oamVsYm91cm4pOiBzb21lZGF5IHJlcGxhY2UgdGhpcyB3aXRoIEludGVyc2VjdGlvbk9ic2VydmVyc1xuXG4vKipcbiAqIEdldHMgd2hldGhlciBhbiBlbGVtZW50IGlzIHNjcm9sbGVkIG91dHNpZGUgb2YgdmlldyBieSBhbnkgb2YgaXRzIHBhcmVudCBzY3JvbGxpbmcgY29udGFpbmVycy5cbiAqIEBwYXJhbSBlbGVtZW50IERpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnQgKGZyb20gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KVxuICogQHBhcmFtIHNjcm9sbENvbnRhaW5lcnMgRGltZW5zaW9ucyBvZiBlbGVtZW50J3Mgc2Nyb2xsaW5nIGNvbnRhaW5lcnMgKGZyb20gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KVxuICogQHJldHVybnMgV2hldGhlciB0aGUgZWxlbWVudCBpcyBzY3JvbGxlZCBvdXQgb2Ygdmlld1xuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50U2Nyb2xsZWRPdXRzaWRlVmlldyhlbGVtZW50OiBDbGllbnRSZWN0LCBzY3JvbGxDb250YWluZXJzOiBDbGllbnRSZWN0W10pIHtcbiAgcmV0dXJuIHNjcm9sbENvbnRhaW5lcnMuc29tZShjb250YWluZXJCb3VuZHMgPT4ge1xuICAgIGNvbnN0IG91dHNpZGVBYm92ZSA9IGVsZW1lbnQuYm90dG9tIDwgY29udGFpbmVyQm91bmRzLnRvcDtcbiAgICBjb25zdCBvdXRzaWRlQmVsb3cgPSBlbGVtZW50LnRvcCA+IGNvbnRhaW5lckJvdW5kcy5ib3R0b207XG4gICAgY29uc3Qgb3V0c2lkZUxlZnQgPSBlbGVtZW50LnJpZ2h0IDwgY29udGFpbmVyQm91bmRzLmxlZnQ7XG4gICAgY29uc3Qgb3V0c2lkZVJpZ2h0ID0gZWxlbWVudC5sZWZ0ID4gY29udGFpbmVyQm91bmRzLnJpZ2h0O1xuXG4gICAgcmV0dXJuIG91dHNpZGVBYm92ZSB8fCBvdXRzaWRlQmVsb3cgfHwgb3V0c2lkZUxlZnQgfHwgb3V0c2lkZVJpZ2h0O1xuICB9KTtcbn1cblxuXG4vKipcbiAqIEdldHMgd2hldGhlciBhbiBlbGVtZW50IGlzIGNsaXBwZWQgYnkgYW55IG9mIGl0cyBzY3JvbGxpbmcgY29udGFpbmVycy5cbiAqIEBwYXJhbSBlbGVtZW50IERpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnQgKGZyb20gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KVxuICogQHBhcmFtIHNjcm9sbENvbnRhaW5lcnMgRGltZW5zaW9ucyBvZiBlbGVtZW50J3Mgc2Nyb2xsaW5nIGNvbnRhaW5lcnMgKGZyb20gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KVxuICogQHJldHVybnMgV2hldGhlciB0aGUgZWxlbWVudCBpcyBjbGlwcGVkXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRDbGlwcGVkQnlTY3JvbGxpbmcoZWxlbWVudDogQ2xpZW50UmVjdCwgc2Nyb2xsQ29udGFpbmVyczogQ2xpZW50UmVjdFtdKSB7XG4gIHJldHVybiBzY3JvbGxDb250YWluZXJzLnNvbWUoc2Nyb2xsQ29udGFpbmVyUmVjdCA9PiB7XG4gICAgY29uc3QgY2xpcHBlZEFib3ZlID0gZWxlbWVudC50b3AgPCBzY3JvbGxDb250YWluZXJSZWN0LnRvcDtcbiAgICBjb25zdCBjbGlwcGVkQmVsb3cgPSBlbGVtZW50LmJvdHRvbSA+IHNjcm9sbENvbnRhaW5lclJlY3QuYm90dG9tO1xuICAgIGNvbnN0IGNsaXBwZWRMZWZ0ID0gZWxlbWVudC5sZWZ0IDwgc2Nyb2xsQ29udGFpbmVyUmVjdC5sZWZ0O1xuICAgIGNvbnN0IGNsaXBwZWRSaWdodCA9IGVsZW1lbnQucmlnaHQgPiBzY3JvbGxDb250YWluZXJSZWN0LnJpZ2h0O1xuXG4gICAgcmV0dXJuIGNsaXBwZWRBYm92ZSB8fCBjbGlwcGVkQmVsb3cgfHwgY2xpcHBlZExlZnQgfHwgY2xpcHBlZFJpZ2h0O1xuICB9KTtcbn1cbiJdfQ==