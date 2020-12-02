/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { Location } from '@angular/common';
import { ComponentFactoryResolver, Injector, NgZone } from '@angular/core';
import { OverlayKeyboardDispatcher } from './keyboard/overlay-keyboard-dispatcher';
import { OverlayConfig } from './overlay-config';
import { OverlayContainer } from './overlay-container';
import { OverlayRef } from './overlay-ref';
import { OverlayPositionBuilder } from './position/overlay-position-builder';
import { ScrollStrategyOptions } from './scroll/index';
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
import * as ɵngcc0 from '@angular/core';
export declare class Overlay {
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies: ScrollStrategyOptions;
    private _overlayContainer;
    private _componentFactoryResolver;
    private _positionBuilder;
    private _keyboardDispatcher;
    private _injector;
    private _ngZone;
    private _document;
    private _directionality;
    private _location?;
    private _appRef;
    constructor(
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies: ScrollStrategyOptions, _overlayContainer: OverlayContainer, _componentFactoryResolver: ComponentFactoryResolver, _positionBuilder: OverlayPositionBuilder, _keyboardDispatcher: OverlayKeyboardDispatcher, _injector: Injector, _ngZone: NgZone, _document: any, _directionality: Directionality, _location?: Location | undefined);
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    create(config?: OverlayConfig): OverlayRef;
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    position(): OverlayPositionBuilder;
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    private _createPaneElement;
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @returns Newly-create host element.
     */
    private _createHostElement;
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal outlet.
     * @returns A portal outlet for the given DOM element.
     */
    private _createPortalOutlet;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Overlay, [null, null, null, null, null, null, null, null, null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<Overlay>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5kLnRzIiwic291cmNlcyI6WyJvdmVybGF5LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyIH0gZnJvbSAnLi9rZXlib2FyZC9vdmVybGF5LWtleWJvYXJkLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgT3ZlcmxheUNvbmZpZyB9IGZyb20gJy4vb3ZlcmxheS1jb25maWcnO1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJy4vb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgT3ZlcmxheVBvc2l0aW9uQnVpbGRlciB9IGZyb20gJy4vcG9zaXRpb24vb3ZlcmxheS1wb3NpdGlvbi1idWlsZGVyJztcbmltcG9ydCB7IFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4vc2Nyb2xsL2luZGV4Jztcbi8qKlxuICogU2VydmljZSB0byBjcmVhdGUgT3ZlcmxheXMuIE92ZXJsYXlzIGFyZSBkeW5hbWljYWxseSBhZGRlZCBwaWVjZXMgb2YgZmxvYXRpbmcgVUksIG1lYW50IHRvIGJlXG4gKiB1c2VkIGFzIGEgbG93LWxldmVsIGJ1aWxkaW5nIGJsb2NrIGZvciBvdGhlciBjb21wb25lbnRzLiBEaWFsb2dzLCB0b29sdGlwcywgbWVudXMsXG4gKiBzZWxlY3RzLCBldGMuIGNhbiBhbGwgYmUgYnVpbHQgdXNpbmcgb3ZlcmxheXMuIFRoZSBzZXJ2aWNlIHNob3VsZCBwcmltYXJpbHkgYmUgdXNlZCBieSBhdXRob3JzXG4gKiBvZiByZS11c2FibGUgY29tcG9uZW50cyByYXRoZXIgdGhhbiBkZXZlbG9wZXJzIGJ1aWxkaW5nIGVuZC11c2VyIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBBbiBvdmVybGF5ICppcyogYSBQb3J0YWxPdXRsZXQsIHNvIGFueSBraW5kIG9mIFBvcnRhbCBjYW4gYmUgbG9hZGVkIGludG8gb25lLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdmVybGF5IHtcbiAgICAvKiogU2Nyb2xsaW5nIHN0cmF0ZWdpZXMgdGhhdCBjYW4gYmUgdXNlZCB3aGVuIGNyZWF0aW5nIGFuIG92ZXJsYXkuICovXG4gICAgc2Nyb2xsU3RyYXRlZ2llczogU2Nyb2xsU3RyYXRlZ3lPcHRpb25zO1xuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI7XG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICAgIHByaXZhdGUgX3Bvc2l0aW9uQnVpbGRlcjtcbiAgICBwcml2YXRlIF9rZXlib2FyZERpc3BhdGNoZXI7XG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX2RvY3VtZW50O1xuICAgIHByaXZhdGUgX2RpcmVjdGlvbmFsaXR5O1xuICAgIHByaXZhdGUgX2xvY2F0aW9uPztcbiAgICBwcml2YXRlIF9hcHBSZWY7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLyoqIFNjcm9sbGluZyBzdHJhdGVnaWVzIHRoYXQgY2FuIGJlIHVzZWQgd2hlbiBjcmVhdGluZyBhbiBvdmVybGF5LiAqL1xuICAgIHNjcm9sbFN0cmF0ZWdpZXM6IFNjcm9sbFN0cmF0ZWd5T3B0aW9ucywgX292ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgX3Bvc2l0aW9uQnVpbGRlcjogT3ZlcmxheVBvc2l0aW9uQnVpbGRlciwgX2tleWJvYXJkRGlzcGF0Y2hlcjogT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgX2luamVjdG9yOiBJbmplY3RvciwgX25nWm9uZTogTmdab25lLCBfZG9jdW1lbnQ6IGFueSwgX2RpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSwgX2xvY2F0aW9uPzogTG9jYXRpb24gfCB1bmRlZmluZWQpO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb3ZlcmxheS5cbiAgICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZ3VyYXRpb24gYXBwbGllZCB0byB0aGUgb3ZlcmxheS5cbiAgICAgKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBjcmVhdGUoY29uZmlnPzogT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlSZWY7XG4gICAgLyoqXG4gICAgICogR2V0cyBhIHBvc2l0aW9uIGJ1aWxkZXIgdGhhdCBjYW4gYmUgdXNlZCwgdmlhIGZsdWVudCBBUEksXG4gICAgICogdG8gY29uc3RydWN0IGFuZCBjb25maWd1cmUgYSBwb3NpdGlvbiBzdHJhdGVneS5cbiAgICAgKiBAcmV0dXJucyBBbiBvdmVybGF5IHBvc2l0aW9uIGJ1aWxkZXIuXG4gICAgICovXG4gICAgcG9zaXRpb24oKTogT3ZlcmxheVBvc2l0aW9uQnVpbGRlcjtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBET00gZWxlbWVudCBmb3IgYW4gb3ZlcmxheSBhbmQgYXBwZW5kcyBpdCB0byB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgICogQHJldHVybnMgTmV3bHktY3JlYXRlZCBwYW5lIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jcmVhdGVQYW5lRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBob3N0IGVsZW1lbnQgdGhhdCB3cmFwcyBhcm91bmQgYW4gb3ZlcmxheVxuICAgICAqIGFuZCBjYW4gYmUgdXNlZCBmb3IgYWR2YW5jZWQgcG9zaXRpb25pbmcuXG4gICAgICogQHJldHVybnMgTmV3bHktY3JlYXRlIGhvc3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jcmVhdGVIb3N0RWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBEb21Qb3J0YWxPdXRsZXQgaW50byB3aGljaCB0aGUgb3ZlcmxheSBjb250ZW50IGNhbiBiZSBsb2FkZWQuXG4gICAgICogQHBhcmFtIHBhbmUgVGhlIERPTSBlbGVtZW50IHRvIHR1cm4gaW50byBhIHBvcnRhbCBvdXRsZXQuXG4gICAgICogQHJldHVybnMgQSBwb3J0YWwgb3V0bGV0IGZvciB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY3JlYXRlUG9ydGFsT3V0bGV0O1xufVxuIl19