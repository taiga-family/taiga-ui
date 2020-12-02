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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkVirtualScrollViewport, [null, null, null, { optional: true; }, { optional: true; }, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkVirtualScrollViewport, "cdk-virtual-scroll-viewport", never, { "orientation": "orientation"; }, { "scrolledIndexChange": "scrolledIndexChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwtdmlld3BvcnQuZC50cyIsInNvdXJjZXMiOlsidmlydHVhbC1zY3JvbGwtdmlld3BvcnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTGlzdFJhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY3JvbGxEaXNwYXRjaGVyIH0gZnJvbSAnLi9zY3JvbGwtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDZGtTY3JvbGxhYmxlIH0gZnJvbSAnLi9zY3JvbGxhYmxlJztcbmltcG9ydCB7IENka1ZpcnR1YWxGb3JPZiB9IGZyb20gJy4vdmlydHVhbC1mb3Itb2YnO1xuaW1wb3J0IHsgVmlydHVhbFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC1zdHJhdGVneSc7XG5pbXBvcnQgeyBWaWV3cG9ydFJ1bGVyIH0gZnJvbSAnLi92aWV3cG9ydC1ydWxlcic7XG4vKiogQSB2aWV3cG9ydCB0aGF0IHZpcnR1YWxpemVzIGl0cyBzY3JvbGxpbmcgd2l0aCB0aGUgaGVscCBvZiBgQ2RrVmlydHVhbEZvck9mYC4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCBleHRlbmRzIENka1Njcm9sbGFibGUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3k7XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIHZpZXdwb3J0IGlzIGRldGFjaGVkIGZyb20gYSBDZGtWaXJ0dWFsRm9yT2YuICovXG4gICAgcHJpdmF0ZSBfZGV0YWNoZWRTdWJqZWN0O1xuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSByZW5kZXJlZCByYW5nZSBjaGFuZ2VzLiAqL1xuICAgIHByaXZhdGUgX3JlbmRlcmVkUmFuZ2VTdWJqZWN0O1xuICAgIC8qKiBUaGUgZGlyZWN0aW9uIHRoZSB2aWV3cG9ydCBzY3JvbGxzLiAqL1xuICAgIGdldCBvcmllbnRhdGlvbigpOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuICAgIHNldCBvcmllbnRhdGlvbihvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyk7XG4gICAgcHJpdmF0ZSBfb3JpZW50YXRpb247XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBlbGVtZW50IHZpc2libGUgaW4gdGhlIHZpZXdwb3J0IGNoYW5nZXMuICovXG4gICAgc2Nyb2xsZWRJbmRleENoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIC8qKiBUaGUgZWxlbWVudCB0aGF0IHdyYXBzIHRoZSByZW5kZXJlZCBjb250ZW50LiAqL1xuICAgIF9jb250ZW50V3JhcHBlcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgLyoqIEEgc3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIHJlbmRlcmVkIHJhbmdlIGNoYW5nZXMuICovXG4gICAgcmVuZGVyZWRSYW5nZVN0cmVhbTogT2JzZXJ2YWJsZTxMaXN0UmFuZ2U+O1xuICAgIC8qKlxuICAgICAqIFRoZSB0b3RhbCBzaXplIG9mIGFsbCBjb250ZW50IChpbiBwaXhlbHMpLCBpbmNsdWRpbmcgY29udGVudCB0aGF0IGlzIG5vdCBjdXJyZW50bHkgcmVuZGVyZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdG90YWxDb250ZW50U2l6ZTtcbiAgICAvKiogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBgc3R5bGUud2lkdGhgIHByb3BlcnR5IHZhbHVlIHRvIGJlIHVzZWQgZm9yIHRoZSBzcGFjZXIgZWxlbWVudC4gKi9cbiAgICBfdG90YWxDb250ZW50V2lkdGg6IHN0cmluZztcbiAgICAvKiogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBgc3R5bGUuaGVpZ2h0YCBwcm9wZXJ0eSB2YWx1ZSB0byBiZSB1c2VkIGZvciB0aGUgc3BhY2VyIGVsZW1lbnQuICovXG4gICAgX3RvdGFsQ29udGVudEhlaWdodDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBDU1MgdHJhbnNmb3JtIGFwcGxpZWQgdG8gdGhlIHJlbmRlcmVkIHN1YnNldCBvZiBpdGVtcyBzbyB0aGF0IHRoZXkgYXBwZWFyIHdpdGhpbiB0aGUgYm91bmRzXG4gICAgICogb2YgdGhlIHZpc2libGUgdmlld3BvcnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRDb250ZW50VHJhbnNmb3JtO1xuICAgIC8qKiBUaGUgY3VycmVudGx5IHJlbmRlcmVkIHJhbmdlIG9mIGluZGljZXMuICovXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRSYW5nZTtcbiAgICAvKiogVGhlIGxlbmd0aCBvZiB0aGUgZGF0YSBib3VuZCB0byB0aGlzIHZpZXdwb3J0IChpbiBudW1iZXIgb2YgaXRlbXMpLiAqL1xuICAgIHByaXZhdGUgX2RhdGFMZW5ndGg7XG4gICAgLyoqIFRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS4gKi9cbiAgICBwcml2YXRlIF92aWV3cG9ydFNpemU7XG4gICAgLyoqIHRoZSBjdXJyZW50bHkgYXR0YWNoZWQgQ2RrVmlydHVhbEZvck9mLiAqL1xuICAgIHByaXZhdGUgX2Zvck9mO1xuICAgIC8qKiBUaGUgbGFzdCByZW5kZXJlZCBjb250ZW50IG9mZnNldCB0aGF0IHdhcyBzZXQuICovXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRDb250ZW50T2Zmc2V0O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGxhc3QgcmVuZGVyZWQgY29udGVudCBvZmZzZXQgd2FzIHRvIHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgKGFuZCB0aGVyZWZvcmUgbmVlZHMgdG9cbiAgICAgKiBiZSByZXdyaXR0ZW4gYXMgYW4gb2Zmc2V0IHRvIHRoZSBzdGFydCBvZiB0aGUgY29udGVudCkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRDb250ZW50T2Zmc2V0TmVlZHNSZXdyaXRlO1xuICAgIC8qKiBXaGV0aGVyIHRoZXJlIGlzIGEgcGVuZGluZyBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlLiAqL1xuICAgIHByaXZhdGUgX2lzQ2hhbmdlRGV0ZWN0aW9uUGVuZGluZztcbiAgICAvKiogQSBsaXN0IG9mIGZ1bmN0aW9ucyB0byBydW4gYWZ0ZXIgdGhlIG5leHQgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS4gKi9cbiAgICBwcml2YXRlIF9ydW5BZnRlckNoYW5nZURldGVjdGlvbjtcbiAgICAvKiogU3Vic2NyaXB0aW9uIHRvIGNoYW5nZXMgaW4gdGhlIHZpZXdwb3J0IHNpemUuICovXG4gICAgcHJpdmF0ZSBfdmlld3BvcnRDaGFuZ2VzO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBuZ1pvbmU6IE5nWm9uZSwgX3Njcm9sbFN0cmF0ZWd5OiBWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3ksIGRpcjogRGlyZWN0aW9uYWxpdHksIHNjcm9sbERpc3BhdGNoZXI6IFNjcm9sbERpc3BhdGNoZXIsIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIGB2aWV3cG9ydFJ1bGVyYCBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTEuMC4wXG4gICAgICovXG4gICAgdmlld3BvcnRSdWxlcj86IFZpZXdwb3J0UnVsZXIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKiogQXR0YWNoZXMgYSBgQ2RrVmlydHVhbEZvck9mYCB0byB0aGlzIHZpZXdwb3J0LiAqL1xuICAgIGF0dGFjaChmb3JPZjogQ2RrVmlydHVhbEZvck9mPGFueT4pOiB2b2lkO1xuICAgIC8qKiBEZXRhY2hlcyB0aGUgY3VycmVudCBgQ2RrVmlydHVhbEZvck9mYC4gKi9cbiAgICBkZXRhY2goKTogdm9pZDtcbiAgICAvKiogR2V0cyB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhIGJvdW5kIHRvIHRoaXMgdmlld3BvcnQgKGluIG51bWJlciBvZiBpdGVtcykuICovXG4gICAgZ2V0RGF0YUxlbmd0aCgpOiBudW1iZXI7XG4gICAgLyoqIEdldHMgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0IChpbiBwaXhlbHMpLiAqL1xuICAgIGdldFZpZXdwb3J0U2l6ZSgpOiBudW1iZXI7XG4gICAgLyoqIEdldCB0aGUgY3VycmVudCByZW5kZXJlZCByYW5nZSBvZiBpdGVtcy4gKi9cbiAgICBnZXRSZW5kZXJlZFJhbmdlKCk6IExpc3RSYW5nZTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0b3RhbCBzaXplIG9mIGFsbCBjb250ZW50IChpbiBwaXhlbHMpLCBpbmNsdWRpbmcgY29udGVudCB0aGF0IGlzIG5vdCBjdXJyZW50bHlcbiAgICAgKiByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBzZXRUb3RhbENvbnRlbnRTaXplKHNpemU6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqIFNldHMgdGhlIGN1cnJlbnRseSByZW5kZXJlZCByYW5nZSBvZiBpbmRpY2VzLiAqL1xuICAgIHNldFJlbmRlcmVkUmFuZ2UocmFuZ2U6IExpc3RSYW5nZSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgb2Zmc2V0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSB2aWV3cG9ydCB0byB0aGUgc3RhcnQgb2YgdGhlIHJlbmRlcmVkIGRhdGEgKGluIHBpeGVscykuXG4gICAgICovXG4gICAgZ2V0T2Zmc2V0VG9SZW5kZXJlZENvbnRlbnRTdGFydCgpOiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG9mZnNldCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgdmlld3BvcnQgdG8gZWl0aGVyIHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIHJlbmRlcmVkIGRhdGFcbiAgICAgKiAoaW4gcGl4ZWxzKS5cbiAgICAgKi9cbiAgICBzZXRSZW5kZXJlZENvbnRlbnRPZmZzZXQob2Zmc2V0OiBudW1iZXIsIHRvPzogJ3RvLXN0YXJ0JyB8ICd0by1lbmQnKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBvZmZzZXQgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHZpZXdwb3J0LiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgaXMgbm90IGFsd2F5c1xuICAgICAqIHRoZSBzYW1lIGFzIHNldHRpbmcgYHNjcm9sbFRvcGAgb3IgYHNjcm9sbExlZnRgLiBJbiBhIGhvcml6b250YWwgdmlld3BvcnQgd2l0aCByaWdodC10by1sZWZ0XG4gICAgICogZGlyZWN0aW9uLCB0aGlzIHdvdWxkIGJlIHRoZSBlcXVpdmFsZW50IG9mIHNldHRpbmcgYSBmaWN0aW9uYWwgYHNjcm9sbFJpZ2h0YCBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgdG8gc2Nyb2xsIHRvLlxuICAgICAqIEBwYXJhbSBiZWhhdmlvciBUaGUgU2Nyb2xsQmVoYXZpb3IgdG8gdXNlIHdoZW4gc2Nyb2xsaW5nLiBEZWZhdWx0IGlzIGJlaGF2aW9yIGlzIGBhdXRvYC5cbiAgICAgKi9cbiAgICBzY3JvbGxUb09mZnNldChvZmZzZXQ6IG51bWJlciwgYmVoYXZpb3I/OiBTY3JvbGxCZWhhdmlvcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0byB0aGUgb2Zmc2V0IGZvciB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCB0byBzY3JvbGwgdG8uXG4gICAgICogQHBhcmFtIGJlaGF2aW9yIFRoZSBTY3JvbGxCZWhhdmlvciB0byB1c2Ugd2hlbiBzY3JvbGxpbmcuIERlZmF1bHQgaXMgYmVoYXZpb3IgaXMgYGF1dG9gLlxuICAgICAqL1xuICAgIHNjcm9sbFRvSW5kZXgoaW5kZXg6IG51bWJlciwgYmVoYXZpb3I/OiBTY3JvbGxCZWhhdmlvcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS5cbiAgICAgKiBAcGFyYW0gZnJvbSBUaGUgZWRnZSB0byBtZWFzdXJlIHRoZSBvZmZzZXQgZnJvbS4gRGVmYXVsdHMgdG8gJ3RvcCcgaW4gdmVydGljYWwgbW9kZSBhbmQgJ3N0YXJ0J1xuICAgICAqICAgICBpbiBob3Jpem9udGFsIG1vZGUuXG4gICAgICovXG4gICAgbWVhc3VyZVNjcm9sbE9mZnNldChmcm9tPzogJ3RvcCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnc3RhcnQnIHwgJ2VuZCcpOiBudW1iZXI7XG4gICAgLyoqIE1lYXN1cmUgdGhlIGNvbWJpbmVkIHNpemUgb2YgYWxsIG9mIHRoZSByZW5kZXJlZCBpdGVtcy4gKi9cbiAgICBtZWFzdXJlUmVuZGVyZWRDb250ZW50U2l6ZSgpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogTWVhc3VyZSB0aGUgdG90YWwgY29tYmluZWQgc2l6ZSBvZiB0aGUgZ2l2ZW4gcmFuZ2UuIFRocm93cyBpZiB0aGUgcmFuZ2UgaW5jbHVkZXMgaXRlbXMgdGhhdCBhcmVcbiAgICAgKiBub3QgcmVuZGVyZWQuXG4gICAgICovXG4gICAgbWVhc3VyZVJhbmdlU2l6ZShyYW5nZTogTGlzdFJhbmdlKTogbnVtYmVyO1xuICAgIC8qKiBVcGRhdGUgdGhlIHZpZXdwb3J0IGRpbWVuc2lvbnMgYW5kIHJlLXJlbmRlci4gKi9cbiAgICBjaGVja1ZpZXdwb3J0U2l6ZSgpOiB2b2lkO1xuICAgIC8qKiBNZWFzdXJlIHRoZSB2aWV3cG9ydCBzaXplLiAqL1xuICAgIHByaXZhdGUgX21lYXN1cmVWaWV3cG9ydFNpemU7XG4gICAgLyoqIFF1ZXVlIHVwIGNoYW5nZSBkZXRlY3Rpb24gdG8gcnVuLiAqL1xuICAgIHByaXZhdGUgX21hcmtDaGFuZ2VEZXRlY3Rpb25OZWVkZWQ7XG4gICAgLyoqIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uLiAqL1xuICAgIHByaXZhdGUgX2RvQ2hhbmdlRGV0ZWN0aW9uO1xuICAgIC8qKiBDYWxjdWxhdGVzIHRoZSBgc3R5bGUud2lkdGhgIGFuZCBgc3R5bGUuaGVpZ2h0YCBmb3IgdGhlIHNwYWNlciBlbGVtZW50LiAqL1xuICAgIHByaXZhdGUgX2NhbGN1bGF0ZVNwYWNlclNpemU7XG59XG4iXX0=