/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ComponentPortal, PortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ComponentRef, EmbeddedViewRef, NgZone } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { OverlayKeyboardDispatcher } from './keyboard/overlay-keyboard-dispatcher';
import { OverlayConfig } from './overlay-config';
import { OverlayReference } from './overlay-reference';
import { PositionStrategy } from './position/position-strategy';
import { ScrollStrategy } from './scroll';
/** An object where all of its properties cannot be written. */
export declare type ImmutableObject<T> = {
    readonly [P in keyof T]: T[P];
};
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
export declare class OverlayRef implements PortalOutlet, OverlayReference {
    private _portalOutlet;
    private _host;
    private _pane;
    private _config;
    private _ngZone;
    private _keyboardDispatcher;
    private _document;
    private _location?;
    private _backdropElement;
    private _backdropClick;
    private _attachments;
    private _detachments;
    private _positionStrategy;
    private _scrollStrategy;
    private _locationChanges;
    private _backdropClickHandler;
    /**
     * Reference to the parent of the `_host` at the time it was detached. Used to restore
     * the `_host` to its original position in the DOM when it gets re-attached.
     */
    private _previousHostParent;
    /** Stream of keydown events dispatched to this overlay. */
    _keydownEvents: Subject<KeyboardEvent>;
    constructor(_portalOutlet: PortalOutlet, _host: HTMLElement, _pane: HTMLElement, _config: ImmutableObject<OverlayConfig>, _ngZone: NgZone, _keyboardDispatcher: OverlayKeyboardDispatcher, _document: Document, _location?: Location | undefined);
    /** The overlay's HTML element */
    get overlayElement(): HTMLElement;
    /** The overlay's backdrop HTML element. */
    get backdropElement(): HTMLElement | null;
    /**
     * Wrapper around the panel element. Can be used for advanced
     * positioning where a wrapper with specific styling is
     * required around the overlay pane.
     */
    get hostElement(): HTMLElement;
    attach<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attach<T>(portal: TemplatePortal<T>): EmbeddedViewRef<T>;
    attach(portal: any): any;
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    detach(): any;
    /** Cleans up the overlay from the DOM. */
    dispose(): void;
    /** Whether the overlay has attached content. */
    hasAttached(): boolean;
    /** Gets an observable that emits when the backdrop has been clicked. */
    backdropClick(): Observable<MouseEvent>;
    /** Gets an observable that emits when the overlay has been attached. */
    attachments(): Observable<void>;
    /** Gets an observable that emits when the overlay has been detached. */
    detachments(): Observable<void>;
    /** Gets an observable of keydown events targeted to this overlay. */
    keydownEvents(): Observable<KeyboardEvent>;
    /** Gets the current overlay configuration, which is immutable. */
    getConfig(): OverlayConfig;
    /** Updates the position of the overlay based on the position strategy. */
    updatePosition(): void;
    /** Switches to a new position strategy and updates the overlay position. */
    updatePositionStrategy(strategy: PositionStrategy): void;
    /** Update the size properties of the overlay. */
    updateSize(sizeConfig: OverlaySizeConfig): void;
    /** Sets the LTR/RTL direction for the overlay. */
    setDirection(dir: Direction | Directionality): void;
    /** Add a CSS class or an array of classes to the overlay pane. */
    addPanelClass(classes: string | string[]): void;
    /** Remove a CSS class or an array of classes from the overlay pane. */
    removePanelClass(classes: string | string[]): void;
    /**
     * Returns the layout direction of the overlay panel.
     */
    getDirection(): Direction;
    /** Switches to a new scroll strategy. */
    updateScrollStrategy(strategy: ScrollStrategy): void;
    /** Updates the text direction of the overlay panel. */
    private _updateElementDirection;
    /** Updates the size of the overlay element based on the overlay config. */
    private _updateElementSize;
    /** Toggles the pointer events for the overlay pane element. */
    private _togglePointerEvents;
    /** Attaches a backdrop for this overlay. */
    private _attachBackdrop;
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     */
    private _updateStackingOrder;
    /** Detaches the backdrop (if any) associated with the overlay. */
    detachBackdrop(): void;
    /** Toggles a single CSS class or an array of classes on an element. */
    private _toggleClasses;
    /** Detaches the overlay content next time the zone stabilizes. */
    private _detachContentWhenStable;
    /** Disposes of a scroll strategy. */
    private _disposeScrollStrategy;
}
/** Size properties for an overlay. */
export interface OverlaySizeConfig {
    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
}
