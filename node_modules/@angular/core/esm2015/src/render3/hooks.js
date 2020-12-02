/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/hooks.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertEqual, assertNotEqual } from '../util/assert';
import { assertFirstCreatePass } from './assert';
import { FLAGS, PREORDER_HOOK_FLAGS } from './interfaces/view';
import { getCheckNoChangesMode } from './state';
/**
 * Adds all directive lifecycle hooks from the given `DirectiveDef` to the given `TView`.
 *
 * Must be run *only* on the first template pass.
 *
 * Sets up the pre-order hooks on the provided `tView`,
 * see {\@link HookData} for details about the data structure.
 *
 * @param {?} directiveIndex The index of the directive in LView
 * @param {?} directiveDef The definition containing the hooks to setup in tView
 * @param {?} tView The current TView
 * @return {?}
 */
export function registerPreOrderHooks(directiveIndex, directiveDef, tView) {
    ngDevMode && assertFirstCreatePass(tView);
    const { onChanges, onInit, doCheck } = directiveDef;
    if (onChanges) {
        (tView.preOrderHooks || (tView.preOrderHooks = [])).push(directiveIndex, onChanges);
        (tView.preOrderCheckHooks || (tView.preOrderCheckHooks = [])).push(directiveIndex, onChanges);
    }
    if (onInit) {
        (tView.preOrderHooks || (tView.preOrderHooks = [])).push(-directiveIndex, onInit);
    }
    if (doCheck) {
        (tView.preOrderHooks || (tView.preOrderHooks = [])).push(directiveIndex, doCheck);
        (tView.preOrderCheckHooks || (tView.preOrderCheckHooks = [])).push(directiveIndex, doCheck);
    }
}
/**
 *
 * Loops through the directives on the provided `tNode` and queues hooks to be
 * run that are not initialization hooks.
 *
 * Should be executed during `elementEnd()` and similar to
 * preserve hook execution order. Content, view, and destroy hooks for projected
 * components and directives must be called *before* their hosts.
 *
 * Sets up the content, view, and destroy hooks on the provided `tView`,
 * see {\@link HookData} for details about the data structure.
 *
 * NOTE: This does not set up `onChanges`, `onInit` or `doCheck`, those are set up
 * separately at `elementStart`.
 *
 * @param {?} tView The current TView
 * @param {?} tNode The TNode whose directives are to be searched for hooks to queue
 * @return {?}
 */
export function registerPostOrderHooks(tView, tNode) {
    ngDevMode && assertFirstCreatePass(tView);
    // It's necessary to loop through the directives at elementEnd() (rather than processing in
    // directiveCreate) so we can preserve the current hook order. Content, view, and destroy
    // hooks for projected components and directives must be called *before* their hosts.
    for (let i = tNode.directiveStart, end = tNode.directiveEnd; i < end; i++) {
        /** @type {?} */
        const directiveDef = (/** @type {?} */ (tView.data[i]));
        if (directiveDef.afterContentInit) {
            (tView.contentHooks || (tView.contentHooks = [])).push(-i, directiveDef.afterContentInit);
        }
        if (directiveDef.afterContentChecked) {
            (tView.contentHooks || (tView.contentHooks = [])).push(i, directiveDef.afterContentChecked);
            (tView.contentCheckHooks || (tView.contentCheckHooks = []))
                .push(i, directiveDef.afterContentChecked);
        }
        if (directiveDef.afterViewInit) {
            (tView.viewHooks || (tView.viewHooks = [])).push(-i, directiveDef.afterViewInit);
        }
        if (directiveDef.afterViewChecked) {
            (tView.viewHooks || (tView.viewHooks = [])).push(i, directiveDef.afterViewChecked);
            (tView.viewCheckHooks || (tView.viewCheckHooks = [])).push(i, directiveDef.afterViewChecked);
        }
        if (directiveDef.onDestroy != null) {
            (tView.destroyHooks || (tView.destroyHooks = [])).push(i, directiveDef.onDestroy);
        }
    }
}
/**
 * Executing hooks requires complex logic as we need to deal with 2 constraints.
 *
 * 1. Init hooks (ngOnInit, ngAfterContentInit, ngAfterViewInit) must all be executed once and only
 * once, across many change detection cycles. This must be true even if some hooks throw, or if
 * some recursively trigger a change detection cycle.
 * To solve that, it is required to track the state of the execution of these init hooks.
 * This is done by storing and maintaining flags in the view: the {@link InitPhaseState},
 * and the index within that phase. They can be seen as a cursor in the following structure:
 * [[onInit1, onInit2], [afterContentInit1], [afterViewInit1, afterViewInit2, afterViewInit3]]
 * They are are stored as flags in LView[FLAGS].
 *
 * 2. Pre-order hooks can be executed in batches, because of the select instruction.
 * To be able to pause and resume their execution, we also need some state about the hook's array
 * that is being processed:
 * - the index of the next hook to be executed
 * - the number of init hooks already found in the processed part of the  array
 * They are are stored as flags in LView[PREORDER_HOOK_FLAGS].
 */
/**
 * Executes pre-order check hooks ( OnChanges, DoChanges) given a view where all the init hooks were
 * executed once. This is a light version of executeInitAndCheckPreOrderHooks where we can skip read
 * / write of the init-hooks related flags.
 * @param {?} lView The LView where hooks are defined
 * @param {?} hooks Hooks to be run
 * @param {?=} nodeIndex 3 cases depending on the value:
 * - undefined: all hooks from the array should be executed (post-order case)
 * - null: execute hooks only from the saved index until the end of the array (pre-order case, when
 * flushing the remaining hooks)
 * - number: execute hooks only from the saved index until that node index exclusive (pre-order
 * case, when executing select(number))
 * @return {?}
 */
export function executeCheckHooks(lView, hooks, nodeIndex) {
    callHooks(lView, hooks, 3 /* InitPhaseCompleted */, nodeIndex);
}
/**
 * Executes post-order init and check hooks (one of AfterContentInit, AfterContentChecked,
 * AfterViewInit, AfterViewChecked) given a view where there are pending init hooks to be executed.
 * @param {?} lView The LView where hooks are defined
 * @param {?} hooks Hooks to be run
 * @param {?} initPhase A phase for which hooks should be run
 * @param {?=} nodeIndex 3 cases depending on the value:
 * - undefined: all hooks from the array should be executed (post-order case)
 * - null: execute hooks only from the saved index until the end of the array (pre-order case, when
 * flushing the remaining hooks)
 * - number: execute hooks only from the saved index until that node index exclusive (pre-order
 * case, when executing select(number))
 * @return {?}
 */
export function executeInitAndCheckHooks(lView, hooks, initPhase, nodeIndex) {
    ngDevMode &&
        assertNotEqual(initPhase, 3 /* InitPhaseCompleted */, 'Init pre-order hooks should not be called more than once');
    if ((lView[FLAGS] & 3 /* InitPhaseStateMask */) === initPhase) {
        callHooks(lView, hooks, initPhase, nodeIndex);
    }
}
/**
 * @param {?} lView
 * @param {?} initPhase
 * @return {?}
 */
export function incrementInitPhaseFlags(lView, initPhase) {
    ngDevMode &&
        assertNotEqual(initPhase, 3 /* InitPhaseCompleted */, 'Init hooks phase should not be incremented after all init hooks have been run.');
    /** @type {?} */
    let flags = lView[FLAGS];
    if ((flags & 3 /* InitPhaseStateMask */) === initPhase) {
        flags &= 2047 /* IndexWithinInitPhaseReset */;
        flags += 1 /* InitPhaseStateIncrementer */;
        lView[FLAGS] = flags;
    }
}
/**
 * Calls lifecycle hooks with their contexts, skipping init hooks if it's not
 * the first LView pass
 *
 * @param {?} currentView The current view
 * @param {?} arr The array in which the hooks are found
 * @param {?} initPhase
 * @param {?} currentNodeIndex 3 cases depending on the value:
 * - undefined: all hooks from the array should be executed (post-order case)
 * - null: execute hooks only from the saved index until the end of the array (pre-order case, when
 * flushing the remaining hooks)
 * - number: execute hooks only from the saved index until that node index exclusive (pre-order
 * case, when executing select(number))
 * @return {?}
 */
function callHooks(currentView, arr, initPhase, currentNodeIndex) {
    ngDevMode &&
        assertEqual(getCheckNoChangesMode(), false, 'Hooks should never be run in the check no changes mode.');
    /** @type {?} */
    const startIndex = currentNodeIndex !== undefined ?
        (currentView[PREORDER_HOOK_FLAGS] & 65535 /* IndexOfTheNextPreOrderHookMaskMask */) :
        0;
    /** @type {?} */
    const nodeIndexLimit = currentNodeIndex != null ? currentNodeIndex : -1;
    /** @type {?} */
    let lastNodeIndexFound = 0;
    for (let i = startIndex; i < arr.length; i++) {
        /** @type {?} */
        const hook = (/** @type {?} */ (arr[i + 1]));
        if (typeof hook === 'number') {
            lastNodeIndexFound = (/** @type {?} */ (arr[i]));
            if (currentNodeIndex != null && lastNodeIndexFound >= currentNodeIndex) {
                break;
            }
        }
        else {
            /** @type {?} */
            const isInitHook = arr[i] < 0;
            if (isInitHook)
                currentView[PREORDER_HOOK_FLAGS] += 65536 /* NumberOfInitHooksCalledIncrementer */;
            if (lastNodeIndexFound < nodeIndexLimit || nodeIndexLimit == -1) {
                callHook(currentView, initPhase, arr, i);
                currentView[PREORDER_HOOK_FLAGS] =
                    (currentView[PREORDER_HOOK_FLAGS] & 4294901760 /* NumberOfInitHooksCalledMask */) + i +
                        2;
            }
            i++;
        }
    }
}
/**
 * Execute one hook against the current `LView`.
 *
 * @param {?} currentView The current view
 * @param {?} initPhase
 * @param {?} arr The array in which the hooks are found
 * @param {?} i The current index within the hook data array
 * @return {?}
 */
function callHook(currentView, initPhase, arr, i) {
    /** @type {?} */
    const isInitHook = arr[i] < 0;
    /** @type {?} */
    const hook = (/** @type {?} */ (arr[i + 1]));
    /** @type {?} */
    const directiveIndex = isInitHook ? -arr[i] : (/** @type {?} */ (arr[i]));
    /** @type {?} */
    const directive = currentView[directiveIndex];
    if (isInitHook) {
        /** @type {?} */
        const indexWithintInitPhase = currentView[FLAGS] >> 11 /* IndexWithinInitPhaseShift */;
        // The init phase state must be always checked here as it may have been recursively
        // updated
        if (indexWithintInitPhase <
            (currentView[PREORDER_HOOK_FLAGS] >> 16 /* NumberOfInitHooksCalledShift */) &&
            (currentView[FLAGS] & 3 /* InitPhaseStateMask */) === initPhase) {
            currentView[FLAGS] += 2048 /* IndexWithinInitPhaseIncrementer */;
            hook.call(directive);
        }
    }
    else {
        hook.call(directive);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxXQUFXLEVBQUUsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRy9DLE9BQU8sRUFBQyxLQUFLLEVBQStDLG1CQUFtQixFQUEyQixNQUFNLG1CQUFtQixDQUFDO0FBQ3BJLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFnQjlDLE1BQU0sVUFBVSxxQkFBcUIsQ0FDakMsY0FBc0IsRUFBRSxZQUErQixFQUFFLEtBQVk7SUFDdkUsU0FBUyxJQUFJLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQ3BDLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUMsR0FBRyxZQUFZO0lBRWpELElBQUksU0FBUyxFQUFFO1FBQ2IsQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQy9GO0lBRUQsSUFBSSxNQUFNLEVBQUU7UUFDVixDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tB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Y0FBYyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBVTs7VUFDeEQsU0FBUyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7SUFDN0MsSUFBSSxVQUFVLEVBQUU7O2NBQ1IscUJBQXFCLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxzQ0FBd0M7UUFDeEYsbUZBQW1GO1FBQ25GLFVBQVU7UUFDVixJQUFJLHFCQUFxQjtZQUNqQixDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyx5Q0FBa0QsQ0FBQztZQUN4RixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsNkJBQWdDLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDdEUsV0FBVyxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7U0FBTTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDdEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2Fzc2VydEVxdWFsLCBhc3NlcnROb3RFcXVhbH0gZnJvbSAnLi4vdXRpbC9hc3NlcnQnO1xuXG5pbXBvcnQge2Fzc2VydEZpcnN0Q3JlYXRlUGFzc30gZnJvbSAnLi9hc3NlcnQnO1xuaW1wb3J0IHtEaXJlY3RpdmVEZWZ9IGZyb20gJy4vaW50ZXJmYWNlcy9kZWZpbml0aW9uJztcbmltcG9ydCB7VE5vZGV9IGZyb20gJy4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7RkxBR1MsIEhvb2tEYXRhLCBJbml0UGhhc2VTdGF0ZSwgTFZpZXcsIExWaWV3RmxhZ3MsIFBSRU9SREVSX0hPT0tfRkxBR1MsIFByZU9yZGVySG9va0ZsYWdzLCBUVmlld30gZnJvbSAnLi9pbnRlcmZhY2VzL3ZpZXcnO1xuaW1wb3J0IHtnZXRDaGVja05vQ2hhbmdlc01vZGV9IGZyb20gJy4vc3RhdGUnO1xuXG5cblxuLyoqXG4gKiBBZGRzIGFsbCBkaXJlY3RpdmUgbGlmZWN5Y2xlIGhvb2tzIGZyb20gdGhlIGdpdmVuIGBEaXJlY3RpdmVEZWZgIHRvIHRoZSBnaXZlbiBgVFZpZXdgLlxuICpcbiAqIE11c3QgYmUgcnVuICpvbmx5KiBvbiB0aGUgZmlyc3QgdGVtcGxhdGUgcGFzcy5cbiAqXG4gKiBTZXRzIHVwIHRoZSBwcmUtb3JkZXIgaG9va3Mgb24gdGhlIHByb3ZpZGVkIGB0Vmlld2AsXG4gKiBzZWUge0BsaW5rIEhvb2tEYXRhfSBmb3IgZGV0YWlscyBhYm91dCB0aGUgZGF0YSBzdHJ1Y3R1cmUuXG4gKlxuICogQHBhcmFtIGRpcmVjdGl2ZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGlyZWN0aXZlIGluIExWaWV3XG4gKiBAcGFyYW0gZGlyZWN0aXZlRGVmIFRoZSBkZWZpbml0aW9uIGNvbnRhaW5pbmcgdGhlIGhvb2tzIHRvIHNldHVwIGluIHRWaWV3XG4gKiBAcGFyYW0gdFZpZXcgVGhlIGN1cnJlbnQgVFZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUHJlT3JkZXJIb29rcyhcbiAgICBkaXJlY3RpdmVJbmRleDogbnVtYmVyLCBkaXJlY3RpdmVEZWY6IERpcmVjdGl2ZURlZjxhbnk+LCB0VmlldzogVFZpZXcpOiB2b2lkIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydEZpcnN0Q3JlYXRlUGFzcyh0Vmlldyk7XG4gIGNvbnN0IHtvbkNoYW5nZXMsIG9uSW5pdCwgZG9DaGVja30gPSBkaXJlY3RpdmVEZWY7XG5cbiAgaWYgKG9uQ2hhbmdlcykge1xuICAgICh0Vmlldy5wcmVPcmRlckhvb2tzIHx8ICh0Vmlldy5wcmVPcmRlckhvb2tzID0gW10pKS5wdXNoKGRpcmVjdGl2ZUluZGV4LCBvbkNoYW5nZXMpO1xuICAgICh0Vmlldy5wcmVPcmRlckNoZWNrSG9va3MgfHwgKHRWaWV3LnByZU9yZGVyQ2hlY2tIb29rcyA9IFtdKSkucHVzaChkaXJlY3RpdmVJbmRleCwgb25DaGFuZ2VzKTtcbiAgfVxuXG4gIGlmIChvbkluaXQpIHtcbiAgICAodFZpZXcucHJlT3JkZXJIb29rcyB8fCAodFZpZXcucHJlT3JkZXJIb29rcyA9IFtdKSkucHVzaCgtZGlyZWN0aXZlSW5kZXgsIG9uSW5pdCk7XG4gIH1cblxuICBpZiAoZG9DaGVjaykge1xuICAgICh0Vmlldy5wcmVPcmRlckhvb2tzIHx8ICh0Vmlldy5wcmVPcmRlckhvb2tzID0gW10pKS5wdXNoKGRpcmVjdGl2ZUluZGV4LCBkb0NoZWNrKTtcbiAgICAodFZpZXcucHJlT3JkZXJDaGVja0hvb2tzIHx8ICh0Vmlldy5wcmVPcmRlckNoZWNrSG9va3MgPSBbXSkpLnB1c2goZGlyZWN0aXZlSW5kZXgsIGRvQ2hlY2spO1xuICB9XG59XG5cbi8qKlxuICpcbiAqIExvb3BzIHRocm91Z2ggdGhlIGRpcmVjdGl2ZXMgb24gdGhlIHByb3ZpZGVkIGB0Tm9kZWAgYW5kIHF1ZXVlcyBob29rcyB0byBiZVxuICogcnVuIHRoYXQgYXJlIG5vdCBpbml0aWFsaXphdGlvbiBob29rcy5cbiAqXG4gKiBTaG91bGQgYmUgZXhlY3V0ZWQgZHVyaW5nIGBlbGVtZW50RW5kKClgIGFuZCBzaW1pbGFyIHRvXG4gKiBwcmVzZXJ2ZSBob29rIGV4ZWN1dGlvbiBvcmRlci4gQ29udGVudCwgdmlldywgYW5kIGRlc3Ryb3kgaG9va3MgZm9yIHByb2plY3RlZFxuICogY29tcG9uZW50cyBhbmQgZGlyZWN0aXZlcyBtdXN0IGJlIGNhbGxlZCAqYmVmb3JlKiB0aGVpciBob3N0cy5cbiAqXG4gKiBTZXRzIHVwIHRoZSBjb250ZW50LCB2aWV3LCBhbmQgZGVzdHJveSBob29rcyBvbiB0aGUgcHJvdmlkZWQgYHRWaWV3YCxcbiAqIHNlZSB7QGxpbmsgSG9va0RhdGF9IGZvciBkZXRhaWxzIGFib3V0IHRoZSBkYXRhIHN0cnVjdHVyZS5cbiAqXG4gKiBOT1RFOiBUaGlzIGRvZXMgbm90IHNldCB1cCBgb25DaGFuZ2VzYCwgYG9uSW5pdGAgb3IgYGRvQ2hlY2tgLCB0aG9zZSBhcmUgc2V0IHVwXG4gKiBzZXBhcmF0ZWx5IGF0IGBlbGVtZW50U3RhcnRgLlxuICpcbiAqIEBwYXJhbSB0VmlldyBUaGUgY3VycmVudCBUVmlld1xuICogQHBhcmFtIHROb2RlIFRoZSBUTm9kZSB3aG9zZSBkaXJlY3RpdmVzIGFyZSB0byBiZSBzZWFyY2hlZCBmb3IgaG9va3MgdG8gcXVldWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUG9zdE9yZGVySG9va3ModFZpZXc6IFRWaWV3LCB0Tm9kZTogVE5vZGUpOiB2b2lkIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydEZpcnN0Q3JlYXRlUGFzcyh0Vmlldyk7XG4gIC8vIEl0J3MgbmVjZXNzYXJ5IHRvIGxvb3AgdGhyb3VnaCB0aGUgZGlyZWN0aXZlcyBhdCBlbGVtZW50RW5kKCkgKHJhdGhlciB0aGFuIHByb2Nlc3NpbmcgaW5cbiAgLy8gZGlyZWN0aXZlQ3JlYXRlKSBzbyB3ZSBjYW4gcHJlc2VydmUgdGhlIGN1cnJlbnQgaG9vayBvcmRlci4gQ29udGVudCwgdmlldywgYW5kIGRlc3Ryb3lcbiAgLy8gaG9va3MgZm9yIHByb2plY3RlZCBjb21wb25lbnRzIGFuZCBkaXJlY3RpdmVzIG11c3QgYmUgY2FsbGVkICpiZWZvcmUqIHRoZWlyIGhvc3RzLlxuICBmb3IgKGxldCBpID0gdE5vZGUuZGlyZWN0aXZlU3RhcnQsIGVuZCA9IHROb2RlLmRpcmVjdGl2ZUVuZDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgZGlyZWN0aXZlRGVmID0gdFZpZXcuZGF0YVtpXSBhcyBEaXJlY3RpdmVEZWY8YW55PjtcbiAgICBpZiAoZGlyZWN0aXZlRGVmLmFmdGVyQ29udGVudEluaXQpIHtcbiAgICAgICh0Vmlldy5jb250ZW50SG9va3MgfHwgKHRWaWV3LmNvbnRlbnRIb29rcyA9IFtdKSkucHVzaCgtaSwgZGlyZWN0aXZlRGVmLmFmdGVyQ29udGVudEluaXQpO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3RpdmVEZWYuYWZ0ZXJDb250ZW50Q2hlY2tlZCkge1xuICAgICAgKHRWaWV3LmNvbnRlbnRIb29rcyB8fCAodFZpZXcuY29udGVudEhvb2tzID0gW10pKS5wdXNoKGksIGRpcmVjdGl2ZURlZi5hZnRlckNvbnRlbnRDaGVja2VkKTtcbiAgICAgICh0Vmlldy5jb250ZW50Q2hlY2tIb29rcyB8fCAodFZpZXcuY29udGVudENoZWNrSG9va3MgPSBbXSkpXG4gICAgICAgICAgLnB1c2goaSwgZGlyZWN0aXZlRGVmLmFmdGVyQ29udGVudENoZWNrZWQpO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3RpdmVEZWYuYWZ0ZXJWaWV3SW5pdCkge1xuICAgICAgKHRWaWV3LnZpZXdIb29rcyB8fCAodFZpZXcudmlld0hvb2tzID0gW10pKS5wdXNoKC1pLCBkaXJlY3RpdmVEZWYuYWZ0ZXJWaWV3SW5pdCk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGl2ZURlZi5hZnRlclZpZXdDaGVja2VkKSB7XG4gICAgICAodFZpZXcudmlld0hvb2tzIHx8ICh0Vmlldy52aWV3SG9va3MgPSBbXSkpLnB1c2goaSwgZGlyZWN0aXZlRGVmLmFmdGVyVmlld0NoZWNrZWQpO1xuICAgICAgKHRWaWV3LnZpZXdDaGVja0hvb2tzIHx8ICh0Vmlldy52aWV3Q2hlY2tIb29rcyA9IFtdKSkucHVzaChpLCBkaXJlY3RpdmVEZWYuYWZ0ZXJWaWV3Q2hlY2tlZCk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGl2ZURlZi5vbkRlc3Ryb3kgIT0gbnVsbCkge1xuICAgICAgKHRWaWV3LmRlc3Ryb3lIb29rcyB8fCAodFZpZXcuZGVzdHJveUhvb2tzID0gW10pKS5wdXNoKGksIGRpcmVjdGl2ZURlZi5vbkRlc3Ryb3kpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4ZWN1dGluZyBob29rcyByZXF1aXJlcyBjb21wbGV4IGxvZ2ljIGFzIHdlIG5lZWQgdG8gZGVhbCB3aXRoIDIgY29uc3RyYWludHMuXG4gKlxuICogMS4gSW5pdCBob29rcyAobmdPbkluaXQsIG5nQWZ0ZXJDb250ZW50SW5pdCwgbmdBZnRlclZpZXdJbml0KSBtdXN0IGFsbCBiZSBleGVjdXRlZCBvbmNlIGFuZCBvbmx5XG4gKiBvbmNlLCBhY3Jvc3MgbWFueSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlcy4gVGhpcyBtdXN0IGJlIHRydWUgZXZlbiBpZiBzb21lIGhvb2tzIHRocm93LCBvciBpZlxuICogc29tZSByZWN1cnNpdmVseSB0cmlnZ2VyIGEgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS5cbiAqIFRvIHNvbHZlIHRoYXQsIGl0IGlzIHJlcXVpcmVkIHRvIHRyYWNrIHRoZSBzdGF0ZSBvZiB0aGUgZXhlY3V0aW9uIG9mIHRoZXNlIGluaXQgaG9va3MuXG4gKiBUaGlzIGlzIGRvbmUgYnkgc3RvcmluZyBhbmQgbWFpbnRhaW5pbmcgZmxhZ3MgaW4gdGhlIHZpZXc6IHRoZSB7QGxpbmsgSW5pdFBoYXNlU3RhdGV9LFxuICogYW5kIHRoZSBpbmRleCB3aXRoaW4gdGhhdCBwaGFzZS4gVGhleSBjYW4gYmUgc2VlbiBhcyBhIGN1cnNvciBpbiB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZTpcbiAqIFtbb25Jbml0MSwgb25Jbml0Ml0sIFthZnRlckNvbnRlbnRJbml0MV0sIFthZnRlclZpZXdJbml0MSwgYWZ0ZXJWaWV3SW5pdDIsIGFmdGVyVmlld0luaXQzXV1cbiAqIFRoZXkgYXJlIGFyZSBzdG9yZWQgYXMgZmxhZ3MgaW4gTFZpZXdbRkxBR1NdLlxuICpcbiAqIDIuIFByZS1vcmRlciBob29rcyBjYW4gYmUgZXhlY3V0ZWQgaW4gYmF0Y2hlcywgYmVjYXVzZSBvZiB0aGUgc2VsZWN0IGluc3RydWN0aW9uLlxuICogVG8gYmUgYWJsZSB0byBwYXVzZSBhbmQgcmVzdW1lIHRoZWlyIGV4ZWN1dGlvbiwgd2UgYWxzbyBuZWVkIHNvbWUgc3RhdGUgYWJvdXQgdGhlIGhvb2sncyBhcnJheVxuICogdGhhdCBpcyBiZWluZyBwcm9jZXNzZWQ6XG4gKiAtIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBob29rIHRvIGJlIGV4ZWN1dGVkXG4gKiAtIHRoZSBudW1iZXIgb2YgaW5pdCBob29rcyBhbHJlYWR5IGZvdW5kIGluIHRoZSBwcm9jZXNzZWQgcGFydCBvZiB0aGUgIGFycmF5XG4gKiBUaGV5IGFyZSBhcmUgc3RvcmVkIGFzIGZsYWdzIGluIExWaWV3W1BSRU9SREVSX0hPT0tfRkxBR1NdLlxuICovXG5cblxuLyoqXG4gKiBFeGVjdXRlcyBwcmUtb3JkZXIgY2hlY2sgaG9va3MgKCBPbkNoYW5nZXMsIERvQ2hhbmdlcykgZ2l2ZW4gYSB2aWV3IHdoZXJlIGFsbCB0aGUgaW5pdCBob29rcyB3ZXJlXG4gKiBleGVjdXRlZCBvbmNlLiBUaGlzIGlzIGEgbGlnaHQgdmVyc2lvbiBvZiBleGVjdXRlSW5pdEFuZENoZWNrUHJlT3JkZXJIb29rcyB3aGVyZSB3ZSBjYW4gc2tpcCByZWFkXG4gKiAvIHdyaXRlIG9mIHRoZSBpbml0LWhvb2tzIHJlbGF0ZWQgZmxhZ3MuXG4gKiBAcGFyYW0gbFZpZXcgVGhlIExWaWV3IHdoZXJlIGhvb2tzIGFyZSBkZWZpbmVkXG4gKiBAcGFyYW0gaG9va3MgSG9va3MgdG8gYmUgcnVuXG4gKiBAcGFyYW0gbm9kZUluZGV4IDMgY2FzZXMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZTpcbiAqIC0gdW5kZWZpbmVkOiBhbGwgaG9va3MgZnJvbSB0aGUgYXJyYXkgc2hvdWxkIGJlIGV4ZWN1dGVkIChwb3N0LW9yZGVyIGNhc2UpXG4gKiAtIG51bGw6IGV4ZWN1dGUgaG9va3Mgb25seSBmcm9tIHRoZSBzYXZlZCBpbmRleCB1bnRpbCB0aGUgZW5kIG9mIHRoZSBhcnJheSAocHJlLW9yZGVyIGNhc2UsIHdoZW5cbiAqIGZsdXNoaW5nIHRoZSByZW1haW5pbmcgaG9va3MpXG4gKiAtIG51bWJlcjogZXhlY3V0ZSBob29rcyBvbmx5IGZyb20gdGhlIHNhdmVkIGluZGV4IHVudGlsIHRoYXQgbm9kZSBpbmRleCBleGNsdXNpdmUgKHByZS1vcmRlclxuICogY2FzZSwgd2hlbiBleGVjdXRpbmcgc2VsZWN0KG51bWJlcikpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlQ2hlY2tIb29rcyhsVmlldzogTFZpZXcsIGhvb2tzOiBIb29rRGF0YSwgbm9kZUluZGV4PzogbnVtYmVyfG51bGwpIHtcbiAgY2FsbEhvb2tzKGxWaWV3LCBob29rcywgSW5pdFBoYXNlU3RhdGUuSW5pdFBoYXNlQ29tcGxldGVkLCBub2RlSW5kZXgpO1xufVxuXG4vKipcbiAqIEV4ZWN1dGVzIHBvc3Qtb3JkZXIgaW5pdCBhbmQgY2hlY2sgaG9va3MgKG9uZSBvZiBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLFxuICogQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCkgZ2l2ZW4gYSB2aWV3IHdoZXJlIHRoZXJlIGFyZSBwZW5kaW5nIGluaXQgaG9va3MgdG8gYmUgZXhlY3V0ZWQuXG4gKiBAcGFyYW0gbFZpZXcgVGhlIExWaWV3IHdoZXJlIGhvb2tzIGFyZSBkZWZpbmVkXG4gKiBAcGFyYW0gaG9va3MgSG9va3MgdG8gYmUgcnVuXG4gKiBAcGFyYW0gaW5pdFBoYXNlIEEgcGhhc2UgZm9yIHdoaWNoIGhvb2tzIHNob3VsZCBiZSBydW5cbiAqIEBwYXJhbSBub2RlSW5kZXggMyBjYXNlcyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlOlxuICogLSB1bmRlZmluZWQ6IGFsbCBob29rcyBmcm9tIHRoZSBhcnJheSBzaG91bGQgYmUgZXhlY3V0ZWQgKHBvc3Qtb3JkZXIgY2FzZSlcbiAqIC0gbnVsbDogZXhlY3V0ZSBob29rcyBvbmx5IGZyb20gdGhlIHNhdmVkIGluZGV4IHVudGlsIHRoZSBlbmQgb2YgdGhlIGFycmF5IChwcmUtb3JkZXIgY2FzZSwgd2hlblxuICogZmx1c2hpbmcgdGhlIHJlbWFpbmluZyBob29rcylcbiAqIC0gbnVtYmVyOiBleGVjdXRlIGhvb2tzIG9ubHkgZnJvbSB0aGUgc2F2ZWQgaW5kZXggdW50aWwgdGhhdCBub2RlIGluZGV4IGV4Y2x1c2l2ZSAocHJlLW9yZGVyXG4gKiBjYXNlLCB3aGVuIGV4ZWN1dGluZyBzZWxlY3QobnVtYmVyKSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVJbml0QW5kQ2hlY2tIb29rcyhcbiAgICBsVmlldzogTFZpZXcsIGhvb2tzOiBIb29rRGF0YSwgaW5pdFBoYXNlOiBJbml0UGhhc2VTdGF0ZSwgbm9kZUluZGV4PzogbnVtYmVyfG51bGwpIHtcbiAgbmdEZXZNb2RlICYmXG4gICAgICBhc3NlcnROb3RFcXVhbChcbiAgICAgICAgICBpbml0UGhhc2UsIEluaXRQaGFzZVN0YXRlLkluaXRQaGFzZUNvbXBsZXRlZCxcbiAgICAgICAgICAnSW5pdCBwcmUtb3JkZXIgaG9va3Mgc2hvdWxkIG5vdCBiZSBjYWxsZWQgbW9yZSB0aGFuIG9uY2UnKTtcbiAgaWYgKChsVmlld1tGTEFHU10gJiBMVmlld0ZsYWdzLkluaXRQaGFzZVN0YXRlTWFzaykgPT09IGluaXRQaGFzZSkge1xuICAgIGNhbGxIb29rcyhsVmlldywgaG9va3MsIGluaXRQaGFzZSwgbm9kZUluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50SW5pdFBoYXNlRmxhZ3MobFZpZXc6IExWaWV3LCBpbml0UGhhc2U6IEluaXRQaGFzZVN0YXRlKTogdm9pZCB7XG4gIG5nRGV2TW9kZSAmJlxuICAgICAgYXNzZXJ0Tm90RXF1YWwoXG4gICAgICAgICAgaW5pdFBoYXNlLCBJbml0UGhhc2VTdGF0ZS5Jbml0UGhhc2VDb21wbGV0ZWQsXG4gICAgICAgICAgJ0luaXQgaG9va3MgcGhhc2Ugc2hvdWxkIG5vdCBiZSBpbmNyZW1lbnRlZCBhZnRlciBhbGwgaW5pdCBob29rcyBoYXZlIGJlZW4gcnVuLicpO1xuICBsZXQgZmxhZ3MgPSBsVmlld1tGTEFHU107XG4gIGlmICgoZmxhZ3MgJiBMVmlld0ZsYWdzLkluaXRQaGFzZVN0YXRlTWFzaykgPT09IGluaXRQaGFzZSkge1xuICAgIGZsYWdzICY9IExWaWV3RmxhZ3MuSW5kZXhXaXRoaW5Jbml0UGhhc2VSZXNldDtcbiAgICBmbGFncyArPSBMVmlld0ZsYWdzLkluaXRQaGFzZVN0YXRlSW5jcmVtZW50ZXI7XG4gICAgbFZpZXdbRkxBR1NdID0gZmxhZ3M7XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxscyBsaWZlY3ljbGUgaG9va3Mgd2l0aCB0aGVpciBjb250ZXh0cywgc2tpcHBpbmcgaW5pdCBob29rcyBpZiBpdCdzIG5vdFxuICogdGhlIGZpcnN0IExWaWV3IHBhc3NcbiAqXG4gKiBAcGFyYW0gY3VycmVudFZpZXcgVGhlIGN1cnJlbnQgdmlld1xuICogQHBhcmFtIGFyciBUaGUgYXJyYXkgaW4gd2hpY2ggdGhlIGhvb2tzIGFyZSBmb3VuZFxuICogQHBhcmFtIGluaXRQaGFzZVN0YXRlIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBpbml0IHBoYXNlXG4gKiBAcGFyYW0gY3VycmVudE5vZGVJbmRleCAzIGNhc2VzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWU6XG4gKiAtIHVuZGVmaW5lZDogYWxsIGhvb2tzIGZyb20gdGhlIGFycmF5IHNob3VsZCBiZSBleGVjdXRlZCAocG9zdC1vcmRlciBjYXNlKVxuICogLSBudWxsOiBleGVjdXRlIGhvb2tzIG9ubHkgZnJvbSB0aGUgc2F2ZWQgaW5kZXggdW50aWwgdGhlIGVuZCBvZiB0aGUgYXJyYXkgKHByZS1vcmRlciBjYXNlLCB3aGVuXG4gKiBmbHVzaGluZyB0aGUgcmVtYWluaW5nIGhvb2tzKVxuICogLSBudW1iZXI6IGV4ZWN1dGUgaG9va3Mgb25seSBmcm9tIHRoZSBzYXZlZCBpbmRleCB1bnRpbCB0aGF0IG5vZGUgaW5kZXggZXhjbHVzaXZlIChwcmUtb3JkZXJcbiAqIGNhc2UsIHdoZW4gZXhlY3V0aW5nIHNlbGVjdChudW1iZXIpKVxuICovXG5mdW5jdGlvbiBjYWxsSG9va3MoXG4gICAgY3VycmVudFZpZXc6IExWaWV3LCBhcnI6IEhvb2tEYXRhLCBpbml0UGhhc2U6IEluaXRQaGFzZVN0YXRlLFxuICAgIGN1cnJlbnROb2RlSW5kZXg6IG51bWJlcnxudWxsfHVuZGVmaW5lZCk6IHZvaWQge1xuICBuZ0Rldk1vZGUgJiZcbiAgICAgIGFzc2VydEVxdWFsKFxuICAgICAgICAgIGdldENoZWNrTm9DaGFuZ2VzTW9kZSgpLCBmYWxzZSxcbiAgICAgICAgICAnSG9va3Mgc2hvdWxkIG5ldmVyIGJlIHJ1biBpbiB0aGUgY2hlY2sgbm8gY2hhbmdlcyBtb2RlLicpO1xuICBjb25zdCBzdGFydEluZGV4ID0gY3VycmVudE5vZGVJbmRleCAhPT0gdW5kZWZpbmVkID9cbiAgICAgIChjdXJyZW50Vmlld1tQUkVPUkRFUl9IT09LX0ZMQUdTXSAmIFByZU9yZGVySG9va0ZsYWdzLkluZGV4T2ZUaGVOZXh0UHJlT3JkZXJIb29rTWFza01hc2spIDpcbiAgICAgIDA7XG4gIGNvbnN0IG5vZGVJbmRleExpbWl0ID0gY3VycmVudE5vZGVJbmRleCAhPSBudWxsID8gY3VycmVudE5vZGVJbmRleCA6IC0xO1xuICBsZXQgbGFzdE5vZGVJbmRleEZvdW5kID0gMDtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBob29rID0gYXJyW2kgKyAxXSBhcyAoKSA9PiB2b2lkO1xuICAgIGlmICh0eXBlb2YgaG9vayA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxhc3ROb2RlSW5kZXhGb3VuZCA9IGFycltpXSBhcyBudW1iZXI7XG4gICAgICBpZiAoY3VycmVudE5vZGVJbmRleCAhPSBudWxsICYmIGxhc3ROb2RlSW5kZXhGb3VuZCA+PSBjdXJyZW50Tm9kZUluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpc0luaXRIb29rID0gYXJyW2ldIDwgMDtcbiAgICAgIGlmIChpc0luaXRIb29rKVxuICAgICAgICBjdXJyZW50Vmlld1tQUkVPUkRFUl9IT09LX0ZMQUdTXSArPSBQcmVPcmRlckhvb2tGbGFncy5OdW1iZXJPZkluaXRIb29rc0NhbGxlZEluY3JlbWVudGVyO1xuICAgICAgaWYgKGxhc3ROb2RlSW5kZXhGb3VuZCA8IG5vZGVJbmRleExpbWl0IHx8IG5vZGVJbmRleExpbWl0ID09IC0xKSB7XG4gICAgICAgIGNhbGxIb29rKGN1cnJlbnRWaWV3LCBpbml0UGhhc2UsIGFyciwgaSk7XG4gICAgICAgIGN1cnJlbnRWaWV3W1BSRU9SREVSX0hPT0tfRkxBR1NdID1cbiAgICAgICAgICAgIChjdXJyZW50Vmlld1tQUkVPUkRFUl9IT09LX0ZMQUdTXSAmIFByZU9yZGVySG9va0ZsYWdzLk51bWJlck9mSW5pdEhvb2tzQ2FsbGVkTWFzaykgKyBpICtcbiAgICAgICAgICAgIDI7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXhlY3V0ZSBvbmUgaG9vayBhZ2FpbnN0IHRoZSBjdXJyZW50IGBMVmlld2AuXG4gKlxuICogQHBhcmFtIGN1cnJlbnRWaWV3IFRoZSBjdXJyZW50IHZpZXdcbiAqIEBwYXJhbSBpbml0UGhhc2VTdGF0ZSB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgaW5pdCBwaGFzZVxuICogQHBhcmFtIGFyciBUaGUgYXJyYXkgaW4gd2hpY2ggdGhlIGhvb2tzIGFyZSBmb3VuZFxuICogQHBhcmFtIGkgVGhlIGN1cnJlbnQgaW5kZXggd2l0aGluIHRoZSBob29rIGRhdGEgYXJyYXlcbiAqL1xuZnVuY3Rpb24gY2FsbEhvb2soY3VycmVudFZpZXc6IExWaWV3LCBpbml0UGhhc2U6IEluaXRQaGFzZVN0YXRlLCBhcnI6IEhvb2tEYXRhLCBpOiBudW1iZXIpIHtcbiAgY29uc3QgaXNJbml0SG9vayA9IGFycltpXSA8IDA7XG4gIGNvbnN0IGhvb2sgPSBhcnJbaSArIDFdIGFzICgpID0+IHZvaWQ7XG4gIGNvbnN0IGRpcmVjdGl2ZUluZGV4ID0gaXNJbml0SG9vayA/IC1hcnJbaV0gOiBhcnJbaV0gYXMgbnVtYmVyO1xuICBjb25zdCBkaXJlY3RpdmUgPSBjdXJyZW50Vmlld1tkaXJlY3RpdmVJbmRleF07XG4gIGlmIChpc0luaXRIb29rKSB7XG4gICAgY29uc3QgaW5kZXhXaXRoaW50SW5pdFBoYXNlID0gY3VycmVudFZpZXdbRkxBR1NdID4+IExWaWV3RmxhZ3MuSW5kZXhXaXRoaW5Jbml0UGhhc2VTaGlmdDtcbiAgICAvLyBUaGUgaW5pdCBwaGFzZSBzdGF0ZSBtdXN0IGJlIGFsd2F5cyBjaGVja2VkIGhlcmUgYXMgaXQgbWF5IGhhdmUgYmVlbiByZWN1cnNpdmVseVxuICAgIC8vIHVwZGF0ZWRcbiAgICBpZiAoaW5kZXhXaXRoaW50SW5pdFBoYXNlIDxcbiAgICAgICAgICAgIChjdXJyZW50Vmlld1tQUkVPUkRFUl9IT09LX0ZMQUdTXSA+PiBQcmVPcmRlckhvb2tGbGFncy5OdW1iZXJPZkluaXRIb29rc0NhbGxlZFNoaWZ0KSAmJlxuICAgICAgICAoY3VycmVudFZpZXdbRkxBR1NdICYgTFZpZXdGbGFncy5Jbml0UGhhc2VTdGF0ZU1hc2spID09PSBpbml0UGhhc2UpIHtcbiAgICAgIGN1cnJlbnRWaWV3W0ZMQUdTXSArPSBMVmlld0ZsYWdzLkluZGV4V2l0aGluSW5pdFBoYXNlSW5jcmVtZW50ZXI7XG4gICAgICBob29rLmNhbGwoZGlyZWN0aXZlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaG9vay5jYWxsKGRpcmVjdGl2ZSk7XG4gIH1cbn1cbiJdfQ==