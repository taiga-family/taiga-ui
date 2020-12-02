/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render/api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '../di/injection_token';
import { injectRenderer2 as render3InjectRenderer2 } from '../render3/view_engine_compatibility';
import { noop } from '../util/noop';
/** @type {?} */
export const Renderer2Interceptor = new InjectionToken('Renderer2Interceptor');
/**
 * Used by `RendererFactory2` to associate custom rendering data and styles
 * with a rendering implementation.
 * \@publicApi
 * @record
 */
export function RendererType2() { }
if (false) {
    /**
     * A unique identifying string for the new renderer, used when creating
     * unique styles for encapsulation.
     * @type {?}
     */
    RendererType2.prototype.id;
    /**
     * The view encapsulation type, which determines how styles are applied to
     * DOM elements. One of
     * - `Emulated` (default): Emulate native scoping of styles.
     * - `Native`: Use the native encapsulation mechanism of the renderer.
     * - `ShadowDom`: Use modern [Shadow
     * DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
     * create a ShadowRoot for component's host element.
     * - `None`: Do not provide any template or style encapsulation.
     * @type {?}
     */
    RendererType2.prototype.encapsulation;
    /**
     * Defines CSS styles to be stored on a renderer instance.
     * @type {?}
     */
    RendererType2.prototype.styles;
    /**
     * Defines arbitrary developer-defined data to be stored on a renderer instance.
     * This is useful for renderers that delegate to other renderers.
     * @type {?}
     */
    RendererType2.prototype.data;
}
/**
 * Creates and initializes a custom renderer that implements the `Renderer2` base class.
 *
 * \@publicApi
 * @abstract
 */
export class RendererFactory2 {
}
if (false) {
    /**
     * Creates and initializes a custom renderer for a host DOM element.
     * @abstract
     * @param {?} hostElement The element to render.
     * @param {?} type The base class to implement.
     * @return {?} The new custom renderer instance.
     */
    RendererFactory2.prototype.createRenderer = function (hostElement, type) { };
    /**
     * A callback invoked when rendering has begun.
     * @abstract
     * @return {?}
     */
    RendererFactory2.prototype.begin = function () { };
    /**
     * A callback invoked when rendering has completed.
     * @abstract
     * @return {?}
     */
    RendererFactory2.prototype.end = function () { };
    /**
     * Use with animations test-only mode. Notifies the test when rendering has completed.
     * @abstract
     * @return {?} The asynchronous result of the developer-defined function.
     */
    RendererFactory2.prototype.whenRenderingDone = function () { };
}
/** @enum {number} */
const RendererStyleFlags2 = {
    // TODO(misko): This needs to be refactored into a separate file so that it can be imported from
    // `node_manipulation.ts` Currently doing the import cause resolution order to change and fails
    // the tests. The work around is to have hard coded value in `node_manipulation.ts` for now.
    /**
     * Marks a style as important.
     */
    Important: 1,
    /**
     * Marks a style as using dash case naming (this-is-dash-case).
     */
    DashCase: 2,
};
export { RendererStyleFlags2 };
RendererStyleFlags2[RendererStyleFlags2.Important] = 'Important';
RendererStyleFlags2[RendererStyleFlags2.DashCase] = 'DashCase';
/**
 * Extend this base class to implement custom rendering. By default, Angular
 * renders a template into DOM. You can use custom rendering to intercept
 * rendering calls, or to render to something other than DOM.
 *
 * Create your custom renderer using `RendererFactory2`.
 *
 * Use a custom renderer to bypass Angular's templating and
 * make custom UI changes that can't be expressed declaratively.
 * For example if you need to set a property or an attribute whose name is
 * not statically known, use the `setProperty()` or
 * `setAttribute()` method.
 *
 * \@publicApi
 * @abstract
 */
export class Renderer2 {
}
/**
 * \@internal
 * @nocollapse
 */
Renderer2.__NG_ELEMENT_ID__ = (/**
 * @return {?}
 */
() => SWITCH_RENDERER2_FACTORY());
if (false) {
    /**
     * \@internal
     * @nocollapse
     * @type {?}
     */
    Renderer2.__NG_ELEMENT_ID__;
    /**
     * If null or undefined, the view engine won't call it.
     * This is used as a performance optimization for production mode.
     * @type {?}
     */
    Renderer2.prototype.destroyNode;
    /**
     * Use to store arbitrary developer-defined data on a renderer instance,
     * as an object containing key-value pairs.
     * This is useful for renderers that delegate to other renderers.
     * @abstract
     * @return {?}
     */
    Renderer2.prototype.data = function () { };
    /**
     * Implement this callback to destroy the renderer or the host element.
     * @abstract
     * @return {?}
     */
    Renderer2.prototype.destroy = function () { };
    /**
     * Implement this callback to create an instance of the host element.
     * @abstract
     * @param {?} name An identifying name for the new element, unique within the namespace.
     * @param {?=} namespace The namespace for the new element.
     * @return {?} The new element.
     */
    Renderer2.prototype.createElement = function (name, namespace) { };
    /**
     * Implement this callback to add a comment to the DOM of the host element.
     * @abstract
     * @param {?} value The comment text.
     * @return {?} The modified element.
     */
    Renderer2.prototype.createComment = function (value) { };
    /**
     * Implement this callback to add text to the DOM of the host element.
     * @abstract
     * @param {?} value The text string.
     * @return {?} The modified element.
     */
    Renderer2.prototype.createText = function (value) { };
    /**
     * Appends a child to a given parent node in the host element DOM.
     * @abstract
     * @param {?} parent The parent node.
     * @param {?} newChild The new child node.
     * @return {?}
     */
    Renderer2.prototype.appendChild = function (parent, newChild) { };
    /**
     * Implement this callback to insert a child node at a given position in a parent node
     * in the host element DOM.
     * @abstract
     * @param {?} parent The parent node.
     * @param {?} newChild The new child nodes.
     * @param {?} refChild The existing child node before which `newChild` is inserted.
     * @return {?}
     */
    Renderer2.prototype.insertBefore = function (parent, newChild, refChild) { };
    /**
     * Implement this callback to remove a child node from the host element's DOM.
     * @abstract
     * @param {?} parent The parent node.
     * @param {?} oldChild The child node to remove.
     * @param {?=} isHostElement Optionally signal to the renderer whether this element is a host element
     * or not
     * @return {?}
     */
    Renderer2.prototype.removeChild = function (parent, oldChild, isHostElement) { };
    /**
     * Implement this callback to prepare an element to be bootstrapped
     * as a root element, and return the element instance.
     * @abstract
     * @param {?} selectorOrNode The DOM element.
     * @param {?=} preserveContent Whether the contents of the root element
     * should be preserved, or cleared upon bootstrap (default behavior).
     * Use with `ViewEncapsulation.ShadowDom` to allow simple native
     * content projection via `<slot>` elements.
     * @return {?} The root element.
     */
    Renderer2.prototype.selectRootElement = function (selectorOrNode, preserveContent) { };
    /**
     * Implement this callback to get the parent of a given node
     * in the host element's DOM.
     * @abstract
     * @param {?} node The child node to query.
     * @return {?} The parent node, or null if there is no parent.
     * For WebWorkers, always returns true.
     * This is because the check is synchronous,
     * and the caller can't rely on checking for null.
     */
    Renderer2.prototype.parentNode = function (node) { };
    /**
     * Implement this callback to get the next sibling node of a given node
     * in the host element's DOM.
     * @abstract
     * @param {?} node
     * @return {?} The sibling node, or null if there is no sibling.
     * For WebWorkers, always returns a value.
     * This is because the check is synchronous,
     * and the caller can't rely on checking for null.
     */
    Renderer2.prototype.nextSibling = function (node) { };
    /**
     * Implement this callback to set an attribute value for an element in the DOM.
     * @abstract
     * @param {?} el The element.
     * @param {?} name The attribute name.
     * @param {?} value The new value.
     * @param {?=} namespace The namespace.
     * @return {?}
     */
    Renderer2.prototype.setAttribute = function (el, name, value, namespace) { };
    /**
     * Implement this callback to remove an attribute from an element in the DOM.
     * @abstract
     * @param {?} el The element.
     * @param {?} name The attribute name.
     * @param {?=} namespace The namespace.
     * @return {?}
     */
    Renderer2.prototype.removeAttribute = function (el, name, namespace) { };
    /**
     * Implement this callback to add a class to an element in the DOM.
     * @abstract
     * @param {?} el The element.
     * @param {?} name The class name.
     * @return {?}
     */
    Renderer2.prototype.addClass = function (el, name) { };
    /**
     * Implement this callback to remove a class from an element in the DOM.
     * @abstract
     * @param {?} el The element.
     * @param {?} name The class name.
     * @return {?}
     */
    Renderer2.prototype.removeClass = function (el, name) { };
    /**
     * Implement this callback to set a CSS style for an element in the DOM.
     * @abstract
     * @param {?} el The element.
     * @param {?} style The name of the style.
     * @param {?} value The new value.
     * @param {?=} flags Flags for style variations. No flags are set by default.
     * @return {?}
     */
    Renderer2.prototype.setStyle = function (el, style, value, flags) { };
    /**
     * Implement this callback to remove the value from a CSS style for an element in the DOM.
     * @abstract
     * @param {?} el The element.
     * @param {?} style The name of the style.
     * @param {?=} flags Flags for style variations to remove, if set. ???
     * @return {?}
     */
    Renderer2.prototype.removeStyle = function (el, style, flags) { };
    /**
     * Implement this callback to set the value of a property of an element in the DOM.
     * @abstract
     * @param {?} el The element.
     * @param {?} name The property name.
     * @param {?} value The new value.
     * @return {?}
     */
    Renderer2.prototype.setProperty = function (el, name, value) { };
    /**
     * Implement this callback to set the value of a node in the host element.
     * @abstract
     * @param {?} node The node.
     * @param {?} value The new value.
     * @return {?}
     */
    Renderer2.prototype.setValue = function (node, value) { };
    /**
     * Implement this callback to start an event listener.
     * @abstract
     * @param {?} target The context in which to listen for events. Can be
     * the entire window or document, the body of the document, or a specific
     * DOM element.
     * @param {?} eventName The event to listen for.
     * @param {?} callback A handler function to invoke when the event occurs.
     * @return {?} An "unlisten" function for disposing of this handler.
     */
    Renderer2.prototype.listen = function (target, eventName, callback) { };
}
/** @type {?} */
export const SWITCH_RENDERER2_FACTORY__POST_R3__ = render3InjectRenderer2;
/** @type {?} */
const SWITCH_RENDERER2_FACTORY__PRE_R3__ = noop;
/** @type {?} */
const SWITCH_RENDERER2_FACTORY = SWITCH_RENDERER2_FACTORY__PRE_R3__;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFckQsT0FBTyxFQUFDLGVBQWUsSUFBSSxzQkFBc0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQy9GLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxjQUFjLENBQUM7O0FBR2xDLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FBYyxzQkFBc0IsQ0FBQzs7Ozs7OztBQU8zRixtQ0EwQkM7Ozs7Ozs7SUFyQkMsMkJBQVc7Ozs7Ozs7Ozs7OztJQVdYLHNDQUFpQzs7Ozs7SUFJakMsK0JBQXlCOzs7Ozs7SUFLekIsNkJBQTRCOzs7Ozs7OztBQVE5QixNQUFNLE9BQWdCLGdCQUFnQjtDQXFCckM7Ozs7Ozs7OztJQWRDLDZFQUErRTs7Ozs7O0lBSS9FLG1EQUF3Qjs7Ozs7O0lBSXhCLGlEQUFzQjs7Ozs7O0lBS3RCLCtEQUE0Qzs7O0FBTzlDLE1BQVksbUJBQW1CO0lBQzdCLGdHQUFnRztJQUNoRywrRkFBK0Y7SUFDL0YsNEZBQTRGO0lBQzVGOztPQUVHO0lBQ0gsU0FBUyxHQUFTO0lBQ2xCOztPQUVHO0lBQ0gsUUFBUSxHQUFTO0VBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCRCxNQUFNLE9BQWdCLFNBQVM7Ozs7OztBQXlLdEIsMkJBQWlCOzs7QUFBb0IsR0FBRyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsRUFBQzs7Ozs7OztJQUE3RSw0QkFBNkU7Ozs7OztJQXBJN0UsZ0NBQXlDOzs7Ozs7OztJQS9CekMsMkNBQTBDOzs7Ozs7SUFLMUMsOENBQXlCOzs7Ozs7OztJQU96QixtRUFBbUU7Ozs7Ozs7SUFNbkUseURBQTJDOzs7Ozs7O0lBTzNDLHNEQUF3Qzs7Ozs7Ozs7SUFZeEMsa0VBQXVEOzs7Ozs7Ozs7O0lBUXZELDZFQUF1RTs7Ozs7Ozs7OztJQVF2RSxpRkFBZ0Y7Ozs7Ozs7Ozs7OztJQVdoRix1RkFBdUY7Ozs7Ozs7Ozs7O0lBVXZGLHFEQUFvQzs7Ozs7Ozs7Ozs7SUFTcEMsc0RBQXFDOzs7Ozs7Ozs7O0lBUXJDLDZFQUEyRjs7Ozs7Ozs7O0lBUTNGLHlFQUErRTs7Ozs7Ozs7SUFNL0UsdURBQStDOzs7Ozs7OztJQU8vQywwREFBa0Q7Ozs7Ozs7Ozs7SUFTbEQsc0VBQXlGOzs7Ozs7Ozs7SUFRekYsa0VBQWdGOzs7Ozs7Ozs7SUFRaEYsaUVBQThEOzs7Ozs7OztJQU85RCwwREFBa0Q7Ozs7Ozs7Ozs7O0lBV2xELHdFQUUwRDs7O0FBVTVELE1BQU0sT0FBTyxtQ0FBbUMsR0FBRyxzQkFBc0I7O01BQ25FLGtDQUFrQyxHQUFHLElBQUk7O01BQ3pDLHdCQUF3QixHQUFrQyxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJy4uL2RpL2luamVjdGlvbl90b2tlbic7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuLi9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7aW5qZWN0UmVuZGVyZXIyIGFzIHJlbmRlcjNJbmplY3RSZW5kZXJlcjJ9IGZyb20gJy4uL3JlbmRlcjMvdmlld19lbmdpbmVfY29tcGF0aWJpbGl0eSc7XG5pbXBvcnQge25vb3B9IGZyb20gJy4uL3V0aWwvbm9vcCc7XG5cblxuZXhwb3J0IGNvbnN0IFJlbmRlcmVyMkludGVyY2VwdG9yID0gbmV3IEluamVjdGlvblRva2VuPFJlbmRlcmVyMltdPignUmVuZGVyZXIySW50ZXJjZXB0b3InKTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBSZW5kZXJlckZhY3RvcnkyYCB0byBhc3NvY2lhdGUgY3VzdG9tIHJlbmRlcmluZyBkYXRhIGFuZCBzdHlsZXNcbiAqIHdpdGggYSByZW5kZXJpbmcgaW1wbGVtZW50YXRpb24uXG4gKiAgQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlcmVyVHlwZTIge1xuICAvKipcbiAgICogQSB1bmlxdWUgaWRlbnRpZnlpbmcgc3RyaW5nIGZvciB0aGUgbmV3IHJlbmRlcmVyLCB1c2VkIHdoZW4gY3JlYXRpbmdcbiAgICogdW5pcXVlIHN0eWxlcyBmb3IgZW5jYXBzdWxhdGlvbi5cbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdmlldyBlbmNhcHN1bGF0aW9uIHR5cGUsIHdoaWNoIGRldGVybWluZXMgaG93IHN0eWxlcyBhcmUgYXBwbGllZCB0b1xuICAgKiBET00gZWxlbWVudHMuIE9uZSBvZlxuICAgKiAtIGBFbXVsYXRlZGAgKGRlZmF1bHQpOiBFbXVsYXRlIG5hdGl2ZSBzY29waW5nIG9mIHN0eWxlcy5cbiAgICogLSBgTmF0aXZlYDogVXNlIHRoZSBuYXRpdmUgZW5jYXBzdWxhdGlvbiBtZWNoYW5pc20gb2YgdGhlIHJlbmRlcmVyLlxuICAgKiAtIGBTaGFkb3dEb21gOiBVc2UgbW9kZXJuIFtTaGFkb3dcbiAgICogRE9NXShodHRwczovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL3NoYWRvdy8pIGFuZFxuICAgKiBjcmVhdGUgYSBTaGFkb3dSb290IGZvciBjb21wb25lbnQncyBob3N0IGVsZW1lbnQuXG4gICAqIC0gYE5vbmVgOiBEbyBub3QgcHJvdmlkZSBhbnkgdGVtcGxhdGUgb3Igc3R5bGUgZW5jYXBzdWxhdGlvbi5cbiAgICovXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uO1xuICAvKipcbiAgICogRGVmaW5lcyBDU1Mgc3R5bGVzIHRvIGJlIHN0b3JlZCBvbiBhIHJlbmRlcmVyIGluc3RhbmNlLlxuICAgKi9cbiAgc3R5bGVzOiAoc3RyaW5nfGFueVtdKVtdO1xuICAvKipcbiAgICogRGVmaW5lcyBhcmJpdHJhcnkgZGV2ZWxvcGVyLWRlZmluZWQgZGF0YSB0byBiZSBzdG9yZWQgb24gYSByZW5kZXJlciBpbnN0YW5jZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHJlbmRlcmVycyB0aGF0IGRlbGVnYXRlIHRvIG90aGVyIHJlbmRlcmVycy5cbiAgICovXG4gIGRhdGE6IHtba2luZDogc3RyaW5nXTogYW55fTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBhIGN1c3RvbSByZW5kZXJlciB0aGF0IGltcGxlbWVudHMgdGhlIGBSZW5kZXJlcjJgIGJhc2UgY2xhc3MuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVuZGVyZXJGYWN0b3J5MiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBhIGN1c3RvbSByZW5kZXJlciBmb3IgYSBob3N0IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0gaG9zdEVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gcmVuZGVyLlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgYmFzZSBjbGFzcyB0byBpbXBsZW1lbnQuXG4gICAqIEByZXR1cm5zIFRoZSBuZXcgY3VzdG9tIHJlbmRlcmVyIGluc3RhbmNlLlxuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlUmVuZGVyZXIoaG9zdEVsZW1lbnQ6IGFueSwgdHlwZTogUmVuZGVyZXJUeXBlMnxudWxsKTogUmVuZGVyZXIyO1xuICAvKipcbiAgICogQSBjYWxsYmFjayBpbnZva2VkIHdoZW4gcmVuZGVyaW5nIGhhcyBiZWd1bi5cbiAgICovXG4gIGFic3RyYWN0IGJlZ2luPygpOiB2b2lkO1xuICAvKipcbiAgICogQSBjYWxsYmFjayBpbnZva2VkIHdoZW4gcmVuZGVyaW5nIGhhcyBjb21wbGV0ZWQuXG4gICAqL1xuICBhYnN0cmFjdCBlbmQ/KCk6IHZvaWQ7XG4gIC8qKlxuICAgKiBVc2Ugd2l0aCBhbmltYXRpb25zIHRlc3Qtb25seSBtb2RlLiBOb3RpZmllcyB0aGUgdGVzdCB3aGVuIHJlbmRlcmluZyBoYXMgY29tcGxldGVkLlxuICAgKiBAcmV0dXJucyBUaGUgYXN5bmNocm9ub3VzIHJlc3VsdCBvZiB0aGUgZGV2ZWxvcGVyLWRlZmluZWQgZnVuY3Rpb24uXG4gICAqL1xuICBhYnN0cmFjdCB3aGVuUmVuZGVyaW5nRG9uZT8oKTogUHJvbWlzZTxhbnk+O1xufVxuXG4vKipcbiAqIEZsYWdzIGZvciByZW5kZXJlci1zcGVjaWZpYyBzdHlsZSBtb2RpZmllcnMuXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBlbnVtIFJlbmRlcmVyU3R5bGVGbGFnczIge1xuICAvLyBUT0RPKG1pc2tvKTogVGhpcyBuZWVkcyB0byBiZSByZWZhY3RvcmVkIGludG8gYSBzZXBhcmF0ZSBmaWxlIHNvIHRoYXQgaXQgY2FuIGJlIGltcG9ydGVkIGZyb21cbiAgLy8gYG5vZGVfbWFuaXB1bGF0aW9uLnRzYCBDdXJyZW50bHkgZG9pbmcgdGhlIGltcG9ydCBjYXVzZSByZXNvbHV0aW9uIG9yZGVyIHRvIGNoYW5nZSBhbmQgZmFpbHNcbiAgLy8gdGhlIHRlc3RzLiBUaGUgd29yayBhcm91bmQgaXMgdG8gaGF2ZSBoYXJkIGNvZGVkIHZhbHVlIGluIGBub2RlX21hbmlwdWxhdGlvbi50c2AgZm9yIG5vdy5cbiAgLyoqXG4gICAqIE1hcmtzIGEgc3R5bGUgYXMgaW1wb3J0YW50LlxuICAgKi9cbiAgSW1wb3J0YW50ID0gMSA8PCAwLFxuICAvKipcbiAgICogTWFya3MgYSBzdHlsZSBhcyB1c2luZyBkYXNoIGNhc2UgbmFtaW5nICh0aGlzLWlzLWRhc2gtY2FzZSkuXG4gICAqL1xuICBEYXNoQ2FzZSA9IDEgPDwgMVxufVxuXG4vKipcbiAqIEV4dGVuZCB0aGlzIGJhc2UgY2xhc3MgdG8gaW1wbGVtZW50IGN1c3RvbSByZW5kZXJpbmcuIEJ5IGRlZmF1bHQsIEFuZ3VsYXJcbiAqIHJlbmRlcnMgYSB0ZW1wbGF0ZSBpbnRvIERPTS4gWW91IGNhbiB1c2UgY3VzdG9tIHJlbmRlcmluZyB0byBpbnRlcmNlcHRcbiAqIHJlbmRlcmluZyBjYWxscywgb3IgdG8gcmVuZGVyIHRvIHNvbWV0aGluZyBvdGhlciB0aGFuIERPTS5cbiAqXG4gKiBDcmVhdGUgeW91ciBjdXN0b20gcmVuZGVyZXIgdXNpbmcgYFJlbmRlcmVyRmFjdG9yeTJgLlxuICpcbiAqIFVzZSBhIGN1c3RvbSByZW5kZXJlciB0byBieXBhc3MgQW5ndWxhcidzIHRlbXBsYXRpbmcgYW5kXG4gKiBtYWtlIGN1c3RvbSBVSSBjaGFuZ2VzIHRoYXQgY2FuJ3QgYmUgZXhwcmVzc2VkIGRlY2xhcmF0aXZlbHkuXG4gKiBGb3IgZXhhbXBsZSBpZiB5b3UgbmVlZCB0byBzZXQgYSBwcm9wZXJ0eSBvciBhbiBhdHRyaWJ1dGUgd2hvc2UgbmFtZSBpc1xuICogbm90IHN0YXRpY2FsbHkga25vd24sIHVzZSB0aGUgYHNldFByb3BlcnR5KClgIG9yXG4gKiBgc2V0QXR0cmlidXRlKClgIG1ldGhvZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZW5kZXJlcjIge1xuICAvKipcbiAgICogVXNlIHRvIHN0b3JlIGFyYml0cmFyeSBkZXZlbG9wZXItZGVmaW5lZCBkYXRhIG9uIGEgcmVuZGVyZXIgaW5zdGFuY2UsXG4gICAqIGFzIGFuIG9iamVjdCBjb250YWluaW5nIGtleS12YWx1ZSBwYWlycy5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHJlbmRlcmVycyB0aGF0IGRlbGVnYXRlIHRvIG90aGVyIHJlbmRlcmVycy5cbiAgICovXG4gIGFic3RyYWN0IGdldCBkYXRhKCk6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgdGhpcyBjYWxsYmFjayB0byBkZXN0cm95IHRoZSByZW5kZXJlciBvciB0aGUgaG9zdCBlbGVtZW50LlxuICAgKi9cbiAgYWJzdHJhY3QgZGVzdHJveSgpOiB2b2lkO1xuICAvKipcbiAgICogSW1wbGVtZW50IHRoaXMgY2FsbGJhY2sgdG8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBuYW1lIEFuIGlkZW50aWZ5aW5nIG5hbWUgZm9yIHRoZSBuZXcgZWxlbWVudCwgdW5pcXVlIHdpdGhpbiB0aGUgbmFtZXNwYWNlLlxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2UgZm9yIHRoZSBuZXcgZWxlbWVudC5cbiAgICogQHJldHVybnMgVGhlIG5ldyBlbGVtZW50LlxuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlRWxlbWVudChuYW1lOiBzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZ3xudWxsKTogYW55O1xuICAvKipcbiAgICogSW1wbGVtZW50IHRoaXMgY2FsbGJhY2sgdG8gYWRkIGEgY29tbWVudCB0byB0aGUgRE9NIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgY29tbWVudCB0ZXh0LlxuICAgKiBAcmV0dXJucyBUaGUgbW9kaWZpZWQgZWxlbWVudC5cbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZUNvbW1lbnQodmFsdWU6IHN0cmluZyk6IGFueTtcblxuICAvKipcbiAgICogSW1wbGVtZW50IHRoaXMgY2FsbGJhY2sgdG8gYWRkIHRleHQgdG8gdGhlIERPTSBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHRleHQgc3RyaW5nLlxuICAgKiBAcmV0dXJucyBUaGUgbW9kaWZpZWQgZWxlbWVudC5cbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZVRleHQodmFsdWU6IHN0cmluZyk6IGFueTtcbiAgLyoqXG4gICAqIElmIG51bGwgb3IgdW5kZWZpbmVkLCB0aGUgdmlldyBlbmdpbmUgd29uJ3QgY2FsbCBpdC5cbiAgICogVGhpcyBpcyB1c2VkIGFzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIGZvciBwcm9kdWN0aW9uIG1vZGUuXG4gICAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgZGVzdHJveU5vZGUhOiAoKG5vZGU6IGFueSkgPT4gdm9pZCl8bnVsbDtcbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBjaGlsZCB0byBhIGdpdmVuIHBhcmVudCBub2RlIGluIHRoZSBob3N0IGVsZW1lbnQgRE9NLlxuICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgbm9kZS5cbiAgICogQHBhcmFtIG5ld0NoaWxkIFRoZSBuZXcgY2hpbGQgbm9kZS5cbiAgICovXG4gIGFic3RyYWN0IGFwcGVuZENoaWxkKHBhcmVudDogYW55LCBuZXdDaGlsZDogYW55KTogdm9pZDtcbiAgLyoqXG4gICAqIEltcGxlbWVudCB0aGlzIGNhbGxiYWNrIHRvIGluc2VydCBhIGNoaWxkIG5vZGUgYXQgYSBnaXZlbiBwb3NpdGlvbiBpbiBhIHBhcmVudCBub2RlXG4gICAqIGluIHRoZSBob3N0IGVsZW1lbnQgRE9NLlxuICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgbm9kZS5cbiAgICogQHBhcmFtIG5ld0NoaWxkIFRoZSBuZXcgY2hpbGQgbm9kZXMuXG4gICAqIEBwYXJhbSByZWZDaGlsZCBUaGUgZXhpc3RpbmcgY2hpbGQgbm9kZSBiZWZvcmUgd2hpY2ggYG5ld0NoaWxkYCBpcyBpbnNlcnRlZC5cbiAgICovXG4gIGFic3RyYWN0IGluc2VydEJlZm9yZShwYXJlbnQ6IGFueSwgbmV3Q2hpbGQ6IGFueSwgcmVmQ2hpbGQ6IGFueSk6IHZvaWQ7XG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgdGhpcyBjYWxsYmFjayB0byByZW1vdmUgYSBjaGlsZCBub2RlIGZyb20gdGhlIGhvc3QgZWxlbWVudCdzIERPTS5cbiAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IG5vZGUuXG4gICAqIEBwYXJhbSBvbGRDaGlsZCBUaGUgY2hpbGQgbm9kZSB0byByZW1vdmUuXG4gICAqIEBwYXJhbSBpc0hvc3RFbGVtZW50IE9wdGlvbmFsbHkgc2lnbmFsIHRvIHRoZSByZW5kZXJlciB3aGV0aGVyIHRoaXMgZWxlbWVudCBpcyBhIGhvc3QgZWxlbWVudFxuICAgKiBvciBub3RcbiAgICovXG4gIGFic3RyYWN0IHJlbW92ZUNoaWxkKHBhcmVudDogYW55LCBvbGRDaGlsZDogYW55LCBpc0hvc3RFbGVtZW50PzogYm9vbGVhbik6IHZvaWQ7XG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgdGhpcyBjYWxsYmFjayB0byBwcmVwYXJlIGFuIGVsZW1lbnQgdG8gYmUgYm9vdHN0cmFwcGVkXG4gICAqIGFzIGEgcm9vdCBlbGVtZW50LCBhbmQgcmV0dXJuIHRoZSBlbGVtZW50IGluc3RhbmNlLlxuICAgKiBAcGFyYW0gc2VsZWN0b3JPck5vZGUgVGhlIERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0gcHJlc2VydmVDb250ZW50IFdoZXRoZXIgdGhlIGNvbnRlbnRzIG9mIHRoZSByb290IGVsZW1lbnRcbiAgICogc2hvdWxkIGJlIHByZXNlcnZlZCwgb3IgY2xlYXJlZCB1cG9uIGJvb3RzdHJhcCAoZGVmYXVsdCBiZWhhdmlvcikuXG4gICAqIFVzZSB3aXRoIGBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21gIHRvIGFsbG93IHNpbXBsZSBuYXRpdmVcbiAgICogY29udGVudCBwcm9qZWN0aW9uIHZpYSBgPHNsb3Q+YCBlbGVtZW50cy5cbiAgICogQHJldHVybnMgVGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGFic3RyYWN0IHNlbGVjdFJvb3RFbGVtZW50KHNlbGVjdG9yT3JOb2RlOiBzdHJpbmd8YW55LCBwcmVzZXJ2ZUNvbnRlbnQ/OiBib29sZWFuKTogYW55O1xuICAvKipcbiAgICogSW1wbGVtZW50IHRoaXMgY2FsbGJhY2sgdG8gZ2V0IHRoZSBwYXJlbnQgb2YgYSBnaXZlbiBub2RlXG4gICAqIGluIHRoZSBob3N0IGVsZW1lbnQncyBET00uXG4gICAqIEBwYXJhbSBub2RlIFRoZSBjaGlsZCBub2RlIHRvIHF1ZXJ5LlxuICAgKiBAcmV0dXJucyBUaGUgcGFyZW50IG5vZGUsIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gcGFyZW50LlxuICAgKiBGb3IgV2ViV29ya2VycywgYWx3YXlzIHJldHVybnMgdHJ1ZS5cbiAgICogVGhpcyBpcyBiZWNhdXNlIHRoZSBjaGVjayBpcyBzeW5jaHJvbm91cyxcbiAgICogYW5kIHRoZSBjYWxsZXIgY2FuJ3QgcmVseSBvbiBjaGVja2luZyBmb3IgbnVsbC5cbiAgICovXG4gIGFic3RyYWN0IHBhcmVudE5vZGUobm9kZTogYW55KTogYW55O1xuICAvKipcbiAgICogSW1wbGVtZW50IHRoaXMgY2FsbGJhY2sgdG8gZ2V0IHRoZSBuZXh0IHNpYmxpbmcgbm9kZSBvZiBhIGdpdmVuIG5vZGVcbiAgICogaW4gdGhlIGhvc3QgZWxlbWVudCdzIERPTS5cbiAgICogQHJldHVybnMgVGhlIHNpYmxpbmcgbm9kZSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzaWJsaW5nLlxuICAgKiBGb3IgV2ViV29ya2VycywgYWx3YXlzIHJldHVybnMgYSB2YWx1ZS5cbiAgICogVGhpcyBpcyBiZWNhdXNlIHRoZSBjaGVjayBpcyBzeW5jaHJvbm91cyxcbiAgICogYW5kIHRoZSBjYWxsZXIgY2FuJ3QgcmVseSBvbiBjaGVja2luZyBmb3IgbnVsbC5cbiAgICovXG4gIGFic3RyYWN0IG5leHRTaWJsaW5nKG5vZGU6IGFueSk6IGFueTtcbiAgLyoqXG4gICAqIEltcGxlbWVudCB0aGlzIGNhbGxiYWNrIHRvIHNldCBhbiBhdHRyaWJ1dGUgdmFsdWUgZm9yIGFuIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAgICogQHBhcmFtIGVsIFRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgYXR0cmlidXRlIG5hbWUuXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlLlxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2UuXG4gICAqL1xuICBhYnN0cmFjdCBzZXRBdHRyaWJ1dGUoZWw6IGFueSwgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmd8bnVsbCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudCB0aGlzIGNhbGxiYWNrIHRvIHJlbW92ZSBhbiBhdHRyaWJ1dGUgZnJvbSBhbiBlbGVtZW50IGluIHRoZSBET00uXG4gICAqIEBwYXJhbSBlbCBUaGUgZWxlbWVudC5cbiAgICogQHBhcmFtIG5hbWUgVGhlIGF0dHJpYnV0ZSBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2UuXG4gICAqL1xuICBhYnN0cmFjdCByZW1vdmVBdHRyaWJ1dGUoZWw6IGFueSwgbmFtZTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmd8bnVsbCk6IHZvaWQ7XG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgdGhpcyBjYWxsYmFjayB0byBhZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50IGluIHRoZSBET00uXG4gICAqIEBwYXJhbSBlbCBUaGUgZWxlbWVudC5cbiAgICogQHBhcmFtIG5hbWUgVGhlIGNsYXNzIG5hbWUuXG4gICAqL1xuICBhYnN0cmFjdCBhZGRDbGFzcyhlbDogYW55LCBuYW1lOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgdGhpcyBjYWxsYmFjayB0byByZW1vdmUgYSBjbGFzcyBmcm9tIGFuIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAgICogQHBhcmFtIGVsIFRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgY2xhc3MgbmFtZS5cbiAgICovXG4gIGFic3RyYWN0IHJlbW92ZUNsYXNzKGVsOiBhbnksIG5hbWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudCB0aGlzIGNhbGxiYWNrIHRvIHNldCBhIENTUyBzdHlsZSBmb3IgYW4gZWxlbWVudCBpbiB0aGUgRE9NLlxuICAgKiBAcGFyYW0gZWwgVGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBzdHlsZSBUaGUgbmFtZSBvZiB0aGUgc3R5bGUuXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlLlxuICAgKiBAcGFyYW0gZmxhZ3MgRmxhZ3MgZm9yIHN0eWxlIHZhcmlhdGlvbnMuIE5vIGZsYWdzIGFyZSBzZXQgYnkgZGVmYXVsdC5cbiAgICovXG4gIGFic3RyYWN0IHNldFN0eWxlKGVsOiBhbnksIHN0eWxlOiBzdHJpbmcsIHZhbHVlOiBhbnksIGZsYWdzPzogUmVuZGVyZXJTdHlsZUZsYWdzMik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudCB0aGlzIGNhbGxiYWNrIHRvIHJlbW92ZSB0aGUgdmFsdWUgZnJvbSBhIENTUyBzdHlsZSBmb3IgYW4gZWxlbWVudCBpbiB0aGUgRE9NLlxuICAgKiBAcGFyYW0gZWwgVGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBzdHlsZSBUaGUgbmFtZSBvZiB0aGUgc3R5bGUuXG4gICAqIEBwYXJhbSBmbGFncyBGbGFncyBmb3Igc3R5bGUgdmFyaWF0aW9ucyB0byByZW1vdmUsIGlmIHNldC4gPz8/XG4gICAqL1xuICBhYnN0cmFjdCByZW1vdmVTdHlsZShlbDogYW55LCBzdHlsZTogc3RyaW5nLCBmbGFncz86IFJlbmRlcmVyU3R5bGVGbGFnczIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgdGhpcyBjYWxsYmFjayB0byBzZXQgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb2YgYW4gZWxlbWVudCBpbiB0aGUgRE9NLlxuICAgKiBAcGFyYW0gZWwgVGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBwcm9wZXJ0eSBuYW1lLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZS5cbiAgICovXG4gIGFic3RyYWN0IHNldFByb3BlcnR5KGVsOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudCB0aGlzIGNhbGxiYWNrIHRvIHNldCB0aGUgdmFsdWUgb2YgYSBub2RlIGluIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBub2RlIFRoZSBub2RlLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZS5cbiAgICovXG4gIGFic3RyYWN0IHNldFZhbHVlKG5vZGU6IGFueSwgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudCB0aGlzIGNhbGxiYWNrIHRvIHN0YXJ0IGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSBjb250ZXh0IGluIHdoaWNoIHRvIGxpc3RlbiBmb3IgZXZlbnRzLiBDYW4gYmVcbiAgICogdGhlIGVudGlyZSB3aW5kb3cgb3IgZG9jdW1lbnQsIHRoZSBib2R5IG9mIHRoZSBkb2N1bWVudCwgb3IgYSBzcGVjaWZpY1xuICAgKiBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSBUaGUgZXZlbnQgdG8gbGlzdGVuIGZvci5cbiAgICogQHBhcmFtIGNhbGxiYWNrIEEgaGFuZGxlciBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgZXZlbnQgb2NjdXJzLlxuICAgKiBAcmV0dXJucyBBbiBcInVubGlzdGVuXCIgZnVuY3Rpb24gZm9yIGRpc3Bvc2luZyBvZiB0aGlzIGhhbmRsZXIuXG4gICAqL1xuICBhYnN0cmFjdCBsaXN0ZW4oXG4gICAgICB0YXJnZXQ6ICd3aW5kb3cnfCdkb2N1bWVudCd8J2JvZHknfGFueSwgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgICBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IGJvb2xlYW4gfCB2b2lkKTogKCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBzdGF0aWMgX19OR19FTEVNRU5UX0lEX186ICgpID0+IFJlbmRlcmVyMiA9ICgpID0+IFNXSVRDSF9SRU5ERVJFUjJfRkFDVE9SWSgpO1xufVxuXG5cbmV4cG9ydCBjb25zdCBTV0lUQ0hfUkVOREVSRVIyX0ZBQ1RPUllfX1BPU1RfUjNfXyA9IHJlbmRlcjNJbmplY3RSZW5kZXJlcjI7XG5jb25zdCBTV0lUQ0hfUkVOREVSRVIyX0ZBQ1RPUllfX1BSRV9SM19fID0gbm9vcDtcbmNvbnN0IFNXSVRDSF9SRU5ERVJFUjJfRkFDVE9SWTogdHlwZW9mIHJlbmRlcjNJbmplY3RSZW5kZXJlcjIgPSBTV0lUQ0hfUkVOREVSRVIyX0ZBQ1RPUllfX1BSRV9SM19fO1xuIl19