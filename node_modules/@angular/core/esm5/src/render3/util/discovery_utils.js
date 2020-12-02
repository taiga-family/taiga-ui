/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread } from "tslib";
import { Injector } from '../../di/injector';
import { assertLView } from '../assert';
import { discoverLocalRefs, getComponentAtNodeIndex, getDirectivesAtNodeIndex, getLContext } from '../context_discovery';
import { NodeInjector } from '../di';
import { buildDebugNode } from '../instructions/lview_debug';
import { isLView } from '../interfaces/type_checks';
import { CLEANUP, CONTEXT, FLAGS, HEADER_OFFSET, HOST, T_HOST, TVIEW } from '../interfaces/view';
import { stringifyForError } from './misc_utils';
import { getLViewParent, getRootContext } from './view_traversal_utils';
import { getTNode, unwrapRNode } from './view_utils';
/**
 * Retrieves the component instance associated with a given DOM element.
 *
 * @usageNotes
 * Given the following DOM structure:
 * ```html
 * <my-app>
 *   <div>
 *     <child-comp></child-comp>
 *   </div>
 * </my-app>
 * ```
 * Calling `getComponent` on `<child-comp>` will return the instance of `ChildComponent`
 * associated with this DOM element.
 *
 * Calling the function on `<my-app>` will return the `MyApp` instance.
 *
 *
 * @param element DOM element from which the component should be retrieved.
 * @returns Component instance associated with the element or `null` if there
 *    is no component associated with it.
 *
 * @publicApi
 * @globalApi ng
 */
export function getComponent(element) {
    assertDomElement(element);
    var context = loadLContext(element, false);
    if (context === null)
        return null;
    if (context.component === undefined) {
        context.component = getComponentAtNodeIndex(context.nodeIndex, context.lView);
    }
    return context.component;
}
/**
 * If inside an embedded view (e.g. `*ngIf` or `*ngFor`), retrieves the context of the embedded
 * view that the element is part of. Otherwise retrieves the instance of the component whose view
 * owns the element (in this case, the result is the same as calling `getOwningComponent`).
 *
 * @param element Element for which to get the surrounding component instance.
 * @returns Instance of the component that is around the element or null if the element isn't
 *    inside any component.
 *
 * @publicApi
 * @globalApi ng
 */
export function getContext(element) {
    assertDomElement(element);
    var context = loadLContext(element, false);
    return context === null ? null : context.lView[CONTEXT];
}
/**
 * Retrieves the component instance whose view contains the DOM element.
 *
 * For example, if `<child-comp>` is used in the template of `<app-comp>`
 * (i.e. a `ViewChild` of `<app-comp>`), calling `getOwningComponent` on `<child-comp>`
 * would return `<app-comp>`.
 *
 * @param elementOrDir DOM element, component or directive instance
 *    for which to retrieve the root components.
 * @returns Component instance whose view owns the DOM element or null if the element is not
 *    part of a component view.
 *
 * @publicApi
 * @globalApi ng
 */
export function getOwningComponent(elementOrDir) {
    var context = loadLContext(elementOrDir, false);
    if (context === null)
        return null;
    var lView = context.lView;
    var parent;
    ngDevMode && assertLView(lView);
    while (lView[HOST] === null && (parent = getLViewParent(lView))) {
        // As long as lView[HOST] is null we know we are part of sub-template such as `*ngIf`
        lView = parent;
    }
    return lView[FLAGS] & 512 /* IsRoot */ ? null : lView[CONTEXT];
}
/**
 * Retrieves all root components associated with a DOM element, directive or component instance.
 * Root components are those which have been bootstrapped by Angular.
 *
 * @param elementOrDir DOM element, component or directive instance
 *    for which to retrieve the root components.
 * @returns Root components associated with the target object.
 *
 * @publicApi
 * @globalApi ng
 */
export function getRootComponents(elementOrDir) {
    return __spread(getRootContext(elementOrDir).components);
}
/**
 * Retrieves an `Injector` associated with an element, component or directive instance.
 *
 * @param elementOrDir DOM element, component or directive instance for which to
 *    retrieve the injector.
 * @returns Injector associated with the element, component or directive instance.
 *
 * @publicApi
 * @globalApi ng
 */
export function getInjector(elementOrDir) {
    var context = loadLContext(elementOrDir, false);
    if (context === null)
        return Injector.NULL;
    var tNode = context.lView[TVIEW].data[context.nodeIndex];
    return new NodeInjector(tNode, context.lView);
}
/**
 * Retrieve a set of injection tokens at a given DOM node.
 *
 * @param element Element for which the injection tokens should be retrieved.
 */
export function getInjectionTokens(element) {
    var context = loadLContext(element, false);
    if (context === null)
        return [];
    var lView = context.lView;
    var tView = lView[TVIEW];
    var tNode = tView.data[context.nodeIndex];
    var providerTokens = [];
    var startIndex = tNode.providerIndexes & 65535 /* ProvidersStartIndexMask */;
    var endIndex = tNode.directiveEnd;
    for (var i = startIndex; i < endIndex; i++) {
        var value = tView.data[i];
        if (isDirectiveDefHack(value)) {
            // The fact that we sometimes store Type and sometimes DirectiveDef in this location is a
            // design flaw.  We should always store same type so that we can be monomorphic. The issue
            // is that for Components/Directives we store the def instead the type. The correct behavior
            // is that we should always be storing injectable type in this location.
            value = value.type;
        }
        providerTokens.push(value);
    }
    return providerTokens;
}
/**
 * Retrieves directive instances associated with a given DOM element. Does not include
 * component instances.
 *
 * @usageNotes
 * Given the following DOM structure:
 * ```
 * <my-app>
 *   <button my-button></button>
 *   <my-comp></my-comp>
 * </my-app>
 * ```
 * Calling `getDirectives` on `<button>` will return an array with an instance of the `MyButton`
 * directive that is associated with the DOM element.
 *
 * Calling `getDirectives` on `<my-comp>` will return an empty array.
 *
 * @param element DOM element for which to get the directives.
 * @returns Array of directives associated with the element.
 *
 * @publicApi
 * @globalApi ng
 */
export function getDirectives(element) {
    var context = loadLContext(element);
    if (context.directives === undefined) {
        context.directives = getDirectivesAtNodeIndex(context.nodeIndex, context.lView, false);
    }
    // The `directives` in this case are a named array called `LComponentView`. Clone the
    // result so we don't expose an internal data structure in the user's console.
    return context.directives === null ? [] : __spread(context.directives);
}
export function loadLContext(target, throwOnNotFound) {
    if (throwOnNotFound === void 0) { throwOnNotFound = true; }
    var context = getLContext(target);
    if (!context && throwOnNotFound) {
        throw new Error(ngDevMode ? "Unable to find context associated with " + stringifyForError(target) :
            'Invalid ng target');
    }
    return context;
}
/**
 * Retrieve map of local references.
 *
 * The references are retrieved as a map of local reference name to element or directive instance.
 *
 * @param target DOM element, component or directive instance for which to retrieve
 *    the local references.
 */
export function getLocalRefs(target) {
    var context = loadLContext(target, false);
    if (context === null)
        return {};
    if (context.localRefs === undefined) {
        context.localRefs = discoverLocalRefs(context.lView, context.nodeIndex);
    }
    return context.localRefs || {};
}
/**
 * Retrieves the host element of a component or directive instance.
 * The host element is the DOM element that matched the selector of the directive.
 *
 * @param componentOrDirective Component or directive instance for which the host
 *     element should be retrieved.
 * @returns Host element of the target.
 *
 * @publicApi
 * @globalApi ng
 */
export function getHostElement(componentOrDirective) {
    return getLContext(componentOrDirective).native;
}
/**
 * Retrieves the rendered text for a given component.
 *
 * This function retrieves the host element of a component and
 * and then returns the `textContent` for that element. This implies
 * that the text returned will include re-projected content of
 * the component as well.
 *
 * @param component The component to return the content text for.
 */
export function getRenderedText(component) {
    var hostElement = getHostElement(component);
    return hostElement.textContent || '';
}
export function loadLContextFromNode(node) {
    if (!(node instanceof Node))
        throw new Error('Expecting instance of DOM Element');
    return loadLContext(node);
}
/**
 * Retrieves a list of event listeners associated with a DOM element. The list does include host
 * listeners, but it does not include event listeners defined outside of the Angular context
 * (e.g. through `addEventListener`).
 *
 * @usageNotes
 * Given the following DOM structure:
 * ```
 * <my-app>
 *   <div (click)="doSomething()"></div>
 * </my-app>
 *
 * ```
 * Calling `getListeners` on `<div>` will return an object that looks as follows:
 * ```
 * {
 *   name: 'click',
 *   element: <div>,
 *   callback: () => doSomething(),
 *   useCapture: false
 * }
 * ```
 *
 * @param element Element for which the DOM listeners should be retrieved.
 * @returns Array of event listeners on the DOM element.
 *
 * @publicApi
 * @globalApi ng
 */
export function getListeners(element) {
    assertDomElement(element);
    var lContext = loadLContext(element, false);
    if (lContext === null)
        return [];
    var lView = lContext.lView;
    var tView = lView[TVIEW];
    var lCleanup = lView[CLEANUP];
    var tCleanup = tView.cleanup;
    var listeners = [];
    if (tCleanup && lCleanup) {
        for (var i = 0; i < tCleanup.length;) {
            var firstParam = tCleanup[i++];
            var secondParam = tCleanup[i++];
            if (typeof firstParam === 'string') {
                var name_1 = firstParam;
                var listenerElement = unwrapRNode(lView[secondParam]);
                var callback = lCleanup[tCleanup[i++]];
                var useCaptureOrIndx = tCleanup[i++];
                // if useCaptureOrIndx is boolean then report it as is.
                // if useCaptureOrIndx is positive number then it in unsubscribe method
                // if useCaptureOrIndx is negative number then it is a Subscription
                var type = (typeof useCaptureOrIndx === 'boolean' || useCaptureOrIndx >= 0) ? 'dom' : 'output';
                var useCapture = typeof useCaptureOrIndx === 'boolean' ? useCaptureOrIndx : false;
                if (element == listenerElement) {
                    listeners.push({ element: element, name: name_1, callback: callback, useCapture: useCapture, type: type });
                }
            }
        }
    }
    listeners.sort(sortListeners);
    return listeners;
}
function sortListeners(a, b) {
    if (a.name == b.name)
        return 0;
    return a.name < b.name ? -1 : 1;
}
/**
 * This function should not exist because it is megamorphic and only mostly correct.
 *
 * See call site for more info.
 */
function isDirectiveDefHack(obj) {
    return obj.type !== undefined && obj.template !== undefined && obj.declaredInputs !== undefined;
}
/**
 * Returns the attached `DebugNode` instance for an element in the DOM.
 *
 * @param element DOM element which is owned by an existing component's view.
 */
export function getDebugNode(element) {
    var debugNode = null;
    var lContext = loadLContextFromNode(element);
    var lView = lContext.lView;
    var nodeIndex = lContext.nodeIndex;
    if (nodeIndex !== -1) {
        var valueInLView = lView[nodeIndex];
        // this means that value in the lView is a component with its own
        // data. In this situation the TNode is not accessed at the same spot.
        var tNode = isLView(valueInLView) ? valueInLView[T_HOST] :
            getTNode(lView[TVIEW], nodeIndex - HEADER_OFFSET);
        debugNode = buildDebugNode(tNode, lView, nodeIndex);
    }
    return debugNode;
}
/**
 * Retrieve the component `LView` from component/element.
 *
 * NOTE: `LView` is a private and should not be leaked outside.
 *       Don't export this method to `ng.*` on window.
 *
 * @param target DOM element or component instance for which to retrieve the LView.
 */
export function getComponentLView(target) {
    var lContext = loadLContext(target);
    var nodeIndx = lContext.nodeIndex;
    var lView = lContext.lView;
    var componentLView = lView[nodeIndx];
    ngDevMode && assertLView(componentLView);
    return componentLView;
}
/** Asserts that a value is a DOM Element. */
function assertDomElement(value) {
    if (typeof Element !== 'undefined' && !(value instanceof Element)) {
        throw new Error('Expecting instance of DOM Element');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY292ZXJ5X3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy91dGlsL2Rpc2NvdmVyeV91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDbkMsT0FBTyxFQUFDLGNBQWMsRUFBWSxNQUFNLDZCQUE2QixDQUFDO0FBSXRFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBcUIsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWxILE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUMsY0FBYyxFQUFFLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBSW5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFJLE9BQWdCO0lBQzlDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLElBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsSUFBSSxP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QUM7S0FDdEQ7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdG9yfSBmcm9tICcuLi8uLi9kaS9pbmplY3Rvcic7XG5pbXBvcnQge2Fzc2VydExWaWV3fSBmcm9tICcuLi9hc3NlcnQnO1xuaW1wb3J0IHtkaXNjb3ZlckxvY2FsUmVmcywgZ2V0Q29tcG9uZW50QXROb2RlSW5kZXgsIGdldERpcmVjdGl2ZXNBdE5vZGVJbmRleCwgZ2V0TENvbnRleHR9IGZyb20gJy4uL2NvbnRleHRfZGlzY292ZXJ5JztcbmltcG9ydCB7Tm9kZUluamVjdG9yfSBmcm9tICcuLi9kaSc7XG5pbXBvcnQge2J1aWxkRGVidWdOb2RlLCBEZWJ1Z05vZGV9IGZyb20gJy4uL2luc3RydWN0aW9ucy9sdmlld19kZWJ1Zyc7XG5pbXBvcnQge0xDb250ZXh0fSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbnRleHQnO1xuaW1wb3J0IHtEaXJlY3RpdmVEZWZ9IGZyb20gJy4uL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5pbXBvcnQge1RFbGVtZW50Tm9kZSwgVE5vZGUsIFROb2RlUHJvdmlkZXJJbmRleGVzfSBmcm9tICcuLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtpc0xWaWV3fSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGVfY2hlY2tzJztcbmltcG9ydCB7Q0xFQU5VUCwgQ09OVEVYVCwgRkxBR1MsIEhFQURFUl9PRkZTRVQsIEhPU1QsIExWaWV3LCBMVmlld0ZsYWdzLCBUX0hPU1QsIFRWSUVXfSBmcm9tICcuLi9pbnRlcmZhY2VzL3ZpZXcnO1xuXG5pbXBvcnQge3N0cmluZ2lmeUZvckVycm9yfSBmcm9tICcuL21pc2NfdXRpbHMnO1xuaW1wb3J0IHtnZXRMVmlld1BhcmVudCwgZ2V0Um9vdENvbnRleHR9IGZyb20gJy4vdmlld190cmF2ZXJzYWxfdXRpbHMnO1xuaW1wb3J0IHtnZXRUTm9kZSwgdW53cmFwUk5vZGV9IGZyb20gJy4vdmlld191dGlscyc7XG5cblxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY29tcG9uZW50IGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIERPTSBlbGVtZW50LlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIERPTSBzdHJ1Y3R1cmU6XG4gKiBgYGBodG1sXG4gKiA8bXktYXBwPlxuICogICA8ZGl2PlxuICogICAgIDxjaGlsZC1jb21wPjwvY2hpbGQtY29tcD5cbiAqICAgPC9kaXY+XG4gKiA8L215LWFwcD5cbiAqIGBgYFxuICogQ2FsbGluZyBgZ2V0Q29tcG9uZW50YCBvbiBgPGNoaWxkLWNvbXA+YCB3aWxsIHJldHVybiB0aGUgaW5zdGFuY2Ugb2YgYENoaWxkQ29tcG9uZW50YFxuICogYXNzb2NpYXRlZCB3aXRoIHRoaXMgRE9NIGVsZW1lbnQuXG4gKlxuICogQ2FsbGluZyB0aGUgZnVuY3Rpb24gb24gYDxteS1hcHA+YCB3aWxsIHJldHVybiB0aGUgYE15QXBwYCBpbnN0YW5jZS5cbiAqXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgRE9NIGVsZW1lbnQgZnJvbSB3aGljaCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSByZXRyaWV2ZWQuXG4gKiBAcmV0dXJucyBDb21wb25lbnQgaW5zdGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50IG9yIGBudWxsYCBpZiB0aGVyZVxuICogICAgaXMgbm8gY29tcG9uZW50IGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZ2xvYmFsQXBpIG5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wb25lbnQ8VD4oZWxlbWVudDogRWxlbWVudCk6IFR8bnVsbCB7XG4gIGFzc2VydERvbUVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IGNvbnRleHQgPSBsb2FkTENvbnRleHQoZWxlbWVudCwgZmFsc2UpO1xuICBpZiAoY29udGV4dCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKGNvbnRleHQuY29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0LmNvbXBvbmVudCA9IGdldENvbXBvbmVudEF0Tm9kZUluZGV4KGNvbnRleHQubm9kZUluZGV4LCBjb250ZXh0LmxWaWV3KTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0LmNvbXBvbmVudCBhcyBUO1xufVxuXG5cbi8qKlxuICogSWYgaW5zaWRlIGFuIGVtYmVkZGVkIHZpZXcgKGUuZy4gYCpuZ0lmYCBvciBgKm5nRm9yYCksIHJldHJpZXZlcyB0aGUgY29udGV4dCBvZiB0aGUgZW1iZWRkZWRcbiAqIHZpZXcgdGhhdCB0aGUgZWxlbWVudCBpcyBwYXJ0IG9mLiBPdGhlcndpc2UgcmV0cmlldmVzIHRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IHdob3NlIHZpZXdcbiAqIG93bnMgdGhlIGVsZW1lbnQgKGluIHRoaXMgY2FzZSwgdGhlIHJlc3VsdCBpcyB0aGUgc2FtZSBhcyBjYWxsaW5nIGBnZXRPd25pbmdDb21wb25lbnRgKS5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IGZvciB3aGljaCB0byBnZXQgdGhlIHN1cnJvdW5kaW5nIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAqIEByZXR1cm5zIEluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgdGhhdCBpcyBhcm91bmQgdGhlIGVsZW1lbnQgb3IgbnVsbCBpZiB0aGUgZWxlbWVudCBpc24ndFxuICogICAgaW5zaWRlIGFueSBjb21wb25lbnQuXG4gKlxuICogQHB1YmxpY0FwaVxuICogQGdsb2JhbEFwaSBuZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dDxUPihlbGVtZW50OiBFbGVtZW50KTogVHxudWxsIHtcbiAgYXNzZXJ0RG9tRWxlbWVudChlbGVtZW50KTtcbiAgY29uc3QgY29udGV4dCA9IGxvYWRMQ29udGV4dChlbGVtZW50LCBmYWxzZSk7XG4gIHJldHVybiBjb250ZXh0ID09PSBudWxsID8gbnVsbCA6IGNvbnRleHQubFZpZXdbQ09OVEVYVF0gYXMgVDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aG9zZSB2aWV3IGNvbnRhaW5zIHRoZSBET00gZWxlbWVudC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaWYgYDxjaGlsZC1jb21wPmAgaXMgdXNlZCBpbiB0aGUgdGVtcGxhdGUgb2YgYDxhcHAtY29tcD5gXG4gKiAoaS5lLiBhIGBWaWV3Q2hpbGRgIG9mIGA8YXBwLWNvbXA+YCksIGNhbGxpbmcgYGdldE93bmluZ0NvbXBvbmVudGAgb24gYDxjaGlsZC1jb21wPmBcbiAqIHdvdWxkIHJldHVybiBgPGFwcC1jb21wPmAuXG4gKlxuICogQHBhcmFtIGVsZW1lbnRPckRpciBET00gZWxlbWVudCwgY29tcG9uZW50IG9yIGRpcmVjdGl2ZSBpbnN0YW5jZVxuICogICAgZm9yIHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb290IGNvbXBvbmVudHMuXG4gKiBAcmV0dXJucyBDb21wb25lbnQgaW5zdGFuY2Ugd2hvc2UgdmlldyBvd25zIHRoZSBET00gZWxlbWVudCBvciBudWxsIGlmIHRoZSBlbGVtZW50IGlzIG5vdFxuICogICAgcGFydCBvZiBhIGNvbXBvbmVudCB2aWV3LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqIEBnbG9iYWxBcGkgbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE93bmluZ0NvbXBvbmVudDxUPihlbGVtZW50T3JEaXI6IEVsZW1lbnR8e30pOiBUfG51bGwge1xuICBjb25zdCBjb250ZXh0ID0gbG9hZExDb250ZXh0KGVsZW1lbnRPckRpciwgZmFsc2UpO1xuICBpZiAoY29udGV4dCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IGxWaWV3ID0gY29udGV4dC5sVmlldztcbiAgbGV0IHBhcmVudDogTFZpZXd8bnVsbDtcbiAgbmdEZXZNb2RlICYmIGFzc2VydExWaWV3KGxWaWV3KTtcbiAgd2hpbGUgKGxWaWV3W0hPU1RdID09PSBudWxsICYmIChwYXJlbnQgPSBnZXRMVmlld1BhcmVudChsVmlldykhKSkge1xuICAgIC8vIEFzIGxvbmcgYXMgbFZpZXdbSE9TVF0gaXMgbnVsbCB3ZSBrbm93IHdlIGFyZSBwYXJ0IG9mIHN1Yi10ZW1wbGF0ZSBzdWNoIGFzIGAqbmdJZmBcbiAgICBsVmlldyA9IHBhcmVudDtcbiAgfVxuICByZXR1cm4gbFZpZXdbRkxBR1NdICYgTFZpZXdGbGFncy5Jc1Jvb3QgPyBudWxsIDogbFZpZXdbQ09OVEVYVF0gYXMgVDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIHJvb3QgY29tcG9uZW50cyBhc3NvY2lhdGVkIHdpdGggYSBET00gZWxlbWVudCwgZGlyZWN0aXZlIG9yIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAqIFJvb3QgY29tcG9uZW50cyBhcmUgdGhvc2Ugd2hpY2ggaGF2ZSBiZWVuIGJvb3RzdHJhcHBlZCBieSBBbmd1bGFyLlxuICpcbiAqIEBwYXJhbSBlbGVtZW50T3JEaXIgRE9NIGVsZW1lbnQsIGNvbXBvbmVudCBvciBkaXJlY3RpdmUgaW5zdGFuY2VcbiAqICAgIGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgcm9vdCBjb21wb25lbnRzLlxuICogQHJldHVybnMgUm9vdCBjb21wb25lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdGFyZ2V0IG9iamVjdC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZ2xvYmFsQXBpIG5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290Q29tcG9uZW50cyhlbGVtZW50T3JEaXI6IEVsZW1lbnR8e30pOiB7fVtdIHtcbiAgcmV0dXJuIFsuLi5nZXRSb290Q29udGV4dChlbGVtZW50T3JEaXIpLmNvbXBvbmVudHNdO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbiBgSW5qZWN0b3JgIGFzc29jaWF0ZWQgd2l0aCBhbiBlbGVtZW50LCBjb21wb25lbnQgb3IgZGlyZWN0aXZlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSBlbGVtZW50T3JEaXIgRE9NIGVsZW1lbnQsIGNvbXBvbmVudCBvciBkaXJlY3RpdmUgaW5zdGFuY2UgZm9yIHdoaWNoIHRvXG4gKiAgICByZXRyaWV2ZSB0aGUgaW5qZWN0b3IuXG4gKiBAcmV0dXJucyBJbmplY3RvciBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnQsIGNvbXBvbmVudCBvciBkaXJlY3RpdmUgaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICogQGdsb2JhbEFwaSBuZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5qZWN0b3IoZWxlbWVudE9yRGlyOiBFbGVtZW50fHt9KTogSW5qZWN0b3Ige1xuICBjb25zdCBjb250ZXh0ID0gbG9hZExDb250ZXh0KGVsZW1lbnRPckRpciwgZmFsc2UpO1xuICBpZiAoY29udGV4dCA9PT0gbnVsbCkgcmV0dXJuIEluamVjdG9yLk5VTEw7XG5cbiAgY29uc3QgdE5vZGUgPSBjb250ZXh0LmxWaWV3W1RWSUVXXS5kYXRhW2NvbnRleHQubm9kZUluZGV4XSBhcyBURWxlbWVudE5vZGU7XG4gIHJldHVybiBuZXcgTm9kZUluamVjdG9yKHROb2RlLCBjb250ZXh0LmxWaWV3KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIHNldCBvZiBpbmplY3Rpb24gdG9rZW5zIGF0IGEgZ2l2ZW4gRE9NIG5vZGUuXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCBmb3Igd2hpY2ggdGhlIGluamVjdGlvbiB0b2tlbnMgc2hvdWxkIGJlIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluamVjdGlvblRva2VucyhlbGVtZW50OiBFbGVtZW50KTogYW55W10ge1xuICBjb25zdCBjb250ZXh0ID0gbG9hZExDb250ZXh0KGVsZW1lbnQsIGZhbHNlKTtcbiAgaWYgKGNvbnRleHQgPT09IG51bGwpIHJldHVybiBbXTtcbiAgY29uc3QgbFZpZXcgPSBjb250ZXh0LmxWaWV3O1xuICBjb25zdCB0VmlldyA9IGxWaWV3W1RWSUVXXTtcbiAgY29uc3QgdE5vZGUgPSB0Vmlldy5kYXRhW2NvbnRleHQubm9kZUluZGV4XSBhcyBUTm9kZTtcbiAgY29uc3QgcHJvdmlkZXJUb2tlbnM6IGFueVtdID0gW107XG4gIGNvbnN0IHN0YXJ0SW5kZXggPSB0Tm9kZS5wcm92aWRlckluZGV4ZXMgJiBUTm9kZVByb3ZpZGVySW5kZXhlcy5Qcm92aWRlcnNTdGFydEluZGV4TWFzaztcbiAgY29uc3QgZW5kSW5kZXggPSB0Tm9kZS5kaXJlY3RpdmVFbmQ7XG4gIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgIGxldCB2YWx1ZSA9IHRWaWV3LmRhdGFbaV07XG4gICAgaWYgKGlzRGlyZWN0aXZlRGVmSGFjayh2YWx1ZSkpIHtcbiAgICAgIC8vIFRoZSBmYWN0IHRoYXQgd2Ugc29tZXRpbWVzIHN0b3JlIFR5cGUgYW5kIHNvbWV0aW1lcyBEaXJlY3RpdmVEZWYgaW4gdGhpcyBsb2NhdGlvbiBpcyBhXG4gICAgICAvLyBkZXNpZ24gZmxhdy4gIFdlIHNob3VsZCBhbHdheXMgc3RvcmUgc2FtZSB0eXBlIHNvIHRoYXQgd2UgY2FuIGJlIG1vbm9tb3JwaGljLiBUaGUgaXNzdWVcbiAgICAgIC8vIGlzIHRoYXQgZm9yIENvbXBvbmVudHMvRGlyZWN0aXZlcyB3ZSBzdG9yZSB0aGUgZGVmIGluc3RlYWQgdGhlIHR5cGUuIFRoZSBjb3JyZWN0IGJlaGF2aW9yXG4gICAgICAvLyBpcyB0aGF0IHdlIHNob3VsZCBhbHdheXMgYmUgc3RvcmluZyBpbmplY3RhYmxlIHR5cGUgaW4gdGhpcyBsb2NhdGlvbi5cbiAgICAgIHZhbHVlID0gdmFsdWUudHlwZTtcbiAgICB9XG4gICAgcHJvdmlkZXJUb2tlbnMucHVzaCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3ZpZGVyVG9rZW5zO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBkaXJlY3RpdmUgaW5zdGFuY2VzIGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIERPTSBlbGVtZW50LiBEb2VzIG5vdCBpbmNsdWRlXG4gKiBjb21wb25lbnQgaW5zdGFuY2VzLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIERPTSBzdHJ1Y3R1cmU6XG4gKiBgYGBcbiAqIDxteS1hcHA+XG4gKiAgIDxidXR0b24gbXktYnV0dG9uPjwvYnV0dG9uPlxuICogICA8bXktY29tcD48L215LWNvbXA+XG4gKiA8L215LWFwcD5cbiAqIGBgYFxuICogQ2FsbGluZyBgZ2V0RGlyZWN0aXZlc2Agb24gYDxidXR0b24+YCB3aWxsIHJldHVybiBhbiBhcnJheSB3aXRoIGFuIGluc3RhbmNlIG9mIHRoZSBgTXlCdXR0b25gXG4gKiBkaXJlY3RpdmUgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIERPTSBlbGVtZW50LlxuICpcbiAqIENhbGxpbmcgYGdldERpcmVjdGl2ZXNgIG9uIGA8bXktY29tcD5gIHdpbGwgcmV0dXJuIGFuIGVtcHR5IGFycmF5LlxuICpcbiAqIEBwYXJhbSBlbGVtZW50IERPTSBlbGVtZW50IGZvciB3aGljaCB0byBnZXQgdGhlIGRpcmVjdGl2ZXMuXG4gKiBAcmV0dXJucyBBcnJheSBvZiBkaXJlY3RpdmVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZ2xvYmFsQXBpIG5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXJlY3RpdmVzKGVsZW1lbnQ6IEVsZW1lbnQpOiB7fVtdIHtcbiAgY29uc3QgY29udGV4dCA9IGxvYWRMQ29udGV4dChlbGVtZW50KSE7XG5cbiAgaWYgKGNvbnRleHQuZGlyZWN0aXZlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dC5kaXJlY3RpdmVzID0gZ2V0RGlyZWN0aXZlc0F0Tm9kZUluZGV4KGNvbnRleHQubm9kZUluZGV4LCBjb250ZXh0LmxWaWV3LCBmYWxzZSk7XG4gIH1cblxuICAvLyBUaGUgYGRpcmVjdGl2ZXNgIGluIHRoaXMgY2FzZSBhcmUgYSBuYW1lZCBhcnJheSBjYWxsZWQgYExDb21wb25lbnRWaWV3YC4gQ2xvbmUgdGhlXG4gIC8vIHJlc3VsdCBzbyB3ZSBkb24ndCBleHBvc2UgYW4gaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmUgaW4gdGhlIHVzZXIncyBjb25zb2xlLlxuICByZXR1cm4gY29udGV4dC5kaXJlY3RpdmVzID09PSBudWxsID8gW10gOiBbLi4uY29udGV4dC5kaXJlY3RpdmVzXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIExDb250ZXh0IGFzc29jaWF0ZWQgd2l0aCBhIHRhcmdldCBwYXNzZWQgYXMgYW4gYXJndW1lbnQuXG4gKiBUaHJvd3MgaWYgYSBnaXZlbiB0YXJnZXQgZG9lc24ndCBoYXZlIGFzc29jaWF0ZWQgTENvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTENvbnRleHQodGFyZ2V0OiB7fSk6IExDb250ZXh0O1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRMQ29udGV4dCh0YXJnZXQ6IHt9LCB0aHJvd09uTm90Rm91bmQ6IGZhbHNlKTogTENvbnRleHR8bnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTENvbnRleHQodGFyZ2V0OiB7fSwgdGhyb3dPbk5vdEZvdW5kOiBib29sZWFuID0gdHJ1ZSk6IExDb250ZXh0fG51bGwge1xuICBjb25zdCBjb250ZXh0ID0gZ2V0TENvbnRleHQodGFyZ2V0KTtcbiAgaWYgKCFjb250ZXh0ICYmIHRocm93T25Ob3RGb3VuZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgbmdEZXZNb2RlID8gYFVuYWJsZSB0byBmaW5kIGNvbnRleHQgYXNzb2NpYXRlZCB3aXRoICR7c3RyaW5naWZ5Rm9yRXJyb3IodGFyZ2V0KX1gIDpcbiAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgbmcgdGFyZ2V0Jyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qKlxuICogUmV0cmlldmUgbWFwIG9mIGxvY2FsIHJlZmVyZW5jZXMuXG4gKlxuICogVGhlIHJlZmVyZW5jZXMgYXJlIHJldHJpZXZlZCBhcyBhIG1hcCBvZiBsb2NhbCByZWZlcmVuY2UgbmFtZSB0byBlbGVtZW50IG9yIGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IERPTSBlbGVtZW50LCBjb21wb25lbnQgb3IgZGlyZWN0aXZlIGluc3RhbmNlIGZvciB3aGljaCB0byByZXRyaWV2ZVxuICogICAgdGhlIGxvY2FsIHJlZmVyZW5jZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFJlZnModGFyZ2V0OiB7fSk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgY29uc3QgY29udGV4dCA9IGxvYWRMQ29udGV4dCh0YXJnZXQsIGZhbHNlKTtcbiAgaWYgKGNvbnRleHQgPT09IG51bGwpIHJldHVybiB7fTtcblxuICBpZiAoY29udGV4dC5sb2NhbFJlZnMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQubG9jYWxSZWZzID0gZGlzY292ZXJMb2NhbFJlZnMoY29udGV4dC5sVmlldywgY29udGV4dC5ub2RlSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQubG9jYWxSZWZzIHx8IHt9O1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgaG9zdCBlbGVtZW50IG9mIGEgY29tcG9uZW50IG9yIGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAqIFRoZSBob3N0IGVsZW1lbnQgaXMgdGhlIERPTSBlbGVtZW50IHRoYXQgbWF0Y2hlZCB0aGUgc2VsZWN0b3Igb2YgdGhlIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50T3JEaXJlY3RpdmUgQ29tcG9uZW50IG9yIGRpcmVjdGl2ZSBpbnN0YW5jZSBmb3Igd2hpY2ggdGhlIGhvc3RcbiAqICAgICBlbGVtZW50IHNob3VsZCBiZSByZXRyaWV2ZWQuXG4gKiBAcmV0dXJucyBIb3N0IGVsZW1lbnQgb2YgdGhlIHRhcmdldC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZ2xvYmFsQXBpIG5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3N0RWxlbWVudChjb21wb25lbnRPckRpcmVjdGl2ZToge30pOiBFbGVtZW50IHtcbiAgcmV0dXJuIGdldExDb250ZXh0KGNvbXBvbmVudE9yRGlyZWN0aXZlKSEubmF0aXZlIGFzIG5ldmVyIGFzIEVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSByZW5kZXJlZCB0ZXh0IGZvciBhIGdpdmVuIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgaG9zdCBlbGVtZW50IG9mIGEgY29tcG9uZW50IGFuZFxuICogYW5kIHRoZW4gcmV0dXJucyB0aGUgYHRleHRDb250ZW50YCBmb3IgdGhhdCBlbGVtZW50LiBUaGlzIGltcGxpZXNcbiAqIHRoYXQgdGhlIHRleHQgcmV0dXJuZWQgd2lsbCBpbmNsdWRlIHJlLXByb2plY3RlZCBjb250ZW50IG9mXG4gKiB0aGUgY29tcG9uZW50IGFzIHdlbGwuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJldHVybiB0aGUgY29udGVudCB0ZXh0IGZvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbmRlcmVkVGV4dChjb21wb25lbnQ6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IGhvc3RFbGVtZW50ID0gZ2V0SG9zdEVsZW1lbnQoY29tcG9uZW50KTtcbiAgcmV0dXJuIGhvc3RFbGVtZW50LnRleHRDb250ZW50IHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZExDb250ZXh0RnJvbU5vZGUobm9kZTogTm9kZSk6IExDb250ZXh0IHtcbiAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE5vZGUpKSB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGluZyBpbnN0YW5jZSBvZiBET00gRWxlbWVudCcpO1xuICByZXR1cm4gbG9hZExDb250ZXh0KG5vZGUpITtcbn1cblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciBjb25maWd1cmF0aW9uIHJldHVybmVkIGZyb20gYGdldExpc3RlbmVyc2AuXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuZXIge1xuICAvKiogTmFtZSBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIEVsZW1lbnQgdGhhdCB0aGUgbGlzdGVuZXIgaXMgYm91bmQgdG8uICovXG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIC8qKiBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkLiAqL1xuICBjYWxsYmFjazogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgLyoqIFdoZXRoZXIgdGhlIGxpc3RlbmVyIGlzIHVzaW5nIGV2ZW50IGNhcHR1cmluZy4gKi9cbiAgdXNlQ2FwdHVyZTogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGxpc3RlbmVyIChlLmcuIGEgbmF0aXZlIERPTSBldmVudCBvciBhIGN1c3RvbSBAT3V0cHV0KS5cbiAgICovXG4gIHR5cGU6ICdkb20nfCdvdXRwdXQnO1xufVxuXG5cbi8qKlxuICogUmV0cmlldmVzIGEgbGlzdCBvZiBldmVudCBsaXN0ZW5lcnMgYXNzb2NpYXRlZCB3aXRoIGEgRE9NIGVsZW1lbnQuIFRoZSBsaXN0IGRvZXMgaW5jbHVkZSBob3N0XG4gKiBsaXN0ZW5lcnMsIGJ1dCBpdCBkb2VzIG5vdCBpbmNsdWRlIGV2ZW50IGxpc3RlbmVycyBkZWZpbmVkIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgY29udGV4dFxuICogKGUuZy4gdGhyb3VnaCBgYWRkRXZlbnRMaXN0ZW5lcmApLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIERPTSBzdHJ1Y3R1cmU6XG4gKiBgYGBcbiAqIDxteS1hcHA+XG4gKiAgIDxkaXYgKGNsaWNrKT1cImRvU29tZXRoaW5nKClcIj48L2Rpdj5cbiAqIDwvbXktYXBwPlxuICpcbiAqIGBgYFxuICogQ2FsbGluZyBgZ2V0TGlzdGVuZXJzYCBvbiBgPGRpdj5gIHdpbGwgcmV0dXJuIGFuIG9iamVjdCB0aGF0IGxvb2tzIGFzIGZvbGxvd3M6XG4gKiBgYGBcbiAqIHtcbiAqICAgbmFtZTogJ2NsaWNrJyxcbiAqICAgZWxlbWVudDogPGRpdj4sXG4gKiAgIGNhbGxiYWNrOiAoKSA9PiBkb1NvbWV0aGluZygpLFxuICogICB1c2VDYXB0dXJlOiBmYWxzZVxuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCBmb3Igd2hpY2ggdGhlIERPTSBsaXN0ZW5lcnMgc2hvdWxkIGJlIHJldHJpZXZlZC5cbiAqIEByZXR1cm5zIEFycmF5IG9mIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgRE9NIGVsZW1lbnQuXG4gKlxuICogQHB1YmxpY0FwaVxuICogQGdsb2JhbEFwaSBuZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdGVuZXJzKGVsZW1lbnQ6IEVsZW1lbnQpOiBMaXN0ZW5lcltdIHtcbiAgYXNzZXJ0RG9tRWxlbWVudChlbGVtZW50KTtcbiAgY29uc3QgbENvbnRleHQgPSBsb2FkTENvbnRleHQoZWxlbWVudCwgZmFsc2UpO1xuICBpZiAobENvbnRleHQgPT09IG51bGwpIHJldHVybiBbXTtcblxuICBjb25zdCBsVmlldyA9IGxDb250ZXh0LmxWaWV3O1xuICBjb25zdCB0VmlldyA9IGxWaWV3W1RWSUVXXTtcbiAgY29uc3QgbENsZWFudXAgPSBsVmlld1tDTEVBTlVQXTtcbiAgY29uc3QgdENsZWFudXAgPSB0Vmlldy5jbGVhbnVwO1xuICBjb25zdCBsaXN0ZW5lcnM6IExpc3RlbmVyW10gPSBbXTtcbiAgaWYgKHRDbGVhbnVwICYmIGxDbGVhbnVwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0Q2xlYW51cC5sZW5ndGg7KSB7XG4gICAgICBjb25zdCBmaXJzdFBhcmFtID0gdENsZWFudXBbaSsrXTtcbiAgICAgIGNvbnN0IHNlY29uZFBhcmFtID0gdENsZWFudXBbaSsrXTtcbiAgICAgIGlmICh0eXBlb2YgZmlyc3RQYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgbmFtZTogc3RyaW5nID0gZmlyc3RQYXJhbTtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJFbGVtZW50ID0gdW53cmFwUk5vZGUobFZpZXdbc2Vjb25kUGFyYW1dKSBhcyBhbnkgYXMgRWxlbWVudDtcbiAgICAgICAgY29uc3QgY2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiBhbnkgPSBsQ2xlYW51cFt0Q2xlYW51cFtpKytdXTtcbiAgICAgICAgY29uc3QgdXNlQ2FwdHVyZU9ySW5keCA9IHRDbGVhbnVwW2krK107XG4gICAgICAgIC8vIGlmIHVzZUNhcHR1cmVPckluZHggaXMgYm9vbGVhbiB0aGVuIHJlcG9ydCBpdCBhcyBpcy5cbiAgICAgICAgLy8gaWYgdXNlQ2FwdHVyZU9ySW5keCBpcyBwb3NpdGl2ZSBudW1iZXIgdGhlbiBpdCBpbiB1bnN1YnNjcmliZSBtZXRob2RcbiAgICAgICAgLy8gaWYgdXNlQ2FwdHVyZU9ySW5keCBpcyBuZWdhdGl2ZSBudW1iZXIgdGhlbiBpdCBpcyBhIFN1YnNjcmlwdGlvblxuICAgICAgICBjb25zdCB0eXBlID1cbiAgICAgICAgICAgICh0eXBlb2YgdXNlQ2FwdHVyZU9ySW5keCA9PT0gJ2Jvb2xlYW4nIHx8IHVzZUNhcHR1cmVPckluZHggPj0gMCkgPyAnZG9tJyA6ICdvdXRwdXQnO1xuICAgICAgICBjb25zdCB1c2VDYXB0dXJlID0gdHlwZW9mIHVzZUNhcHR1cmVPckluZHggPT09ICdib29sZWFuJyA/IHVzZUNhcHR1cmVPckluZHggOiBmYWxzZTtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbGlzdGVuZXJFbGVtZW50KSB7XG4gICAgICAgICAgbGlzdGVuZXJzLnB1c2goe2VsZW1lbnQsIG5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlLCB0eXBlfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGlzdGVuZXJzLnNvcnQoc29ydExpc3RlbmVycyk7XG4gIHJldHVybiBsaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIHNvcnRMaXN0ZW5lcnMoYTogTGlzdGVuZXIsIGI6IExpc3RlbmVyKSB7XG4gIGlmIChhLm5hbWUgPT0gYi5uYW1lKSByZXR1cm4gMDtcbiAgcmV0dXJuIGEubmFtZSA8IGIubmFtZSA/IC0xIDogMTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBub3QgZXhpc3QgYmVjYXVzZSBpdCBpcyBtZWdhbW9ycGhpYyBhbmQgb25seSBtb3N0bHkgY29ycmVjdC5cbiAqXG4gKiBTZWUgY2FsbCBzaXRlIGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlRGVmSGFjayhvYmo6IGFueSk6IG9iaiBpcyBEaXJlY3RpdmVEZWY8YW55PiB7XG4gIHJldHVybiBvYmoudHlwZSAhPT0gdW5kZWZpbmVkICYmIG9iai50ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkICYmIG9iai5kZWNsYXJlZElucHV0cyAhPT0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGF0dGFjaGVkIGBEZWJ1Z05vZGVgIGluc3RhbmNlIGZvciBhbiBlbGVtZW50IGluIHRoZSBET00uXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgRE9NIGVsZW1lbnQgd2hpY2ggaXMgb3duZWQgYnkgYW4gZXhpc3RpbmcgY29tcG9uZW50J3Mgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlYnVnTm9kZShlbGVtZW50OiBFbGVtZW50KTogRGVidWdOb2RlfG51bGwge1xuICBsZXQgZGVidWdOb2RlOiBEZWJ1Z05vZGV8bnVsbCA9IG51bGw7XG5cbiAgY29uc3QgbENvbnRleHQgPSBsb2FkTENvbnRleHRGcm9tTm9kZShlbGVtZW50KTtcbiAgY29uc3QgbFZpZXcgPSBsQ29udGV4dC5sVmlldztcbiAgY29uc3Qgbm9kZUluZGV4ID0gbENvbnRleHQubm9kZUluZGV4O1xuICBpZiAobm9kZUluZGV4ICE9PSAtMSkge1xuICAgIGNvbnN0IHZhbHVlSW5MVmlldyA9IGxWaWV3W25vZGVJbmRleF07XG4gICAgLy8gdGhpcyBtZWFucyB0aGF0IHZhbHVlIGluIHRoZSBsVmlldyBpcyBhIGNvbXBvbmVudCB3aXRoIGl0cyBvd25cbiAgICAvLyBkYXRhLiBJbiB0aGlzIHNpdHVhdGlvbiB0aGUgVE5vZGUgaXMgbm90IGFjY2Vzc2VkIGF0IHRoZSBzYW1lIHNwb3QuXG4gICAgY29uc3QgdE5vZGUgPSBpc0xWaWV3KHZhbHVlSW5MVmlldykgPyAodmFsdWVJbkxWaWV3W1RfSE9TVF0gYXMgVE5vZGUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFROb2RlKGxWaWV3W1RWSUVXXSwgbm9kZUluZGV4IC0gSEVBREVSX09GRlNFVCk7XG4gICAgZGVidWdOb2RlID0gYnVpbGREZWJ1Z05vZGUodE5vZGUsIGxWaWV3LCBub2RlSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIGRlYnVnTm9kZTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgY29tcG9uZW50IGBMVmlld2AgZnJvbSBjb21wb25lbnQvZWxlbWVudC5cbiAqXG4gKiBOT1RFOiBgTFZpZXdgIGlzIGEgcHJpdmF0ZSBhbmQgc2hvdWxkIG5vdCBiZSBsZWFrZWQgb3V0c2lkZS5cbiAqICAgICAgIERvbid0IGV4cG9ydCB0aGlzIG1ldGhvZCB0byBgbmcuKmAgb24gd2luZG93LlxuICpcbiAqIEBwYXJhbSB0YXJnZXQgRE9NIGVsZW1lbnQgb3IgY29tcG9uZW50IGluc3RhbmNlIGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgTFZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wb25lbnRMVmlldyh0YXJnZXQ6IGFueSk6IExWaWV3IHtcbiAgY29uc3QgbENvbnRleHQgPSBsb2FkTENvbnRleHQodGFyZ2V0KTtcbiAgY29uc3Qgbm9kZUluZHggPSBsQ29udGV4dC5ub2RlSW5kZXg7XG4gIGNvbnN0IGxWaWV3ID0gbENvbnRleHQubFZpZXc7XG4gIGNvbnN0IGNvbXBvbmVudExWaWV3ID0gbFZpZXdbbm9kZUluZHhdO1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0TFZpZXcoY29tcG9uZW50TFZpZXcpO1xuICByZXR1cm4gY29tcG9uZW50TFZpZXc7XG59XG5cbi8qKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIERPTSBFbGVtZW50LiAqL1xuZnVuY3Rpb24gYXNzZXJ0RG9tRWxlbWVudCh2YWx1ZTogYW55KSB7XG4gIGlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RpbmcgaW5zdGFuY2Ugb2YgRE9NIEVsZW1lbnQnKTtcbiAgfVxufVxuIl19