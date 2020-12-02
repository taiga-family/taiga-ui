/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Horizontal dimension of a connection point on the perimeter of the origin or overlay element. */
import { Optional } from '@angular/core';
/** The points of the origin element and the overlay element to connect. */
var ConnectionPositionPair = /** @class */ (function () {
    function ConnectionPositionPair(origin, overlay, 
    /** Offset along the X axis. */
    offsetX, 
    /** Offset along the Y axis. */
    offsetY, 
    /** Class(es) to be applied to the panel while this position is active. */
    panelClass) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
export { ConnectionPositionPair };
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
var ScrollingVisibility = /** @class */ (function () {
    function ScrollingVisibility() {
    }
    return ScrollingVisibility;
}());
export { ScrollingVisibility };
/** The change event emitted by the strategy when a fallback position is used. */
var ConnectedOverlayPositionChange = /** @class */ (function () {
    function ConnectedOverlayPositionChange(
    /** The position used as a result of this change. */
    connectionPair, 
    /** @docs-private */
    scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    /** @nocollapse */
    ConnectedOverlayPositionChange.ctorParameters = function () { return [
        { type: ConnectionPositionPair },
        { type: ScrollingVisibility, decorators: [{ type: Optional }] }
    ]; };
    return ConnectedOverlayPositionChange;
}());
export { ConnectedOverlayPositionChange };
/**
 * Validates whether a vertical position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
export function validateVerticalPosition(property, value) {
    if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"top\", \"bottom\" or \"center\".");
    }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
export function validateHorizontalPosition(property, value) {
    if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"start\", \"end\" or \"center\".");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGVkLXBvc2l0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Bvc2l0aW9uL2Nvbm5lY3RlZC1wb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxvR0FBb0c7QUFDcEcsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQW1CdkMsMkVBQTJFO0FBQzNFO0lBVUUsZ0NBQ0UsTUFBZ0MsRUFDaEMsT0FBa0M7SUFDbEMsK0JBQStCO0lBQ3hCLE9BQWdCO0lBQ3ZCLCtCQUErQjtJQUN4QixPQUFnQjtJQUN2QiwwRUFBMEU7SUFDbkUsVUFBOEI7UUFKOUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUVoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRWhCLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBRXJDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFDSDtJQUFBO0lBS0EsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQsaUZBQWlGO0FBQ2pGO0lBQ0U7SUFDSSxvREFBb0Q7SUFDN0MsY0FBc0M7SUFDN0Msb0JBQW9CO0lBQ0Qsd0JBQTZDO1FBRnpELG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtRQUUxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXFCO0lBQUcsQ0FBQzs7O2dCQUY3QyxzQkFBc0I7Z0JBRUEsbUJBQW1CLHVCQUEvRCxRQUFROztJQUNmLHFDQUFDO0NBQUEsQUFORCxJQU1DO1NBTlksOEJBQThCO0FBUTNDOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLHdCQUF3QixDQUFDLFFBQWdCLEVBQUUsS0FBNEI7SUFDckYsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMvRCxNQUFNLEtBQUssQ0FBQyxnQ0FBOEIsUUFBUSxXQUFLLEtBQUssU0FBSztZQUNyRCw2Q0FBdUMsQ0FBQyxDQUFDO0tBQ3REO0FBQ0gsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLDBCQUEwQixDQUFDLFFBQWdCLEVBQUUsS0FBOEI7SUFDekYsSUFBSSxLQUFLLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM5RCxNQUFNLEtBQUssQ0FBQyxnQ0FBOEIsUUFBUSxXQUFLLEtBQUssU0FBSztZQUNyRCw0Q0FBc0MsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiogSG9yaXpvbnRhbCBkaW1lbnNpb24gb2YgYSBjb25uZWN0aW9uIHBvaW50IG9uIHRoZSBwZXJpbWV0ZXIgb2YgdGhlIG9yaWdpbiBvciBvdmVybGF5IGVsZW1lbnQuICovXG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCB0eXBlIEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCc7XG5cbi8qKiBWZXJ0aWNhbCBkaW1lbnNpb24gb2YgYSBjb25uZWN0aW9uIHBvaW50IG9uIHRoZSBwZXJpbWV0ZXIgb2YgdGhlIG9yaWdpbiBvciBvdmVybGF5IGVsZW1lbnQuICovXG5leHBvcnQgdHlwZSBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgPSAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbSc7XG5cblxuLyoqIEEgY29ubmVjdGlvbiBwb2ludCBvbiB0aGUgb3JpZ2luIGVsZW1lbnQuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbiB7XG4gIG9yaWdpblg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zO1xuICBvcmlnaW5ZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3M7XG59XG5cbi8qKiBBIGNvbm5lY3Rpb24gcG9pbnQgb24gdGhlIG92ZXJsYXkgZWxlbWVudC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbiB7XG4gIG92ZXJsYXlYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcbiAgb3ZlcmxheVk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcztcbn1cblxuLyoqIFRoZSBwb2ludHMgb2YgdGhlIG9yaWdpbiBlbGVtZW50IGFuZCB0aGUgb3ZlcmxheSBlbGVtZW50IHRvIGNvbm5lY3QuICovXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB7XG4gIC8qKiBYLWF4aXMgYXR0YWNobWVudCBwb2ludCBmb3IgY29ubmVjdGVkIG92ZXJsYXkgb3JpZ2luLiBDYW4gYmUgJ3N0YXJ0JywgJ2VuZCcsIG9yICdjZW50ZXInLiAqL1xuICBvcmlnaW5YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcbiAgLyoqIFktYXhpcyBhdHRhY2htZW50IHBvaW50IGZvciBjb25uZWN0ZWQgb3ZlcmxheSBvcmlnaW4uIENhbiBiZSAndG9wJywgJ2JvdHRvbScsIG9yICdjZW50ZXInLiAqL1xuICBvcmlnaW5ZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3M7XG4gIC8qKiBYLWF4aXMgYXR0YWNobWVudCBwb2ludCBmb3IgY29ubmVjdGVkIG92ZXJsYXkuIENhbiBiZSAnc3RhcnQnLCAnZW5kJywgb3IgJ2NlbnRlcicuICovXG4gIG92ZXJsYXlYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcbiAgLyoqIFktYXhpcyBhdHRhY2htZW50IHBvaW50IGZvciBjb25uZWN0ZWQgb3ZlcmxheS4gQ2FuIGJlICd0b3AnLCAnYm90dG9tJywgb3IgJ2NlbnRlcicuICovXG4gIG92ZXJsYXlZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3JpZ2luOiBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sXG4gICAgb3ZlcmxheTogT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbixcbiAgICAvKiogT2Zmc2V0IGFsb25nIHRoZSBYIGF4aXMuICovXG4gICAgcHVibGljIG9mZnNldFg/OiBudW1iZXIsXG4gICAgLyoqIE9mZnNldCBhbG9uZyB0aGUgWSBheGlzLiAqL1xuICAgIHB1YmxpYyBvZmZzZXRZPzogbnVtYmVyLFxuICAgIC8qKiBDbGFzcyhlcykgdG8gYmUgYXBwbGllZCB0byB0aGUgcGFuZWwgd2hpbGUgdGhpcyBwb3NpdGlvbiBpcyBhY3RpdmUuICovXG4gICAgcHVibGljIHBhbmVsQ2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuXG4gICAgdGhpcy5vcmlnaW5YID0gb3JpZ2luLm9yaWdpblg7XG4gICAgdGhpcy5vcmlnaW5ZID0gb3JpZ2luLm9yaWdpblk7XG4gICAgdGhpcy5vdmVybGF5WCA9IG92ZXJsYXkub3ZlcmxheVg7XG4gICAgdGhpcy5vdmVybGF5WSA9IG92ZXJsYXkub3ZlcmxheVk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgb2YgcHJvcGVydGllcyByZWdhcmRpbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSBvcmlnaW4gYW5kIG92ZXJsYXkgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0XG4gKiB3aXRoIHJlc3BlY3QgdG8gdGhlIGNvbnRhaW5pbmcgU2Nyb2xsYWJsZSBlbGVtZW50cy5cbiAqXG4gKiBUaGUgb3ZlcmxheSBhbmQgb3JpZ2luIGFyZSBjbGlwcGVkIGlmIGFueSBwYXJ0IG9mIHRoZWlyIGJvdW5kaW5nIGNsaWVudCByZWN0YW5nbGUgZXhjZWVkcyB0aGVcbiAqIGJvdW5kcyBvZiBhbnkgb25lIG9mIHRoZSBzdHJhdGVneSdzIFNjcm9sbGFibGUncyBib3VuZGluZyBjbGllbnQgcmVjdGFuZ2xlLlxuICpcbiAqIFRoZSBvdmVybGF5IGFuZCBvcmlnaW4gYXJlIG91dHNpZGUgdmlldyBpZiB0aGVyZSBpcyBubyBvdmVybGFwIGJldHdlZW4gdGhlaXIgYm91bmRpbmcgY2xpZW50XG4gKiByZWN0YW5nbGUgYW5kIGFueSBvbmUgb2YgdGhlIHN0cmF0ZWd5J3MgU2Nyb2xsYWJsZSdzIGJvdW5kaW5nIGNsaWVudCByZWN0YW5nbGUuXG4gKlxuICogICAgICAgLS0tLS0tLS0tLS0gICAgICAgICAgICAgICAgICAgIC0tLS0tLS0tLS0tXG4gKiAgICAgICB8IG91dHNpZGUgfCAgICAgICAgICAgICAgICAgICAgfCBjbGlwcGVkIHxcbiAqICAgICAgIHwgIHZpZXcgICB8ICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgIHwgICAgICAgICB8ICAgICAgICB8XG4gKiAgICAgICAtLS0tLS0tLS0tICAgICAgICAgICAgICAgfCAgICAgLS0tLS0tLS0tLS0gICAgICAgIHxcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgIHwgICAgICBTY3JvbGxhYmxlICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgfCAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICB8ICAgICAgU2Nyb2xsYWJsZSAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiAgQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgU2Nyb2xsaW5nVmlzaWJpbGl0eSB7XG4gIGlzT3JpZ2luQ2xpcHBlZDogYm9vbGVhbjtcbiAgaXNPcmlnaW5PdXRzaWRlVmlldzogYm9vbGVhbjtcbiAgaXNPdmVybGF5Q2xpcHBlZDogYm9vbGVhbjtcbiAgaXNPdmVybGF5T3V0c2lkZVZpZXc6IGJvb2xlYW47XG59XG5cbi8qKiBUaGUgY2hhbmdlIGV2ZW50IGVtaXR0ZWQgYnkgdGhlIHN0cmF0ZWd5IHdoZW4gYSBmYWxsYmFjayBwb3NpdGlvbiBpcyB1c2VkLiAqL1xuZXhwb3J0IGNsYXNzIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIFRoZSBwb3NpdGlvbiB1c2VkIGFzIGEgcmVzdWx0IG9mIHRoaXMgY2hhbmdlLiAqL1xuICAgICAgcHVibGljIGNvbm5lY3Rpb25QYWlyOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICAgICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBzY3JvbGxhYmxlVmlld1Byb3BlcnRpZXM6IFNjcm9sbGluZ1Zpc2liaWxpdHkpIHt9XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgYSB2ZXJ0aWNhbCBwb3NpdGlvbiBwcm9wZXJ0eSBtYXRjaGVzIHRoZSBleHBlY3RlZCB2YWx1ZXMuXG4gKiBAcGFyYW0gcHJvcGVydHkgTmFtZSBvZiB0aGUgcHJvcGVydHkgYmVpbmcgdmFsaWRhdGVkLlxuICogQHBhcmFtIHZhbHVlIFZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBiZWluZyB2YWxpZGF0ZWQuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVZlcnRpY2FsUG9zaXRpb24ocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IFZlcnRpY2FsQ29ubmVjdGlvblBvcykge1xuICBpZiAodmFsdWUgIT09ICd0b3AnICYmIHZhbHVlICE9PSAnYm90dG9tJyAmJiB2YWx1ZSAhPT0gJ2NlbnRlcicpIHtcbiAgICB0aHJvdyBFcnJvcihgQ29ubmVjdGVkUG9zaXRpb246IEludmFsaWQgJHtwcm9wZXJ0eX0gXCIke3ZhbHVlfVwiLiBgICtcbiAgICAgICAgICAgICAgICBgRXhwZWN0ZWQgXCJ0b3BcIiwgXCJib3R0b21cIiBvciBcImNlbnRlclwiLmApO1xuICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgYSBob3Jpem9udGFsIHBvc2l0aW9uIHByb3BlcnR5IG1hdGNoZXMgdGhlIGV4cGVjdGVkIHZhbHVlcy5cbiAqIEBwYXJhbSBwcm9wZXJ0eSBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBiZWluZyB2YWxpZGF0ZWQuXG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgb2YgdGhlIHByb3BlcnR5IGJlaW5nIHZhbGlkYXRlZC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSG9yaXpvbnRhbFBvc2l0aW9uKHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcykge1xuICBpZiAodmFsdWUgIT09ICdzdGFydCcgJiYgdmFsdWUgIT09ICdlbmQnICYmIHZhbHVlICE9PSAnY2VudGVyJykge1xuICAgIHRocm93IEVycm9yKGBDb25uZWN0ZWRQb3NpdGlvbjogSW52YWxpZCAke3Byb3BlcnR5fSBcIiR7dmFsdWV9XCIuIGAgK1xuICAgICAgICAgICAgICAgIGBFeHBlY3RlZCBcInN0YXJ0XCIsIFwiZW5kXCIgb3IgXCJjZW50ZXJcIi5gKTtcbiAgfVxufVxuIl19