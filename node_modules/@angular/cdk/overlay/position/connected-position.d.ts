/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare type HorizontalConnectionPos = 'start' | 'center' | 'end';
/** Vertical dimension of a connection point on the perimeter of the origin or overlay element. */
export declare type VerticalConnectionPos = 'top' | 'center' | 'bottom';
/** A connection point on the origin element. */
export interface OriginConnectionPosition {
    originX: HorizontalConnectionPos;
    originY: VerticalConnectionPos;
}
/** A connection point on the overlay element. */
export interface OverlayConnectionPosition {
    overlayX: HorizontalConnectionPos;
    overlayY: VerticalConnectionPos;
}
/** The points of the origin element and the overlay element to connect. */
export declare class ConnectionPositionPair {
    /** Offset along the X axis. */
    offsetX?: number | undefined;
    /** Offset along the Y axis. */
    offsetY?: number | undefined;
    /** Class(es) to be applied to the panel while this position is active. */
    panelClass?: string | string[] | undefined;
    /** X-axis attachment point for connected overlay origin. Can be 'start', 'end', or 'center'. */
    originX: HorizontalConnectionPos;
    /** Y-axis attachment point for connected overlay origin. Can be 'top', 'bottom', or 'center'. */
    originY: VerticalConnectionPos;
    /** X-axis attachment point for connected overlay. Can be 'start', 'end', or 'center'. */
    overlayX: HorizontalConnectionPos;
    /** Y-axis attachment point for connected overlay. Can be 'top', 'bottom', or 'center'. */
    overlayY: VerticalConnectionPos;
    constructor(origin: OriginConnectionPosition, overlay: OverlayConnectionPosition, 
    /** Offset along the X axis. */
    offsetX?: number | undefined, 
    /** Offset along the Y axis. */
    offsetY?: number | undefined, 
    /** Class(es) to be applied to the panel while this position is active. */
    panelClass?: string | string[] | undefined);
}
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  @docs-private
 */
export declare class ScrollingVisibility {
    isOriginClipped: boolean;
    isOriginOutsideView: boolean;
    isOverlayClipped: boolean;
    isOverlayOutsideView: boolean;
}
/** The change event emitted by the strategy when a fallback position is used. */
export declare class ConnectedOverlayPositionChange {
    /** The position used as a result of this change. */
    connectionPair: ConnectionPositionPair;
    /** @docs-private */
    scrollableViewProperties: ScrollingVisibility;
    constructor(
    /** The position used as a result of this change. */
    connectionPair: ConnectionPositionPair, 
    /** @docs-private */
    scrollableViewProperties: ScrollingVisibility);
}
/**
 * Validates whether a vertical position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
export declare function validateVerticalPosition(property: string, value: VerticalConnectionPos): void;
/**
 * Validates whether a horizontal position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
export declare function validateHorizontalPosition(property: string, value: HorizontalConnectionPos): void;
