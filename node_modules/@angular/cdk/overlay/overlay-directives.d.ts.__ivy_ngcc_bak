/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { BooleanInput } from '@angular/cdk/coercion';
import { ElementRef, EventEmitter, InjectionToken, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay } from './overlay';
import { OverlayRef } from './overlay-ref';
import { ConnectedOverlayPositionChange } from './position/connected-position';
import { ConnectedPosition, FlexibleConnectedPositionStrategy } from './position/flexible-connected-position-strategy';
import { RepositionScrollStrategy, ScrollStrategy } from './scroll/index';
/** Injection token that determines the scroll handling while the connected overlay is open. */
export declare const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy;
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
export declare class CdkOverlayOrigin {
    /** Reference to the element on which the directive is applied. */
    elementRef: ElementRef;
    constructor(
    /** Reference to the element on which the directive is applied. */
    elementRef: ElementRef);
}
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
export declare class CdkConnectedOverlay implements OnDestroy, OnChanges {
    private _overlay;
    private _dir;
    private _overlayRef;
    private _templatePortal;
    private _hasBackdrop;
    private _lockPosition;
    private _growAfterOpen;
    private _flexibleDimensions;
    private _push;
    private _backdropSubscription;
    private _offsetX;
    private _offsetY;
    private _position;
    private _scrollStrategyFactory;
    /** Origin for the connected overlay. */
    origin: CdkOverlayOrigin;
    /** Registered connected position pairs. */
    positions: ConnectedPosition[];
    /**
     * This input overrides the positions input if specified. It lets users pass
     * in arbitrary positioning strategies.
     */
    positionStrategy: FlexibleConnectedPositionStrategy;
    /** The offset in pixels for the overlay connection point on the x-axis */
    get offsetX(): number;
    set offsetX(offsetX: number);
    /** The offset in pixels for the overlay connection point on the y-axis */
    get offsetY(): number;
    set offsetY(offsetY: number);
    /** The width of the overlay panel. */
    width: number | string;
    /** The height of the overlay panel. */
    height: number | string;
    /** The min width of the overlay panel. */
    minWidth: number | string;
    /** The min height of the overlay panel. */
    minHeight: number | string;
    /** The custom class to be set on the backdrop element. */
    backdropClass: string;
    /** The custom class to add to the overlay pane element. */
    panelClass: string | string[];
    /** Margin between the overlay and the viewport edges. */
    viewportMargin: number;
    /** Strategy to be used when handling scroll events while the overlay is open. */
    scrollStrategy: ScrollStrategy;
    /** Whether the overlay is open. */
    open: boolean;
    /** CSS selector which to set the transform origin. */
    transformOriginSelector: string;
    /** Whether or not the overlay should attach a backdrop. */
    get hasBackdrop(): any;
    set hasBackdrop(value: any);
    /** Whether or not the overlay should be locked when scrolling. */
    get lockPosition(): any;
    set lockPosition(value: any);
    /** Whether the overlay's width and height can be constrained to fit within the viewport. */
    get flexibleDimensions(): boolean;
    set flexibleDimensions(value: boolean);
    /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
    get growAfterOpen(): boolean;
    set growAfterOpen(value: boolean);
    /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
    get push(): boolean;
    set push(value: boolean);
    /** Event emitted when the backdrop is clicked. */
    backdropClick: EventEmitter<MouseEvent>;
    /** Event emitted when the position has changed. */
    positionChange: EventEmitter<ConnectedOverlayPositionChange>;
    /** Event emitted when the overlay has been attached. */
    attach: EventEmitter<void>;
    /** Event emitted when the overlay has been detached. */
    detach: EventEmitter<void>;
    /** Emits when there are keyboard events that are targeted at the overlay. */
    overlayKeydown: EventEmitter<KeyboardEvent>;
    constructor(_overlay: Overlay, templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, scrollStrategyFactory: any, _dir: Directionality);
    /** The associated overlay reference. */
    get overlayRef(): OverlayRef;
    /** The element's layout direction. */
    get dir(): Direction;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** Creates an overlay */
    private _createOverlay;
    /** Builds the overlay config based on the directive's inputs */
    private _buildConfig;
    /** Updates the state of a position strategy, based on the values of the directive inputs. */
    private _updatePositionStrategy;
    /** Returns the position strategy of the overlay to be set on the overlay config */
    private _createPositionStrategy;
    /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
    private _attachOverlay;
    /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
    private _detachOverlay;
    static ngAcceptInputType_hasBackdrop: BooleanInput;
    static ngAcceptInputType_lockPosition: BooleanInput;
    static ngAcceptInputType_flexibleDimensions: BooleanInput;
    static ngAcceptInputType_growAfterOpen: BooleanInput;
    static ngAcceptInputType_push: BooleanInput;
}
/** @docs-private */
export declare function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => RepositionScrollStrategy;
/** @docs-private */
export declare const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
};
