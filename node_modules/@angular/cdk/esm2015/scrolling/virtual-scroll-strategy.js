/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/virtual-scroll-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */
export const VIRTUAL_SCROLL_STRATEGY = new InjectionToken('VIRTUAL_SCROLL_STRATEGY');
/**
 * A strategy that dictates which items should be rendered in the viewport.
 * @record
 */
export function VirtualScrollStrategy() { }
if (false) {
    /**
     * Emits when the index of the first element visible in the viewport changes.
     * @type {?}
     */
    VirtualScrollStrategy.prototype.scrolledIndexChange;
    /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    VirtualScrollStrategy.prototype.attach = function (viewport) { };
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    VirtualScrollStrategy.prototype.detach = function () { };
    /**
     * Called when the viewport is scrolled (debounced using requestAnimationFrame).
     * @return {?}
     */
    VirtualScrollStrategy.prototype.onContentScrolled = function () { };
    /**
     * Called when the length of the data changes.
     * @return {?}
     */
    VirtualScrollStrategy.prototype.onDataLengthChanged = function () { };
    /**
     * Called when the range of items rendered in the DOM has changed.
     * @return {?}
     */
    VirtualScrollStrategy.prototype.onContentRendered = function () { };
    /**
     * Called when the offset of the rendered items changed.
     * @return {?}
     */
    VirtualScrollStrategy.prototype.onRenderedOffsetChanged = function () { };
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    VirtualScrollStrategy.prototype.scrollToIndex = function (index, behavior) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwtc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3Njcm9sbGluZy92aXJ0dWFsLXNjcm9sbC1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQU03QyxNQUFNLE9BQU8sdUJBQXVCLEdBQ2hDLElBQUksY0FBYyxDQUF3Qix5QkFBeUIsQ0FBQzs7Ozs7QUFJeEUsMkNBK0JDOzs7Ozs7SUE3QkMsb0RBQXdDOzs7Ozs7SUFNeEMsaUVBQWlEOzs7OztJQUdqRCx5REFBZTs7Ozs7SUFHZixvRUFBMEI7Ozs7O0lBRzFCLHNFQUE0Qjs7Ozs7SUFHNUIsb0VBQTBCOzs7OztJQUcxQiwwRUFBZ0M7Ozs7Ozs7SUFPaEMsK0VBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Q2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0fSBmcm9tICcuL3ZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0JztcblxuXG4vKiogVGhlIGluamVjdGlvbiB0b2tlbiB1c2VkIHRvIHNwZWNpZnkgdGhlIHZpcnR1YWwgc2Nyb2xsaW5nIHN0cmF0ZWd5LiAqL1xuZXhwb3J0IGNvbnN0IFZJUlRVQUxfU0NST0xMX1NUUkFURUdZID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48VmlydHVhbFNjcm9sbFN0cmF0ZWd5PignVklSVFVBTF9TQ1JPTExfU1RSQVRFR1knKTtcblxuXG4vKiogQSBzdHJhdGVneSB0aGF0IGRpY3RhdGVzIHdoaWNoIGl0ZW1zIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdmlld3BvcnQuICovXG5leHBvcnQgaW50ZXJmYWNlIFZpcnR1YWxTY3JvbGxTdHJhdGVneSB7XG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZWxlbWVudCB2aXNpYmxlIGluIHRoZSB2aWV3cG9ydCBjaGFuZ2VzLiAqL1xuICBzY3JvbGxlZEluZGV4Q2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHRoaXMgc2Nyb2xsIHN0cmF0ZWd5IHRvIGEgdmlld3BvcnQuXG4gICAqIEBwYXJhbSB2aWV3cG9ydCBUaGUgdmlld3BvcnQgdG8gYXR0YWNoIHRoaXMgc3RyYXRlZ3kgdG8uXG4gICAqL1xuICBhdHRhY2godmlld3BvcnQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCk6IHZvaWQ7XG5cbiAgLyoqIERldGFjaGVzIHRoaXMgc2Nyb2xsIHN0cmF0ZWd5IGZyb20gdGhlIGN1cnJlbnRseSBhdHRhY2hlZCB2aWV3cG9ydC4gKi9cbiAgZGV0YWNoKCk6IHZvaWQ7XG5cbiAgLyoqIENhbGxlZCB3aGVuIHRoZSB2aWV3cG9ydCBpcyBzY3JvbGxlZCAoZGVib3VuY2VkIHVzaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSkuICovXG4gIG9uQ29udGVudFNjcm9sbGVkKCk6IHZvaWQ7XG5cbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBsZW5ndGggb2YgdGhlIGRhdGEgY2hhbmdlcy4gKi9cbiAgb25EYXRhTGVuZ3RoQ2hhbmdlZCgpOiB2b2lkO1xuXG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcmFuZ2Ugb2YgaXRlbXMgcmVuZGVyZWQgaW4gdGhlIERPTSBoYXMgY2hhbmdlZC4gKi9cbiAgb25Db250ZW50UmVuZGVyZWQoKTogdm9pZDtcblxuICAvKiogQ2FsbGVkIHdoZW4gdGhlIG9mZnNldCBvZiB0aGUgcmVuZGVyZWQgaXRlbXMgY2hhbmdlZC4gKi9cbiAgb25SZW5kZXJlZE9mZnNldENoYW5nZWQoKTogdm9pZDtcblxuICAvKipcbiAgICogU2Nyb2xsIHRvIHRoZSBvZmZzZXQgZm9yIHRoZSBnaXZlbiBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCB0byBzY3JvbGwgdG8uXG4gICAqIEBwYXJhbSBiZWhhdmlvciBUaGUgU2Nyb2xsQmVoYXZpb3IgdG8gdXNlIHdoZW4gc2Nyb2xsaW5nLlxuICAgKi9cbiAgc2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBiZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IpOiB2b2lkO1xufVxuIl19