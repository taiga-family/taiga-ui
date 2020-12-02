/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Event emitted when the user starts dragging a draggable.
 * @record
 * @template T
 */
export function CdkDragStart() { }
if (false) {
    /**
     * Draggable that emitted the event.
     * @type {?}
     */
    CdkDragStart.prototype.source;
}
/**
 * Event emitted when the user releases an item, before any animations have started.
 * @record
 * @template T
 */
export function CdkDragRelease() { }
if (false) {
    /**
     * Draggable that emitted the event.
     * @type {?}
     */
    CdkDragRelease.prototype.source;
}
/**
 * Event emitted when the user stops dragging a draggable.
 * @record
 * @template T
 */
export function CdkDragEnd() { }
if (false) {
    /**
     * Draggable that emitted the event.
     * @type {?}
     */
    CdkDragEnd.prototype.source;
    /**
     * Distance in pixels that the user has dragged since the drag sequence started.
     * @type {?}
     */
    CdkDragEnd.prototype.distance;
}
/**
 * Event emitted when the user moves an item into a new drop container.
 * @record
 * @template T, I
 */
export function CdkDragEnter() { }
if (false) {
    /**
     * Container into which the user has moved the item.
     * @type {?}
     */
    CdkDragEnter.prototype.container;
    /**
     * Item that was moved into the container.
     * @type {?}
     */
    CdkDragEnter.prototype.item;
    /**
     * Index at which the item has entered the container.
     * @type {?}
     */
    CdkDragEnter.prototype.currentIndex;
}
/**
 * Event emitted when the user removes an item from a
 * drop container by moving it into another one.
 * @record
 * @template T, I
 */
export function CdkDragExit() { }
if (false) {
    /**
     * Container from which the user has a removed an item.
     * @type {?}
     */
    CdkDragExit.prototype.container;
    /**
     * Item that was removed from the container.
     * @type {?}
     */
    CdkDragExit.prototype.item;
}
/**
 * Event emitted when the user drops a draggable item inside a drop container.
 * @record
 * @template T, O
 */
export function CdkDragDrop() { }
if (false) {
    /**
     * Index of the item when it was picked up.
     * @type {?}
     */
    CdkDragDrop.prototype.previousIndex;
    /**
     * Current index of the item.
     * @type {?}
     */
    CdkDragDrop.prototype.currentIndex;
    /**
     * Item that is being dropped.
     * @type {?}
     */
    CdkDragDrop.prototype.item;
    /**
     * Container in which the item was dropped.
     * @type {?}
     */
    CdkDragDrop.prototype.container;
    /**
     * Container from which the item was picked up. Can be the same as the `container`.
     * @type {?}
     */
    CdkDragDrop.prototype.previousContainer;
    /**
     * Whether the user's pointer was over the container when the item was dropped.
     * @type {?}
     */
    CdkDragDrop.prototype.isPointerOverContainer;
    /**
     * Distance in pixels that the user has dragged since the drag sequence started.
     * @type {?}
     */
    CdkDragDrop.prototype.distance;
}
/**
 * Event emitted as the user is dragging a draggable item.
 * @record
 * @template T
 */
export function CdkDragMove() { }
if (false) {
    /**
     * Item that is being dragged.
     * @type {?}
     */
    CdkDragMove.prototype.source;
    /**
     * Position of the user's pointer on the page.
     * @type {?}
     */
    CdkDragMove.prototype.pointerPosition;
    /**
     * Native event that is causing the dragging.
     * @type {?}
     */
    CdkDragMove.prototype.event;
    /**
     * Distance in pixels that the user has dragged since the drag sequence started.
     * @type {?}
     */
    CdkDragMove.prototype.distance;
    /**
     * Indicates the direction in which the user is dragging the element along each axis.
     * `1` means that the position is increasing (e.g. the user is moving to the right or downwards),
     * whereas `-1` means that it's decreasing (they're moving to the left or upwards). `0` means
     * that the position hasn't changed.
     * @type {?}
     */
    CdkDragMove.prototype.delta;
}
/**
 * Event emitted when the user swaps the position of two drag items.
 * @record
 * @template T, I
 */
export function CdkDragSortEvent() { }
if (false) {
    /**
     * Index from which the item was sorted previously.
     * @type {?}
     */
    CdkDragSortEvent.prototype.previousIndex;
    /**
     * Index that the item is currently in.
     * @type {?}
     */
    CdkDragSortEvent.prototype.currentIndex;
    /**
     * Container that the item belongs to.
     * @type {?}
     */
    CdkDragSortEvent.prototype.container;
    /**
     * Item that is being sorted.
     * @type {?}
     */
    CdkDragSortEvent.prototype.item;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1ldmVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9kcmFnLWV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLGtDQUdDOzs7Ozs7SUFEQyw4QkFBbUI7Ozs7Ozs7QUFJckIsb0NBR0M7Ozs7OztJQURDLGdDQUFtQjs7Ozs7OztBQUlyQixnQ0FLQzs7Ozs7O0lBSEMsNEJBQW1COzs7OztJQUVuQiw4QkFBaUM7Ozs7Ozs7QUFJbkMsa0NBT0M7Ozs7OztJQUxDLGlDQUEwQjs7Ozs7SUFFMUIsNEJBQWlCOzs7OztJQUVqQixvQ0FBcUI7Ozs7Ozs7O0FBT3ZCLGlDQUtDOzs7Ozs7SUFIQyxnQ0FBMEI7Ozs7O0lBRTFCLDJCQUFpQjs7Ozs7OztBQUtuQixpQ0FlQzs7Ozs7O0lBYkMsb0NBQXNCOzs7OztJQUV0QixtQ0FBcUI7Ozs7O0lBRXJCLDJCQUFjOzs7OztJQUVkLGdDQUEwQjs7Ozs7SUFFMUIsd0NBQWtDOzs7OztJQUVsQyw2Q0FBZ0M7Ozs7O0lBRWhDLCtCQUFpQzs7Ozs7OztBQUluQyxpQ0FnQkM7Ozs7OztJQWRDLDZCQUFtQjs7Ozs7SUFFbkIsc0NBQXdDOzs7OztJQUV4Qyw0QkFBK0I7Ozs7O0lBRS9CLCtCQUFpQzs7Ozs7Ozs7SUFPakMsNEJBQXNDOzs7Ozs7O0FBSXhDLHNDQVNDOzs7Ozs7SUFQQyx5Q0FBc0I7Ozs7O0lBRXRCLHdDQUFxQjs7Ozs7SUFFckIscUNBQTBCOzs7OztJQUUxQixnQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDZGtEcmFnfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhZyc7XG5pbXBvcnQge0Nka0Ryb3BMaXN0fSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcC1saXN0JztcblxuLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgYSBkcmFnZ2FibGUuICovXG5leHBvcnQgaW50ZXJmYWNlIENka0RyYWdTdGFydDxUID0gYW55PiB7XG4gIC8qKiBEcmFnZ2FibGUgdGhhdCBlbWl0dGVkIHRoZSBldmVudC4gKi9cbiAgc291cmNlOiBDZGtEcmFnPFQ+O1xufVxuXG4vKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHJlbGVhc2VzIGFuIGl0ZW0sIGJlZm9yZSBhbnkgYW5pbWF0aW9ucyBoYXZlIHN0YXJ0ZWQuICovXG5leHBvcnQgaW50ZXJmYWNlIENka0RyYWdSZWxlYXNlPFQgPSBhbnk+IHtcbiAgLyoqIERyYWdnYWJsZSB0aGF0IGVtaXR0ZWQgdGhlIGV2ZW50LiAqL1xuICBzb3VyY2U6IENka0RyYWc8VD47XG59XG5cbi8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgYSBkcmFnZ2FibGUuICovXG5leHBvcnQgaW50ZXJmYWNlIENka0RyYWdFbmQ8VCA9IGFueT4ge1xuICAvKiogRHJhZ2dhYmxlIHRoYXQgZW1pdHRlZCB0aGUgZXZlbnQuICovXG4gIHNvdXJjZTogQ2RrRHJhZzxUPjtcbiAgLyoqIERpc3RhbmNlIGluIHBpeGVscyB0aGF0IHRoZSB1c2VyIGhhcyBkcmFnZ2VkIHNpbmNlIHRoZSBkcmFnIHNlcXVlbmNlIHN0YXJ0ZWQuICovXG4gIGRpc3RhbmNlOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xufVxuXG4vKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIGFuIGl0ZW0gaW50byBhIG5ldyBkcm9wIGNvbnRhaW5lci4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrRHJhZ0VudGVyPFQgPSBhbnksIEkgPSBUPiB7XG4gIC8qKiBDb250YWluZXIgaW50byB3aGljaCB0aGUgdXNlciBoYXMgbW92ZWQgdGhlIGl0ZW0uICovXG4gIGNvbnRhaW5lcjogQ2RrRHJvcExpc3Q8VD47XG4gIC8qKiBJdGVtIHRoYXQgd2FzIG1vdmVkIGludG8gdGhlIGNvbnRhaW5lci4gKi9cbiAgaXRlbTogQ2RrRHJhZzxJPjtcbiAgLyoqIEluZGV4IGF0IHdoaWNoIHRoZSBpdGVtIGhhcyBlbnRlcmVkIHRoZSBjb250YWluZXIuICovXG4gIGN1cnJlbnRJbmRleDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciByZW1vdmVzIGFuIGl0ZW0gZnJvbSBhXG4gKiBkcm9wIGNvbnRhaW5lciBieSBtb3ZpbmcgaXQgaW50byBhbm90aGVyIG9uZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZGtEcmFnRXhpdDxUID0gYW55LCBJID0gVD4ge1xuICAvKiogQ29udGFpbmVyIGZyb20gd2hpY2ggdGhlIHVzZXIgaGFzIGEgcmVtb3ZlZCBhbiBpdGVtLiAqL1xuICBjb250YWluZXI6IENka0Ryb3BMaXN0PFQ+O1xuICAvKiogSXRlbSB0aGF0IHdhcyByZW1vdmVkIGZyb20gdGhlIGNvbnRhaW5lci4gKi9cbiAgaXRlbTogQ2RrRHJhZzxJPjtcbn1cblxuXG4vKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGRyb3BzIGEgZHJhZ2dhYmxlIGl0ZW0gaW5zaWRlIGEgZHJvcCBjb250YWluZXIuICovXG5leHBvcnQgaW50ZXJmYWNlIENka0RyYWdEcm9wPFQsIE8gPSBUPiB7XG4gIC8qKiBJbmRleCBvZiB0aGUgaXRlbSB3aGVuIGl0IHdhcyBwaWNrZWQgdXAuICovXG4gIHByZXZpb3VzSW5kZXg6IG51bWJlcjtcbiAgLyoqIEN1cnJlbnQgaW5kZXggb2YgdGhlIGl0ZW0uICovXG4gIGN1cnJlbnRJbmRleDogbnVtYmVyO1xuICAvKiogSXRlbSB0aGF0IGlzIGJlaW5nIGRyb3BwZWQuICovXG4gIGl0ZW06IENka0RyYWc7XG4gIC8qKiBDb250YWluZXIgaW4gd2hpY2ggdGhlIGl0ZW0gd2FzIGRyb3BwZWQuICovXG4gIGNvbnRhaW5lcjogQ2RrRHJvcExpc3Q8VD47XG4gIC8qKiBDb250YWluZXIgZnJvbSB3aGljaCB0aGUgaXRlbSB3YXMgcGlja2VkIHVwLiBDYW4gYmUgdGhlIHNhbWUgYXMgdGhlIGBjb250YWluZXJgLiAqL1xuICBwcmV2aW91c0NvbnRhaW5lcjogQ2RrRHJvcExpc3Q8Tz47XG4gIC8qKiBXaGV0aGVyIHRoZSB1c2VyJ3MgcG9pbnRlciB3YXMgb3ZlciB0aGUgY29udGFpbmVyIHdoZW4gdGhlIGl0ZW0gd2FzIGRyb3BwZWQuICovXG4gIGlzUG9pbnRlck92ZXJDb250YWluZXI6IGJvb2xlYW47XG4gIC8qKiBEaXN0YW5jZSBpbiBwaXhlbHMgdGhhdCB0aGUgdXNlciBoYXMgZHJhZ2dlZCBzaW5jZSB0aGUgZHJhZyBzZXF1ZW5jZSBzdGFydGVkLiAqL1xuICBkaXN0YW5jZToge3g6IG51bWJlciwgeTogbnVtYmVyfTtcbn1cblxuLyoqIEV2ZW50IGVtaXR0ZWQgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgYSBkcmFnZ2FibGUgaXRlbS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrRHJhZ01vdmU8VCA9IGFueT4ge1xuICAvKiogSXRlbSB0aGF0IGlzIGJlaW5nIGRyYWdnZWQuICovXG4gIHNvdXJjZTogQ2RrRHJhZzxUPjtcbiAgLyoqIFBvc2l0aW9uIG9mIHRoZSB1c2VyJ3MgcG9pbnRlciBvbiB0aGUgcGFnZS4gKi9cbiAgcG9pbnRlclBvc2l0aW9uOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xuICAvKiogTmF0aXZlIGV2ZW50IHRoYXQgaXMgY2F1c2luZyB0aGUgZHJhZ2dpbmcuICovXG4gIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbiAgLyoqIERpc3RhbmNlIGluIHBpeGVscyB0aGF0IHRoZSB1c2VyIGhhcyBkcmFnZ2VkIHNpbmNlIHRoZSBkcmFnIHNlcXVlbmNlIHN0YXJ0ZWQuICovXG4gIGRpc3RhbmNlOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgZHJhZ2dpbmcgdGhlIGVsZW1lbnQgYWxvbmcgZWFjaCBheGlzLlxuICAgKiBgMWAgbWVhbnMgdGhhdCB0aGUgcG9zaXRpb24gaXMgaW5jcmVhc2luZyAoZS5nLiB0aGUgdXNlciBpcyBtb3ZpbmcgdG8gdGhlIHJpZ2h0IG9yIGRvd253YXJkcyksXG4gICAqIHdoZXJlYXMgYC0xYCBtZWFucyB0aGF0IGl0J3MgZGVjcmVhc2luZyAodGhleSdyZSBtb3ZpbmcgdG8gdGhlIGxlZnQgb3IgdXB3YXJkcykuIGAwYCBtZWFuc1xuICAgKiB0aGF0IHRoZSBwb3NpdGlvbiBoYXNuJ3QgY2hhbmdlZC5cbiAgICovXG4gIGRlbHRhOiB7eDogLTEgfCAwIHwgMSwgeTogLTEgfCAwIHwgMX07XG59XG5cbi8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgc3dhcHMgdGhlIHBvc2l0aW9uIG9mIHR3byBkcmFnIGl0ZW1zLiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZGtEcmFnU29ydEV2ZW50PFQgPSBhbnksIEkgPSBUPiB7XG4gIC8qKiBJbmRleCBmcm9tIHdoaWNoIHRoZSBpdGVtIHdhcyBzb3J0ZWQgcHJldmlvdXNseS4gKi9cbiAgcHJldmlvdXNJbmRleDogbnVtYmVyO1xuICAvKiogSW5kZXggdGhhdCB0aGUgaXRlbSBpcyBjdXJyZW50bHkgaW4uICovXG4gIGN1cnJlbnRJbmRleDogbnVtYmVyO1xuICAvKiogQ29udGFpbmVyIHRoYXQgdGhlIGl0ZW0gYmVsb25ncyB0by4gKi9cbiAgY29udGFpbmVyOiBDZGtEcm9wTGlzdDxUPjtcbiAgLyoqIEl0ZW0gdGhhdCBpcyBiZWluZyBzb3J0ZWQuICovXG4gIGl0ZW06IENka0RyYWc8ST47XG59XG4iXX0=