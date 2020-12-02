/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/dom_adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
let _DOM = (/** @type {?} */ (null));
/**
 * @return {?}
 */
export function getDOM() {
    return _DOM;
}
/**
 * @param {?} adapter
 * @return {?}
 */
export function setDOM(adapter) {
    _DOM = adapter;
}
/**
 * @param {?} adapter
 * @return {?}
 */
export function setRootDomAdapter(adapter) {
    if (!_DOM) {
        _DOM = adapter;
    }
}
/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 * @abstract
 */
export class DomAdapter {
}
if (false) {
    /**
     * @abstract
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    DomAdapter.prototype.getProperty = function (el, name) { };
    /**
     * @abstract
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    DomAdapter.prototype.dispatchEvent = function (el, evt) { };
    /**
     * @abstract
     * @param {?} error
     * @return {?}
     */
    DomAdapter.prototype.log = function (error) { };
    /**
     * @abstract
     * @param {?} error
     * @return {?}
     */
    DomAdapter.prototype.logGroup = function (error) { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.logGroupEnd = function () { };
    /**
     * @abstract
     * @param {?} el
     * @return {?}
     */
    DomAdapter.prototype.remove = function (el) { };
    /**
     * @abstract
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    DomAdapter.prototype.createElement = function (tagName, doc) { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.createHtmlDocument = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.getDefaultDocument = function () { };
    /**
     * @abstract
     * @param {?} node
     * @return {?}
     */
    DomAdapter.prototype.isElementNode = function (node) { };
    /**
     * @abstract
     * @param {?} node
     * @return {?}
     */
    DomAdapter.prototype.isShadowRoot = function (node) { };
    /**
     * @abstract
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    DomAdapter.prototype.onAndCancel = function (el, evt, listener) { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.supportsDOMEvents = function () { };
    /**
     * @abstract
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    DomAdapter.prototype.getGlobalEventTarget = function (doc, target) { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.getHistory = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.getLocation = function () { };
    /**
     * This is the ambient Location definition, NOT Location from \@angular/common.
     * @abstract
     * @param {?} doc
     * @return {?}
     */
    DomAdapter.prototype.getBaseHref = function (doc) { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.resetBaseElement = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.getUserAgent = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.performanceNow = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DomAdapter.prototype.supportsCookies = function () { };
    /**
     * @abstract
     * @param {?} name
     * @return {?}
     */
    DomAdapter.prototype.getCookie = function (name) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX2FkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2RvbV9hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFRSSxJQUFJLEdBQWUsbUJBQUEsSUFBSSxFQUFDOzs7O0FBRTVCLE1BQU0sVUFBVSxNQUFNO0lBQ3BCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLE9BQW1CO0lBQ3hDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDakIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsT0FBbUI7SUFDbkQsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULElBQUksR0FBRyxPQUFPLENBQUM7S0FDaEI7QUFDSCxDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLE9BQWdCLFVBQVU7Q0E2Qy9COzs7Ozs7OztJQTNDQywyREFBcUQ7Ozs7Ozs7SUFDckQsNERBQStDOzs7Ozs7SUFHL0MsZ0RBQThCOzs7Ozs7SUFDOUIscURBQW1DOzs7OztJQUNuQyxtREFBNEI7Ozs7OztJQUc1QixnREFBK0I7Ozs7Ozs7SUFDL0IsaUVBQTZEOzs7OztJQUM3RCwwREFBNEM7Ozs7O0lBQzVDLDBEQUF3Qzs7Ozs7O0lBR3hDLHlEQUEyQzs7Ozs7O0lBRzNDLHdEQUEwQzs7Ozs7Ozs7SUFHMUMsb0VBQWlFOzs7OztJQUNqRSx5REFBc0M7Ozs7Ozs7SUFHdEMsdUVBQWtFOzs7OztJQUdsRSxrREFBK0I7Ozs7O0lBQy9CLG1EQUNROzs7Ozs7O0lBQ1Isc0RBQWlEOzs7OztJQUNqRCx3REFBa0M7Ozs7O0lBR2xDLG9EQUFnQzs7Ozs7SUFHaEMsc0RBQWtDOzs7OztJQUdsQyx1REFBb0M7Ozs7OztJQUNwQyxxREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmxldCBfRE9NOiBEb21BZGFwdGVyID0gbnVsbCE7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRET00oKTogRG9tQWRhcHRlciB7XG4gIHJldHVybiBfRE9NO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RE9NKGFkYXB0ZXI6IERvbUFkYXB0ZXIpIHtcbiAgX0RPTSA9IGFkYXB0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSb290RG9tQWRhcHRlcihhZGFwdGVyOiBEb21BZGFwdGVyKSB7XG4gIGlmICghX0RPTSkge1xuICAgIF9ET00gPSBhZGFwdGVyO1xuICB9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlOnJlcXVpcmVQYXJhbWV0ZXJUeXBlICovXG4vKipcbiAqIFByb3ZpZGVzIERPTSBvcGVyYXRpb25zIGluIGFuIGVudmlyb25tZW50LWFnbm9zdGljIHdheS5cbiAqXG4gKiBAc2VjdXJpdHkgVHJlYWQgY2FyZWZ1bGx5ISBJbnRlcmFjdGluZyB3aXRoIHRoZSBET00gZGlyZWN0bHkgaXMgZGFuZ2Vyb3VzIGFuZFxuICogY2FuIGludHJvZHVjZSBYU1Mgcmlza3MuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb21BZGFwdGVyIHtcbiAgLy8gTmVlZHMgRG9taW5vLWZyaWVuZGx5IHRlc3QgdXRpbGl0eVxuICBhYnN0cmFjdCBnZXRQcm9wZXJ0eShlbDogRWxlbWVudCwgbmFtZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBkaXNwYXRjaEV2ZW50KGVsOiBhbnksIGV2dDogYW55KTogYW55O1xuXG4gIC8vIFVzZWQgYnkgcm91dGVyXG4gIGFic3RyYWN0IGxvZyhlcnJvcjogYW55KTogYW55O1xuICBhYnN0cmFjdCBsb2dHcm91cChlcnJvcjogYW55KTogYW55O1xuICBhYnN0cmFjdCBsb2dHcm91cEVuZCgpOiBhbnk7XG5cbiAgLy8gVXNlZCBieSBNZXRhXG4gIGFic3RyYWN0IHJlbW92ZShlbDogYW55KTogTm9kZTtcbiAgYWJzdHJhY3QgY3JlYXRlRWxlbWVudCh0YWdOYW1lOiBhbnksIGRvYz86IGFueSk6IEhUTUxFbGVtZW50O1xuICBhYnN0cmFjdCBjcmVhdGVIdG1sRG9jdW1lbnQoKTogSFRNTERvY3VtZW50O1xuICBhYnN0cmFjdCBnZXREZWZhdWx0RG9jdW1lbnQoKTogRG9jdW1lbnQ7XG5cbiAgLy8gVXNlZCBieSBCeS5jc3NcbiAgYWJzdHJhY3QgaXNFbGVtZW50Tm9kZShub2RlOiBhbnkpOiBib29sZWFuO1xuXG4gIC8vIFVzZWQgYnkgVGVzdGFiaWxpdHlcbiAgYWJzdHJhY3QgaXNTaGFkb3dSb290KG5vZGU6IGFueSk6IGJvb2xlYW47XG5cbiAgLy8gVXNlZCBieSBLZXlFdmVudHNQbHVnaW5cbiAgYWJzdHJhY3Qgb25BbmRDYW5jZWwoZWw6IGFueSwgZXZ0OiBhbnksIGxpc3RlbmVyOiBhbnkpOiBGdW5jdGlvbjtcbiAgYWJzdHJhY3Qgc3VwcG9ydHNET01FdmVudHMoKTogYm9vbGVhbjtcblxuICAvLyBVc2VkIGJ5IFBsYXRmb3JtTG9jYXRpb24gYW5kIFNlcnZlckV2ZW50TWFuYWdlclBsdWdpblxuICBhYnN0cmFjdCBnZXRHbG9iYWxFdmVudFRhcmdldChkb2M6IERvY3VtZW50LCB0YXJnZXQ6IHN0cmluZyk6IGFueTtcblxuICAvLyBVc2VkIGJ5IFBsYXRmb3JtTG9jYXRpb25cbiAgYWJzdHJhY3QgZ2V0SGlzdG9yeSgpOiBIaXN0b3J5O1xuICBhYnN0cmFjdCBnZXRMb2NhdGlvbigpOlxuICAgICAgYW55OyAvKiogVGhpcyBpcyB0aGUgYW1iaWVudCBMb2NhdGlvbiBkZWZpbml0aW9uLCBOT1QgTG9jYXRpb24gZnJvbSBAYW5ndWxhci9jb21tb24uICAqL1xuICBhYnN0cmFjdCBnZXRCYXNlSHJlZihkb2M6IERvY3VtZW50KTogc3RyaW5nfG51bGw7XG4gIGFic3RyYWN0IHJlc2V0QmFzZUVsZW1lbnQoKTogdm9pZDtcblxuICAvLyBUT0RPOiByZW1vdmUgZGVwZW5kZW5jeSBpbiBEZWZhdWx0VmFsdWVBY2Nlc3NvclxuICBhYnN0cmFjdCBnZXRVc2VyQWdlbnQoKTogc3RyaW5nO1xuXG4gIC8vIFVzZWQgYnkgQW5ndWxhclByb2ZpbGVyXG4gIGFic3RyYWN0IHBlcmZvcm1hbmNlTm93KCk6IG51bWJlcjtcblxuICAvLyBVc2VkIGJ5IENvb2tpZVhTUkZTdHJhdGVneVxuICBhYnN0cmFjdCBzdXBwb3J0c0Nvb2tpZXMoKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgZ2V0Q29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZ3xudWxsO1xufVxuIl19