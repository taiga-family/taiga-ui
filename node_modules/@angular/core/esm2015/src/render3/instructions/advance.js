/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/instructions/advance.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertDataInRange, assertGreaterThan } from '../../util/assert';
import { executeCheckHooks, executeInitAndCheckHooks } from '../hooks';
import { FLAGS, HEADER_OFFSET } from '../interfaces/view';
import { getCheckNoChangesMode, getLView, getSelectedIndex, getTView, setSelectedIndex } from '../state';
/**
 * Advances to an element for later binding instructions.
 *
 * Used in conjunction with instructions like {\@link property} to act on elements with specified
 * indices, for example those created with {\@link element} or {\@link elementStart}.
 *
 * ```ts
 * (rf: RenderFlags, ctx: any) => {
 *   if (rf & 1) {
 *     text(0, 'Hello');
 *     text(1, 'Goodbye')
 *     element(2, 'div');
 *   }
 *   if (rf & 2) {
 *     advance(2); // Advance twice to the <div>.
 *     property('title', 'test');
 *   }
 *  }
 * ```
 * \@codeGenApi
 * @param {?} delta Number of elements to advance forwards by.
 *
 * @return {?}
 */
export function ɵɵadvance(delta) {
    ngDevMode && assertGreaterThan(delta, 0, 'Can only advance forward');
    selectIndexInternal(getTView(), getLView(), getSelectedIndex() + delta, getCheckNoChangesMode());
}
/**
 * Selects an element for later binding instructions.
 * @deprecated No longer being generated, but still used in unit tests.
 * \@codeGenApi
 * @param {?} index
 * @return {?}
 */
export function ɵɵselect(index) {
    // TODO(misko): Remove this function as it is no longer being used.
    selectIndexInternal(getTView(), getLView(), index, getCheckNoChangesMode());
}
/**
 * @param {?} tView
 * @param {?} lView
 * @param {?} index
 * @param {?} checkNoChangesMode
 * @return {?}
 */
export function selectIndexInternal(tView, lView, index, checkNoChangesMode) {
    ngDevMode && assertGreaterThan(index, -1, 'Invalid index');
    ngDevMode && assertDataInRange(lView, index + HEADER_OFFSET);
    // Flush the initial hooks for elements in the view that have been added up to this point.
    // PERF WARNING: do NOT extract this to a separate function without running benchmarks
    if (!checkNoChangesMode) {
        /** @type {?} */
        const hooksInitPhaseCompleted = (lView[FLAGS] & 3 /* InitPhaseStateMask */) === 3 /* InitPhaseCompleted */;
        if (hooksInitPhaseCompleted) {
            /** @type {?} */
            const preOrderCheckHooks = tView.preOrderCheckHooks;
            if (preOrderCheckHooks !== null) {
                executeCheckHooks(lView, preOrderCheckHooks, index);
            }
        }
        else {
            /** @type {?} */
            const preOrderHooks = tView.preOrderHooks;
            if (preOrderHooks !== null) {
                executeInitAndCheckHooks(lView, preOrderHooks, 0 /* OnInitHooksToBeRun */, index);
            }
        }
    }
    // We must set the selected index *after* running the hooks, because hooks may have side-effects
    // that cause other template functions to run, thus updating the selected index, which is global
    // state. If we run `setSelectedIndex` *before* we run the hooks, in some cases the selected index
    // will be altered by the time we leave the `ɵɵadvance` instruction.
    setSelectedIndex(index);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW5zdHJ1Y3Rpb25zL2FkdmFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUEyQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xHLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJ2RyxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQWE7SUFDckMsU0FBUyxJQUFJLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUNyRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7QUFDbkcsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDcEMsbUVBQW1FO0lBQ25FLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7QUFDOUUsQ0FBQzs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQy9CLEtBQVksRUFBRSxLQUFZLEVBQUUsS0FBYSxFQUFFLGtCQUEyQjtJQUN4RSxTQUFTLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzNELFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBRTdELDBGQUEwRjtJQUMxRixzRkFBc0Y7SUFDdEYsSUFBSSxDQUFDLGtCQUFrQixFQUFFOztjQUNqQix1QkFBdUIsR0FDekIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDZCQUFnQyxDQUFDLCtCQUFzQztRQUN4RixJQUFJLHVCQUF1QixFQUFFOztrQkFDckIsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGtCQUFrQjtZQUNuRCxJQUFJLGtCQUFrQixLQUFLLElBQUksRUFBRTtnQkFDL0IsaUJBQWlCLENBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7YUFBTTs7a0JBQ0MsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhO1lBQ3pDLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDMUIsd0JBQXdCLENBQUMsS0FBSyxFQUFFLGFBQWEsOEJBQXFDLEtBQUssQ0FBQyxDQUFDO2FBQzFGO1NBQ0Y7S0FDRjtJQUVELGdHQUFnRztJQUNoRyxnR0FBZ0c7SUFDaEcsa0dBQWtHO0lBQ2xHLG9FQUFvRTtJQUNwRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHthc3NlcnREYXRhSW5SYW5nZSwgYXNzZXJ0R3JlYXRlclRoYW59IGZyb20gJy4uLy4uL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7ZXhlY3V0ZUNoZWNrSG9va3MsIGV4ZWN1dGVJbml0QW5kQ2hlY2tIb29rc30gZnJvbSAnLi4vaG9va3MnO1xuaW1wb3J0IHtGTEFHUywgSEVBREVSX09GRlNFVCwgSW5pdFBoYXNlU3RhdGUsIExWaWV3LCBMVmlld0ZsYWdzLCBUVmlld30gZnJvbSAnLi4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7Z2V0Q2hlY2tOb0NoYW5nZXNNb2RlLCBnZXRMVmlldywgZ2V0U2VsZWN0ZWRJbmRleCwgZ2V0VFZpZXcsIHNldFNlbGVjdGVkSW5kZXh9IGZyb20gJy4uL3N0YXRlJztcblxuXG4vKipcbiAqIEFkdmFuY2VzIHRvIGFuIGVsZW1lbnQgZm9yIGxhdGVyIGJpbmRpbmcgaW5zdHJ1Y3Rpb25zLlxuICpcbiAqIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBpbnN0cnVjdGlvbnMgbGlrZSB7QGxpbmsgcHJvcGVydHl9IHRvIGFjdCBvbiBlbGVtZW50cyB3aXRoIHNwZWNpZmllZFxuICogaW5kaWNlcywgZm9yIGV4YW1wbGUgdGhvc2UgY3JlYXRlZCB3aXRoIHtAbGluayBlbGVtZW50fSBvciB7QGxpbmsgZWxlbWVudFN0YXJ0fS5cbiAqXG4gKiBgYGB0c1xuICogKHJmOiBSZW5kZXJGbGFncywgY3R4OiBhbnkpID0+IHtcbiAqICAgaWYgKHJmICYgMSkge1xuICogICAgIHRleHQoMCwgJ0hlbGxvJyk7XG4gKiAgICAgdGV4dCgxLCAnR29vZGJ5ZScpXG4gKiAgICAgZWxlbWVudCgyLCAnZGl2Jyk7XG4gKiAgIH1cbiAqICAgaWYgKHJmICYgMikge1xuICogICAgIGFkdmFuY2UoMik7IC8vIEFkdmFuY2UgdHdpY2UgdG8gdGhlIDxkaXY+LlxuICogICAgIHByb3BlcnR5KCd0aXRsZScsICd0ZXN0Jyk7XG4gKiAgIH1cbiAqICB9XG4gKiBgYGBcbiAqIEBwYXJhbSBkZWx0YSBOdW1iZXIgb2YgZWxlbWVudHMgdG8gYWR2YW5jZSBmb3J3YXJkcyBieS5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtWFkdmFuY2UoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0R3JlYXRlclRoYW4oZGVsdGEsIDAsICdDYW4gb25seSBhZHZhbmNlIGZvcndhcmQnKTtcbiAgc2VsZWN0SW5kZXhJbnRlcm5hbChnZXRUVmlldygpLCBnZXRMVmlldygpLCBnZXRTZWxlY3RlZEluZGV4KCkgKyBkZWx0YSwgZ2V0Q2hlY2tOb0NoYW5nZXNNb2RlKCkpO1xufVxuXG4vKipcbiAqIFNlbGVjdHMgYW4gZWxlbWVudCBmb3IgbGF0ZXIgYmluZGluZyBpbnN0cnVjdGlvbnMuXG4gKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgYmVpbmcgZ2VuZXJhdGVkLCBidXQgc3RpbGwgdXNlZCBpbiB1bml0IHRlc3RzLlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVzZWxlY3QoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAvLyBUT0RPKG1pc2tvKTogUmVtb3ZlIHRoaXMgZnVuY3Rpb24gYXMgaXQgaXMgbm8gbG9uZ2VyIGJlaW5nIHVzZWQuXG4gIHNlbGVjdEluZGV4SW50ZXJuYWwoZ2V0VFZpZXcoKSwgZ2V0TFZpZXcoKSwgaW5kZXgsIGdldENoZWNrTm9DaGFuZ2VzTW9kZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEluZGV4SW50ZXJuYWwoXG4gICAgdFZpZXc6IFRWaWV3LCBsVmlldzogTFZpZXcsIGluZGV4OiBudW1iZXIsIGNoZWNrTm9DaGFuZ2VzTW9kZTogYm9vbGVhbikge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0R3JlYXRlclRoYW4oaW5kZXgsIC0xLCAnSW52YWxpZCBpbmRleCcpO1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RGF0YUluUmFuZ2UobFZpZXcsIGluZGV4ICsgSEVBREVSX09GRlNFVCk7XG5cbiAgLy8gRmx1c2ggdGhlIGluaXRpYWwgaG9va3MgZm9yIGVsZW1lbnRzIGluIHRoZSB2aWV3IHRoYXQgaGF2ZSBiZWVuIGFkZGVkIHVwIHRvIHRoaXMgcG9pbnQuXG4gIC8vIFBFUkYgV0FSTklORzogZG8gTk9UIGV4dHJhY3QgdGhpcyB0byBhIHNlcGFyYXRlIGZ1bmN0aW9uIHdpdGhvdXQgcnVubmluZyBiZW5jaG1hcmtzXG4gIGlmICghY2hlY2tOb0NoYW5nZXNNb2RlKSB7XG4gICAgY29uc3QgaG9va3NJbml0UGhhc2VDb21wbGV0ZWQgPVxuICAgICAgICAobFZpZXdbRkxBR1NdICYgTFZpZXdGbGFncy5Jbml0UGhhc2VTdGF0ZU1hc2spID09PSBJbml0UGhhc2VTdGF0ZS5Jbml0UGhhc2VDb21wbGV0ZWQ7XG4gICAgaWYgKGhvb2tzSW5pdFBoYXNlQ29tcGxldGVkKSB7XG4gICAgICBjb25zdCBwcmVPcmRlckNoZWNrSG9va3MgPSB0Vmlldy5wcmVPcmRlckNoZWNrSG9va3M7XG4gICAgICBpZiAocHJlT3JkZXJDaGVja0hvb2tzICE9PSBudWxsKSB7XG4gICAgICAgIGV4ZWN1dGVDaGVja0hvb2tzKGxWaWV3LCBwcmVPcmRlckNoZWNrSG9va3MsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlT3JkZXJIb29rcyA9IHRWaWV3LnByZU9yZGVySG9va3M7XG4gICAgICBpZiAocHJlT3JkZXJIb29rcyAhPT0gbnVsbCkge1xuICAgICAgICBleGVjdXRlSW5pdEFuZENoZWNrSG9va3MobFZpZXcsIHByZU9yZGVySG9va3MsIEluaXRQaGFzZVN0YXRlLk9uSW5pdEhvb2tzVG9CZVJ1biwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFdlIG11c3Qgc2V0IHRoZSBzZWxlY3RlZCBpbmRleCAqYWZ0ZXIqIHJ1bm5pbmcgdGhlIGhvb2tzLCBiZWNhdXNlIGhvb2tzIG1heSBoYXZlIHNpZGUtZWZmZWN0c1xuICAvLyB0aGF0IGNhdXNlIG90aGVyIHRlbXBsYXRlIGZ1bmN0aW9ucyB0byBydW4sIHRodXMgdXBkYXRpbmcgdGhlIHNlbGVjdGVkIGluZGV4LCB3aGljaCBpcyBnbG9iYWxcbiAgLy8gc3RhdGUuIElmIHdlIHJ1biBgc2V0U2VsZWN0ZWRJbmRleGAgKmJlZm9yZSogd2UgcnVuIHRoZSBob29rcywgaW4gc29tZSBjYXNlcyB0aGUgc2VsZWN0ZWQgaW5kZXhcbiAgLy8gd2lsbCBiZSBhbHRlcmVkIGJ5IHRoZSB0aW1lIHdlIGxlYXZlIHRoZSBgybXJtWFkdmFuY2VgIGluc3RydWN0aW9uLlxuICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbn1cbiJdfQ==