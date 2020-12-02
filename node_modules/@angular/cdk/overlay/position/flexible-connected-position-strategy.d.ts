/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PositionStrategy } from './position-strategy';
import { ElementRef } from '@angular/core';
import { ViewportRuler, CdkScrollable } from '@angular/cdk/scrolling';
import { ConnectedOverlayPositionChange, ConnectionPositionPair } from './connected-position';
import { Observable } from 'rxjs';
import { OverlayReference } from '../overlay-reference';
import { Platform } from '@angular/cdk/platform';
import { OverlayContainer } from '../overlay-container';
/** Possible values that can be set as the origin of a FlexibleConnectedPositionStrategy. */
export declare type FlexibleConnectedPositionStrategyOrigin = ElementRef | Element | Point & {
    width?: number;
    height?: number;
};
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
export declare class FlexibleConnectedPositionStrategy implements PositionStrategy {
    private _viewportRuler;
    private _document;
    private _platform;
    private _overlayContainer;
    /** The overlay to which this strategy is attached. */
    private _overlayRef;
    /** Whether we're performing the very first positioning of the overlay. */
    private _isInitialRender;
    /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
    private _lastBoundingBoxSize;
    /** Whether the overlay was pushed in a previous positioning. */
    private _isPushed;
    /** Whether the overlay can be pushed on-screen on the initial open. */
    private _canPush;
    /** Whether the overlay can grow via flexible width/height after the initial open. */
    private _growAfterOpen;
    /** Whether the overlay's width and height can be constrained to fit within the viewport. */
    private _hasFlexibleDimensions;
    /** Whether the overlay position is locked. */
    private _positionLocked;
    /** Cached origin dimensions */
    private _originRect;
    /** Cached overlay dimensions */
    private _overlayRect;
    /** Cached viewport dimensions */
    private _viewportRect;
    /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
    private _viewportMargin;
    /** The Scrollable containers used to check scrollable view properties on position change. */
    private _scrollables;
    /** Ordered list of preferred positions, from most to least desirable. */
    _preferredPositions: ConnectionPositionPair[];
    /** The origin element against which the overlay will be positioned. */
    private _origin;
    /** The overlay pane element. */
    private _pane;
    /** Whether the strategy has been disposed of already. */
    private _isDisposed;
    /**
     * Parent element for the overlay panel used to constrain the overlay panel's size to fit
     * within the viewport.
     */
    private _boundingBox;
    /** The last position to have been calculated as the best fit position. */
    private _lastPosition;
    /** Subject that emits whenever the position changes. */
    private _positionChanges;
    /** Subscription to viewport size changes. */
    private _resizeSubscription;
    /** Default offset for the overlay along the x axis. */
    private _offsetX;
    /** Default offset for the overlay along the y axis. */
    private _offsetY;
    /** Selector to be used when finding the elements on which to set the transform origin. */
    private _transformOriginSelector;
    /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
    private _appliedPanelClasses;
    /** Amount by which the overlay was pushed in each axis during the last time it was positioned. */
    private _previousPushAmount;
    /** Observable sequence of position changes. */
    positionChanges: Observable<ConnectedOverlayPositionChange>;
    /** Ordered list of preferred positions, from most to least desirable. */
    get positions(): ConnectionPositionPair[];
    constructor(connectedTo: FlexibleConnectedPositionStrategyOrigin, _viewportRuler: ViewportRuler, _document: Document, _platform: Platform, _overlayContainer: OverlayContainer);
    /** Attaches this position strategy to an overlay. */
    attach(overlayRef: OverlayReference): void;
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * @docs-private
     */
    apply(): void;
    detach(): void;
    /** Cleanup after the element gets destroyed. */
    dispose(): void;
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    reapplyLastPosition(): void;
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    withScrollableContainers(scrollables: CdkScrollable[]): this;
    /**
     * Adds new preferred positions.
     * @param positions List of positions options for this overlay.
     */
    withPositions(positions: ConnectedPosition[]): this;
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param margin Required margin between the overlay and the viewport edge in pixels.
     */
    withViewportMargin(margin: number): this;
    /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
    withFlexibleDimensions(flexibleDimensions?: boolean): this;
    /** Sets whether the overlay can grow after the initial open via flexible width/height. */
    withGrowAfterOpen(growAfterOpen?: boolean): this;
    /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
    withPush(canPush?: boolean): this;
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    withLockedPosition(isLocked?: boolean): this;
    /**
     * Sets the origin, relative to which to position the overlay.
     * Using an element origin is useful for building components that need to be positioned
     * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
     * used for cases like contextual menus which open relative to the user's pointer.
     * @param origin Reference to the new origin.
     */
    setOrigin(origin: FlexibleConnectedPositionStrategyOrigin): this;
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param offset New offset in the X axis.
     */
    withDefaultOffsetX(offset: number): this;
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param offset New offset in the Y axis.
     */
    withDefaultOffsetY(offset: number): this;
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     */
    withTransformOriginOn(selector: string): this;
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     */
    private _getOriginPoint;
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     */
    private _getOverlayPoint;
    /** Gets how well an overlay at the given point will fit within the viewport. */
    private _getOverlayFit;
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param fit How well the overlay fits in the viewport at some position.
     * @param point The (x, y) coordinates of the overlat at some position.
     * @param viewport The geometry of the viewport.
     */
    private _canFitWithFlexibleDimensions;
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param start Starting point from which the overlay is pushed.
     * @param overlay Dimensions of the overlay.
     * @param scrollPosition Current viewport scroll position.
     * @returns The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    private _pushOverlayOnScreen;
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @param position The position preference
     * @param originPoint The point on the origin element where the overlay is connected.
     */
    private _applyPosition;
    /** Sets the transform origin based on the configured selector and the passed-in position.  */
    private _setTransformOrigin;
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     */
    private _calculateBoundingBoxRect;
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param origin The point on the origin element where the overlay is connected.
     * @param position The position preference
     */
    private _setBoundingBoxStyles;
    /** Resets the styles for the bounding box so that a new positioning can be computed. */
    private _resetBoundingBoxStyles;
    /** Resets the styles for the overlay pane so that a new positioning can be computed. */
    private _resetOverlayElementStyles;
    /** Sets positioning styles to the overlay element. */
    private _setOverlayElementStyles;
    /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
    private _getExactOverlayY;
    /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
    private _getExactOverlayX;
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     */
    private _getScrollVisibility;
    /** Subtracts the amount that an element is overflowing on an axis from its length. */
    private _subtractOverflows;
    /** Narrows the given viewport rect by the current _viewportMargin. */
    private _getNarrowedViewportRect;
    /** Whether the we're dealing with an RTL context */
    private _isRtl;
    /** Determines whether the overlay uses exact or flexible positioning. */
    private _hasExactPosition;
    /** Retrieves the offset of a position along the x or y axis. */
    private _getOffset;
    /** Validates that the current position match the expected values. */
    private _validatePositions;
    /** Adds a single CSS class or an array of classes on the overlay panel. */
    private _addPanelClasses;
    /** Clears the classes that the position strategy has applied from the overlay panel. */
    private _clearPanelClasses;
    /** Returns the ClientRect of the current origin. */
    private _getOriginRect;
}
/** A simple (x, y) coordinate. */
interface Point {
    x: number;
    y: number;
}
/** A connected position as specified by the user. */
export interface ConnectedPosition {
    originX: 'start' | 'center' | 'end';
    originY: 'top' | 'center' | 'bottom';
    overlayX: 'start' | 'center' | 'end';
    overlayY: 'top' | 'center' | 'bottom';
    weight?: number;
    offsetX?: number;
    offsetY?: number;
    panelClass?: string | string[];
}
export {};
