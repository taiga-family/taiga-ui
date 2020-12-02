/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/node_util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DECLARATION_VIEW, T_HOST } from './interfaces/view';
import { getParentInjectorViewOffset } from './util/injector_utils';
/**
 * If `startTNode.parent` exists and has an injector, returns TNode for that injector.
 * Otherwise, unwraps a parent injector location number to find the view offset from the current
 * injector, then walks up the declaration view tree until the TNode of the parent injector is
 * found.
 *
 * @param {?} location The location of the parent injector, which contains the view offset
 * @param {?} startView The LView instance from which to start walking up the view tree
 * @param {?} startTNode The TNode instance of the starting element
 * @return {?} The TNode of the parent injector
 */
export function getParentInjectorTNode(location, startView, startTNode) {
    // If there is an injector on the parent TNode, retrieve the TNode for that injector.
    if (startTNode.parent && startTNode.parent.injectorIndex !== -1) {
        // view offset is 0
        /** @type {?} */
        const injectorIndex = startTNode.parent.injectorIndex;
        /** @type {?} */
        let tNode = startTNode.parent;
        // If tNode.injectorIndex === tNode.parent.injectorIndex, then the index belongs to a parent
        // injector.
        while (tNode.parent != null && injectorIndex == tNode.parent.injectorIndex) {
            tNode = tNode.parent;
        }
        return tNode;
    }
    /** @type {?} */
    let viewOffset = getParentInjectorViewOffset(location);
    // view offset is 1
    /** @type {?} */
    let parentView = startView;
    /** @type {?} */
    let parentTNode = (/** @type {?} */ (startView[T_HOST]));
    // view offset is superior to 1
    while (viewOffset > 1) {
        parentView = (/** @type {?} */ (parentView[DECLARATION_VIEW]));
        parentTNode = (/** @type {?} */ (parentView[T_HOST]));
        viewOffset--;
    }
    return parentTNode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZV91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9ub2RlX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFDLGdCQUFnQixFQUFTLE1BQU0sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xFLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7QUFhbEUsTUFBTSxVQUFVLHNCQUFzQixDQUNsQyxRQUFrQyxFQUFFLFNBQWdCLEVBQUUsVUFBaUI7SUFFekUscUZBQXFGO0lBQ3JGLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsRUFBRTs7O2NBRXpELGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWE7O1lBQ2pELEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTTtRQUM3Qiw0RkFBNEY7UUFDNUYsWUFBWTtRQUNaLE9BQU8sS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksYUFBYSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQzFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDs7UUFDRyxVQUFVLEdBQUcsMkJBQTJCLENBQUMsUUFBUSxDQUFDOzs7UUFFbEQsVUFBVSxHQUFHLFNBQVM7O1FBQ3RCLFdBQVcsR0FBRyxtQkFBQSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQWdCO0lBQ25ELCtCQUErQjtJQUMvQixPQUFPLFVBQVUsR0FBRyxDQUFDLEVBQUU7UUFDckIsVUFBVSxHQUFHLG1CQUFBLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLENBQUM7UUFDM0MsV0FBVyxHQUFHLG1CQUFBLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBZ0IsQ0FBQztRQUNqRCxVQUFVLEVBQUUsQ0FBQztLQUNkO0lBQ0QsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtSZWxhdGl2ZUluamVjdG9yTG9jYXRpb259IGZyb20gJy4vaW50ZXJmYWNlcy9pbmplY3Rvcic7XG5pbXBvcnQge1RDb250YWluZXJOb2RlLCBURWxlbWVudE5vZGUsIFROb2RlfSBmcm9tICcuL2ludGVyZmFjZXMvbm9kZSc7XG5pbXBvcnQge0RFQ0xBUkFUSU9OX1ZJRVcsIExWaWV3LCBUX0hPU1R9IGZyb20gJy4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7Z2V0UGFyZW50SW5qZWN0b3JWaWV3T2Zmc2V0fSBmcm9tICcuL3V0aWwvaW5qZWN0b3JfdXRpbHMnO1xuXG4vKipcbiAqIElmIGBzdGFydFROb2RlLnBhcmVudGAgZXhpc3RzIGFuZCBoYXMgYW4gaW5qZWN0b3IsIHJldHVybnMgVE5vZGUgZm9yIHRoYXQgaW5qZWN0b3IuXG4gKiBPdGhlcndpc2UsIHVud3JhcHMgYSBwYXJlbnQgaW5qZWN0b3IgbG9jYXRpb24gbnVtYmVyIHRvIGZpbmQgdGhlIHZpZXcgb2Zmc2V0IGZyb20gdGhlIGN1cnJlbnRcbiAqIGluamVjdG9yLCB0aGVuIHdhbGtzIHVwIHRoZSBkZWNsYXJhdGlvbiB2aWV3IHRyZWUgdW50aWwgdGhlIFROb2RlIG9mIHRoZSBwYXJlbnQgaW5qZWN0b3IgaXNcbiAqIGZvdW5kLlxuICpcbiAqIEBwYXJhbSBsb2NhdGlvbiBUaGUgbG9jYXRpb24gb2YgdGhlIHBhcmVudCBpbmplY3Rvciwgd2hpY2ggY29udGFpbnMgdGhlIHZpZXcgb2Zmc2V0XG4gKiBAcGFyYW0gc3RhcnRWaWV3IFRoZSBMVmlldyBpbnN0YW5jZSBmcm9tIHdoaWNoIHRvIHN0YXJ0IHdhbGtpbmcgdXAgdGhlIHZpZXcgdHJlZVxuICogQHBhcmFtIHN0YXJ0VE5vZGUgVGhlIFROb2RlIGluc3RhbmNlIG9mIHRoZSBzdGFydGluZyBlbGVtZW50XG4gKiBAcmV0dXJucyBUaGUgVE5vZGUgb2YgdGhlIHBhcmVudCBpbmplY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50SW5qZWN0b3JUTm9kZShcbiAgICBsb2NhdGlvbjogUmVsYXRpdmVJbmplY3RvckxvY2F0aW9uLCBzdGFydFZpZXc6IExWaWV3LCBzdGFydFROb2RlOiBUTm9kZSk6IFRFbGVtZW50Tm9kZXxcbiAgICBUQ29udGFpbmVyTm9kZXxudWxsIHtcbiAgLy8gSWYgdGhlcmUgaXMgYW4gaW5qZWN0b3Igb24gdGhlIHBhcmVudCBUTm9kZSwgcmV0cmlldmUgdGhlIFROb2RlIGZvciB0aGF0IGluamVjdG9yLlxuICBpZiAoc3RhcnRUTm9kZS5wYXJlbnQgJiYgc3RhcnRUTm9kZS5wYXJlbnQuaW5qZWN0b3JJbmRleCAhPT0gLTEpIHtcbiAgICAvLyB2aWV3IG9mZnNldCBpcyAwXG4gICAgY29uc3QgaW5qZWN0b3JJbmRleCA9IHN0YXJ0VE5vZGUucGFyZW50LmluamVjdG9ySW5kZXg7XG4gICAgbGV0IHROb2RlID0gc3RhcnRUTm9kZS5wYXJlbnQ7XG4gICAgLy8gSWYgdE5vZGUuaW5qZWN0b3JJbmRleCA9PT0gdE5vZGUucGFyZW50LmluamVjdG9ySW5kZXgsIHRoZW4gdGhlIGluZGV4IGJlbG9uZ3MgdG8gYSBwYXJlbnRcbiAgICAvLyBpbmplY3Rvci5cbiAgICB3aGlsZSAodE5vZGUucGFyZW50ICE9IG51bGwgJiYgaW5qZWN0b3JJbmRleCA9PSB0Tm9kZS5wYXJlbnQuaW5qZWN0b3JJbmRleCkge1xuICAgICAgdE5vZGUgPSB0Tm9kZS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiB0Tm9kZTtcbiAgfVxuICBsZXQgdmlld09mZnNldCA9IGdldFBhcmVudEluamVjdG9yVmlld09mZnNldChsb2NhdGlvbik7XG4gIC8vIHZpZXcgb2Zmc2V0IGlzIDFcbiAgbGV0IHBhcmVudFZpZXcgPSBzdGFydFZpZXc7XG4gIGxldCBwYXJlbnRUTm9kZSA9IHN0YXJ0Vmlld1tUX0hPU1RdIGFzIFRFbGVtZW50Tm9kZTtcbiAgLy8gdmlldyBvZmZzZXQgaXMgc3VwZXJpb3IgdG8gMVxuICB3aGlsZSAodmlld09mZnNldCA+IDEpIHtcbiAgICBwYXJlbnRWaWV3ID0gcGFyZW50Vmlld1tERUNMQVJBVElPTl9WSUVXXSE7XG4gICAgcGFyZW50VE5vZGUgPSBwYXJlbnRWaWV3W1RfSE9TVF0gYXMgVEVsZW1lbnROb2RlO1xuICAgIHZpZXdPZmZzZXQtLTtcbiAgfVxuICByZXR1cm4gcGFyZW50VE5vZGU7XG59XG4iXX0=