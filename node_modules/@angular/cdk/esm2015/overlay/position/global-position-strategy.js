/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/position/global-position-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class to be added to the overlay pane wrapper.
 * @type {?}
 */
const wrapperClass = 'cdk-global-overlay-wrapper';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
export class GlobalPositionStrategy {
    constructor() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        /** @type {?} */
        const config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
    }
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New top offset.
     * @return {THIS}
     */
    top(value = '') {
        (/** @type {?} */ (this))._bottomOffset = '';
        (/** @type {?} */ (this))._topOffset = value;
        (/** @type {?} */ (this))._alignItems = 'flex-start';
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New left offset.
     * @return {THIS}
     */
    left(value = '') {
        (/** @type {?} */ (this))._rightOffset = '';
        (/** @type {?} */ (this))._leftOffset = value;
        (/** @type {?} */ (this))._justifyContent = 'flex-start';
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New bottom offset.
     * @return {THIS}
     */
    bottom(value = '') {
        (/** @type {?} */ (this))._topOffset = '';
        (/** @type {?} */ (this))._bottomOffset = value;
        (/** @type {?} */ (this))._alignItems = 'flex-end';
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New right offset.
     * @return {THIS}
     */
    right(value = '') {
        (/** @type {?} */ (this))._leftOffset = '';
        (/** @type {?} */ (this))._rightOffset = value;
        (/** @type {?} */ (this))._justifyContent = 'flex-end';
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @template THIS
     * @this {THIS}
     * @param {?=} value New width for the overlay
     * @return {THIS}
     */
    width(value = '') {
        if ((/** @type {?} */ (this))._overlayRef) {
            (/** @type {?} */ (this))._overlayRef.updateSize({ width: value });
        }
        else {
            (/** @type {?} */ (this))._width = value;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @template THIS
     * @this {THIS}
     * @param {?=} value New height for the overlay
     * @return {THIS}
     */
    height(value = '') {
        if ((/** @type {?} */ (this))._overlayRef) {
            (/** @type {?} */ (this))._overlayRef.updateSize({ height: value });
        }
        else {
            (/** @type {?} */ (this))._height = value;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {THIS}
     */
    centerHorizontally(offset = '') {
        (/** @type {?} */ (this)).left(offset);
        (/** @type {?} */ (this))._justifyContent = 'center';
        return (/** @type {?} */ (this));
    }
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {THIS}
     */
    centerVertically(offset = '') {
        (/** @type {?} */ (this)).top(offset);
        (/** @type {?} */ (this))._alignItems = 'center';
        return (/** @type {?} */ (this));
    }
    /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    apply() {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
        }
        /** @type {?} */
        const styles = this._overlayRef.overlayElement.style;
        /** @type {?} */
        const parentStyles = this._overlayRef.hostElement.style;
        /** @type {?} */
        const config = this._overlayRef.getConfig();
        const { width, height, maxWidth, maxHeight } = config;
        /** @type {?} */
        const shouldBeFlushHorizontally = (width === '100%' || width === '100vw') &&
            (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
        /** @type {?} */
        const shouldBeFlushVertically = (height === '100%' || height === '100vh') &&
            (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
        styles.position = this._cssPosition;
        styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
        styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
        }
        else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
        }
        else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
            }
            else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
            }
        }
        else {
            parentStyles.justifyContent = this._justifyContent;
        }
        parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
    }
    /**
     * Cleans up the DOM changes from the position strategy.
     * \@docs-private
     * @return {?}
     */
    dispose() {
        if (this._isDisposed || !this._overlayRef) {
            return;
        }
        /** @type {?} */
        const styles = this._overlayRef.overlayElement.style;
        /** @type {?} */
        const parent = this._overlayRef.hostElement;
        /** @type {?} */
        const parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop =
            styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
        this._overlayRef = (/** @type {?} */ (null));
        this._isDisposed = true;
    }
}
if (false) {
    /**
     * The overlay to which this strategy is attached.
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._cssPosition;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._topOffset;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._bottomOffset;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._leftOffset;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._rightOffset;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._alignItems;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._justifyContent;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._width;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._height;
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._isDisposed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXBvc2l0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Bvc2l0aW9uL2dsb2JhbC1wb3NpdGlvbi1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O01BWU0sWUFBWSxHQUFHLDRCQUE0Qjs7Ozs7OztBQVFqRCxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBR1UsaUJBQVksR0FBVyxRQUFRLENBQUM7UUFDaEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBVyxFQUFFLENBQUM7SUE0TC9CLENBQUM7Ozs7O0lBekxDLE1BQU0sQ0FBQyxVQUE0Qjs7Y0FDM0IsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUU7UUFFckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7O0lBTUQsR0FBRyxDQUFDLFFBQWdCLEVBQUU7UUFDcEIsbUJBQUEsSUFBSSxFQUFBLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7UUFDaEMsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBTUQsSUFBSSxDQUFDLFFBQWdCLEVBQUU7UUFDckIsbUJBQUEsSUFBSSxFQUFBLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLG1CQUFBLElBQUksRUFBQSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUM7UUFDcEMsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBTUQsTUFBTSxDQUFDLFFBQWdCLEVBQUU7UUFDdkIsbUJBQUEsSUFBSSxFQUFBLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBTUQsS0FBSyxDQUFDLFFBQWdCLEVBQUU7UUFDdEIsbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFBLElBQUksRUFBQSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDbEMsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7Ozs7SUFRRCxLQUFLLENBQUMsUUFBZ0IsRUFBRTtRQUN0QixJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsRUFBRTtZQUNwQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLG1CQUFBLElBQUksRUFBQSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFFRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7OztJQVFELE1BQU0sQ0FBQyxRQUFnQixFQUFFO1FBQ3ZCLElBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxFQUFFO1lBQ3BCLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0wsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUVELE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7Ozs7O0lBUUQsa0JBQWtCLENBQUMsU0FBaUIsRUFBRTtRQUNwQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsbUJBQUEsSUFBSSxFQUFBLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7OztJQVFELGdCQUFnQixDQUFDLFNBQWlCLEVBQUU7UUFDbEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pCLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDNUIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7OztJQU1ELEtBQUs7UUFDSCxzRUFBc0U7UUFDdEUscUVBQXFFO1FBQ3JFLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDeEQsT0FBTztTQUNSOztjQUVLLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLOztjQUM5QyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSzs7Y0FDakQsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2NBQ3JDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLEdBQUcsTUFBTTs7Y0FDN0MseUJBQXlCLEdBQUcsQ0FBQyxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUM7WUFDdkMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxPQUFPLENBQUM7O2NBQ3RGLHVCQUF1QixHQUFHLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxTQUFTLEtBQUssT0FBTyxDQUFDO1FBRTdGLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdkUsTUFBTSxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFdkMsSUFBSSx5QkFBeUIsRUFBRTtZQUM3QixZQUFZLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztTQUM1QzthQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxRQUFRLEVBQUU7WUFDNUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7U0FDeEM7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUMzRCxtRkFBbUY7WUFDbkYsa0ZBQWtGO1lBQ2xGLHFGQUFxRjtZQUNyRiw2REFBNkQ7WUFDN0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFlBQVksRUFBRTtnQkFDekMsWUFBWSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsRUFBRTtnQkFDOUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7YUFDNUM7U0FDRjthQUFNO1lBQ0wsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQ3BEO1FBRUQsWUFBWSxDQUFDLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3RGLENBQUM7Ozs7OztJQU1ELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pDLE9BQU87U0FDUjs7Y0FFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSzs7Y0FDOUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVzs7Y0FDckMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLO1FBRWpDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLFlBQVksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUztZQUN0RSxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUV0RixJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFBLElBQUksRUFBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7Q0FDRjs7Ozs7OztJQXJNQyw2Q0FBc0M7Ozs7O0lBQ3RDLDhDQUF3Qzs7Ozs7SUFDeEMsNENBQWdDOzs7OztJQUNoQywrQ0FBbUM7Ozs7O0lBQ25DLDZDQUFpQzs7Ozs7SUFDakMsOENBQWtDOzs7OztJQUNsQyw2Q0FBaUM7Ozs7O0lBQ2pDLGlEQUFxQzs7Ozs7SUFDckMsd0NBQTRCOzs7OztJQUM1Qix5Q0FBNkI7Ozs7O0lBQzdCLDZDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1Bvc2l0aW9uU3RyYXRlZ3l9IGZyb20gJy4vcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHtPdmVybGF5UmVmZXJlbmNlfSBmcm9tICcuLi9vdmVybGF5LXJlZmVyZW5jZSc7XG5cbi8qKiBDbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgb3ZlcmxheSBwYW5lIHdyYXBwZXIuICovXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSAnY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXInO1xuXG4vKipcbiAqIEEgc3RyYXRlZ3kgZm9yIHBvc2l0aW9uaW5nIG92ZXJsYXlzLiBVc2luZyB0aGlzIHN0cmF0ZWd5LCBhbiBvdmVybGF5IGlzIGdpdmVuIGFuXG4gKiBleHBsaWNpdCBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgYnJvd3NlcidzIHZpZXdwb3J0LiBXZSB1c2UgZmxleGJveCwgaW5zdGVhZCBvZlxuICogdHJhbnNmb3JtcywgaW4gb3JkZXIgdG8gYXZvaWQgaXNzdWVzIHdpdGggc3VicGl4ZWwgcmVuZGVyaW5nIHdoaWNoIGNhbiBjYXVzZSB0aGVcbiAqIGVsZW1lbnQgdG8gYmVjb21lIGJsdXJyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3kgaW1wbGVtZW50cyBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgLyoqIFRoZSBvdmVybGF5IHRvIHdoaWNoIHRoaXMgc3RyYXRlZ3kgaXMgYXR0YWNoZWQuICovXG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWZlcmVuY2U7XG4gIHByaXZhdGUgX2Nzc1Bvc2l0aW9uOiBzdHJpbmcgPSAnc3RhdGljJztcbiAgcHJpdmF0ZSBfdG9wT2Zmc2V0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfYm90dG9tT2Zmc2V0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfbGVmdE9mZnNldDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3JpZ2h0T2Zmc2V0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfYWxpZ25JdGVtczogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2p1c3RpZnlDb250ZW50OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfd2lkdGg6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9oZWlnaHQ6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9pc0Rpc3Bvc2VkOiBib29sZWFuO1xuXG4gIGF0dGFjaChvdmVybGF5UmVmOiBPdmVybGF5UmVmZXJlbmNlKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gb3ZlcmxheVJlZi5nZXRDb25maWcoKTtcblxuICAgIHRoaXMuX292ZXJsYXlSZWYgPSBvdmVybGF5UmVmO1xuXG4gICAgaWYgKHRoaXMuX3dpZHRoICYmICFjb25maWcud2lkdGgpIHtcbiAgICAgIG92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7d2lkdGg6IHRoaXMuX3dpZHRofSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hlaWdodCAmJiAhY29uZmlnLmhlaWdodCkge1xuICAgICAgb3ZlcmxheVJlZi51cGRhdGVTaXplKHtoZWlnaHQ6IHRoaXMuX2hlaWdodH0pO1xuICAgIH1cblxuICAgIG92ZXJsYXlSZWYuaG9zdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh3cmFwcGVyQ2xhc3MpO1xuICAgIHRoaXMuX2lzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0b3AgcG9zaXRpb24gb2YgdGhlIG92ZXJsYXkuIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgdmVydGljYWwgcG9zaXRpb24uXG4gICAqIEBwYXJhbSB2YWx1ZSBOZXcgdG9wIG9mZnNldC5cbiAgICovXG4gIHRvcCh2YWx1ZTogc3RyaW5nID0gJycpOiB0aGlzIHtcbiAgICB0aGlzLl9ib3R0b21PZmZzZXQgPSAnJztcbiAgICB0aGlzLl90b3BPZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxlZnQgcG9zaXRpb24gb2YgdGhlIG92ZXJsYXkuIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgaG9yaXpvbnRhbCBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyBsZWZ0IG9mZnNldC5cbiAgICovXG4gIGxlZnQodmFsdWU6IHN0cmluZyA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy5fcmlnaHRPZmZzZXQgPSAnJztcbiAgICB0aGlzLl9sZWZ0T2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5fanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYm90dG9tIHBvc2l0aW9uIG9mIHRoZSBvdmVybGF5LiBDbGVhcnMgYW55IHByZXZpb3VzbHkgc2V0IHZlcnRpY2FsIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gdmFsdWUgTmV3IGJvdHRvbSBvZmZzZXQuXG4gICAqL1xuICBib3R0b20odmFsdWU6IHN0cmluZyA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy5fdG9wT2Zmc2V0ID0gJyc7XG4gICAgdGhpcy5fYm90dG9tT2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5fYWxpZ25JdGVtcyA9ICdmbGV4LWVuZCc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcmlnaHQgcG9zaXRpb24gb2YgdGhlIG92ZXJsYXkuIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgaG9yaXpvbnRhbCBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyByaWdodCBvZmZzZXQuXG4gICAqL1xuICByaWdodCh2YWx1ZTogc3RyaW5nID0gJycpOiB0aGlzIHtcbiAgICB0aGlzLl9sZWZ0T2Zmc2V0ID0gJyc7XG4gICAgdGhpcy5fcmlnaHRPZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLl9qdXN0aWZ5Q29udGVudCA9ICdmbGV4LWVuZCc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgb3ZlcmxheSB3aWR0aCBhbmQgY2xlYXJzIGFueSBwcmV2aW91c2x5IHNldCB3aWR0aC5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyB3aWR0aCBmb3IgdGhlIG92ZXJsYXlcbiAgICogQGRlcHJlY2F0ZWQgUGFzcyB0aGUgYHdpZHRoYCB0aHJvdWdoIHRoZSBgT3ZlcmxheUNvbmZpZ2AuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiAgICovXG4gIHdpZHRoKHZhbHVlOiBzdHJpbmcgPSAnJyk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLnVwZGF0ZVNpemUoe3dpZHRoOiB2YWx1ZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG92ZXJsYXkgaGVpZ2h0IGFuZCBjbGVhcnMgYW55IHByZXZpb3VzbHkgc2V0IGhlaWdodC5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyBoZWlnaHQgZm9yIHRoZSBvdmVybGF5XG4gICAqIEBkZXByZWNhdGVkIFBhc3MgdGhlIGBoZWlnaHRgIHRocm91Z2ggdGhlIGBPdmVybGF5Q29uZmlnYC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgKi9cbiAgaGVpZ2h0KHZhbHVlOiBzdHJpbmcgPSAnJyk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLnVwZGF0ZVNpemUoe2hlaWdodDogdmFsdWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2VudGVycyB0aGUgb3ZlcmxheSBob3Jpem9udGFsbHkgd2l0aCBhbiBvcHRpb25hbCBvZmZzZXQuXG4gICAqIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgaG9yaXpvbnRhbCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIG9mZnNldCBPdmVybGF5IG9mZnNldCBmcm9tIHRoZSBob3Jpem9udGFsIGNlbnRlci5cbiAgICovXG4gIGNlbnRlckhvcml6b250YWxseShvZmZzZXQ6IHN0cmluZyA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy5sZWZ0KG9mZnNldCk7XG4gICAgdGhpcy5fanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDZW50ZXJzIHRoZSBvdmVybGF5IHZlcnRpY2FsbHkgd2l0aCBhbiBvcHRpb25hbCBvZmZzZXQuXG4gICAqIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgdmVydGljYWwgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBvZmZzZXQgT3ZlcmxheSBvZmZzZXQgZnJvbSB0aGUgdmVydGljYWwgY2VudGVyLlxuICAgKi9cbiAgY2VudGVyVmVydGljYWxseShvZmZzZXQ6IHN0cmluZyA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy50b3Aob2Zmc2V0KTtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBlbGVtZW50LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBhcHBseSgpOiB2b2lkIHtcbiAgICAvLyBTaW5jZSB0aGUgb3ZlcmxheSByZWYgYXBwbGllcyB0aGUgc3RyYXRlZ3kgYXN5bmNocm9ub3VzbHksIGl0IGNvdWxkXG4gICAgLy8gaGF2ZSBiZWVuIGRpc3Bvc2VkIGJlZm9yZSBpdCBlbmRzIHVwIGJlaW5nIGFwcGxpZWQuIElmIHRoYXQgaXMgdGhlXG4gICAgLy8gY2FzZSwgd2Ugc2hvdWxkbid0IGRvIGFueXRoaW5nLlxuICAgIGlmICghdGhpcy5fb3ZlcmxheVJlZiB8fCAhdGhpcy5fb3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5fb3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5zdHlsZTtcbiAgICBjb25zdCBwYXJlbnRTdHlsZXMgPSB0aGlzLl9vdmVybGF5UmVmLmhvc3RFbGVtZW50LnN0eWxlO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX292ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3Qge3dpZHRoLCBoZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHR9ID0gY29uZmlnO1xuICAgIGNvbnN0IHNob3VsZEJlRmx1c2hIb3Jpem9udGFsbHkgPSAod2lkdGggPT09ICcxMDAlJyB8fCB3aWR0aCA9PT0gJzEwMHZ3JykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFtYXhXaWR0aCB8fCBtYXhXaWR0aCA9PT0gJzEwMCUnIHx8IG1heFdpZHRoID09PSAnMTAwdncnKTtcbiAgICBjb25zdCBzaG91bGRCZUZsdXNoVmVydGljYWxseSA9IChoZWlnaHQgPT09ICcxMDAlJyB8fCBoZWlnaHQgPT09ICcxMDB2aCcpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIW1heEhlaWdodCB8fCBtYXhIZWlnaHQgPT09ICcxMDAlJyB8fCBtYXhIZWlnaHQgPT09ICcxMDB2aCcpO1xuXG4gICAgc3R5bGVzLnBvc2l0aW9uID0gdGhpcy5fY3NzUG9zaXRpb247XG4gICAgc3R5bGVzLm1hcmdpbkxlZnQgPSBzaG91bGRCZUZsdXNoSG9yaXpvbnRhbGx5ID8gJzAnIDogdGhpcy5fbGVmdE9mZnNldDtcbiAgICBzdHlsZXMubWFyZ2luVG9wID0gc2hvdWxkQmVGbHVzaFZlcnRpY2FsbHkgPyAnMCcgOiB0aGlzLl90b3BPZmZzZXQ7XG4gICAgc3R5bGVzLm1hcmdpbkJvdHRvbSA9IHRoaXMuX2JvdHRvbU9mZnNldDtcbiAgICBzdHlsZXMubWFyZ2luUmlnaHQgPSB0aGlzLl9yaWdodE9mZnNldDtcblxuICAgIGlmIChzaG91bGRCZUZsdXNoSG9yaXpvbnRhbGx5KSB7XG4gICAgICBwYXJlbnRTdHlsZXMuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9qdXN0aWZ5Q29udGVudCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHBhcmVudFN0eWxlcy5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3ZlcmxheVJlZi5nZXRDb25maWcoKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAvLyBJbiBSVEwgdGhlIGJyb3dzZXIgd2lsbCBpbnZlcnQgYGZsZXgtc3RhcnRgIGFuZCBgZmxleC1lbmRgIGF1dG9tYXRpY2FsbHksIGJ1dCB3ZVxuICAgICAgLy8gZG9uJ3Qgd2FudCB0aGF0IGJlY2F1c2Ugb3VyIHBvc2l0aW9uaW5nIGlzIGV4cGxpY2l0bHkgYGxlZnRgIGFuZCBgcmlnaHRgLCBoZW5jZVxuICAgICAgLy8gd2h5IHdlIGRvIGFub3RoZXIgaW52ZXJzaW9uIHRvIGVuc3VyZSB0aGF0IHRoZSBvdmVybGF5IHN0YXlzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICAgICAgLy8gVE9ETzogcmVjb25zaWRlciB0aGlzIGlmIHdlIGFkZCBgc3RhcnRgIGFuZCBgZW5kYCBtZXRob2RzLlxuICAgICAgaWYgKHRoaXMuX2p1c3RpZnlDb250ZW50ID09PSAnZmxleC1zdGFydCcpIHtcbiAgICAgICAgcGFyZW50U3R5bGVzLmp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtZW5kJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fanVzdGlmeUNvbnRlbnQgPT09ICdmbGV4LWVuZCcpIHtcbiAgICAgICAgcGFyZW50U3R5bGVzLmp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRTdHlsZXMuanVzdGlmeUNvbnRlbnQgPSB0aGlzLl9qdXN0aWZ5Q29udGVudDtcbiAgICB9XG5cbiAgICBwYXJlbnRTdHlsZXMuYWxpZ25JdGVtcyA9IHNob3VsZEJlRmx1c2hWZXJ0aWNhbGx5ID8gJ2ZsZXgtc3RhcnQnIDogdGhpcy5fYWxpZ25JdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbnMgdXAgdGhlIERPTSBjaGFuZ2VzIGZyb20gdGhlIHBvc2l0aW9uIHN0cmF0ZWd5LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkIHx8ICF0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5fb3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5zdHlsZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9vdmVybGF5UmVmLmhvc3RFbGVtZW50O1xuICAgIGNvbnN0IHBhcmVudFN0eWxlcyA9IHBhcmVudC5zdHlsZTtcblxuICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKHdyYXBwZXJDbGFzcyk7XG4gICAgcGFyZW50U3R5bGVzLmp1c3RpZnlDb250ZW50ID0gcGFyZW50U3R5bGVzLmFsaWduSXRlbXMgPSBzdHlsZXMubWFyZ2luVG9wID1cbiAgICAgIHN0eWxlcy5tYXJnaW5Cb3R0b20gPSBzdHlsZXMubWFyZ2luTGVmdCA9IHN0eWxlcy5tYXJnaW5SaWdodCA9IHN0eWxlcy5wb3NpdGlvbiA9ICcnO1xuXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IG51bGwhO1xuICAgIHRoaXMuX2lzRGlzcG9zZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=