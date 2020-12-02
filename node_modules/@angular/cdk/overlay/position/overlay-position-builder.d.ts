/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { ElementRef } from '@angular/core';
import { OverlayContainer } from '../overlay-container';
import { OriginConnectionPosition, OverlayConnectionPosition } from './connected-position';
import { ConnectedPositionStrategy } from './connected-position-strategy';
import { FlexibleConnectedPositionStrategy, FlexibleConnectedPositionStrategyOrigin } from './flexible-connected-position-strategy';
import { GlobalPositionStrategy } from './global-position-strategy';
/** Builder for overlay position strategy. */
import * as ɵngcc0 from '@angular/core';
export declare class OverlayPositionBuilder {
    private _viewportRuler;
    private _document;
    private _platform;
    private _overlayContainer;
    constructor(_viewportRuler: ViewportRuler, _document: any, _platform: Platform, _overlayContainer: OverlayContainer);
    /**
     * Creates a global position strategy.
     */
    global(): GlobalPositionStrategy;
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     * @deprecated Use `flexibleConnectedTo` instead.
     * @breaking-change 8.0.0
     */
    connectedTo(elementRef: ElementRef, originPos: OriginConnectionPosition, overlayPos: OverlayConnectionPosition): ConnectedPositionStrategy;
    /**
     * Creates a flexible position strategy.
     * @param origin Origin relative to which to position the overlay.
     */
    flexibleConnectedTo(origin: FlexibleConnectedPositionStrategyOrigin): FlexibleConnectedPositionStrategy;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OverlayPositionBuilder, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3NpdGlvbi1idWlsZGVyLmQudHMiLCJzb3VyY2VzIjpbIm92ZXJsYXktcG9zaXRpb24tYnVpbGRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4uL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbiwgT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbiB9IGZyb20gJy4vY29ubmVjdGVkLXBvc2l0aW9uJztcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL2Nvbm5lY3RlZC1wb3NpdGlvbi1zdHJhdGVneSc7XG5pbXBvcnQgeyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneU9yaWdpbiB9IGZyb20gJy4vZmxleGlibGUtY29ubmVjdGVkLXBvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7IEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL2dsb2JhbC1wb3NpdGlvbi1zdHJhdGVneSc7XG4vKiogQnVpbGRlciBmb3Igb3ZlcmxheSBwb3NpdGlvbiBzdHJhdGVneS4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIge1xuICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfcGxhdGZvcm07XG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjtcbiAgICBjb25zdHJ1Y3Rvcihfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlciwgX2RvY3VtZW50OiBhbnksIF9wbGF0Zm9ybTogUGxhdGZvcm0sIF9vdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZ2xvYmFsIHBvc2l0aW9uIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIGdsb2JhbCgpOiBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSByZWxhdGl2ZSBwb3NpdGlvbiBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0gZWxlbWVudFJlZlxuICAgICAqIEBwYXJhbSBvcmlnaW5Qb3NcbiAgICAgKiBAcGFyYW0gb3ZlcmxheVBvc1xuICAgICAqIEBkZXByZWNhdGVkIFVzZSBgZmxleGlibGVDb25uZWN0ZWRUb2AgaW5zdGVhZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAgICovXG4gICAgY29ubmVjdGVkVG8oZWxlbWVudFJlZjogRWxlbWVudFJlZiwgb3JpZ2luUG9zOiBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sIG92ZXJsYXlQb3M6IE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24pOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBmbGV4aWJsZSBwb3NpdGlvbiBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0gb3JpZ2luIE9yaWdpbiByZWxhdGl2ZSB0byB3aGljaCB0byBwb3NpdGlvbiB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBmbGV4aWJsZUNvbm5lY3RlZFRvKG9yaWdpbjogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5T3JpZ2luKTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xufVxuIl19