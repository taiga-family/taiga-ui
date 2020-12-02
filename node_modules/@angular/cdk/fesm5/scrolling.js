import { coerceNumberProperty } from '@angular/cdk/coercion';
import { InjectionToken, Directive, forwardRef, Input, Injectable, NgZone, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, ElementRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Output, ViewChild, ViewContainerRef, TemplateRef, IterableDiffers, SkipSelf, NgModule } from '@angular/core';
import { Subject, of, Observable, fromEvent, merge, animationFrameScheduler, asapScheduler, Subscription, isObservable } from 'rxjs';
import { distinctUntilChanged, auditTime, filter, takeUntil, startWith, pairwise, switchMap, shareReplay } from 'rxjs/operators';
import { Platform, getRtlScrollAxisType, supportsScrollBehavior, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { __extends, __values, __read } from 'tslib';
import { isDataSource, ArrayDataSource } from '@angular/cdk/collections';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The injection token used to specify the virtual scrolling strategy. */
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken('VIRTUAL_SCROLL_STRATEGY');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Virtual scrolling strategy for lists with items of known fixed size. */
var FixedSizeVirtualScrollStrategy = /** @class */ (function () {
    /**
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new Subject();
        /** @docs-private Implemented as part of VirtualScrollStrategy. */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
        /** The attached viewport. */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    FixedSizeVirtualScrollStrategy.prototype.attach = function (viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** Detaches this scroll strategy from the currently attached viewport. */
    FixedSizeVirtualScrollStrategy.prototype.detach = function () {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    };
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    FixedSizeVirtualScrollStrategy.prototype.updateItemAndBufferSize = function (itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    FixedSizeVirtualScrollStrategy.prototype.onContentScrolled = function () {
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    FixedSizeVirtualScrollStrategy.prototype.onDataLengthChanged = function () {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    FixedSizeVirtualScrollStrategy.prototype.onContentRendered = function () { };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    FixedSizeVirtualScrollStrategy.prototype.onRenderedOffsetChanged = function () { };
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */
    FixedSizeVirtualScrollStrategy.prototype.scrollToIndex = function (index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    };
    /** Update the viewport's total content size. */
    FixedSizeVirtualScrollStrategy.prototype._updateTotalContentSize = function () {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    };
    /** Update the viewport's rendered range. */
    FixedSizeVirtualScrollStrategy.prototype._updateRenderedRange = function () {
        if (!this._viewport) {
            return;
        }
        var scrollOffset = this._viewport.measureScrollOffset();
        var firstVisibleIndex = scrollOffset / this._itemSize;
        var renderedRange = this._viewport.getRenderedRange();
        var newRange = { start: renderedRange.start, end: renderedRange.end };
        var viewportSize = this._viewport.getViewportSize();
        var dataLength = this._viewport.getDataLength();
        var startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    };
    return FixedSizeVirtualScrollStrategy;
}());
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
/** A virtual scroll strategy that supports fixed-size items. */
var CdkFixedSizeVirtualScroll = /** @class */ (function () {
    function CdkFixedSizeVirtualScroll() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /** The scroll strategy used by this directive. */
        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "itemSize", {
        /** The size of the items in the list (in pixels). */
        get: function () { return this._itemSize; },
        set: function (value) { this._itemSize = coerceNumberProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "minBufferPx", {
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         */
        get: function () { return this._minBufferPx; },
        set: function (value) { this._minBufferPx = coerceNumberProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "maxBufferPx", {
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         */
        get: function () { return this._maxBufferPx; },
        set: function (value) { this._maxBufferPx = coerceNumberProperty(value); },
        enumerable: true,
        configurable: true
    });
    CdkFixedSizeVirtualScroll.prototype.ngOnChanges = function () {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    };
    CdkFixedSizeVirtualScroll.decorators = [
        { type: Directive, args: [{
                    selector: 'cdk-virtual-scroll-viewport[itemSize]',
                    providers: [{
                            provide: VIRTUAL_SCROLL_STRATEGY,
                            useFactory: _fixedSizeVirtualScrollStrategyFactory,
                            deps: [forwardRef(function () { return CdkFixedSizeVirtualScroll; })],
                        }],
                },] }
    ];
    CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{ type: Input }],
        minBufferPx: [{ type: Input }],
        maxBufferPx: [{ type: Input }]
    };
    return CdkFixedSizeVirtualScroll;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time in ms to throttle the scrolling events by default. */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /** Subject for notifying that a registered scrollable reference element has been scrolled. */
        this._scrolled = new Subject();
        /** Keeps track of the global `scroll` and `resize` subscriptions. */
        this._globalSubscription = null;
        /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
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
     * @param scrollable Scrollable instance to be registered.
     */
    ScrollDispatcher.prototype.register = function (scrollable) {
        var _this = this;
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe(function () { return _this._scrolled.next(scrollable); }));
        }
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    ScrollDispatcher.prototype.deregister = function (scrollable) {
        var scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    ScrollDispatcher.prototype.scrolled = function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        if (!this._platform.isBrowser) {
            return of();
        }
        return new Observable(function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            var subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            };
        });
    };
    ScrollDispatcher.prototype.ngOnDestroy = function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach(function (_, container) { return _this.deregister(container); });
        this._scrolled.complete();
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    ScrollDispatcher.prototype.ancestorScrolled = function (elementRef, auditTimeInMs) {
        var ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(filter(function (target) {
            return !target || ancestors.indexOf(target) > -1;
        }));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    ScrollDispatcher.prototype.getAncestorScrollContainers = function (elementRef) {
        var _this = this;
        var scrollingContainers = [];
        this.scrollContainers.forEach(function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /** Access injected document if available or fallback to global document reference */
    ScrollDispatcher.prototype._getDocument = function () {
        return this._document || document;
    };
    /** Use defaultView of injected document if available or fallback to global window reference */
    ScrollDispatcher.prototype._getWindow = function () {
        var doc = this._getDocument();
        return doc.defaultView || window;
    };
    /** Returns true if the element is contained within the provided Scrollable. */
    ScrollDispatcher.prototype._scrollableContainsElement = function (scrollable, elementRef) {
        var element = elementRef.nativeElement;
        var scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = element.parentElement);
        return false;
    };
    /** Sets up the global scroll listeners. */
    ScrollDispatcher.prototype._addGlobalListener = function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            var window = _this._getWindow();
            return fromEvent(window.document, 'scroll').subscribe(function () { return _this._scrolled.next(); });
        });
    };
    /** Cleans up the global scroll listener. */
    ScrollDispatcher.prototype._removeGlobalListener = function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: NgZone },
        { type: Platform },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ScrollDispatcher.ɵprov = ɵɵdefineInjectable({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(ɵɵinject(NgZone), ɵɵinject(Platform), ɵɵinject(DOCUMENT, 8)); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this = this;
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new Subject();
        this._elementScrolled = new Observable(function (observer) {
            return _this.ngZone.runOutsideAngular(function () {
                return fromEvent(_this.elementRef.nativeElement, 'scroll').pipe(takeUntil(_this._destroyed))
                    .subscribe(observer);
            });
        });
    }
    CdkScrollable.prototype.ngOnInit = function () {
        this.scrollDispatcher.register(this);
    };
    CdkScrollable.prototype.ngOnDestroy = function () {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Returns observable that emits when a scroll event is fired on the host element. */
    CdkScrollable.prototype.elementScrolled = function () {
        return this._elementScrolled;
    };
    /** Gets the ElementRef for the viewport. */
    CdkScrollable.prototype.getElementRef = function () {
        return this.elementRef;
    };
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    CdkScrollable.prototype.scrollTo = function (options) {
        var el = this.elementRef.nativeElement;
        var isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        if (options.left == null) {
            options.left = isRtl ? options.end : options.start;
        }
        if (options.right == null) {
            options.right = isRtl ? options.start : options.end;
        }
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            options.top =
                el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && getRtlScrollAxisType() != 0 /* NORMAL */) {
            if (options.left != null) {
                options.right =
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
                options.left =
                    el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    };
    CdkScrollable.prototype._applyScrollToOptions = function (options) {
        var el = this.elementRef.nativeElement;
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
    };
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    CdkScrollable.prototype.measureScrollOffset = function (from) {
        var LEFT = 'left';
        var RIGHT = 'right';
        var el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        var isRtl = this.dir && this.dir.value == 'rtl';
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
    };
    CdkScrollable.decorators = [
        { type: Directive, args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] }
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ScrollDispatcher },
        { type: NgZone },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    return CdkScrollable;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time in ms to throttle the resize events by default. */
var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        var _this = this;
        this._platform = _platform;
        this._document = document;
        ngZone.runOutsideAngular(function () {
            var window = _this._getWindow();
            _this._change = _platform.isBrowser ?
                merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange')) :
                of();
            // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.
            _this._invalidateCache = _this.change().subscribe(function () { return _this._updateViewportSize(); });
        });
    }
    ViewportRuler.prototype.ngOnDestroy = function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    ViewportRuler.prototype.getViewportSize = function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        var output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = null;
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    ViewportRuler.prototype.getViewportRect = function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    ViewportRuler.prototype.getViewportScrollPosition = function () {
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
        var document = this._getDocument();
        var window = this._getWindow();
        var documentElement = document.documentElement;
        var documentRect = documentElement.getBoundingClientRect();
        var top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        var left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    ViewportRuler.prototype.change = function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
    };
    /** Access injected document if available or fallback to global document reference */
    ViewportRuler.prototype._getDocument = function () {
        return this._document || document;
    };
    /** Use defaultView of injected document if available or fallback to global window reference */
    ViewportRuler.prototype._getWindow = function () {
        var doc = this._getDocument();
        return doc.defaultView || window;
    };
    /** Updates the cached viewport size. */
    ViewportRuler.prototype._updateViewportSize = function () {
        var window = this._getWindow();
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: Platform },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ViewportRuler.ɵprov = ɵɵdefineInjectable({ factory: function ViewportRuler_Factory() { return new ViewportRuler(ɵɵinject(Platform), ɵɵinject(NgZone), ɵɵinject(DOCUMENT, 8)); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Checks if the given ranges are equal. */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 */
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
/** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */
var CdkVirtualScrollViewport = /** @class */ (function (_super) {
    __extends(CdkVirtualScrollViewport, _super);
    function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, 
    /**
     * @deprecated `viewportRuler` parameter to become required.
     * @breaking-change 11.0.0
     */
    viewportRuler) {
        var _this = _super.call(this, elementRef, scrollDispatcher, ngZone, dir) || this;
        _this.elementRef = elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._scrollStrategy = _scrollStrategy;
        /** Emits when the viewport is detached from a CdkVirtualForOf. */
        _this._detachedSubject = new Subject();
        /** Emits when the rendered range changes. */
        _this._renderedRangeSubject = new Subject();
        _this._orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /** Emits when the index of the first element visible in the viewport changes. */
        _this.scrolledIndexChange = new Observable(function (observer) {
            return _this._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
                return Promise.resolve().then(function () { return _this.ngZone.run(function () { return observer.next(index); }); });
            });
        });
        /** A stream that emits whenever the rendered range changes. */
        _this.renderedRangeStream = _this._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        _this._totalContentSize = 0;
        /** A string representing the `style.width` property value to be used for the spacer element. */
        _this._totalContentWidth = '';
        /** A string representing the `style.height` property value to be used for the spacer element. */
        _this._totalContentHeight = '';
        /** The currently rendered range of indices. */
        _this._renderedRange = { start: 0, end: 0 };
        /** The length of the data bound to this viewport (in number of items). */
        _this._dataLength = 0;
        /** The size of the viewport (in pixels). */
        _this._viewportSize = 0;
        /** The last rendered content offset that was set. */
        _this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        _this._renderedContentOffsetNeedsRewrite = false;
        /** Whether there is a pending change detection cycle. */
        _this._isChangeDetectionPending = false;
        /** A list of functions to run after the next change detection cycle. */
        _this._runAfterChangeDetection = [];
        /** Subscription to changes in the viewport size. */
        _this._viewportChanges = Subscription.EMPTY;
        if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        // @breaking-change 11.0.0 Remove null check for `viewportRuler`.
        if (viewportRuler) {
            _this._viewportChanges = viewportRuler.change().subscribe(function () {
                _this.checkViewportSize();
            });
        }
        return _this;
    }
    Object.defineProperty(CdkVirtualScrollViewport.prototype, "orientation", {
        /** The direction the viewport scrolls. */
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            if (this._orientation !== orientation) {
                this._orientation = orientation;
                this._calculateSpacerSize();
            }
        },
        enumerable: true,
        configurable: true
    });
    CdkVirtualScrollViewport.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular(function () { return Promise.resolve().then(function () {
            _this._measureViewportSize();
            _this._scrollStrategy.attach(_this);
            _this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            startWith(null), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            auditTime(0, SCROLL_SCHEDULER))
                .subscribe(function () { return _this._scrollStrategy.onContentScrolled(); });
            _this._markChangeDetectionNeeded();
        }); });
    };
    CdkVirtualScrollViewport.prototype.ngOnDestroy = function () {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        this._viewportChanges.unsubscribe();
        _super.prototype.ngOnDestroy.call(this);
    };
    /** Attaches a `CdkVirtualForOf` to this viewport. */
    CdkVirtualScrollViewport.prototype.attach = function (forOf) {
        var _this = this;
        if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular(function () {
            _this._forOf = forOf;
            _this._forOf.dataStream.pipe(takeUntil(_this._detachedSubject)).subscribe(function (data) {
                var newLength = data.length;
                if (newLength !== _this._dataLength) {
                    _this._dataLength = newLength;
                    _this._scrollStrategy.onDataLengthChanged();
                }
                _this._doChangeDetection();
            });
        });
    };
    /** Detaches the current `CdkVirtualForOf`. */
    CdkVirtualScrollViewport.prototype.detach = function () {
        this._forOf = null;
        this._detachedSubject.next();
    };
    /** Gets the length of the data bound to this viewport (in number of items). */
    CdkVirtualScrollViewport.prototype.getDataLength = function () {
        return this._dataLength;
    };
    /** Gets the size of the viewport (in pixels). */
    CdkVirtualScrollViewport.prototype.getViewportSize = function () {
        return this._viewportSize;
    };
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /** Get the current rendered range of items. */
    CdkVirtualScrollViewport.prototype.getRenderedRange = function () {
        return this._renderedRange;
    };
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    CdkVirtualScrollViewport.prototype.setTotalContentSize = function (size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            this._calculateSpacerSize();
            this._markChangeDetectionNeeded();
        }
    };
    /** Sets the currently rendered range of indices. */
    CdkVirtualScrollViewport.prototype.setRenderedRange = function (range) {
        var _this = this;
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded(function () { return _this._scrollStrategy.onContentRendered(); });
        }
    };
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    CdkVirtualScrollViewport.prototype.getOffsetToRenderedContentStart = function () {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    };
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    CdkVirtualScrollViewport.prototype.setRenderedContentOffset = function (offset, to) {
        var _this = this;
        if (to === void 0) { to = 'to-start'; }
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        var isRtl = this.dir && this.dir.value == 'rtl';
        var isHorizontal = this.orientation == 'horizontal';
        var axis = isHorizontal ? 'X' : 'Y';
        var axisDirection = isHorizontal && isRtl ? -1 : 1;
        var transform = "translate" + axis + "(" + Number(axisDirection * offset) + "px)";
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += " translate" + axis + "(-100%)";
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded(function () {
                if (_this._renderedContentOffsetNeedsRewrite) {
                    _this._renderedContentOffset -= _this.measureRenderedContentSize();
                    _this._renderedContentOffsetNeedsRewrite = false;
                    _this.setRenderedContentOffset(_this._renderedContentOffset);
                }
                else {
                    _this._scrollStrategy.onRenderedOffsetChanged();
                }
            });
        }
    };
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    CdkVirtualScrollViewport.prototype.scrollToOffset = function (offset, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        var options = { behavior: behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    };
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    CdkVirtualScrollViewport.prototype.scrollToIndex = function (index, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        this._scrollStrategy.scrollToIndex(index, behavior);
    };
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    CdkVirtualScrollViewport.prototype.measureScrollOffset = function (from) {
        return from ?
            _super.prototype.measureScrollOffset.call(this, from) :
            _super.prototype.measureScrollOffset.call(this, this.orientation === 'horizontal' ? 'start' : 'top');
    };
    /** Measure the combined size of all of the rendered items. */
    CdkVirtualScrollViewport.prototype.measureRenderedContentSize = function () {
        var contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    };
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    CdkVirtualScrollViewport.prototype.measureRangeSize = function (range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    };
    /** Update the viewport dimensions and re-render. */
    CdkVirtualScrollViewport.prototype.checkViewportSize = function () {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    };
    /** Measure the viewport size. */
    CdkVirtualScrollViewport.prototype._measureViewportSize = function () {
        var viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    };
    /** Queue up change detection to run. */
    CdkVirtualScrollViewport.prototype._markChangeDetectionNeeded = function (runAfter) {
        var _this = this;
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(function () { return Promise.resolve().then(function () {
                _this._doChangeDetection();
            }); });
        }
    };
    /** Run change detection. */
    CdkVirtualScrollViewport.prototype._doChangeDetection = function () {
        var e_1, _a;
        var _this = this;
        this._isChangeDetectionPending = false;
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run(function () { return _this._changeDetectorRef.markForCheck(); });
        var runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        try {
            for (var runAfterChangeDetection_1 = __values(runAfterChangeDetection), runAfterChangeDetection_1_1 = runAfterChangeDetection_1.next(); !runAfterChangeDetection_1_1.done; runAfterChangeDetection_1_1 = runAfterChangeDetection_1.next()) {
                var fn = runAfterChangeDetection_1_1.value;
                fn();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (runAfterChangeDetection_1_1 && !runAfterChangeDetection_1_1.done && (_a = runAfterChangeDetection_1.return)) _a.call(runAfterChangeDetection_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Calculates the `style.width` and `style.height` for the spacer element. */
    CdkVirtualScrollViewport.prototype._calculateSpacerSize = function () {
        this._totalContentHeight =
            this.orientation === 'horizontal' ? '' : this._totalContentSize + "px";
        this._totalContentWidth =
            this.orientation === 'horizontal' ? this._totalContentSize + "px" : '';
    };
    CdkVirtualScrollViewport.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-viewport',
                    template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
                    host: {
                        'class': 'cdk-virtual-scroll-viewport',
                        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"',
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: CdkScrollable,
                            useExisting: CdkVirtualScrollViewport,
                        }],
                    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
                }] }
    ];
    /** @nocollapse */
    CdkVirtualScrollViewport.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [VIRTUAL_SCROLL_STRATEGY,] }] },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: ScrollDispatcher },
        { type: ViewportRuler, decorators: [{ type: Optional }] }
    ]; };
    CdkVirtualScrollViewport.propDecorators = {
        orientation: [{ type: Input }],
        scrolledIndexChange: [{ type: Output }],
        _contentWrapper: [{ type: ViewChild, args: ['contentWrapper', { static: true },] }]
    };
    return CdkVirtualScrollViewport;
}(CdkScrollable));

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Helper to extract size from a DOM Node. */
function getSize(orientation, node) {
    var el = node;
    if (!el.getBoundingClientRect) {
        return 0;
    }
    var rect = el.getBoundingClientRect();
    return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 */
var CdkVirtualForOf = /** @class */ (function () {
    function CdkVirtualForOf(
    /** The view container to add items to. */
    _viewContainerRef, 
    /** The template to use when stamping out new items. */
    _template, 
    /** The set of available differs. */
    _differs, 
    /** The virtual scrolling viewport that these items are being rendered in. */
    _viewport, ngZone) {
        var _this = this;
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /** Emits when the rendered view of the data changes. */
        this.viewChange = new Subject();
        /** Subject that emits when a new DataSource instance is given. */
        this._dataSourceChanges = new Subject();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */
        this.cdkVirtualForTemplateCacheSize = 20;
        /** Emits whenever the data in the current DataSource changes. */
        this.dataStream = this._dataSourceChanges
            .pipe(
        // Start off with null `DataSource`.
        startWith(null), 
        // Bundle up the previous and current data sources so we can work with both.
        pairwise(), 
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        switchMap(function (_a) {
            var _b = __read(_a, 2), prev = _b[0], cur = _b[1];
            return _this._changeDataSource(prev, cur);
        }), 
        // Replay the last emitted data when someone subscribes.
        shareReplay(1));
        /** The differ used to calculate changes to the data. */
        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */
        this._templateCache = [];
        /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
        this._needsUpdate = false;
        this._destroyed = new Subject();
        this.dataStream.subscribe(function (data) {
            _this._data = data;
            _this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe(function (range) {
            _this._renderedRange = range;
            ngZone.run(function () { return _this.viewChange.next(_this._renderedRange); });
            _this._onRenderedDataChange();
        });
        this._viewport.attach(this);
    }
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForOf", {
        /** The DataSource to display. */
        get: function () {
            return this._cdkVirtualForOf;
        },
        set: function (value) {
            this._cdkVirtualForOf = value;
            if (isDataSource(value)) {
                this._dataSourceChanges.next(value);
            }
            else {
                // Slice the value if its an NgIterable to ensure we're working with an array.
                this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.prototype.slice.call(value || [])));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTrackBy", {
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         */
        get: function () {
            return this._cdkVirtualForTrackBy;
        },
        set: function (fn) {
            var _this = this;
            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ?
                function (index, item) { return fn(index + (_this._renderedRange ? _this._renderedRange.start : 0), item); } :
                undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTemplate", {
        /** The template used to stamp out new elements. */
        set: function (value) {
            if (value) {
                this._needsUpdate = true;
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    CdkVirtualForOf.prototype.measureRangeSize = function (range, orientation) {
        if (range.start >= range.end) {
            return 0;
        }
        if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
        }
        // The index into the list of rendered views for the first item in the range.
        var renderedStartIndex = range.start - this._renderedRange.start;
        // The length of the range we're measuring.
        var rangeLen = range.end - range.start;
        // Loop over all root nodes for all items in the range and sum up their size.
        var totalSize = 0;
        var i = rangeLen;
        while (i--) {
            var view = this._viewContainerRef.get(i + renderedStartIndex);
            var j = view ? view.rootNodes.length : 0;
            while (j--) {
                totalSize += getSize(orientation, view.rootNodes[j]);
            }
        }
        return totalSize;
    };
    CdkVirtualForOf.prototype.ngDoCheck = function () {
        if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            var changes = this._differ.diff(this._renderedItems);
            if (!changes) {
                this._updateContext();
            }
            else {
                this._applyChanges(changes);
            }
            this._needsUpdate = false;
        }
    };
    CdkVirtualForOf.prototype.ngOnDestroy = function () {
        var e_1, _a;
        this._viewport.detach();
        this._dataSourceChanges.next();
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        try {
            for (var _b = __values(this._templateCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                var view = _c.value;
                view.destroy();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** React to scroll state changes in the viewport. */
    CdkVirtualForOf.prototype._onRenderedDataChange = function () {
        if (!this._renderedRange) {
            return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
        }
        this._needsUpdate = true;
    };
    /** Swap out one `DataSource` for another. */
    CdkVirtualForOf.prototype._changeDataSource = function (oldDs, newDs) {
        if (oldDs) {
            oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : of();
    };
    /** Update the `CdkVirtualForOfContext` for all views. */
    CdkVirtualForOf.prototype._updateContext = function () {
        var count = this._data.length;
        var i = this._viewContainerRef.length;
        while (i--) {
            var view = this._viewContainerRef.get(i);
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
            view.detectChanges();
        }
    };
    /** Apply changes to the DOM. */
    CdkVirtualForOf.prototype._applyChanges = function (changes) {
        var _this = this;
        // Rearrange the views to put them in the right location.
        changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) { // Item added.
                var view = _this._insertViewForNewItem(currentIndex);
                view.context.$implicit = record.item;
            }
            else if (currentIndex == null) { // Item removed.
                _this._cacheView(_this._detachView(adjustedPreviousIndex));
            }
            else { // Item moved.
                var view = _this._viewContainerRef.get(adjustedPreviousIndex);
                _this._viewContainerRef.move(view, currentIndex);
                view.context.$implicit = record.item;
            }
        });
        // Update $implicit for any items that had an identity change.
        changes.forEachIdentityChange(function (record) {
            var view = _this._viewContainerRef.get(record.currentIndex);
            view.context.$implicit = record.item;
        });
        // Update the context variables on all items.
        var count = this._data.length;
        var i = this._viewContainerRef.length;
        while (i--) {
            var view = this._viewContainerRef.get(i);
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
        }
    };
    /** Cache the given detached view. */
    CdkVirtualForOf.prototype._cacheView = function (view) {
        if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
        }
        else {
            var index = this._viewContainerRef.indexOf(view);
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
    };
    /** Inserts a view for a new item, either from the cache or by creating a new one. */
    CdkVirtualForOf.prototype._insertViewForNewItem = function (index) {
        return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
    };
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    CdkVirtualForOf.prototype._updateComputedContextProperties = function (context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
    };
    /** Creates a new embedded view and moves it to the given index */
    CdkVirtualForOf.prototype._createEmbeddedViewAt = function (index) {
        // Note that it's important that we insert the item directly at the proper index,
        // rather than inserting it and the moving it in place, because if there's a directive
        // on the same node that injects the `ViewContainerRef`, Angular will insert another
        // comment node which can throw off the move when it's being repeated for all items.
        return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit: null,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
        }, index);
    };
    /** Inserts a recycled view from the cache at the given index. */
    CdkVirtualForOf.prototype._insertViewFromCache = function (index) {
        var cachedView = this._templateCache.pop();
        if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
    };
    /** Detaches the embedded view at the given index. */
    CdkVirtualForOf.prototype._detachView = function (index) {
        return this._viewContainerRef.detach(index);
    };
    CdkVirtualForOf.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkVirtualFor][cdkVirtualForOf]',
                },] }
    ];
    /** @nocollapse */
    CdkVirtualForOf.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: IterableDiffers },
        { type: CdkVirtualScrollViewport, decorators: [{ type: SkipSelf }] },
        { type: NgZone }
    ]; };
    CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{ type: Input }],
        cdkVirtualForTrackBy: [{ type: Input }],
        cdkVirtualForTemplate: [{ type: Input }],
        cdkVirtualForTemplateCacheSize: [{ type: Input }]
    };
    return CdkVirtualForOf;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CdkScrollableModule = /** @class */ (function () {
    function CdkScrollableModule() {
    }
    CdkScrollableModule.decorators = [
        { type: NgModule, args: [{
                    exports: [CdkScrollable],
                    declarations: [CdkScrollable]
                },] }
    ];
    return CdkScrollableModule;
}());
var ScrollingModule = /** @class */ (function () {
    function ScrollingModule() {
    }
    ScrollingModule.decorators = [
        { type: NgModule, args: [{
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
                    ],
                },] }
    ];
    return ScrollingModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory };
//# sourceMappingURL=scrolling.js.map
