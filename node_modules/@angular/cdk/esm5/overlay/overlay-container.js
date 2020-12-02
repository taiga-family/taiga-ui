/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf, } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/platform";
/**
 * Whether we're in a testing environment.
 * TODO(crisbeto): remove this once we have an overlay testing module.
 */
var isTestEnvironment = typeof window !== 'undefined' && !!window &&
    !!(window.__karma__ || window.jasmine);
/** Container inside which all overlays will render. */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(document, 
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    _platform) {
        this._platform = _platform;
        this._document = document;
    }
    OverlayContainer.prototype.ngOnDestroy = function () {
        var container = this._containerElement;
        if (container && container.parentNode) {
            container.parentNode.removeChild(container);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        // @breaking-change 10.0.0 Remove null check for `_platform`.
        var isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
        var containerClass = 'cdk-overlay-container';
        if (isBrowser || isTestEnvironment) {
            var oppositePlatformContainers = this._document.querySelectorAll("." + containerClass + "[platform=\"server\"], " +
                ("." + containerClass + "[platform=\"test\"]"));
            // Remove any old containers from the opposite platform.
            // This can happen when transitioning from the server to the client.
            for (var i = 0; i < oppositePlatformContainers.length; i++) {
                oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
            }
        }
        var container = this._document.createElement('div');
        container.classList.add(containerClass);
        // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
        // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
        // The new logic was a little too aggressive since it was breaking some legitimate use cases.
        // To mitigate the problem we made it so that only containers from a different platform are
        // cleared, but the side-effect was that people started depending on the overly-aggressive
        // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
        // module which does the cleanup, we try to detect that we're in a test environment and we
        // always clear the container. See #17006.
        // TODO(crisbeto): remove the test environment check once we have an overlay testing module.
        if (isTestEnvironment) {
            container.setAttribute('platform', 'test');
        }
        else if (!isBrowser) {
            container.setAttribute('platform', 'server');
        }
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform }
    ]; };
    OverlayContainer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OverlayContainer_Factory() { return new OverlayContainer(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: OverlayContainer, providedIn: "root" });
    return OverlayContainer;
}());
export { OverlayContainer };
/** @docs-private @deprecated @breaking-change 8.0.0 */
export function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
export var OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new Optional(), new SkipSelf(), OverlayContainer],
        DOCUMENT // We need to use the InjectionToken somewhere to keep TS happy
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUdWLFFBQVEsRUFDUixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRS9DOzs7R0FHRztBQUNILElBQU0saUJBQWlCLEdBQVksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsQ0FBQyxNQUFNO0lBQzFFLENBQUMsQ0FBQyxDQUFFLE1BQWMsQ0FBQyxTQUFTLElBQUssTUFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNELHVEQUF1RDtBQUN2RDtJQUtFLDBCQUNvQixRQUFhO0lBQy9COzs7T0FHRztJQUNPLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFFekMsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUNyQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDhDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7UUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sMkNBQWdCLEdBQTFCO1FBQ0UsNkRBQTZEO1FBQzdELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7UUFDNUYsSUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUM7UUFFL0MsSUFBSSxTQUFTLElBQUksaUJBQWlCLEVBQUU7WUFDbEMsSUFBTSwwQkFBMEIsR0FDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFJLGNBQWMsNEJBQXVCO2lCQUN6QyxNQUFJLGNBQWMsd0JBQW1CLENBQUEsQ0FBQyxDQUFDO1lBRTNFLHdEQUF3RDtZQUN4RCxvRUFBb0U7WUFDcEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUQsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVyxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RGO1NBQ0Y7UUFFRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV4Qyw2RkFBNkY7UUFDN0YsNEZBQTRGO1FBQzVGLDZGQUE2RjtRQUM3RiwyRkFBMkY7UUFDM0YsMEZBQTBGO1FBQzFGLDZGQUE2RjtRQUM3RiwwRkFBMEY7UUFDMUYsMENBQTBDO1FBQzFDLDRGQUE0RjtRQUM1RixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLFNBQVMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO2FBQU0sSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyQixTQUFTLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7O2dCQTlFRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O2dEQU0zQixNQUFNLFNBQUMsUUFBUTtnQkFoQlosUUFBUTs7OzJCQWpCaEI7Q0EwR0MsQUEvRUQsSUErRUM7U0E5RVksZ0JBQWdCO0FBaUY3Qix1REFBdUQ7QUFDdkQsTUFBTSxVQUFVLGtDQUFrQyxDQUFDLGVBQWlDLEVBQ2xGLFNBQWM7SUFDZCxPQUFPLGVBQWUsSUFBSSxJQUFJLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRCx1REFBdUQ7QUFDdkQsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUc7SUFDeEMsNkZBQTZGO0lBQzdGLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsSUFBSSxFQUFFO1FBQ0osQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUM7UUFDbEQsUUFBK0IsQ0FBQywrREFBK0Q7S0FDaEc7SUFDRCxVQUFVLEVBQUUsa0NBQWtDO0NBQy9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5cbi8qKlxuICogV2hldGhlciB3ZSdyZSBpbiBhIHRlc3RpbmcgZW52aXJvbm1lbnQuXG4gKiBUT0RPKGNyaXNiZXRvKTogcmVtb3ZlIHRoaXMgb25jZSB3ZSBoYXZlIGFuIG92ZXJsYXkgdGVzdGluZyBtb2R1bGUuXG4gKi9cbmNvbnN0IGlzVGVzdEVudmlyb25tZW50OiBib29sZWFuID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISF3aW5kb3cgJiZcbiAgISEoKHdpbmRvdyBhcyBhbnkpLl9fa2FybWFfXyB8fCAod2luZG93IGFzIGFueSkuamFzbWluZSk7XG5cbi8qKiBDb250YWluZXIgaW5zaWRlIHdoaWNoIGFsbCBvdmVybGF5cyB3aWxsIHJlbmRlci4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb250YWluZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55LFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIGBwbGF0Zm9ybWAgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfcGxhdGZvcm0/OiBQbGF0Zm9ybSkge1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuXG4gICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudC4gSXQgd2lsbCBsYXppbHlcbiAgICogY3JlYXRlIHRoZSBlbGVtZW50IHRoZSBmaXJzdCB0aW1lICBpdCBpcyBjYWxsZWQgdG8gZmFjaWxpdGF0ZSB1c2luZ1xuICAgKiB0aGUgY29udGFpbmVyIGluIG5vbi1icm93c2VyIGVudmlyb25tZW50cy5cbiAgICogQHJldHVybnMgdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gICAqL1xuICBnZXRDb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUNvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudCwgd2hpY2ggaXMgc2ltcGx5IGEgZGl2XG4gICAqIHdpdGggdGhlICdjZGstb3ZlcmxheS1jb250YWluZXInIGNsYXNzIG9uIHRoZSBkb2N1bWVudCBib2R5LlxuICAgKi9cbiAgcHJvdGVjdGVkIF9jcmVhdGVDb250YWluZXIoKTogdm9pZCB7XG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSAxMC4wLjAgUmVtb3ZlIG51bGwgY2hlY2sgZm9yIGBfcGxhdGZvcm1gLlxuICAgIGNvbnN0IGlzQnJvd3NlciA9IHRoaXMuX3BsYXRmb3JtID8gdGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3MgPSAnY2RrLW92ZXJsYXktY29udGFpbmVyJztcblxuICAgIGlmIChpc0Jyb3dzZXIgfHwgaXNUZXN0RW52aXJvbm1lbnQpIHtcbiAgICAgIGNvbnN0IG9wcG9zaXRlUGxhdGZvcm1Db250YWluZXJzID1cbiAgICAgICAgICB0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjb250YWluZXJDbGFzc31bcGxhdGZvcm09XCJzZXJ2ZXJcIl0sIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4ke2NvbnRhaW5lckNsYXNzfVtwbGF0Zm9ybT1cInRlc3RcIl1gKTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBvbGQgY29udGFpbmVycyBmcm9tIHRoZSBvcHBvc2l0ZSBwbGF0Zm9ybS5cbiAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRyYW5zaXRpb25pbmcgZnJvbSB0aGUgc2VydmVyIHRvIHRoZSBjbGllbnQuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wcG9zaXRlUGxhdGZvcm1Db250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wcG9zaXRlUGxhdGZvcm1Db250YWluZXJzW2ldLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG9wcG9zaXRlUGxhdGZvcm1Db250YWluZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjb250YWluZXJDbGFzcyk7XG5cbiAgICAvLyBBIGxvbmcgdGltZSBhZ28gd2Uga2VwdCBhZGRpbmcgbmV3IG92ZXJsYXkgY29udGFpbmVycyB3aGVuZXZlciBhIG5ldyBhcHAgd2FzIGluc3RhbnRpYXRlZCxcbiAgICAvLyBidXQgYXQgc29tZSBwb2ludCB3ZSBhZGRlZCBsb2dpYyB3aGljaCBjbGVhcnMgdGhlIGR1cGxpY2F0ZSBvbmVzIGluIG9yZGVyIHRvIGF2b2lkIGxlYWtzLlxuICAgIC8vIFRoZSBuZXcgbG9naWMgd2FzIGEgbGl0dGxlIHRvbyBhZ2dyZXNzaXZlIHNpbmNlIGl0IHdhcyBicmVha2luZyBzb21lIGxlZ2l0aW1hdGUgdXNlIGNhc2VzLlxuICAgIC8vIFRvIG1pdGlnYXRlIHRoZSBwcm9ibGVtIHdlIG1hZGUgaXQgc28gdGhhdCBvbmx5IGNvbnRhaW5lcnMgZnJvbSBhIGRpZmZlcmVudCBwbGF0Zm9ybSBhcmVcbiAgICAvLyBjbGVhcmVkLCBidXQgdGhlIHNpZGUtZWZmZWN0IHdhcyB0aGF0IHBlb3BsZSBzdGFydGVkIGRlcGVuZGluZyBvbiB0aGUgb3Zlcmx5LWFnZ3Jlc3NpdmVcbiAgICAvLyBsb2dpYyB0byBjbGVhbiB1cCB0aGVpciB0ZXN0cyBmb3IgdGhlbS4gVW50aWwgd2UgY2FuIGludHJvZHVjZSBhbiBvdmVybGF5LXNwZWNpZmljIHRlc3RpbmdcbiAgICAvLyBtb2R1bGUgd2hpY2ggZG9lcyB0aGUgY2xlYW51cCwgd2UgdHJ5IHRvIGRldGVjdCB0aGF0IHdlJ3JlIGluIGEgdGVzdCBlbnZpcm9ubWVudCBhbmQgd2VcbiAgICAvLyBhbHdheXMgY2xlYXIgdGhlIGNvbnRhaW5lci4gU2VlICMxNzAwNi5cbiAgICAvLyBUT0RPKGNyaXNiZXRvKTogcmVtb3ZlIHRoZSB0ZXN0IGVudmlyb25tZW50IGNoZWNrIG9uY2Ugd2UgaGF2ZSBhbiBvdmVybGF5IHRlc3RpbmcgbW9kdWxlLlxuICAgIGlmIChpc1Rlc3RFbnZpcm9ubWVudCkge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgncGxhdGZvcm0nLCAndGVzdCcpO1xuICAgIH0gZWxzZSBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgncGxhdGZvcm0nLCAnc2VydmVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gIH1cbn1cblxuXG4vKiogQGRvY3MtcHJpdmF0ZSBAZGVwcmVjYXRlZCBAYnJlYWtpbmctY2hhbmdlIDguMC4wICovXG5leHBvcnQgZnVuY3Rpb24gT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWShwYXJlbnRDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gIF9kb2N1bWVudDogYW55KSB7XG4gIHJldHVybiBwYXJlbnRDb250YWluZXIgfHwgbmV3IE92ZXJsYXlDb250YWluZXIoX2RvY3VtZW50KTtcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgQGRlcHJlY2F0ZWQgQGJyZWFraW5nLWNoYW5nZSA4LjAuMCAqL1xuZXhwb3J0IGNvbnN0IE9WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE92ZXJsYXlDb250YWluZXIgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogT3ZlcmxheUNvbnRhaW5lcixcbiAgZGVwczogW1xuICAgIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE92ZXJsYXlDb250YWluZXJdLFxuICAgIERPQ1VNRU5UIGFzIEluamVjdGlvblRva2VuPGFueT4gLy8gV2UgbmVlZCB0byB1c2UgdGhlIEluamVjdGlvblRva2VuIHNvbWV3aGVyZSB0byBrZWVwIFRTIGhhcHB5XG4gIF0sXG4gIHVzZUZhY3Rvcnk6IE9WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUllcbn07XG4iXX0=