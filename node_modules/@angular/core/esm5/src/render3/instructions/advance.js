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
 * Used in conjunction with instructions like {@link property} to act on elements with specified
 * indices, for example those created with {@link element} or {@link elementStart}.
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
 * @param delta Number of elements to advance forwards by.
 *
 * @codeGenApi
 */
export function ɵɵadvance(delta) {
    ngDevMode && assertGreaterThan(delta, 0, 'Can only advance forward');
    selectIndexInternal(getTView(), getLView(), getSelectedIndex() + delta, getCheckNoChangesMode());
}
/**
 * Selects an element for later binding instructions.
 * @deprecated No longer being generated, but still used in unit tests.
 * @codeGenApi
 */
export function ɵɵselect(index) {
    // TODO(misko): Remove this function as it is no longer being used.
    selectIndexInternal(getTView(), getLView(), index, getCheckNoChangesMode());
}
export function selectIndexInternal(tView, lView, index, checkNoChangesMode) {
    ngDevMode && assertGreaterThan(index, -1, 'Invalid index');
    ngDevMode && assertDataInRange(lView, index + HEADER_OFFSET);
    // Flush the initial hooks for elements in the view that have been added up to this point.
    // PERF WARNING: do NOT extract this to a separate function without running benchmarks
    if (!checkNoChangesMode) {
        var hooksInitPhaseCompleted = (lView[FLAGS] & 3 /* InitPhaseStateMask */) === 3 /* InitPhaseCompleted */;
        if (hooksInitPhaseCompleted) {
            var preOrderCheckHooks = tView.preOrderCheckHooks;
            if (preOrderCheckHooks !== null) {
                executeCheckHooks(lView, preOrderCheckHooks, index);
            }
        }
        else {
            var preOrderHooks = tView.preOrderHooks;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW5zdHJ1Y3Rpb25zL2FkdmFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUEyQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xHLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBR3ZHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFhO0lBQ3JDLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDckUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxLQUFLLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0FBQ25HLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLG1FQUFtRTtJQUNuRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQy9CLEtBQVksRUFBRSxLQUFZLEVBQUUsS0FBYSxFQUFFLGtCQUEyQjtJQUN4RSxTQUFTLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzNELFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBRTdELDBGQUEwRjtJQUMxRixzRkFBc0Y7SUFDdEYsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1FBQ3ZCLElBQU0sdUJBQXVCLEdBQ3pCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyw2QkFBZ0MsQ0FBQywrQkFBc0MsQ0FBQztRQUN6RixJQUFJLHVCQUF1QixFQUFFO1lBQzNCLElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BELElBQUksa0JBQWtCLEtBQUssSUFBSSxFQUFFO2dCQUMvQixpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDckQ7U0FDRjthQUFNO1lBQ0wsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLGFBQWEsS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLHdCQUF3QixDQUFDLEtBQUssRUFBRSxhQUFhLDhCQUFxQyxLQUFLLENBQUMsQ0FBQzthQUMxRjtTQUNGO0tBQ0Y7SUFFRCxnR0FBZ0c7SUFDaEcsZ0dBQWdHO0lBQ2hHLGtHQUFrRztJQUNsRyxvRUFBb0U7SUFDcEUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7YXNzZXJ0RGF0YUluUmFuZ2UsIGFzc2VydEdyZWF0ZXJUaGFufSBmcm9tICcuLi8uLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2V4ZWN1dGVDaGVja0hvb2tzLCBleGVjdXRlSW5pdEFuZENoZWNrSG9va3N9IGZyb20gJy4uL2hvb2tzJztcbmltcG9ydCB7RkxBR1MsIEhFQURFUl9PRkZTRVQsIEluaXRQaGFzZVN0YXRlLCBMVmlldywgTFZpZXdGbGFncywgVFZpZXd9IGZyb20gJy4uL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2dldENoZWNrTm9DaGFuZ2VzTW9kZSwgZ2V0TFZpZXcsIGdldFNlbGVjdGVkSW5kZXgsIGdldFRWaWV3LCBzZXRTZWxlY3RlZEluZGV4fSBmcm9tICcuLi9zdGF0ZSc7XG5cblxuLyoqXG4gKiBBZHZhbmNlcyB0byBhbiBlbGVtZW50IGZvciBsYXRlciBiaW5kaW5nIGluc3RydWN0aW9ucy5cbiAqXG4gKiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggaW5zdHJ1Y3Rpb25zIGxpa2Uge0BsaW5rIHByb3BlcnR5fSB0byBhY3Qgb24gZWxlbWVudHMgd2l0aCBzcGVjaWZpZWRcbiAqIGluZGljZXMsIGZvciBleGFtcGxlIHRob3NlIGNyZWF0ZWQgd2l0aCB7QGxpbmsgZWxlbWVudH0gb3Ige0BsaW5rIGVsZW1lbnRTdGFydH0uXG4gKlxuICogYGBgdHNcbiAqIChyZjogUmVuZGVyRmxhZ3MsIGN0eDogYW55KSA9PiB7XG4gKiAgIGlmIChyZiAmIDEpIHtcbiAqICAgICB0ZXh0KDAsICdIZWxsbycpO1xuICogICAgIHRleHQoMSwgJ0dvb2RieWUnKVxuICogICAgIGVsZW1lbnQoMiwgJ2RpdicpO1xuICogICB9XG4gKiAgIGlmIChyZiAmIDIpIHtcbiAqICAgICBhZHZhbmNlKDIpOyAvLyBBZHZhbmNlIHR3aWNlIHRvIHRoZSA8ZGl2Pi5cbiAqICAgICBwcm9wZXJ0eSgndGl0bGUnLCAndGVzdCcpO1xuICogICB9XG4gKiAgfVxuICogYGBgXG4gKiBAcGFyYW0gZGVsdGEgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIGFkdmFuY2UgZm9yd2FyZHMgYnkuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVhZHZhbmNlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydEdyZWF0ZXJUaGFuKGRlbHRhLCAwLCAnQ2FuIG9ubHkgYWR2YW5jZSBmb3J3YXJkJyk7XG4gIHNlbGVjdEluZGV4SW50ZXJuYWwoZ2V0VFZpZXcoKSwgZ2V0TFZpZXcoKSwgZ2V0U2VsZWN0ZWRJbmRleCgpICsgZGVsdGEsIGdldENoZWNrTm9DaGFuZ2VzTW9kZSgpKTtcbn1cblxuLyoqXG4gKiBTZWxlY3RzIGFuIGVsZW1lbnQgZm9yIGxhdGVyIGJpbmRpbmcgaW5zdHJ1Y3Rpb25zLlxuICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIGdlbmVyYXRlZCwgYnV0IHN0aWxsIHVzZWQgaW4gdW5pdCB0ZXN0cy5cbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1c2VsZWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgLy8gVE9ETyhtaXNrbyk6IFJlbW92ZSB0aGlzIGZ1bmN0aW9uIGFzIGl0IGlzIG5vIGxvbmdlciBiZWluZyB1c2VkLlxuICBzZWxlY3RJbmRleEludGVybmFsKGdldFRWaWV3KCksIGdldExWaWV3KCksIGluZGV4LCBnZXRDaGVja05vQ2hhbmdlc01vZGUoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RJbmRleEludGVybmFsKFxuICAgIHRWaWV3OiBUVmlldywgbFZpZXc6IExWaWV3LCBpbmRleDogbnVtYmVyLCBjaGVja05vQ2hhbmdlc01vZGU6IGJvb2xlYW4pIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydEdyZWF0ZXJUaGFuKGluZGV4LCAtMSwgJ0ludmFsaWQgaW5kZXgnKTtcbiAgbmdEZXZNb2RlICYmIGFzc2VydERhdGFJblJhbmdlKGxWaWV3LCBpbmRleCArIEhFQURFUl9PRkZTRVQpO1xuXG4gIC8vIEZsdXNoIHRoZSBpbml0aWFsIGhvb2tzIGZvciBlbGVtZW50cyBpbiB0aGUgdmlldyB0aGF0IGhhdmUgYmVlbiBhZGRlZCB1cCB0byB0aGlzIHBvaW50LlxuICAvLyBQRVJGIFdBUk5JTkc6IGRvIE5PVCBleHRyYWN0IHRoaXMgdG8gYSBzZXBhcmF0ZSBmdW5jdGlvbiB3aXRob3V0IHJ1bm5pbmcgYmVuY2htYXJrc1xuICBpZiAoIWNoZWNrTm9DaGFuZ2VzTW9kZSkge1xuICAgIGNvbnN0IGhvb2tzSW5pdFBoYXNlQ29tcGxldGVkID1cbiAgICAgICAgKGxWaWV3W0ZMQUdTXSAmIExWaWV3RmxhZ3MuSW5pdFBoYXNlU3RhdGVNYXNrKSA9PT0gSW5pdFBoYXNlU3RhdGUuSW5pdFBoYXNlQ29tcGxldGVkO1xuICAgIGlmIChob29rc0luaXRQaGFzZUNvbXBsZXRlZCkge1xuICAgICAgY29uc3QgcHJlT3JkZXJDaGVja0hvb2tzID0gdFZpZXcucHJlT3JkZXJDaGVja0hvb2tzO1xuICAgICAgaWYgKHByZU9yZGVyQ2hlY2tIb29rcyAhPT0gbnVsbCkge1xuICAgICAgICBleGVjdXRlQ2hlY2tIb29rcyhsVmlldywgcHJlT3JkZXJDaGVja0hvb2tzLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZU9yZGVySG9va3MgPSB0Vmlldy5wcmVPcmRlckhvb2tzO1xuICAgICAgaWYgKHByZU9yZGVySG9va3MgIT09IG51bGwpIHtcbiAgICAgICAgZXhlY3V0ZUluaXRBbmRDaGVja0hvb2tzKGxWaWV3LCBwcmVPcmRlckhvb2tzLCBJbml0UGhhc2VTdGF0ZS5PbkluaXRIb29rc1RvQmVSdW4sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBXZSBtdXN0IHNldCB0aGUgc2VsZWN0ZWQgaW5kZXggKmFmdGVyKiBydW5uaW5nIHRoZSBob29rcywgYmVjYXVzZSBob29rcyBtYXkgaGF2ZSBzaWRlLWVmZmVjdHNcbiAgLy8gdGhhdCBjYXVzZSBvdGhlciB0ZW1wbGF0ZSBmdW5jdGlvbnMgdG8gcnVuLCB0aHVzIHVwZGF0aW5nIHRoZSBzZWxlY3RlZCBpbmRleCwgd2hpY2ggaXMgZ2xvYmFsXG4gIC8vIHN0YXRlLiBJZiB3ZSBydW4gYHNldFNlbGVjdGVkSW5kZXhgICpiZWZvcmUqIHdlIHJ1biB0aGUgaG9va3MsIGluIHNvbWUgY2FzZXMgdGhlIHNlbGVjdGVkIGluZGV4XG4gIC8vIHdpbGwgYmUgYWx0ZXJlZCBieSB0aGUgdGltZSB3ZSBsZWF2ZSB0aGUgYMm1ybVhZHZhbmNlYCBpbnN0cnVjdGlvbi5cbiAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG59XG4iXX0=