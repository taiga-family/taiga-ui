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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkOverlayOrigin, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkOverlayOrigin, "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", ["cdkOverlayOrigin"], {}, {}, never>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkConnectedOverlay, [null, null, null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkConnectedOverlay, "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", ["cdkConnectedOverlay"], { "viewportMargin": "cdkConnectedOverlayViewportMargin"; "open": "cdkConnectedOverlayOpen"; "scrollStrategy": "cdkConnectedOverlayScrollStrategy"; "offsetX": "cdkConnectedOverlayOffsetX"; "offsetY": "cdkConnectedOverlayOffsetY"; "hasBackdrop": "cdkConnectedOverlayHasBackdrop"; "lockPosition": "cdkConnectedOverlayLockPosition"; "flexibleDimensions": "cdkConnectedOverlayFlexibleDimensions"; "growAfterOpen": "cdkConnectedOverlayGrowAfterOpen"; "push": "cdkConnectedOverlayPush"; "positions": "cdkConnectedOverlayPositions"; "origin": "cdkConnectedOverlayOrigin"; "positionStrategy": "cdkConnectedOverlayPositionStrategy"; "width": "cdkConnectedOverlayWidth"; "height": "cdkConnectedOverlayHeight"; "minWidth": "cdkConnectedOverlayMinWidth"; "minHeight": "cdkConnectedOverlayMinHeight"; "backdropClass": "cdkConnectedOverlayBackdropClass"; "panelClass": "cdkConnectedOverlayPanelClass"; "transformOriginSelector": "cdkConnectedOverlayTransformOriginOn"; }, { "backdropClick": "backdropClick"; "positionChange": "positionChange"; "attach": "attach"; "detach": "detach"; "overlayKeydown": "overlayKeydown"; }, never>;
}
/** @docs-private */
export declare function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => RepositionScrollStrategy;
/** @docs-private */
export declare const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1kaXJlY3RpdmVzLmQudHMiLCJzb3VyY2VzIjpbIm92ZXJsYXktZGlyZWN0aXZlcy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3Rpb25Ub2tlbiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICcuL292ZXJsYXktcmVmJztcbmltcG9ydCB7IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJy4vcG9zaXRpb24vY29ubmVjdGVkLXBvc2l0aW9uJztcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uLCBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uL2ZsZXhpYmxlLWNvbm5lY3RlZC1wb3NpdGlvbi1zdHJhdGVneSc7XG5pbXBvcnQgeyBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3ksIFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi9zY3JvbGwvaW5kZXgnO1xuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGRldGVybWluZXMgdGhlIHNjcm9sbCBoYW5kbGluZyB3aGlsZSB0aGUgY29ubmVjdGVkIG92ZXJsYXkgaXMgb3Blbi4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENES19DT05ORUNURURfT1ZFUkxBWV9TQ1JPTExfU1RSQVRFR1k6IEluamVjdGlvblRva2VuPCgpID0+IFNjcm9sbFN0cmF0ZWd5Pjtcbi8qKiBAZG9jcy1wcml2YXRlIEBkZXByZWNhdGVkIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENES19DT05ORUNURURfT1ZFUkxBWV9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWShvdmVybGF5OiBPdmVybGF5KTogKCkgPT4gU2Nyb2xsU3RyYXRlZ3k7XG4vKipcbiAqIERpcmVjdGl2ZSBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgdG8gbWFrZSBpdCB1c2FibGUgYXMgYW4gb3JpZ2luIGZvciBhbiBPdmVybGF5IHVzaW5nIGFcbiAqIENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka092ZXJsYXlPcmlnaW4ge1xuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIGRpcmVjdGl2ZSBpcyBhcHBsaWVkLiAqL1xuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBvbiB3aGljaCB0aGUgZGlyZWN0aXZlIGlzIGFwcGxpZWQuICovXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZik7XG59XG4vKipcbiAqIERpcmVjdGl2ZSB0byBmYWNpbGl0YXRlIGRlY2xhcmF0aXZlIGNyZWF0aW9uIG9mIGFuXG4gKiBPdmVybGF5IHVzaW5nIGEgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtDb25uZWN0ZWRPdmVybGF5IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgX292ZXJsYXk7XG4gICAgcHJpdmF0ZSBfZGlyO1xuICAgIHByaXZhdGUgX292ZXJsYXlSZWY7XG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVQb3J0YWw7XG4gICAgcHJpdmF0ZSBfaGFzQmFja2Ryb3A7XG4gICAgcHJpdmF0ZSBfbG9ja1Bvc2l0aW9uO1xuICAgIHByaXZhdGUgX2dyb3dBZnRlck9wZW47XG4gICAgcHJpdmF0ZSBfZmxleGlibGVEaW1lbnNpb25zO1xuICAgIHByaXZhdGUgX3B1c2g7XG4gICAgcHJpdmF0ZSBfYmFja2Ryb3BTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfb2Zmc2V0WDtcbiAgICBwcml2YXRlIF9vZmZzZXRZO1xuICAgIHByaXZhdGUgX3Bvc2l0aW9uO1xuICAgIHByaXZhdGUgX3Njcm9sbFN0cmF0ZWd5RmFjdG9yeTtcbiAgICAvKiogT3JpZ2luIGZvciB0aGUgY29ubmVjdGVkIG92ZXJsYXkuICovXG4gICAgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICAgIC8qKiBSZWdpc3RlcmVkIGNvbm5lY3RlZCBwb3NpdGlvbiBwYWlycy4gKi9cbiAgICBwb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW107XG4gICAgLyoqXG4gICAgICogVGhpcyBpbnB1dCBvdmVycmlkZXMgdGhlIHBvc2l0aW9ucyBpbnB1dCBpZiBzcGVjaWZpZWQuIEl0IGxldHMgdXNlcnMgcGFzc1xuICAgICAqIGluIGFyYml0cmFyeSBwb3NpdGlvbmluZyBzdHJhdGVnaWVzLlxuICAgICAqL1xuICAgIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgICAvKiogVGhlIG9mZnNldCBpbiBwaXhlbHMgZm9yIHRoZSBvdmVybGF5IGNvbm5lY3Rpb24gcG9pbnQgb24gdGhlIHgtYXhpcyAqL1xuICAgIGdldCBvZmZzZXRYKCk6IG51bWJlcjtcbiAgICBzZXQgb2Zmc2V0WChvZmZzZXRYOiBudW1iZXIpO1xuICAgIC8qKiBUaGUgb2Zmc2V0IGluIHBpeGVscyBmb3IgdGhlIG92ZXJsYXkgY29ubmVjdGlvbiBwb2ludCBvbiB0aGUgeS1heGlzICovXG4gICAgZ2V0IG9mZnNldFkoKTogbnVtYmVyO1xuICAgIHNldCBvZmZzZXRZKG9mZnNldFk6IG51bWJlcik7XG4gICAgLyoqIFRoZSB3aWR0aCBvZiB0aGUgb3ZlcmxheSBwYW5lbC4gKi9cbiAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIC8qKiBUaGUgaGVpZ2h0IG9mIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIC8qKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICAgIG1pbldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgLyoqIFRoZSBtaW4gaGVpZ2h0IG9mIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICAgIG1pbkhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIC8qKiBUaGUgY3VzdG9tIGNsYXNzIHRvIGJlIHNldCBvbiB0aGUgYmFja2Ryb3AgZWxlbWVudC4gKi9cbiAgICBiYWNrZHJvcENsYXNzOiBzdHJpbmc7XG4gICAgLyoqIFRoZSBjdXN0b20gY2xhc3MgdG8gYWRkIHRvIHRoZSBvdmVybGF5IHBhbmUgZWxlbWVudC4gKi9cbiAgICBwYW5lbENsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAvKiogTWFyZ2luIGJldHdlZW4gdGhlIG92ZXJsYXkgYW5kIHRoZSB2aWV3cG9ydCBlZGdlcy4gKi9cbiAgICB2aWV3cG9ydE1hcmdpbjogbnVtYmVyO1xuICAgIC8qKiBTdHJhdGVneSB0byBiZSB1c2VkIHdoZW4gaGFuZGxpbmcgc2Nyb2xsIGV2ZW50cyB3aGlsZSB0aGUgb3ZlcmxheSBpcyBvcGVuLiAqL1xuICAgIHNjcm9sbFN0cmF0ZWd5OiBTY3JvbGxTdHJhdGVneTtcbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBpcyBvcGVuLiAqL1xuICAgIG9wZW46IGJvb2xlYW47XG4gICAgLyoqIENTUyBzZWxlY3RvciB3aGljaCB0byBzZXQgdGhlIHRyYW5zZm9ybSBvcmlnaW4uICovXG4gICAgdHJhbnNmb3JtT3JpZ2luU2VsZWN0b3I6IHN0cmluZztcbiAgICAvKiogV2hldGhlciBvciBub3QgdGhlIG92ZXJsYXkgc2hvdWxkIGF0dGFjaCBhIGJhY2tkcm9wLiAqL1xuICAgIGdldCBoYXNCYWNrZHJvcCgpOiBhbnk7XG4gICAgc2V0IGhhc0JhY2tkcm9wKHZhbHVlOiBhbnkpO1xuICAgIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgb3ZlcmxheSBzaG91bGQgYmUgbG9ja2VkIHdoZW4gc2Nyb2xsaW5nLiAqL1xuICAgIGdldCBsb2NrUG9zaXRpb24oKTogYW55O1xuICAgIHNldCBsb2NrUG9zaXRpb24odmFsdWU6IGFueSk7XG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkncyB3aWR0aCBhbmQgaGVpZ2h0IGNhbiBiZSBjb25zdHJhaW5lZCB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC4gKi9cbiAgICBnZXQgZmxleGlibGVEaW1lbnNpb25zKCk6IGJvb2xlYW47XG4gICAgc2V0IGZsZXhpYmxlRGltZW5zaW9ucyh2YWx1ZTogYm9vbGVhbik7XG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgY2FuIGdyb3cgYWZ0ZXIgdGhlIGluaXRpYWwgb3BlbiB3aGVuIGZsZXhpYmxlIHBvc2l0aW9uaW5nIGlzIHR1cm5lZCBvbi4gKi9cbiAgICBnZXQgZ3Jvd0FmdGVyT3BlbigpOiBib29sZWFuO1xuICAgIHNldCBncm93QWZ0ZXJPcGVuKHZhbHVlOiBib29sZWFuKTtcbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBjYW4gYmUgcHVzaGVkIG9uLXNjcmVlbiBpZiBub25lIG9mIHRoZSBwcm92aWRlZCBwb3NpdGlvbnMgZml0LiAqL1xuICAgIGdldCBwdXNoKCk6IGJvb2xlYW47XG4gICAgc2V0IHB1c2godmFsdWU6IGJvb2xlYW4pO1xuICAgIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuICovXG4gICAgYmFja2Ryb3BDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHBvc2l0aW9uIGhhcyBjaGFuZ2VkLiAqL1xuICAgIHBvc2l0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlPjtcbiAgICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBvdmVybGF5IGhhcyBiZWVuIGF0dGFjaGVkLiAqL1xuICAgIGF0dGFjaDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIG92ZXJsYXkgaGFzIGJlZW4gZGV0YWNoZWQuICovXG4gICAgZGV0YWNoOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlcmUgYXJlIGtleWJvYXJkIGV2ZW50cyB0aGF0IGFyZSB0YXJnZXRlZCBhdCB0aGUgb3ZlcmxheS4gKi9cbiAgICBvdmVybGF5S2V5ZG93bjogRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+O1xuICAgIGNvbnN0cnVjdG9yKF9vdmVybGF5OiBPdmVybGF5LCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgc2Nyb2xsU3RyYXRlZ3lGYWN0b3J5OiBhbnksIF9kaXI6IERpcmVjdGlvbmFsaXR5KTtcbiAgICAvKiogVGhlIGFzc29jaWF0ZWQgb3ZlcmxheSByZWZlcmVuY2UuICovXG4gICAgZ2V0IG92ZXJsYXlSZWYoKTogT3ZlcmxheVJlZjtcbiAgICAvKiogVGhlIGVsZW1lbnQncyBsYXlvdXQgZGlyZWN0aW9uLiAqL1xuICAgIGdldCBkaXIoKTogRGlyZWN0aW9uO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgLyoqIENyZWF0ZXMgYW4gb3ZlcmxheSAqL1xuICAgIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXk7XG4gICAgLyoqIEJ1aWxkcyB0aGUgb3ZlcmxheSBjb25maWcgYmFzZWQgb24gdGhlIGRpcmVjdGl2ZSdzIGlucHV0cyAqL1xuICAgIHByaXZhdGUgX2J1aWxkQ29uZmlnO1xuICAgIC8qKiBVcGRhdGVzIHRoZSBzdGF0ZSBvZiBhIHBvc2l0aW9uIHN0cmF0ZWd5LCBiYXNlZCBvbiB0aGUgdmFsdWVzIG9mIHRoZSBkaXJlY3RpdmUgaW5wdXRzLiAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZVBvc2l0aW9uU3RyYXRlZ3k7XG4gICAgLyoqIFJldHVybnMgdGhlIHBvc2l0aW9uIHN0cmF0ZWd5IG9mIHRoZSBvdmVybGF5IHRvIGJlIHNldCBvbiB0aGUgb3ZlcmxheSBjb25maWcgKi9cbiAgICBwcml2YXRlIF9jcmVhdGVQb3NpdGlvblN0cmF0ZWd5O1xuICAgIC8qKiBBdHRhY2hlcyB0aGUgb3ZlcmxheSBhbmQgc3Vic2NyaWJlcyB0byBiYWNrZHJvcCBjbGlja3MgaWYgYmFja2Ryb3AgZXhpc3RzICovXG4gICAgcHJpdmF0ZSBfYXR0YWNoT3ZlcmxheTtcbiAgICAvKiogRGV0YWNoZXMgdGhlIG92ZXJsYXkgYW5kIHVuc3Vic2NyaWJlcyB0byBiYWNrZHJvcCBjbGlja3MgaWYgYmFja2Ryb3AgZXhpc3RzICovXG4gICAgcHJpdmF0ZSBfZGV0YWNoT3ZlcmxheTtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGFzQmFja2Ryb3A6IEJvb2xlYW5JbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9ja1Bvc2l0aW9uOiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZsZXhpYmxlRGltZW5zaW9uczogQm9vbGVhbklucHV0O1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ncm93QWZ0ZXJPcGVuOiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3B1c2g6IEJvb2xlYW5JbnB1dDtcbn1cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDREtfQ09OTkVDVEVEX09WRVJMQVlfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSX0ZBQ1RPUlkob3ZlcmxheTogT3ZlcmxheSk6ICgpID0+IFJlcG9zaXRpb25TY3JvbGxTdHJhdGVneTtcbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBDREtfQ09OTkVDVEVEX09WRVJMQVlfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSOiB7XG4gICAgcHJvdmlkZTogSW5qZWN0aW9uVG9rZW48KCkgPT4gU2Nyb2xsU3RyYXRlZ3k+O1xuICAgIGRlcHM6ICh0eXBlb2YgT3ZlcmxheSlbXTtcbiAgICB1c2VGYWN0b3J5OiB0eXBlb2YgQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUl9GQUNUT1JZO1xufTtcbiJdfQ==