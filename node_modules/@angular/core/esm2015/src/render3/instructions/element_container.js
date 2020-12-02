/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/instructions/element_container.ts
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
import { assertHasParent } from '../assert';
import { attachPatchData } from '../context_discovery';
import { registerPostOrderHooks } from '../hooks';
import { isContentQueryHost, isDirectiveHost } from '../interfaces/type_checks';
import { HEADER_OFFSET, RENDERER, T_HOST } from '../interfaces/view';
import { assertNodeType } from '../node_assert';
import { appendChild } from '../node_manipulation';
import { getBindingIndex, getIsParent, getLView, getPreviousOrParentTNode, getTView, setIsNotParent, setPreviousOrParentTNode } from '../state';
import { computeStaticStyling } from '../styling/static_styling';
import { getConstant } from '../util/view_utils';
import { createDirectivesInstances, executeContentQueries, getOrCreateTNode, resolveDirectives, saveResolvedLocalsInData } from './shared';
/**
 * @param {?} index
 * @param {?} tView
 * @param {?} lView
 * @param {?=} attrsIndex
 * @param {?=} localRefsIndex
 * @return {?}
 */
function elementContainerStartFirstCreatePass(index, tView, lView, attrsIndex, localRefsIndex) {
    ngDevMode && ngDevMode.firstCreatePass++;
    /** @type {?} */
    const tViewConsts = tView.consts;
    /** @type {?} */
    const attrs = getConstant(tViewConsts, attrsIndex);
    /** @type {?} */
    const tNode = getOrCreateTNode(tView, lView[T_HOST], index, 4 /* ElementContainer */, 'ng-container', attrs);
    // While ng-container doesn't necessarily support styling, we use the style context to identify
    // and execute directives on the ng-container.
    if (attrs !== null) {
        computeStaticStyling(tNode, attrs, true);
    }
    /** @type {?} */
    const localRefs = getConstant(tViewConsts, localRefsIndex);
    resolveDirectives(tView, lView, tNode, localRefs);
    if (tView.queries !== null) {
        tView.queries.elementStart(tView, tNode);
    }
    return tNode;
}
/**
 * Creates a logical container for other nodes (<ng-container>) backed by a comment node in the DOM.
 * The instruction must later be followed by `elementContainerEnd()` call.
 *
 * \@codeGenApi
 * @param {?} index Index of the element in the LView array
 * @param {?=} attrsIndex Index of the container attributes in the `consts` array.
 * @param {?=} localRefsIndex Index of the container's local references in the `consts` array.
 *
 * Even if this instruction accepts a set of attributes no actual attribute values are propagated to
 * the DOM (as a comment node can't have attributes). Attributes are here only for directive
 * matching purposes and setting initial inputs of directives.
 *
 * @return {?}
 */
export function ɵɵelementContainerStart(index, attrsIndex, localRefsIndex) {
    /** @type {?} */
    const lView = getLView();
    /** @type {?} */
    const tView = getTView();
    /** @type {?} */
    const adjustedIndex = index + HEADER_OFFSET;
    ngDevMode && assertDataInRange(lView, adjustedIndex);
    ngDevMode &&
        assertEqual(getBindingIndex(), tView.bindingStartIndex, 'element containers should be created before any bindings');
    /** @type {?} */
    const tNode = tView.firstCreatePass ?
        elementContainerStartFirstCreatePass(index, tView, lView, attrsIndex, localRefsIndex) :
        (/** @type {?} */ (tView.data[adjustedIndex]));
    setPreviousOrParentTNode(tNode, true);
    ngDevMode && ngDevMode.rendererCreateComment++;
    /** @type {?} */
    const native = lView[adjustedIndex] =
        lView[RENDERER].createComment(ngDevMode ? 'ng-container' : '');
    appendChild(tView, lView, native, tNode);
    attachPatchData(native, lView);
    if (isDirectiveHost(tNode)) {
        createDirectivesInstances(tView, lView, tNode);
        executeContentQueries(tView, tNode, lView);
    }
    if (localRefsIndex != null) {
        saveResolvedLocalsInData(lView, tNode);
    }
}
/**
 * Mark the end of the <ng-container>.
 *
 * \@codeGenApi
 * @return {?}
 */
export function ɵɵelementContainerEnd() {
    /** @type {?} */
    let previousOrParentTNode = getPreviousOrParentTNode();
    /** @type {?} */
    const tView = getTView();
    if (getIsParent()) {
        setIsNotParent();
    }
    else {
        ngDevMode && assertHasParent(previousOrParentTNode);
        previousOrParentTNode = (/** @type {?} */ (previousOrParentTNode.parent));
        setPreviousOrParentTNode(previousOrParentTNode, false);
    }
    ngDevMode && assertNodeType(previousOrParentTNode, 4 /* ElementContainer */);
    if (tView.firstCreatePass) {
        registerPostOrderHooks(tView, previousOrParentTNode);
        if (isContentQueryHost(previousOrParentTNode)) {
            (/** @type {?} */ (tView.queries)).elementEnd(previousOrParentTNode);
        }
    }
}
/**
 * Creates an empty logical container using {\@link elementContainerStart}
 * and {\@link elementContainerEnd}
 *
 * \@codeGenApi
 * @param {?} index Index of the element in the LView array
 * @param {?=} attrsIndex Index of the container attributes in the `consts` array.
 * @param {?=} localRefsIndex Index of the container's local references in the `consts` array.
 *
 * @return {?}
 */
export function ɵɵelementContainer(index, attrsIndex, localRefsIndex) {
    ɵɵelementContainerStart(index, attrsIndex, localRefsIndex);
    ɵɵelementContainerEnd();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2luc3RydWN0aW9ucy9lbGVtZW50X2NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRWhELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUMsYUFBYSxFQUFTLFFBQVEsRUFBRSxNQUFNLEVBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzlJLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUMseUJBQXlCLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUMsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7OztBQUV6SSxTQUFTLG9DQUFvQyxDQUN6QyxLQUFhLEVB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QyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3BELHFCQUFxQixHQUFHLG1CQUFBLHFCQUFxQixDQUFDLE1BQU0sRUFBQyxDQUFDO1FBQ3RELHdCQUF3QixDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3hEO0lBRUQsU0FBUyxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsMkJBQTZCLENBQUM7SUFFL0UsSUFBSSxLQUFLLENBQUMsZUFBZSxFQUFFO1FBQ3pCLHNCQUFzQixDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3JELElBQUksa0JBQWtCLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUM3QyxtQkFBQSxLQUFLLENBQUMsT0FBTyxFQUFDLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDbEQ7S0FDRjtBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQVlELE1BQU0sVUFBVSxrQkFBa0IsQ0FDOUIsS0FBYSxFQUFFLFVBQXdCLEVBQUUsY0FBdUI7SUFDbEUsdUJBQXVCLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMzRCxxQkFBcUIsRUFBRSxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2Fzc2VydERhdGFJblJhbmdlLCBhc3NlcnRFcXVhbH0gZnJvbSAnLi4vLi4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHthc3NlcnRIYXNQYXJlbnR9IGZyb20gJy4uL2Fzc2VydCc7XG5pbXBvcnQge2F0dGFjaFBhdGNoRGF0YX0gZnJvbSAnLi4vY29udGV4dF9kaXNjb3ZlcnknO1xuaW1wb3J0IHtyZWdpc3RlclBvc3RPcmRlckhvb2tzfSBmcm9tICcuLi9ob29rcyc7XG5pbXBvcnQge1RBdHRyaWJ1dGVzLCBURWxlbWVudENvbnRhaW5lck5vZGUsIFROb2RlVHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7aXNDb250ZW50UXVlcnlIb3N0LCBpc0RpcmVjdGl2ZUhvc3R9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwZV9jaGVja3MnO1xuaW1wb3J0IHtIRUFERVJfT0ZGU0VULCBMVmlldywgUkVOREVSRVIsIFRfSE9TVCwgVFZpZXd9IGZyb20gJy4uL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2Fzc2VydE5vZGVUeXBlfSBmcm9tICcuLi9ub2RlX2Fzc2VydCc7XG5pbXBvcnQge2FwcGVuZENoaWxkfSBmcm9tICcuLi9ub2RlX21hbmlwdWxhdGlvbic7XG5pbXBvcnQge2dldEJpbmRpbmdJbmRleCwgZ2V0SXNQYXJlbnQsIGdldExWaWV3LCBnZXRQcmV2aW91c09yUGFyZW50VE5vZGUsIGdldFRWaWV3LCBzZXRJc05vdFBhcmVudCwgc2V0UHJldmlvdXNPclBhcmVudFROb2RlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge2NvbXB1dGVTdGF0aWNTdHlsaW5nfSBmcm9tICcuLi9zdHlsaW5nL3N0YXRpY19zdHlsaW5nJztcbmltcG9ydCB7Z2V0Q29uc3RhbnR9IGZyb20gJy4uL3V0aWwvdmlld191dGlscyc7XG5cbmltcG9ydCB7Y3JlYXRlRGlyZWN0aXZlc0luc3RhbmNlcywgZXhlY3V0ZUNvbnRlbnRRdWVyaWVzLCBnZXRPckNyZWF0ZVROb2RlLCByZXNvbHZlRGlyZWN0aXZlcywgc2F2ZVJlc29sdmVkTG9jYWxzSW5EYXRhfSBmcm9tICcuL3NoYXJlZCc7XG5cbmZ1bmN0aW9uIGVsZW1lbnRDb250YWluZXJTdGFydEZpcnN0Q3JlYXRlUGFzcyhcbiAgICBpbmRleDogbnVtYmVyLCB0VmlldzogVFZpZXcsIGxWaWV3OiBMVmlldywgYXR0cnNJbmRleD86IG51bWJlcnxudWxsLFxuICAgIGxvY2FsUmVmc0luZGV4PzogbnVtYmVyKTogVEVsZW1lbnRDb250YWluZXJOb2RlIHtcbiAgbmdEZXZNb2RlICYmIG5nRGV2TW9kZS5maXJzdENyZWF0ZVBhc3MrKztcblxuICBjb25zdCB0Vmlld0NvbnN0cyA9IHRWaWV3LmNvbnN0cztcbiAgY29uc3QgYXR0cnMgPSBnZXRDb25zdGFudDxUQXR0cmlidXRlcz4odFZpZXdDb25zdHMsIGF0dHJzSW5kZXgpO1xuICBjb25zdCB0Tm9kZSA9IGdldE9yQ3JlYXRlVE5vZGUoXG4gICAgICB0VmlldywgbFZpZXdbVF9IT1NUXSwgaW5kZXgsIFROb2RlVHlwZS5FbGVtZW50Q29udGFpbmVyLCAnbmctY29udGFpbmVyJywgYXR0cnMpO1xuXG4gIC8vIFdoaWxlIG5nLWNvbnRhaW5lciBkb2Vzbid0IG5lY2Vzc2FyaWx5IHN1cHBvcnQgc3R5bGluZywgd2UgdXNlIHRoZSBzdHlsZSBjb250ZXh0IHRvIGlkZW50aWZ5XG4gIC8vIGFuZCBleGVjdXRlIGRpcmVjdGl2ZXMgb24gdGhlIG5nLWNvbnRhaW5lci5cbiAgaWYgKGF0dHJzICE9PSBudWxsKSB7XG4gICAgY29tcHV0ZVN0YXRpY1N0eWxpbmcodE5vZGUsIGF0dHJzLCB0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IGxvY2FsUmVmcyA9IGdldENvbnN0YW50PHN0cmluZ1tdPih0Vmlld0NvbnN0cywgbG9jYWxSZWZzSW5kZXgpO1xuICByZXNvbHZlRGlyZWN0aXZlcyh0VmlldywgbFZpZXcsIHROb2RlLCBsb2NhbFJlZnMpO1xuXG4gIGlmICh0Vmlldy5xdWVyaWVzICE9PSBudWxsKSB7XG4gICAgdFZpZXcucXVlcmllcy5lbGVtZW50U3RhcnQodFZpZXcsIHROb2RlKTtcbiAgfVxuXG4gIHJldHVybiB0Tm9kZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbG9naWNhbCBjb250YWluZXIgZm9yIG90aGVyIG5vZGVzICg8bmctY29udGFpbmVyPikgYmFja2VkIGJ5IGEgY29tbWVudCBub2RlIGluIHRoZSBET00uXG4gKiBUaGUgaW5zdHJ1Y3Rpb24gbXVzdCBsYXRlciBiZSBmb2xsb3dlZCBieSBgZWxlbWVudENvbnRhaW5lckVuZCgpYCBjYWxsLlxuICpcbiAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgZWxlbWVudCBpbiB0aGUgTFZpZXcgYXJyYXlcbiAqIEBwYXJhbSBhdHRyc0luZGV4IEluZGV4IG9mIHRoZSBjb250YWluZXIgYXR0cmlidXRlcyBpbiB0aGUgYGNvbnN0c2AgYXJyYXkuXG4gKiBAcGFyYW0gbG9jYWxSZWZzSW5kZXggSW5kZXggb2YgdGhlIGNvbnRhaW5lcidzIGxvY2FsIHJlZmVyZW5jZXMgaW4gdGhlIGBjb25zdHNgIGFycmF5LlxuICpcbiAqIEV2ZW4gaWYgdGhpcyBpbnN0cnVjdGlvbiBhY2NlcHRzIGEgc2V0IG9mIGF0dHJpYnV0ZXMgbm8gYWN0dWFsIGF0dHJpYnV0ZSB2YWx1ZXMgYXJlIHByb3BhZ2F0ZWQgdG9cbiAqIHRoZSBET00gKGFzIGEgY29tbWVudCBub2RlIGNhbid0IGhhdmUgYXR0cmlidXRlcykuIEF0dHJpYnV0ZXMgYXJlIGhlcmUgb25seSBmb3IgZGlyZWN0aXZlXG4gKiBtYXRjaGluZyBwdXJwb3NlcyBhbmQgc2V0dGluZyBpbml0aWFsIGlucHV0cyBvZiBkaXJlY3RpdmVzLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1ZWxlbWVudENvbnRhaW5lclN0YXJ0KFxuICAgIGluZGV4OiBudW1iZXIsIGF0dHJzSW5kZXg/OiBudW1iZXJ8bnVsbCwgbG9jYWxSZWZzSW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgbFZpZXcgPSBnZXRMVmlldygpO1xuICBjb25zdCB0VmlldyA9IGdldFRWaWV3KCk7XG4gIGNvbnN0IGFkanVzdGVkSW5kZXggPSBpbmRleCArIEhFQURFUl9PRkZTRVQ7XG5cbiAgbmdEZXZNb2RlICYmIGFzc2VydERhdGFJblJhbmdlKGxWaWV3LCBhZGp1c3RlZEluZGV4KTtcbiAgbmdEZXZNb2RlICYmXG4gICAgICBhc3NlcnRFcXVhbChcbiAgICAgICAgICBnZXRCaW5kaW5nSW5kZXgoKSwgdFZpZXcuYmluZGluZ1N0YXJ0SW5kZXgsXG4gICAgICAgICAgJ2VsZW1lbnQgY29udGFpbmVycyBzaG91bGQgYmUgY3JlYXRlZCBiZWZvcmUgYW55IGJpbmRpbmdzJyk7XG5cbiAgY29uc3QgdE5vZGUgPSB0Vmlldy5maXJzdENyZWF0ZVBhc3MgP1xuICAgICAgZWxlbWVudENvbnRhaW5lclN0YXJ0Rmlyc3RDcmVhdGVQYXNzKGluZGV4LCB0VmlldywgbFZpZXcsIGF0dHJzSW5kZXgsIGxvY2FsUmVmc0luZGV4KSA6XG4gICAgICB0Vmlldy5kYXRhW2FkanVzdGVkSW5kZXhdIGFzIFRFbGVtZW50Q29udGFpbmVyTm9kZTtcbiAgc2V0UHJldmlvdXNPclBhcmVudFROb2RlKHROb2RlLCB0cnVlKTtcblxuICBuZ0Rldk1vZGUgJiYgbmdEZXZNb2RlLnJlbmRlcmVyQ3JlYXRlQ29tbWVudCsrO1xuICBjb25zdCBuYXRpdmUgPSBsVmlld1thZGp1c3RlZEluZGV4XSA9XG4gICAgICBsVmlld1tSRU5ERVJFUl0uY3JlYXRlQ29tbWVudChuZ0Rldk1vZGUgPyAnbmctY29udGFpbmVyJyA6ICcnKTtcbiAgYXBwZW5kQ2hpbGQodFZpZXcsIGxWaWV3LCBuYXRpdmUsIHROb2RlKTtcbiAgYXR0YWNoUGF0Y2hEYXRhKG5hdGl2ZSwgbFZpZXcpO1xuXG4gIGlmIChpc0RpcmVjdGl2ZUhvc3QodE5vZGUpKSB7XG4gICAgY3JlYXRlRGlyZWN0aXZlc0luc3RhbmNlcyh0VmlldywgbFZpZXcsIHROb2RlKTtcbiAgICBleGVjdXRlQ29udGVudFF1ZXJpZXModFZpZXcsIHROb2RlLCBsVmlldyk7XG4gIH1cblxuICBpZiAobG9jYWxSZWZzSW5kZXggIT0gbnVsbCkge1xuICAgIHNhdmVSZXNvbHZlZExvY2Fsc0luRGF0YShsVmlldywgdE5vZGUpO1xuICB9XG59XG5cbi8qKlxuICogTWFyayB0aGUgZW5kIG9mIHRoZSA8bmctY29udGFpbmVyPi5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtWVsZW1lbnRDb250YWluZXJFbmQoKTogdm9pZCB7XG4gIGxldCBwcmV2aW91c09yUGFyZW50VE5vZGUgPSBnZXRQcmV2aW91c09yUGFyZW50VE5vZGUoKTtcbiAgY29uc3QgdFZpZXcgPSBnZXRUVmlldygpO1xuICBpZiAoZ2V0SXNQYXJlbnQoKSkge1xuICAgIHNldElzTm90UGFyZW50KCk7XG4gIH0gZWxzZSB7XG4gICAgbmdEZXZNb2RlICYmIGFzc2VydEhhc1BhcmVudChwcmV2aW91c09yUGFyZW50VE5vZGUpO1xuICAgIHByZXZpb3VzT3JQYXJlbnRUTm9kZSA9IHByZXZpb3VzT3JQYXJlbnRUTm9kZS5wYXJlbnQhO1xuICAgIHNldFByZXZpb3VzT3JQYXJlbnRUTm9kZShwcmV2aW91c09yUGFyZW50VE5vZGUsIGZhbHNlKTtcbiAgfVxuXG4gIG5nRGV2TW9kZSAmJiBhc3NlcnROb2RlVHlwZShwcmV2aW91c09yUGFyZW50VE5vZGUsIFROb2RlVHlwZS5FbGVtZW50Q29udGFpbmVyKTtcblxuICBpZiAodFZpZXcuZmlyc3RDcmVhdGVQYXNzKSB7XG4gICAgcmVnaXN0ZXJQb3N0T3JkZXJIb29rcyh0VmlldywgcHJldmlvdXNPclBhcmVudFROb2RlKTtcbiAgICBpZiAoaXNDb250ZW50UXVlcnlIb3N0KHByZXZpb3VzT3JQYXJlbnRUTm9kZSkpIHtcbiAgICAgIHRWaWV3LnF1ZXJpZXMhLmVsZW1lbnRFbmQocHJldmlvdXNPclBhcmVudFROb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGVtcHR5IGxvZ2ljYWwgY29udGFpbmVyIHVzaW5nIHtAbGluayBlbGVtZW50Q29udGFpbmVyU3RhcnR9XG4gKiBhbmQge0BsaW5rIGVsZW1lbnRDb250YWluZXJFbmR9XG4gKlxuICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBlbGVtZW50IGluIHRoZSBMVmlldyBhcnJheVxuICogQHBhcmFtIGF0dHJzSW5kZXggSW5kZXggb2YgdGhlIGNvbnRhaW5lciBhdHRyaWJ1dGVzIGluIHRoZSBgY29uc3RzYCBhcnJheS5cbiAqIEBwYXJhbSBsb2NhbFJlZnNJbmRleCBJbmRleCBvZiB0aGUgY29udGFpbmVyJ3MgbG9jYWwgcmVmZXJlbmNlcyBpbiB0aGUgYGNvbnN0c2AgYXJyYXkuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVlbGVtZW50Q29udGFpbmVyKFxuICAgIGluZGV4OiBudW1iZXIsIGF0dHJzSW5kZXg/OiBudW1iZXJ8bnVsbCwgbG9jYWxSZWZzSW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgybXJtWVsZW1lbnRDb250YWluZXJTdGFydChpbmRleCwgYXR0cnNJbmRleCwgbG9jYWxSZWZzSW5kZXgpO1xuICDJtcm1ZWxlbWVudENvbnRhaW5lckVuZCgpO1xufVxuIl19