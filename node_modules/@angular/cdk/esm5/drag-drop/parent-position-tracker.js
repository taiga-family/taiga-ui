/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getMutableClientRect, adjustClientRect } from './client-rect';
/** Keeps track of the scroll position and dimensions of the parents of an element. */
var ParentPositionTracker = /** @class */ (function () {
    function ParentPositionTracker(_document, _viewportRuler) {
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        /** Cached positions of the scrollable parent elements. */
        this.positions = new Map();
    }
    /** Clears the cached positions. */
    ParentPositionTracker.prototype.clear = function () {
        this.positions.clear();
    };
    /** Caches the positions. Should be called at the beginning of a drag sequence. */
    ParentPositionTracker.prototype.cache = function (elements) {
        var _this = this;
        this.clear();
        this.positions.set(this._document, {
            scrollPosition: this._viewportRuler.getViewportScrollPosition(),
        });
        elements.forEach(function (element) {
            _this.positions.set(element, {
                scrollPosition: { top: element.scrollTop, left: element.scrollLeft },
                clientRect: getMutableClientRect(element)
            });
        });
    };
    /** Handles scrolling while a drag is taking place. */
    ParentPositionTracker.prototype.handleScroll = function (event) {
        var target = event.target;
        var cachedPosition = this.positions.get(target);
        if (!cachedPosition) {
            return null;
        }
        // Used when figuring out whether an element is inside the scroll parent. If the scrolled
        // parent is the `document`, we use the `documentElement`, because IE doesn't support
        // `contains` on the `document`.
        var scrolledParentNode = target === this._document ? target.documentElement : target;
        var scrollPosition = cachedPosition.scrollPosition;
        var newTop;
        var newLeft;
        if (target === this._document) {
            var viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();
            newTop = viewportScrollPosition.top;
            newLeft = viewportScrollPosition.left;
        }
        else {
            newTop = target.scrollTop;
            newLeft = target.scrollLeft;
        }
        var topDifference = scrollPosition.top - newTop;
        var leftDifference = scrollPosition.left - newLeft;
        // Go through and update the cached positions of the scroll
        // parents that are inside the element that was scrolled.
        this.positions.forEach(function (position, node) {
            if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
        });
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
        return { top: topDifference, left: leftDifference };
    };
    return ParentPositionTracker;
}());
export { ParentPositionTracker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LXBvc2l0aW9uLXRyYWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9wYXJlbnQtcG9zaXRpb24tdHJhY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRckUsc0ZBQXNGO0FBQ3RGO0lBT0UsK0JBQW9CLFNBQW1CLEVBQVUsY0FBNkI7UUFBMUQsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBTjlFLDBEQUEwRDtRQUNqRCxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBR3hCLENBQUM7SUFFNEUsQ0FBQztJQUVsRixtQ0FBbUM7SUFDbkMscUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGtGQUFrRjtJQUNsRixxQ0FBSyxHQUFMLFVBQU0sUUFBb0Q7UUFBMUQsaUJBWUM7UUFYQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLHlCQUF5QixFQUFFO1NBQ2hFLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsY0FBYyxFQUFFLEVBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUM7Z0JBQ2xFLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7YUFDMUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0RBQXNEO0lBQ3RELDRDQUFZLEdBQVosVUFBYSxLQUFZO1FBQ3ZCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFnQyxDQUFDO1FBQ3RELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELHlGQUF5RjtRQUN6RixxRkFBcUY7UUFDckYsZ0NBQWdDO1FBQ2hDLElBQU0sa0JBQWtCLEdBQUcsTUFBTSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN2RixJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDO1FBQ3JELElBQUksTUFBYyxDQUFDO1FBQ25CLElBQUksT0FBZSxDQUFDO1FBRXBCLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsY0FBZSxDQUFDLHlCQUF5QixFQUFFLENBQUM7WUFDaEYsTUFBTSxHQUFHLHNCQUFzQixDQUFDLEdBQUcsQ0FBQztZQUNwQyxPQUFPLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxNQUFNLEdBQUksTUFBc0IsQ0FBQyxTQUFTLENBQUM7WUFDM0MsT0FBTyxHQUFJLE1BQXNCLENBQUMsVUFBVSxDQUFDO1NBQzlDO1FBRUQsSUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDbEQsSUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFFckQsMkRBQTJEO1FBQzNELHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBRSxJQUFJO1lBQ3BDLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0UsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDdEU7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzVCLGNBQWMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBRTlCLE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBdkVELElBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Vmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge2dldE11dGFibGVDbGllbnRSZWN0LCBhZGp1c3RDbGllbnRSZWN0fSBmcm9tICcuL2NsaWVudC1yZWN0JztcblxuLyoqIE9iamVjdCBob2xkaW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gb2Ygc29tZXRoaW5nLiAqL1xuaW50ZXJmYWNlIFNjcm9sbFBvc2l0aW9uIHtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbn1cblxuLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBzY3JvbGwgcG9zaXRpb24gYW5kIGRpbWVuc2lvbnMgb2YgdGhlIHBhcmVudHMgb2YgYW4gZWxlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBQYXJlbnRQb3NpdGlvblRyYWNrZXIge1xuICAvKiogQ2FjaGVkIHBvc2l0aW9ucyBvZiB0aGUgc2Nyb2xsYWJsZSBwYXJlbnQgZWxlbWVudHMuICovXG4gIHJlYWRvbmx5IHBvc2l0aW9ucyA9IG5ldyBNYXA8RG9jdW1lbnR8SFRNTEVsZW1lbnQsIHtcbiAgICBzY3JvbGxQb3NpdGlvbjogU2Nyb2xsUG9zaXRpb24sXG4gICAgY2xpZW50UmVjdD86IENsaWVudFJlY3RcbiAgfT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQsIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIpIHt9XG5cbiAgLyoqIENsZWFycyB0aGUgY2FjaGVkIHBvc2l0aW9ucy4gKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wb3NpdGlvbnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKiBDYWNoZXMgdGhlIHBvc2l0aW9ucy4gU2hvdWxkIGJlIGNhbGxlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIGEgZHJhZyBzZXF1ZW5jZS4gKi9cbiAgY2FjaGUoZWxlbWVudHM6IEhUTUxFbGVtZW50W10gfCBSZWFkb25seUFycmF5PEhUTUxFbGVtZW50Pikge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLnBvc2l0aW9ucy5zZXQodGhpcy5fZG9jdW1lbnQsIHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uOiB0aGlzLl92aWV3cG9ydFJ1bGVyLmdldFZpZXdwb3J0U2Nyb2xsUG9zaXRpb24oKSxcbiAgICB9KTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnBvc2l0aW9ucy5zZXQoZWxlbWVudCwge1xuICAgICAgICBzY3JvbGxQb3NpdGlvbjoge3RvcDogZWxlbWVudC5zY3JvbGxUb3AsIGxlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdH0sXG4gICAgICAgIGNsaWVudFJlY3Q6IGdldE11dGFibGVDbGllbnRSZWN0KGVsZW1lbnQpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIHNjcm9sbGluZyB3aGlsZSBhIGRyYWcgaXMgdGFraW5nIHBsYWNlLiAqL1xuICBoYW5kbGVTY3JvbGwoZXZlbnQ6IEV2ZW50KTogU2Nyb2xsUG9zaXRpb24gfCBudWxsIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBEb2N1bWVudDtcbiAgICBjb25zdCBjYWNoZWRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb25zLmdldCh0YXJnZXQpO1xuXG4gICAgaWYgKCFjYWNoZWRQb3NpdGlvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gVXNlZCB3aGVuIGZpZ3VyaW5nIG91dCB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSBzY3JvbGwgcGFyZW50LiBJZiB0aGUgc2Nyb2xsZWRcbiAgICAvLyBwYXJlbnQgaXMgdGhlIGBkb2N1bWVudGAsIHdlIHVzZSB0aGUgYGRvY3VtZW50RWxlbWVudGAsIGJlY2F1c2UgSUUgZG9lc24ndCBzdXBwb3J0XG4gICAgLy8gYGNvbnRhaW5zYCBvbiB0aGUgYGRvY3VtZW50YC5cbiAgICBjb25zdCBzY3JvbGxlZFBhcmVudE5vZGUgPSB0YXJnZXQgPT09IHRoaXMuX2RvY3VtZW50ID8gdGFyZ2V0LmRvY3VtZW50RWxlbWVudCA6IHRhcmdldDtcbiAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IGNhY2hlZFBvc2l0aW9uLnNjcm9sbFBvc2l0aW9uO1xuICAgIGxldCBuZXdUb3A6IG51bWJlcjtcbiAgICBsZXQgbmV3TGVmdDogbnVtYmVyO1xuXG4gICAgaWYgKHRhcmdldCA9PT0gdGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIGNvbnN0IHZpZXdwb3J0U2Nyb2xsUG9zaXRpb24gPSB0aGlzLl92aWV3cG9ydFJ1bGVyIS5nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICBuZXdUb3AgPSB2aWV3cG9ydFNjcm9sbFBvc2l0aW9uLnRvcDtcbiAgICAgIG5ld0xlZnQgPSB2aWV3cG9ydFNjcm9sbFBvc2l0aW9uLmxlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1RvcCA9ICh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnNjcm9sbFRvcDtcbiAgICAgIG5ld0xlZnQgPSAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIGNvbnN0IHRvcERpZmZlcmVuY2UgPSBzY3JvbGxQb3NpdGlvbi50b3AgLSBuZXdUb3A7XG4gICAgY29uc3QgbGVmdERpZmZlcmVuY2UgPSBzY3JvbGxQb3NpdGlvbi5sZWZ0IC0gbmV3TGVmdDtcblxuICAgIC8vIEdvIHRocm91Z2ggYW5kIHVwZGF0ZSB0aGUgY2FjaGVkIHBvc2l0aW9ucyBvZiB0aGUgc2Nyb2xsXG4gICAgLy8gcGFyZW50cyB0aGF0IGFyZSBpbnNpZGUgdGhlIGVsZW1lbnQgdGhhdCB3YXMgc2Nyb2xsZWQuXG4gICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb24sIG5vZGUpID0+IHtcbiAgICAgIGlmIChwb3NpdGlvbi5jbGllbnRSZWN0ICYmIHRhcmdldCAhPT0gbm9kZSAmJiBzY3JvbGxlZFBhcmVudE5vZGUuY29udGFpbnMobm9kZSkpIHtcbiAgICAgICAgYWRqdXN0Q2xpZW50UmVjdChwb3NpdGlvbi5jbGllbnRSZWN0LCB0b3BEaWZmZXJlbmNlLCBsZWZ0RGlmZmVyZW5jZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzY3JvbGxQb3NpdGlvbi50b3AgPSBuZXdUb3A7XG4gICAgc2Nyb2xsUG9zaXRpb24ubGVmdCA9IG5ld0xlZnQ7XG5cbiAgICByZXR1cm4ge3RvcDogdG9wRGlmZmVyZW5jZSwgbGVmdDogbGVmdERpZmZlcmVuY2V9O1xuICB9XG59XG4iXX0=