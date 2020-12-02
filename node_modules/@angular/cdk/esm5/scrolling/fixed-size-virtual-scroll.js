/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Directive, forwardRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { VIRTUAL_SCROLL_STRATEGY } from './virtual-scroll-strategy';
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
export { FixedSizeVirtualScrollStrategy };
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */
export function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
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
export { CdkFixedSizeVirtualScroll };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4ZWQtc2l6ZS12aXJ0dWFsLXNjcm9sbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2Nyb2xsaW5nL2ZpeGVkLXNpemUtdmlydHVhbC1zY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLG9CQUFvQixFQUFjLE1BQU0sdUJBQXVCLENBQUM7QUFDeEUsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFDLHVCQUF1QixFQUF3QixNQUFNLDJCQUEyQixDQUFDO0FBSXpGLDJFQUEyRTtBQUMzRTtJQWtCRTs7OztPQUlHO0lBQ0gsd0NBQVksUUFBZ0IsRUFBRSxXQUFtQixFQUFFLFdBQW1CO1FBdEI5RCx5QkFBb0IsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRXJELGtFQUFrRTtRQUNsRSx3QkFBbUIsR0FBdUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFFakcsNkJBQTZCO1FBQ3JCLGNBQVMsR0FBb0MsSUFBSSxDQUFDO1FBaUJ4RCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0NBQU0sR0FBTixVQUFPLFFBQWtDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FB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Q0FBQzthQUN2RCxVQUFnQixLQUFhLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUQ1QjtJQVF2RCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLHVCQUF1Qjs0QkFDaEMsVUFBVSxFQUFFLHNDQUFzQzs0QkFDbEQsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO3lCQUNwRCxDQUFDO2lCQUNIOzs7MkJBR0UsS0FBSzs4QkFTTCxLQUFLOzhCQVFMLEtBQUs7O0lBZ0JSLGdDQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0FuQ1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29lcmNlTnVtYmVyUHJvcGVydHksIE51bWJlcklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWR9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VklSVFVBTF9TQ1JPTExfU1RSQVRFR1ksIFZpcnR1YWxTY3JvbGxTdHJhdGVneX0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC1zdHJhdGVneSc7XG5pbXBvcnQge0Nka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCc7XG5cblxuLyoqIFZpcnR1YWwgc2Nyb2xsaW5nIHN0cmF0ZWd5IGZvciBsaXN0cyB3aXRoIGl0ZW1zIG9mIGtub3duIGZpeGVkIHNpemUuICovXG5leHBvcnQgY2xhc3MgRml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5IGltcGxlbWVudHMgVmlydHVhbFNjcm9sbFN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSBfc2Nyb2xsZWRJbmRleENoYW5nZSA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIFZpcnR1YWxTY3JvbGxTdHJhdGVneS4gKi9cbiAgc2Nyb2xsZWRJbmRleENoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fc2Nyb2xsZWRJbmRleENoYW5nZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gIC8qKiBUaGUgYXR0YWNoZWQgdmlld3BvcnQuICovXG4gIHByaXZhdGUgX3ZpZXdwb3J0OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIHNpemUgb2YgdGhlIGl0ZW1zIGluIHRoZSB2aXJ0dWFsbHkgc2Nyb2xsaW5nIGxpc3QuICovXG4gIHByaXZhdGUgX2l0ZW1TaXplOiBudW1iZXI7XG5cbiAgLyoqIFRoZSBtaW5pbXVtIGFtb3VudCBvZiBidWZmZXIgcmVuZGVyZWQgYmV5b25kIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS4gKi9cbiAgcHJpdmF0ZSBfbWluQnVmZmVyUHg6IG51bWJlcjtcblxuICAvKiogVGhlIG51bWJlciBvZiBidWZmZXIgaXRlbXMgdG8gcmVuZGVyIGJleW9uZCB0aGUgZWRnZSBvZiB0aGUgdmlld3BvcnQgKGluIHBpeGVscykuICovXG4gIHByaXZhdGUgX21heEJ1ZmZlclB4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBpdGVtU2l6ZSBUaGUgc2l6ZSBvZiB0aGUgaXRlbXMgaW4gdGhlIHZpcnR1YWxseSBzY3JvbGxpbmcgbGlzdC5cbiAgICogQHBhcmFtIG1pbkJ1ZmZlclB4IFRoZSBtaW5pbXVtIGFtb3VudCBvZiBidWZmZXIgKGluIHBpeGVscykgYmVmb3JlIG5lZWRpbmcgdG8gcmVuZGVyIG1vcmVcbiAgICogQHBhcmFtIG1heEJ1ZmZlclB4IFRoZSBhbW91bnQgb2YgYnVmZmVyIChpbiBwaXhlbHMpIHRvIHJlbmRlciB3aGVuIHJlbmRlcmluZyBtb3JlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoaXRlbVNpemU6IG51bWJlciwgbWluQnVmZmVyUHg6IG51bWJlciwgbWF4QnVmZmVyUHg6IG51bWJlcikge1xuICAgIHRoaXMuX2l0ZW1TaXplID0gaXRlbVNpemU7XG4gICAgdGhpcy5fbWluQnVmZmVyUHggPSBtaW5CdWZmZXJQeDtcbiAgICB0aGlzLl9tYXhCdWZmZXJQeCA9IG1heEJ1ZmZlclB4O1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHRoaXMgc2Nyb2xsIHN0cmF0ZWd5IHRvIGEgdmlld3BvcnQuXG4gICAqIEBwYXJhbSB2aWV3cG9ydCBUaGUgdmlld3BvcnQgdG8gYXR0YWNoIHRoaXMgc3RyYXRlZ3kgdG8uXG4gICAqL1xuICBhdHRhY2godmlld3BvcnQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCkge1xuICAgIHRoaXMuX3ZpZXdwb3J0ID0gdmlld3BvcnQ7XG4gICAgdGhpcy5fdXBkYXRlVG90YWxDb250ZW50U2l6ZSgpO1xuICAgIHRoaXMuX3VwZGF0ZVJlbmRlcmVkUmFuZ2UoKTtcbiAgfVxuXG4gIC8qKiBEZXRhY2hlcyB0aGlzIHNjcm9sbCBzdHJhdGVneSBmcm9tIHRoZSBjdXJyZW50bHkgYXR0YWNoZWQgdmlld3BvcnQuICovXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLl9zY3JvbGxlZEluZGV4Q2hhbmdlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fdmlld3BvcnQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgaXRlbSBzaXplIGFuZCBidWZmZXIgc2l6ZS5cbiAgICogQHBhcmFtIGl0ZW1TaXplIFRoZSBzaXplIG9mIHRoZSBpdGVtcyBpbiB0aGUgdmlydHVhbGx5IHNjcm9sbGluZyBsaXN0LlxuICAgKiBAcGFyYW0gbWluQnVmZmVyUHggVGhlIG1pbmltdW0gYW1vdW50IG9mIGJ1ZmZlciAoaW4gcGl4ZWxzKSBiZWZvcmUgbmVlZGluZyB0byByZW5kZXIgbW9yZVxuICAgKiBAcGFyYW0gbWF4QnVmZmVyUHggVGhlIGFtb3VudCBvZiBidWZmZXIgKGluIHBpeGVscykgdG8gcmVuZGVyIHdoZW4gcmVuZGVyaW5nIG1vcmUuXG4gICAqL1xuICB1cGRhdGVJdGVtQW5kQnVmZmVyU2l6ZShpdGVtU2l6ZTogbnVtYmVyLCBtaW5CdWZmZXJQeDogbnVtYmVyLCBtYXhCdWZmZXJQeDogbnVtYmVyKSB7XG4gICAgaWYgKG1heEJ1ZmZlclB4IDwgbWluQnVmZmVyUHgpIHtcbiAgICAgIHRocm93IEVycm9yKCdDREsgdmlydHVhbCBzY3JvbGw6IG1heEJ1ZmZlclB4IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIG1pbkJ1ZmZlclB4Jyk7XG4gICAgfVxuICAgIHRoaXMuX2l0ZW1TaXplID0gaXRlbVNpemU7XG4gICAgdGhpcy5fbWluQnVmZmVyUHggPSBtaW5CdWZmZXJQeDtcbiAgICB0aGlzLl9tYXhCdWZmZXJQeCA9IG1heEJ1ZmZlclB4O1xuICAgIHRoaXMuX3VwZGF0ZVRvdGFsQ29udGVudFNpemUoKTtcbiAgICB0aGlzLl91cGRhdGVSZW5kZXJlZFJhbmdlKCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIFZpcnR1YWxTY3JvbGxTdHJhdGVneS4gKi9cbiAgb25Db250ZW50U2Nyb2xsZWQoKSB7XG4gICAgdGhpcy5fdXBkYXRlUmVuZGVyZWRSYW5nZSgpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3kuICovXG4gIG9uRGF0YUxlbmd0aENoYW5nZWQoKSB7XG4gICAgdGhpcy5fdXBkYXRlVG90YWxDb250ZW50U2l6ZSgpO1xuICAgIHRoaXMuX3VwZGF0ZVJlbmRlcmVkUmFuZ2UoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgVmlydHVhbFNjcm9sbFN0cmF0ZWd5LiAqL1xuICBvbkNvbnRlbnRSZW5kZXJlZCgpIHsgLyogbm8tb3AgKi8gfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgVmlydHVhbFNjcm9sbFN0cmF0ZWd5LiAqL1xuICBvblJlbmRlcmVkT2Zmc2V0Q2hhbmdlZCgpIHsgLyogbm8tb3AgKi8gfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gdGhlIG9mZnNldCBmb3IgdGhlIGdpdmVuIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBlbGVtZW50IHRvIHNjcm9sbCB0by5cbiAgICogQHBhcmFtIGJlaGF2aW9yIFRoZSBTY3JvbGxCZWhhdmlvciB0byB1c2Ugd2hlbiBzY3JvbGxpbmcuXG4gICAqL1xuICBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIGJlaGF2aW9yOiBTY3JvbGxCZWhhdmlvcik6IHZvaWQge1xuICAgIGlmICh0aGlzLl92aWV3cG9ydCkge1xuICAgICAgdGhpcy5fdmlld3BvcnQuc2Nyb2xsVG9PZmZzZXQoaW5kZXggKiB0aGlzLl9pdGVtU2l6ZSwgYmVoYXZpb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBVcGRhdGUgdGhlIHZpZXdwb3J0J3MgdG90YWwgY29udGVudCBzaXplLiAqL1xuICBwcml2YXRlIF91cGRhdGVUb3RhbENvbnRlbnRTaXplKCkge1xuICAgIGlmICghdGhpcy5fdmlld3BvcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl92aWV3cG9ydC5zZXRUb3RhbENvbnRlbnRTaXplKHRoaXMuX3ZpZXdwb3J0LmdldERhdGFMZW5ndGgoKSAqIHRoaXMuX2l0ZW1TaXplKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGUgdGhlIHZpZXdwb3J0J3MgcmVuZGVyZWQgcmFuZ2UuICovXG4gIHByaXZhdGUgX3VwZGF0ZVJlbmRlcmVkUmFuZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl92aWV3cG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9IHRoaXMuX3ZpZXdwb3J0Lm1lYXN1cmVTY3JvbGxPZmZzZXQoKTtcbiAgICBjb25zdCBmaXJzdFZpc2libGVJbmRleCA9IHNjcm9sbE9mZnNldCAvIHRoaXMuX2l0ZW1TaXplO1xuICAgIGNvbnN0IHJlbmRlcmVkUmFuZ2UgPSB0aGlzLl92aWV3cG9ydC5nZXRSZW5kZXJlZFJhbmdlKCk7XG4gICAgY29uc3QgbmV3UmFuZ2UgPSB7c3RhcnQ6IHJlbmRlcmVkUmFuZ2Uuc3RhcnQsIGVuZDogcmVuZGVyZWRSYW5nZS5lbmR9O1xuICAgIGNvbnN0IHZpZXdwb3J0U2l6ZSA9IHRoaXMuX3ZpZXdwb3J0LmdldFZpZXdwb3J0U2l6ZSgpO1xuICAgIGNvbnN0IGRhdGFMZW5ndGggPSB0aGlzLl92aWV3cG9ydC5nZXREYXRhTGVuZ3RoKCk7XG5cbiAgICBjb25zdCBzdGFydEJ1ZmZlciA9IHNjcm9sbE9mZnNldCAtIG5ld1JhbmdlLnN0YXJ0ICogdGhpcy5faXRlbVNpemU7XG4gICAgaWYgKHN0YXJ0QnVmZmVyIDwgdGhpcy5fbWluQnVmZmVyUHggJiYgbmV3UmFuZ2Uuc3RhcnQgIT0gMCkge1xuICAgICAgY29uc3QgZXhwYW5kU3RhcnQgPSBNYXRoLmNlaWwoKHRoaXMuX21heEJ1ZmZlclB4IC0gc3RhcnRCdWZmZXIpIC8gdGhpcy5faXRlbVNpemUpO1xuICAgICAgbmV3UmFuZ2Uuc3RhcnQgPSBNYXRoLm1heCgwLCBuZXdSYW5nZS5zdGFydCAtIGV4cGFuZFN0YXJ0KTtcbiAgICAgIG5ld1JhbmdlLmVuZCA9IE1hdGgubWluKGRhdGFMZW5ndGgsXG4gICAgICAgICAgTWF0aC5jZWlsKGZpcnN0VmlzaWJsZUluZGV4ICsgKHZpZXdwb3J0U2l6ZSArIHRoaXMuX21pbkJ1ZmZlclB4KSAvIHRoaXMuX2l0ZW1TaXplKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuZEJ1ZmZlciA9IG5ld1JhbmdlLmVuZCAqIHRoaXMuX2l0ZW1TaXplIC0gKHNjcm9sbE9mZnNldCArIHZpZXdwb3J0U2l6ZSk7XG4gICAgICBpZiAoZW5kQnVmZmVyIDwgdGhpcy5fbWluQnVmZmVyUHggJiYgbmV3UmFuZ2UuZW5kICE9IGRhdGFMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZXhwYW5kRW5kID0gTWF0aC5jZWlsKCh0aGlzLl9tYXhCdWZmZXJQeCAtIGVuZEJ1ZmZlcikgLyB0aGlzLl9pdGVtU2l6ZSk7XG4gICAgICAgIGlmIChleHBhbmRFbmQgPiAwKSB7XG4gICAgICAgICAgbmV3UmFuZ2UuZW5kID0gTWF0aC5taW4oZGF0YUxlbmd0aCwgbmV3UmFuZ2UuZW5kICsgZXhwYW5kRW5kKTtcbiAgICAgICAgICBuZXdSYW5nZS5zdGFydCA9IE1hdGgubWF4KDAsXG4gICAgICAgICAgICAgIE1hdGguZmxvb3IoZmlyc3RWaXNpYmxlSW5kZXggLSB0aGlzLl9taW5CdWZmZXJQeCAvIHRoaXMuX2l0ZW1TaXplKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl92aWV3cG9ydC5zZXRSZW5kZXJlZFJhbmdlKG5ld1JhbmdlKTtcbiAgICB0aGlzLl92aWV3cG9ydC5zZXRSZW5kZXJlZENvbnRlbnRPZmZzZXQodGhpcy5faXRlbVNpemUgKiBuZXdSYW5nZS5zdGFydCk7XG4gICAgdGhpcy5fc2Nyb2xsZWRJbmRleENoYW5nZS5uZXh0KE1hdGguZmxvb3IoZmlyc3RWaXNpYmxlSW5kZXgpKTtcbiAgfVxufVxuXG5cbi8qKlxuICogUHJvdmlkZXIgZmFjdG9yeSBmb3IgYEZpeGVkU2l6ZVZpcnR1YWxTY3JvbGxTdHJhdGVneWAgdGhhdCBzaW1wbHkgZXh0cmFjdHMgdGhlIGFscmVhZHkgY3JlYXRlZFxuICogYEZpeGVkU2l6ZVZpcnR1YWxTY3JvbGxTdHJhdGVneWAgZnJvbSB0aGUgZ2l2ZW4gZGlyZWN0aXZlLlxuICogQHBhcmFtIGZpeGVkU2l6ZURpciBUaGUgaW5zdGFuY2Ugb2YgYENka0ZpeGVkU2l6ZVZpcnR1YWxTY3JvbGxgIHRvIGV4dHJhY3QgdGhlXG4gKiAgICAgYEZpeGVkU2l6ZVZpcnR1YWxTY3JvbGxTdHJhdGVneWAgZnJvbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9maXhlZFNpemVWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3lGYWN0b3J5KGZpeGVkU2l6ZURpcjogQ2RrRml4ZWRTaXplVmlydHVhbFNjcm9sbCkge1xuICByZXR1cm4gZml4ZWRTaXplRGlyLl9zY3JvbGxTdHJhdGVneTtcbn1cblxuXG4vKiogQSB2aXJ0dWFsIHNjcm9sbCBzdHJhdGVneSB0aGF0IHN1cHBvcnRzIGZpeGVkLXNpemUgaXRlbXMuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnRbaXRlbVNpemVdJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFZJUlRVQUxfU0NST0xMX1NUUkFURUdZLFxuICAgIHVzZUZhY3Rvcnk6IF9maXhlZFNpemVWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3lGYWN0b3J5LFxuICAgIGRlcHM6IFtmb3J3YXJkUmVmKCgpID0+IENka0ZpeGVkU2l6ZVZpcnR1YWxTY3JvbGwpXSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0ZpeGVkU2l6ZVZpcnR1YWxTY3JvbGwgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKiogVGhlIHNpemUgb2YgdGhlIGl0ZW1zIGluIHRoZSBsaXN0IChpbiBwaXhlbHMpLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaXRlbVNpemUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2l0ZW1TaXplOyB9XG4gIHNldCBpdGVtU2l6ZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX2l0ZW1TaXplID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpOyB9XG4gIF9pdGVtU2l6ZSA9IDIwO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBhbW91bnQgb2YgYnVmZmVyIHJlbmRlcmVkIGJleW9uZCB0aGUgdmlld3BvcnQgKGluIHBpeGVscykuXG4gICAqIElmIHRoZSBhbW91bnQgb2YgYnVmZmVyIGRpcHMgYmVsb3cgdGhpcyBudW1iZXIsIG1vcmUgaXRlbXMgd2lsbCBiZSByZW5kZXJlZC4gRGVmYXVsdHMgdG8gMTAwcHguXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbWluQnVmZmVyUHgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX21pbkJ1ZmZlclB4OyB9XG4gIHNldCBtaW5CdWZmZXJQeCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX21pbkJ1ZmZlclB4ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpOyB9XG4gIF9taW5CdWZmZXJQeCA9IDEwMDtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBwaXhlbHMgd29ydGggb2YgYnVmZmVyIHRvIHJlbmRlciBmb3Igd2hlbiByZW5kZXJpbmcgbmV3IGl0ZW1zLiBEZWZhdWx0cyB0byAyMDBweC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBtYXhCdWZmZXJQeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbWF4QnVmZmVyUHg7IH1cbiAgc2V0IG1heEJ1ZmZlclB4KHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fbWF4QnVmZmVyUHggPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgX21heEJ1ZmZlclB4ID0gMjAwO1xuXG4gIC8qKiBUaGUgc2Nyb2xsIHN0cmF0ZWd5IHVzZWQgYnkgdGhpcyBkaXJlY3RpdmUuICovXG4gIF9zY3JvbGxTdHJhdGVneSA9XG4gICAgICBuZXcgRml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5KHRoaXMuaXRlbVNpemUsIHRoaXMubWluQnVmZmVyUHgsIHRoaXMubWF4QnVmZmVyUHgpO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuX3Njcm9sbFN0cmF0ZWd5LnVwZGF0ZUl0ZW1BbmRCdWZmZXJTaXplKHRoaXMuaXRlbVNpemUsIHRoaXMubWluQnVmZmVyUHgsIHRoaXMubWF4QnVmZmVyUHgpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2l0ZW1TaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21pbkJ1ZmZlclB4OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21heEJ1ZmZlclB4OiBOdW1iZXJJbnB1dDtcbn1cbiJdfQ==