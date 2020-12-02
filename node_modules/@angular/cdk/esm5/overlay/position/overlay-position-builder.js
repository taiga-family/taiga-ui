/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { OverlayContainer } from '../overlay-container';
import { ConnectedPositionStrategy } from './connected-position-strategy';
import { FlexibleConnectedPositionStrategy, } from './flexible-connected-position-strategy';
import { GlobalPositionStrategy } from './global-position-strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "../overlay-container";
/** Builder for overlay position strategy. */
var OverlayPositionBuilder = /** @class */ (function () {
    function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
    }
    /**
     * Creates a global position strategy.
     */
    OverlayPositionBuilder.prototype.global = function () {
        return new GlobalPositionStrategy();
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     * @deprecated Use `flexibleConnectedTo` instead.
     * @breaking-change 8.0.0
     */
    OverlayPositionBuilder.prototype.connectedTo = function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    };
    /**
     * Creates a flexible position strategy.
     * @param origin Origin relative to which to position the overlay.
     */
    OverlayPositionBuilder.prototype.flexibleConnectedTo = function (origin) {
        return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    };
    OverlayPositionBuilder.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OverlayPositionBuilder.ctorParameters = function () { return [
        { type: ViewportRuler },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform },
        { type: OverlayContainer }
    ]; };
    OverlayPositionBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(i0.ɵɵinject(i1.ViewportRuler), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i3.Platform), i0.ɵɵinject(i4.OverlayContainer)); }, token: OverlayPositionBuilder, providedIn: "root" });
    return OverlayPositionBuilder;
}());
export { OverlayPositionBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3NpdGlvbi1idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Bvc2l0aW9uL292ZXJsYXktcG9zaXRpb24tYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQWEsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUd0RCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsaUNBQWlDLEdBRWxDLE1BQU0sd0NBQXdDLENBQUM7QUFDaEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7OztBQUdsRSw2Q0FBNkM7QUFDN0M7SUFFRSxnQ0FDWSxjQUE2QixFQUE0QixTQUFjLEVBQ3ZFLFNBQW1CLEVBQVUsaUJBQW1DO1FBRGhFLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQTRCLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDdkUsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDO0lBRWhGOztPQUVHO0lBQ0gsdUNBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsNENBQVcsR0FBWCxVQUNJLFVBQXNCLEVBQ3RCLFNBQW1DLEVBQ25DLFVBQXFDO1FBQ3ZDLE9BQU8sSUFBSSx5QkFBeUIsQ0FDaEMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3RGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxvREFBbUIsR0FBbkIsVUFBb0IsTUFBK0M7UUFFakUsT0FBTyxJQUFJLGlDQUFpQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3BGLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBdENGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7Z0JBaEJ4QixhQUFhO2dEQW1CeUIsTUFBTSxTQUFDLFFBQVE7Z0JBcEJyRCxRQUFRO2dCQUtSLGdCQUFnQjs7O2lDQWJ4QjtDQWlFQyxBQXhDRCxJQXdDQztTQXZDWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7Vmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge092ZXJsYXlDb250YWluZXJ9IGZyb20gJy4uL292ZXJsYXktY29udGFpbmVyJztcblxuaW1wb3J0IHtPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sIE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb259IGZyb20gJy4vY29ubmVjdGVkLXBvc2l0aW9uJztcbmltcG9ydCB7Q29ubmVjdGVkUG9zaXRpb25TdHJhdGVneX0gZnJvbSAnLi9jb25uZWN0ZWQtcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHtcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3lPcmlnaW4sXG59IGZyb20gJy4vZmxleGlibGUtY29ubmVjdGVkLXBvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7R2xvYmFsUG9zaXRpb25TdHJhdGVneX0gZnJvbSAnLi9nbG9iYWwtcG9zaXRpb24tc3RyYXRlZ3knO1xuXG5cbi8qKiBCdWlsZGVyIGZvciBvdmVybGF5IHBvc2l0aW9uIHN0cmF0ZWd5LiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVBvc2l0aW9uQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlciwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcikge31cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdsb2JhbCBwb3NpdGlvbiBzdHJhdGVneS5cbiAgICovXG4gIGdsb2JhbCgpOiBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICByZXR1cm4gbmV3IEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVsYXRpdmUgcG9zaXRpb24gc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSBlbGVtZW50UmVmXG4gICAqIEBwYXJhbSBvcmlnaW5Qb3NcbiAgICogQHBhcmFtIG92ZXJsYXlQb3NcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBmbGV4aWJsZUNvbm5lY3RlZFRvYCBpbnN0ZWFkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAqL1xuICBjb25uZWN0ZWRUbyhcbiAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICBvcmlnaW5Qb3M6IE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbixcbiAgICAgIG92ZXJsYXlQb3M6IE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24pOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICByZXR1cm4gbmV3IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3koXG4gICAgICAgIG9yaWdpblBvcywgb3ZlcmxheVBvcywgZWxlbWVudFJlZiwgdGhpcy5fdmlld3BvcnRSdWxlciwgdGhpcy5fZG9jdW1lbnQsIHRoaXMuX3BsYXRmb3JtLFxuICAgICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZmxleGlibGUgcG9zaXRpb24gc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSBvcmlnaW4gT3JpZ2luIHJlbGF0aXZlIHRvIHdoaWNoIHRvIHBvc2l0aW9uIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgZmxleGlibGVDb25uZWN0ZWRUbyhvcmlnaW46IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneU9yaWdpbik6XG4gICAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICByZXR1cm4gbmV3IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneShvcmlnaW4sIHRoaXMuX3ZpZXdwb3J0UnVsZXIsIHRoaXMuX2RvY3VtZW50LFxuICAgICAgICB0aGlzLl9wbGF0Zm9ybSwgdGhpcy5fb3ZlcmxheUNvbnRhaW5lcik7XG4gIH1cblxufVxuIl19