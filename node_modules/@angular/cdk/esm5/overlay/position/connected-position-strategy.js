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
 * @breaking-change 8.0.0
 */
var ConnectedPositionStrategy = /** @class */ (function () {
    function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        /** Ordered list of preferred positions, from most to least desirable. */
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
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: function () {
            return this._overlayRef.getDirection() === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: function () {
            return this._positionStrategy.positionChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attach this position strategy to an overlay. */
    ConnectedPositionStrategy.prototype.attach = function (overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    };
    /** Disposes all resources used by the position strategy. */
    ConnectedPositionStrategy.prototype.dispose = function () {
        this._positionStrategy.dispose();
    };
    /** @docs-private */
    ConnectedPositionStrategy.prototype.detach = function () {
        this._positionStrategy.detach();
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    ConnectedPositionStrategy.prototype.apply = function () {
        this._positionStrategy.apply();
    };
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = function () {
        this._positionStrategy.reapplyLastPosition();
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = function (scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    };
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos, offsetX, offsetY) {
        var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        this._preferredPositions.push(position);
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    ConnectedPositionStrategy.prototype.withDirection = function (dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if (this._overlayRef) {
            this._overlayRef.setDirection(dir);
        }
        else {
            this._direction = dir;
        }
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    ConnectedPositionStrategy.prototype.withOffsetX = function (offset) {
        this._positionStrategy.withDefaultOffsetX(offset);
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    ConnectedPositionStrategy.prototype.withOffsetY = function (offset) {
        this._positionStrategy.withDefaultOffsetY(offset);
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    ConnectedPositionStrategy.prototype.withLockedPosition = function (isLocked) {
        this._positionStrategy.withLockedPosition(isLocked);
        return this;
    };
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    ConnectedPositionStrategy.prototype.withPositions = function (positions) {
        this._preferredPositions = positions.slice();
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    ConnectedPositionStrategy.prototype.setOrigin = function (origin) {
        this._positionStrategy.setOrigin(origin);
        return this;
    };
    return ConnectedPositionStrategy;
}());
export { ConnectedPositionStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGVkLXBvc2l0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Bvc2l0aW9uL2Nvbm5lY3RlZC1wb3NpdGlvbi1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFXSCxPQUFPLEVBRUwsc0JBQXNCLEdBR3ZCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFHekY7Ozs7Ozs7O0dBUUc7QUFDSDtJQXlCRSxtQ0FDSSxTQUFtQyxFQUFFLFVBQXFDLEVBQzFFLFdBQW9DLEVBQUUsYUFBNEIsRUFBRSxRQUFrQixFQUN0RixRQUFrQixFQUFFLGdCQUFrQztRQVgxRCx5RUFBeUU7UUFDekUsd0JBQW1CLEdBQTZCLEVBQUUsQ0FBQztRQVdqRCxvRkFBb0Y7UUFDcEYsbUZBQW1GO1FBQ25GLCtFQUErRTtRQUMvRSw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUNBQWlDLENBQ2pDLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQzthQUNoRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7YUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTNCRCxzQkFBSSw2Q0FBTTtRQURWLG9EQUFvRDthQUNwRDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx1REFBZ0I7UUFEcEIsd0RBQXdEO2FBQ3hEO1lB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LEdBQWIsVUFBYyxTQUFtQztRQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDL0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNkNBQVMsR0FBVCxVQUFVLE1BQWtCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBaExELElBZ0xDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtDZGtTY3JvbGxhYmxlLCBWaWV3cG9ydFJ1bGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge092ZXJsYXlDb250YWluZXJ9IGZyb20gJy4uL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7T3ZlcmxheVJlZmVyZW5jZX0gZnJvbSAnLi4vb3ZlcmxheS1yZWZlcmVuY2UnO1xuXG5pbXBvcnQge1xuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbixcbiAgT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbixcbn0gZnJvbSAnLi9jb25uZWN0ZWQtcG9zaXRpb24nO1xuaW1wb3J0IHtGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3l9IGZyb20gJy4vZmxleGlibGUtY29ubmVjdGVkLXBvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7UG9zaXRpb25TdHJhdGVneX0gZnJvbSAnLi9wb3NpdGlvbi1zdHJhdGVneSc7XG5cbi8qKlxuICogQSBzdHJhdGVneSBmb3IgcG9zaXRpb25pbmcgb3ZlcmxheXMuIFVzaW5nIHRoaXMgc3RyYXRlZ3ksIGFuIG92ZXJsYXkgaXMgZ2l2ZW4gYW5cbiAqIGltcGxpY2l0IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHNvbWUgb3JpZ2luIGVsZW1lbnQuIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBpcyBkZWZpbmVkIGluIHRlcm1zIG9mXG4gKiBhIHBvaW50IG9uIHRoZSBvcmlnaW4gZWxlbWVudCB0aGF0IGlzIGNvbm5lY3RlZCB0byBhIHBvaW50IG9uIHRoZSBvdmVybGF5IGVsZW1lbnQuIEZvciBleGFtcGxlLFxuICogYSBiYXNpYyBkcm9wZG93biBpcyBjb25uZWN0aW5nIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgb2YgdGhlIG9yaWdpbiB0byB0aGUgdG9wLWxlZnQgY29ybmVyXG4gKiBvZiB0aGUgb3ZlcmxheS5cbiAqIEBkZXByZWNhdGVkIFVzZSBgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5YCBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICovXG5leHBvcnQgY2xhc3MgQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSBpbXBsZW1lbnRzIFBvc2l0aW9uU3RyYXRlZ3kge1xuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIHBvc2l0aW9uIHN0cmF0ZWd5IHRvIHdoaWNoIGFsbCB0aGUgQVBJIGNhbGxzIGFyZSBwcm94aWVkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBfcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuXG4gIC8qKiBUaGUgb3ZlcmxheSB0byB3aGljaCB0aGlzIHN0cmF0ZWd5IGlzIGF0dGFjaGVkLiAqL1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmZXJlbmNlO1xuXG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uIHwgbnVsbDtcblxuICAvKiogV2hldGhlciB0aGUgd2UncmUgZGVhbGluZyB3aXRoIGFuIFJUTCBjb250ZXh0ICovXG4gIGdldCBfaXNSdGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlSZWYuZ2V0RGlyZWN0aW9uKCkgPT09ICdydGwnO1xuICB9XG5cbiAgLyoqIE9yZGVyZWQgbGlzdCBvZiBwcmVmZXJyZWQgcG9zaXRpb25zLCBmcm9tIG1vc3QgdG8gbGVhc3QgZGVzaXJhYmxlLiAqL1xuICBfcHJlZmVycmVkUG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXTtcblxuICAvKiogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgY29ubmVjdGlvbiBwb2ludCBjaGFuZ2VzLiAqL1xuICBnZXQgb25Qb3NpdGlvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZT4ge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LnBvc2l0aW9uQ2hhbmdlcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgb3JpZ2luUG9zOiBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sIG92ZXJsYXlQb3M6IE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24sXG4gICAgICBjb25uZWN0ZWRUbzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgIHBsYXRmb3JtOiBQbGF0Zm9ybSwgb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcikge1xuICAgIC8vIFNpbmNlIHRoZSBgQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneWAgaXMgZGVwcmVjYXRlZCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBtYWludGFpblxuICAgIC8vIHRoZSBleHRyYSBsb2dpYywgd2UgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBwb3NpdGlvbmluZyBzdHJhdGVneSB0aGF0IGhhcyBzb21lXG4gICAgLy8gZGVmYXVsdHMgdGhhdCBtYWtlIGl0IGJlaGF2ZSBhcyB0aGUgb2xkIHBvc2l0aW9uIHN0cmF0ZWd5IGFuZCB0byB3aGljaCB3ZSdsbFxuICAgIC8vIHByb3h5IGFsbCBvZiB0aGUgQVBJIGNhbGxzLlxuICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kgPSBuZXcgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkVG8sIHZpZXdwb3J0UnVsZXIsIGRvY3VtZW50LCBwbGF0Zm9ybSwgb3ZlcmxheUNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhQdXNoKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhWaWV3cG9ydE1hcmdpbigwKTtcblxuICAgIHRoaXMud2l0aEZhbGxiYWNrUG9zaXRpb24ob3JpZ2luUG9zLCBvdmVybGF5UG9zKTtcbiAgfVxuXG4gIC8qKiBPcmRlcmVkIGxpc3Qgb2YgcHJlZmVycmVkIHBvc2l0aW9ucywgZnJvbSBtb3N0IHRvIGxlYXN0IGRlc2lyYWJsZS4gKi9cbiAgZ2V0IHBvc2l0aW9ucygpOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRQb3NpdGlvbnM7XG4gIH1cblxuICAvKiogQXR0YWNoIHRoaXMgcG9zaXRpb24gc3RyYXRlZ3kgdG8gYW4gb3ZlcmxheS4gKi9cbiAgYXR0YWNoKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWZlcmVuY2UpOiB2b2lkIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gb3ZlcmxheVJlZjtcbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LmF0dGFjaChvdmVybGF5UmVmKTtcblxuICAgIGlmICh0aGlzLl9kaXJlY3Rpb24pIHtcbiAgICAgIG92ZXJsYXlSZWYuc2V0RGlyZWN0aW9uKHRoaXMuX2RpcmVjdGlvbik7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEaXNwb3NlcyBhbGwgcmVzb3VyY2VzIHVzZWQgYnkgdGhlIHBvc2l0aW9uIHN0cmF0ZWd5LiAqL1xuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kuZGlzcG9zZSgpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kuZGV0YWNoKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIG92ZXJsYXkgZWxlbWVudCwgdXNpbmcgd2hpY2hldmVyIHByZWZlcnJlZCBwb3NpdGlvbiByZWxhdGl2ZVxuICAgKiB0byB0aGUgb3JpZ2luIGZpdHMgb24tc2NyZWVuLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBhcHBseSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LmFwcGx5KCk7XG4gIH1cblxuICAvKipcbiAgICogUmUtcG9zaXRpb25zIHRoZSBvdmVybGF5IGVsZW1lbnQgd2l0aCB0aGUgdHJpZ2dlciBpbiBpdHMgbGFzdCBjYWxjdWxhdGVkIHBvc2l0aW9uLFxuICAgKiBldmVuIGlmIGEgcG9zaXRpb24gaGlnaGVyIGluIHRoZSBcInByZWZlcnJlZCBwb3NpdGlvbnNcIiBsaXN0IHdvdWxkIG5vdyBmaXQuIFRoaXNcbiAgICogYWxsb3dzIG9uZSB0byByZS1hbGlnbiB0aGUgcGFuZWwgd2l0aG91dCBjaGFuZ2luZyB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBhbmVsLlxuICAgKi9cbiAgcmVjYWxjdWxhdGVMYXN0UG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS5yZWFwcGx5TGFzdFBvc2l0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbGlzdCBvZiBTY3JvbGxhYmxlIGNvbnRhaW5lcnMgdGhhdCBob3N0IHRoZSBvcmlnaW4gZWxlbWVudCBzbyB0aGF0XG4gICAqIG9uIHJlcG9zaXRpb24gd2UgY2FuIGV2YWx1YXRlIGlmIGl0IG9yIHRoZSBvdmVybGF5IGhhcyBiZWVuIGNsaXBwZWQgb3Igb3V0c2lkZSB2aWV3LiBFdmVyeVxuICAgKiBTY3JvbGxhYmxlIG11c3QgYmUgYW4gYW5jZXN0b3IgZWxlbWVudCBvZiB0aGUgc3RyYXRlZ3kncyBvcmlnaW4gZWxlbWVudC5cbiAgICovXG4gIHdpdGhTY3JvbGxhYmxlQ29udGFpbmVycyhzY3JvbGxhYmxlczogQ2RrU2Nyb2xsYWJsZVtdKSB7XG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS53aXRoU2Nyb2xsYWJsZUNvbnRhaW5lcnMoc2Nyb2xsYWJsZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgcHJlZmVycmVkIGZhbGxiYWNrIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gb3JpZ2luUG9zXG4gICAqIEBwYXJhbSBvdmVybGF5UG9zXG4gICAqL1xuICB3aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgIG9yaWdpblBvczogT3JpZ2luQ29ubmVjdGlvblBvc2l0aW9uLFxuICAgICAgb3ZlcmxheVBvczogT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbixcbiAgICAgIG9mZnNldFg/OiBudW1iZXIsXG4gICAgICBvZmZzZXRZPzogbnVtYmVyKTogdGhpcyB7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKG9yaWdpblBvcywgb3ZlcmxheVBvcywgb2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgdGhpcy5fcHJlZmVycmVkUG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgIHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyh0aGlzLl9wcmVmZXJyZWRQb3NpdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxheW91dCBkaXJlY3Rpb24gc28gdGhlIG92ZXJsYXkncyBwb3NpdGlvbiBjYW4gYmUgYWRqdXN0ZWQgdG8gbWF0Y2guXG4gICAqIEBwYXJhbSBkaXIgTmV3IGxheW91dCBkaXJlY3Rpb24uXG4gICAqL1xuICB3aXRoRGlyZWN0aW9uKGRpcjogJ2x0cicgfCAncnRsJyk6IHRoaXMge1xuICAgIC8vIFNpbmNlIHRoZSBkaXJlY3Rpb24gbWlnaHQgYmUgZGVjbGFyZWQgYmVmb3JlIHRoZSBzdHJhdGVneSBpcyBhdHRhY2hlZCxcbiAgICAvLyB3ZSBzYXZlIHRoZSB2YWx1ZSBpbiBhIHRlbXBvcmFyeSBwcm9wZXJ0eSBhbmQgd2UnbGwgdHJhbnNmZXIgaXQgdG8gdGhlXG4gICAgLy8gb3ZlcmxheSByZWYgb24gYXR0YWNobWVudC5cbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5zZXREaXJlY3Rpb24oZGlyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gb2Zmc2V0IGZvciB0aGUgb3ZlcmxheSdzIGNvbm5lY3Rpb24gcG9pbnQgb24gdGhlIHgtYXhpc1xuICAgKiBAcGFyYW0gb2Zmc2V0IE5ldyBvZmZzZXQgaW4gdGhlIFggYXhpcy5cbiAgICovXG4gIHdpdGhPZmZzZXRYKG9mZnNldDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS53aXRoRGVmYXVsdE9mZnNldFgob2Zmc2V0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIG9mZnNldCBmb3IgdGhlIG92ZXJsYXkncyBjb25uZWN0aW9uIHBvaW50IG9uIHRoZSB5LWF4aXNcbiAgICogQHBhcmFtICBvZmZzZXQgTmV3IG9mZnNldCBpbiB0aGUgWSBheGlzLlxuICAgKi9cbiAgd2l0aE9mZnNldFkob2Zmc2V0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LndpdGhEZWZhdWx0T2Zmc2V0WShvZmZzZXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgd2hldGhlciB0aGUgb3ZlcmxheSdzIHBvc2l0aW9uIHNob3VsZCBiZSBsb2NrZWQgaW4gYWZ0ZXIgaXQgaXMgcG9zaXRpb25lZFxuICAgKiBpbml0aWFsbHkuIFdoZW4gYW4gb3ZlcmxheSBpcyBsb2NrZWQgaW4sIGl0IHdvbid0IGF0dGVtcHQgdG8gcmVwb3NpdGlvbiBpdHNlbGZcbiAgICogd2hlbiB0aGUgcG9zaXRpb24gaXMgcmUtYXBwbGllZCAoZS5nLiB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgYXdheSkuXG4gICAqIEBwYXJhbSBpc0xvY2tlZCBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCBsb2NrZWQgaW4uXG4gICAqL1xuICB3aXRoTG9ja2VkUG9zaXRpb24oaXNMb2NrZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LndpdGhMb2NrZWRQb3NpdGlvbihpc0xvY2tlZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcndyaXRlcyB0aGUgY3VycmVudCBzZXQgb2YgcG9zaXRpb25zIHdpdGggYW4gYXJyYXkgb2YgbmV3IG9uZXMuXG4gICAqIEBwYXJhbSBwb3NpdGlvbnMgUG9zaXRpb24gcGFpcnMgdG8gYmUgc2V0IG9uIHRoZSBzdHJhdGVneS5cbiAgICovXG4gIHdpdGhQb3NpdGlvbnMocG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10pOiB0aGlzIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRQb3NpdGlvbnMgPSBwb3NpdGlvbnMuc2xpY2UoKTtcbiAgICB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnModGhpcy5fcHJlZmVycmVkUG9zaXRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBvcmlnaW4gZWxlbWVudCwgcmVsYXRpdmUgdG8gd2hpY2ggdG8gcG9zaXRpb24gdGhlIG92ZXJsYXkuXG4gICAqIEBwYXJhbSBvcmlnaW4gUmVmZXJlbmNlIHRvIHRoZSBuZXcgb3JpZ2luIGVsZW1lbnQuXG4gICAqL1xuICBzZXRPcmlnaW4ob3JpZ2luOiBFbGVtZW50UmVmKTogdGhpcyB7XG4gICAgdGhpcy5fcG9zaXRpb25TdHJhdGVneS5zZXRPcmlnaW4ob3JpZ2luKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19