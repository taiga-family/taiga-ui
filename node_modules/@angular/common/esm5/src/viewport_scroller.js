/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ErrorHandler, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { DOCUMENT } from './dom_tokens';
/**
 * Defines a scroll position manager. Implemented by `BrowserViewportScroller`.
 *
 * @publicApi
 */
var ViewportScroller = /** @class */ (function () {
    function ViewportScroller() {
    }
    // De-sugared tree-shakable injection
    // See #23917
    /** @nocollapse */
    ViewportScroller.ɵprov = ɵɵdefineInjectable({
        token: ViewportScroller,
        providedIn: 'root',
        factory: function () { return new BrowserViewportScroller(ɵɵinject(DOCUMENT), window, ɵɵinject(ErrorHandler)); }
    });
    return ViewportScroller;
}());
export { ViewportScroller };
/**
 * Manages the scroll position for a browser window.
 */
var BrowserViewportScroller = /** @class */ (function () {
    function BrowserViewportScroller(document, window, errorHandler) {
        this.document = document;
        this.window = window;
        this.errorHandler = errorHandler;
        this.offset = function () { return [0, 0]; };
    }
    /**
     * Configures the top offset used when scrolling to an anchor.
     * @param offset A position in screen coordinates (a tuple with x and y values)
     * or a function that returns the top offset position.
     *
     */
    BrowserViewportScroller.prototype.setOffset = function (offset) {
        if (Array.isArray(offset)) {
            this.offset = function () { return offset; };
        }
        else {
            this.offset = offset;
        }
    };
    /**
     * Retrieves the current scroll position.
     * @returns The position in screen coordinates.
     */
    BrowserViewportScroller.prototype.getScrollPosition = function () {
        if (this.supportScrollRestoration()) {
            return [this.window.scrollX, this.window.scrollY];
        }
        else {
            return [0, 0];
        }
    };
    /**
     * Sets the scroll position.
     * @param position The new position in screen coordinates.
     */
    BrowserViewportScroller.prototype.scrollToPosition = function (position) {
        if (this.supportScrollRestoration()) {
            this.window.scrollTo(position[0], position[1]);
        }
    };
    /**
     * Scrolls to an anchor element.
     * @param anchor The ID of the anchor element.
     */
    BrowserViewportScroller.prototype.scrollToAnchor = function (anchor) {
        if (this.supportScrollRestoration()) {
            // Escape anything passed to `querySelector` as it can throw errors and stop the application
            // from working if invalid values are passed.
            if (this.window.CSS && this.window.CSS.escape) {
                anchor = this.window.CSS.escape(anchor);
            }
            else {
                anchor = anchor.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            }
            try {
                var elSelectedById = this.document.querySelector("#" + anchor);
                if (elSelectedById) {
                    this.scrollToElement(elSelectedById);
                    return;
                }
                var elSelectedByName = this.document.querySelector("[name='" + anchor + "']");
                if (elSelectedByName) {
                    this.scrollToElement(elSelectedByName);
                    return;
                }
            }
            catch (e) {
                this.errorHandler.handleError(e);
            }
        }
    };
    /**
     * Disables automatic scroll restoration provided by the browser.
     */
    BrowserViewportScroller.prototype.setHistoryScrollRestoration = function (scrollRestoration) {
        if (this.supportScrollRestoration()) {
            var history_1 = this.window.history;
            if (history_1 && history_1.scrollRestoration) {
                history_1.scrollRestoration = scrollRestoration;
            }
        }
    };
    BrowserViewportScroller.prototype.scrollToElement = function (el) {
        var rect = el.getBoundingClientRect();
        var left = rect.left + this.window.pageXOffset;
        var top = rect.top + this.window.pageYOffset;
        var offset = this.offset();
        this.window.scrollTo(left - offset[0], top - offset[1]);
    };
    /**
     * We only support scroll restoration when we can get a hold of window.
     * This means that we do not support this behavior when running in a web worker.
     *
     * Lifting this restriction right now would require more changes in the dom adapter.
     * Since webworkers aren't widely used, we will lift it once RouterScroller is
     * battle-tested.
     */
    BrowserViewportScroller.prototype.supportScrollRestoration = function () {
        try {
            return !!this.window && !!this.window.scrollTo;
        }
        catch (_a) {
            return false;
        }
    };
    return BrowserViewportScroller;
}());
export { BrowserViewportScroller };
/**
 * Provides an empty implementation of the viewport scroller. This will
 * live in @angular/common as it will be used by both platform-server and platform-webworker.
 */
var NullViewportScroller = /** @class */ (function () {
    function NullViewportScroller() {
    }
    /**
     * Empty implementation
     */
    NullViewportScroller.prototype.setOffset = function (offset) { };
    /**
     * Empty implementation
     */
    NullViewportScroller.prototype.getScrollPosition = function () {
        return [0, 0];
    };
    /**
     * Empty implementation
     */
    NullViewportScroller.prototype.scrollToPosition = function (position) { };
    /**
     * Empty implementation
     */
    NullViewportScroller.prototype.scrollToAnchor = function (anchor) { };
    /**
     * Empty implementation
     */
    NullViewportScroller.prototype.setHistoryScrollRestoration = function (scrollRestoration) { };
    return NullViewportScroller;
}());
export { NullViewportScroller };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnRfc2Nyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL3ZpZXdwb3J0X3Njcm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFJdEM7Ozs7R0FJRztBQUNIO0lBQUE7SUEwQ0EsQ0FBQztJQXpDQyxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLGtCQUFrQjtJQUNYLHNCQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDaEMsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixVQUFVLEVBQUUsTUFBTTtRQUNsQixPQUFPLEVBQUUsY0FBTSxPQUFBLElBQUksdUJBQXVCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBL0UsQ0FBK0U7S0FDL0YsQ0FBQyxDQUFDO0lBa0NMLHVCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0ExQ3FCLGdCQUFnQjtBQTRDdEM7O0dBRUc7QUFDSDtJQUdFLGlDQUFvQixRQUFhLEVBQVUsTUFBVyxFQUFVLFlBQTBCO1FBQXRFLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGbEYsV0FBTSxHQUEyQixjQUFNLE9BQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQU4sQ0FBTSxDQUFDO0lBRXVDLENBQUM7SUFFOUY7Ozs7O09BS0c7SUFDSCwyQ0FBUyxHQUFULFVBQVUsTUFBaUQ7UUFDekQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lB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QUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ssMERBQXdCLEdBQWhDO1FBQ0UsSUFBSTtZQUNGLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2hEO1FBQUMsV0FBTTtZQUNOLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBMUdELElBMEdDOztBQUdEOzs7R0FHRztBQUNIO0lBQUE7SUEyQkEsQ0FBQztJQTFCQzs7T0FFRztJQUNILHdDQUFTLEdBQVQsVUFBVSxNQUFpRCxJQUFTLENBQUM7SUFFckU7O09BRUc7SUFDSCxnREFBaUIsR0FBakI7UUFDRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNILCtDQUFnQixHQUFoQixVQUFpQixRQUEwQixJQUFTLENBQUM7SUFFckQ7O09BRUc7SUFDSCw2Q0FBYyxHQUFkLFVBQWUsTUFBYyxJQUFTLENBQUM7SUFFdkM7O09BRUc7SUFDSCwwREFBMkIsR0FBM0IsVUFBNEIsaUJBQWtDLElBQVMsQ0FBQztJQUMxRSwyQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RXJyb3JIYW5kbGVyLCDJtcm1ZGVmaW5lSW5qZWN0YWJsZSwgybXJtWluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJy4vZG9tX3Rva2Vucyc7XG5cblxuXG4vKipcbiAqIERlZmluZXMgYSBzY3JvbGwgcG9zaXRpb24gbWFuYWdlci4gSW1wbGVtZW50ZWQgYnkgYEJyb3dzZXJWaWV3cG9ydFNjcm9sbGVyYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWaWV3cG9ydFNjcm9sbGVyIHtcbiAgLy8gRGUtc3VnYXJlZCB0cmVlLXNoYWthYmxlIGluamVjdGlvblxuICAvLyBTZWUgIzIzOTE3XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVwcm92ID0gybXJtWRlZmluZUluamVjdGFibGUoe1xuICAgIHRva2VuOiBWaWV3cG9ydFNjcm9sbGVyLFxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICBmYWN0b3J5OiAoKSA9PiBuZXcgQnJvd3NlclZpZXdwb3J0U2Nyb2xsZXIoybXJtWluamVjdChET0NVTUVOVCksIHdpbmRvdywgybXJtWluamVjdChFcnJvckhhbmRsZXIpKVxuICB9KTtcblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgdG9wIG9mZnNldCB1c2VkIHdoZW4gc2Nyb2xsaW5nIHRvIGFuIGFuY2hvci5cbiAgICogQHBhcmFtIG9mZnNldCBBIHBvc2l0aW9uIGluIHNjcmVlbiBjb29yZGluYXRlcyAoYSB0dXBsZSB3aXRoIHggYW5kIHkgdmFsdWVzKVxuICAgKiBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdG9wIG9mZnNldCBwb3NpdGlvbi5cbiAgICpcbiAgICovXG4gIGFic3RyYWN0IHNldE9mZnNldChvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl18KCgpID0+IFtudW1iZXIsIG51bWJlcl0pKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbi5cbiAgICogQHJldHVybnMgQSBwb3NpdGlvbiBpbiBzY3JlZW4gY29vcmRpbmF0ZXMgKGEgdHVwbGUgd2l0aCB4IGFuZCB5IHZhbHVlcykuXG4gICAqL1xuICBhYnN0cmFjdCBnZXRTY3JvbGxQb3NpdGlvbigpOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIGEgc3BlY2lmaWVkIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gcG9zaXRpb24gQSBwb3NpdGlvbiBpbiBzY3JlZW4gY29vcmRpbmF0ZXMgKGEgdHVwbGUgd2l0aCB4IGFuZCB5IHZhbHVlcykuXG4gICAqL1xuICBhYnN0cmFjdCBzY3JvbGxUb1Bvc2l0aW9uKHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdKTogdm9pZDtcblxuICAvKipcbiAgICogU2Nyb2xscyB0byBhbiBhbmNob3IgZWxlbWVudC5cbiAgICogQHBhcmFtIGFuY2hvciBUaGUgSUQgb2YgdGhlIGFuY2hvciBlbGVtZW50LlxuICAgKi9cbiAgYWJzdHJhY3Qgc2Nyb2xsVG9BbmNob3IoYW5jaG9yOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBhdXRvbWF0aWMgc2Nyb2xsIHJlc3RvcmF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyLlxuICAgKiBTZWUgYWxzbyBbd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb25cbiAgICogaW5mb10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxNS8wOS9oaXN0b3J5LWFwaS1zY3JvbGwtcmVzdG9yYXRpb24pLlxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0SGlzdG9yeVNjcm9sbFJlc3RvcmF0aW9uKHNjcm9sbFJlc3RvcmF0aW9uOiAnYXV0byd8J21hbnVhbCcpOiB2b2lkO1xufVxuXG4vKipcbiAqIE1hbmFnZXMgdGhlIHNjcm9sbCBwb3NpdGlvbiBmb3IgYSBicm93c2VyIHdpbmRvdy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJyb3dzZXJWaWV3cG9ydFNjcm9sbGVyIGltcGxlbWVudHMgVmlld3BvcnRTY3JvbGxlciB7XG4gIHByaXZhdGUgb2Zmc2V0OiAoKSA9PiBbbnVtYmVyLCBudW1iZXJdID0gKCkgPT4gWzAsIDBdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnQ6IGFueSwgcHJpdmF0ZSB3aW5kb3c6IGFueSwgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcikge31cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgdG9wIG9mZnNldCB1c2VkIHdoZW4gc2Nyb2xsaW5nIHRvIGFuIGFuY2hvci5cbiAgICogQHBhcmFtIG9mZnNldCBBIHBvc2l0aW9uIGluIHNjcmVlbiBjb29yZGluYXRlcyAoYSB0dXBsZSB3aXRoIHggYW5kIHkgdmFsdWVzKVxuICAgKiBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdG9wIG9mZnNldCBwb3NpdGlvbi5cbiAgICpcbiAgICovXG4gIHNldE9mZnNldChvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl18KCgpID0+IFtudW1iZXIsIG51bWJlcl0pKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2Zmc2V0KSkge1xuICAgICAgdGhpcy5vZmZzZXQgPSAoKSA9PiBvZmZzZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLlxuICAgKiBAcmV0dXJucyBUaGUgcG9zaXRpb24gaW4gc2NyZWVuIGNvb3JkaW5hdGVzLlxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb24oKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydFNjcm9sbFJlc3RvcmF0aW9uKCkpIHtcbiAgICAgIHJldHVybiBbdGhpcy53aW5kb3cuc2Nyb2xsWCwgdGhpcy53aW5kb3cuc2Nyb2xsWV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbMCwgMF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNjcm9sbCBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHBvc2l0aW9uIFRoZSBuZXcgcG9zaXRpb24gaW4gc2NyZWVuIGNvb3JkaW5hdGVzLlxuICAgKi9cbiAgc2Nyb2xsVG9Qb3NpdGlvbihwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1cHBvcnRTY3JvbGxSZXN0b3JhdGlvbigpKSB7XG4gICAgICB0aGlzLndpbmRvdy5zY3JvbGxUbyhwb3NpdGlvblswXSwgcG9zaXRpb25bMV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIGFuIGFuY2hvciBlbGVtZW50LlxuICAgKiBAcGFyYW0gYW5jaG9yIFRoZSBJRCBvZiB0aGUgYW5jaG9yIGVsZW1lbnQuXG4gICAqL1xuICBzY3JvbGxUb0FuY2hvcihhbmNob3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1cHBvcnRTY3JvbGxSZXN0b3JhdGlvbigpKSB7XG4gICAgICAvLyBFc2NhcGUgYW55dGhpbmcgcGFzc2VkIHRvIGBxdWVyeVNlbGVjdG9yYCBhcyBpdCBjYW4gdGhyb3cgZXJyb3JzIGFuZCBzdG9wIHRoZSBhcHBsaWNhdGlvblxuICAgICAgLy8gZnJvbSB3b3JraW5nIGlmIGludmFsaWQgdmFsdWVzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodGhpcy53aW5kb3cuQ1NTICYmIHRoaXMud2luZG93LkNTUy5lc2NhcGUpIHtcbiAgICAgICAgYW5jaG9yID0gdGhpcy53aW5kb3cuQ1NTLmVzY2FwZShhbmNob3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5jaG9yID0gYW5jaG9yLnJlcGxhY2UoLyhcXFwifFxcJ1xcIHw6fFxcLnxcXFt8XFxdfCx8PSkvZywgJ1xcXFwkMScpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZWxTZWxlY3RlZEJ5SWQgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FuY2hvcn1gKTtcbiAgICAgICAgaWYgKGVsU2VsZWN0ZWRCeUlkKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQoZWxTZWxlY3RlZEJ5SWQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbFNlbGVjdGVkQnlOYW1lID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT0nJHthbmNob3J9J11gKTtcbiAgICAgICAgaWYgKGVsU2VsZWN0ZWRCeU5hbWUpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvRWxlbWVudChlbFNlbGVjdGVkQnlOYW1lKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGF1dG9tYXRpYyBzY3JvbGwgcmVzdG9yYXRpb24gcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIuXG4gICAqL1xuICBzZXRIaXN0b3J5U2Nyb2xsUmVzdG9yYXRpb24oc2Nyb2xsUmVzdG9yYXRpb246ICdhdXRvJ3wnbWFudWFsJyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1cHBvcnRTY3JvbGxSZXN0b3JhdGlvbigpKSB7XG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy53aW5kb3cuaGlzdG9yeTtcbiAgICAgIGlmIChoaXN0b3J5ICYmIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IHNjcm9sbFJlc3RvcmF0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9FbGVtZW50KGVsOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGVmdCA9IHJlY3QubGVmdCArIHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wICsgdGhpcy53aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTtcbiAgICB0aGlzLndpbmRvdy5zY3JvbGxUbyhsZWZ0IC0gb2Zmc2V0WzBdLCB0b3AgLSBvZmZzZXRbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIG9ubHkgc3VwcG9ydCBzY3JvbGwgcmVzdG9yYXRpb24gd2hlbiB3ZSBjYW4gZ2V0IGEgaG9sZCBvZiB3aW5kb3cuXG4gICAqIFRoaXMgbWVhbnMgdGhhdCB3ZSBkbyBub3Qgc3VwcG9ydCB0aGlzIGJlaGF2aW9yIHdoZW4gcnVubmluZyBpbiBhIHdlYiB3b3JrZXIuXG4gICAqXG4gICAqIExpZnRpbmcgdGhpcyByZXN0cmljdGlvbiByaWdodCBub3cgd291bGQgcmVxdWlyZSBtb3JlIGNoYW5nZXMgaW4gdGhlIGRvbSBhZGFwdGVyLlxuICAgKiBTaW5jZSB3ZWJ3b3JrZXJzIGFyZW4ndCB3aWRlbHkgdXNlZCwgd2Ugd2lsbCBsaWZ0IGl0IG9uY2UgUm91dGVyU2Nyb2xsZXIgaXNcbiAgICogYmF0dGxlLXRlc3RlZC5cbiAgICovXG4gIHByaXZhdGUgc3VwcG9ydFNjcm9sbFJlc3RvcmF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gISF0aGlzLndpbmRvdyAmJiAhIXRoaXMud2luZG93LnNjcm9sbFRvO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZW1wdHkgaW1wbGVtZW50YXRpb24gb2YgdGhlIHZpZXdwb3J0IHNjcm9sbGVyLiBUaGlzIHdpbGxcbiAqIGxpdmUgaW4gQGFuZ3VsYXIvY29tbW9uIGFzIGl0IHdpbGwgYmUgdXNlZCBieSBib3RoIHBsYXRmb3JtLXNlcnZlciBhbmQgcGxhdGZvcm0td2Vid29ya2VyLlxuICovXG5leHBvcnQgY2xhc3MgTnVsbFZpZXdwb3J0U2Nyb2xsZXIgaW1wbGVtZW50cyBWaWV3cG9ydFNjcm9sbGVyIHtcbiAgLyoqXG4gICAqIEVtcHR5IGltcGxlbWVudGF0aW9uXG4gICAqL1xuICBzZXRPZmZzZXQob2Zmc2V0OiBbbnVtYmVyLCBudW1iZXJdfCgoKSA9PiBbbnVtYmVyLCBudW1iZXJdKSk6IHZvaWQge31cblxuICAvKipcbiAgICogRW1wdHkgaW1wbGVtZW50YXRpb25cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgIHJldHVybiBbMCwgMF07XG4gIH1cblxuICAvKipcbiAgICogRW1wdHkgaW1wbGVtZW50YXRpb25cbiAgICovXG4gIHNjcm9sbFRvUG9zaXRpb24ocG9zaXRpb246IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEVtcHR5IGltcGxlbWVudGF0aW9uXG4gICAqL1xuICBzY3JvbGxUb0FuY2hvcihhbmNob3I6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogRW1wdHkgaW1wbGVtZW50YXRpb25cbiAgICovXG4gIHNldEhpc3RvcnlTY3JvbGxSZXN0b3JhdGlvbihzY3JvbGxSZXN0b3JhdGlvbjogJ2F1dG8nfCdtYW51YWwnKTogdm9pZCB7fVxufVxuIl19