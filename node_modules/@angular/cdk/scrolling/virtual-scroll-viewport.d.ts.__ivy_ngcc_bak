/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { ListRange } from '@angular/cdk/collections';
import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollDispatcher } from './scroll-dispatcher';
import { CdkScrollable } from './scrollable';
import { CdkVirtualForOf } from './virtual-for-of';
import { VirtualScrollStrategy } from './virtual-scroll-strategy';
import { ViewportRuler } from './viewport-ruler';
/** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */
export declare class CdkVirtualScrollViewport extends CdkScrollable implements OnInit, OnDestroy {
    elementRef: ElementRef<HTMLElement>;
    private _changeDetectorRef;
    private _scrollStrategy;
    /** Emits when the viewport is detached from a CdkVirtualForOf. */
    private _detachedSubject;
    /** Emits when the rendered range changes. */
    private _renderedRangeSubject;
    /** The direction the viewport scrolls. */
    get orientation(): 'horizontal' | 'vertical';
    set orientation(orientation: 'horizontal' | 'vertical');
    private _orientation;
    /** Emits when the index of the first element visible in the viewport changes. */
    scrolledIndexChange: Observable<number>;
    /** The element that wraps the rendered content. */
    _contentWrapper: ElementRef<HTMLElement>;
    /** A stream that emits whenever the rendered range changes. */
    renderedRangeStream: Observable<ListRange>;
    /**
     * The total size of all content (in pixels), including content that is not currently rendered.
     */
    private _totalContentSize;
    /** A string representing the `style.width` property value to be used for the spacer element. */
    _totalContentWidth: string;
    /** A string representing the `style.height` property value to be used for the spacer element. */
    _totalContentHeight: string;
    /**
     * The CSS transform applied to the rendered subset of items so that they appear within the bounds
     * of the visible viewport.
     */
    private _renderedContentTransform;
    /** The currently rendered range of indices. */
    private _renderedRange;
    /** The length of the data bound to this viewport (in number of items). */
    private _dataLength;
    /** The size of the viewport (in pixels). */
    private _viewportSize;
    /** the currently attached CdkVirtualForOf. */
    private _forOf;
    /** The last rendered content offset that was set. */
    private _renderedContentOffset;
    /**
     * Whether the last rendered content offset was to the end of the content (and therefore needs to
     * be rewritten as an offset to the start of the content).
     */
    private _renderedContentOffsetNeedsRewrite;
    /** Whether there is a pending change detection cycle. */
    private _isChangeDetectionPending;
    /** A list of functions to run after the next change detection cycle. */
    private _runAfterChangeDetection;
    /** Subscription to changes in the viewport size. */
    private _viewportChanges;
    constructor(elementRef: ElementRef<HTMLElement>, _changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, _scrollStrategy: VirtualScrollStrategy, dir: Directionality, scrollDispatcher: ScrollDispatcher, 
    /**
     * @deprecated `viewportRuler` parameter to become required.
     * @breaking-change 11.0.0
     */
    viewportRuler?: ViewportRuler);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Attaches a `CdkVirtualForOf` to this viewport. */
    attach(forOf: CdkVirtualForOf<any>): void;
    /** Detaches the current `CdkVirtualForOf`. */
    detach(): void;
    /** Gets the length of the data bound to this viewport (in number of items). */
    getDataLength(): number;
    /** Gets the size of the viewport (in pixels). */
    getViewportSize(): number;
    /** Get the current rendered range of items. */
    getRenderedRange(): ListRange;
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    setTotalContentSize(size: number): void;
    /** Sets the currently rendered range of indices. */
    setRenderedRange(range: ListRange): void;
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    getOffsetToRenderedContentStart(): number | null;
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    setRenderedContentOffset(offset: number, to?: 'to-start' | 'to-end'): void;
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    scrollToOffset(offset: number, behavior?: ScrollBehavior): void;
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    scrollToIndex(index: number, behavior?: ScrollBehavior): void;
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    measureScrollOffset(from?: 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end'): number;
    /** Measure the combined size of all of the rendered items. */
    measureRenderedContentSize(): number;
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    measureRangeSize(range: ListRange): number;
    /** Update the viewport dimensions and re-render. */
    checkViewportSize(): void;
    /** Measure the viewport size. */
    private _measureViewportSize;
    /** Queue up change detection to run. */
    private _markChangeDetectionNeeded;
    /** Run change detection. */
    private _doChangeDetection;
    /** Calculates the `style.width` and `style.height` for the spacer element. */
    private _calculateSpacerSize;
}
