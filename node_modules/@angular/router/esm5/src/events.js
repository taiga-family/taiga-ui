/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
/**
 * Base for events the router goes through, as opposed to events tied to a specific
 * route. Fired one time for any given navigation.
 *
 * @usageNotes
 *
 * ```ts
 * class MyService {
 *   constructor(public router: Router, logger: Logger) {
 *     router.events.pipe(
 *        filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
 *     ).subscribe((e: RouterEvent) => {
 *       logger.log(e.id, e.url);
 *     });
 *   }
 * }
 * ```
 *
 * @see `Event`
 * @publicApi
 */
var RouterEvent = /** @class */ (function () {
    function RouterEvent(
    /** A unique ID that the router assigns to every router navigation. */
    id, 
    /** The URL that is the destination for this navigation. */
    url) {
        this.id = id;
        this.url = url;
    }
    return RouterEvent;
}());
export { RouterEvent };
/**
 * An event triggered when a navigation starts.
 *
 * @publicApi
 */
var NavigationStart = /** @class */ (function (_super) {
    __extends(NavigationStart, _super);
    function NavigationStart(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    navigationTrigger, 
    /** @docsNotRequired */
    restoredState) {
        if (navigationTrigger === void 0) { navigationTrigger = 'imperative'; }
        if (restoredState === void 0) { restoredState = null; }
        var _this = _super.call(this, id, url) || this;
        _this.navigationTrigger = navigationTrigger;
        _this.restoredState = restoredState;
        return _this;
    }
    /** @docsNotRequired */
    NavigationStart.prototype.toString = function () {
        return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')";
    };
    return NavigationStart;
}(RouterEvent));
export { NavigationStart };
/**
 * An event triggered when a navigation ends successfully.
 *
 * @publicApi
 */
var NavigationEnd = /** @class */ (function (_super) {
    __extends(NavigationEnd, _super);
    function NavigationEnd(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        return _this;
    }
    /** @docsNotRequired */
    NavigationEnd.prototype.toString = function () {
        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
    };
    return NavigationEnd;
}(RouterEvent));
export { NavigationEnd };
/**
 * An event triggered when a navigation is canceled, directly or indirectly.
 *
 * This can happen when a [route guard](guide/router#milestone-5-route-guards)
 * returns `false` or initiates a redirect by returning a `UrlTree`.
 *
 * @publicApi
 */
var NavigationCancel = /** @class */ (function (_super) {
    __extends(NavigationCancel, _super);
    function NavigationCancel(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    reason) {
        var _this = _super.call(this, id, url) || this;
        _this.reason = reason;
        return _this;
    }
    /** @docsNotRequired */
    NavigationCancel.prototype.toString = function () {
        return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')";
    };
    return NavigationCancel;
}(RouterEvent));
export { NavigationCancel };
/**
 * An event triggered when a navigation fails due to an unexpected error.
 *
 * @publicApi
 */
var NavigationError = /** @class */ (function (_super) {
    __extends(NavigationError, _super);
    function NavigationError(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    error) {
        var _this = _super.call(this, id, url) || this;
        _this.error = error;
        return _this;
    }
    /** @docsNotRequired */
    NavigationError.prototype.toString = function () {
        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
    };
    return NavigationError;
}(RouterEvent));
export { NavigationError };
/**
 *An event triggered when routes are recognized.
 *
 * @publicApi
 */
var RoutesRecognized = /** @class */ (function (_super) {
    __extends(RoutesRecognized, _super);
    function RoutesRecognized(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    /** @docsNotRequired */
    RoutesRecognized.prototype.toString = function () {
        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return RoutesRecognized;
}(RouterEvent));
export { RoutesRecognized };
/**
 * An event triggered at the start of the Guard phase of routing.
 *
 * @publicApi
 */
var GuardsCheckStart = /** @class */ (function (_super) {
    __extends(GuardsCheckStart, _super);
    function GuardsCheckStart(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    GuardsCheckStart.prototype.toString = function () {
        return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return GuardsCheckStart;
}(RouterEvent));
export { GuardsCheckStart };
/**
 * An event triggered at the end of the Guard phase of routing.
 *
 * @publicApi
 */
var GuardsCheckEnd = /** @class */ (function (_super) {
    __extends(GuardsCheckEnd, _super);
    function GuardsCheckEnd(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state, 
    /** @docsNotRequired */
    shouldActivate) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        _this.shouldActivate = shouldActivate;
        return _this;
    }
    GuardsCheckEnd.prototype.toString = function () {
        return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")";
    };
    return GuardsCheckEnd;
}(RouterEvent));
export { GuardsCheckEnd };
/**
 * An event triggered at the the start of the Resolve phase of routing.
 *
 * Runs in the "resolve" phase whether or not there is anything to resolve.
 * In future, may change to only run when there are things to be resolved.
 *
 * @publicApi
 */
var ResolveStart = /** @class */ (function (_super) {
    __extends(ResolveStart, _super);
    function ResolveStart(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    ResolveStart.prototype.toString = function () {
        return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return ResolveStart;
}(RouterEvent));
export { ResolveStart };
/**
 * An event triggered at the end of the Resolve phase of routing.
 * @see `ResolveStart`.
 *
 * @publicApi
 */
var ResolveEnd = /** @class */ (function (_super) {
    __extends(ResolveEnd, _super);
    function ResolveEnd(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    ResolveEnd.prototype.toString = function () {
        return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return ResolveEnd;
}(RouterEvent));
export { ResolveEnd };
/**
 * An event triggered before lazy loading a route configuration.
 *
 * @publicApi
 */
var RouteConfigLoadStart = /** @class */ (function () {
    function RouteConfigLoadStart(
    /** @docsNotRequired */
    route) {
        this.route = route;
    }
    RouteConfigLoadStart.prototype.toString = function () {
        return "RouteConfigLoadStart(path: " + this.route.path + ")";
    };
    return RouteConfigLoadStart;
}());
export { RouteConfigLoadStart };
/**
 * An event triggered when a route has been lazy loaded.
 *
 * @publicApi
 */
var RouteConfigLoadEnd = /** @class */ (function () {
    function RouteConfigLoadEnd(
    /** @docsNotRequired */
    route) {
        this.route = route;
    }
    RouteConfigLoadEnd.prototype.toString = function () {
        return "RouteConfigLoadEnd(path: " + this.route.path + ")";
    };
    return RouteConfigLoadEnd;
}());
export { RouteConfigLoadEnd };
/**
 * An event triggered at the start of the child-activation
 * part of the Resolve phase of routing.
 * @see  `ChildActivationEnd`
 * @see `ResolveStart`
 *
 * @publicApi
 */
var ChildActivationStart = /** @class */ (function () {
    function ChildActivationStart(
    /** @docsNotRequired */
    snapshot) {
        this.snapshot = snapshot;
    }
    ChildActivationStart.prototype.toString = function () {
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ChildActivationStart(path: '" + path + "')";
    };
    return ChildActivationStart;
}());
export { ChildActivationStart };
/**
 * An event triggered at the end of the child-activation part
 * of the Resolve phase of routing.
 * @see `ChildActivationStart`
 * @see `ResolveStart` *
 * @publicApi
 */
var ChildActivationEnd = /** @class */ (function () {
    function ChildActivationEnd(
    /** @docsNotRequired */
    snapshot) {
        this.snapshot = snapshot;
    }
    ChildActivationEnd.prototype.toString = function () {
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ChildActivationEnd(path: '" + path + "')";
    };
    return ChildActivationEnd;
}());
export { ChildActivationEnd };
/**
 * An event triggered at the start of the activation part
 * of the Resolve phase of routing.
 * @see ActivationEnd`
 * @see `ResolveStart`
 *
 * @publicApi
 */
var ActivationStart = /** @class */ (function () {
    function ActivationStart(
    /** @docsNotRequired */
    snapshot) {
        this.snapshot = snapshot;
    }
    ActivationStart.prototype.toString = function () {
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ActivationStart(path: '" + path + "')";
    };
    return ActivationStart;
}());
export { ActivationStart };
/**
 * An event triggered at the end of the activation part
 * of the Resolve phase of routing.
 * @see `ActivationStart`
 * @see `ResolveStart`
 *
 * @publicApi
 */
var ActivationEnd = /** @class */ (function () {
    function ActivationEnd(
    /** @docsNotRequired */
    snapshot) {
        this.snapshot = snapshot;
    }
    ActivationEnd.prototype.toString = function () {
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ActivationEnd(path: '" + path + "')";
    };
    return ActivationEnd;
}());
export { ActivationEnd };
/**
 * An event triggered by scrolling.
 *
 * @publicApi
 */
var Scroll = /** @class */ (function () {
    function Scroll(
    /** @docsNotRequired */
    routerEvent, 
    /** @docsNotRequired */
    position, 
    /** @docsNotRequired */
    anchor) {
        this.routerEvent = routerEvent;
        this.position = position;
        this.anchor = anchor;
    }
    Scroll.prototype.toString = function () {
        var pos = this.position ? this.position[0] + ", " + this.position[1] : null;
        return "Scroll(anchor: '" + this.anchor + "', position: '" + pos + "')";
    };
    return Scroll;
}());
export { Scroll };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQWdCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSDtJQUNFO0lBQ0ksc0VBQXNFO0lBQy9ELEVBQVU7SUFDakIsMkRBQTJEO0lBQ3BELEdBQVc7UUFGWCxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBRVYsUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUFHLENBQUM7SUFDNUIsa0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7QUFFRDs7OztHQUlHO0FBQ0g7SUFBcUMsbUNBQVc7SUEyQjlDO0lBQ0ksdUJBQXVCO0lBQ3ZCLEVBQVU7SUFDVix1QkFBdUI7SUFDdkIsR0FBVztJQUNYLHVCQUF1QjtJQUN2QixpQkFBc0U7SUFDdEUsdUJBQXVCO0lBQ3ZCLGFBQW1FO1FBRm5FLGtDQUFBLEVBQUEsZ0NBQXNFO1FBRXRFLDhCQUFBLEVBQUEsb0JBQW1FO1FBUnZFLFlBU0Usa0JBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxTQUdmO1FBRkMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLEtBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDOztJQUNyQyxDQUFDO0lBRUQsdUJBQXVCO0lBQ3ZCLGtDQUFRLEdBQVI7UUFDRSxPQUFPLHlCQUF1QixJQUFJLENBQUMsRUFBRSxnQkFBVyxJQUFJLENBQUMsR0FBRyxPQUFJLENBQUM7SUFDL0QsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTdDRCxDQUFxQyxXQUFXLEdBNkMvQzs7QUFFRDs7OztHQUlHO0FBQ0g7SUFBbUMsaUNBQVc7SUFDNUM7SUFDSSx1QkFBdUI7SUFDdkIsRUFBVTtJQUNWLHVCQUF1QjtJQUN2QixHQUFXO0lBQ1gsdUJBQXVCO0lBQ2hCLGlC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QUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQy9FLE9BQU8sMEJBQXdCLElBQUksT0FBSSxDQUFDO0lBQzFDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFSRCxJQVFDOztBQUVEOzs7O0dBSUc7QUFDSDtJQUNFO0lBQ0ksdUJBQXVCO0lBQ2QsV0FBMEI7SUFFbkMsdUJBQXVCO0lBQ2QsUUFBK0I7SUFFeEMsdUJBQXVCO0lBQ2QsTUFBbUI7UUFObkIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFHMUIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFHL0IsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUFHLENBQUM7SUFFcEMseUJBQVEsR0FBUjtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlFLE9BQU8scUJBQW1CLElBQUksQ0FBQyxNQUFNLHNCQUFpQixHQUFHLE9BQUksQ0FBQztJQUNoRSxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFmRCxJQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1JvdXRlfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gJy4vcm91dGVyX3N0YXRlJztcblxuLyoqXG4gKiBJZGVudGlmaWVzIHRoZSBjYWxsIG9yIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIGEgbmF2aWdhdGlvbi5cbiAqXG4gKiAqICdpbXBlcmF0aXZlJzogVHJpZ2dlcmVkIGJ5IGByb3V0ZXIubmF2aWdhdGVCeVVybCgpYCBvciBgcm91dGVyLm5hdmlnYXRlKClgLlxuICogKiAncG9wc3RhdGUnIDogVHJpZ2dlcmVkIGJ5IGEgYHBvcHN0YXRlYCBldmVudC5cbiAqICogJ2hhc2hjaGFuZ2UnLTogVHJpZ2dlcmVkIGJ5IGEgYGhhc2hjaGFuZ2VgIGV2ZW50LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgTmF2aWdhdGlvblRyaWdnZXIgPSAnaW1wZXJhdGl2ZSd8J3BvcHN0YXRlJ3wnaGFzaGNoYW5nZSc7XG5cbi8qKlxuICogQmFzZSBmb3IgZXZlbnRzIHRoZSByb3V0ZXIgZ29lcyB0aHJvdWdoLCBhcyBvcHBvc2VkIHRvIGV2ZW50cyB0aWVkIHRvIGEgc3BlY2lmaWNcbiAqIHJvdXRlLiBGaXJlZCBvbmUgdGltZSBmb3IgYW55IGdpdmVuIG5hdmlnYXRpb24uXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlTZXJ2aWNlIHtcbiAqICAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyLCBsb2dnZXI6IExvZ2dlcikge1xuICogICAgIHJvdXRlci5ldmVudHMucGlwZShcbiAqICAgICAgICBmaWx0ZXIoKGU6IEV2ZW50KTogZSBpcyBSb3V0ZXJFdmVudCA9PiBlIGluc3RhbmNlb2YgUm91dGVyRXZlbnQpXG4gKiAgICAgKS5zdWJzY3JpYmUoKGU6IFJvdXRlckV2ZW50KSA9PiB7XG4gKiAgICAgICBsb2dnZXIubG9nKGUuaWQsIGUudXJsKTtcbiAqICAgICB9KTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQHNlZSBgRXZlbnRgXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZXJFdmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEEgdW5pcXVlIElEIHRoYXQgdGhlIHJvdXRlciBhc3NpZ25zIHRvIGV2ZXJ5IHJvdXRlciBuYXZpZ2F0aW9uLiAqL1xuICAgICAgcHVibGljIGlkOiBudW1iZXIsXG4gICAgICAvKiogVGhlIFVSTCB0aGF0IGlzIHRoZSBkZXN0aW5hdGlvbiBmb3IgdGhpcyBuYXZpZ2F0aW9uLiAqL1xuICAgICAgcHVibGljIHVybDogc3RyaW5nKSB7fVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCB3aGVuIGEgbmF2aWdhdGlvbiBzdGFydHMuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblN0YXJ0IGV4dGVuZHMgUm91dGVyRXZlbnQge1xuICAvKipcbiAgICogSWRlbnRpZmllcyB0aGUgY2FsbCBvciBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgbmF2aWdhdGlvbi5cbiAgICogQW4gYGltcGVyYXRpdmVgIHRyaWdnZXIgaXMgYSBjYWxsIHRvIGByb3V0ZXIubmF2aWdhdGVCeVVybCgpYCBvciBgcm91dGVyLm5hdmlnYXRlKClgLlxuICAgKlxuICAgKi9cbiAgbmF2aWdhdGlvblRyaWdnZXI/OiAnaW1wZXJhdGl2ZSd8J3BvcHN0YXRlJ3wnaGFzaGNoYW5nZSc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIHN0YXRlIHRoYXQgd2FzIHByZXZpb3VzbHkgc3VwcGxpZWQgdG8gdGhlIGBwdXNoU3RhdGVgIGNhbGwsXG4gICAqIHdoZW4gdGhlIG5hdmlnYXRpb24gaXMgdHJpZ2dlcmVkIGJ5IGEgYHBvcHN0YXRlYCBldmVudC4gT3RoZXJ3aXNlIG51bGwuXG4gICAqXG4gICAqIFRoZSBzdGF0ZSBvYmplY3QgaXMgZGVmaW5lZCBieSBgTmF2aWdhdGlvbkV4dHJhc2AsIGFuZCBjb250YWlucyBhbnlcbiAgICogZGV2ZWxvcGVyLWRlZmluZWQgc3RhdGUgdmFsdWUsIGFzIHdlbGwgYXMgYSB1bmlxdWUgSUQgdGhhdFxuICAgKiB0aGUgcm91dGVyIGFzc2lnbnMgdG8gZXZlcnkgcm91dGVyIHRyYW5zaXRpb24vbmF2aWdhdGlvbi5cbiAgICpcbiAgICogRnJvbSB0aGUgcGVyc3BlY3RpdmUgb2YgdGhlIHJvdXRlciwgdGhlIHJvdXRlciBuZXZlciBcImdvZXMgYmFja1wiLlxuICAgKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYmFjayBidXR0b24gaW4gdGhlIGJyb3dzZXIsXG4gICAqIGEgbmV3IG5hdmlnYXRpb24gSUQgaXMgY3JlYXRlZC5cbiAgICpcbiAgICogVXNlIHRoZSBJRCBpbiB0aGlzIHByZXZpb3VzLXN0YXRlIG9iamVjdCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gYSBuZXdseSBjcmVhdGVkXG4gICAqIHN0YXRlIGFuZCBvbmUgcmV0dXJuZWQgdG8gYnkgYSBgcG9wc3RhdGVgIGV2ZW50LCBzbyB0aGF0IHlvdSBjYW4gcmVzdG9yZSBzb21lXG4gICAqIHJlbWVtYmVyZWQgc3RhdGUsIHN1Y2ggYXMgc2Nyb2xsIHBvc2l0aW9uLlxuICAgKlxuICAgKi9cbiAgcmVzdG9yZWRTdGF0ZT86IHtbazogc3RyaW5nXTogYW55LCBuYXZpZ2F0aW9uSWQ6IG51bWJlcn18bnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICBpZDogbnVtYmVyLFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIHVybDogc3RyaW5nLFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIG5hdmlnYXRpb25UcmlnZ2VyOiAnaW1wZXJhdGl2ZSd8J3BvcHN0YXRlJ3wnaGFzaGNoYW5nZScgPSAnaW1wZXJhdGl2ZScsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcmVzdG9yZWRTdGF0ZToge1trOiBzdHJpbmddOiBhbnksIG5hdmlnYXRpb25JZDogbnVtYmVyfXxudWxsID0gbnVsbCkge1xuICAgIHN1cGVyKGlkLCB1cmwpO1xuICAgIHRoaXMubmF2aWdhdGlvblRyaWdnZXIgPSBuYXZpZ2F0aW9uVHJpZ2dlcjtcbiAgICB0aGlzLnJlc3RvcmVkU3RhdGUgPSByZXN0b3JlZFN0YXRlO1xuICB9XG5cbiAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYE5hdmlnYXRpb25TdGFydChpZDogJHt0aGlzLmlkfSwgdXJsOiAnJHt0aGlzLnVybH0nKWA7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIG5hdmlnYXRpb24gZW5kcyBzdWNjZXNzZnVsbHkuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkVuZCBleHRlbmRzIFJvdXRlckV2ZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgaWQ6IG51bWJlcixcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICB1cmw6IHN0cmluZyxcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICBwdWJsaWMgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZykge1xuICAgIHN1cGVyKGlkLCB1cmwpO1xuICB9XG5cbiAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYE5hdmlnYXRpb25FbmQoaWQ6ICR7dGhpcy5pZH0sIHVybDogJyR7dGhpcy51cmx9JywgdXJsQWZ0ZXJSZWRpcmVjdHM6ICcke1xuICAgICAgICB0aGlzLnVybEFmdGVyUmVkaXJlY3RzfScpYDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCB3aGVuIGEgbmF2aWdhdGlvbiBpcyBjYW5jZWxlZCwgZGlyZWN0bHkgb3IgaW5kaXJlY3RseS5cbiAqXG4gKiBUaGlzIGNhbiBoYXBwZW4gd2hlbiBhIFtyb3V0ZSBndWFyZF0oZ3VpZGUvcm91dGVyI21pbGVzdG9uZS01LXJvdXRlLWd1YXJkcylcbiAqIHJldHVybnMgYGZhbHNlYCBvciBpbml0aWF0ZXMgYSByZWRpcmVjdCBieSByZXR1cm5pbmcgYSBgVXJsVHJlZWAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNhbmNlbCBleHRlbmRzIFJvdXRlckV2ZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgaWQ6IG51bWJlcixcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICB1cmw6IHN0cmluZyxcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICBwdWJsaWMgcmVhc29uOiBzdHJpbmcpIHtcbiAgICBzdXBlcihpZCwgdXJsKTtcbiAgfVxuXG4gIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBOYXZpZ2F0aW9uQ2FuY2VsKGlkOiAke3RoaXMuaWR9LCB1cmw6ICcke3RoaXMudXJsfScpYDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCB3aGVuIGEgbmF2aWdhdGlvbiBmYWlscyBkdWUgdG8gYW4gdW5leHBlY3RlZCBlcnJvci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uRXJyb3IgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIGlkOiBudW1iZXIsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcHVibGljIGVycm9yOiBhbnkpIHtcbiAgICBzdXBlcihpZCwgdXJsKTtcbiAgfVxuXG4gIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBOYXZpZ2F0aW9uRXJyb3IoaWQ6ICR7dGhpcy5pZH0sIHVybDogJyR7dGhpcy51cmx9JywgZXJyb3I6ICR7dGhpcy5lcnJvcn0pYDtcbiAgfVxufVxuXG4vKipcbiAqQW4gZXZlbnQgdHJpZ2dlcmVkIHdoZW4gcm91dGVzIGFyZSByZWNvZ25pemVkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFJvdXRlc1JlY29nbml6ZWQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIGlkOiBudW1iZXIsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcHVibGljIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmcsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcHVibGljIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgc3VwZXIoaWQsIHVybCk7XG4gIH1cblxuICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgUm91dGVzUmVjb2duaXplZChpZDogJHt0aGlzLmlkfSwgdXJsOiAnJHt0aGlzLnVybH0nLCB1cmxBZnRlclJlZGlyZWN0czogJyR7XG4gICAgICAgIHRoaXMudXJsQWZ0ZXJSZWRpcmVjdHN9Jywgc3RhdGU6ICR7dGhpcy5zdGF0ZX0pYDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgc3RhcnQgb2YgdGhlIEd1YXJkIHBoYXNlIG9mIHJvdXRpbmcuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgR3VhcmRzQ2hlY2tTdGFydCBleHRlbmRzIFJvdXRlckV2ZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgaWQ6IG51bWJlcixcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICB1cmw6IHN0cmluZyxcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICBwdWJsaWMgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZyxcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICBwdWJsaWMgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBzdXBlcihpZCwgdXJsKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBHdWFyZHNDaGVja1N0YXJ0KGlkOiAke3RoaXMuaWR9LCB1cmw6ICcke3RoaXMudXJsfScsIHVybEFmdGVyUmVkaXJlY3RzOiAnJHtcbiAgICAgICAgdGhpcy51cmxBZnRlclJlZGlyZWN0c30nLCBzdGF0ZTogJHt0aGlzLnN0YXRlfSlgO1xuICB9XG59XG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSBlbmQgb2YgdGhlIEd1YXJkIHBoYXNlIG9mIHJvdXRpbmcuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgR3VhcmRzQ2hlY2tFbmQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIGlkOiBudW1iZXIsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcHVibGljIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmcsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcHVibGljIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIHB1YmxpYyBzaG91bGRBY3RpdmF0ZTogYm9vbGVhbikge1xuICAgIHN1cGVyKGlkLCB1cmwpO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYEd1YXJkc0NoZWNrRW5kKGlkOiAke3RoaXMuaWR9LCB1cmw6ICcke3RoaXMudXJsfScsIHVybEFmdGVyUmVkaXJlY3RzOiAnJHtcbiAgICAgICAgdGhpcy51cmxBZnRlclJlZGlyZWN0c30nLCBzdGF0ZTogJHt0aGlzLnN0YXRlfSwgc2hvdWxkQWN0aXZhdGU6ICR7dGhpcy5zaG91bGRBY3RpdmF0ZX0pYDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgdGhlIHN0YXJ0IG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXG4gKlxuICogUnVucyBpbiB0aGUgXCJyZXNvbHZlXCIgcGhhc2Ugd2hldGhlciBvciBub3QgdGhlcmUgaXMgYW55dGhpbmcgdG8gcmVzb2x2ZS5cbiAqIEluIGZ1dHVyZSwgbWF5IGNoYW5nZSB0byBvbmx5IHJ1biB3aGVuIHRoZXJlIGFyZSB0aGluZ3MgdG8gYmUgcmVzb2x2ZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgUmVzb2x2ZVN0YXJ0IGV4dGVuZHMgUm91dGVyRXZlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICBpZDogbnVtYmVyLFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIHVybDogc3RyaW5nLFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIHB1YmxpYyB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nLFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIHB1YmxpYyBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHN1cGVyKGlkLCB1cmwpO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFJlc29sdmVTdGFydChpZDogJHt0aGlzLmlkfSwgdXJsOiAnJHt0aGlzLnVybH0nLCB1cmxBZnRlclJlZGlyZWN0czogJyR7XG4gICAgICAgIHRoaXMudXJsQWZ0ZXJSZWRpcmVjdHN9Jywgc3RhdGU6ICR7dGhpcy5zdGF0ZX0pYDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgZW5kIG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXG4gKiBAc2VlIGBSZXNvbHZlU3RhcnRgLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc29sdmVFbmQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIGlkOiBudW1iZXIsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcHVibGljIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmcsXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcHVibGljIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgc3VwZXIoaWQsIHVybCk7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgUmVzb2x2ZUVuZChpZDogJHt0aGlzLmlkfSwgdXJsOiAnJHt0aGlzLnVybH0nLCB1cmxBZnRlclJlZGlyZWN0czogJyR7XG4gICAgICAgIHRoaXMudXJsQWZ0ZXJSZWRpcmVjdHN9Jywgc3RhdGU6ICR7dGhpcy5zdGF0ZX0pYDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBiZWZvcmUgbGF6eSBsb2FkaW5nIGEgcm91dGUgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZUNvbmZpZ0xvYWRTdGFydCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIHB1YmxpYyByb3V0ZTogUm91dGUpIHt9XG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBSb3V0ZUNvbmZpZ0xvYWRTdGFydChwYXRoOiAke3RoaXMucm91dGUucGF0aH0pYDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCB3aGVuIGEgcm91dGUgaGFzIGJlZW4gbGF6eSBsb2FkZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgUm91dGVDb25maWdMb2FkRW5kIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcHVibGljIHJvdXRlOiBSb3V0ZSkge31cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFJvdXRlQ29uZmlnTG9hZEVuZChwYXRoOiAke3RoaXMucm91dGUucGF0aH0pYDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgc3RhcnQgb2YgdGhlIGNoaWxkLWFjdGl2YXRpb25cbiAqIHBhcnQgb2YgdGhlIFJlc29sdmUgcGhhc2Ugb2Ygcm91dGluZy5cbiAqIEBzZWUgIGBDaGlsZEFjdGl2YXRpb25FbmRgXG4gKiBAc2VlIGBSZXNvbHZlU3RhcnRgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgQ2hpbGRBY3RpdmF0aW9uU3RhcnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICBwdWJsaWMgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHt9XG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuc25hcHNob3Qucm91dGVDb25maWcgJiYgdGhpcy5zbmFwc2hvdC5yb3V0ZUNvbmZpZy5wYXRoIHx8ICcnO1xuICAgIHJldHVybiBgQ2hpbGRBY3RpdmF0aW9uU3RhcnQocGF0aDogJyR7cGF0aH0nKWA7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYXQgdGhlIGVuZCBvZiB0aGUgY2hpbGQtYWN0aXZhdGlvbiBwYXJ0XG4gKiBvZiB0aGUgUmVzb2x2ZSBwaGFzZSBvZiByb3V0aW5nLlxuICogQHNlZSBgQ2hpbGRBY3RpdmF0aW9uU3RhcnRgXG4gKiBAc2VlIGBSZXNvbHZlU3RhcnRgICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIENoaWxkQWN0aXZhdGlvbkVuZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIHB1YmxpYyBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge31cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5zbmFwc2hvdC5yb3V0ZUNvbmZpZyAmJiB0aGlzLnNuYXBzaG90LnJvdXRlQ29uZmlnLnBhdGggfHwgJyc7XG4gICAgcmV0dXJuIGBDaGlsZEFjdGl2YXRpb25FbmQocGF0aDogJyR7cGF0aH0nKWA7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBhY3RpdmF0aW9uIHBhcnRcbiAqIG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXG4gKiBAc2VlIEFjdGl2YXRpb25FbmRgXG4gKiBAc2VlIGBSZXNvbHZlU3RhcnRgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZhdGlvblN0YXJ0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xuICAgICAgcHVibGljIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7fVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnNuYXBzaG90LnJvdXRlQ29uZmlnICYmIHRoaXMuc25hcHNob3Qucm91dGVDb25maWcucGF0aCB8fCAnJztcbiAgICByZXR1cm4gYEFjdGl2YXRpb25TdGFydChwYXRoOiAnJHtwYXRofScpYDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgZW5kIG9mIHRoZSBhY3RpdmF0aW9uIHBhcnRcbiAqIG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXG4gKiBAc2VlIGBBY3RpdmF0aW9uU3RhcnRgXG4gKiBAc2VlIGBSZXNvbHZlU3RhcnRgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZhdGlvbkVuZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIHB1YmxpYyBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge31cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5zbmFwc2hvdC5yb3V0ZUNvbmZpZyAmJiB0aGlzLnNuYXBzaG90LnJvdXRlQ29uZmlnLnBhdGggfHwgJyc7XG4gICAgcmV0dXJuIGBBY3RpdmF0aW9uRW5kKHBhdGg6ICcke3BhdGh9JylgO1xuICB9XG59XG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJ5IHNjcm9sbGluZy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBTY3JvbGwge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICByZWFkb25seSByb3V0ZXJFdmVudDogTmF2aWdhdGlvbkVuZCxcblxuICAgICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgICAgIHJlYWRvbmx5IHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdfG51bGwsXG5cbiAgICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXG4gICAgICByZWFkb25seSBhbmNob3I6IHN0cmluZ3xudWxsKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5wb3NpdGlvbiA/IGAke3RoaXMucG9zaXRpb25bMF19LCAke3RoaXMucG9zaXRpb25bMV19YCA6IG51bGw7XG4gICAgcmV0dXJuIGBTY3JvbGwoYW5jaG9yOiAnJHt0aGlzLmFuY2hvcn0nLCBwb3NpdGlvbjogJyR7cG9zfScpYDtcbiAgfVxufVxuXG4vKipcbiAqIFJvdXRlciBldmVudHMgdGhhdCBhbGxvdyB5b3UgdG8gdHJhY2sgdGhlIGxpZmVjeWNsZSBvZiB0aGUgcm91dGVyLlxuICpcbiAqIFRoZSBzZXF1ZW5jZSBvZiByb3V0ZXIgZXZlbnRzIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogLSBgTmF2aWdhdGlvblN0YXJ0YCxcbiAqIC0gYFJvdXRlQ29uZmlnTG9hZFN0YXJ0YCxcbiAqIC0gYFJvdXRlQ29uZmlnTG9hZEVuZGAsXG4gKiAtIGBSb3V0ZXNSZWNvZ25pemVkYCxcbiAqIC0gYEd1YXJkc0NoZWNrU3RhcnRgLFxuICogLSBgQ2hpbGRBY3RpdmF0aW9uU3RhcnRgLFxuICogLSBgQWN0aXZhdGlvblN0YXJ0YCxcbiAqIC0gYEd1YXJkc0NoZWNrRW5kYCxcbiAqIC0gYFJlc29sdmVTdGFydGAsXG4gKiAtIGBSZXNvbHZlRW5kYCxcbiAqIC0gYEFjdGl2YXRpb25FbmRgXG4gKiAtIGBDaGlsZEFjdGl2YXRpb25FbmRgXG4gKiAtIGBOYXZpZ2F0aW9uRW5kYCxcbiAqIC0gYE5hdmlnYXRpb25DYW5jZWxgLFxuICogLSBgTmF2aWdhdGlvbkVycm9yYFxuICogLSBgU2Nyb2xsYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgRXZlbnQgPSBSb3V0ZXJFdmVudHxSb3V0ZUNvbmZpZ0xvYWRTdGFydHxSb3V0ZUNvbmZpZ0xvYWRFbmR8Q2hpbGRBY3RpdmF0aW9uU3RhcnR8XG4gICAgQ2hpbGRBY3RpdmF0aW9uRW5kfEFjdGl2YXRpb25TdGFydHxBY3RpdmF0aW9uRW5kfFNjcm9sbDtcbiJdfQ==