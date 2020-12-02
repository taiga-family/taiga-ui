/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NumberInput } from '@angular/cdk/coercion';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { VirtualScrollStrategy } from './virtual-scroll-strategy';
import { CdkVirtualScrollViewport } from './virtual-scroll-viewport';
/** Virtual scrolling strategy for lists with items of known fixed size. */
import * as ɵngcc0 from '@angular/core';
export declare class FixedSizeVirtualScrollStrategy implements VirtualScrollStrategy {
    private _scrolledIndexChange;
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    scrolledIndexChange: Observable<number>;
    /** The attached viewport. */
    private _viewport;
    /** The size of the items in the virtually scrolling list. */
    private _itemSize;
    /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
    private _minBufferPx;
    /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
    private _maxBufferPx;
    /**
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    constructor(itemSize: number, minBufferPx: number, maxBufferPx: number);
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    attach(viewport: CdkVirtualScrollViewport): void;
    /** Detaches this scroll strategy from the currently attached viewport. */
    detach(): void;
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    updateItemAndBufferSize(itemSize: number, minBufferPx: number, maxBufferPx: number): void;
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentScrolled(): void;
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onDataLengthChanged(): void;
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentRendered(): void;
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onRenderedOffsetChanged(): void;
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */
    scrollToIndex(index: number, behavior: ScrollBehavior): void;
    /** Update the viewport's total content size. */
    private _updateTotalContentSize;
    /** Update the viewport's rendered range. */
    private _updateRenderedRange;
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */
export declare function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir: CdkFixedSizeVirtualScroll): FixedSizeVirtualScrollStrategy;
/** A virtual scroll strategy that supports fixed-size items. */
export declare class CdkFixedSizeVirtualScroll implements OnChanges {
    /** The size of the items in the list (in pixels). */
    get itemSize(): number;
    set itemSize(value: number);
    _itemSize: number;
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     */
    get minBufferPx(): number;
    set minBufferPx(value: number);
    _minBufferPx: number;
    /**
     * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
     */
    get maxBufferPx(): number;
    set maxBufferPx(value: number);
    _maxBufferPx: number;
    /** The scroll strategy used by this directive. */
    _scrollStrategy: FixedSizeVirtualScrollStrategy;
    ngOnChanges(): void;
    static ngAcceptInputType_itemSize: NumberInput;
    static ngAcceptInputType_minBufferPx: NumberInput;
    static ngAcceptInputType_maxBufferPx: NumberInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFixedSizeVirtualScroll, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkFixedSizeVirtualScroll, "cdk-virtual-scroll-viewport[itemSize]", never, { "itemSize": "itemSize"; "minBufferPx": "minBufferPx"; "maxBufferPx": "maxBufferPx"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4ZWQtc2l6ZS12aXJ0dWFsLXNjcm9sbC5kLnRzIiwic291cmNlcyI6WyJmaXhlZC1zaXplLXZpcnR1YWwtc2Nyb2xsLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IE51bWJlcklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVmlydHVhbFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC1zdHJhdGVneSc7XG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICcuL3ZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0Jztcbi8qKiBWaXJ0dWFsIHNjcm9sbGluZyBzdHJhdGVneSBmb3IgbGlzdHMgd2l0aCBpdGVtcyBvZiBrbm93biBmaXhlZCBzaXplLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5IGltcGxlbWVudHMgVmlydHVhbFNjcm9sbFN0cmF0ZWd5IHtcbiAgICBwcml2YXRlIF9zY3JvbGxlZEluZGV4Q2hhbmdlO1xuICAgIC8qKiBAZG9jcy1wcml2YXRlIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgVmlydHVhbFNjcm9sbFN0cmF0ZWd5LiAqL1xuICAgIHNjcm9sbGVkSW5kZXhDaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICAvKiogVGhlIGF0dGFjaGVkIHZpZXdwb3J0LiAqL1xuICAgIHByaXZhdGUgX3ZpZXdwb3J0O1xuICAgIC8qKiBUaGUgc2l6ZSBvZiB0aGUgaXRlbXMgaW4gdGhlIHZpcnR1YWxseSBzY3JvbGxpbmcgbGlzdC4gKi9cbiAgICBwcml2YXRlIF9pdGVtU2l6ZTtcbiAgICAvKiogVGhlIG1pbmltdW0gYW1vdW50IG9mIGJ1ZmZlciByZW5kZXJlZCBiZXlvbmQgdGhlIHZpZXdwb3J0IChpbiBwaXhlbHMpLiAqL1xuICAgIHByaXZhdGUgX21pbkJ1ZmZlclB4O1xuICAgIC8qKiBUaGUgbnVtYmVyIG9mIGJ1ZmZlciBpdGVtcyB0byByZW5kZXIgYmV5b25kIHRoZSBlZGdlIG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS4gKi9cbiAgICBwcml2YXRlIF9tYXhCdWZmZXJQeDtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXRlbVNpemUgVGhlIHNpemUgb2YgdGhlIGl0ZW1zIGluIHRoZSB2aXJ0dWFsbHkgc2Nyb2xsaW5nIGxpc3QuXG4gICAgICogQHBhcmFtIG1pbkJ1ZmZlclB4IFRoZSBtaW5pbXVtIGFtb3VudCBvZiBidWZmZXIgKGluIHBpeGVscykgYmVmb3JlIG5lZWRpbmcgdG8gcmVuZGVyIG1vcmVcbiAgICAgKiBAcGFyYW0gbWF4QnVmZmVyUHggVGhlIGFtb3VudCBvZiBidWZmZXIgKGluIHBpeGVscykgdG8gcmVuZGVyIHdoZW4gcmVuZGVyaW5nIG1vcmUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaXRlbVNpemU6IG51bWJlciwgbWluQnVmZmVyUHg6IG51bWJlciwgbWF4QnVmZmVyUHg6IG51bWJlcik7XG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdGhpcyBzY3JvbGwgc3RyYXRlZ3kgdG8gYSB2aWV3cG9ydC5cbiAgICAgKiBAcGFyYW0gdmlld3BvcnQgVGhlIHZpZXdwb3J0IHRvIGF0dGFjaCB0aGlzIHN0cmF0ZWd5IHRvLlxuICAgICAqL1xuICAgIGF0dGFjaCh2aWV3cG9ydDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KTogdm9pZDtcbiAgICAvKiogRGV0YWNoZXMgdGhpcyBzY3JvbGwgc3RyYXRlZ3kgZnJvbSB0aGUgY3VycmVudGx5IGF0dGFjaGVkIHZpZXdwb3J0LiAqL1xuICAgIGRldGFjaCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgaXRlbSBzaXplIGFuZCBidWZmZXIgc2l6ZS5cbiAgICAgKiBAcGFyYW0gaXRlbVNpemUgVGhlIHNpemUgb2YgdGhlIGl0ZW1zIGluIHRoZSB2aXJ0dWFsbHkgc2Nyb2xsaW5nIGxpc3QuXG4gICAgICogQHBhcmFtIG1pbkJ1ZmZlclB4IFRoZSBtaW5pbXVtIGFtb3VudCBvZiBidWZmZXIgKGluIHBpeGVscykgYmVmb3JlIG5lZWRpbmcgdG8gcmVuZGVyIG1vcmVcbiAgICAgKiBAcGFyYW0gbWF4QnVmZmVyUHggVGhlIGFtb3VudCBvZiBidWZmZXIgKGluIHBpeGVscykgdG8gcmVuZGVyIHdoZW4gcmVuZGVyaW5nIG1vcmUuXG4gICAgICovXG4gICAgdXBkYXRlSXRlbUFuZEJ1ZmZlclNpemUoaXRlbVNpemU6IG51bWJlciwgbWluQnVmZmVyUHg6IG51bWJlciwgbWF4QnVmZmVyUHg6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqIEBkb2NzLXByaXZhdGUgSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3kuICovXG4gICAgb25Db250ZW50U2Nyb2xsZWQoKTogdm9pZDtcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIFZpcnR1YWxTY3JvbGxTdHJhdGVneS4gKi9cbiAgICBvbkRhdGFMZW5ndGhDaGFuZ2VkKCk6IHZvaWQ7XG4gICAgLyoqIEBkb2NzLXByaXZhdGUgSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3kuICovXG4gICAgb25Db250ZW50UmVuZGVyZWQoKTogdm9pZDtcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIFZpcnR1YWxTY3JvbGxTdHJhdGVneS4gKi9cbiAgICBvblJlbmRlcmVkT2Zmc2V0Q2hhbmdlZCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byB0aGUgb2Zmc2V0IGZvciB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCB0byBzY3JvbGwgdG8uXG4gICAgICogQHBhcmFtIGJlaGF2aW9yIFRoZSBTY3JvbGxCZWhhdmlvciB0byB1c2Ugd2hlbiBzY3JvbGxpbmcuXG4gICAgICovXG4gICAgc2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBiZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IpOiB2b2lkO1xuICAgIC8qKiBVcGRhdGUgdGhlIHZpZXdwb3J0J3MgdG90YWwgY29udGVudCBzaXplLiAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZVRvdGFsQ29udGVudFNpemU7XG4gICAgLyoqIFVwZGF0ZSB0aGUgdmlld3BvcnQncyByZW5kZXJlZCByYW5nZS4gKi9cbiAgICBwcml2YXRlIF91cGRhdGVSZW5kZXJlZFJhbmdlO1xufVxuLyoqXG4gKiBQcm92aWRlciBmYWN0b3J5IGZvciBgRml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5YCB0aGF0IHNpbXBseSBleHRyYWN0cyB0aGUgYWxyZWFkeSBjcmVhdGVkXG4gKiBgRml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5YCBmcm9tIHRoZSBnaXZlbiBkaXJlY3RpdmUuXG4gKiBAcGFyYW0gZml4ZWRTaXplRGlyIFRoZSBpbnN0YW5jZSBvZiBgQ2RrRml4ZWRTaXplVmlydHVhbFNjcm9sbGAgdG8gZXh0cmFjdCB0aGVcbiAqICAgICBgRml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5YCBmcm9tLlxuICovXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBfZml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5RmFjdG9yeShmaXhlZFNpemVEaXI6IENka0ZpeGVkU2l6ZVZpcnR1YWxTY3JvbGwpOiBGaXhlZFNpemVWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3k7XG4vKiogQSB2aXJ0dWFsIHNjcm9sbCBzdHJhdGVneSB0aGF0IHN1cHBvcnRzIGZpeGVkLXNpemUgaXRlbXMuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtGaXhlZFNpemVWaXJ0dWFsU2Nyb2xsIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICAvKiogVGhlIHNpemUgb2YgdGhlIGl0ZW1zIGluIHRoZSBsaXN0IChpbiBwaXhlbHMpLiAqL1xuICAgIGdldCBpdGVtU2l6ZSgpOiBudW1iZXI7XG4gICAgc2V0IGl0ZW1TaXplKHZhbHVlOiBudW1iZXIpO1xuICAgIF9pdGVtU2l6ZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIGFtb3VudCBvZiBidWZmZXIgcmVuZGVyZWQgYmV5b25kIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS5cbiAgICAgKiBJZiB0aGUgYW1vdW50IG9mIGJ1ZmZlciBkaXBzIGJlbG93IHRoaXMgbnVtYmVyLCBtb3JlIGl0ZW1zIHdpbGwgYmUgcmVuZGVyZWQuIERlZmF1bHRzIHRvIDEwMHB4LlxuICAgICAqL1xuICAgIGdldCBtaW5CdWZmZXJQeCgpOiBudW1iZXI7XG4gICAgc2V0IG1pbkJ1ZmZlclB4KHZhbHVlOiBudW1iZXIpO1xuICAgIF9taW5CdWZmZXJQeDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgcGl4ZWxzIHdvcnRoIG9mIGJ1ZmZlciB0byByZW5kZXIgZm9yIHdoZW4gcmVuZGVyaW5nIG5ldyBpdGVtcy4gRGVmYXVsdHMgdG8gMjAwcHguXG4gICAgICovXG4gICAgZ2V0IG1heEJ1ZmZlclB4KCk6IG51bWJlcjtcbiAgICBzZXQgbWF4QnVmZmVyUHgodmFsdWU6IG51bWJlcik7XG4gICAgX21heEJ1ZmZlclB4OiBudW1iZXI7XG4gICAgLyoqIFRoZSBzY3JvbGwgc3RyYXRlZ3kgdXNlZCBieSB0aGlzIGRpcmVjdGl2ZS4gKi9cbiAgICBfc2Nyb2xsU3RyYXRlZ3k6IEZpeGVkU2l6ZVZpcnR1YWxTY3JvbGxTdHJhdGVneTtcbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9pdGVtU2l6ZTogTnVtYmVySW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21pbkJ1ZmZlclB4OiBOdW1iZXJJbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4QnVmZmVyUHg6IE51bWJlcklucHV0O1xufVxuIl19