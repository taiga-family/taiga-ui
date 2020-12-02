/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/instructions/text.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertDataInRange, assertEqual } from '../../util/assert';
import { HEADER_OFFSET, RENDERER, T_HOST } from '../interfaces/view';
import { appendChild, createTextNode } from '../node_manipulation';
import { getBindingIndex, getLView, getTView, setPreviousOrParentTNode } from '../state';
import { getOrCreateTNode } from './shared';
/**
 * Create static text node
 *
 * \@codeGenApi
 * @param {?} index Index of the node in the data array
 * @param {?=} value Static string value to write.
 *
 * @return {?}
 */
export function ɵɵtext(index, value = '') {
    /** @type {?} */
    const lView = getLView();
    /** @type {?} */
    const tView = getTView();
    /** @type {?} */
    const adjustedIndex = index + HEADER_OFFSET;
    ngDevMode &&
        assertEqual(getBindingIndex(), tView.bindingStartIndex, 'text nodes should be created before any bindings');
    ngDevMode && assertDataInRange(lView, adjustedIndex);
    /** @type {?} */
    const tNode = tView.firstCreatePass ?
        getOrCreateTNode(tView, lView[T_HOST], index, 3 /* Element */, null, null) :
        (/** @type {?} */ (tView.data[adjustedIndex]));
    /** @type {?} */
    const textNative = lView[adjustedIndex] = createTextNode(value, lView[RENDERER]);
    appendChild(tView, lView, textNative, tNode);
    // Text nodes are self closing.
    setPreviousOrParentTNode(tNode, false);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW5zdHJ1Y3Rpb25zL3RleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWpFLE9BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUUsY0FBYyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7OztBQVkxQyxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFOztVQUNoRCxLQUFLLEdBQUcsUUFBUSxFQUFFOztVQUNsQixLQUFLLEdBQUcsUUFBUSxFQUFFOztVQUNsQixhQUFhLEdBQUcsS0FBSyxHQUFHLGFBQWE7SUFFM0MsU0FBUztRQUNMLFdBQVcsQ0FDUCxlQUFlLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQzFDLGtEQUFrRCxDQUFDLENBQUM7SUFDNUQsU0FBUyxJQUFJLGlCQUFpQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQzs7VUFFL0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssbUJBQXFCLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlFLG1CQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQWdCOztVQUV2QyxVQUFVLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hGLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU3QywrQkFBK0I7SUFDL0Isd0JBQXdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2Fzc2VydERhdGFJblJhbmdlLCBhc3NlcnRFcXVhbH0gZnJvbSAnLi4vLi4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtURWxlbWVudE5vZGUsIFROb2RlVHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7SEVBREVSX09GRlNFVCwgUkVOREVSRVIsIFRfSE9TVH0gZnJvbSAnLi4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7YXBwZW5kQ2hpbGQsIGNyZWF0ZVRleHROb2RlfSBmcm9tICcuLi9ub2RlX21hbmlwdWxhdGlvbic7XG5pbXBvcnQge2dldEJpbmRpbmdJbmRleCwgZ2V0TFZpZXcsIGdldFRWaWV3LCBzZXRQcmV2aW91c09yUGFyZW50VE5vZGV9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7Z2V0T3JDcmVhdGVUTm9kZX0gZnJvbSAnLi9zaGFyZWQnO1xuXG5cblxuLyoqXG4gKiBDcmVhdGUgc3RhdGljIHRleHQgbm9kZVxuICpcbiAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgbm9kZSBpbiB0aGUgZGF0YSBhcnJheVxuICogQHBhcmFtIHZhbHVlIFN0YXRpYyBzdHJpbmcgdmFsdWUgdG8gd3JpdGUuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybV0ZXh0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgPSAnJyk6IHZvaWQge1xuICBjb25zdCBsVmlldyA9IGdldExWaWV3KCk7XG4gIGNvbnN0IHRWaWV3ID0gZ2V0VFZpZXcoKTtcbiAgY29uc3QgYWRqdXN0ZWRJbmRleCA9IGluZGV4ICsgSEVBREVSX09GRlNFVDtcblxuICBuZ0Rldk1vZGUgJiZcbiAgICAgIGFzc2VydEVxdWFsKFxuICAgICAgICAgIGdldEJpbmRpbmdJbmRleCgpLCB0Vmlldy5iaW5kaW5nU3RhcnRJbmRleCxcbiAgICAgICAgICAndGV4dCBub2RlcyBzaG91bGQgYmUgY3JlYXRlZCBiZWZvcmUgYW55IGJpbmRpbmdzJyk7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnREYXRhSW5SYW5nZShsVmlldywgYWRqdXN0ZWRJbmRleCk7XG5cbiAgY29uc3QgdE5vZGUgPSB0Vmlldy5maXJzdENyZWF0ZVBhc3MgP1xuICAgICAgZ2V0T3JDcmVhdGVUTm9kZSh0VmlldywgbFZpZXdbVF9IT1NUXSwgaW5kZXgsIFROb2RlVHlwZS5FbGVtZW50LCBudWxsLCBudWxsKSA6XG4gICAgICB0Vmlldy5kYXRhW2FkanVzdGVkSW5kZXhdIGFzIFRFbGVtZW50Tm9kZTtcblxuICBjb25zdCB0ZXh0TmF0aXZlID0gbFZpZXdbYWRqdXN0ZWRJbmRleF0gPSBjcmVhdGVUZXh0Tm9kZSh2YWx1ZSwgbFZpZXdbUkVOREVSRVJdKTtcbiAgYXBwZW5kQ2hpbGQodFZpZXcsIGxWaWV3LCB0ZXh0TmF0aXZlLCB0Tm9kZSk7XG5cbiAgLy8gVGV4dCBub2RlcyBhcmUgc2VsZiBjbG9zaW5nLlxuICBzZXRQcmV2aW91c09yUGFyZW50VE5vZGUodE5vZGUsIGZhbHNlKTtcbn1cbiJdfQ==