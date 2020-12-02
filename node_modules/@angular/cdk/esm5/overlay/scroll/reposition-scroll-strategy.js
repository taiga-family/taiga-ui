/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getMatScrollStrategyAlreadyAttachedError } from './scroll-strategy';
import { isElementScrolledOutsideView } from '../position/scroll-clip';
/**
 * Strategy that will update the element position as the user is scrolling.
 */
var RepositionScrollStrategy = /** @class */ (function () {
    function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    RepositionScrollStrategy.prototype.attach = function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables repositioning of the attached overlay on scroll. */
    RepositionScrollStrategy.prototype.enable = function () {
        var _this = this;
        if (!this._scrollSubscription) {
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (_this._config && _this._config.autoClose) {
                    var overlayRect = _this._overlayRef.overlayElement.getBoundingClientRect();
                    var _a = _this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    var parentRects = [{ width: width, height: height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        _this.disable();
                        _this._ngZone.run(function () { return _this._overlayRef.detach(); });
                    }
                }
            });
        }
    };
    /** Disables repositioning of the attached overlay on scroll. */
    RepositionScrollStrategy.prototype.disable = function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    RepositionScrollStrategy.prototype.detach = function () {
        this.disable();
        this._overlayRef = null;
    };
    return RepositionScrollStrategy;
}());
export { RepositionScrollStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdGlvbi1zY3JvbGwtc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvc2Nyb2xsL3JlcG9zaXRpb24tc2Nyb2xsLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUlILE9BQU8sRUFBaUIsd0NBQXdDLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUczRixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQWFyRTs7R0FFRztBQUNIO0lBSUUsa0NBQ1UsaUJBQW1DLEVBQ25DLGNBQTZCLEVBQzdCLE9BQWUsRUFDZixPQUF3QztRQUh4QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFpQztRQVAxQyx3QkFBbUIsR0FBc0IsSUFBSSxDQUFDO0lBT0EsQ0FBQztJQUV2RCxtREFBbUQ7SUFDbkQseUNBQU0sR0FBTixVQUFPLFVBQTRCO1FBQ2pDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixNQUFNLHdDQUF3QyxFQUFFLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0RBQStEO0lBQy9ELHlDQUFNLEdBQU47UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDN0UsS0FBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFbEMsZ0ZBQWdGO2dCQUNoRixJQUFJLEtBQUksQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQzFDLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ3RFLElBQUEsMkNBQXVELEVBQXRELGdCQUFLLEVBQUUsa0JBQStDLENBQUM7b0JBRTlELG1FQUFtRTtvQkFDbkUsd0VBQXdFO29CQUN4RSxJQUFNLFdBQVcsR0FBRyxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBRXJGLElBQUksNEJBQTRCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFO3dCQUMxRCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQXpCLENBQXlCLENBQUMsQ0FBQztxQkFDbkQ7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSwwQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQseUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSyxDQUFDO0lBQzNCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUF6REQsSUF5REMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTY3JvbGxTdHJhdGVneSwgZ2V0TWF0U2Nyb2xsU3RyYXRlZ3lBbHJlYWR5QXR0YWNoZWRFcnJvcn0gZnJvbSAnLi9zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtPdmVybGF5UmVmZXJlbmNlfSBmcm9tICcuLi9vdmVybGF5LXJlZmVyZW5jZSc7XG5pbXBvcnQge1Njcm9sbERpc3BhdGNoZXIsIFZpZXdwb3J0UnVsZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtpc0VsZW1lbnRTY3JvbGxlZE91dHNpZGVWaWV3fSBmcm9tICcuLi9wb3NpdGlvbi9zY3JvbGwtY2xpcCc7XG5cbi8qKlxuICogQ29uZmlnIG9wdGlvbnMgZm9yIHRoZSBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3kuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5Q29uZmlnIHtcbiAgLyoqIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIHRoZSBzY3JvbGwgZXZlbnRzLiAqL1xuICBzY3JvbGxUaHJvdHRsZT86IG51bWJlcjtcblxuICAvKiogV2hldGhlciB0byBjbG9zZSB0aGUgb3ZlcmxheSBvbmNlIHRoZSB1c2VyIGhhcyBzY3JvbGxlZCBhd2F5IGNvbXBsZXRlbHkuICovXG4gIGF1dG9DbG9zZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogU3RyYXRlZ3kgdGhhdCB3aWxsIHVwZGF0ZSB0aGUgZWxlbWVudCBwb3NpdGlvbiBhcyB0aGUgdXNlciBpcyBzY3JvbGxpbmcuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3kgaW1wbGVtZW50cyBTY3JvbGxTdHJhdGVneSB7XG4gIHByaXZhdGUgX3Njcm9sbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9ufG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmZXJlbmNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3Njcm9sbERpc3BhdGNoZXI6IFNjcm9sbERpc3BhdGNoZXIsXG4gICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlcixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9jb25maWc/OiBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3lDb25maWcpIHsgfVxuXG4gIC8qKiBBdHRhY2hlcyB0aGlzIHNjcm9sbCBzdHJhdGVneSB0byBhbiBvdmVybGF5LiAqL1xuICBhdHRhY2gob3ZlcmxheVJlZjogT3ZlcmxheVJlZmVyZW5jZSkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aHJvdyBnZXRNYXRTY3JvbGxTdHJhdGVneUFscmVhZHlBdHRhY2hlZEVycm9yKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IG92ZXJsYXlSZWY7XG4gIH1cblxuICAvKiogRW5hYmxlcyByZXBvc2l0aW9uaW5nIG9mIHRoZSBhdHRhY2hlZCBvdmVybGF5IG9uIHNjcm9sbC4gKi9cbiAgZW5hYmxlKCkge1xuICAgIGlmICghdGhpcy5fc2Nyb2xsU3Vic2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCB0aHJvdHRsZSA9IHRoaXMuX2NvbmZpZyA/IHRoaXMuX2NvbmZpZy5zY3JvbGxUaHJvdHRsZSA6IDA7XG5cbiAgICAgIHRoaXMuX3Njcm9sbFN1YnNjcmlwdGlvbiA9IHRoaXMuX3Njcm9sbERpc3BhdGNoZXIuc2Nyb2xsZWQodGhyb3R0bGUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAvLyBUT0RPKGNyaXNiZXRvKTogbWFrZSBgY2xvc2VgIG9uIGJ5IGRlZmF1bHQgb25jZSBhbGwgY29tcG9uZW50cyBjYW4gaGFuZGxlIGl0LlxuICAgICAgICBpZiAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5hdXRvQ2xvc2UpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5UmVjdCA9IHRoaXMuX292ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5fdmlld3BvcnRSdWxlci5nZXRWaWV3cG9ydFNpemUoKTtcblxuICAgICAgICAgIC8vIFRPRE8oY3Jpc2JldG8pOiBpbmNsdWRlIGFsbCBhbmNlc3RvciBzY3JvbGwgY29udGFpbmVycyBoZXJlIG9uY2VcbiAgICAgICAgICAvLyB3ZSBoYXZlIGEgd2F5IG9mIGV4cG9zaW5nIHRoZSB0cmlnZ2VyIGVsZW1lbnQgdG8gdGhlIHNjcm9sbCBzdHJhdGVneS5cbiAgICAgICAgICBjb25zdCBwYXJlbnRSZWN0cyA9IFt7d2lkdGgsIGhlaWdodCwgYm90dG9tOiBoZWlnaHQsIHJpZ2h0OiB3aWR0aCwgdG9wOiAwLCBsZWZ0OiAwfV07XG5cbiAgICAgICAgICBpZiAoaXNFbGVtZW50U2Nyb2xsZWRPdXRzaWRlVmlldyhvdmVybGF5UmVjdCwgcGFyZW50UmVjdHMpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogRGlzYWJsZXMgcmVwb3NpdGlvbmluZyBvZiB0aGUgYXR0YWNoZWQgb3ZlcmxheSBvbiBzY3JvbGwuICovXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKHRoaXMuX3Njcm9sbFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc2Nyb2xsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9zY3JvbGxTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gbnVsbCE7XG4gIH1cbn1cbiJdfQ==