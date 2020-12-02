/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __values } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, Optional, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { animationFrameScheduler, asapScheduler, Observable, Subject, Subscription, } from 'rxjs';
import { auditTime, startWith, takeUntil } from 'rxjs/operators';
import { ScrollDispatcher } from './scroll-dispatcher';
import { CdkScrollable } from './scrollable';
import { VIRTUAL_SCROLL_STRATEGY } from './virtual-scroll-strategy';
import { ViewportRuler } from './viewport-ruler';
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
export { CdkVirtualScrollViewport };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwtdmlld3BvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3Njcm9sbGluZy92aXJ0dWFsLXNjcm9sbC12aWV3cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsYUFBYSxFQUNiLFVBQVUsRUFDVixPQUFPLEVBRVAsWUFBWSxHQUNiLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBMEIsTUFBTSxjQUFjLENBQUM7QUFFcEUsT0FBTyxFQUFDLHVCQUF1QixFQUF3QixNQUFNLDJCQUEyQixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyw0Q0FBNEM7QUFDNUMsU0FBUyxXQUFXLENBQUMsRUFBYSxFQUFFLEVBQWE7SUFDL0MsT0FBTyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQ2xELENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsSUFBTSxnQkFBZ0IsR0FDbEIsT0FBTyxx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NkJBQTZCO29CQUN2QyxnaUJBQTJDO29CQUUzQyxJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLDZCQUE2Qjt3QkFDdEMsbURBQW1ELEVBQUUsOEJBQThCO3dCQUNuRixpREFBaUQsRUFBRSw4QkFBOEI7cUJBQ2xGO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7eUJBQ3RDLENBQUM7O2lCQUNIOzs7O2dCQXhEQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFLakIsTUFBTTtnREE0SU8sUUFBUSxZQUFJLE1BQU0sU0FBQyx1QkFBdUI7Z0JBckpqRCxjQUFjLHVCQXVKUCxRQUFRO2dCQTdIZixnQkFBZ0I7Z0JBSWhCLGFBQWEsdUJBK0hOLFFBQVE7Ozs4QkF0RnBCLEtBQUs7c0NBaUJMLE1BQU07a0NBTU4sU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7SUFrVjdDLCtCQUFDO0NBQUEsQUFqWUQsQ0FnQjhDLGFBQWEsR0FpWDFEO1NBalhZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0xpc3RSYW5nZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLFxuICBhc2FwU2NoZWR1bGVyLFxuICBPYnNlcnZhYmxlLFxuICBTdWJqZWN0LFxuICBPYnNlcnZlcixcbiAgU3Vic2NyaXB0aW9uLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7YXVkaXRUaW1lLCBzdGFydFdpdGgsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTY3JvbGxEaXNwYXRjaGVyfSBmcm9tICcuL3Njcm9sbC1kaXNwYXRjaGVyJztcbmltcG9ydCB7Q2RrU2Nyb2xsYWJsZSwgRXh0ZW5kZWRTY3JvbGxUb09wdGlvbnN9IGZyb20gJy4vc2Nyb2xsYWJsZSc7XG5pbXBvcnQge0Nka1ZpcnR1YWxGb3JPZn0gZnJvbSAnLi92aXJ0dWFsLWZvci1vZic7XG5pbXBvcnQge1ZJUlRVQUxfU0NST0xMX1NUUkFURUdZLCBWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3l9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtWaWV3cG9ydFJ1bGVyfSBmcm9tICcuL3ZpZXdwb3J0LXJ1bGVyJztcblxuLyoqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gcmFuZ2VzIGFyZSBlcXVhbC4gKi9cbmZ1bmN0aW9uIHJhbmdlc0VxdWFsKHIxOiBMaXN0UmFuZ2UsIHIyOiBMaXN0UmFuZ2UpOiBib29sZWFuIHtcbiAgcmV0dXJuIHIxLnN0YXJ0ID09IHIyLnN0YXJ0ICYmIHIxLmVuZCA9PSByMi5lbmQ7XG59XG5cbi8qKlxuICogU2NoZWR1bGVyIHRvIGJlIHVzZWQgZm9yIHNjcm9sbCBldmVudHMuIE5lZWRzIHRvIGZhbGwgYmFjayB0b1xuICogc29tZXRoaW5nIHRoYXQgZG9lc24ndCByZWx5IG9uIHJlcXVlc3RBbmltYXRpb25GcmFtZSBvbiBlbnZpcm9ubWVudHNcbiAqIHRoYXQgZG9uJ3Qgc3VwcG9ydCBpdCAoZS5nLiBzZXJ2ZXItc2lkZSByZW5kZXJpbmcpLlxuICovXG5jb25zdCBTQ1JPTExfU0NIRURVTEVSID1cbiAgICB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJyA/IGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIDogYXNhcFNjaGVkdWxlcjtcblxuXG4vKiogQSB2aWV3cG9ydCB0aGF0IHZpcnR1YWxpemVzIGl0cyBzY3JvbGxpbmcgd2l0aCB0aGUgaGVscCBvZiBgQ2RrVmlydHVhbEZvck9mYC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCcsXG4gIHRlbXBsYXRlVXJsOiAndmlydHVhbC1zY3JvbGwtdmlld3BvcnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd2aXJ0dWFsLXNjcm9sbC12aWV3cG9ydC5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQnLFxuICAgICdbY2xhc3MuY2RrLXZpcnR1YWwtc2Nyb2xsLW9yaWVudGF0aW9uLWhvcml6b250YWxdJzogJ29yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIicsXG4gICAgJ1tjbGFzcy5jZGstdmlydHVhbC1zY3JvbGwtb3JpZW50YXRpb24tdmVydGljYWxdJzogJ29yaWVudGF0aW9uICE9PSBcImhvcml6b250YWxcIicsXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogQ2RrU2Nyb2xsYWJsZSxcbiAgICB1c2VFeGlzdGluZzogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LFxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgZXh0ZW5kcyBDZGtTY3JvbGxhYmxlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogRW1pdHMgd2hlbiB0aGUgdmlld3BvcnQgaXMgZGV0YWNoZWQgZnJvbSBhIENka1ZpcnR1YWxGb3JPZi4gKi9cbiAgcHJpdmF0ZSBfZGV0YWNoZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgcmVuZGVyZWQgcmFuZ2UgY2hhbmdlcy4gKi9cbiAgcHJpdmF0ZSBfcmVuZGVyZWRSYW5nZVN1YmplY3QgPSBuZXcgU3ViamVjdDxMaXN0UmFuZ2U+KCk7XG5cbiAgLyoqIFRoZSBkaXJlY3Rpb24gdGhlIHZpZXdwb3J0IHNjcm9sbHMuICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZW50YXRpb247XG4gIH1cbiAgc2V0IG9yaWVudGF0aW9uKG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnKSB7XG4gICAgaWYgKHRoaXMuX29yaWVudGF0aW9uICE9PSBvcmllbnRhdGlvbikge1xuICAgICAgdGhpcy5fb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVNwYWNlclNpemUoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xuXG4gIC8vIE5vdGU6IHdlIGRvbid0IHVzZSB0aGUgdHlwaWNhbCBFdmVudEVtaXR0ZXIgaGVyZSBiZWNhdXNlIHdlIG5lZWQgdG8gc3Vic2NyaWJlIHRvIHRoZSBzY3JvbGxcbiAgLy8gc3RyYXRlZ3kgbGF6aWx5IChpLmUuIG9ubHkgaWYgdGhlIHVzZXIgaXMgYWN0dWFsbHkgbGlzdGVuaW5nIHRvIHRoZSBldmVudHMpLiBXZSBkbyB0aGlzIGJlY2F1c2VcbiAgLy8gZGVwZW5kaW5nIG9uIGhvdyB0aGUgc3RyYXRlZ3kgY2FsY3VsYXRlcyB0aGUgc2Nyb2xsZWQgaW5kZXgsIGl0IG1heSBjb21lIGF0IGEgY29zdCB0b1xuICAvLyBwZXJmb3JtYW5jZS5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBlbGVtZW50IHZpc2libGUgaW4gdGhlIHZpZXdwb3J0IGNoYW5nZXMuICovXG4gIEBPdXRwdXQoKSBzY3JvbGxlZEluZGV4Q2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj4gPVxuICAgICAgbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxudW1iZXI+KSA9PlxuICAgICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5zY3JvbGxlZEluZGV4Q2hhbmdlLnN1YnNjcmliZShpbmRleCA9PlxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gb2JzZXJ2ZXIubmV4dChpbmRleCkpKSkpO1xuXG4gIC8qKiBUaGUgZWxlbWVudCB0aGF0IHdyYXBzIHRoZSByZW5kZXJlZCBjb250ZW50LiAqL1xuICBAVmlld0NoaWxkKCdjb250ZW50V3JhcHBlcicsIHtzdGF0aWM6IHRydWV9KSBfY29udGVudFdyYXBwZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIC8qKiBBIHN0cmVhbSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSByZW5kZXJlZCByYW5nZSBjaGFuZ2VzLiAqL1xuICByZW5kZXJlZFJhbmdlU3RyZWFtOiBPYnNlcnZhYmxlPExpc3RSYW5nZT4gPSB0aGlzLl9yZW5kZXJlZFJhbmdlU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAvKipcbiAgICogVGhlIHRvdGFsIHNpemUgb2YgYWxsIGNvbnRlbnQgKGluIHBpeGVscyksIGluY2x1ZGluZyBjb250ZW50IHRoYXQgaXMgbm90IGN1cnJlbnRseSByZW5kZXJlZC5cbiAgICovXG4gIHByaXZhdGUgX3RvdGFsQ29udGVudFNpemUgPSAwO1xuXG4gIC8qKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGBzdHlsZS53aWR0aGAgcHJvcGVydHkgdmFsdWUgdG8gYmUgdXNlZCBmb3IgdGhlIHNwYWNlciBlbGVtZW50LiAqL1xuICBfdG90YWxDb250ZW50V2lkdGggPSAnJztcblxuICAvKiogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBgc3R5bGUuaGVpZ2h0YCBwcm9wZXJ0eSB2YWx1ZSB0byBiZSB1c2VkIGZvciB0aGUgc3BhY2VyIGVsZW1lbnQuICovXG4gIF90b3RhbENvbnRlbnRIZWlnaHQgPSAnJztcblxuICAvKipcbiAgICogVGhlIENTUyB0cmFuc2Zvcm0gYXBwbGllZCB0byB0aGUgcmVuZGVyZWQgc3Vic2V0IG9mIGl0ZW1zIHNvIHRoYXQgdGhleSBhcHBlYXIgd2l0aGluIHRoZSBib3VuZHNcbiAgICogb2YgdGhlIHZpc2libGUgdmlld3BvcnQuXG4gICAqL1xuICBwcml2YXRlIF9yZW5kZXJlZENvbnRlbnRUcmFuc2Zvcm06IHN0cmluZztcblxuICAvKiogVGhlIGN1cnJlbnRseSByZW5kZXJlZCByYW5nZSBvZiBpbmRpY2VzLiAqL1xuICBwcml2YXRlIF9yZW5kZXJlZFJhbmdlOiBMaXN0UmFuZ2UgPSB7c3RhcnQ6IDAsIGVuZDogMH07XG5cbiAgLyoqIFRoZSBsZW5ndGggb2YgdGhlIGRhdGEgYm91bmQgdG8gdGhpcyB2aWV3cG9ydCAoaW4gbnVtYmVyIG9mIGl0ZW1zKS4gKi9cbiAgcHJpdmF0ZSBfZGF0YUxlbmd0aCA9IDA7XG5cbiAgLyoqIFRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS4gKi9cbiAgcHJpdmF0ZSBfdmlld3BvcnRTaXplID0gMDtcblxuICAvKiogdGhlIGN1cnJlbnRseSBhdHRhY2hlZCBDZGtWaXJ0dWFsRm9yT2YuICovXG4gIHByaXZhdGUgX2Zvck9mOiBDZGtWaXJ0dWFsRm9yT2Y8YW55PiB8IG51bGw7XG5cbiAgLyoqIFRoZSBsYXN0IHJlbmRlcmVkIGNvbnRlbnQgb2Zmc2V0IHRoYXQgd2FzIHNldC4gKi9cbiAgcHJpdmF0ZSBfcmVuZGVyZWRDb250ZW50T2Zmc2V0ID0gMDtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgbGFzdCByZW5kZXJlZCBjb250ZW50IG9mZnNldCB3YXMgdG8gdGhlIGVuZCBvZiB0aGUgY29udGVudCAoYW5kIHRoZXJlZm9yZSBuZWVkcyB0b1xuICAgKiBiZSByZXdyaXR0ZW4gYXMgYW4gb2Zmc2V0IHRvIHRoZSBzdGFydCBvZiB0aGUgY29udGVudCkuXG4gICAqL1xuICBwcml2YXRlIF9yZW5kZXJlZENvbnRlbnRPZmZzZXROZWVkc1Jld3JpdGUgPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGVyZSBpcyBhIHBlbmRpbmcgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS4gKi9cbiAgcHJpdmF0ZSBfaXNDaGFuZ2VEZXRlY3Rpb25QZW5kaW5nID0gZmFsc2U7XG5cbiAgLyoqIEEgbGlzdCBvZiBmdW5jdGlvbnMgdG8gcnVuIGFmdGVyIHRoZSBuZXh0IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUuICovXG4gIHByaXZhdGUgX3J1bkFmdGVyQ2hhbmdlRGV0ZWN0aW9uOiBGdW5jdGlvbltdID0gW107XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBjaGFuZ2VzIGluIHRoZSB2aWV3cG9ydCBzaXplLiAqL1xuICBwcml2YXRlIF92aWV3cG9ydENoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFZJUlRVQUxfU0NST0xMX1NUUkFURUdZKVxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3k6IFZpcnR1YWxTY3JvbGxTdHJhdGVneSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICAgICAgICAgICAgc2Nyb2xsRGlzcGF0Y2hlcjogU2Nyb2xsRGlzcGF0Y2hlcixcbiAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAqIEBkZXByZWNhdGVkIGB2aWV3cG9ydFJ1bGVyYCBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAgICAgICAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDExLjAuMFxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgdmlld3BvcnRSdWxlcj86IFZpZXdwb3J0UnVsZXIpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzY3JvbGxEaXNwYXRjaGVyLCBuZ1pvbmUsIGRpcik7XG5cbiAgICBpZiAoIV9zY3JvbGxTdHJhdGVneSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0Vycm9yOiBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgcmVxdWlyZXMgdGhlIFwiaXRlbVNpemVcIiBwcm9wZXJ0eSB0byBiZSBzZXQuJyk7XG4gICAgfVxuXG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSAxMS4wLjAgUmVtb3ZlIG51bGwgY2hlY2sgZm9yIGB2aWV3cG9ydFJ1bGVyYC5cbiAgICBpZiAodmlld3BvcnRSdWxlcikge1xuICAgICAgdGhpcy5fdmlld3BvcnRDaGFuZ2VzID0gdmlld3BvcnRSdWxlci5jaGFuZ2UoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrVmlld3BvcnRTaXplKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgLy8gSXQncyBzdGlsbCB0b28gZWFybHkgdG8gbWVhc3VyZSB0aGUgdmlld3BvcnQgYXQgdGhpcyBwb2ludC4gRGVmZXJyaW5nIHdpdGggYSBwcm9taXNlIGFsbG93c1xuICAgIC8vIHRoZSBWaWV3cG9ydCB0byBiZSByZW5kZXJlZCB3aXRoIHRoZSBjb3JyZWN0IHNpemUgYmVmb3JlIHdlIG1lYXN1cmUuIFdlIHJ1biB0aGlzIG91dHNpZGUgdGhlXG4gICAgLy8gem9uZSB0byBhdm9pZCBjYXVzaW5nIG1vcmUgY2hhbmdlIGRldGVjdGlvbiBjeWNsZXMuIFdlIGhhbmRsZSB0aGUgY2hhbmdlIGRldGVjdGlvbiBsb29wXG4gICAgLy8gb3Vyc2VsdmVzIGluc3RlYWQuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9tZWFzdXJlVmlld3BvcnRTaXplKCk7XG4gICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5hdHRhY2godGhpcyk7XG5cbiAgICAgIHRoaXMuZWxlbWVudFNjcm9sbGVkKClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgLy8gU3RhcnQgb2ZmIHdpdGggYSBmYWtlIHNjcm9sbCBldmVudCBzbyB3ZSBwcm9wZXJseSBkZXRlY3Qgb3VyIGluaXRpYWwgcG9zaXRpb24uXG4gICAgICAgICAgICAgIHN0YXJ0V2l0aChudWxsISksXG4gICAgICAgICAgICAgIC8vIENvbGxlY3QgbXVsdGlwbGUgZXZlbnRzIGludG8gb25lIHVudGlsIHRoZSBuZXh0IGFuaW1hdGlvbiBmcmFtZS4gVGhpcyB3YXkgaWZcbiAgICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG11bHRpcGxlIHNjcm9sbCBldmVudHMgaW4gdGhlIHNhbWUgZnJhbWUgd2Ugb25seSBuZWVkIHRvIHJlY2hlY2tcbiAgICAgICAgICAgICAgLy8gb3VyIGxheW91dCBvbmNlLlxuICAgICAgICAgICAgICBhdWRpdFRpbWUoMCwgU0NST0xMX1NDSEVEVUxFUikpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zY3JvbGxTdHJhdGVneS5vbkNvbnRlbnRTY3JvbGxlZCgpKTtcblxuICAgICAgdGhpcy5fbWFya0NoYW5nZURldGVjdGlvbk5lZWRlZCgpO1xuICAgIH0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kuZGV0YWNoKCk7XG5cbiAgICAvLyBDb21wbGV0ZSBhbGwgc3ViamVjdHNcbiAgICB0aGlzLl9yZW5kZXJlZFJhbmdlU3ViamVjdC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2RldGFjaGVkU3ViamVjdC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX3ZpZXdwb3J0Q2hhbmdlcy51bnN1YnNjcmliZSgpO1xuXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKiBBdHRhY2hlcyBhIGBDZGtWaXJ0dWFsRm9yT2ZgIHRvIHRoaXMgdmlld3BvcnQuICovXG4gIGF0dGFjaChmb3JPZjogQ2RrVmlydHVhbEZvck9mPGFueT4pIHtcbiAgICBpZiAodGhpcy5fZm9yT2YpIHtcbiAgICAgIHRocm93IEVycm9yKCdDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgaXMgYWxyZWFkeSBhdHRhY2hlZC4nKTtcbiAgICB9XG5cbiAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIGRhdGEgc3RyZWFtIG9mIHRoZSBDZGtWaXJ0dWFsRm9yT2YgdG8ga2VlcCB0cmFjayBvZiB3aGVuIHRoZSBkYXRhIGxlbmd0aFxuICAgIC8vIGNoYW5nZXMuIFJ1biBvdXRzaWRlIHRoZSB6b25lIHRvIGF2b2lkIHRyaWdnZXJpbmcgY2hhbmdlIGRldGVjdGlvbiwgc2luY2Ugd2UncmUgbWFuYWdpbmcgdGhlXG4gICAgLy8gY2hhbmdlIGRldGVjdGlvbiBsb29wIG91cnNlbHZlcy5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9mb3JPZiA9IGZvck9mO1xuICAgICAgdGhpcy5fZm9yT2YuZGF0YVN0cmVhbS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXRhY2hlZFN1YmplY3QpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0xlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBpZiAobmV3TGVuZ3RoICE9PSB0aGlzLl9kYXRhTGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IG5ld0xlbmd0aDtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5vbkRhdGFMZW5ndGhDaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZG9DaGFuZ2VEZXRlY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIERldGFjaGVzIHRoZSBjdXJyZW50IGBDZGtWaXJ0dWFsRm9yT2ZgLiAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5fZm9yT2YgPSBudWxsO1xuICAgIHRoaXMuX2RldGFjaGVkU3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhIGJvdW5kIHRvIHRoaXMgdmlld3BvcnQgKGluIG51bWJlciBvZiBpdGVtcykuICovXG4gIGdldERhdGFMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YUxlbmd0aDtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS4gKi9cbiAgZ2V0Vmlld3BvcnRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdwb3J0U2l6ZTtcbiAgfVxuXG4gIC8vIFRPRE8obW1hbGVyYmEpOiBUaGlzIGlzIHRlY2huaWNhbGx5IG91dCBvZiBzeW5jIHdpdGggd2hhdCdzIHJlYWxseSByZW5kZXJlZCB1bnRpbCBhIHJlbmRlclxuICAvLyBjeWNsZSBoYXBwZW5zLiBJJ20gYmVpbmcgY2FyZWZ1bCB0byBvbmx5IGNhbGwgaXQgYWZ0ZXIgdGhlIHJlbmRlciBjeWNsZSBpcyBjb21wbGV0ZSBhbmQgYmVmb3JlXG4gIC8vIHNldHRpbmcgaXQgdG8gc29tZXRoaW5nIGVsc2UsIGJ1dCBpdHMgZXJyb3IgcHJvbmUgYW5kIHNob3VsZCBwcm9iYWJseSBiZSBzcGxpdCBpbnRvXG4gIC8vIGBwZW5kaW5nUmFuZ2VgIGFuZCBgcmVuZGVyZWRSYW5nZWAsIHRoZSBsYXR0ZXIgcmVmbGVjdGluZyB3aGF0cyBhY3R1YWxseSBpbiB0aGUgRE9NLlxuXG4gIC8qKiBHZXQgdGhlIGN1cnJlbnQgcmVuZGVyZWQgcmFuZ2Ugb2YgaXRlbXMuICovXG4gIGdldFJlbmRlcmVkUmFuZ2UoKTogTGlzdFJhbmdlIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyZWRSYW5nZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0b3RhbCBzaXplIG9mIGFsbCBjb250ZW50IChpbiBwaXhlbHMpLCBpbmNsdWRpbmcgY29udGVudCB0aGF0IGlzIG5vdCBjdXJyZW50bHlcbiAgICogcmVuZGVyZWQuXG4gICAqL1xuICBzZXRUb3RhbENvbnRlbnRTaXplKHNpemU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl90b3RhbENvbnRlbnRTaXplICE9PSBzaXplKSB7XG4gICAgICB0aGlzLl90b3RhbENvbnRlbnRTaXplID0gc2l6ZTtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVNwYWNlclNpemUoKTtcbiAgICAgIHRoaXMuX21hcmtDaGFuZ2VEZXRlY3Rpb25OZWVkZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudGx5IHJlbmRlcmVkIHJhbmdlIG9mIGluZGljZXMuICovXG4gIHNldFJlbmRlcmVkUmFuZ2UocmFuZ2U6IExpc3RSYW5nZSkge1xuICAgIGlmICghcmFuZ2VzRXF1YWwodGhpcy5fcmVuZGVyZWRSYW5nZSwgcmFuZ2UpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlZFJhbmdlU3ViamVjdC5uZXh0KHRoaXMuX3JlbmRlcmVkUmFuZ2UgPSByYW5nZSk7XG4gICAgICB0aGlzLl9tYXJrQ2hhbmdlRGV0ZWN0aW9uTmVlZGVkKCgpID0+IHRoaXMuX3Njcm9sbFN0cmF0ZWd5Lm9uQ29udGVudFJlbmRlcmVkKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBvZmZzZXQgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHZpZXdwb3J0IHRvIHRoZSBzdGFydCBvZiB0aGUgcmVuZGVyZWQgZGF0YSAoaW4gcGl4ZWxzKS5cbiAgICovXG4gIGdldE9mZnNldFRvUmVuZGVyZWRDb250ZW50U3RhcnQoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVkQ29udGVudE9mZnNldE5lZWRzUmV3cml0ZSA/IG51bGwgOiB0aGlzLl9yZW5kZXJlZENvbnRlbnRPZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgb2Zmc2V0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSB2aWV3cG9ydCB0byBlaXRoZXIgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgcmVuZGVyZWQgZGF0YVxuICAgKiAoaW4gcGl4ZWxzKS5cbiAgICovXG4gIHNldFJlbmRlcmVkQ29udGVudE9mZnNldChvZmZzZXQ6IG51bWJlciwgdG86ICd0by1zdGFydCcgfCAndG8tZW5kJyA9ICd0by1zdGFydCcpIHtcbiAgICAvLyBGb3IgYSBob3Jpem9udGFsIHZpZXdwb3J0IGluIGEgcmlnaHQtdG8tbGVmdCBsYW5ndWFnZSB3ZSBuZWVkIHRvIHRyYW5zbGF0ZSBhbG9uZyB0aGUgeC1heGlzXG4gICAgLy8gaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbi5cbiAgICBjb25zdCBpc1J0bCA9IHRoaXMuZGlyICYmIHRoaXMuZGlyLnZhbHVlID09ICdydGwnO1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMub3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IGF4aXMgPSBpc0hvcml6b250YWwgPyAnWCcgOiAnWSc7XG4gICAgY29uc3QgYXhpc0RpcmVjdGlvbiA9IGlzSG9yaXpvbnRhbCAmJiBpc1J0bCA/IC0xIDogMTtcbiAgICBsZXQgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSR7YXhpc30oJHtOdW1iZXIoYXhpc0RpcmVjdGlvbiAqIG9mZnNldCl9cHgpYDtcbiAgICB0aGlzLl9yZW5kZXJlZENvbnRlbnRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgaWYgKHRvID09PSAndG8tZW5kJykge1xuICAgICAgdHJhbnNmb3JtICs9IGAgdHJhbnNsYXRlJHtheGlzfSgtMTAwJSlgO1xuICAgICAgLy8gVGhlIHZpZXdwb3J0IHNob3VsZCByZXdyaXRlIHRoaXMgYXMgYSBgdG8tc3RhcnRgIG9mZnNldCBvbiB0aGUgbmV4dCByZW5kZXIgY3ljbGUuIE90aGVyd2lzZVxuICAgICAgLy8gZWxlbWVudHMgd2lsbCBhcHBlYXIgdG8gZXhwYW5kIGluIHRoZSB3cm9uZyBkaXJlY3Rpb24gKGUuZy4gYG1hdC1leHBhbnNpb24tcGFuZWxgIHdvdWxkXG4gICAgICAvLyBleHBhbmQgdXB3YXJkKS5cbiAgICAgIHRoaXMuX3JlbmRlcmVkQ29udGVudE9mZnNldE5lZWRzUmV3cml0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZW5kZXJlZENvbnRlbnRUcmFuc2Zvcm0gIT0gdHJhbnNmb3JtKSB7XG4gICAgICAvLyBXZSBrbm93IHRoaXMgdmFsdWUgaXMgc2FmZSBiZWNhdXNlIHdlIHBhcnNlIGBvZmZzZXRgIHdpdGggYE51bWJlcigpYCBiZWZvcmUgcGFzc2luZyBpdFxuICAgICAgLy8gaW50byB0aGUgc3RyaW5nLlxuICAgICAgdGhpcy5fcmVuZGVyZWRDb250ZW50VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgdGhpcy5fbWFya0NoYW5nZURldGVjdGlvbk5lZWRlZCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJlZENvbnRlbnRPZmZzZXROZWVkc1Jld3JpdGUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlZENvbnRlbnRPZmZzZXQgLT0gdGhpcy5tZWFzdXJlUmVuZGVyZWRDb250ZW50U2l6ZSgpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVkQ29udGVudE9mZnNldE5lZWRzUmV3cml0ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2V0UmVuZGVyZWRDb250ZW50T2Zmc2V0KHRoaXMuX3JlbmRlcmVkQ29udGVudE9mZnNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kub25SZW5kZXJlZE9mZnNldENoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdG8gdGhlIGdpdmVuIG9mZnNldCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgdmlld3BvcnQuIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBpcyBub3QgYWx3YXlzXG4gICAqIHRoZSBzYW1lIGFzIHNldHRpbmcgYHNjcm9sbFRvcGAgb3IgYHNjcm9sbExlZnRgLiBJbiBhIGhvcml6b250YWwgdmlld3BvcnQgd2l0aCByaWdodC10by1sZWZ0XG4gICAqIGRpcmVjdGlvbiwgdGhpcyB3b3VsZCBiZSB0aGUgZXF1aXZhbGVudCBvZiBzZXR0aW5nIGEgZmljdGlvbmFsIGBzY3JvbGxSaWdodGAgcHJvcGVydHkuXG4gICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB0byBzY3JvbGwgdG8uXG4gICAqIEBwYXJhbSBiZWhhdmlvciBUaGUgU2Nyb2xsQmVoYXZpb3IgdG8gdXNlIHdoZW4gc2Nyb2xsaW5nLiBEZWZhdWx0IGlzIGJlaGF2aW9yIGlzIGBhdXRvYC5cbiAgICovXG4gIHNjcm9sbFRvT2Zmc2V0KG9mZnNldDogbnVtYmVyLCBiZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IgPSAnYXV0bycpIHtcbiAgICBjb25zdCBvcHRpb25zOiBFeHRlbmRlZFNjcm9sbFRvT3B0aW9ucyA9IHtiZWhhdmlvcn07XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgb3B0aW9ucy5zdGFydCA9IG9mZnNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy50b3AgPSBvZmZzZXQ7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0byB0aGUgb2Zmc2V0IGZvciB0aGUgZ2l2ZW4gaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxuICAgKiBAcGFyYW0gYmVoYXZpb3IgVGhlIFNjcm9sbEJlaGF2aW9yIHRvIHVzZSB3aGVuIHNjcm9sbGluZy4gRGVmYXVsdCBpcyBiZWhhdmlvciBpcyBgYXV0b2AuXG4gICAqL1xuICBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsICBiZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IgPSAnYXV0bycpIHtcbiAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5zY3JvbGxUb0luZGV4KGluZGV4LCBiZWhhdmlvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS5cbiAgICogQHBhcmFtIGZyb20gVGhlIGVkZ2UgdG8gbWVhc3VyZSB0aGUgb2Zmc2V0IGZyb20uIERlZmF1bHRzIHRvICd0b3AnIGluIHZlcnRpY2FsIG1vZGUgYW5kICdzdGFydCdcbiAgICogICAgIGluIGhvcml6b250YWwgbW9kZS5cbiAgICovXG4gIG1lYXN1cmVTY3JvbGxPZmZzZXQoZnJvbT86ICd0b3AnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ3N0YXJ0JyB8ICdlbmQnKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZnJvbSA/XG4gICAgICBzdXBlci5tZWFzdXJlU2Nyb2xsT2Zmc2V0KGZyb20pIDpcbiAgICAgIHN1cGVyLm1lYXN1cmVTY3JvbGxPZmZzZXQodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3N0YXJ0JyA6ICd0b3AnKTtcbiAgfVxuXG4gIC8qKiBNZWFzdXJlIHRoZSBjb21iaW5lZCBzaXplIG9mIGFsbCBvZiB0aGUgcmVuZGVyZWQgaXRlbXMuICovXG4gIG1lYXN1cmVSZW5kZXJlZENvbnRlbnRTaXplKCk6IG51bWJlciB7XG4gICAgY29uc3QgY29udGVudEVsID0gdGhpcy5fY29udGVudFdyYXBwZXIubmF0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gY29udGVudEVsLm9mZnNldFdpZHRoIDogY29udGVudEVsLm9mZnNldEhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZWFzdXJlIHRoZSB0b3RhbCBjb21iaW5lZCBzaXplIG9mIHRoZSBnaXZlbiByYW5nZS4gVGhyb3dzIGlmIHRoZSByYW5nZSBpbmNsdWRlcyBpdGVtcyB0aGF0IGFyZVxuICAgKiBub3QgcmVuZGVyZWQuXG4gICAqL1xuICBtZWFzdXJlUmFuZ2VTaXplKHJhbmdlOiBMaXN0UmFuZ2UpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5fZm9yT2YpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZm9yT2YubWVhc3VyZVJhbmdlU2l6ZShyYW5nZSwgdGhpcy5vcmllbnRhdGlvbik7XG4gIH1cblxuICAvKiogVXBkYXRlIHRoZSB2aWV3cG9ydCBkaW1lbnNpb25zIGFuZCByZS1yZW5kZXIuICovXG4gIGNoZWNrVmlld3BvcnRTaXplKCkge1xuICAgIC8vIFRPRE86IENsZWFudXAgbGF0ZXIgd2hlbiBhZGQgbG9naWMgZm9yIGhhbmRsaW5nIGNvbnRlbnQgcmVzaXplXG4gICAgdGhpcy5fbWVhc3VyZVZpZXdwb3J0U2l6ZSgpO1xuICAgIHRoaXMuX3Njcm9sbFN0cmF0ZWd5Lm9uRGF0YUxlbmd0aENoYW5nZWQoKTtcbiAgfVxuXG4gIC8qKiBNZWFzdXJlIHRoZSB2aWV3cG9ydCBzaXplLiAqL1xuICBwcml2YXRlIF9tZWFzdXJlVmlld3BvcnRTaXplKCkge1xuICAgIGNvbnN0IHZpZXdwb3J0RWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl92aWV3cG9ydFNpemUgPSB0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgP1xuICAgICAgICB2aWV3cG9ydEVsLmNsaWVudFdpZHRoIDogdmlld3BvcnRFbC5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICAvKiogUXVldWUgdXAgY2hhbmdlIGRldGVjdGlvbiB0byBydW4uICovXG4gIHByaXZhdGUgX21hcmtDaGFuZ2VEZXRlY3Rpb25OZWVkZWQocnVuQWZ0ZXI/OiBGdW5jdGlvbikge1xuICAgIGlmIChydW5BZnRlcikge1xuICAgICAgdGhpcy5fcnVuQWZ0ZXJDaGFuZ2VEZXRlY3Rpb24ucHVzaChydW5BZnRlcik7XG4gICAgfVxuXG4gICAgLy8gVXNlIGEgUHJvbWlzZSB0byBiYXRjaCB0b2dldGhlciBjYWxscyB0byBgX2RvQ2hhbmdlRGV0ZWN0aW9uYC4gVGhpcyB3YXkgaWYgd2Ugc2V0IGEgYnVuY2ggb2ZcbiAgICAvLyBwcm9wZXJ0aWVzIHNlcXVlbnRpYWxseSB3ZSBvbmx5IGhhdmUgdG8gcnVuIGBfZG9DaGFuZ2VEZXRlY3Rpb25gIG9uY2UgYXQgdGhlIGVuZC5cbiAgICBpZiAoIXRoaXMuX2lzQ2hhbmdlRGV0ZWN0aW9uUGVuZGluZykge1xuICAgICAgdGhpcy5faXNDaGFuZ2VEZXRlY3Rpb25QZW5kaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9kb0NoYW5nZURldGVjdGlvbigpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSdW4gY2hhbmdlIGRldGVjdGlvbi4gKi9cbiAgcHJpdmF0ZSBfZG9DaGFuZ2VEZXRlY3Rpb24oKSB7XG4gICAgdGhpcy5faXNDaGFuZ2VEZXRlY3Rpb25QZW5kaW5nID0gZmFsc2U7XG5cbiAgICAvLyBBcHBseSB0aGUgY29udGVudCB0cmFuc2Zvcm0uIFRoZSB0cmFuc2Zvcm0gY2FuJ3QgYmUgc2V0IHZpYSBhbiBBbmd1bGFyIGJpbmRpbmcgYmVjYXVzZVxuICAgIC8vIGJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSBpcyBiYW5uZWQgaW4gR29vZ2xlLiBIb3dldmVyIHRoZSB2YWx1ZSBpcyBzYWZlLCBpdCdzIGNvbXBvc2VkIG9mXG4gICAgLy8gc3RyaW5nIGxpdGVyYWxzLCBhIHZhcmlhYmxlIHRoYXQgY2FuIG9ubHkgYmUgJ1gnIG9yICdZJywgYW5kIHVzZXIgaW5wdXQgdGhhdCBpcyBydW4gdGhyb3VnaFxuICAgIC8vIHRoZSBgTnVtYmVyYCBmdW5jdGlvbiBmaXJzdCB0byBjb2VyY2UgaXQgdG8gYSBudW1lcmljIHZhbHVlLlxuICAgIHRoaXMuX2NvbnRlbnRXcmFwcGVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5fcmVuZGVyZWRDb250ZW50VHJhbnNmb3JtO1xuICAgIC8vIEFwcGx5IGNoYW5nZXMgdG8gQW5ndWxhciBiaW5kaW5ncy4gTm90ZTogV2UgbXVzdCBjYWxsIGBtYXJrRm9yQ2hlY2tgIHRvIHJ1biBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgLy8gZnJvbSB0aGUgcm9vdCwgc2luY2UgdGhlIHJlcGVhdGVkIGl0ZW1zIGFyZSBjb250ZW50IHByb2plY3RlZCBpbi4gQ2FsbGluZyBgZGV0ZWN0Q2hhbmdlc2BcbiAgICAvLyBpbnN0ZWFkIGRvZXMgbm90IHByb3Blcmx5IGNoZWNrIHRoZSBwcm9qZWN0ZWQgY29udGVudC5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xuXG4gICAgY29uc3QgcnVuQWZ0ZXJDaGFuZ2VEZXRlY3Rpb24gPSB0aGlzLl9ydW5BZnRlckNoYW5nZURldGVjdGlvbjtcbiAgICB0aGlzLl9ydW5BZnRlckNoYW5nZURldGVjdGlvbiA9IFtdO1xuICAgIGZvciAoY29uc3QgZm4gb2YgcnVuQWZ0ZXJDaGFuZ2VEZXRlY3Rpb24pIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENhbGN1bGF0ZXMgdGhlIGBzdHlsZS53aWR0aGAgYW5kIGBzdHlsZS5oZWlnaHRgIGZvciB0aGUgc3BhY2VyIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVNwYWNlclNpemUoKSB7XG4gICAgdGhpcy5fdG90YWxDb250ZW50SGVpZ2h0ID1cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJycgOiBgJHt0aGlzLl90b3RhbENvbnRlbnRTaXplfXB4YDtcbiAgICB0aGlzLl90b3RhbENvbnRlbnRXaWR0aCA9XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGAke3RoaXMuX3RvdGFsQ29udGVudFNpemV9cHhgIDogJyc7XG4gIH1cbn1cbiJdfQ==