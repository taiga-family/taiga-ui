import { coerceNumberProperty } from '@angular/cdk/coercion';
import { InjectionToken, Directive, forwardRef, Input, Injectable, NgZone, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, ElementRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Output, ViewChild, ViewContainerRef, TemplateRef, IterableDiffers, SkipSelf, NgModule } from '@angular/core';
import { Subject, of, Observable, fromEvent, merge, animationFrameScheduler, asapScheduler, Subscription, isObservable } from 'rxjs';
import { distinctUntilChanged, auditTime, filter, takeUntil, startWith, pairwise, switchMap, shareReplay } from 'rxjs/operators';
import { Platform, getRtlScrollAxisType, supportsScrollBehavior, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { isDataSource, ArrayDataSource } from '@angular/cdk/collections';

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/virtual-scroll-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
import * as ɵngcc2 from '@angular/cdk/bidi';

const _c0 = ["contentWrapper"];
const _c1 = ["*"];
const VIRTUAL_SCROLL_STRATEGY = new InjectionToken('VIRTUAL_SCROLL_STRATEGY');
/**
 * A strategy that dictates which items should be rendered in the viewport.
 * @record
 */
function VirtualScrollStrategy() { }
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/fixed-size-virtual-scroll.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
class FixedSizeVirtualScrollStrategy {
    /**
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    constructor(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new Subject();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
        /**
         * The attached viewport.
         */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    }
    /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onContentScrolled() {
        this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onContentRendered() { }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onRenderedOffsetChanged() { }
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    scrollToIndex(index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    }
    /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    _updateTotalContentSize() {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    }
    /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    _updateRenderedRange() {
        if (!this._viewport) {
            return;
        }
        /** @type {?} */
        const scrollOffset = this._viewport.measureScrollOffset();
        /** @type {?} */
        const firstVisibleIndex = scrollOffset / this._itemSize;
        /** @type {?} */
        const renderedRange = this._viewport.getRenderedRange();
        /** @type {?} */
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        /** @type {?} */
        const viewportSize = this._viewport.getViewportSize();
        /** @type {?} */
        const dataLength = this._viewport.getDataLength();
        /** @type {?} */
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            /** @type {?} */
            const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                /** @type {?} */
                const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FixedSizeVirtualScrollStrategy.prototype._scrolledIndexChange;
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @type {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.scrolledIndexChange;
    /**
     * The attached viewport.
     * @type {?}
     * @private
     */
    FixedSizeVirtualScrollStrategy.prototype._viewport;
    /**
     * The size of the items in the virtually scrolling list.
     * @type {?}
     * @private
     */
    FixedSizeVirtualScrollStrategy.prototype._itemSize;
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * @type {?}
     * @private
     */
    FixedSizeVirtualScrollStrategy.prototype._minBufferPx;
    /**
     * The number of buffer items to render beyond the edge of the viewport (in pixels).
     * @type {?}
     * @private
     */
    FixedSizeVirtualScrollStrategy.prototype._maxBufferPx;
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
/**
 * A virtual scroll strategy that supports fixed-size items.
 */
class CdkFixedSizeVirtualScroll {
    constructor() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */
        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    /**
     * The size of the items in the list (in pixels).
     * @return {?}
     */
    get itemSize() { return this._itemSize; }
    /**
     * @param {?} value
     * @return {?}
     */
    set itemSize(value) { this._itemSize = coerceNumberProperty(value); }
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     * @return {?}
     */
    get minBufferPx() { return this._minBufferPx; }
    /**
     * @param {?} value
     * @return {?}
     */
    set minBufferPx(value) { this._minBufferPx = coerceNumberProperty(value); }
    /**
     * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
     * @return {?}
     */
    get maxBufferPx() { return this._maxBufferPx; }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxBufferPx(value) { this._maxBufferPx = coerceNumberProperty(value); }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
}
CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) { return new (t || CdkFixedSizeVirtualScroll)(); };
CdkFixedSizeVirtualScroll.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFixedSizeVirtualScroll, selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]], inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: VIRTUAL_SCROLL_STRATEGY,
                useFactory: _fixedSizeVirtualScrollStrategyFactory,
                deps: [forwardRef(( /**
                         * @return {?}
                         */() => CdkFixedSizeVirtualScroll))]
            }]), ɵngcc0.ɵɵNgOnChangesFeature] });
CdkFixedSizeVirtualScroll.propDecorators = {
    itemSize: [{ type: Input }],
    minBufferPx: [{ type: Input }],
    maxBufferPx: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFixedSizeVirtualScroll, [{
        type: Directive,
        args: [{
                selector: 'cdk-virtual-scroll-viewport[itemSize]',
                providers: [{
                        provide: VIRTUAL_SCROLL_STRATEGY,
                        useFactory: _fixedSizeVirtualScrollStrategyFactory,
                        deps: [forwardRef(( /**
                                 * @return {?}
                                 */() => CdkFixedSizeVirtualScroll))]
                    }]
            }]
    }], function () { return []; }, { itemSize: [{
            type: Input
        }], minBufferPx: [{
            type: Input
        }], maxBufferPx: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    CdkFixedSizeVirtualScroll.ngAcceptInputType_itemSize;
    /** @type {?} */
    CdkFixedSizeVirtualScroll.ngAcceptInputType_minBufferPx;
    /** @type {?} */
    CdkFixedSizeVirtualScroll.ngAcceptInputType_maxBufferPx;
    /** @type {?} */
    CdkFixedSizeVirtualScroll.prototype._itemSize;
    /** @type {?} */
    CdkFixedSizeVirtualScroll.prototype._minBufferPx;
    /** @type {?} */
    CdkFixedSizeVirtualScroll.prototype._maxBufferPx;
    /**
     * The scroll strategy used by this directive.
     * @type {?}
     */
    CdkFixedSizeVirtualScroll.prototype._scrollStrategy;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/scroll-dispatcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
class ScrollDispatcher {
    /**
     * @param {?} _ngZone
     * @param {?} _platform
     * @param {?=} document
     */
    constructor(_ngZone, _platform, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new Subject();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
        this._document = document;
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe((/**
             * @return {?}
             */
            () => this._scrolled.next(scrollable))));
        }
    }
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    deregister(scrollable) {
        /** @type {?} */
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    }
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
            return of();
        }
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            if (!this._globalSubscription) {
                this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            /** @type {?} */
            const subscription = auditTimeInMs > 0 ?
                this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) :
                this._scrolled.subscribe(observer);
            this._scrolledCount++;
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
                this._scrolledCount--;
                if (!this._scrolledCount) {
                    this._removeGlobalListener();
                }
            });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeGlobalListener();
        this.scrollContainers.forEach((/**
         * @param {?} _
         * @param {?} container
         * @return {?}
         */
        (_, container) => this.deregister(container)));
        this._scrolled.complete();
    }
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ancestorScrolled(elementRef, auditTimeInMs) {
        /** @type {?} */
        const ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(filter((/**
         * @param {?} target
         * @return {?}
         */
        target => {
            return !target || ancestors.indexOf(target) > -1;
        })));
    }
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    getAncestorScrollContainers(elementRef) {
        /** @type {?} */
        const scrollingContainers = [];
        this.scrollContainers.forEach((/**
         * @param {?} _subscription
         * @param {?} scrollable
         * @return {?}
         */
        (_subscription, scrollable) => {
            if (this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        }));
        return scrollingContainers;
    }
    /**
     * Access injected document if available or fallback to global document reference
     * @private
     * @return {?}
     */
    _getDocument() {
        return this._document || document;
    }
    /**
     * Use defaultView of injected document if available or fallback to global window reference
     * @private
     * @return {?}
     */
    _getWindow() {
        /** @type {?} */
        const doc = this._getDocument();
        return doc.defaultView || window;
    }
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    _scrollableContainsElement(scrollable, elementRef) {
        /** @type {?} */
        let element = elementRef.nativeElement;
        /** @type {?} */
        let scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = (/** @type {?} */ (element)).parentElement);
        return false;
    }
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const window = this._getWindow();
            return fromEvent(window.document, 'scroll').subscribe((/**
             * @return {?}
             */
            () => this._scrolled.next()));
        }));
    }
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    _removeGlobalListener() {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    }
}
ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) { return new (t || ScrollDispatcher)(ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(ɵngcc1.Platform), ɵngcc0.ɵɵinject(DOCUMENT, 8)); };
/** @nocollapse */
ScrollDispatcher.ctorParameters = () => [
    { type: NgZone },
    { type: Platform },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ ScrollDispatcher.ɵprov = ɵɵdefineInjectable({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(ɵɵinject(NgZone), ɵɵinject(Platform), ɵɵinject(DOCUMENT, 8)); }, token: ScrollDispatcher, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollDispatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc1.Platform }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
if (false) {
    /**
     * Used to reference correct document/window
     * @type {?}
     * @protected
     */
    ScrollDispatcher.prototype._document;
    /**
     * Subject for notifying that a registered scrollable reference element has been scrolled.
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._scrolled;
    /**
     * Keeps track of the global `scroll` and `resize` subscriptions.
     * @type {?}
     */
    ScrollDispatcher.prototype._globalSubscription;
    /**
     * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._scrolledCount;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     * @type {?}
     */
    ScrollDispatcher.prototype.scrollContainers;
    /**
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/scrollable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
class CdkScrollable {
    /**
     * @param {?} elementRef
     * @param {?} scrollDispatcher
     * @param {?} ngZone
     * @param {?=} dir
     */
    constructor(elementRef, scrollDispatcher, ngZone, dir) {
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new Subject();
        this._elementScrolled = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => fromEvent(this.elementRef.nativeElement, 'scroll').pipe(takeUntil(this._destroyed))
            .subscribe(observer)))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.scrollDispatcher.register(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    elementScrolled() {
        return this._elementScrolled;
    }
    /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
    }
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    scrollTo(options) {
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        if (options.left == null) {
            options.left = isRtl ? options.end : options.start;
        }
        if (options.right == null) {
            options.right = isRtl ? options.start : options.end;
        }
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            ((/** @type {?} */ (options))).top =
                el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && getRtlScrollAxisType() != 0 /* NORMAL */) {
            if (options.left != null) {
                ((/** @type {?} */ (options))).right =
                    el.scrollWidth - el.clientWidth - options.left;
            }
            if (getRtlScrollAxisType() == 2 /* INVERTED */) {
                options.left = options.right;
            }
            else if (getRtlScrollAxisType() == 1 /* NEGATED */) {
                options.left = options.right ? -options.right : options.right;
            }
        }
        else {
            if (options.right != null) {
                ((/** @type {?} */ (options))).left =
                    el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _applyScrollToOptions(options) {
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        if (supportsScrollBehavior()) {
            el.scrollTo(options);
        }
        else {
            if (options.top != null) {
                el.scrollTop = options.top;
            }
            if (options.left != null) {
                el.scrollLeft = options.left;
            }
        }
    }
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    measureScrollOffset(from) {
        /** @type {?} */
        const LEFT = 'left';
        /** @type {?} */
        const RIGHT = 'right';
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
        }
        else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && getRtlScrollAxisType() == 2 /* INVERTED */) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
            else {
                return el.scrollLeft;
            }
        }
        else if (isRtl && getRtlScrollAxisType() == 1 /* NEGATED */) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
            }
            else {
                return -el.scrollLeft;
            }
        }
        else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft;
            }
            else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
        }
    }
}
CdkScrollable.ɵfac = function CdkScrollable_Factory(t) { return new (t || CdkScrollable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ScrollDispatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
CdkScrollable.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkScrollable, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]] });
/** @nocollapse */
CdkScrollable.ctorParameters = () => [
    { type: ElementRef },
    { type: ScrollDispatcher },
    { type: NgZone },
    { type: Directionality, decorators: [{ type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkScrollable, [{
        type: Directive,
        args: [{
                selector: '[cdk-scrollable], [cdkScrollable]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ScrollDispatcher }, { type: ɵngcc0.NgZone }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    CdkScrollable.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    CdkScrollable.prototype._elementScrolled;
    /**
     * @type {?}
     * @protected
     */
    CdkScrollable.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    CdkScrollable.prototype.scrollDispatcher;
    /**
     * @type {?}
     * @protected
     */
    CdkScrollable.prototype.ngZone;
    /**
     * @type {?}
     * @protected
     */
    CdkScrollable.prototype.dir;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/viewport-ruler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */
const DEFAULT_RESIZE_TIME = 20;
/**
 * Object that holds the scroll position of the viewport in each direction.
 * @record
 */
function ViewportScrollPosition() { }
if (false) {
    /** @type {?} */
    ViewportScrollPosition.prototype.top;
    /** @type {?} */
    ViewportScrollPosition.prototype.left;
}
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
class ViewportRuler {
    /**
     * @param {?} _platform
     * @param {?} ngZone
     * @param {?=} document
     */
    constructor(_platform, ngZone, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        this._platform = _platform;
        this._document = document;
        ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const window = this._getWindow();
            this._change = _platform.isBrowser ?
                merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange')) :
                of();
            // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.
            this._invalidateCache = this.change().subscribe((/**
             * @return {?}
             */
            () => this._updateViewportSize()));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._invalidateCache.unsubscribe();
    }
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    getViewportSize() {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        /** @type {?} */
        const output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = (/** @type {?} */ (null));
        }
        return output;
    }
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    getViewportRect() {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        /** @type {?} */
        const scrollPosition = this.getViewportScrollPosition();
        const { width, height } = this.getViewportSize();
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height,
            width,
        };
    }
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    getViewportScrollPosition() {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        /** @type {?} */
        const document = this._getDocument();
        /** @type {?} */
        const window = this._getWindow();
        /** @type {?} */
        const documentElement = (/** @type {?} */ (document.documentElement));
        /** @type {?} */
        const documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */
        const top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        /** @type {?} */
        const left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top, left };
    }
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    change(throttleTime = DEFAULT_RESIZE_TIME) {
        return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
    }
    /**
     * Access injected document if available or fallback to global document reference
     * @private
     * @return {?}
     */
    _getDocument() {
        return this._document || document;
    }
    /**
     * Use defaultView of injected document if available or fallback to global window reference
     * @private
     * @return {?}
     */
    _getWindow() {
        /** @type {?} */
        const doc = this._getDocument();
        return doc.defaultView || window;
    }
    /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    _updateViewportSize() {
        /** @type {?} */
        const window = this._getWindow();
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    }
}
ViewportRuler.ɵfac = function ViewportRuler_Factory(t) { return new (t || ViewportRuler)(ɵngcc0.ɵɵinject(ɵngcc1.Platform), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(DOCUMENT, 8)); };
/** @nocollapse */
ViewportRuler.ctorParameters = () => [
    { type: Platform },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ ViewportRuler.ɵprov = ɵɵdefineInjectable({ factory: function ViewportRuler_Factory() { return new ViewportRuler(ɵɵinject(Platform), ɵɵinject(NgZone), ɵɵinject(DOCUMENT, 8)); }, token: ViewportRuler, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ViewportRuler, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.Platform }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
if (false) {
    /**
     * Cached viewport dimensions.
     * @type {?}
     * @private
     */
    ViewportRuler.prototype._viewportSize;
    /**
     * Stream of viewport change events.
     * @type {?}
     * @private
     */
    ViewportRuler.prototype._change;
    /**
     * Subscription to streams that invalidate the cached viewport dimensions.
     * @type {?}
     * @private
     */
    ViewportRuler.prototype._invalidateCache;
    /**
     * Used to reference correct document/window
     * @type {?}
     * @protected
     */
    ViewportRuler.prototype._document;
    /**
     * @type {?}
     * @private
     */
    ViewportRuler.prototype._platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/virtual-scroll-viewport.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
/**
 * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
 */
class CdkVirtualScrollViewport extends CdkScrollable {
    /**
     * @param {?} elementRef
     * @param {?} _changeDetectorRef
     * @param {?} ngZone
     * @param {?} _scrollStrategy
     * @param {?} dir
     * @param {?} scrollDispatcher
     * @param {?=} viewportRuler
     */
    constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, 
    /**
     * @deprecated `viewportRuler` parameter to become required.
     * @breaking-change 11.0.0
     */
    viewportRuler) {
        super(elementRef, scrollDispatcher, ngZone, dir);
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */
        this._detachedSubject = new Subject();
        /**
         * Emits when the rendered range changes.
         */
        this._renderedRangeSubject = new Subject();
        this._orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /**
         * Emits when the index of the first element visible in the viewport changes.
         */
        this.scrolledIndexChange = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => this._scrollStrategy.scrolledIndexChange.subscribe((/**
         * @param {?} index
         * @return {?}
         */
        index => Promise.resolve().then((/**
         * @return {?}
         */
        () => this.ngZone.run((/**
         * @return {?}
         */
        () => observer.next(index)))))))));
        /**
         * A stream that emits whenever the rendered range changes.
         */
        this.renderedRangeStream = this._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        this._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */
        this._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */
        this._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */
        this._renderedRange = { start: 0, end: 0 };
        /**
         * The length of the data bound to this viewport (in number of items).
         */
        this._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */
        this._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */
        this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        this._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */
        this._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */
        this._runAfterChangeDetection = [];
        /**
         * Subscription to changes in the viewport size.
         */
        this._viewportChanges = Subscription.EMPTY;
        if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        // @breaking-change 11.0.0 Remove null check for `viewportRuler`.
        if (viewportRuler) {
            this._viewportChanges = viewportRuler.change().subscribe((/**
             * @return {?}
             */
            () => {
                this.checkViewportSize();
            }));
        }
    }
    /**
     * The direction the viewport scrolls.
     * @return {?}
     */
    get orientation() {
        return this._orientation;
    }
    /**
     * @param {?} orientation
     * @return {?}
     */
    set orientation(orientation) {
        if (this._orientation !== orientation) {
            this._orientation = orientation;
            this._calculateSpacerSize();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._measureViewportSize();
            this._scrollStrategy.attach(this);
            this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            startWith((/** @type {?} */ (null))), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            auditTime(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @return {?}
             */
            () => this._scrollStrategy.onContentScrolled()));
            this._markChangeDetectionNeeded();
        }))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        this._viewportChanges.unsubscribe();
        super.ngOnDestroy();
    }
    /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    attach(forOf) {
        if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._forOf = forOf;
            this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                /** @type {?} */
                const newLength = data.length;
                if (newLength !== this._dataLength) {
                    this._dataLength = newLength;
                    this._scrollStrategy.onDataLengthChanged();
                }
                this._doChangeDetection();
            }));
        }));
    }
    /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    detach() {
        this._forOf = null;
        this._detachedSubject.next();
    }
    /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    getDataLength() {
        return this._dataLength;
    }
    /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    getViewportSize() {
        return this._viewportSize;
    }
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    getRenderedRange() {
        return this._renderedRange;
    }
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            this._calculateSpacerSize();
            this._markChangeDetectionNeeded();
        }
    }
    /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            () => this._scrollStrategy.onContentRendered()));
        }
    }
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    }
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    setRenderedContentOffset(offset, to = 'to-start') {
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        /** @type {?} */
        const isHorizontal = this.orientation == 'horizontal';
        /** @type {?} */
        const axis = isHorizontal ? 'X' : 'Y';
        /** @type {?} */
        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        /** @type {?} */
        let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += ` translate${axis}(-100%)`;
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            () => {
                if (this._renderedContentOffsetNeedsRewrite) {
                    this._renderedContentOffset -= this.measureRenderedContentSize();
                    this._renderedContentOffsetNeedsRewrite = false;
                    this.setRenderedContentOffset(this._renderedContentOffset);
                }
                else {
                    this._scrollStrategy.onRenderedOffsetChanged();
                }
            }));
        }
    }
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    scrollToOffset(offset, behavior = 'auto') {
        /** @type {?} */
        const options = { behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    }
    /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    scrollToIndex(index, behavior = 'auto') {
        this._scrollStrategy.scrollToIndex(index, behavior);
    }
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    measureScrollOffset(from) {
        return from ?
            super.measureScrollOffset(from) :
            super.measureScrollOffset(this.orientation === 'horizontal' ? 'start' : 'top');
    }
    /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    measureRenderedContentSize() {
        /** @type {?} */
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    }
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    measureRangeSize(range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    }
    /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    checkViewportSize() {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    }
    /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    _measureViewportSize() {
        /** @type {?} */
        const viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    }
    /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this._doChangeDetection();
            }))));
        }
    }
    /**
     * Run change detection.
     * @private
     * @return {?}
     */
    _doChangeDetection() {
        this._isChangeDetectionPending = false;
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run((/**
         * @return {?}
         */
        () => this._changeDetectorRef.markForCheck()));
        /** @type {?} */
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
            fn();
        }
    }
    /**
     * Calculates the `style.width` and `style.height` for the spacer element.
     * @private
     * @return {?}
     */
    _calculateSpacerSize() {
        this._totalContentHeight =
            this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
        this._totalContentWidth =
            this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
    }
}
CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) { return new (t || CdkVirtualScrollViewport)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(VIRTUAL_SCROLL_STRATEGY, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ScrollDispatcher), ɵngcc0.ɵɵdirectiveInject(ViewportRuler, 8)); };
CdkVirtualScrollViewport.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkVirtualScrollViewport, selectors: [["cdk-virtual-scroll-viewport"]], viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentWrapper = _t.first);
    } }, hostAttrs: [1, "cdk-virtual-scroll-viewport"], hostVars: 4, hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
    } }, inputs: { orientation: "orientation" }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: CdkScrollable,
                useExisting: CdkVirtualScrollViewport
            }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]], template: function CdkVirtualScrollViewport_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵstyleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
    } }, styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
CdkVirtualScrollViewport.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [VIRTUAL_SCROLL_STRATEGY,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ScrollDispatcher },
    { type: ViewportRuler, decorators: [{ type: Optional }] }
];
CdkVirtualScrollViewport.propDecorators = {
    orientation: [{ type: Input }],
    scrolledIndexChange: [{ type: Output }],
    _contentWrapper: [{ type: ViewChild, args: ['contentWrapper', { static: true },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkVirtualScrollViewport, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-viewport',
                template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
                host: {
                    'class': 'cdk-virtual-scroll-viewport',
                    '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                    '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: CdkScrollable,
                        useExisting: CdkVirtualScrollViewport
                    }],
                styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [VIRTUAL_SCROLL_STRATEGY]
            }] }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }, { type: ScrollDispatcher }, { type: ViewportRuler, decorators: [{
                type: Optional
            }] }]; }, { scrolledIndexChange: [{
            type: Output
        }], orientation: [{
            type: Input
        }], _contentWrapper: [{
            type: ViewChild,
            args: ['contentWrapper', { static: true }]
        }] }); })();
if (false) {
    /**
     * Emits when the viewport is detached from a CdkVirtualForOf.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._detachedSubject;
    /**
     * Emits when the rendered range changes.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedRangeSubject;
    /**
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._orientation;
    /**
     * Emits when the index of the first element visible in the viewport changes.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype.scrolledIndexChange;
    /**
     * The element that wraps the rendered content.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype._contentWrapper;
    /**
     * A stream that emits whenever the rendered range changes.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype.renderedRangeStream;
    /**
     * The total size of all content (in pixels), including content that is not currently rendered.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._totalContentSize;
    /**
     * A string representing the `style.width` property value to be used for the spacer element.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype._totalContentWidth;
    /**
     * A string representing the `style.height` property value to be used for the spacer element.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype._totalContentHeight;
    /**
     * The CSS transform applied to the rendered subset of items so that they appear within the bounds
     * of the visible viewport.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedContentTransform;
    /**
     * The currently rendered range of indices.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedRange;
    /**
     * The length of the data bound to this viewport (in number of items).
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._dataLength;
    /**
     * The size of the viewport (in pixels).
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._viewportSize;
    /**
     * the currently attached CdkVirtualForOf.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._forOf;
    /**
     * The last rendered content offset that was set.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedContentOffset;
    /**
     * Whether the last rendered content offset was to the end of the content (and therefore needs to
     * be rewritten as an offset to the start of the content).
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedContentOffsetNeedsRewrite;
    /**
     * Whether there is a pending change detection cycle.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._isChangeDetectionPending;
    /**
     * A list of functions to run after the next change detection cycle.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._runAfterChangeDetection;
    /**
     * Subscription to changes in the viewport size.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._viewportChanges;
    /** @type {?} */
    CdkVirtualScrollViewport.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._scrollStrategy;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/virtual-for-of.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */
function getSize(orientation, node) {
    /** @type {?} */
    const el = (/** @type {?} */ (node));
    if (!el.getBoundingClientRect) {
        return 0;
    }
    /** @type {?} */
    const rect = el.getBoundingClientRect();
    return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 * @template T
 */
class CdkVirtualForOf {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _template
     * @param {?} _differs
     * @param {?} _viewport
     * @param {?} ngZone
     */
    constructor(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */
        this.viewChange = new Subject();
        /**
         * Subject that emits when a new DataSource instance is given.
         */
        this._dataSourceChanges = new Subject();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */
        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */
        this.dataStream = this._dataSourceChanges
            .pipe(
        // Start off with null `DataSource`.
        startWith((/** @type {?} */ (null))), 
        // Bundle up the previous and current data sources so we can work with both.
        pairwise(), 
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([prev, cur]) => this._changeDataSource(prev, cur))), 
        // Replay the last emitted data when someone subscribes.
        shareReplay(1));
        /**
         * The differ used to calculate changes to the data.
         */
        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */
        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */
        this._needsUpdate = false;
        this._destroyed = new Subject();
        this.dataStream.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this._data = data;
            this._onRenderedDataChange();
        }));
        this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @param {?} range
         * @return {?}
         */
        range => {
            this._renderedRange = range;
            ngZone.run((/**
             * @return {?}
             */
            () => this.viewChange.next(this._renderedRange)));
            this._onRenderedDataChange();
        }));
        this._viewport.attach(this);
    }
    /**
     * The DataSource to display.
     * @return {?}
     */
    get cdkVirtualForOf() {
        return this._cdkVirtualForOf;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cdkVirtualForOf(value) {
        this._cdkVirtualForOf = value;
        if (isDataSource(value)) {
            this._dataSourceChanges.next(value);
        }
        else {
            // Slice the value if its an NgIterable to ensure we're working with an array.
            this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.prototype.slice.call(value || [])));
        }
    }
    /**
     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
     * the item and produces a value to be used as the item's identity when tracking changes.
     * @return {?}
     */
    get cdkVirtualForTrackBy() {
        return this._cdkVirtualForTrackBy;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set cdkVirtualForTrackBy(fn) {
        this._needsUpdate = true;
        this._cdkVirtualForTrackBy = fn ?
            (/**
             * @param {?} index
             * @param {?} item
             * @return {?}
             */
            (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item)) :
            undefined;
    }
    /**
     * The template used to stamp out new elements.
     * @param {?} value
     * @return {?}
     */
    set cdkVirtualForTemplate(value) {
        if (value) {
            this._needsUpdate = true;
            this._template = value;
        }
    }
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    measureRangeSize(range, orientation) {
        if (range.start >= range.end) {
            return 0;
        }
        if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error(`Error: attempted to measure an item that isn't rendered.`);
        }
        // The index into the list of rendered views for the first item in the range.
        /** @type {?} */
        const renderedStartIndex = range.start - this._renderedRange.start;
        // The length of the range we're measuring.
        /** @type {?} */
        const rangeLen = range.end - range.start;
        // Loop over all root nodes for all items in the range and sum up their size.
        /** @type {?} */
        let totalSize = 0;
        /** @type {?} */
        let i = rangeLen;
        while (i--) {
            /** @type {?} */
            const view = (/** @type {?} */ (this._viewContainerRef.get(i + renderedStartIndex)));
            /** @type {?} */
            let j = view ? view.rootNodes.length : 0;
            while (j--) {
                totalSize += getSize(orientation, (/** @type {?} */ (view)).rootNodes[j]);
            }
        }
        return totalSize;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            /** @type {?} */
            const changes = this._differ.diff(this._renderedItems);
            if (!changes) {
                this._updateContext();
            }
            else {
                this._applyChanges(changes);
            }
            this._needsUpdate = false;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._viewport.detach();
        this._dataSourceChanges.next();
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        for (let view of this._templateCache) {
            view.destroy();
        }
    }
    /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    _onRenderedDataChange() {
        if (!this._renderedRange) {
            return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
        }
        this._needsUpdate = true;
    }
    /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    _changeDataSource(oldDs, newDs) {
        if (oldDs) {
            oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : of();
    }
    /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    _updateContext() {
        /** @type {?} */
        const count = this._data.length;
        /** @type {?} */
        let i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            let view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
            view.detectChanges();
        }
    }
    /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    _applyChanges(changes) {
        // Rearrange the views to put them in the right location.
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} adjustedPreviousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        (record, adjustedPreviousIndex, currentIndex) => {
            if (record.previousIndex == null) { // Item added.
                // Item added.
                /** @type {?} */
                const view = this._insertViewForNewItem((/** @type {?} */ (currentIndex)));
                view.context.$implicit = record.item;
            }
            else if (currentIndex == null) { // Item removed.
                this._cacheView(this._detachView((/** @type {?} */ (adjustedPreviousIndex))));
            }
            else { // Item moved.
                // Item moved.
                /** @type {?} */
                const view = (/** @type {?} */ (this._viewContainerRef.get((/** @type {?} */ (adjustedPreviousIndex)))));
                this._viewContainerRef.move(view, currentIndex);
                view.context.$implicit = record.item;
            }
        }));
        // Update $implicit for any items that had an identity change.
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        (record) => {
            /** @type {?} */
            const view = (/** @type {?} */ (this._viewContainerRef.get((/** @type {?} */ (record.currentIndex)))));
            view.context.$implicit = record.item;
        }));
        // Update the context variables on all items.
        /** @type {?} */
        const count = this._data.length;
        /** @type {?} */
        let i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            const view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
        }
    }
    /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    _cacheView(view) {
        if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
        }
        else {
            /** @type {?} */
            const index = this._viewContainerRef.indexOf(view);
            // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.
            if (index === -1) {
                view.destroy();
            }
            else {
                this._viewContainerRef.remove(index);
            }
        }
    }
    /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    _insertViewForNewItem(index) {
        return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
    }
    /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    _updateComputedContextProperties(context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
    }
    /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    _createEmbeddedViewAt(index) {
        // Note that it's important that we insert the item directly at the proper index,
        // rather than inserting it and the moving it in place, because if there's a directive
        // on the same node that injects the `ViewContainerRef`, Angular will insert another
        // comment node which can throw off the move when it's being repeated for all items.
        return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit: (/** @type {?} */ (null)),
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf: (/** @type {?} */ (this._cdkVirtualForOf)),
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
        }, index);
    }
    /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    _insertViewFromCache(index) {
        /** @type {?} */
        const cachedView = this._templateCache.pop();
        if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
    }
    /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    _detachView(index) {
        return (/** @type {?} */ (this._viewContainerRef.detach(index)));
    }
}
CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) { return new (t || CdkVirtualForOf)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(CdkVirtualScrollViewport, 4), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CdkVirtualForOf.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkVirtualForOf, selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]], inputs: { cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize", cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate" } });
/** @nocollapse */
CdkVirtualForOf.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: CdkVirtualScrollViewport, decorators: [{ type: SkipSelf }] },
    { type: NgZone }
];
CdkVirtualForOf.propDecorators = {
    cdkVirtualForOf: [{ type: Input }],
    cdkVirtualForTrackBy: [{ type: Input }],
    cdkVirtualForTemplate: [{ type: Input }],
    cdkVirtualForTemplateCacheSize: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkVirtualForOf, [{
        type: Directive,
        args: [{
                selector: '[cdkVirtualFor][cdkVirtualForOf]'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }, { type: CdkVirtualScrollViewport, decorators: [{
                type: SkipSelf
            }] }, { type: ɵngcc0.NgZone }]; }, { cdkVirtualForTemplateCacheSize: [{
            type: Input
        }], cdkVirtualForOf: [{
            type: Input
        }], cdkVirtualForTrackBy: [{
            type: Input
        }], cdkVirtualForTemplate: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * Emits when the rendered view of the data changes.
     * @type {?}
     */
    CdkVirtualForOf.prototype.viewChange;
    /**
     * Subject that emits when a new DataSource instance is given.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._dataSourceChanges;
    /** @type {?} */
    CdkVirtualForOf.prototype._cdkVirtualForOf;
    /**
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._cdkVirtualForTrackBy;
    /**
     * The size of the cache used to store templates that are not being used for re-use later.
     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
     * @type {?}
     */
    CdkVirtualForOf.prototype.cdkVirtualForTemplateCacheSize;
    /**
     * Emits whenever the data in the current DataSource changes.
     * @type {?}
     */
    CdkVirtualForOf.prototype.dataStream;
    /**
     * The differ used to calculate changes to the data.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._differ;
    /**
     * The most recent data emitted from the DataSource.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._data;
    /**
     * The currently rendered items.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._renderedItems;
    /**
     * The currently rendered range of indices.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._renderedRange;
    /**
     * The template cache used to hold on ot template instancess that have been stamped out, but don't
     * currently need to be rendered. These instances will be reused in the future rather than
     * stamping out brand new ones.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._templateCache;
    /**
     * Whether the rendered data should be updated during the next ngDoCheck cycle.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._needsUpdate;
    /**
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._destroyed;
    /**
     * The view container to add items to.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._viewContainerRef;
    /**
     * The template to use when stamping out new items.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._template;
    /**
     * The set of available differs.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._differs;
    /**
     * The virtual scrolling viewport that these items are being rendered in.
     * @type {?}
     * @private
     */
    CdkVirtualForOf.prototype._viewport;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/scrolling-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdkScrollableModule {
}
CdkScrollableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CdkScrollableModule });
CdkScrollableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CdkScrollableModule_Factory(t) { return new (t || CdkScrollableModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CdkScrollableModule, { declarations: [CdkScrollable], exports: [CdkScrollable] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkScrollableModule, [{
        type: NgModule,
        args: [{
                exports: [CdkScrollable],
                declarations: [CdkScrollable]
            }]
    }], null, null); })();
class ScrollingModule {
}
ScrollingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ScrollingModule });
ScrollingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ScrollingModule_Factory(t) { return new (t || ScrollingModule)(); }, imports: [[
            BidiModule,
            PlatformModule,
            CdkScrollableModule
        ],
        BidiModule,
        CdkScrollableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ScrollingModule, { declarations: function () { return [CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport]; }, imports: function () { return [BidiModule,
        PlatformModule,
        CdkScrollableModule]; }, exports: function () { return [BidiModule,
        CdkScrollableModule,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollingModule, [{
        type: NgModule,
        args: [{
                imports: [
                    BidiModule,
                    PlatformModule,
                    CdkScrollableModule
                ],
                exports: [
                    BidiModule,
                    CdkScrollableModule,
                    CdkFixedSizeVirtualScroll,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ],
                declarations: [
                    CdkFixedSizeVirtualScroll,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory };

//# sourceMappingURL=scrolling.js.map