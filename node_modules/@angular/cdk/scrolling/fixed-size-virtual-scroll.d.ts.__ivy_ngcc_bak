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
}
