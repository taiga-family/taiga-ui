/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/instructions/template.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertFirstCreatePass } from '../assert';
import { attachPatchData } from '../context_discovery';
import { registerPostOrderHooks } from '../hooks';
import { isDirectiveHost } from '../interfaces/type_checks';
import { HEADER_OFFSET, RENDERER, T_HOST } from '../interfaces/view';
import { appendChild } from '../node_manipulation';
import { getLView, getTView, setPreviousOrParentTNode } from '../state';
import { getConstant } from '../util/view_utils';
import { addToViewTree, createDirectivesInstances, createLContainer, createTNode, createTView, getOrCreateTNode, resolveDirectives, saveResolvedLocalsInData } from './shared';
/**
 * @param {?} index
 * @param {?} tView
 * @param {?} lView
 * @param {?} templateFn
 * @param {?} decls
 * @param {?} vars
 * @param {?=} tagName
 * @param {?=} attrsIndex
 * @param {?=} localRefsIndex
 * @return {?}
 */
function templateFirstCreatePass(index, tView, lView, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex) {
    ngDevMode && assertFirstCreatePass(tView);
    ngDevMode && ngDevMode.firstCreatePass++;
    /** @type {?} */
    const tViewConsts = tView.consts;
    // TODO(pk): refactor getOrCreateTNode to have the "create" only version
    /** @type {?} */
    const tNode = getOrCreateTNode(tView, lView[T_HOST], index, 0 /* Container */, tagName || null, getConstant(tViewConsts, attrsIndex));
    resolveDirectives(tView, lView, tNode, getConstant(tViewConsts, localRefsIndex));
    registerPostOrderHooks(tView, tNode);
    /** @type {?} */
    const embeddedTView = tNode.tViews = createTView(2 /* Embedded */, -1, templateFn, decls, vars, tView.directiveRegistry, tView.pipeRegistry, null, tView.schemas, tViewConsts);
    /** @type {?} */
    const embeddedTViewNode = (/** @type {?} */ (createTNode(tView, null, 2 /* View */, -1, null, null)));
    embeddedTViewNode.injectorIndex = tNode.injectorIndex;
    embeddedTView.node = embeddedTViewNode;
    if (tView.queries !== null) {
        tView.queries.template(tView, tNode);
        embeddedTView.queries = tView.queries.embeddedTView(tNode);
    }
    return tNode;
}
/**
 * Creates an LContainer for an ng-template (dynamically-inserted view), e.g.
 *
 * <ng-template #foo>
 *    <div></div>
 * </ng-template>
 *
 * \@codeGenApi
 * @param {?} index The index of the container in the data array
 * @param {?} templateFn Inline template
 * @param {?} decls The number of nodes, local refs, and pipes for this template
 * @param {?} vars The number of bindings for this template
 * @param {?=} tagName The name of the container element, if applicable
 * @param {?=} attrsIndex Index of template attributes in the `consts` array.
 * @param {?=} localRefsIndex
 * @param {?=} localRefExtractor A function which extracts local-refs values from the template.
 *        Defaults to the current element associated with the local-ref.
 *
 * @return {?}
 */
export function ɵɵtemplate(index, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex, localRefExtractor) {
    /** @type {?} */
    const lView = getLView();
    /** @type {?} */
    const tView = getTView();
    /** @type {?} */
    const adjustedIndex = index + HEADER_OFFSET;
    /** @type {?} */
    const tNode = tView.firstCreatePass ?
        templateFirstCreatePass(index, tView, lView, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex) :
        (/** @type {?} */ (tView.data[adjustedIndex]));
    setPreviousOrParentTNode(tNode, false);
    /** @type {?} */
    const comment = lView[RENDERER].createComment(ngDevMode ? 'container' : '');
    appendChild(tView, lView, comment, tNode);
    attachPatchData(comment, lView);
    addToViewTree(lView, lView[adjustedIndex] = createLContainer(comment, lView, comment, tNode));
    if (isDirectiveHost(tNode)) {
        createDirectivesInstances(tView, lView, tNode);
    }
    if (localRefsIndex != null) {
        saveResolvedLocalsInData(lView, tNode, localRefExtractor);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2luc3RydWN0aW9ucy90ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUdoRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGFBQWEsRUFBUyxRQUFRLEVBQUUsTUFBTSxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBQzVGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFDLGFBQWEsRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBRzdLLFNBQVMsdUJBQXVCLENBQzVCLEtBQWEsRUFBRSxLQUFZLEVBQUUsS0FBWSxFQUFFLFVBQXVDLEVBQ2xGLEtBQWEsRUFBRSxJQUFZLEVBQUUsT0FBcUIsRUFBRSxVQUF3QixFQUM1RSxjQUE0QjtJQUM5QixTQUFTLElBQUkscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7VUFDbkMsV0FB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QUFFLGlCQUFpQixDQUFDLENBQUM7S0FDM0Q7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHthc3NlcnRGaXJzdENyZWF0ZVBhc3N9IGZyb20gJy4uL2Fzc2VydCc7XG5pbXBvcnQge2F0dGFjaFBhdGNoRGF0YX0gZnJvbSAnLi4vY29udGV4dF9kaXNjb3ZlcnknO1xuaW1wb3J0IHtyZWdpc3RlclBvc3RPcmRlckhvb2tzfSBmcm9tICcuLi9ob29rcyc7XG5pbXBvcnQge0NvbXBvbmVudFRlbXBsYXRlfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RlZmluaXRpb24nO1xuaW1wb3J0IHtMb2NhbFJlZkV4dHJhY3RvciwgVEF0dHJpYnV0ZXMsIFRDb250YWluZXJOb2RlLCBUTm9kZVR5cGUsIFRWaWV3Tm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7aXNEaXJlY3RpdmVIb3N0fSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGVfY2hlY2tzJztcbmltcG9ydCB7SEVBREVSX09GRlNFVCwgTFZpZXcsIFJFTkRFUkVSLCBUX0hPU1QsIFRWaWV3LCBUVmlld1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2FwcGVuZENoaWxkfSBmcm9tICcuLi9ub2RlX21hbmlwdWxhdGlvbic7XG5pbXBvcnQge2dldExWaWV3LCBnZXRUVmlldywgc2V0UHJldmlvdXNPclBhcmVudFROb2RlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge2dldENvbnN0YW50fSBmcm9tICcuLi91dGlsL3ZpZXdfdXRpbHMnO1xuXG5pbXBvcnQge2FkZFRvVmlld1RyZWUsIGNyZWF0ZURpcmVjdGl2ZXNJbnN0YW5jZXMsIGNyZWF0ZUxDb250YWluZXIsIGNyZWF0ZVROb2RlLCBjcmVhdGVUVmlldywgZ2V0T3JDcmVhdGVUTm9kZSwgcmVzb2x2ZURpcmVjdGl2ZXMsIHNhdmVSZXNvbHZlZExvY2Fsc0luRGF0YX0gZnJvbSAnLi9zaGFyZWQnO1xuXG5cbmZ1bmN0aW9uIHRlbXBsYXRlRmlyc3RDcmVhdGVQYXNzKFxuICAgIGluZGV4OiBudW1iZXIsIHRWaWV3OiBUVmlldywgbFZpZXc6IExWaWV3LCB0ZW1wbGF0ZUZuOiBDb21wb25lbnRUZW1wbGF0ZTxhbnk+fG51bGwsXG4gICAgZGVjbHM6IG51bWJlciwgdmFyczogbnVtYmVyLCB0YWdOYW1lPzogc3RyaW5nfG51bGwsIGF0dHJzSW5kZXg/OiBudW1iZXJ8bnVsbCxcbiAgICBsb2NhbFJlZnNJbmRleD86IG51bWJlcnxudWxsKTogVENvbnRhaW5lck5vZGUge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0Rmlyc3RDcmVhdGVQYXNzKHRWaWV3KTtcbiAgbmdEZXZNb2RlICYmIG5nRGV2TW9kZS5maXJzdENyZWF0ZVBhc3MrKztcbiAgY29uc3QgdFZpZXdDb25zdHMgPSB0Vmlldy5jb25zdHM7XG4gIC8vIFRPRE8ocGspOiByZWZhY3RvciBnZXRPckNyZWF0ZVROb2RlIHRvIGhhdmUgdGhlIFwiY3JlYXRlXCIgb25seSB2ZXJzaW9uXG4gIGNvbnN0IHROb2RlID0gZ2V0T3JDcmVhdGVUTm9kZShcbiAgICAgIHRWaWV3LCBsVmlld1tUX0hPU1RdLCBpbmRleCwgVE5vZGVUeXBlLkNvbnRhaW5lciwgdGFnTmFtZSB8fCBudWxsLFxuICAgICAgZ2V0Q29uc3RhbnQ8VEF0dHJpYnV0ZXM+KHRWaWV3Q29uc3RzLCBhdHRyc0luZGV4KSk7XG5cbiAgcmVzb2x2ZURpcmVjdGl2ZXModFZpZXcsIGxWaWV3LCB0Tm9kZSwgZ2V0Q29uc3RhbnQ8c3RyaW5nW10+KHRWaWV3Q29uc3RzLCBsb2NhbFJlZnNJbmRleCkpO1xuICByZWdpc3RlclBvc3RPcmRlckhvb2tzKHRWaWV3LCB0Tm9kZSk7XG5cbiAgY29uc3QgZW1iZWRkZWRUVmlldyA9IHROb2RlLnRWaWV3cyA9IGNyZWF0ZVRWaWV3KFxuICAgICAgVFZpZXdUeXBlLkVtYmVkZGVkLCAtMSwgdGVtcGxhdGVGbiwgZGVjbHMsIHZhcnMsIHRWaWV3LmRpcmVjdGl2ZVJlZ2lzdHJ5LCB0Vmlldy5waXBlUmVnaXN0cnksXG4gICAgICBudWxsLCB0Vmlldy5zY2hlbWFzLCB0Vmlld0NvbnN0cyk7XG4gIGNvbnN0IGVtYmVkZGVkVFZpZXdOb2RlID0gY3JlYXRlVE5vZGUodFZpZXcsIG51bGwsIFROb2RlVHlwZS5WaWV3LCAtMSwgbnVsbCwgbnVsbCkgYXMgVFZpZXdOb2RlO1xuICBlbWJlZGRlZFRWaWV3Tm9kZS5pbmplY3RvckluZGV4ID0gdE5vZGUuaW5qZWN0b3JJbmRleDtcbiAgZW1iZWRkZWRUVmlldy5ub2RlID0gZW1iZWRkZWRUVmlld05vZGU7XG5cbiAgaWYgKHRWaWV3LnF1ZXJpZXMgIT09IG51bGwpIHtcbiAgICB0Vmlldy5xdWVyaWVzLnRlbXBsYXRlKHRWaWV3LCB0Tm9kZSk7XG4gICAgZW1iZWRkZWRUVmlldy5xdWVyaWVzID0gdFZpZXcucXVlcmllcy5lbWJlZGRlZFRWaWV3KHROb2RlKTtcbiAgfVxuXG4gIHJldHVybiB0Tm9kZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIExDb250YWluZXIgZm9yIGFuIG5nLXRlbXBsYXRlIChkeW5hbWljYWxseS1pbnNlcnRlZCB2aWV3KSwgZS5nLlxuICpcbiAqIDxuZy10ZW1wbGF0ZSAjZm9vPlxuICogICAgPGRpdj48L2Rpdj5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKlxuICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgY29udGFpbmVyIGluIHRoZSBkYXRhIGFycmF5XG4gKiBAcGFyYW0gdGVtcGxhdGVGbiBJbmxpbmUgdGVtcGxhdGVcbiAqIEBwYXJhbSBkZWNscyBUaGUgbnVtYmVyIG9mIG5vZGVzLCBsb2NhbCByZWZzLCBhbmQgcGlwZXMgZm9yIHRoaXMgdGVtcGxhdGVcbiAqIEBwYXJhbSB2YXJzIFRoZSBudW1iZXIgb2YgYmluZGluZ3MgZm9yIHRoaXMgdGVtcGxhdGVcbiAqIEBwYXJhbSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSBjb250YWluZXIgZWxlbWVudCwgaWYgYXBwbGljYWJsZVxuICogQHBhcmFtIGF0dHJzSW5kZXggSW5kZXggb2YgdGVtcGxhdGUgYXR0cmlidXRlcyBpbiB0aGUgYGNvbnN0c2AgYXJyYXkuXG4gKiBAcGFyYW0gbG9jYWxSZWZzIEluZGV4IG9mIHRoZSBsb2NhbCByZWZlcmVuY2VzIGluIHRoZSBgY29uc3RzYCBhcnJheS5cbiAqIEBwYXJhbSBsb2NhbFJlZkV4dHJhY3RvciBBIGZ1bmN0aW9uIHdoaWNoIGV4dHJhY3RzIGxvY2FsLXJlZnMgdmFsdWVzIGZyb20gdGhlIHRlbXBsYXRlLlxuICogICAgICAgIERlZmF1bHRzIHRvIHRoZSBjdXJyZW50IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBsb2NhbC1yZWYuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybV0ZW1wbGF0ZShcbiAgICBpbmRleDogbnVtYmVyLCB0ZW1wbGF0ZUZuOiBDb21wb25lbnRUZW1wbGF0ZTxhbnk+fG51bGwsIGRlY2xzOiBudW1iZXIsIHZhcnM6IG51bWJlcixcbiAgICB0YWdOYW1lPzogc3RyaW5nfG51bGwsIGF0dHJzSW5kZXg/OiBudW1iZXJ8bnVsbCwgbG9jYWxSZWZzSW5kZXg/OiBudW1iZXJ8bnVsbCxcbiAgICBsb2NhbFJlZkV4dHJhY3Rvcj86IExvY2FsUmVmRXh0cmFjdG9yKSB7XG4gIGNvbnN0IGxWaWV3ID0gZ2V0TFZpZXcoKTtcbiAgY29uc3QgdFZpZXcgPSBnZXRUVmlldygpO1xuICBjb25zdCBhZGp1c3RlZEluZGV4ID0gaW5kZXggKyBIRUFERVJfT0ZGU0VUO1xuXG4gIGNvbnN0IHROb2RlID0gdFZpZXcuZmlyc3RDcmVhdGVQYXNzID9cbiAgICAgIHRlbXBsYXRlRmlyc3RDcmVhdGVQYXNzKFxuICAgICAgICAgIGluZGV4LCB0VmlldywgbFZpZXcsIHRlbXBsYXRlRm4sIGRlY2xzLCB2YXJzLCB0YWdOYW1lLCBhdHRyc0luZGV4LCBsb2NhbFJlZnNJbmRleCkgOlxuICAgICAgdFZpZXcuZGF0YVthZGp1c3RlZEluZGV4XSBhcyBUQ29udGFpbmVyTm9kZTtcbiAgc2V0UHJldmlvdXNPclBhcmVudFROb2RlKHROb2RlLCBmYWxzZSk7XG5cbiAgY29uc3QgY29tbWVudCA9IGxWaWV3W1JFTkRFUkVSXS5jcmVhdGVDb21tZW50KG5nRGV2TW9kZSA/ICdjb250YWluZXInIDogJycpO1xuICBhcHBlbmRDaGlsZCh0VmlldywgbFZpZXcsIGNvbW1lbnQsIHROb2RlKTtcbiAgYXR0YWNoUGF0Y2hEYXRhKGNvbW1lbnQsIGxWaWV3KTtcblxuICBhZGRUb1ZpZXdUcmVlKGxWaWV3LCBsVmlld1thZGp1c3RlZEluZGV4XSA9IGNyZWF0ZUxDb250YWluZXIoY29tbWVudCwgbFZpZXcsIGNvbW1lbnQsIHROb2RlKSk7XG5cbiAgaWYgKGlzRGlyZWN0aXZlSG9zdCh0Tm9kZSkpIHtcbiAgICBjcmVhdGVEaXJlY3RpdmVzSW5zdGFuY2VzKHRWaWV3LCBsVmlldywgdE5vZGUpO1xuICB9XG5cbiAgaWYgKGxvY2FsUmVmc0luZGV4ICE9IG51bGwpIHtcbiAgICBzYXZlUmVzb2x2ZWRMb2NhbHNJbkRhdGEobFZpZXcsIHROb2RlLCBsb2NhbFJlZkV4dHJhY3Rvcik7XG4gIH1cbn0iXX0=