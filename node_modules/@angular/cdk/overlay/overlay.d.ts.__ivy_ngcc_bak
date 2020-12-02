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
}
