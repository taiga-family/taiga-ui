/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { DomPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT, Location } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, NgZone, Optional, } from '@angular/core';
import { OverlayKeyboardDispatcher } from './keyboard/overlay-keyboard-dispatcher';
import { OverlayConfig } from './overlay-config';
import { OverlayContainer } from './overlay-container';
import { OverlayRef } from './overlay-ref';
import { OverlayPositionBuilder } from './position/overlay-position-builder';
import { ScrollStrategyOptions } from './scroll/index';
/** Next overlay unique ID. */
var nextUniqueId = 0;
// Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
// which needs to be different depending on where OverlayModule is imported.
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, 
    // @breaking-change 8.0.0 `_location` parameter to be made required.
    _location) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
    }
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    Overlay.prototype.create = function (config) {
        var host = this._createHostElement();
        var pane = this._createPaneElement(host);
        var portalOutlet = this._createPortalOutlet(pane);
        var overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this._directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
    };
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    Overlay.prototype.position = function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (host) {
        var pane = this._document.createElement('div');
        pane.id = "cdk-overlay-" + nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    };
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @returns Newly-create host element.
     */
    Overlay.prototype._createHostElement = function () {
        var host = this._document.createElement('div');
        this._overlayContainer.getContainerElement().appendChild(host);
        return host;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal outlet.
     * @returns A portal outlet for the given DOM element.
     */
    Overlay.prototype._createPortalOutlet = function (pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this._appRef) {
            this._appRef = this._injector.get(ApplicationRef);
        }
        return new DomPortalOutlet(pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
    };
    Overlay.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: ScrollStrategyOptions },
        { type: OverlayContainer },
        { type: ComponentFactoryResolver },
        { type: OverlayPositionBuilder },
        { type: OverlayKeyboardDispatcher },
        { type: Injector },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Directionality },
        { type: Location, decorators: [{ type: Optional }] }
    ]; };
    return Overlay;
}());
export { Overlay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvb3ZlcmxheS9vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUN4QixNQUFNLEVBQ04sVUFBVSxFQUNWLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3JELDhCQUE4QjtBQUM5QixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFFckIsNEZBQTRGO0FBQzVGLDRFQUE0RTtBQUU1RTs7Ozs7OztHQU9HO0FBQ0g7SUFJRTtJQUNZLHNFQUFzRTtJQUMvRCxnQkFBdUMsRUFDdEMsaUJBQW1DLEVBQ25DLHlCQUFtRCxFQUNuRCxnQkFBd0MsRUFDeEMsbUJBQThDLEVBQzlDLFNBQW1CLEVBQ25CLE9BQWUsRUFDRyxTQUFjLEVBQ2hDLGVBQStCO0lBQ3ZDLG9FQUFvRTtJQUNo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QVE7Z0JBL0N0QixjQUFjO2dCQUVKLFFBQVEsdUJBZ0RYLFFBQVE7O0lBb0V2QixjQUFDO0NBQUEsQUFwRkQsSUFvRkM7U0FuRlksT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0RvbVBvcnRhbE91dGxldH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge0RPQ1VNRU5ULCBMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIE5nWm9uZSxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyfSBmcm9tICcuL2tleWJvYXJkL292ZXJsYXkta2V5Ym9hcmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQge092ZXJsYXlDb25maWd9IGZyb20gJy4vb3ZlcmxheS1jb25maWcnO1xuaW1wb3J0IHtPdmVybGF5Q29udGFpbmVyfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7T3ZlcmxheVJlZn0gZnJvbSAnLi9vdmVybGF5LXJlZic7XG5pbXBvcnQge092ZXJsYXlQb3NpdGlvbkJ1aWxkZXJ9IGZyb20gJy4vcG9zaXRpb24vb3ZlcmxheS1wb3NpdGlvbi1idWlsZGVyJztcbmltcG9ydCB7U2Nyb2xsU3RyYXRlZ3lPcHRpb25zfSBmcm9tICcuL3Njcm9sbC9pbmRleCc7XG5cblxuLyoqIE5leHQgb3ZlcmxheSB1bmlxdWUgSUQuICovXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuLy8gTm90ZSB0aGF0IE92ZXJsYXkgaXMgKm5vdCogc2NvcGVkIHRvIHRoZSBhcHAgcm9vdCBiZWNhdXNlIG9mIHRoZSBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbi8vIHdoaWNoIG5lZWRzIHRvIGJlIGRpZmZlcmVudCBkZXBlbmRpbmcgb24gd2hlcmUgT3ZlcmxheU1vZHVsZSBpcyBpbXBvcnRlZC5cblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGNyZWF0ZSBPdmVybGF5cy4gT3ZlcmxheXMgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHBpZWNlcyBvZiBmbG9hdGluZyBVSSwgbWVhbnQgdG8gYmVcbiAqIHVzZWQgYXMgYSBsb3ctbGV2ZWwgYnVpbGRpbmcgYmxvY2sgZm9yIG90aGVyIGNvbXBvbmVudHMuIERpYWxvZ3MsIHRvb2x0aXBzLCBtZW51cyxcbiAqIHNlbGVjdHMsIGV0Yy4gY2FuIGFsbCBiZSBidWlsdCB1c2luZyBvdmVybGF5cy4gVGhlIHNlcnZpY2Ugc2hvdWxkIHByaW1hcmlseSBiZSB1c2VkIGJ5IGF1dGhvcnNcbiAqIG9mIHJlLXVzYWJsZSBjb21wb25lbnRzIHJhdGhlciB0aGFuIGRldmVsb3BlcnMgYnVpbGRpbmcgZW5kLXVzZXIgYXBwbGljYXRpb25zLlxuICpcbiAqIEFuIG92ZXJsYXkgKmlzKiBhIFBvcnRhbE91dGxldCwgc28gYW55IGtpbmQgb2YgUG9ydGFsIGNhbiBiZSBsb2FkZWQgaW50byBvbmUuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPdmVybGF5IHtcbiAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgLyoqIFNjcm9sbGluZyBzdHJhdGVnaWVzIHRoYXQgY2FuIGJlIHVzZWQgd2hlbiBjcmVhdGluZyBhbiBvdmVybGF5LiAqL1xuICAgICAgICAgICAgICBwdWJsaWMgc2Nyb2xsU3RyYXRlZ2llczogU2Nyb2xsU3RyYXRlZ3lPcHRpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcG9zaXRpb25CdWlsZGVyOiBPdmVybGF5UG9zaXRpb25CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9rZXlib2FyZERpc3BhdGNoZXI6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICAgICAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCBgX2xvY2F0aW9uYCBwYXJhbWV0ZXIgdG8gYmUgbWFkZSByZXF1aXJlZC5cbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbG9jYXRpb24/OiBMb2NhdGlvbikgeyB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb3ZlcmxheS5cbiAgICogQHBhcmFtIGNvbmZpZyBDb25maWd1cmF0aW9uIGFwcGxpZWQgdG8gdGhlIG92ZXJsYXkuXG4gICAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgY3JlYXRlZCBvdmVybGF5LlxuICAgKi9cbiAgY3JlYXRlKGNvbmZpZz86IE92ZXJsYXlDb25maWcpOiBPdmVybGF5UmVmIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5fY3JlYXRlSG9zdEVsZW1lbnQoKTtcbiAgICBjb25zdCBwYW5lID0gdGhpcy5fY3JlYXRlUGFuZUVsZW1lbnQoaG9zdCk7XG4gICAgY29uc3QgcG9ydGFsT3V0bGV0ID0gdGhpcy5fY3JlYXRlUG9ydGFsT3V0bGV0KHBhbmUpO1xuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyhjb25maWcpO1xuXG4gICAgb3ZlcmxheUNvbmZpZy5kaXJlY3Rpb24gPSBvdmVybGF5Q29uZmlnLmRpcmVjdGlvbiB8fCB0aGlzLl9kaXJlY3Rpb25hbGl0eS52YWx1ZTtcblxuICAgIHJldHVybiBuZXcgT3ZlcmxheVJlZihwb3J0YWxPdXRsZXQsIGhvc3QsIHBhbmUsIG92ZXJsYXlDb25maWcsIHRoaXMuX25nWm9uZSxcbiAgICAgIHRoaXMuX2tleWJvYXJkRGlzcGF0Y2hlciwgdGhpcy5fZG9jdW1lbnQsIHRoaXMuX2xvY2F0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgcG9zaXRpb24gYnVpbGRlciB0aGF0IGNhbiBiZSB1c2VkLCB2aWEgZmx1ZW50IEFQSSxcbiAgICogdG8gY29uc3RydWN0IGFuZCBjb25maWd1cmUgYSBwb3NpdGlvbiBzdHJhdGVneS5cbiAgICogQHJldHVybnMgQW4gb3ZlcmxheSBwb3NpdGlvbiBidWlsZGVyLlxuICAgKi9cbiAgcG9zaXRpb24oKTogT3ZlcmxheVBvc2l0aW9uQnVpbGRlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uQnVpbGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBET00gZWxlbWVudCBmb3IgYW4gb3ZlcmxheSBhbmQgYXBwZW5kcyBpdCB0byB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAqIEByZXR1cm5zIE5ld2x5LWNyZWF0ZWQgcGFuZSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVQYW5lRWxlbWVudChob3N0OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBwYW5lID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBwYW5lLmlkID0gYGNkay1vdmVybGF5LSR7bmV4dFVuaXF1ZUlkKyt9YDtcbiAgICBwYW5lLmNsYXNzTGlzdC5hZGQoJ2Nkay1vdmVybGF5LXBhbmUnKTtcbiAgICBob3N0LmFwcGVuZENoaWxkKHBhbmUpO1xuXG4gICAgcmV0dXJuIHBhbmU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRoYXQgd3JhcHMgYXJvdW5kIGFuIG92ZXJsYXlcbiAgICogYW5kIGNhbiBiZSB1c2VkIGZvciBhZHZhbmNlZCBwb3NpdGlvbmluZy5cbiAgICogQHJldHVybnMgTmV3bHktY3JlYXRlIGhvc3QgZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZUhvc3RFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuYXBwZW5kQ2hpbGQoaG9zdCk7XG4gICAgcmV0dXJuIGhvc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRG9tUG9ydGFsT3V0bGV0IGludG8gd2hpY2ggdGhlIG92ZXJsYXkgY29udGVudCBjYW4gYmUgbG9hZGVkLlxuICAgKiBAcGFyYW0gcGFuZSBUaGUgRE9NIGVsZW1lbnQgdG8gdHVybiBpbnRvIGEgcG9ydGFsIG91dGxldC5cbiAgICogQHJldHVybnMgQSBwb3J0YWwgb3V0bGV0IGZvciB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVQb3J0YWxPdXRsZXQocGFuZTogSFRNTEVsZW1lbnQpOiBEb21Qb3J0YWxPdXRsZXQge1xuICAgIC8vIFdlIGhhdmUgdG8gcmVzb2x2ZSB0aGUgQXBwbGljYXRpb25SZWYgbGF0ZXIgaW4gb3JkZXIgdG8gYWxsb3cgcGVvcGxlXG4gICAgLy8gdG8gdXNlIG92ZXJsYXktYmFzZWQgcHJvdmlkZXJzIGR1cmluZyBhcHAgaW5pdGlhbGl6YXRpb24uXG4gICAgaWYgKCF0aGlzLl9hcHBSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZiA9IHRoaXMuX2luamVjdG9yLmdldDxBcHBsaWNhdGlvblJlZj4oQXBwbGljYXRpb25SZWYpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRG9tUG9ydGFsT3V0bGV0KHBhbmUsIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmLCB0aGlzLl9pbmplY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb2N1bWVudCk7XG4gIH1cbn1cbiJdfQ==