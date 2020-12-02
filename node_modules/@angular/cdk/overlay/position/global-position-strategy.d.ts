/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PositionStrategy } from './position-strategy';
import { OverlayReference } from '../overlay-reference';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
export declare class GlobalPositionStrategy implements PositionStrategy {
    /** The overlay to which this strategy is attached. */
    private _overlayRef;
    private _cssPosition;
    private _topOffset;
    private _bottomOffset;
    private _leftOffset;
    private _rightOffset;
    private _alignItems;
    private _justifyContent;
    private _width;
    private _height;
    private _isDisposed;
    attach(overlayRef: OverlayReference): void;
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    top(value?: string): this;
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    left(value?: string): this;
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    bottom(value?: string): this;
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    right(value?: string): this;
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    width(value?: string): this;
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    height(value?: string): this;
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    centerHorizontally(offset?: string): this;
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    centerVertically(offset?: string): this;
    /**
     * Apply the position to the element.
     * @docs-private
     */
    apply(): void;
    /**
     * Cleans up the DOM changes from the position strategy.
     * @docs-private
     */
    dispose(): void;
}
