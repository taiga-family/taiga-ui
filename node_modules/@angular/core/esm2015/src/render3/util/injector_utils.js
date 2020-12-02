/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/util/injector_utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NO_PARENT_INJECTOR } from '../interfaces/injector';
import { DECLARATION_VIEW } from '../interfaces/view';
/// Parent Injector Utils ///////////////////////////////////////////////////////////////
/**
 * @param {?} parentLocation
 * @return {?}
 */
export function hasParentInjector(parentLocation) {
    return parentLocation !== NO_PARENT_INJECTOR;
}
/**
 * @param {?} parentLocation
 * @return {?}
 */
export function getParentInjectorIndex(parentLocation) {
    return ((/** @type {?} */ ((/** @type {?} */ (parentLocation))))) & 32767 /* InjectorIndexMask */;
}
/**
 * @param {?} parentLocation
 * @return {?}
 */
export function getParentInjectorViewOffset(parentLocation) {
    return ((/** @type {?} */ ((/** @type {?} */ (parentLocation))))) >> 16 /* ViewOffsetShift */;
}
/**
 * Unwraps a parent injector location number to find the view offset from the current injector,
 * then walks up the declaration view tree until the view is found that contains the parent
 * injector.
 *
 * @param {?} location The location of the parent injector, which contains the view offset
 * @param {?} startView The LView instance from which to start walking up the view tree
 * @return {?} The LView instance that contains the parent injector
 */
export function getParentInjectorView(location, startView) {
    /** @type {?} */
    let viewOffset = getParentInjectorViewOffset(location);
    /** @type {?} */
    let parentView = startView;
    // For most cases, the parent injector can be found on the host node (e.g. for component
    // or container), but we must keep the loop here to support the rarer case of deeply nested
    // <ng-template> tags or inline views, where the parent injector might live many views
    // above the child injector.
    while (viewOffset > 0) {
        parentView = (/** @type {?} */ (parentView[DECLARATION_VIEW]));
        viewOffset--;
    }
    return parentView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3JfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL3V0aWwvaW5qZWN0b3JfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFDLGtCQUFrQixFQUEwRCxNQUFNLHdCQUF3QixDQUFDO0FBQ25ILE9BQU8sRUFBQyxnQkFBZ0IsRUFBUSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7QUFFM0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLGNBQXdDO0lBQ3hFLE9BQU8sY0FBYyxLQUFLLGtCQUFrQixDQUFDO0FBQy9DLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLGNBQXdDO0lBQzdFLE9BQU8sQ0FBQyxtQkFBQSxtQkFBQSxjQUFjLEVBQU8sRUFBVSxDQUFDLGdDQUFrRCxDQUFDO0FBQzdGLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDJCQUEyQixDQUFDLGNBQXdDO0lBQ2xGLE9BQU8sQ0FBQyxtQkFBQSxtQkFBQSxjQUFjLEVBQU8sRUFBVSxDQUFDLDRCQUFpRCxDQUFDO0FBQzVGLENBQUM7Ozs7Ozs7Ozs7QUFXRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsUUFBa0MsRUFBRSxTQUFnQjs7UUFDcEYsVUFBVSxHQUFHLDJCQUEyQixDQUFDLFFBQVEsQ0FBQzs7UUFDbEQsVUFBVSxHQUFHLFNBQVM7SUFDMUIsd0ZBQXdGO0lBQ3hGLDJGQUEyRjtJQUMzRixzRkFBc0Y7SUFDdEYsNEJBQTRCO0lBQzVCLE9BQU8sVUFBVSxHQUFHLENBQUMsRUFBRTtRQUNyQixVQUFVLEdBQUcsbUJBQUEsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUMsQ0FBQztRQUMzQyxVQUFVLEVBQUUsQ0FBQztLQUNkO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Tk9fUEFSRU5UX0lOSkVDVE9SLCBSZWxhdGl2ZUluamVjdG9yTG9jYXRpb24sIFJlbGF0aXZlSW5qZWN0b3JMb2NhdGlvbkZsYWdzfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luamVjdG9yJztcbmltcG9ydCB7REVDTEFSQVRJT05fVklFVywgTFZpZXd9IGZyb20gJy4uL2ludGVyZmFjZXMvdmlldyc7XG4vLy8gUGFyZW50IEluamVjdG9yIFV0aWxzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1BhcmVudEluamVjdG9yKHBhcmVudExvY2F0aW9uOiBSZWxhdGl2ZUluamVjdG9yTG9jYXRpb24pOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhcmVudExvY2F0aW9uICE9PSBOT19QQVJFTlRfSU5KRUNUT1I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRJbmplY3RvckluZGV4KHBhcmVudExvY2F0aW9uOiBSZWxhdGl2ZUluamVjdG9yTG9jYXRpb24pOiBudW1iZXIge1xuICByZXR1cm4gKHBhcmVudExvY2F0aW9uIGFzIGFueSBhcyBudW1iZXIpICYgUmVsYXRpdmVJbmplY3RvckxvY2F0aW9uRmxhZ3MuSW5qZWN0b3JJbmRleE1hc2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRJbmplY3RvclZpZXdPZmZzZXQocGFyZW50TG9jYXRpb246IFJlbGF0aXZlSW5qZWN0b3JMb2NhdGlvbik6IG51bWJlciB7XG4gIHJldHVybiAocGFyZW50TG9jYXRpb24gYXMgYW55IGFzIG51bWJlcikgPj4gUmVsYXRpdmVJbmplY3RvckxvY2F0aW9uRmxhZ3MuVmlld09mZnNldFNoaWZ0O1xufVxuXG4vKipcbiAqIFVud3JhcHMgYSBwYXJlbnQgaW5qZWN0b3IgbG9jYXRpb24gbnVtYmVyIHRvIGZpbmQgdGhlIHZpZXcgb2Zmc2V0IGZyb20gdGhlIGN1cnJlbnQgaW5qZWN0b3IsXG4gKiB0aGVuIHdhbGtzIHVwIHRoZSBkZWNsYXJhdGlvbiB2aWV3IHRyZWUgdW50aWwgdGhlIHZpZXcgaXMgZm91bmQgdGhhdCBjb250YWlucyB0aGUgcGFyZW50XG4gKiBpbmplY3Rvci5cbiAqXG4gKiBAcGFyYW0gbG9jYXRpb24gVGhlIGxvY2F0aW9uIG9mIHRoZSBwYXJlbnQgaW5qZWN0b3IsIHdoaWNoIGNvbnRhaW5zIHRoZSB2aWV3IG9mZnNldFxuICogQHBhcmFtIHN0YXJ0VmlldyBUaGUgTFZpZXcgaW5zdGFuY2UgZnJvbSB3aGljaCB0byBzdGFydCB3YWxraW5nIHVwIHRoZSB2aWV3IHRyZWVcbiAqIEByZXR1cm5zIFRoZSBMVmlldyBpbnN0YW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBwYXJlbnQgaW5qZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudEluamVjdG9yVmlldyhsb2NhdGlvbjogUmVsYXRpdmVJbmplY3RvckxvY2F0aW9uLCBzdGFydFZpZXc6IExWaWV3KTogTFZpZXcge1xuICBsZXQgdmlld09mZnNldCA9IGdldFBhcmVudEluamVjdG9yVmlld09mZnNldChsb2NhdGlvbik7XG4gIGxldCBwYXJlbnRWaWV3ID0gc3RhcnRWaWV3O1xuICAvLyBGb3IgbW9zdCBjYXNlcywgdGhlIHBhcmVudCBpbmplY3RvciBjYW4gYmUgZm91bmQgb24gdGhlIGhvc3Qgbm9kZSAoZS5nLiBmb3IgY29tcG9uZW50XG4gIC8vIG9yIGNvbnRhaW5lciksIGJ1dCB3ZSBtdXN0IGtlZXAgdGhlIGxvb3AgaGVyZSB0byBzdXBwb3J0IHRoZSByYXJlciBjYXNlIG9mIGRlZXBseSBuZXN0ZWRcbiAgLy8gPG5nLXRlbXBsYXRlPiB0YWdzIG9yIGlubGluZSB2aWV3cywgd2hlcmUgdGhlIHBhcmVudCBpbmplY3RvciBtaWdodCBsaXZlIG1hbnkgdmlld3NcbiAgLy8gYWJvdmUgdGhlIGNoaWxkIGluamVjdG9yLlxuICB3aGlsZSAodmlld09mZnNldCA+IDApIHtcbiAgICBwYXJlbnRWaWV3ID0gcGFyZW50Vmlld1tERUNMQVJBVElPTl9WSUVXXSE7XG4gICAgdmlld09mZnNldC0tO1xuICB9XG4gIHJldHVybiBwYXJlbnRWaWV3O1xufVxuIl19