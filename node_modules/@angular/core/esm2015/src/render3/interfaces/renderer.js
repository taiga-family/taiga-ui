/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/interfaces/renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The goal here is to make sure that the browser DOM API is the Renderer.
 * We do this by defining a subset of DOM API to be the renderer and then
 * use that at runtime for rendering.
 *
 * At runtime we can then use the DOM api directly, in server or web-worker
 * it will be easy to implement such API.
 */
import { getDocument } from './document';
/** @enum {number} */
const RendererStyleFlags3 = {
    Important: 1,
    DashCase: 2,
};
export { RendererStyleFlags3 };
RendererStyleFlags3[RendererStyleFlags3.Important] = 'Important';
RendererStyleFlags3[RendererStyleFlags3.DashCase] = 'DashCase';
/**
 * Object Oriented style of API needed to create elements and text nodes.
 *
 * This is the native browser API style, e.g. operations are methods on individual objects
 * like HTMLElement. With this style, no additional code is needed as a facade
 * (reducing payload size).
 *
 * @record
 */
export function ObjectOrientedRenderer3() { }
if (false) {
    /**
     * @param {?} data
     * @return {?}
     */
    ObjectOrientedRenderer3.prototype.createComment = function (data) { };
    /**
     * @param {?} tagName
     * @return {?}
     */
    ObjectOrientedRenderer3.prototype.createElement = function (tagName) { };
    /**
     * @param {?} namespace
     * @param {?} tagName
     * @return {?}
     */
    ObjectOrientedRenderer3.prototype.createElementNS = function (namespace, tagName) { };
    /**
     * @param {?} data
     * @return {?}
     */
    ObjectOrientedRenderer3.prototype.createTextNode = function (data) { };
    /**
     * @param {?} selectors
     * @return {?}
     */
    ObjectOrientedRenderer3.prototype.querySelector = function (selectors) { };
}
/**
 * Returns whether the `renderer` is a `ProceduralRenderer3`
 * @param {?} renderer
 * @return {?}
 */
export function isProceduralRenderer(renderer) {
    return !!(((/** @type {?} */ (renderer))).listen);
}
/**
 * Procedural style of API needed to create elements and text nodes.
 *
 * In non-native browser environments (e.g. platforms such as web-workers), this is the
 * facade that enables element manipulation. This also facilitates backwards compatibility
 * with Renderer2.
 * @record
 */
export function ProceduralRenderer3() { }
if (false) {
    /**
     * This property is allowed to be null / undefined,
     * in which case the view engine won't call it.
     * This is used as a performance optimization for production mode.
     * @type {?|undefined}
     */
    ProceduralRenderer3.prototype.destroyNode;
    /**
     * @return {?}
     */
    ProceduralRenderer3.prototype.destroy = function () { };
    /**
     * @param {?} value
     * @return {?}
     */
    ProceduralRenderer3.prototype.createComment = function (value) { };
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    ProceduralRenderer3.prototype.createElement = function (name, namespace) { };
    /**
     * @param {?} value
     * @return {?}
     */
    ProceduralRenderer3.prototype.createText = function (value) { };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    ProceduralRenderer3.prototype.appendChild = function (parent, newChild) { };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    ProceduralRenderer3.prototype.insertBefore = function (parent, newChild, refChild) { };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @param {?=} isHostElement
     * @return {?}
     */
    ProceduralRenderer3.prototype.removeChild = function (parent, oldChild, isHostElement) { };
    /**
     * @param {?} selectorOrNode
     * @param {?=} preserveContent
     * @return {?}
     */
    ProceduralRenderer3.prototype.selectRootElement = function (selectorOrNode, preserveContent) { };
    /**
     * @param {?} node
     * @return {?}
     */
    ProceduralRenderer3.prototype.parentNode = function (node) { };
    /**
     * @param {?} node
     * @return {?}
     */
    ProceduralRenderer3.prototype.nextSibling = function (node) { };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    ProceduralRenderer3.prototype.setAttribute = function (el, name, value, namespace) { };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    ProceduralRenderer3.prototype.removeAttribute = function (el, name, namespace) { };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    ProceduralRenderer3.prototype.addClass = function (el, name) { };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    ProceduralRenderer3.prototype.removeClass = function (el, name) { };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?=} flags
     * @return {?}
     */
    ProceduralRenderer3.prototype.setStyle = function (el, style, value, flags) { };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?=} flags
     * @return {?}
     */
    ProceduralRenderer3.prototype.removeStyle = function (el, style, flags) { };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    ProceduralRenderer3.prototype.setProperty = function (el, name, value) { };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    ProceduralRenderer3.prototype.setValue = function (node, value) { };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    ProceduralRenderer3.prototype.listen = function (target, eventName, callback) { };
}
/**
 * @record
 */
export function RendererFactory3() { }
if (false) {
    /**
     * @param {?} hostElement
     * @param {?} rendererType
     * @return {?}
     */
    RendererFactory3.prototype.createRenderer = function (hostElement, rendererType) { };
    /**
     * @return {?}
     */
    RendererFactory3.prototype.begin = function () { };
    /**
     * @return {?}
     */
    RendererFactory3.prototype.end = function () { };
}
const ɵ0 = /**
 * @param {?} hostElement
 * @param {?} rendererType
 * @return {?}
 */
(hostElement, rendererType) => {
    return getDocument();
};
/** @type {?} */
export const domRendererFactory3 = {
    createRenderer: (ɵ0)
};
/**
 * Subset of API needed for appending elements and text nodes.
 * @record
 */
export function RNode() { }
if (false) {
    /**
     * Returns the parent Element, Document, or DocumentFragment
     * @type {?}
     */
    RNode.prototype.parentNode;
    /**
     * Returns the parent Element if there is one
     * @type {?}
     */
    RNode.prototype.parentElement;
    /**
     * Gets the Node immediately following this one in the parent's childNodes
     * @type {?}
     */
    RNode.prototype.nextSibling;
    /**
     * Removes a child from the current node and returns the removed node
     * @param {?} oldChild the child node to remove
     * @return {?}
     */
    RNode.prototype.removeChild = function (oldChild) { };
    /**
     * Insert a child node.
     *
     * Used exclusively for adding View root nodes into ViewAnchor location.
     * @param {?} newChild
     * @param {?} refChild
     * @param {?} isViewRoot
     * @return {?}
     */
    RNode.prototype.insertBefore = function (newChild, refChild, isViewRoot) { };
    /**
     * Append a child node.
     *
     * Used exclusively for building up DOM which are static (ie not View roots)
     * @param {?} newChild
     * @return {?}
     */
    RNode.prototype.appendChild = function (newChild) { };
}
/**
 * Subset of API needed for writing attributes, properties, and setting up
 * listeners on Element.
 * @record
 */
export function RElement() { }
if (false) {
    /** @type {?} */
    RElement.prototype.style;
    /** @type {?} */
    RElement.prototype.classList;
    /** @type {?} */
    RElement.prototype.className;
    /** @type {?} */
    RElement.prototype.textContent;
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    RElement.prototype.setAttribute = function (name, value) { };
    /**
     * @param {?} name
     * @return {?}
     */
    RElement.prototype.removeAttribute = function (name) { };
    /**
     * @param {?} namespaceURI
     * @param {?} qualifiedName
     * @param {?} value
     * @return {?}
     */
    RElement.prototype.setAttributeNS = function (namespaceURI, qualifiedName, value) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} useCapture
     * @return {?}
     */
    RElement.prototype.addEventListener = function (type, listener, useCapture) { };
    /**
     * @param {?} type
     * @param {?=} listener
     * @param {?=} options
     * @return {?}
     */
    RElement.prototype.removeEventListener = function (type, listener, options) { };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    RElement.prototype.setProperty = function (name, value) { };
}
/**
 * @record
 */
export function RCssStyleDeclaration() { }
if (false) {
    /**
     * @param {?} propertyName
     * @return {?}
     */
    RCssStyleDeclaration.prototype.removeProperty = function (propertyName) { };
    /**
     * @param {?} propertyName
     * @param {?} value
     * @param {?=} priority
     * @return {?}
     */
    RCssStyleDeclaration.prototype.setProperty = function (propertyName, value, priority) { };
}
/**
 * @record
 */
export function RDomTokenList() { }
if (false) {
    /**
     * @param {?} token
     * @return {?}
     */
    RDomTokenList.prototype.add = function (token) { };
    /**
     * @param {?} token
     * @return {?}
     */
    RDomTokenList.prototype.remove = function (token) { };
}
/**
 * @record
 */
export function RText() { }
if (false) {
    /** @type {?} */
    RText.prototype.textContent;
}
/**
 * @record
 */
export function RComment() { }
if (false) {
    /** @type {?} */
    RComment.prototype.textContent;
}
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
/** @type {?} */
export const unusedValueExportToPlacateAjd = 1;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ludGVyZmFjZXMvcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7QUFHdkMsTUFBWSxtQkFBbUI7SUFDN0IsU0FBUyxHQUFTO0lBQ2xCLFFBQVEsR0FBUztFQUNsQjs7Ozs7Ozs7Ozs7OztBQWlCRCw2Q0FPQzs7Ozs7O0lBTkMsc0VBQXNDOzs7OztJQUN0Qyx5RUFBeUM7Ozs7OztJQUN6QyxzRkFBOEQ7Ozs7O0lBQzlELHVFQUFvQzs7Ozs7SUFFcEMsMkVBQWdEOzs7Ozs7O0FBSWxELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxRQUN1QjtJQUMxRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsUUFBUSxFQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QyxDQUFDOzs7Ozs7Ozs7QUFTRCx5Q0FrQ0M7Ozs7Ozs7O0lBeEJDLDBDQUEyQzs7OztJQVQzQyx3REFBZ0I7Ozs7O0lBQ2hCLG1FQUF1Qzs7Ozs7O0lBQ3ZDLDZFQUErRDs7Ozs7SUFDL0QsZ0VBQWlDOzs7Ozs7SUFPakMsNEVBQXFEOzs7Ozs7O0lBQ3JELHVGQUF5RTs7Ozs7OztJQUN6RSwyRkFBOEU7Ozs7OztJQUM5RSxpR0FBbUY7Ozs7O0lBRW5GLCtEQUF1Qzs7Ozs7SUFDdkMsZ0VBQXFDOzs7Ozs7OztJQUVyQyx1RkFBdUY7Ozs7Ozs7SUFDdkYsbUZBQTJFOzs7Ozs7SUFDM0UsaUVBQTJDOzs7Ozs7SUFDM0Msb0VBQThDOzs7Ozs7OztJQUM5QyxnRkFFMkQ7Ozs7Ozs7SUFDM0QsNEVBQWdHOzs7Ozs7O0lBQ2hHLDJFQUEwRDs7Ozs7O0lBQzFELG9FQUFvRDs7Ozs7OztJQUdwRCxrRkFFMEQ7Ozs7O0FBRzVELHNDQUlDOzs7Ozs7O0lBSEMscUZBQXdGOzs7O0lBQ3hGLG1EQUFlOzs7O0lBQ2YsaURBQWE7Ozs7Ozs7QUFJRyxDQUFDLFdBQTBCLEVBQUUsWUFBZ0MsRUFBYSxFQUFFO0lBQzFGLE9BQU8sV0FBVyxFQUFFLENBQUM7QUFDdkIsQ0FBQzs7QUFISCxNQUFNLE9BQU8sbUJBQW1CLEdBQXFCO0lBQ25ELGNBQWMsTUFFYjtDQUNGOzs7OztBQUdELDJCQW9DQzs7Ozs7O0lBaENDLDJCQUF1Qjs7Ozs7SUFNdkIsOEJBQTZCOzs7OztJQUs3Qiw0QkFBd0I7Ozs7OztJQU14QixzREFBb0M7Ozs7Ozs7Ozs7SUFPcEMsNkVBQStFOzs7Ozs7OztJQU8vRSxzREFBb0M7Ozs7Ozs7QUFPdEMsOEJBWUM7OztJQVhDLHlCQUE0Qjs7SUFDNUIsNkJBQXlCOztJQUN6Qiw2QkFBa0I7O0lBQ2xCLCtCQUF5Qjs7Ozs7O0lBQ3pCLDZEQUFnRDs7Ozs7SUFDaEQseURBQW9DOzs7Ozs7O0lBQ3BDLHNGQUFpRjs7Ozs7OztJQUNqRixnRkFBb0Y7Ozs7Ozs7SUFDcEYsZ0ZBQXFGOzs7Ozs7SUFFckYsNERBQTZDOzs7OztBQUcvQywwQ0FHQzs7Ozs7O0lBRkMsNEVBQTZDOzs7Ozs7O0lBQzdDLDBGQUErRTs7Ozs7QUFHakYsbUNBR0M7Ozs7OztJQUZDLG1EQUF5Qjs7Ozs7SUFDekIsc0RBQTRCOzs7OztBQUc5QiwyQkFFQzs7O0lBREMsNEJBQXlCOzs7OztBQUczQiw4QkFFQzs7O0lBREMsK0JBQXlCOzs7OztBQUszQixNQUFNLE9BQU8sNkJBQTZCLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBUaGUgZ29hbCBoZXJlIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBicm93c2VyIERPTSBBUEkgaXMgdGhlIFJlbmRlcmVyLlxuICogV2UgZG8gdGhpcyBieSBkZWZpbmluZyBhIHN1YnNldCBvZiBET00gQVBJIHRvIGJlIHRoZSByZW5kZXJlciBhbmQgdGhlblxuICogdXNlIHRoYXQgYXQgcnVudGltZSBmb3IgcmVuZGVyaW5nLlxuICpcbiAqIEF0IHJ1bnRpbWUgd2UgY2FuIHRoZW4gdXNlIHRoZSBET00gYXBpIGRpcmVjdGx5LCBpbiBzZXJ2ZXIgb3Igd2ViLXdvcmtlclxuICogaXQgd2lsbCBiZSBlYXN5IHRvIGltcGxlbWVudCBzdWNoIEFQSS5cbiAqL1xuXG5pbXBvcnQge1JlbmRlcmVyU3R5bGVGbGFnczIsIFJlbmRlcmVyVHlwZTJ9IGZyb20gJy4uLy4uL3JlbmRlci9hcGknO1xuaW1wb3J0IHtnZXREb2N1bWVudH0gZnJvbSAnLi9kb2N1bWVudCc7XG5cbi8vIFRPRE86IGNsZWFudXAgb25jZSB0aGUgY29kZSBpcyBtZXJnZWQgaW4gYW5ndWxhci9hbmd1bGFyXG5leHBvcnQgZW51bSBSZW5kZXJlclN0eWxlRmxhZ3MzIHtcbiAgSW1wb3J0YW50ID0gMSA8PCAwLFxuICBEYXNoQ2FzZSA9IDEgPDwgMVxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJlcjMgPSBPYmplY3RPcmllbnRlZFJlbmRlcmVyM3xQcm9jZWR1cmFsUmVuZGVyZXIzO1xuXG5leHBvcnQgdHlwZSBHbG9iYWxUYXJnZXROYW1lID0gJ2RvY3VtZW50J3wnd2luZG93J3wnYm9keSc7XG5cbmV4cG9ydCB0eXBlIEdsb2JhbFRhcmdldFJlc29sdmVyID0gKGVsZW1lbnQ6IGFueSkgPT4ge1xuICBuYW1lOiBHbG9iYWxUYXJnZXROYW1lLCB0YXJnZXQ6IEV2ZW50VGFyZ2V0XG59O1xuXG4vKipcbiAqIE9iamVjdCBPcmllbnRlZCBzdHlsZSBvZiBBUEkgbmVlZGVkIHRvIGNyZWF0ZSBlbGVtZW50cyBhbmQgdGV4dCBub2Rlcy5cbiAqXG4gKiBUaGlzIGlzIHRoZSBuYXRpdmUgYnJvd3NlciBBUEkgc3R5bGUsIGUuZy4gb3BlcmF0aW9ucyBhcmUgbWV0aG9kcyBvbiBpbmRpdmlkdWFsIG9iamVjdHNcbiAqIGxpa2UgSFRNTEVsZW1lbnQuIFdpdGggdGhpcyBzdHlsZSwgbm8gYWRkaXRpb25hbCBjb2RlIGlzIG5lZWRlZCBhcyBhIGZhY2FkZVxuICogKHJlZHVjaW5nIHBheWxvYWQgc2l6ZSkuXG4gKiAqL1xuZXhwb3J0IGludGVyZmFjZSBPYmplY3RPcmllbnRlZFJlbmRlcmVyMyB7XG4gIGNyZWF0ZUNvbW1lbnQoZGF0YTogc3RyaW5nKTogUkNvbW1lbnQ7XG4gIGNyZWF0ZUVsZW1lbnQodGFnTmFtZTogc3RyaW5nKTogUkVsZW1lbnQ7XG4gIGNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2U6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUkVsZW1lbnQ7XG4gIGNyZWF0ZVRleHROb2RlKGRhdGE6IHN0cmluZyk6IFJUZXh0O1xuXG4gIHF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzOiBzdHJpbmcpOiBSRWxlbWVudHxudWxsO1xufVxuXG4vKiogUmV0dXJucyB3aGV0aGVyIHRoZSBgcmVuZGVyZXJgIGlzIGEgYFByb2NlZHVyYWxSZW5kZXJlcjNgICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9jZWR1cmFsUmVuZGVyZXIocmVuZGVyZXI6IFByb2NlZHVyYWxSZW5kZXJlcjN8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0T3JpZW50ZWRSZW5kZXJlcjMpOiByZW5kZXJlciBpcyBQcm9jZWR1cmFsUmVuZGVyZXIzIHtcbiAgcmV0dXJuICEhKChyZW5kZXJlciBhcyBhbnkpLmxpc3Rlbik7XG59XG5cbi8qKlxuICogUHJvY2VkdXJhbCBzdHlsZSBvZiBBUEkgbmVlZGVkIHRvIGNyZWF0ZSBlbGVtZW50cyBhbmQgdGV4dCBub2Rlcy5cbiAqXG4gKiBJbiBub24tbmF0aXZlIGJyb3dzZXIgZW52aXJvbm1lbnRzIChlLmcuIHBsYXRmb3JtcyBzdWNoIGFzIHdlYi13b3JrZXJzKSwgdGhpcyBpcyB0aGVcbiAqIGZhY2FkZSB0aGF0IGVuYWJsZXMgZWxlbWVudCBtYW5pcHVsYXRpb24uIFRoaXMgYWxzbyBmYWNpbGl0YXRlcyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICogd2l0aCBSZW5kZXJlcjIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2VkdXJhbFJlbmRlcmVyMyB7XG4gIGRlc3Ryb3koKTogdm9pZDtcbiAgY3JlYXRlQ29tbWVudCh2YWx1ZTogc3RyaW5nKTogUkNvbW1lbnQ7XG4gIGNyZWF0ZUVsZW1lbnQobmFtZTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmd8bnVsbCk6IFJFbGVtZW50O1xuICBjcmVhdGVUZXh0KHZhbHVlOiBzdHJpbmcpOiBSVGV4dDtcbiAgLyoqXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgYWxsb3dlZCB0byBiZSBudWxsIC8gdW5kZWZpbmVkLFxuICAgKiBpbiB3aGljaCBjYXNlIHRoZSB2aWV3IGVuZ2luZSB3b24ndCBjYWxsIGl0LlxuICAgKiBUaGlzIGlzIHVzZWQgYXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gZm9yIHByb2R1Y3Rpb24gbW9kZS5cbiAgICovXG4gIGRlc3Ryb3lOb2RlPzogKChub2RlOiBSTm9kZSkgPT4gdm9pZCl8bnVsbDtcbiAgYXBwZW5kQ2hpbGQocGFyZW50OiBSRWxlbWVudCwgbmV3Q2hpbGQ6IFJOb2RlKTogdm9pZDtcbiAgaW5zZXJ0QmVmb3JlKHBhcmVudDogUk5vZGUsIG5ld0NoaWxkOiBSTm9kZSwgcmVmQ2hpbGQ6IFJOb2RlfG51bGwpOiB2b2lkO1xuICByZW1vdmVDaGlsZChwYXJlbnQ6IFJFbGVtZW50LCBvbGRDaGlsZDogUk5vZGUsIGlzSG9zdEVsZW1lbnQ/OiBib29sZWFuKTogdm9pZDtcbiAgc2VsZWN0Um9vdEVsZW1lbnQoc2VsZWN0b3JPck5vZGU6IHN0cmluZ3xhbnksIHByZXNlcnZlQ29udGVudD86IGJvb2xlYW4pOiBSRWxlbWVudDtcblxuICBwYXJlbnROb2RlKG5vZGU6IFJOb2RlKTogUkVsZW1lbnR8bnVsbDtcbiAgbmV4dFNpYmxpbmcobm9kZTogUk5vZGUpOiBSTm9kZXxudWxsO1xuXG4gIHNldEF0dHJpYnV0ZShlbDogUkVsZW1lbnQsIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nfG51bGwpOiB2b2lkO1xuICByZW1vdmVBdHRyaWJ1dGUoZWw6IFJFbGVtZW50LCBuYW1lOiBzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZ3xudWxsKTogdm9pZDtcbiAgYWRkQ2xhc3MoZWw6IFJFbGVtZW50LCBuYW1lOiBzdHJpbmcpOiB2b2lkO1xuICByZW1vdmVDbGFzcyhlbDogUkVsZW1lbnQsIG5hbWU6IHN0cmluZyk6IHZvaWQ7XG4gIHNldFN0eWxlKFxuICAgICAgZWw6IFJFbGVtZW50LCBzdHlsZTogc3RyaW5nLCB2YWx1ZTogYW55LFxuICAgICAgZmxhZ3M/OiBSZW5kZXJlclN0eWxlRmxhZ3MyfFJlbmRlcmVyU3R5bGVGbGFnczMpOiB2b2lkO1xuICByZW1vdmVTdHlsZShlbDogUkVsZW1lbnQsIHN0eWxlOiBzdHJpbmcsIGZsYWdzPzogUmVuZGVyZXJTdHlsZUZsYWdzMnxSZW5kZXJlclN0eWxlRmxhZ3MzKTogdm9pZDtcbiAgc2V0UHJvcGVydHkoZWw6IFJFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xuICBzZXRWYWx1ZShub2RlOiBSVGV4dHxSQ29tbWVudCwgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLy8gVE9ETyhtaXNrbyk6IERlcHJlY2F0ZSBpbiBmYXZvciBvZiBhZGRFdmVudExpc3RlbmVyL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgbGlzdGVuKFxuICAgICAgdGFyZ2V0OiBHbG9iYWxUYXJnZXROYW1lfFJOb2RlLCBldmVudE5hbWU6IHN0cmluZyxcbiAgICAgIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gYm9vbGVhbiB8IHZvaWQpOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlcmVyRmFjdG9yeTMge1xuICBjcmVhdGVSZW5kZXJlcihob3N0RWxlbWVudDogUkVsZW1lbnR8bnVsbCwgcmVuZGVyZXJUeXBlOiBSZW5kZXJlclR5cGUyfG51bGwpOiBSZW5kZXJlcjM7XG4gIGJlZ2luPygpOiB2b2lkO1xuICBlbmQ/KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBkb21SZW5kZXJlckZhY3RvcnkzOiBSZW5kZXJlckZhY3RvcnkzID0ge1xuICBjcmVhdGVSZW5kZXJlcjogKGhvc3RFbGVtZW50OiBSRWxlbWVudHxudWxsLCByZW5kZXJlclR5cGU6IFJlbmRlcmVyVHlwZTJ8bnVsbCk6IFJlbmRlcmVyMyA9PiB7XG4gICAgcmV0dXJuIGdldERvY3VtZW50KCk7XG4gIH1cbn07XG5cbi8qKiBTdWJzZXQgb2YgQVBJIG5lZWRlZCBmb3IgYXBwZW5kaW5nIGVsZW1lbnRzIGFuZCB0ZXh0IG5vZGVzLiAqL1xuZXhwb3J0IGludGVyZmFjZSBSTm9kZSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgRWxlbWVudCwgRG9jdW1lbnQsIG9yIERvY3VtZW50RnJhZ21lbnRcbiAgICovXG4gIHBhcmVudE5vZGU6IFJOb2RlfG51bGw7XG5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGFyZW50IEVsZW1lbnQgaWYgdGhlcmUgaXMgb25lXG4gICAqL1xuICBwYXJlbnRFbGVtZW50OiBSRWxlbWVudHxudWxsO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBOb2RlIGltbWVkaWF0ZWx5IGZvbGxvd2luZyB0aGlzIG9uZSBpbiB0aGUgcGFyZW50J3MgY2hpbGROb2Rlc1xuICAgKi9cbiAgbmV4dFNpYmxpbmc6IFJOb2RlfG51bGw7XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjaGlsZCBmcm9tIHRoZSBjdXJyZW50IG5vZGUgYW5kIHJldHVybnMgdGhlIHJlbW92ZWQgbm9kZVxuICAgKiBAcGFyYW0gb2xkQ2hpbGQgdGhlIGNoaWxkIG5vZGUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDaGlsZChvbGRDaGlsZDogUk5vZGUpOiBSTm9kZTtcblxuICAvKipcbiAgICogSW5zZXJ0IGEgY2hpbGQgbm9kZS5cbiAgICpcbiAgICogVXNlZCBleGNsdXNpdmVseSBmb3IgYWRkaW5nIFZpZXcgcm9vdCBub2RlcyBpbnRvIFZpZXdBbmNob3IgbG9jYXRpb24uXG4gICAqL1xuICBpbnNlcnRCZWZvcmUobmV3Q2hpbGQ6IFJOb2RlLCByZWZDaGlsZDogUk5vZGV8bnVsbCwgaXNWaWV3Um9vdDogYm9vbGVhbik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBhIGNoaWxkIG5vZGUuXG4gICAqXG4gICAqIFVzZWQgZXhjbHVzaXZlbHkgZm9yIGJ1aWxkaW5nIHVwIERPTSB3aGljaCBhcmUgc3RhdGljIChpZSBub3QgVmlldyByb290cylcbiAgICovXG4gIGFwcGVuZENoaWxkKG5ld0NoaWxkOiBSTm9kZSk6IFJOb2RlO1xufVxuXG4vKipcbiAqIFN1YnNldCBvZiBBUEkgbmVlZGVkIGZvciB3cml0aW5nIGF0dHJpYnV0ZXMsIHByb3BlcnRpZXMsIGFuZCBzZXR0aW5nIHVwXG4gKiBsaXN0ZW5lcnMgb24gRWxlbWVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSRWxlbWVudCBleHRlbmRzIFJOb2RlIHtcbiAgc3R5bGU6IFJDc3NTdHlsZURlY2xhcmF0aW9uO1xuICBjbGFzc0xpc3Q6IFJEb21Ub2tlbkxpc3Q7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICB0ZXh0Q29udGVudDogc3RyaW5nfG51bGw7XG4gIHNldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICByZW1vdmVBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogdm9pZDtcbiAgc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcsIHF1YWxpZmllZE5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pOiB2b2lkO1xuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgbGlzdGVuZXI/OiBFdmVudExpc3RlbmVyLCBvcHRpb25zPzogYm9vbGVhbik6IHZvaWQ7XG5cbiAgc2V0UHJvcGVydHk/KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUkNzc1N0eWxlRGVjbGFyYXRpb24ge1xuICByZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IHN0cmluZztcbiAgc2V0UHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8bnVsbCwgcHJpb3JpdHk/OiBzdHJpbmcpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJEb21Ub2tlbkxpc3Qge1xuICBhZGQodG9rZW46IHN0cmluZyk6IHZvaWQ7XG4gIHJlbW92ZSh0b2tlbjogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSVGV4dCBleHRlbmRzIFJOb2RlIHtcbiAgdGV4dENvbnRlbnQ6IHN0cmluZ3xudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJDb21tZW50IGV4dGVuZHMgUk5vZGUge1xuICB0ZXh0Q29udGVudDogc3RyaW5nfG51bGw7XG59XG5cbi8vIE5vdGU6IFRoaXMgaGFjayBpcyBuZWNlc3Nhcnkgc28gd2UgZG9uJ3QgZXJyb25lb3VzbHkgZ2V0IGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuLy8gZmFpbHVyZSBiYXNlZCBvbiB0eXBlcy5cbmV4cG9ydCBjb25zdCB1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCA9IDE7XG4iXX0=