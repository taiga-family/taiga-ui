/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { Injectable, NgZone, Optional, Inject } from '@angular/core';
import { merge, of as observableOf, fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "@angular/common";
/** Time in ms to throttle the resize events by default. */
export var DEFAULT_RESIZE_TIME = 20;
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
                observableOf();
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
    ViewportRuler.ɵprov = i0.ɵɵdefineInjectable({ factory: function ViewportRuler_Factory() { return new ViewportRuler(i0.ɵɵinject(i1.Platform), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.DOCUMENT, 8)); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
}());
export { ViewportRuler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQtcnVsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3Njcm9sbGluZy92aWV3cG9ydC1ydWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQWEsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsU0FBUyxFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNwRixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRXpDLDJEQUEyRDtBQUMzRCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFRdEM7OztHQUdHO0FBQ0g7SUFjRSx1QkFBb0IsU0FBbUIsRUFDM0IsTUFBYztJQUNkLHFEQUFxRDtJQUN2QixRQUFjO1FBSHhELGlCQWlCQztRQWpCbUIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUlyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUUxQixNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDdkIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRWpDLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxZQUFZLEVBQUUsQ0FBQztZQUVu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LFVBQU8sWUFBMEM7UUFBMUMsNkJBQUEsRUFBQSxrQ0FBMEM7UUFDL0MsT0FBTyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0RixDQUFDO0lBRUQscUZBQXFGO0lBQzdFLG9DQUFZLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsK0ZBQStGO0lBQ3ZGLGtDQUFVLEdBQWxCO1FBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUF3QztJQUNoQywyQ0FBbUIsR0FBM0I7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1lBQ3hELEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDNUIsQ0FBQzs7Z0JBbElGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7Z0JBbkJ4QixRQUFRO2dCQUNJLE1BQU07Z0RBbUNYLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7O3dCQTVDMUM7Q0E4SkMsQUFuSUQsSUFtSUM7U0FsSVksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge21lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7YXVkaXRUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKiogVGltZSBpbiBtcyB0byB0aHJvdHRsZSB0aGUgcmVzaXplIGV2ZW50cyBieSBkZWZhdWx0LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVTSVpFX1RJTUUgPSAyMDtcblxuLyoqIE9iamVjdCB0aGF0IGhvbGRzIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHZpZXdwb3J0IGluIGVhY2ggZGlyZWN0aW9uLiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3cG9ydFNjcm9sbFBvc2l0aW9uIHtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBTaW1wbGUgdXRpbGl0eSBmb3IgZ2V0dGluZyB0aGUgYm91bmRzIG9mIHRoZSBicm93c2VyIHZpZXdwb3J0LlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydFJ1bGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIENhY2hlZCB2aWV3cG9ydCBkaW1lbnNpb25zLiAqL1xuICBwcml2YXRlIF92aWV3cG9ydFNpemU6IHt3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcn07XG5cbiAgLyoqIFN0cmVhbSBvZiB2aWV3cG9ydCBjaGFuZ2UgZXZlbnRzLiAqL1xuICBwcml2YXRlIF9jaGFuZ2U6IE9ic2VydmFibGU8RXZlbnQ+O1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gc3RyZWFtcyB0aGF0IGludmFsaWRhdGUgdGhlIGNhY2hlZCB2aWV3cG9ydCBkaW1lbnNpb25zLiAqL1xuICBwcml2YXRlIF9pbnZhbGlkYXRlQ2FjaGU6IFN1YnNjcmlwdGlvbjtcblxuICAvKiogVXNlZCB0byByZWZlcmVuY2UgY29ycmVjdCBkb2N1bWVudC93aW5kb3cgKi9cbiAgcHJvdGVjdGVkIF9kb2N1bWVudD86IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIC8qKiBAYnJlYWtpbmctY2hhbmdlIDExLjAuMCBtYWtlIGRvY3VtZW50IHJlcXVpcmVkICovXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50PzogYW55KSB7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgIG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3cgPSB0aGlzLl9nZXRXaW5kb3coKTtcblxuICAgICAgdGhpcy5fY2hhbmdlID0gX3BsYXRmb3JtLmlzQnJvd3NlciA/XG4gICAgICAgICAgbWVyZ2UoZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLCBmcm9tRXZlbnQod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnKSkgOlxuICAgICAgICAgIG9ic2VydmFibGVPZigpO1xuXG4gICAgICAvLyBOb3RlIHRoYXQgd2UgbmVlZCB0byBkbyB0aGUgc3Vic2NyaXB0aW9uIGluc2lkZSBgcnVuT3V0c2lkZUFuZ3VsYXJgXG4gICAgICAvLyBzaW5jZSBzdWJzY3JpYmluZyBpcyB3aGF0IGNhdXNlcyB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gYmUgYWRkZWQuXG4gICAgICB0aGlzLl9pbnZhbGlkYXRlQ2FjaGUgPSB0aGlzLmNoYW5nZSgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl91cGRhdGVWaWV3cG9ydFNpemUoKSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9pbnZhbGlkYXRlQ2FjaGUudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSB2aWV3cG9ydCdzIHdpZHRoIGFuZCBoZWlnaHQuICovXG4gIGdldFZpZXdwb3J0U2l6ZSgpOiBSZWFkb25seTx7d2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJ9PiB7XG4gICAgaWYgKCF0aGlzLl92aWV3cG9ydFNpemUpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVZpZXdwb3J0U2l6ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG91dHB1dCA9IHt3aWR0aDogdGhpcy5fdmlld3BvcnRTaXplLndpZHRoLCBoZWlnaHQ6IHRoaXMuX3ZpZXdwb3J0U2l6ZS5oZWlnaHR9O1xuXG4gICAgLy8gSWYgd2UncmUgbm90IG9uIGEgYnJvd3NlciwgZG9uJ3QgY2FjaGUgdGhlIHNpemUgc2luY2UgaXQnbGwgYmUgbW9ja2VkIG91dCBhbnl3YXkuXG4gICAgaWYgKCF0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3ZpZXdwb3J0U2l6ZSA9IG51bGwhO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKiogR2V0cyBhIENsaWVudFJlY3QgZm9yIHRoZSB2aWV3cG9ydCdzIGJvdW5kcy4gKi9cbiAgZ2V0Vmlld3BvcnRSZWN0KCk6IENsaWVudFJlY3Qge1xuICAgIC8vIFVzZSB0aGUgZG9jdW1lbnQgZWxlbWVudCdzIGJvdW5kaW5nIHJlY3QgcmF0aGVyIHRoYW4gdGhlIHdpbmRvdyBzY3JvbGwgcHJvcGVydGllc1xuICAgIC8vIChlLmcuIHBhZ2VZT2Zmc2V0LCBzY3JvbGxZKSBkdWUgdG8gaW4gaXNzdWUgaW4gQ2hyb21lIGFuZCBJRSB3aGVyZSB3aW5kb3cgc2Nyb2xsXG4gICAgLy8gcHJvcGVydGllcyBhbmQgY2xpZW50IGNvb3JkaW5hdGVzIChib3VuZGluZ0NsaWVudFJlY3QsIGNsaWVudFgvWSwgZXRjLikgYXJlIGluIGRpZmZlcmVudFxuICAgIC8vIGNvbmNlcHR1YWwgdmlld3BvcnRzLiBVbmRlciBtb3N0IGNpcmN1bXN0YW5jZXMgdGhlc2Ugdmlld3BvcnRzIGFyZSBlcXVpdmFsZW50LCBidXQgdGhleVxuICAgIC8vIGNhbiBkaXNhZ3JlZSB3aGVuIHRoZSBwYWdlIGlzIHBpbmNoLXpvb21lZCAob24gZGV2aWNlcyB0aGF0IHN1cHBvcnQgdG91Y2gpLlxuICAgIC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00ODkyMDYjYzRcbiAgICAvLyBXZSB1c2UgdGhlIGRvY3VtZW50RWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBib2R5IGJlY2F1c2UsIGJ5IGRlZmF1bHQgKHdpdGhvdXQgYSBjc3MgcmVzZXQpXG4gICAgLy8gYnJvd3NlcnMgdHlwaWNhbGx5IGdpdmUgdGhlIGRvY3VtZW50IGJvZHkgYW4gOHB4IG1hcmdpbiwgd2hpY2ggaXMgbm90IGluY2x1ZGVkIGluXG4gICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuXG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldFZpZXdwb3J0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSB0aGlzLmdldFZpZXdwb3J0U2l6ZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogc2Nyb2xsUG9zaXRpb24udG9wLFxuICAgICAgbGVmdDogc2Nyb2xsUG9zaXRpb24ubGVmdCxcbiAgICAgIGJvdHRvbTogc2Nyb2xsUG9zaXRpb24udG9wICsgaGVpZ2h0LFxuICAgICAgcmlnaHQ6IHNjcm9sbFBvc2l0aW9uLmxlZnQgKyB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgIH07XG4gIH1cblxuICAvKiogR2V0cyB0aGUgKHRvcCwgbGVmdCkgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB2aWV3cG9ydC4gKi9cbiAgZ2V0Vmlld3BvcnRTY3JvbGxQb3NpdGlvbigpOiBWaWV3cG9ydFNjcm9sbFBvc2l0aW9uIHtcbiAgICAvLyBXaGlsZSB3ZSBjYW4gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBmYWtlIGRvY3VtZW50XG4gICAgLy8gZHVyaW5nIFNTUiwgaXQgZG9lc24ndCBoYXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdC5cbiAgICBpZiAoIXRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHt0b3A6IDAsIGxlZnQ6IDB9O1xuICAgIH1cblxuICAgIC8vIFRoZSB0b3AtbGVmdC1jb3JuZXIgb2YgdGhlIHZpZXdwb3J0IGlzIGRldGVybWluZWQgYnkgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgZG9jdW1lbnRcbiAgICAvLyBib2R5LCBub3JtYWxseSBqdXN0IChzY3JvbGxMZWZ0LCBzY3JvbGxUb3ApLiBIb3dldmVyLCBDaHJvbWUgYW5kIEZpcmVmb3ggZGlzYWdyZWUgYWJvdXRcbiAgICAvLyB3aGV0aGVyIGBkb2N1bWVudC5ib2R5YCBvciBgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50YCBpcyB0aGUgc2Nyb2xsZWQgZWxlbWVudCwgc28gcmVhZGluZ1xuICAgIC8vIGBzY3JvbGxUb3BgIGFuZCBgc2Nyb2xsTGVmdGAgaXMgaW5jb25zaXN0ZW50LiBIb3dldmVyLCB1c2luZyB0aGUgYm91bmRpbmcgcmVjdCBvZlxuICAgIC8vIGBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRgIHdvcmtzIGNvbnNpc3RlbnRseSwgd2hlcmUgdGhlIGB0b3BgIGFuZCBgbGVmdGAgdmFsdWVzIHdpbGxcbiAgICAvLyBlcXVhbCBuZWdhdGl2ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uLlxuICAgIGNvbnN0IGRvY3VtZW50ID0gdGhpcy5fZ2V0RG9jdW1lbnQoKTtcbiAgICBjb25zdCB3aW5kb3cgPSB0aGlzLl9nZXRXaW5kb3coKTtcbiAgICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQhO1xuICAgIGNvbnN0IGRvY3VtZW50UmVjdCA9IGRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHRvcCA9IC1kb2N1bWVudFJlY3QudG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IHdpbmRvdy5zY3JvbGxZIHx8XG4gICAgICAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgMDtcblxuICAgIGNvbnN0IGxlZnQgPSAtZG9jdW1lbnRSZWN0LmxlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IHdpbmRvdy5zY3JvbGxYIHx8XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCAwO1xuXG4gICAgcmV0dXJuIHt0b3AsIGxlZnR9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQgY2hhbmdlcy5cbiAgICogQHBhcmFtIHRocm90dGxlVGltZSBUaW1lIGluIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSB0aGUgc3RyZWFtLlxuICAgKi9cbiAgY2hhbmdlKHRocm90dGxlVGltZTogbnVtYmVyID0gREVGQVVMVF9SRVNJWkVfVElNRSk6IE9ic2VydmFibGU8RXZlbnQ+IHtcbiAgICByZXR1cm4gdGhyb3R0bGVUaW1lID4gMCA/IHRoaXMuX2NoYW5nZS5waXBlKGF1ZGl0VGltZSh0aHJvdHRsZVRpbWUpKSA6IHRoaXMuX2NoYW5nZTtcbiAgfVxuXG4gIC8qKiBBY2Nlc3MgaW5qZWN0ZWQgZG9jdW1lbnQgaWYgYXZhaWxhYmxlIG9yIGZhbGxiYWNrIHRvIGdsb2JhbCBkb2N1bWVudCByZWZlcmVuY2UgKi9cbiAgcHJpdmF0ZSBfZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9kb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgfVxuXG4gIC8qKiBVc2UgZGVmYXVsdFZpZXcgb2YgaW5qZWN0ZWQgZG9jdW1lbnQgaWYgYXZhaWxhYmxlIG9yIGZhbGxiYWNrIHRvIGdsb2JhbCB3aW5kb3cgcmVmZXJlbmNlICovXG4gIHByaXZhdGUgX2dldFdpbmRvdygpOiBXaW5kb3cge1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvY3VtZW50KCk7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgY2FjaGVkIHZpZXdwb3J0IHNpemUuICovXG4gIHByaXZhdGUgX3VwZGF0ZVZpZXdwb3J0U2l6ZSgpIHtcbiAgICBjb25zdCB3aW5kb3cgPSB0aGlzLl9nZXRXaW5kb3coKTtcbiAgICB0aGlzLl92aWV3cG9ydFNpemUgPSB0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIgP1xuICAgICAgICB7d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodH0gOlxuICAgICAgICB7d2lkdGg6IDAsIGhlaWdodDogMH07XG4gIH1cbn1cbiJdfQ==