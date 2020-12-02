/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/scroll/scroll-strategy-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { BlockScrollStrategy } from './block-scroll-strategy';
import { CloseScrollStrategy } from './close-scroll-strategy';
import { NoopScrollStrategy } from './noop-scroll-strategy';
import { RepositionScrollStrategy, } from './reposition-scroll-strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
import * as i2 from "@angular/common";
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
export class ScrollStrategyOptions {
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _viewportRuler
     * @param {?} _ngZone
     * @param {?} document
     */
    constructor(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */
        this.noop = (/**
         * @return {?}
         */
        () => new NoopScrollStrategy());
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = (/**
         * @param {?=} config
         * @return {?}
         */
        (config) => new CloseScrollStrategy(this._scrollDispatcher, this._ngZone, this._viewportRuler, config));
        /**
         * Block scrolling.
         */
        this.block = (/**
         * @return {?}
         */
        () => new BlockScrollStrategy(this._viewportRuler, this._document));
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = (/**
         * @param {?=} config
         * @return {?}
         */
        (config) => new RepositionScrollStrategy(this._scrollDispatcher, this._viewportRuler, this._ngZone, config));
        this._document = document;
    }
}
ScrollStrategyOptions.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ScrollStrategyOptions.ctorParameters = () => [
    { type: ScrollDispatcher },
    { type: ViewportRuler },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ ScrollStrategyOptions.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(i0.ɵɵinject(i1.ScrollDispatcher), i0.ɵɵinject(i1.ViewportRuler), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.DOCUMENT)); }, token: ScrollStrategyOptions, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollStrategyOptions.prototype._document;
    /**
     * Do nothing on scroll.
     * @type {?}
     */
    ScrollStrategyOptions.prototype.noop;
    /**
     * Close the overlay as soon as the user scrolls.
     * \@param config Configuration to be used inside the scroll strategy.
     * @type {?}
     */
    ScrollStrategyOptions.prototype.close;
    /**
     * Block scrolling.
     * @type {?}
     */
    ScrollStrategyOptions.prototype.block;
    /**
     * Update the overlay's position on scroll.
     * \@param config Configuration to be used inside the scroll strategy.
     * Allows debouncing the reposition calls.
     * @type {?}
     */
    ScrollStrategyOptions.prototype.reposition;
    /**
     * @type {?}
     * @private
     */
    ScrollStrategyOptions.prototype._scrollDispatcher;
    /**
     * @type {?}
     * @private
     */
    ScrollStrategyOptions.prototype._viewportRuler;
    /**
     * @type {?}
     * @private
     */
    ScrollStrategyOptions.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvc2Nyb2xsL3Njcm9sbC1zdHJhdGVneS1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxtQkFBbUIsRUFBNEIsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsd0JBQXdCLEdBRXpCLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7QUFVdEMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQUdoQyxZQUNVLGlCQUFtQyxFQUNuQyxjQUE2QixFQUM3QixPQUFlLEVBQ0wsUUFBYTtRQUh2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7Ozs7UUFNekIsU0FBSTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxFQUFDOzs7OztRQU10QyxVQUFLOzs7O1FBQUcsQ0FBQyxNQUFrQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFDMUYsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxFQUFBOzs7O1FBRzlDLFVBQUs7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUM7Ozs7OztRQU8zRSxlQUFVOzs7O1FBQUcsQ0FBQyxNQUF1QyxFQUFFLEVBQUUsQ0FBQyxJQUFJLHdCQUF3QixDQUNsRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFBO1FBdEJsRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDOzs7WUFWSixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBbEJ4QixnQkFBZ0I7WUFBRSxhQUFhO1lBRVgsTUFBTTs0Q0F3QjdCLE1BQU0sU0FBQyxRQUFROzs7Ozs7OztJQU5sQiwwQ0FBNEI7Ozs7O0lBVzVCLHFDQUFzQzs7Ozs7O0lBTXRDLHNDQUM4Qzs7Ozs7SUFHOUMsc0NBQTJFOzs7Ozs7O0lBTzNFLDJDQUNzRTs7Ozs7SUExQnBFLGtEQUEyQzs7Ozs7SUFDM0MsK0NBQXFDOzs7OztJQUNyQyx3Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTY3JvbGxEaXNwYXRjaGVyLCBWaWV3cG9ydFJ1bGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmxvY2tTY3JvbGxTdHJhdGVneX0gZnJvbSAnLi9ibG9jay1zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtDbG9zZVNjcm9sbFN0cmF0ZWd5LCBDbG9zZVNjcm9sbFN0cmF0ZWd5Q29uZmlnfSBmcm9tICcuL2Nsb3NlLXNjcm9sbC1zdHJhdGVneSc7XG5pbXBvcnQge05vb3BTY3JvbGxTdHJhdGVneX0gZnJvbSAnLi9ub29wLXNjcm9sbC1zdHJhdGVneSc7XG5pbXBvcnQge1xuICBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3ksXG4gIFJlcG9zaXRpb25TY3JvbGxTdHJhdGVneUNvbmZpZyxcbn0gZnJvbSAnLi9yZXBvc2l0aW9uLXNjcm9sbC1zdHJhdGVneSc7XG5cblxuLyoqXG4gKiBPcHRpb25zIGZvciBob3cgYW4gb3ZlcmxheSB3aWxsIGhhbmRsZSBzY3JvbGxpbmcuXG4gKlxuICogVXNlcnMgY2FuIHByb3ZpZGUgYSBjdXN0b20gdmFsdWUgZm9yIGBTY3JvbGxTdHJhdGVneU9wdGlvbnNgIHRvIHJlcGxhY2UgdGhlIGRlZmF1bHRcbiAqIGJlaGF2aW9ycy4gVGhpcyBjbGFzcyBwcmltYXJpbHkgYWN0cyBhcyBhIGZhY3RvcnkgZm9yIFNjcm9sbFN0cmF0ZWd5IGluc3RhbmNlcy5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU3RyYXRlZ3lPcHRpb25zIHtcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3Njcm9sbERpc3BhdGNoZXI6IFNjcm9sbERpc3BhdGNoZXIsXG4gICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlcixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG4gICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAvKiogRG8gbm90aGluZyBvbiBzY3JvbGwuICovXG4gIG5vb3AgPSAoKSA9PiBuZXcgTm9vcFNjcm9sbFN0cmF0ZWd5KCk7XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBvdmVybGF5IGFzIHNvb24gYXMgdGhlIHVzZXIgc2Nyb2xscy5cbiAgICogQHBhcmFtIGNvbmZpZyBDb25maWd1cmF0aW9uIHRvIGJlIHVzZWQgaW5zaWRlIHRoZSBzY3JvbGwgc3RyYXRlZ3kuXG4gICAqL1xuICBjbG9zZSA9IChjb25maWc/OiBDbG9zZVNjcm9sbFN0cmF0ZWd5Q29uZmlnKSA9PiBuZXcgQ2xvc2VTY3JvbGxTdHJhdGVneSh0aGlzLl9zY3JvbGxEaXNwYXRjaGVyLFxuICAgICAgdGhpcy5fbmdab25lLCB0aGlzLl92aWV3cG9ydFJ1bGVyLCBjb25maWcpXG5cbiAgLyoqIEJsb2NrIHNjcm9sbGluZy4gKi9cbiAgYmxvY2sgPSAoKSA9PiBuZXcgQmxvY2tTY3JvbGxTdHJhdGVneSh0aGlzLl92aWV3cG9ydFJ1bGVyLCB0aGlzLl9kb2N1bWVudCk7XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgb3ZlcmxheSdzIHBvc2l0aW9uIG9uIHNjcm9sbC5cbiAgICogQHBhcmFtIGNvbmZpZyBDb25maWd1cmF0aW9uIHRvIGJlIHVzZWQgaW5zaWRlIHRoZSBzY3JvbGwgc3RyYXRlZ3kuXG4gICAqIEFsbG93cyBkZWJvdW5jaW5nIHRoZSByZXBvc2l0aW9uIGNhbGxzLlxuICAgKi9cbiAgcmVwb3NpdGlvbiA9IChjb25maWc/OiBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3lDb25maWcpID0+IG5ldyBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3koXG4gICAgICB0aGlzLl9zY3JvbGxEaXNwYXRjaGVyLCB0aGlzLl92aWV3cG9ydFJ1bGVyLCB0aGlzLl9uZ1pvbmUsIGNvbmZpZylcbn1cbiJdfQ==