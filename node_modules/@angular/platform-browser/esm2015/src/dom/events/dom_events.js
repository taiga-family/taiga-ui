/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/src/dom/events/dom_events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { EventManagerPlugin } from './event_manager';
export class DomEventsPlugin extends EventManagerPlugin {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        super(doc);
    }
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    /**
     * @param {?} eventName
     * @return {?}
     */
    supports(eventName) {
        return true;
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    addEventListener(element, eventName, handler) {
        element.addEventListener(eventName, (/** @type {?} */ (handler)), false);
        return (/**
         * @return {?}
         */
        () => this.removeEventListener(element, eventName, (/** @type {?} */ (handler))));
    }
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    removeEventListener(target, eventName, callback) {
        return target.removeEventListener(eventName, (/** @type {?} */ (callback)));
    }
}
DomEventsPlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DomEventsPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX2V2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2RvbS9ldmVudHMvZG9tX2V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFHbkQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsa0JBQWtCOzs7O0lBQ3JELFlBQThCLEdBQVE7UUFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7OztJQUlELFFBQVEsQ0FBQyxTQUFpQjtRQUN4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFvQixFQUFFLFNBQWlCLEVBQUUsT0FBaUI7UUFDekUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxtQkFBQSxPQUFPLEVBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckU7OztRQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxFQUFDO0lBQ3RGLENBQUM7Ozs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxNQUFXLEVBQUUsU0FBaUIsRUFBRSxRQUFrQjtRQUNwRSxPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsbUJBQUEsUUFBUSxFQUFpQixDQUFDLENBQUM7SUFDMUUsQ0FBQzs7O1lBbkJGLFVBQVU7Ozs7NENBRUksTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7RXZlbnRNYW5hZ2VyUGx1Z2lufSBmcm9tICcuL2V2ZW50X21hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tRXZlbnRzUGx1Z2luIGV4dGVuZHMgRXZlbnRNYW5hZ2VyUGx1Z2luIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnkpIHtcbiAgICBzdXBlcihkb2MpO1xuICB9XG5cbiAgLy8gVGhpcyBwbHVnaW4gc2hvdWxkIGNvbWUgbGFzdCBpbiB0aGUgbGlzdCBvZiBwbHVnaW5zLCBiZWNhdXNlIGl0IGFjY2VwdHMgYWxsXG4gIC8vIGV2ZW50cy5cbiAgc3VwcG9ydHMoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyIGFzIEV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIodGFyZ2V0OiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICByZXR1cm4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayBhcyBFdmVudExpc3RlbmVyKTtcbiAgfVxufVxuIl19