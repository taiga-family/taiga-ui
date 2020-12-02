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
var ScrollStrategyOptions = /** @class */ (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /** Do nothing on scroll. */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = function (config) { return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config); };
        /** Block scrolling. */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) { return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config); };
        this._document = document;
    }
    ScrollStrategyOptions.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ScrollStrategyOptions.ctorParameters = function () { return [
        { type: ScrollDispatcher },
        { type: ViewportRuler },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ScrollStrategyOptions.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(i0.ɵɵinject(i1.ScrollDispatcher), i0.ɵɵinject(i1.ViewportRuler), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.DOCUMENT)); }, token: ScrollStrategyOptions, providedIn: "root" });
    return ScrollStrategyOptions;
}());
export { ScrollStrategyOptions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvc2Nyb2xsL3Njcm9sbC1zdHJhdGVneS1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxtQkFBbUIsRUFBNEIsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsd0JBQXdCLEdBRXpCLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFHdEM7Ozs7O0dBS0c7QUFDSDtJQUlFLCtCQUNVLGlCQUFtQyxFQUNuQyxjQUE2QixFQUM3QixPQUFlLEVBQ0wsUUFBYTtRQUpqQyxpQkFNRztRQUxPLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUt6Qiw0QkFBNEI7UUFDNUIsU0FBSSxHQUFHLGNBQU0sT0FBQSxJQUFJLGtCQUFrQixFQUFFLEVBQXhCLENBQXdCLENBQUM7UUFFdEM7OztXQUdHO1FBQ0gsVUFBSyxHQUFHLFVBQUMsTUFBa0MsSUFBSyxPQUFBLElBQUksbUJBQW1CLENBQUMsS0FBSSxDQUFDLGlCQUFpQixFQUMxRixLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLEVBREUsQ0FDRixDQUFBO1FBRTlDLHVCQUF1QjtRQUN2QixVQUFLLEdBQUcsY0FBTSxPQUFBLElBQUksbUJBQW1CLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQTVELENBQTRELENBQUM7UUFFM0U7Ozs7V0FJRztRQUNILGVBQVUsR0FBRyxVQUFDLE1BQXVDLElBQUssT0FBQSxJQUFJLHdCQUF3QixDQUNsRixLQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQURaLENBQ1ksQ0FBQTtRQXRCbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7Z0JBVkosVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnQkFsQnhCLGdCQUFnQjtnQkFBRSxhQUFhO2dCQUVYLE1BQU07Z0RBd0I3QixNQUFNLFNBQUMsUUFBUTs7O2dDQWxDcEI7Q0EwREMsQUFoQ0QsSUFnQ0M7U0EvQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U2Nyb2xsRGlzcGF0Y2hlciwgVmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jsb2NrU2Nyb2xsU3RyYXRlZ3l9IGZyb20gJy4vYmxvY2stc2Nyb2xsLXN0cmF0ZWd5JztcbmltcG9ydCB7Q2xvc2VTY3JvbGxTdHJhdGVneSwgQ2xvc2VTY3JvbGxTdHJhdGVneUNvbmZpZ30gZnJvbSAnLi9jbG9zZS1zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtOb29wU2Nyb2xsU3RyYXRlZ3l9IGZyb20gJy4vbm9vcC1zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtcbiAgUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5LFxuICBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3lDb25maWcsXG59IGZyb20gJy4vcmVwb3NpdGlvbi1zY3JvbGwtc3RyYXRlZ3knO1xuXG5cbi8qKlxuICogT3B0aW9ucyBmb3IgaG93IGFuIG92ZXJsYXkgd2lsbCBoYW5kbGUgc2Nyb2xsaW5nLlxuICpcbiAqIFVzZXJzIGNhbiBwcm92aWRlIGEgY3VzdG9tIHZhbHVlIGZvciBgU2Nyb2xsU3RyYXRlZ3lPcHRpb25zYCB0byByZXBsYWNlIHRoZSBkZWZhdWx0XG4gKiBiZWhhdmlvcnMuIFRoaXMgY2xhc3MgcHJpbWFyaWx5IGFjdHMgYXMgYSBmYWN0b3J5IGZvciBTY3JvbGxTdHJhdGVneSBpbnN0YW5jZXMuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxuICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgLyoqIERvIG5vdGhpbmcgb24gc2Nyb2xsLiAqL1xuICBub29wID0gKCkgPT4gbmV3IE5vb3BTY3JvbGxTdHJhdGVneSgpO1xuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgb3ZlcmxheSBhcyBzb29uIGFzIHRoZSB1c2VyIHNjcm9sbHMuXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiB0byBiZSB1c2VkIGluc2lkZSB0aGUgc2Nyb2xsIHN0cmF0ZWd5LlxuICAgKi9cbiAgY2xvc2UgPSAoY29uZmlnPzogQ2xvc2VTY3JvbGxTdHJhdGVneUNvbmZpZykgPT4gbmV3IENsb3NlU2Nyb2xsU3RyYXRlZ3kodGhpcy5fc2Nyb2xsRGlzcGF0Y2hlcixcbiAgICAgIHRoaXMuX25nWm9uZSwgdGhpcy5fdmlld3BvcnRSdWxlciwgY29uZmlnKVxuXG4gIC8qKiBCbG9jayBzY3JvbGxpbmcuICovXG4gIGJsb2NrID0gKCkgPT4gbmV3IEJsb2NrU2Nyb2xsU3RyYXRlZ3kodGhpcy5fdmlld3BvcnRSdWxlciwgdGhpcy5fZG9jdW1lbnQpO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIG92ZXJsYXkncyBwb3NpdGlvbiBvbiBzY3JvbGwuXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiB0byBiZSB1c2VkIGluc2lkZSB0aGUgc2Nyb2xsIHN0cmF0ZWd5LlxuICAgKiBBbGxvd3MgZGVib3VuY2luZyB0aGUgcmVwb3NpdGlvbiBjYWxscy5cbiAgICovXG4gIHJlcG9zaXRpb24gPSAoY29uZmlnPzogUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5Q29uZmlnKSA9PiBuZXcgUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5KFxuICAgICAgdGhpcy5fc2Nyb2xsRGlzcGF0Y2hlciwgdGhpcy5fdmlld3BvcnRSdWxlciwgdGhpcy5fbmdab25lLCBjb25maWcpXG59XG4iXX0=