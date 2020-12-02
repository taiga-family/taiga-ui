/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/view_attach.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { addToArray, removeFromArray } from '../util/array_utils';
import { Services } from './types';
import { declaredViewContainer, renderNode, visitRootRenderNodes } from './util';
/**
 * @param {?} parentView
 * @param {?} elementData
 * @param {?} viewIndex
 * @param {?} view
 * @return {?}
 */
export function attachEmbeddedView(parentView, elementData, viewIndex, view) {
    /** @type {?} */
    let embeddedViews = (/** @type {?} */ (elementData.viewContainer))._embeddedViews;
    if (viewIndex === null || viewIndex === undefined) {
        viewIndex = embeddedViews.length;
    }
    view.viewContainerParent = parentView;
    addToArray(embeddedViews, (/** @type {?} */ (viewIndex)), view);
    attachProjectedView(elementData, view);
    Services.dirtyParentQueries(view);
    /** @type {?} */
    const prevView = (/** @type {?} */ (viewIndex)) > 0 ? embeddedViews[(/** @type {?} */ (viewIndex)) - 1] : null;
    renderAttachEmbeddedView(elementData, prevView, view);
}
/**
 * @param {?} vcElementData
 * @param {?} view
 * @return {?}
 */
function attachProjectedView(vcElementData, view) {
    /** @type {?} */
    const dvcElementData = declaredViewContainer(view);
    if (!dvcElementData || dvcElementData === vcElementData ||
        view.state & 16 /* IsProjectedView */) {
        return;
    }
    // Note: For performance reasons, we
    // - add a view to template._projectedViews only 1x throughout its lifetime,
    //   and remove it not until the view is destroyed.
    //   (hard, as when a parent view is attached/detached we would need to attach/detach all
    //    nested projected views as well, even across component boundaries).
    // - don't track the insertion order of views in the projected views array
    //   (hard, as when the views of the same template are inserted different view containers)
    view.state |= 16 /* IsProjectedView */;
    /** @type {?} */
    let projectedViews = dvcElementData.template._projectedViews;
    if (!projectedViews) {
        projectedViews = dvcElementData.template._projectedViews = [];
    }
    projectedViews.push(view);
    // Note: we are changing the NodeDef here as we cannot calculate
    // the fact whether a template is used for projection during compilation.
    markNodeAsProjectedTemplate((/** @type {?} */ (view.parent)).def, (/** @type {?} */ (view.parentNodeDef)));
}
/**
 * @param {?} viewDef
 * @param {?} nodeDef
 * @return {?}
 */
function markNodeAsProjectedTemplate(viewDef, nodeDef) {
    if (nodeDef.flags & 4 /* ProjectedTemplate */) {
        return;
    }
    viewDef.nodeFlags |= 4 /* ProjectedTemplate */;
    nodeDef.flags |= 4 /* ProjectedTemplate */;
    /** @type {?} */
    let parentNodeDef = nodeDef.parent;
    while (parentNodeDef) {
        parentNodeDef.childFlags |= 4 /* ProjectedTemplate */;
        parentNodeDef = parentNodeDef.parent;
    }
}
/**
 * @param {?} elementData
 * @param {?=} viewIndex
 * @return {?}
 */
export function detachEmbeddedView(elementData, viewIndex) {
    /** @type {?} */
    const embeddedViews = (/** @type {?} */ (elementData.viewContainer))._embeddedViews;
    if (viewIndex == null || viewIndex >= embeddedViews.length) {
        viewIndex = embeddedViews.length - 1;
    }
    if (viewIndex < 0) {
        return null;
    }
    /** @type {?} */
    const view = embeddedViews[viewIndex];
    view.viewContainerParent = null;
    removeFromArray(embeddedViews, viewIndex);
    // See attachProjectedView for why we don't update projectedViews here.
    Services.dirtyParentQueries(view);
    renderDetachView(view);
    return view;
}
/**
 * @param {?} view
 * @return {?}
 */
export function detachProjectedView(view) {
    if (!(view.state & 16 /* IsProjectedView */)) {
        return;
    }
    /** @type {?} */
    const dvcElementData = declaredViewContainer(view);
    if (dvcElementData) {
        /** @type {?} */
        const projectedViews = dvcElementData.template._projectedViews;
        if (projectedViews) {
            removeFromArray(projectedViews, projectedViews.indexOf(view));
            Services.dirtyParentQueries(view);
        }
    }
}
/**
 * @param {?} elementData
 * @param {?} oldViewIndex
 * @param {?} newViewIndex
 * @return {?}
 */
export function moveEmbeddedView(elementData, oldViewIndex, newViewIndex) {
    /** @type {?} */
    const embeddedViews = (/** @type {?} */ (elementData.viewContainer))._embeddedViews;
    /** @type {?} */
    const view = embeddedViews[oldViewIndex];
    removeFromArray(embeddedViews, oldViewIndex);
    if (newViewIndex == null) {
        newViewIndex = embeddedViews.length;
    }
    addToArray(embeddedViews, newViewIndex, view);
    // Note: Don't need to change projectedViews as the order in there
    // as always invalid...
    Services.dirtyParentQueries(view);
    renderDetachView(view);
    /** @type {?} */
    const prevView = newViewIndex > 0 ? embeddedViews[newViewIndex - 1] : null;
    renderAttachEmbeddedView(elementData, prevView, view);
    return view;
}
/**
 * @param {?} elementData
 * @param {?} prevView
 * @param {?} view
 * @return {?}
 */
function renderAttachEmbeddedView(elementData, prevView, view) {
    /** @type {?} */
    const prevRenderNode = prevView ? renderNode(prevView, (/** @type {?} */ (prevView.def.lastRenderRootNode))) : elementData.renderElement;
    /** @type {?} */
    const parentNode = view.renderer.parentNode(prevRenderNode);
    /** @type {?} */
    const nextSibling = view.renderer.nextSibling(prevRenderNode);
    // Note: We can't check if `nextSibling` is present, as on WebWorkers it will always be!
    // However, browsers automatically do `appendChild` when there is no `nextSibling`.
    visitRootRenderNodes(view, 2 /* InsertBefore */, parentNode, nextSibling, undefined);
}
/**
 * @param {?} view
 * @return {?}
 */
export function renderDetachView(view) {
    visitRootRenderNodes(view, 3 /* RemoveChild */, null, null, undefined);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19hdHRhY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy92aWV3L3ZpZXdfYXR0YWNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFaEUsT0FBTyxFQUFrQyxRQUFRLEVBQXNDLE1BQU0sU0FBUyxDQUFDO0FBQ3ZHLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxVQUFVLEVBQW9CLG9CQUFvQixFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7OztBQUVqRyxNQUFNLFVBQVUsa0JBQWtCLENBQzlCLFVBQW9CLEVBQUUsV0FBd0IsRUFBRSxTQUFnQyxFQUNoRixJQUFjOztRQUNaLGFBQWEsR0FBRyxtQkFBQSxXQUFXLENBQUMsYUFBYSxFQUFDLENBQUMsY0FBYztJQUM3RCxJQUFJLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUNqRCxTQUFTLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztLQUNsQztJQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUM7SUFDdEMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBQSxTQUFTLEVBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdkMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDOztVQUU1QixRQUFRLEdBQUcsbUJBQUEsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsbUJBQUEsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7SUFDdEUsd0JBQXdCLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztB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RixvQkFBb0IsQ0FBQyxJQUFJLHdCQUFpQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hHLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQWM7SUFDN0Msb0JBQW9CLENBQUMsSUFBSSx1QkFBZ0MsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNsRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2FkZFRvQXJyYXksIHJlbW92ZUZyb21BcnJheX0gZnJvbSAnLi4vdXRpbC9hcnJheV91dGlscyc7XG5cbmltcG9ydCB7RWxlbWVudERhdGEsIE5vZGVEZWYsIE5vZGVGbGFncywgU2VydmljZXMsIFZpZXdEYXRhLCBWaWV3RGVmaW5pdGlvbiwgVmlld1N0YXRlfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7ZGVjbGFyZWRWaWV3Q29udGFpbmVyLCByZW5kZXJOb2RlLCBSZW5kZXJOb2RlQWN0aW9uLCB2aXNpdFJvb3RSZW5kZXJOb2Rlc30gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaEVtYmVkZGVkVmlldyhcbiAgICBwYXJlbnRWaWV3OiBWaWV3RGF0YSwgZWxlbWVudERhdGE6IEVsZW1lbnREYXRhLCB2aWV3SW5kZXg6IG51bWJlcnx1bmRlZmluZWR8bnVsbCxcbiAgICB2aWV3OiBWaWV3RGF0YSkge1xuICBsZXQgZW1iZWRkZWRWaWV3cyA9IGVsZW1lbnREYXRhLnZpZXdDb250YWluZXIhLl9lbWJlZGRlZFZpZXdzO1xuICBpZiAodmlld0luZGV4ID09PSBudWxsIHx8IHZpZXdJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmlld0luZGV4ID0gZW1iZWRkZWRWaWV3cy5sZW5ndGg7XG4gIH1cbiAgdmlldy52aWV3Q29udGFpbmVyUGFyZW50ID0gcGFyZW50VmlldztcbiAgYWRkVG9BcnJheShlbWJlZGRlZFZpZXdzLCB2aWV3SW5kZXghLCB2aWV3KTtcbiAgYXR0YWNoUHJvamVjdGVkVmlldyhlbGVtZW50RGF0YSwgdmlldyk7XG5cbiAgU2VydmljZXMuZGlydHlQYXJlbnRRdWVyaWVzKHZpZXcpO1xuXG4gIGNvbnN0IHByZXZWaWV3ID0gdmlld0luZGV4ISA+IDAgPyBlbWJlZGRlZFZpZXdzW3ZpZXdJbmRleCEgLSAxXSA6IG51bGw7XG4gIHJlbmRlckF0dGFjaEVtYmVkZGVkVmlldyhlbGVtZW50RGF0YSwgcHJldlZpZXcsIHZpZXcpO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hQcm9qZWN0ZWRWaWV3KHZjRWxlbWVudERhdGE6IEVsZW1lbnREYXRhLCB2aWV3OiBWaWV3RGF0YSkge1xuICBjb25zdCBkdmNFbGVtZW50RGF0YSA9IGRlY2xhcmVkVmlld0NvbnRhaW5lcih2aWV3KTtcbiAgaWYgKCFkdmNFbGVtZW50RGF0YSB8fCBkdmNFbGVtZW50RGF0YSA9PT0gdmNFbGVtZW50RGF0YSB8fFxuICAgICAgdmlldy5zdGF0ZSAmIFZpZXdTdGF0ZS5Jc1Byb2plY3RlZFZpZXcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gTm90ZTogRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlXG4gIC8vIC0gYWRkIGEgdmlldyB0byB0ZW1wbGF0ZS5fcHJvamVjdGVkVmlld3Mgb25seSAxeCB0aHJvdWdob3V0IGl0cyBsaWZldGltZSxcbiAgLy8gICBhbmQgcmVtb3ZlIGl0IG5vdCB1bnRpbCB0aGUgdmlldyBpcyBkZXN0cm95ZWQuXG4gIC8vICAgKGhhcmQsIGFzIHdoZW4gYSBwYXJlbnQgdmlldyBpcyBhdHRhY2hlZC9kZXRhY2hlZCB3ZSB3b3VsZCBuZWVkIHRvIGF0dGFjaC9kZXRhY2ggYWxsXG4gIC8vICAgIG5lc3RlZCBwcm9qZWN0ZWQgdmlld3MgYXMgd2VsbCwgZXZlbiBhY3Jvc3MgY29tcG9uZW50IGJvdW5kYXJpZXMpLlxuICAvLyAtIGRvbid0IHRyYWNrIHRoZSBpbnNlcnRpb24gb3JkZXIgb2Ygdmlld3MgaW4gdGhlIHByb2plY3RlZCB2aWV3cyBhcnJheVxuICAvLyAgIChoYXJkLCBhcyB3aGVuIHRoZSB2aWV3cyBvZiB0aGUgc2FtZSB0ZW1wbGF0ZSBhcmUgaW5zZXJ0ZWQgZGlmZmVyZW50IHZpZXcgY29udGFpbmVycylcbiAgdmlldy5zdGF0ZSB8PSBWaWV3U3RhdGUuSXNQcm9qZWN0ZWRWaWV3O1xuICBsZXQgcHJvamVjdGVkVmlld3MgPSBkdmNFbGVtZW50RGF0YS50ZW1wbGF0ZS5fcHJvamVjdGVkVmlld3M7XG4gIGlmICghcHJvamVjdGVkVmlld3MpIHtcbiAgICBwcm9qZWN0ZWRWaWV3cyA9IGR2Y0VsZW1lbnREYXRhLnRlbXBsYXRlLl9wcm9qZWN0ZWRWaWV3cyA9IFtdO1xuICB9XG4gIHByb2plY3RlZFZpZXdzLnB1c2godmlldyk7XG4gIC8vIE5vdGU6IHdlIGFyZSBjaGFuZ2luZyB0aGUgTm9kZURlZiBoZXJlIGFzIHdlIGNhbm5vdCBjYWxjdWxhdGVcbiAgLy8gdGhlIGZhY3Qgd2hldGhlciBhIHRlbXBsYXRlIGlzIHVzZWQgZm9yIHByb2plY3Rpb24gZHVyaW5nIGNvbXBpbGF0aW9uLlxuICBtYXJrTm9kZUFzUHJvamVjdGVkVGVtcGxhdGUodmlldy5wYXJlbnQhLmRlZiwgdmlldy5wYXJlbnROb2RlRGVmISk7XG59XG5cbmZ1bmN0aW9uIG1hcmtOb2RlQXNQcm9qZWN0ZWRUZW1wbGF0ZSh2aWV3RGVmOiBWaWV3RGVmaW5pdGlvbiwgbm9kZURlZjogTm9kZURlZikge1xuICBpZiAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5Qcm9qZWN0ZWRUZW1wbGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2aWV3RGVmLm5vZGVGbGFncyB8PSBOb2RlRmxhZ3MuUHJvamVjdGVkVGVtcGxhdGU7XG4gIG5vZGVEZWYuZmxhZ3MgfD0gTm9kZUZsYWdzLlByb2plY3RlZFRlbXBsYXRlO1xuICBsZXQgcGFyZW50Tm9kZURlZiA9IG5vZGVEZWYucGFyZW50O1xuICB3aGlsZSAocGFyZW50Tm9kZURlZikge1xuICAgIHBhcmVudE5vZGVEZWYuY2hpbGRGbGFncyB8PSBOb2RlRmxhZ3MuUHJvamVjdGVkVGVtcGxhdGU7XG4gICAgcGFyZW50Tm9kZURlZiA9IHBhcmVudE5vZGVEZWYucGFyZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRhY2hFbWJlZGRlZFZpZXcoZWxlbWVudERhdGE6IEVsZW1lbnREYXRhLCB2aWV3SW5kZXg/OiBudW1iZXIpOiBWaWV3RGF0YXxudWxsIHtcbiAgY29uc3QgZW1iZWRkZWRWaWV3cyA9IGVsZW1lbnREYXRhLnZpZXdDb250YWluZXIhLl9lbWJlZGRlZFZpZXdzO1xuICBpZiAodmlld0luZGV4ID09IG51bGwgfHwgdmlld0luZGV4ID49IGVtYmVkZGVkVmlld3MubGVuZ3RoKSB7XG4gICAgdmlld0luZGV4ID0gZW1iZWRkZWRWaWV3cy5sZW5ndGggLSAxO1xuICB9XG4gIGlmICh2aWV3SW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdmlldyA9IGVtYmVkZGVkVmlld3Nbdmlld0luZGV4XTtcbiAgdmlldy52aWV3Q29udGFpbmVyUGFyZW50ID0gbnVsbDtcbiAgcmVtb3ZlRnJvbUFycmF5KGVtYmVkZGVkVmlld3MsIHZpZXdJbmRleCk7XG5cbiAgLy8gU2VlIGF0dGFjaFByb2plY3RlZFZpZXcgZm9yIHdoeSB3ZSBkb24ndCB1cGRhdGUgcHJvamVjdGVkVmlld3MgaGVyZS5cbiAgU2VydmljZXMuZGlydHlQYXJlbnRRdWVyaWVzKHZpZXcpO1xuXG4gIHJlbmRlckRldGFjaFZpZXcodmlldyk7XG5cbiAgcmV0dXJuIHZpZXc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRhY2hQcm9qZWN0ZWRWaWV3KHZpZXc6IFZpZXdEYXRhKSB7XG4gIGlmICghKHZpZXcuc3RhdGUgJiBWaWV3U3RhdGUuSXNQcm9qZWN0ZWRWaWV3KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkdmNFbGVtZW50RGF0YSA9IGRlY2xhcmVkVmlld0NvbnRhaW5lcih2aWV3KTtcbiAgaWYgKGR2Y0VsZW1lbnREYXRhKSB7XG4gICAgY29uc3QgcHJvamVjdGVkVmlld3MgPSBkdmNFbGVtZW50RGF0YS50ZW1wbGF0ZS5fcHJvamVjdGVkVmlld3M7XG4gICAgaWYgKHByb2plY3RlZFZpZXdzKSB7XG4gICAgICByZW1vdmVGcm9tQXJyYXkocHJvamVjdGVkVmlld3MsIHByb2plY3RlZFZpZXdzLmluZGV4T2YodmlldykpO1xuICAgICAgU2VydmljZXMuZGlydHlQYXJlbnRRdWVyaWVzKHZpZXcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZUVtYmVkZGVkVmlldyhcbiAgICBlbGVtZW50RGF0YTogRWxlbWVudERhdGEsIG9sZFZpZXdJbmRleDogbnVtYmVyLCBuZXdWaWV3SW5kZXg6IG51bWJlcik6IFZpZXdEYXRhIHtcbiAgY29uc3QgZW1iZWRkZWRWaWV3cyA9IGVsZW1lbnREYXRhLnZpZXdDb250YWluZXIhLl9lbWJlZGRlZFZpZXdzO1xuICBjb25zdCB2aWV3ID0gZW1iZWRkZWRWaWV3c1tvbGRWaWV3SW5kZXhdO1xuICByZW1vdmVGcm9tQXJyYXkoZW1iZWRkZWRWaWV3cywgb2xkVmlld0luZGV4KTtcbiAgaWYgKG5ld1ZpZXdJbmRleCA9PSBudWxsKSB7XG4gICAgbmV3Vmlld0luZGV4ID0gZW1iZWRkZWRWaWV3cy5sZW5ndGg7XG4gIH1cbiAgYWRkVG9BcnJheShlbWJlZGRlZFZpZXdzLCBuZXdWaWV3SW5kZXgsIHZpZXcpO1xuXG4gIC8vIE5vdGU6IERvbid0IG5lZWQgdG8gY2hhbmdlIHByb2plY3RlZFZpZXdzIGFzIHRoZSBvcmRlciBpbiB0aGVyZVxuICAvLyBhcyBhbHdheXMgaW52YWxpZC4uLlxuXG4gIFNlcnZpY2VzLmRpcnR5UGFyZW50UXVlcmllcyh2aWV3KTtcblxuICByZW5kZXJEZXRhY2hWaWV3KHZpZXcpO1xuICBjb25zdCBwcmV2VmlldyA9IG5ld1ZpZXdJbmRleCA+IDAgPyBlbWJlZGRlZFZpZXdzW25ld1ZpZXdJbmRleCAtIDFdIDogbnVsbDtcbiAgcmVuZGVyQXR0YWNoRW1iZWRkZWRWaWV3KGVsZW1lbnREYXRhLCBwcmV2Vmlldywgdmlldyk7XG5cbiAgcmV0dXJuIHZpZXc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckF0dGFjaEVtYmVkZGVkVmlldyhcbiAgICBlbGVtZW50RGF0YTogRWxlbWVudERhdGEsIHByZXZWaWV3OiBWaWV3RGF0YXxudWxsLCB2aWV3OiBWaWV3RGF0YSkge1xuICBjb25zdCBwcmV2UmVuZGVyTm9kZSA9XG4gICAgICBwcmV2VmlldyA/IHJlbmRlck5vZGUocHJldlZpZXcsIHByZXZWaWV3LmRlZi5sYXN0UmVuZGVyUm9vdE5vZGUhKSA6IGVsZW1lbnREYXRhLnJlbmRlckVsZW1lbnQ7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSB2aWV3LnJlbmRlcmVyLnBhcmVudE5vZGUocHJldlJlbmRlck5vZGUpO1xuICBjb25zdCBuZXh0U2libGluZyA9IHZpZXcucmVuZGVyZXIubmV4dFNpYmxpbmcocHJldlJlbmRlck5vZGUpO1xuICAvLyBOb3RlOiBXZSBjYW4ndCBjaGVjayBpZiBgbmV4dFNpYmxpbmdgIGlzIHByZXNlbnQsIGFzIG9uIFdlYldvcmtlcnMgaXQgd2lsbCBhbHdheXMgYmUhXG4gIC8vIEhvd2V2ZXIsIGJyb3dzZXJzIGF1dG9tYXRpY2FsbHkgZG8gYGFwcGVuZENoaWxkYCB3aGVuIHRoZXJlIGlzIG5vIGBuZXh0U2libGluZ2AuXG4gIHZpc2l0Um9vdFJlbmRlck5vZGVzKHZpZXcsIFJlbmRlck5vZGVBY3Rpb24uSW5zZXJ0QmVmb3JlLCBwYXJlbnROb2RlLCBuZXh0U2libGluZywgdW5kZWZpbmVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRldGFjaFZpZXcodmlldzogVmlld0RhdGEpIHtcbiAgdmlzaXRSb290UmVuZGVyTm9kZXModmlldywgUmVuZGVyTm9kZUFjdGlvbi5SZW1vdmVDaGlsZCwgbnVsbCwgbnVsbCwgdW5kZWZpbmVkKTtcbn1cbiJdfQ==