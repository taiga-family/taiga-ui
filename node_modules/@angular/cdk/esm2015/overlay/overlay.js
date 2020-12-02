/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/overlay.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * Next overlay unique ID.
 * @type {?}
 */
let nextUniqueId = 0;
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
export class Overlay {
    /**
     * @param {?} scrollStrategies
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _positionBuilder
     * @param {?} _keyboardDispatcher
     * @param {?} _injector
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?} _directionality
     * @param {?=} _location
     */
    constructor(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
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
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    create(config) {
        /** @type {?} */
        const host = this._createHostElement();
        /** @type {?} */
        const pane = this._createPaneElement(host);
        /** @type {?} */
        const portalOutlet = this._createPortalOutlet(pane);
        /** @type {?} */
        const overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this._directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
    }
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    position() {
        return this._positionBuilder;
    }
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @private
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    _createPaneElement(host) {
        /** @type {?} */
        const pane = this._document.createElement('div');
        pane.id = `cdk-overlay-${nextUniqueId++}`;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    }
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @private
     * @return {?} Newly-create host element.
     */
    _createHostElement() {
        /** @type {?} */
        const host = this._document.createElement('div');
        this._overlayContainer.getContainerElement().appendChild(host);
        return host;
    }
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @private
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    _createPortalOutlet(pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this._appRef) {
            this._appRef = this._injector.get(ApplicationRef);
        }
        return new DomPortalOutlet(pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
    }
}
Overlay.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Overlay.ctorParameters = () => [
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
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._appRef;
    /**
     * Scrolling strategies that can be used when creating an overlay.
     * @type {?}
     */
    Overlay.prototype.scrollStrategies;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._overlayContainer;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._positionBuilder;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._keyboardDispatcher;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._document;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._directionality;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvb3ZlcmxheS9vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUN4QixNQUFNLEVBQ04sVUFBVSxFQUNWLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7OztJQUlqRCxZQUFZLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7QUFjcEIsTUFBTSxPQUFPLE9BQU87Ozs7Ozs7Ozs7Ozs7SUFHbEIsWUFFbUIsZ0JBQXVDLEVBQ3RDLGlCQUFtQyxFQUNuQyx5QkFBbUQsRUFDbkQsZ0JBQXdDLEVBQ3hDLG1CQUE4QyxFQUM5QyxTQUFtQixFQUNuQixPQUFlLEVBQ0csU0FBYyxFQUNoQyxlQUErQixFQUVuQixTQUFvQjtRQVZqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXVCO1FBQ3RDLHNCQUFpQixHQUFqQixpQkFB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QUF3Qzs7Ozs7SUFDeEMsa0NBQXVDOzs7OztJQUV2Qyw0QkFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtEb21Qb3J0YWxPdXRsZXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtET0NVTUVOVCwgTG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBOZ1pvbmUsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcn0gZnJvbSAnLi9rZXlib2FyZC9vdmVybGF5LWtleWJvYXJkLWRpc3BhdGNoZXInO1xuaW1wb3J0IHtPdmVybGF5Q29uZmlnfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcbmltcG9ydCB7T3ZlcmxheUNvbnRhaW5lcn0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQge092ZXJsYXlSZWZ9IGZyb20gJy4vb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHtPdmVybGF5UG9zaXRpb25CdWlsZGVyfSBmcm9tICcuL3Bvc2l0aW9uL292ZXJsYXktcG9zaXRpb24tYnVpbGRlcic7XG5pbXBvcnQge1Njcm9sbFN0cmF0ZWd5T3B0aW9uc30gZnJvbSAnLi9zY3JvbGwvaW5kZXgnO1xuXG5cbi8qKiBOZXh0IG92ZXJsYXkgdW5pcXVlIElELiAqL1xubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8vIE5vdGUgdGhhdCBPdmVybGF5IGlzICpub3QqIHNjb3BlZCB0byB0aGUgYXBwIHJvb3QgYmVjYXVzZSBvZiB0aGUgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4vLyB3aGljaCBuZWVkcyB0byBiZSBkaWZmZXJlbnQgZGVwZW5kaW5nIG9uIHdoZXJlIE92ZXJsYXlNb2R1bGUgaXMgaW1wb3J0ZWQuXG5cbi8qKlxuICogU2VydmljZSB0byBjcmVhdGUgT3ZlcmxheXMuIE92ZXJsYXlzIGFyZSBkeW5hbWljYWxseSBhZGRlZCBwaWVjZXMgb2YgZmxvYXRpbmcgVUksIG1lYW50IHRvIGJlXG4gKiB1c2VkIGFzIGEgbG93LWxldmVsIGJ1aWxkaW5nIGJsb2NrIGZvciBvdGhlciBjb21wb25lbnRzLiBEaWFsb2dzLCB0b29sdGlwcywgbWVudXMsXG4gKiBzZWxlY3RzLCBldGMuIGNhbiBhbGwgYmUgYnVpbHQgdXNpbmcgb3ZlcmxheXMuIFRoZSBzZXJ2aWNlIHNob3VsZCBwcmltYXJpbHkgYmUgdXNlZCBieSBhdXRob3JzXG4gKiBvZiByZS11c2FibGUgY29tcG9uZW50cyByYXRoZXIgdGhhbiBkZXZlbG9wZXJzIGJ1aWxkaW5nIGVuZC11c2VyIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBBbiBvdmVybGF5ICppcyogYSBQb3J0YWxPdXRsZXQsIHNvIGFueSBraW5kIG9mIFBvcnRhbCBjYW4gYmUgbG9hZGVkIGludG8gb25lLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3ZlcmxheSB7XG4gIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAgICAgICAgIC8qKiBTY3JvbGxpbmcgc3RyYXRlZ2llcyB0aGF0IGNhbiBiZSB1c2VkIHdoZW4gY3JlYXRpbmcgYW4gb3ZlcmxheS4gKi9cbiAgICAgICAgICAgICAgcHVibGljIHNjcm9sbFN0cmF0ZWdpZXM6IFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Bvc2l0aW9uQnVpbGRlcjogT3ZlcmxheVBvc2l0aW9uQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfa2V5Ym9hcmREaXNwYXRjaGVyOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgICAgICAgICAgICBwcml2YXRlIF9kaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgICAgICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgYF9sb2NhdGlvbmAgcGFyYW1ldGVyIHRvIGJlIG1hZGUgcmVxdWlyZWQuXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2xvY2F0aW9uPzogTG9jYXRpb24pIHsgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG92ZXJsYXkuXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiBhcHBsaWVkIHRvIHRoZSBvdmVybGF5LlxuICAgKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgb3ZlcmxheS5cbiAgICovXG4gIGNyZWF0ZShjb25maWc/OiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheVJlZiB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuX2NyZWF0ZUhvc3RFbGVtZW50KCk7XG4gICAgY29uc3QgcGFuZSA9IHRoaXMuX2NyZWF0ZVBhbmVFbGVtZW50KGhvc3QpO1xuICAgIGNvbnN0IHBvcnRhbE91dGxldCA9IHRoaXMuX2NyZWF0ZVBvcnRhbE91dGxldChwYW5lKTtcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoY29uZmlnKTtcblxuICAgIG92ZXJsYXlDb25maWcuZGlyZWN0aW9uID0gb3ZlcmxheUNvbmZpZy5kaXJlY3Rpb24gfHwgdGhpcy5fZGlyZWN0aW9uYWxpdHkudmFsdWU7XG5cbiAgICByZXR1cm4gbmV3IE92ZXJsYXlSZWYocG9ydGFsT3V0bGV0LCBob3N0LCBwYW5lLCBvdmVybGF5Q29uZmlnLCB0aGlzLl9uZ1pvbmUsXG4gICAgICB0aGlzLl9rZXlib2FyZERpc3BhdGNoZXIsIHRoaXMuX2RvY3VtZW50LCB0aGlzLl9sb2NhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHBvc2l0aW9uIGJ1aWxkZXIgdGhhdCBjYW4gYmUgdXNlZCwgdmlhIGZsdWVudCBBUEksXG4gICAqIHRvIGNvbnN0cnVjdCBhbmQgY29uZmlndXJlIGEgcG9zaXRpb24gc3RyYXRlZ3kuXG4gICAqIEByZXR1cm5zIEFuIG92ZXJsYXkgcG9zaXRpb24gYnVpbGRlci5cbiAgICovXG4gIHBvc2l0aW9uKCk6IE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbkJ1aWxkZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgZm9yIGFuIG92ZXJsYXkgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgKiBAcmV0dXJucyBOZXdseS1jcmVhdGVkIHBhbmUgZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUGFuZUVsZW1lbnQoaG9zdDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgcGFuZSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcGFuZS5pZCA9IGBjZGstb3ZlcmxheS0ke25leHRVbmlxdWVJZCsrfWA7XG4gICAgcGFuZS5jbGFzc0xpc3QuYWRkKCdjZGstb3ZlcmxheS1wYW5lJyk7XG4gICAgaG9zdC5hcHBlbmRDaGlsZChwYW5lKTtcblxuICAgIHJldHVybiBwYW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGhvc3QgZWxlbWVudCB0aGF0IHdyYXBzIGFyb3VuZCBhbiBvdmVybGF5XG4gICAqIGFuZCBjYW4gYmUgdXNlZCBmb3IgYWR2YW5jZWQgcG9zaXRpb25pbmcuXG4gICAqIEByZXR1cm5zIE5ld2x5LWNyZWF0ZSBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVIb3N0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmFwcGVuZENoaWxkKGhvc3QpO1xuICAgIHJldHVybiBob3N0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERvbVBvcnRhbE91dGxldCBpbnRvIHdoaWNoIHRoZSBvdmVybGF5IGNvbnRlbnQgY2FuIGJlIGxvYWRlZC5cbiAgICogQHBhcmFtIHBhbmUgVGhlIERPTSBlbGVtZW50IHRvIHR1cm4gaW50byBhIHBvcnRhbCBvdXRsZXQuXG4gICAqIEByZXR1cm5zIEEgcG9ydGFsIG91dGxldCBmb3IgdGhlIGdpdmVuIERPTSBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUG9ydGFsT3V0bGV0KHBhbmU6IEhUTUxFbGVtZW50KTogRG9tUG9ydGFsT3V0bGV0IHtcbiAgICAvLyBXZSBoYXZlIHRvIHJlc29sdmUgdGhlIEFwcGxpY2F0aW9uUmVmIGxhdGVyIGluIG9yZGVyIHRvIGFsbG93IHBlb3BsZVxuICAgIC8vIHRvIHVzZSBvdmVybGF5LWJhc2VkIHByb3ZpZGVycyBkdXJpbmcgYXBwIGluaXRpYWxpemF0aW9uLlxuICAgIGlmICghdGhpcy5fYXBwUmVmKSB7XG4gICAgICB0aGlzLl9hcHBSZWYgPSB0aGlzLl9pbmplY3Rvci5nZXQ8QXBwbGljYXRpb25SZWY+KEFwcGxpY2F0aW9uUmVmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERvbVBvcnRhbE91dGxldChwYW5lLCB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGhpcy5faW5qZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQpO1xuICB9XG59XG4iXX0=