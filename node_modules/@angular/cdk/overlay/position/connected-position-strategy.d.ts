/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { CdkScrollable, ViewportRuler } from '@angular/cdk/scrolling';
import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayContainer } from '../overlay-container';
import { OverlayReference } from '../overlay-reference';
import { ConnectedOverlayPositionChange, ConnectionPositionPair, OriginConnectionPosition, OverlayConnectionPosition } from './connected-position';
import { FlexibleConnectedPositionStrategy } from './flexible-connected-position-strategy';
import { PositionStrategy } from './position-strategy';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * @breaking-change 8.0.0
 */
export declare class ConnectedPositionStrategy implements PositionStrategy {
    /**
     * Reference to the underlying position strategy to which all the API calls are proxied.
     * @docs-private
     */
    _positionStrategy: FlexibleConnectedPositionStrategy;
    /** The overlay to which this strategy is attached. */
    private _overlayRef;
    private _direction;
    /** Whether the we're dealing with an RTL context */
    get _isRtl(): boolean;
    /** Ordered list of preferred positions, from most to least desirable. */
    _preferredPositions: ConnectionPositionPair[];
    /** Emits an event when the connection point changes. */
    get onPositionChange(): Observable<ConnectedOverlayPositionChange>;
    constructor(originPos: OriginConnectionPosition, overlayPos: OverlayConnectionPosition, connectedTo: ElementRef<HTMLElement>, viewportRuler: ViewportRuler, document: Document, platform: Platform, overlayContainer: OverlayContainer);
    /** Ordered list of preferred positions, from most to least desirable. */
    get positions(): ConnectionPositionPair[];
    /** Attach this position strategy to an overlay. */
    attach(overlayRef: OverlayReference): void;
    /** Disposes all resources used by the position strategy. */
    dispose(): void;
    /** @docs-private */
    detach(): void;
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    apply(): void;
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    recalculateLastPosition(): void;
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    withScrollableContainers(scrollables: CdkScrollable[]): void;
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    withFallbackPosition(originPos: OriginConnectionPosition, overlayPos: OverlayConnectionPosition, offsetX?: number, offsetY?: number): this;
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    withDirection(dir: 'ltr' | 'rtl'): this;
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    withOffsetX(offset: number): this;
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    withOffsetY(offset: number): this;
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    withLockedPosition(isLocked: boolean): this;
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    withPositions(positions: ConnectionPositionPair[]): this;
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    setOrigin(origin: ElementRef): this;
}
