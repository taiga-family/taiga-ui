/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { getRtlScrollAxisType, supportsScrollBehavior } from '@angular/cdk/platform';
import { Directive, ElementRef, NgZone, Optional } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrollDispatcher } from './scroll-dispatcher';
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
export { CdkScrollable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2Nyb2xsaW5nL3Njcm9sbGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxvQkFBb0IsRUFFcEIsc0JBQXNCLEVBQ3ZCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFxQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQXFCckQ7Ozs7R0FJRztBQUNIO0lBV0UsdUJBQXNCLFVBQW1DLEVBQ25DLGdCQUFrQyxFQUNsQyxNQUFjLEVBQ0YsR0FBb0I7UUFIdEQsaUJBRzBEO1FBSHBDLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNGLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBVjlDLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTNCLHFCQUFnQixHQUFzQixJQUFJLFVBQVUsQ0FBQyxVQUFDLFFBQXlCO1lBQ25GLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDMUIsT0FBQSxTQUFTLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJ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Z2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgZ2V0UnRsU2Nyb2xsQXhpc1R5cGUsXG4gIFJ0bFNjcm9sbEF4aXNUeXBlLFxuICBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1Njcm9sbERpc3BhdGNoZXJ9IGZyb20gJy4vc2Nyb2xsLWRpc3BhdGNoZXInO1xuXG5leHBvcnQgdHlwZSBfV2l0aG91dDxUPiA9IHtbUCBpbiBrZXlvZiBUXT86IG5ldmVyfTtcbmV4cG9ydCB0eXBlIF9YT1I8VCwgVT4gPSAoX1dpdGhvdXQ8VD4gJiBVKSB8IChfV2l0aG91dDxVPiAmIFQpO1xuZXhwb3J0IHR5cGUgX1RvcCA9IHt0b3A/OiBudW1iZXJ9O1xuZXhwb3J0IHR5cGUgX0JvdHRvbSA9IHtib3R0b20/OiBudW1iZXJ9O1xuZXhwb3J0IHR5cGUgX0xlZnQgPSB7bGVmdD86IG51bWJlcn07XG5leHBvcnQgdHlwZSBfUmlnaHQgPSB7cmlnaHQ/OiBudW1iZXJ9O1xuZXhwb3J0IHR5cGUgX1N0YXJ0ID0ge3N0YXJ0PzogbnVtYmVyfTtcbmV4cG9ydCB0eXBlIF9FbmQgPSB7ZW5kPzogbnVtYmVyfTtcbmV4cG9ydCB0eXBlIF9YQXhpcyA9IF9YT1I8X1hPUjxfTGVmdCwgX1JpZ2h0PiwgX1hPUjxfU3RhcnQsIF9FbmQ+PjtcbmV4cG9ydCB0eXBlIF9ZQXhpcyA9IF9YT1I8X1RvcCwgX0JvdHRvbT47XG5cbi8qKlxuICogQW4gZXh0ZW5kZWQgdmVyc2lvbiBvZiBTY3JvbGxUb09wdGlvbnMgdGhhdCBhbGxvd3MgZXhwcmVzc2luZyBzY3JvbGwgb2Zmc2V0cyByZWxhdGl2ZSB0byB0aGVcbiAqIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgc3RhcnQsIG9yIGVuZCBvZiB0aGUgdmlld3BvcnQgcmF0aGVyIHRoYW4ganVzdCB0aGUgdG9wIGFuZCBsZWZ0LlxuICogUGxlYXNlIG5vdGU6IHRoZSB0b3AgYW5kIGJvdHRvbSBwcm9wZXJ0aWVzIGFyZSBtdXR1YWxseSBleGNsdXNpdmUsIGFzIGFyZSB0aGUgbGVmdCwgcmlnaHQsXG4gKiBzdGFydCwgYW5kIGVuZCBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgdHlwZSBFeHRlbmRlZFNjcm9sbFRvT3B0aW9ucyA9IF9YQXhpcyAmIF9ZQXhpcyAmIFNjcm9sbE9wdGlvbnM7XG5cbi8qKlxuICogU2VuZHMgYW4gZXZlbnQgd2hlbiB0aGUgZGlyZWN0aXZlJ3MgZWxlbWVudCBpcyBzY3JvbGxlZC4gUmVnaXN0ZXJzIGl0c2VsZiB3aXRoIHRoZVxuICogU2Nyb2xsRGlzcGF0Y2hlciBzZXJ2aWNlIHRvIGluY2x1ZGUgaXRzZWxmIGFzIHBhcnQgb2YgaXRzIGNvbGxlY3Rpb24gb2Ygc2Nyb2xsaW5nIGV2ZW50cyB0aGF0IGl0XG4gKiBjYW4gYmUgbGlzdGVuZWQgdG8gdGhyb3VnaCB0aGUgc2VydmljZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nkay1zY3JvbGxhYmxlXSwgW2Nka1Njcm9sbGFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBDZGtTY3JvbGxhYmxlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgX2VsZW1lbnRTY3JvbGxlZDogT2JzZXJ2YWJsZTxFdmVudD4gPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEV2ZW50PikgPT5cbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XG4gICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJykucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShvYnNlcnZlcikpKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBzY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBkaXI/OiBEaXJlY3Rpb25hbGl0eSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNjcm9sbERpc3BhdGNoZXIucmVnaXN0ZXIodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnNjcm9sbERpc3BhdGNoZXIuZGVyZWdpc3Rlcih0aGlzKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4gYSBzY3JvbGwgZXZlbnQgaXMgZmlyZWQgb24gdGhlIGhvc3QgZWxlbWVudC4gKi9cbiAgZWxlbWVudFNjcm9sbGVkKCk6IE9ic2VydmFibGU8RXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFNjcm9sbGVkO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIEVsZW1lbnRSZWYgZm9yIHRoZSB2aWV3cG9ydC4gKi9cbiAgZ2V0RWxlbWVudFJlZigpOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBzcGVjaWZpZWQgb2Zmc2V0cy4gVGhpcyBpcyBhIG5vcm1hbGl6ZWQgdmVyc2lvbiBvZiB0aGUgYnJvd3NlcidzIG5hdGl2ZSBzY3JvbGxUb1xuICAgKiBtZXRob2QsIHNpbmNlIGJyb3dzZXJzIGFyZSBub3QgY29uc2lzdGVudCBhYm91dCB3aGF0IHNjcm9sbExlZnQgbWVhbnMgaW4gUlRMLiBGb3IgdGhpcyBtZXRob2RcbiAgICogbGVmdCBhbmQgcmlnaHQgYWx3YXlzIHJlZmVyIHRvIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlIG9mIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyIGlycmVzcGVjdGl2ZVxuICAgKiBvZiB0aGUgbGF5b3V0IGRpcmVjdGlvbi4gc3RhcnQgYW5kIGVuZCByZWZlciB0byBsZWZ0IGFuZCByaWdodCBpbiBhbiBMVFIgY29udGV4dCBhbmQgdmljZS12ZXJzYVxuICAgKiBpbiBhbiBSVEwgY29udGV4dC5cbiAgICogQHBhcmFtIG9wdGlvbnMgc3BlY2lmaWVkIHRoZSBvZmZzZXRzIHRvIHNjcm9sbCB0by5cbiAgICovXG4gIHNjcm9sbFRvKG9wdGlvbnM6IEV4dGVuZGVkU2Nyb2xsVG9PcHRpb25zKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpc1J0bCA9IHRoaXMuZGlyICYmIHRoaXMuZGlyLnZhbHVlID09ICdydGwnO1xuXG4gICAgLy8gUmV3cml0ZSBzdGFydCAmIGVuZCBvZmZzZXRzIGFzIHJpZ2h0IG9yIGxlZnQgb2Zmc2V0cy5cbiAgICBpZiAob3B0aW9ucy5sZWZ0ID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMubGVmdCA9IGlzUnRsID8gb3B0aW9ucy5lbmQgOiBvcHRpb25zLnN0YXJ0O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnJpZ2h0ID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMucmlnaHQgPSBpc1J0bCA/IG9wdGlvbnMuc3RhcnQgOiBvcHRpb25zLmVuZDtcbiAgICB9XG5cbiAgICAvLyBSZXdyaXRlIHRoZSBib3R0b20gb2Zmc2V0IGFzIGEgdG9wIG9mZnNldC5cbiAgICBpZiAob3B0aW9ucy5ib3R0b20gIT0gbnVsbCkge1xuICAgICAgKG9wdGlvbnMgYXMgX1dpdGhvdXQ8X0JvdHRvbT4gJiBfVG9wKS50b3AgPVxuICAgICAgICAgIGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodCAtIG9wdGlvbnMuYm90dG9tO1xuICAgIH1cblxuICAgIC8vIFJld3JpdGUgdGhlIHJpZ2h0IG9mZnNldCBhcyBhIGxlZnQgb2Zmc2V0LlxuICAgIGlmIChpc1J0bCAmJiBnZXRSdGxTY3JvbGxBeGlzVHlwZSgpICE9IFJ0bFNjcm9sbEF4aXNUeXBlLk5PUk1BTCkge1xuICAgICAgaWYgKG9wdGlvbnMubGVmdCAhPSBudWxsKSB7XG4gICAgICAgIChvcHRpb25zIGFzIF9XaXRob3V0PF9MZWZ0PiAmIF9SaWdodCkucmlnaHQgPVxuICAgICAgICAgICAgZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aCAtIG9wdGlvbnMubGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKGdldFJ0bFNjcm9sbEF4aXNUeXBlKCkgPT0gUnRsU2Nyb2xsQXhpc1R5cGUuSU5WRVJURUQpIHtcbiAgICAgICAgb3B0aW9ucy5sZWZ0ID0gb3B0aW9ucy5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoZ2V0UnRsU2Nyb2xsQXhpc1R5cGUoKSA9PSBSdGxTY3JvbGxBeGlzVHlwZS5ORUdBVEVEKSB7XG4gICAgICAgIG9wdGlvbnMubGVmdCA9IG9wdGlvbnMucmlnaHQgPyAtb3B0aW9ucy5yaWdodCA6IG9wdGlvbnMucmlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLnJpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgKG9wdGlvbnMgYXMgX1dpdGhvdXQ8X1JpZ2h0PiAmIF9MZWZ0KS5sZWZ0ID1cbiAgICAgICAgICAgIGVsLnNjcm9sbFdpZHRoIC0gZWwuY2xpZW50V2lkdGggLSBvcHRpb25zLnJpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5U2Nyb2xsVG9PcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwbHlTY3JvbGxUb09wdGlvbnMob3B0aW9uczogU2Nyb2xsVG9PcHRpb25zKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGlmIChzdXBwb3J0c1Njcm9sbEJlaGF2aW9yKCkpIHtcbiAgICAgIGVsLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy50b3AgIT0gbnVsbCkge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBvcHRpb25zLnRvcDtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmxlZnQgIT0gbnVsbCkge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gb3B0aW9ucy5sZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZWFzdXJlcyB0aGUgc2Nyb2xsIG9mZnNldCByZWxhdGl2ZSB0byB0aGUgc3BlY2lmaWVkIGVkZ2Ugb2YgdGhlIHZpZXdwb3J0LiBUaGlzIG1ldGhvZCBjYW4gYmVcbiAgICogdXNlZCBpbnN0ZWFkIG9mIGRpcmVjdGx5IGNoZWNraW5nIHNjcm9sbExlZnQgb3Igc2Nyb2xsVG9wLCBzaW5jZSBicm93c2VycyBhcmUgbm90IGNvbnNpc3RlbnRcbiAgICogYWJvdXQgd2hhdCBzY3JvbGxMZWZ0IG1lYW5zIGluIFJUTC4gVGhlIHZhbHVlcyByZXR1cm5lZCBieSB0aGlzIG1ldGhvZCBhcmUgbm9ybWFsaXplZCBzdWNoIHRoYXRcbiAgICogbGVmdCBhbmQgcmlnaHQgYWx3YXlzIHJlZmVyIHRvIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlIG9mIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyIGlycmVzcGVjdGl2ZVxuICAgKiBvZiB0aGUgbGF5b3V0IGRpcmVjdGlvbi4gc3RhcnQgYW5kIGVuZCByZWZlciB0byBsZWZ0IGFuZCByaWdodCBpbiBhbiBMVFIgY29udGV4dCBhbmQgdmljZS12ZXJzYVxuICAgKiBpbiBhbiBSVEwgY29udGV4dC5cbiAgICogQHBhcmFtIGZyb20gVGhlIGVkZ2UgdG8gbWVhc3VyZSBmcm9tLlxuICAgKi9cbiAgbWVhc3VyZVNjcm9sbE9mZnNldChmcm9tOiAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdzdGFydCcgfCAnZW5kJyk6IG51bWJlciB7XG4gICAgY29uc3QgTEVGVCA9ICdsZWZ0JztcbiAgICBjb25zdCBSSUdIVCA9ICdyaWdodCc7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoZnJvbSA9PSAndG9wJykge1xuICAgICAgcmV0dXJuIGVsLnNjcm9sbFRvcDtcbiAgICB9XG4gICAgaWYgKGZyb20gPT0gJ2JvdHRvbScpIHtcbiAgICAgIHJldHVybiBlbC5zY3JvbGxIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHQgLSBlbC5zY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgLy8gUmV3cml0ZSBzdGFydCAmIGVuZCBhcyBsZWZ0IG9yIHJpZ2h0IG9mZnNldHMuXG4gICAgY29uc3QgaXNSdGwgPSB0aGlzLmRpciAmJiB0aGlzLmRpci52YWx1ZSA9PSAncnRsJztcbiAgICBpZiAoZnJvbSA9PSAnc3RhcnQnKSB7XG4gICAgICBmcm9tID0gaXNSdGwgPyBSSUdIVCA6IExFRlQ7XG4gICAgfSBlbHNlIGlmIChmcm9tID09ICdlbmQnKSB7XG4gICAgICBmcm9tID0gaXNSdGwgPyBMRUZUIDogUklHSFQ7XG4gICAgfVxuXG4gICAgaWYgKGlzUnRsICYmIGdldFJ0bFNjcm9sbEF4aXNUeXBlKCkgPT0gUnRsU2Nyb2xsQXhpc1R5cGUuSU5WRVJURUQpIHtcbiAgICAgIC8vIEZvciBJTlZFUlRFRCwgc2Nyb2xsTGVmdCBpcyAoc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCkgd2hlbiBzY3JvbGxlZCBhbGwgdGhlIHdheSBsZWZ0IGFuZFxuICAgICAgLy8gMCB3aGVuIHNjcm9sbGVkIGFsbCB0aGUgd2F5IHJpZ2h0LlxuICAgICAgaWYgKGZyb20gPT0gTEVGVCkge1xuICAgICAgICByZXR1cm4gZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aCAtIGVsLnNjcm9sbExlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZWwuc2Nyb2xsTGVmdDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUnRsICYmIGdldFJ0bFNjcm9sbEF4aXNUeXBlKCkgPT0gUnRsU2Nyb2xsQXhpc1R5cGUuTkVHQVRFRCkge1xuICAgICAgLy8gRm9yIE5FR0FURUQsIHNjcm9sbExlZnQgaXMgLShzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKSB3aGVuIHNjcm9sbGVkIGFsbCB0aGUgd2F5IGxlZnQgYW5kXG4gICAgICAvLyAwIHdoZW4gc2Nyb2xsZWQgYWxsIHRoZSB3YXkgcmlnaHQuXG4gICAgICBpZiAoZnJvbSA9PSBMRUZUKSB7XG4gICAgICAgIHJldHVybiBlbC5zY3JvbGxMZWZ0ICsgZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtZWwuc2Nyb2xsTGVmdDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRm9yIE5PUk1BTCwgYXMgd2VsbCBhcyBub24tUlRMIGNvbnRleHRzLCBzY3JvbGxMZWZ0IGlzIDAgd2hlbiBzY3JvbGxlZCBhbGwgdGhlIHdheSBsZWZ0IGFuZFxuICAgICAgLy8gKHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpIHdoZW4gc2Nyb2xsZWQgYWxsIHRoZSB3YXkgcmlnaHQuXG4gICAgICBpZiAoZnJvbSA9PSBMRUZUKSB7XG4gICAgICAgIHJldHVybiBlbC5zY3JvbGxMZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsLnNjcm9sbFdpZHRoIC0gZWwuY2xpZW50V2lkdGggLSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19