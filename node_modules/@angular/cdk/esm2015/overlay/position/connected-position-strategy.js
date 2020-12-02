/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/position/connected-position-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ConnectionPositionPair, } from './connected-position';
import { FlexibleConnectedPositionStrategy } from './flexible-connected-position-strategy';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@breaking-change 8.0.0
 */
export class ConnectedPositionStrategy {
    /**
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?} connectedTo
     * @param {?} viewportRuler
     * @param {?} document
     * @param {?} platform
     * @param {?} overlayContainer
     */
    constructor(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.
        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer)
            .withFlexibleDimensions(false)
            .withPush(false)
            .withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
    }
    /**
     * Whether the we're dealing with an RTL context
     * @return {?}
     */
    get _isRtl() {
        return this._overlayRef.getDirection() === 'rtl';
    }
    /**
     * Emits an event when the connection point changes.
     * @return {?}
     */
    get onPositionChange() {
        return this._positionStrategy.positionChanges;
    }
    /**
     * Ordered list of preferred positions, from most to least desirable.
     * @return {?}
     */
    get positions() {
        return this._preferredPositions;
    }
    /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    }
    /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    dispose() {
        this._positionStrategy.dispose();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    detach() {
        this._positionStrategy.detach();
    }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    apply() {
        this._positionStrategy.apply();
    }
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    recalculateLastPosition() {
        this._positionStrategy.reapplyLastPosition();
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    withScrollableContainers(scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    }
    /**
     * Adds a new preferred fallback position.
     * @template THIS
     * @this {THIS}
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {THIS}
     */
    withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
        /** @type {?} */
        const position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        (/** @type {?} */ (this))._preferredPositions.push(position);
        (/** @type {?} */ (this))._positionStrategy.withPositions((/** @type {?} */ (this))._preferredPositions);
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @template THIS
     * @this {THIS}
     * @param {?} dir New layout direction.
     * @return {THIS}
     */
    withDirection(dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if ((/** @type {?} */ (this))._overlayRef) {
            (/** @type {?} */ (this))._overlayRef.setDirection(dir);
        }
        else {
            (/** @type {?} */ (this))._direction = dir;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the X axis.
     * @return {THIS}
     */
    withOffsetX(offset) {
        (/** @type {?} */ (this))._positionStrategy.withDefaultOffsetX(offset);
        return (/** @type {?} */ (this));
    }
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the Y axis.
     * @return {THIS}
     */
    withOffsetY(offset) {
        (/** @type {?} */ (this))._positionStrategy.withDefaultOffsetY(offset);
        return (/** @type {?} */ (this));
    }
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @template THIS
     * @this {THIS}
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {THIS}
     */
    withLockedPosition(isLocked) {
        (/** @type {?} */ (this))._positionStrategy.withLockedPosition(isLocked);
        return (/** @type {?} */ (this));
    }
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @template THIS
     * @this {THIS}
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {THIS}
     */
    withPositions(positions) {
        (/** @type {?} */ (this))._preferredPositions = positions.slice();
        (/** @type {?} */ (this))._positionStrategy.withPositions((/** @type {?} */ (this))._preferredPositions);
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Reference to the new origin element.
     * @return {THIS}
     */
    setOrigin(origin) {
        (/** @type {?} */ (this))._positionStrategy.setOrigin(origin);
        return (/** @type {?} */ (this));
    }
}
if (false) {
    /**
     * Reference to the underlying position strategy to which all the API calls are proxied.
     * \@docs-private
     * @type {?}
     */
    ConnectedPositionStrategy.prototype._positionStrategy;
    /**
     * The overlay to which this strategy is attached.
     * @type {?}
     * @private
     */
    ConnectedPositionStrategy.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    ConnectedPositionStrategy.prototype._direction;
    /**
     * Ordered list of preferred positions, from most to least desirable.
     * @type {?}
     */
    ConnectedPositionStrategy.prototype._preferredPositions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGVkLXBvc2l0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Bvc2l0aW9uL2Nvbm5lY3RlZC1wb3NpdGlvbi1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUVMLHNCQUFzQixHQUd2QixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7Ozs7O0FBWXpGLE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7Ozs7SUF5QnBDLFlBQ0ksU0FBbUMsRUFBRSxVQUFxQyxFQUMxRSxXQUFvQyxFQUFFLGFBQTRCLEVBQUUsUUFBa0IsRUFDdEYsUUFBa0IsRUFBRSxnQkFBa0M7Ozs7UUFWMUQsd0JBQW1CLEdBQTZCLEVBQUUsQ0FBQztRQVdqRCxvRkFBb0Y7UUFDcEYsbUZBQW1GO1FBQ25GLCtFQUErRTtRQUMvRSw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUNBQWlDLENBQ2pDLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQzthQUNoRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7YUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUEzQkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxLQUFLLEtBQUssQ0FBQztJQUNuRCxDQUFDOzs7OztJQU1ELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztJQUNo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Q0FBQztRQUM3QyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMvRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFNRCxTQUFTLENBQUMsTUFBa0I7UUFDMUIsbUJBQUEsSUFBSSxFQUFBLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDO0NBQ0Y7Ozs7Ozs7SUEzS0Msc0RBQXFEOzs7Ozs7SUFHckQsZ0RBQXNDOzs7OztJQUV0QywrQ0FBcUM7Ozs7O0lBUXJDLHdEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7Q2RrU2Nyb2xsYWJsZSwgVmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtPdmVybGF5Q29udGFpbmVyfSBmcm9tICcuLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQge092ZXJsYXlSZWZlcmVuY2V9IGZyb20gJy4uL292ZXJsYXktcmVmZXJlbmNlJztcblxuaW1wb3J0IHtcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sXG4gIE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24sXG59IGZyb20gJy4vY29ubmVjdGVkLXBvc2l0aW9uJztcbmltcG9ydCB7RmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5fSBmcm9tICcuL2ZsZXhpYmxlLWNvbm5lY3RlZC1wb3NpdGlvbi1zdHJhdGVneSc7XG5pbXBvcnQge1Bvc2l0aW9uU3RyYXRlZ3l9IGZyb20gJy4vcG9zaXRpb24tc3RyYXRlZ3knO1xuXG4vKipcbiAqIEEgc3RyYXRlZ3kgZm9yIHBvc2l0aW9uaW5nIG92ZXJsYXlzLiBVc2luZyB0aGlzIHN0cmF0ZWd5LCBhbiBvdmVybGF5IGlzIGdpdmVuIGFuXG4gKiBpbXBsaWNpdCBwb3NpdGlvbiByZWxhdGl2ZSB0byBzb21lIG9yaWdpbiBlbGVtZW50LiBUaGUgcmVsYXRpdmUgcG9zaXRpb24gaXMgZGVmaW5lZCBpbiB0ZXJtcyBvZlxuICogYSBwb2ludCBvbiB0aGUgb3JpZ2luIGVsZW1lbnQgdGhhdCBpcyBjb25uZWN0ZWQgdG8gYSBwb2ludCBvbiB0aGUgb3ZlcmxheSBlbGVtZW50LiBGb3IgZXhhbXBsZSxcbiAqIGEgYmFzaWMgZHJvcGRvd24gaXMgY29ubmVjdGluZyB0aGUgYm90dG9tLWxlZnQgY29ybmVyIG9mIHRoZSBvcmlnaW4gdG8gdGhlIHRvcC1sZWZ0IGNvcm5lclxuICogb2YgdGhlIG92ZXJsYXkuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneWAgaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiAqL1xuZXhwb3J0IGNsYXNzIENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kgaW1wbGVtZW50cyBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBwb3NpdGlvbiBzdHJhdGVneSB0byB3aGljaCBhbGwgdGhlIEFQSSBjYWxscyBhcmUgcHJveGllZC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgX3Bvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcblxuICAvKiogVGhlIG92ZXJsYXkgdG8gd2hpY2ggdGhpcyBzdHJhdGVneSBpcyBhdHRhY2hlZC4gKi9cbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZmVyZW5jZTtcblxuICBwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbiB8IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHdlJ3JlIGRlYWxpbmcgd2l0aCBhbiBSVEwgY29udGV4dCAqL1xuICBnZXQgX2lzUnRsKCkge1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5UmVmLmdldERpcmVjdGlvbigpID09PSAncnRsJztcbiAgfVxuXG4gIC8qKiBPcmRlcmVkIGxpc3Qgb2YgcHJlZmVycmVkIHBvc2l0aW9ucywgZnJvbSBtb3N0IHRvIGxlYXN0IGRlc2lyYWJsZS4gKi9cbiAgX3ByZWZlcnJlZFBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW107XG5cbiAgLyoqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGNvbm5lY3Rpb24gcG9pbnQgY2hhbmdlcy4gKi9cbiAgZ2V0IG9uUG9zaXRpb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTxDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25TdHJhdGVneS5wb3NpdGlvbkNoYW5nZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIG9yaWdpblBvczogT3JpZ2luQ29ubmVjdGlvblBvc2l0aW9uLCBvdmVybGF5UG9zOiBPdmVybGF5Q29ubmVjdGlvblBvc2l0aW9uLFxuICAgICAgY29ubmVjdGVkVG86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCB2aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLCBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICBwbGF0Zm9ybTogUGxhdGZvcm0sIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIpIHtcbiAgICAvLyBTaW5jZSB0aGUgYENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3lgIGlzIGRlcHJlY2F0ZWQgYW5kIHdlIGRvbid0IHdhbnQgdG8gbWFpbnRhaW5cbiAgICAvLyB0aGUgZXh0cmEgbG9naWMsIHdlIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgcG9zaXRpb25pbmcgc3RyYXRlZ3kgdGhhdCBoYXMgc29tZVxuICAgIC8vIGRlZmF1bHRzIHRoYXQgbWFrZSBpdCBiZWhhdmUgYXMgdGhlIG9sZCBwb3NpdGlvbiBzdHJhdGVneSBhbmQgdG8gd2hpY2ggd2UnbGxcbiAgICAvLyBwcm94eSBhbGwgb2YgdGhlIEFQSSBjYWxscy5cbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5ID0gbmV3IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFRvLCB2aWV3cG9ydFJ1bGVyLCBkb2N1bWVudCwgcGxhdGZvcm0sIG92ZXJsYXlDb250YWluZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoUHVzaChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oMCk7XG5cbiAgICB0aGlzLndpdGhGYWxsYmFja1Bvc2l0aW9uKG9yaWdpblBvcywgb3ZlcmxheVBvcyk7XG4gIH1cblxuICAvKiogT3JkZXJlZCBsaXN0IG9mIHByZWZlcnJlZCBwb3NpdGlvbnMsIGZyb20gbW9zdCB0byBsZWFzdCBkZXNpcmFibGUuICovXG4gIGdldCBwb3NpdGlvbnMoKTogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZmVycmVkUG9zaXRpb25zO1xuICB9XG5cbiAgLyoqIEF0dGFjaCB0aGlzIHBvc2l0aW9uIHN0cmF0ZWd5IHRvIGFuIG92ZXJsYXkuICovXG4gIGF0dGFjaChvdmVybGF5UmVmOiBPdmVybGF5UmVmZXJlbmNlKTogdm9pZCB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IG92ZXJsYXlSZWY7XG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS5hdHRhY2gob3ZlcmxheVJlZik7XG5cbiAgICBpZiAodGhpcy5fZGlyZWN0aW9uKSB7XG4gICAgICBvdmVybGF5UmVmLnNldERpcmVjdGlvbih0aGlzLl9kaXJlY3Rpb24pO1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogRGlzcG9zZXMgYWxsIHJlc291cmNlcyB1c2VkIGJ5IHRoZSBwb3NpdGlvbiBzdHJhdGVneS4gKi9cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LmRpc3Bvc2UoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LmRldGFjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBvdmVybGF5IGVsZW1lbnQsIHVzaW5nIHdoaWNoZXZlciBwcmVmZXJyZWQgcG9zaXRpb24gcmVsYXRpdmVcbiAgICogdG8gdGhlIG9yaWdpbiBmaXRzIG9uLXNjcmVlbi5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgYXBwbHkoKTogdm9pZCB7XG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS5hcHBseSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlLXBvc2l0aW9ucyB0aGUgb3ZlcmxheSBlbGVtZW50IHdpdGggdGhlIHRyaWdnZXIgaW4gaXRzIGxhc3QgY2FsY3VsYXRlZCBwb3NpdGlvbixcbiAgICogZXZlbiBpZiBhIHBvc2l0aW9uIGhpZ2hlciBpbiB0aGUgXCJwcmVmZXJyZWQgcG9zaXRpb25zXCIgbGlzdCB3b3VsZCBub3cgZml0LiBUaGlzXG4gICAqIGFsbG93cyBvbmUgdG8gcmUtYWxpZ24gdGhlIHBhbmVsIHdpdGhvdXQgY2hhbmdpbmcgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwYW5lbC5cbiAgICovXG4gIHJlY2FsY3VsYXRlTGFzdFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kucmVhcHBseUxhc3RQb3NpdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxpc3Qgb2YgU2Nyb2xsYWJsZSBjb250YWluZXJzIHRoYXQgaG9zdCB0aGUgb3JpZ2luIGVsZW1lbnQgc28gdGhhdFxuICAgKiBvbiByZXBvc2l0aW9uIHdlIGNhbiBldmFsdWF0ZSBpZiBpdCBvciB0aGUgb3ZlcmxheSBoYXMgYmVlbiBjbGlwcGVkIG9yIG91dHNpZGUgdmlldy4gRXZlcnlcbiAgICogU2Nyb2xsYWJsZSBtdXN0IGJlIGFuIGFuY2VzdG9yIGVsZW1lbnQgb2YgdGhlIHN0cmF0ZWd5J3Mgb3JpZ2luIGVsZW1lbnQuXG4gICAqL1xuICB3aXRoU2Nyb2xsYWJsZUNvbnRhaW5lcnMoc2Nyb2xsYWJsZXM6IENka1Njcm9sbGFibGVbXSkge1xuICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kud2l0aFNjcm9sbGFibGVDb250YWluZXJzKHNjcm9sbGFibGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IHByZWZlcnJlZCBmYWxsYmFjayBwb3NpdGlvbi5cbiAgICogQHBhcmFtIG9yaWdpblBvc1xuICAgKiBAcGFyYW0gb3ZlcmxheVBvc1xuICAgKi9cbiAgd2l0aEZhbGxiYWNrUG9zaXRpb24oXG4gICAgICBvcmlnaW5Qb3M6IE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbixcbiAgICAgIG92ZXJsYXlQb3M6IE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24sXG4gICAgICBvZmZzZXRYPzogbnVtYmVyLFxuICAgICAgb2Zmc2V0WT86IG51bWJlcik6IHRoaXMge1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihvcmlnaW5Qb3MsIG92ZXJsYXlQb3MsIG9mZnNldFgsIG9mZnNldFkpO1xuICAgIHRoaXMuX3ByZWZlcnJlZFBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnModGhpcy5fcHJlZmVycmVkUG9zaXRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBsYXlvdXQgZGlyZWN0aW9uIHNvIHRoZSBvdmVybGF5J3MgcG9zaXRpb24gY2FuIGJlIGFkanVzdGVkIHRvIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyIE5ldyBsYXlvdXQgZGlyZWN0aW9uLlxuICAgKi9cbiAgd2l0aERpcmVjdGlvbihkaXI6ICdsdHInIHwgJ3J0bCcpOiB0aGlzIHtcbiAgICAvLyBTaW5jZSB0aGUgZGlyZWN0aW9uIG1pZ2h0IGJlIGRlY2xhcmVkIGJlZm9yZSB0aGUgc3RyYXRlZ3kgaXMgYXR0YWNoZWQsXG4gICAgLy8gd2Ugc2F2ZSB0aGUgdmFsdWUgaW4gYSB0ZW1wb3JhcnkgcHJvcGVydHkgYW5kIHdlJ2xsIHRyYW5zZmVyIGl0IHRvIHRoZVxuICAgIC8vIG92ZXJsYXkgcmVmIG9uIGF0dGFjaG1lbnQuXG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuc2V0RGlyZWN0aW9uKGRpcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIG9mZnNldCBmb3IgdGhlIG92ZXJsYXkncyBjb25uZWN0aW9uIHBvaW50IG9uIHRoZSB4LWF4aXNcbiAgICogQHBhcmFtIG9mZnNldCBOZXcgb2Zmc2V0IGluIHRoZSBYIGF4aXMuXG4gICAqL1xuICB3aXRoT2Zmc2V0WChvZmZzZXQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kud2l0aERlZmF1bHRPZmZzZXRYKG9mZnNldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbiBvZmZzZXQgZm9yIHRoZSBvdmVybGF5J3MgY29ubmVjdGlvbiBwb2ludCBvbiB0aGUgeS1heGlzXG4gICAqIEBwYXJhbSAgb2Zmc2V0IE5ldyBvZmZzZXQgaW4gdGhlIFkgYXhpcy5cbiAgICovXG4gIHdpdGhPZmZzZXRZKG9mZnNldDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS53aXRoRGVmYXVsdE9mZnNldFkob2Zmc2V0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgdGhlIG92ZXJsYXkncyBwb3NpdGlvbiBzaG91bGQgYmUgbG9ja2VkIGluIGFmdGVyIGl0IGlzIHBvc2l0aW9uZWRcbiAgICogaW5pdGlhbGx5LiBXaGVuIGFuIG92ZXJsYXkgaXMgbG9ja2VkIGluLCBpdCB3b24ndCBhdHRlbXB0IHRvIHJlcG9zaXRpb24gaXRzZWxmXG4gICAqIHdoZW4gdGhlIHBvc2l0aW9uIGlzIHJlLWFwcGxpZWQgKGUuZy4gd2hlbiB0aGUgdXNlciBzY3JvbGxzIGF3YXkpLlxuICAgKiBAcGFyYW0gaXNMb2NrZWQgV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgbG9ja2VkIGluLlxuICAgKi9cbiAgd2l0aExvY2tlZFBvc2l0aW9uKGlzTG9ja2VkOiBib29sZWFuKTogdGhpcyB7XG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS53aXRoTG9ja2VkUG9zaXRpb24oaXNMb2NrZWQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZXMgdGhlIGN1cnJlbnQgc2V0IG9mIHBvc2l0aW9ucyB3aXRoIGFuIGFycmF5IG9mIG5ldyBvbmVzLlxuICAgKiBAcGFyYW0gcG9zaXRpb25zIFBvc2l0aW9uIHBhaXJzIHRvIGJlIHNldCBvbiB0aGUgc3RyYXRlZ3kuXG4gICAqL1xuICB3aXRoUG9zaXRpb25zKHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdKTogdGhpcyB7XG4gICAgdGhpcy5fcHJlZmVycmVkUG9zaXRpb25zID0gcG9zaXRpb25zLnNsaWNlKCk7XG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKHRoaXMuX3ByZWZlcnJlZFBvc2l0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgb3JpZ2luIGVsZW1lbnQsIHJlbGF0aXZlIHRvIHdoaWNoIHRvIHBvc2l0aW9uIHRoZSBvdmVybGF5LlxuICAgKiBAcGFyYW0gb3JpZ2luIFJlZmVyZW5jZSB0byB0aGUgbmV3IG9yaWdpbiBlbGVtZW50LlxuICAgKi9cbiAgc2V0T3JpZ2luKG9yaWdpbjogRWxlbWVudFJlZik6IHRoaXMge1xuICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kuc2V0T3JpZ2luKG9yaWdpbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==