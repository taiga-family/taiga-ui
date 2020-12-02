import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, Injectable, ɵɵinject } from '@angular/core';
import { LocationStrategy } from './location_strategy';
import { PlatformLocation } from './platform_location';
import { joinWithSlash, normalizeQueryParams, stripTrailingSlash } from './util';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * A service that applications can use to interact with a browser's URL.
 *
 * Depending on the `LocationStrategy` used, `Location` persists
 * to the URL's path or the URL's hash segment.
 *
 * @usageNotes
 *
 * It's better to use the `Router#navigate` service to trigger route changes. Use
 * `Location` only if you need to interact with or create normalized URLs outside of
 * routing.
 *
 * `Location` is responsible for normalizing the URL against the application's base href.
 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
 * trailing slash:
 * - `/my/app/user/123` is normalized
 * - `my/app/user/123` **is not** normalized
 * - `/my/app/user/123/` **is not** normalized
 *
 * ### Example
 *
 * <code-example path='common/location/ts/path_location_component.ts'
 * region='LocationComponent'></code-example>
 *
 * @publicApi
 */
var Location = /** @class */ (function () {
    function Location(platformStrategy, platformLocation) {
        var _this = this;
        /** @internal */
        this._subject = new EventEmitter();
        /** @internal */
        this._urlChangeListeners = [];
        this._platformStrategy = platformStrategy;
        var browserBaseHref = this._platformStrategy.getBaseHref();
        this._platformLocation = platformLocation;
        this._baseHref = stripTrailingSlash(_stripIndexHtml(browserBaseHref));
        this._platformStrategy.onPopState(function (ev) {
            _this._subject.emit({
                'url': _this.path(true),
                'pop': true,
                'state': ev.state,
                'type': ev.type,
            });
        });
    }
    Location_1 = Location;
    /**
     * Normalizes the URL path for this location.
     *
     * @param includeHash True to include an anchor fragment in the path.
     *
     * @returns The normalized URL path.
     */
    // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
    // removed.
    Location.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        return this.normalize(this._platformStrategy.path(includeHash));
    };
    /**
     * Reports the current state of the location history.
     * @returns The current value of the `history.state` object.
     */
    Location.prototype.getState = function () {
        return this._platformLocation.getState();
    };
    /**
     * Normalizes the given path and compares to the current normalized path.
     *
     * @param path The given URL path.
     * @param query Query parameters.
     *
     * @returns True if the given URL path is equal to the current normalized path, false
     * otherwise.
     */
    Location.prototype.isCurrentPathEqualTo = function (path, query) {
        if (query === void 0) { query = ''; }
        return this.path() == this.normalize(path + normalizeQueryParams(query));
    };
    /**
     * Normalizes a URL path by stripping any trailing slashes.
     *
     * @param url String representing a URL.
     *
     * @returns The normalized URL string.
     */
    Location.prototype.normalize = function (url) {
        return Location_1.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
    };
    /**
     * Normalizes an external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), adds one
     * before normalizing. Adds a hash if `HashLocationStrategy` is
     * in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     *
     * @param url String representing a URL.
     *
     * @returns  A normalized platform-specific URL.
     */
    Location.prototype.prepareExternalUrl = function (url) {
        if (url && url[0] !== '/') {
            url = '/' + url;
        }
        return this._platformStrategy.prepareExternalUrl(url);
    };
    // TODO: rename this method to pushState
    /**
     * Changes the browser's URL to a normalized version of a given URL, and pushes a
     * new item onto the platform's history.
     *
     * @param path  URL path to normalize.
     * @param query Query parameters.
     * @param state Location history state.
     *
     */
    Location.prototype.go = function (path, query, state) {
        if (query === void 0) { query = ''; }
        if (state === void 0) { state = null; }
        this._platformStrategy.pushState(state, '', path, query);
        this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
    };
    /**
     * Changes the browser's URL to a normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     *
     * @param path  URL path to normalize.
     * @param query Query parameters.
     * @param state Location history state.
     */
    Location.prototype.replaceState = function (path, query, state) {
        if (query === void 0) { query = ''; }
        if (state === void 0) { state = null; }
        this._platformStrategy.replaceState(state, '', path, query);
        this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
    };
    /**
     * Navigates forward in the platform's history.
     */
    Location.prototype.forward = function () {
        this._platformStrategy.forward();
    };
    /**
     * Navigates back in the platform's history.
     */
    Location.prototype.back = function () {
        this._platformStrategy.back();
    };
    /**
     * Registers a URL change listener. Use to catch updates performed by the Angular
     * framework that are not detectible through "popstate" or "hashchange" events.
     *
     * @param fn The change handler function, which take a URL and a location history state.
     */
    Location.prototype.onUrlChange = function (fn) {
        var _this = this;
        this._urlChangeListeners.push(fn);
        this.subscribe(function (v) {
            _this._notifyUrlChangeListeners(v.url, v.state);
        });
    };
    /** @internal */
    Location.prototype._notifyUrlChangeListeners = function (url, state) {
        if (url === void 0) { url = ''; }
        this._urlChangeListeners.forEach(function (fn) { return fn(url, state); });
    };
    /**
     * Subscribes to the platform's `popState` events.
     *
     * @param value Event that is triggered when the state history changes.
     * @param exception The exception to throw.
     *
     * @returns Subscribed events.
     */
    Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
        return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
    };
    var Location_1;
    /**
     * Normalizes URL parameters by prepending with `?` if needed.
     *
     * @param  params String of URL parameters.
     *
     * @returns The normalized URL parameters string.
     */
    Location.normalizeQueryParams = normalizeQueryParams;
    /**
     * Joins two parts of a URL with a slash if needed.
     *
     * @param start  URL string
     * @param end    URL string
     *
     *
     * @returns The joined URL string.
     */
    Location.joinWithSlash = joinWithSlash;
    /**
     * Removes a trailing slash from a URL string if needed.
     * Looks for the first occurrence of either `#`, `?`, or the end of the
     * line as `/` characters and removes the trailing slash if one exists.
     *
     * @param url URL string.
     *
     * @returns The URL string, modified if needed.
     */
    Location.stripTrailingSlash = stripTrailingSlash;
    Location.ɵprov = i0.ɵɵdefineInjectable({ factory: createLocation, token: Location, providedIn: "root" });
    Location = Location_1 = __decorate([
        Injectable({
            providedIn: 'root',
            // See #23917
            useFactory: createLocation,
        }),
        __metadata("design:paramtypes", [LocationStrategy, PlatformLocation])
    ], Location);
    return Location;
}());
export { Location };
export function createLocation() {
    return new Location(ɵɵinject(LocationStrategy), ɵɵinject(PlatformLocation));
}
function _stripBaseHref(baseHref, url) {
    return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
}
function _stripIndexHtml(url) {
    return url.replace(/\/index.html$/, '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xvY2F0aW9uL2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7QUFVL0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQU1IO0lBWUUsa0JBQVksZ0JBQWtDLEVBQUUsZ0JBQWtDO1FBQWxGLGlCQWFDO1FBeEJELGdCQUFnQjtRQUNoQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFPakQsZ0JBQWdCO1FBQ2hCLHdCQUFtQixHQUE4QyxFQUFFLENBQUM7UUFHbEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFVBQUMsRUFBRTtZQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsS0FBSyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN0QixLQUFLLEVBQUUsSUFBSTtnQkFDWCxPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUs7Z0JBQ2pCLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSTthQUNoQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7aUJBekJVLFFBQVE7SUEyQm5COzs7Ozs7T0FNRztJQUNILCtGQUErRjtJQUMvRixXQUFXO0lBQ1gsdUJBQUksR0FBSixVQUFLLFdBQTRCO1FBQTVCLDRCQUFBLEVBQUEsbUJBQTRCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILDJCQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCx1Q0FBb0IsR0FBcEIsVUFBcUIsSUFBWSxFQUFFLEtBQWtCO1FBQWxCLHNCQUFBLEVBQUEsVUFBa0I7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsNEJBQVMsR0FBVCxVQUFVLEdBQVc7UUFDbkIsT0FBTyxVQUFRLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gscUNBQWtCLEdBQWxCLFVBQW1CLEdBQVc7UUFDNUIsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUN6QixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNqQjtRQUNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx3Q0FBd0M7SUFDeEM7Ozs7Ozs7O09BUUc7SUFDSCxxQkFBRSxHQUFGLFVBQUcsSUFBWSxFQUFFLEtBQWtCLEVBQUUsS0FBaUI7UUFBckMsc0JBQUEsRUFBQSxVQUFrQjtRQUFFLHNCQUFBLEVBQUEsWUFBaUI7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMseUJBQXlCLENBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILCtCQUFZLEdBQVosVUFBYSxJQUFZLEVBQUUsS0FBa0IsRUFBRSxLQUFpQjtRQUFyQyxzQkFBQSxFQUFBLFVBQWtCO1FBQUUsc0JBQUEsRUFBQSxZQUFpQjtRQUM5RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyx5QkFBeUIsQ0FDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7T0FFRztJQUNILDBCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsdUJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw4QkFBVyxHQUFYLFVBQVksRUFBeUM7UUFBckQsaUJBS0M7UUFKQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ2QsS0FBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiw0Q0FBeUIsR0FBekIsVUFBMEIsR0FBZ0IsRUFBRSxLQUFjO1FBQWhDLG9CQUFBLEVBQUEsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCw0QkFBUyxHQUFULFVBQ0ksTUFBc0MsRUFBRSxPQUF5QyxFQUNqRixRQUE0QjtRQUM5QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7O0lBRUQ7Ozs7OztPQU1HO0lBQ1csNkJBQW9CLEdBQStCLG9CQUFvQixDQUFDO0lBRXRGOzs7Ozs7OztPQVFHO0lBQ1csc0JBQWEsR0FBMkMsYUFBYSxDQUFDO0lBRXBGOzs7Ozs7OztPQVFHO0lBQ1csMkJBQWtCLEdBQTRCLGtCQUFrQixDQUFDOztJQWxNcEUsUUFBUTtRQUxwQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtZQUNsQixhQUFhO1lBQ2IsVUFBVSxFQUFFLGNBQWM7U0FDM0IsQ0FBQzt5Q0FhOEIsZ0JBQWdCLEVBQW9CLGdCQUFnQjtPQVp2RSxRQUFRLENBbU1wQjttQkExUEQ7Q0EwUEMsQUFuTUQsSUFtTUM7U0FuTVksUUFBUTtBQXFNckIsTUFBTSxVQUFVLGNBQWM7SUFDNUIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQXVCLENBQUMsRUFBRSxRQUFRLENBQUMsZ0JBQXVCLENBQUMsQ0FBQyxDQUFDO0FBQzVGLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxRQUFnQixFQUFFLEdBQVc7SUFDbkQsT0FBTyxRQUFRLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNyRixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsR0FBVztJQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCDJtcm1aW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9uTGlrZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJy4vbG9jYXRpb25fc3RyYXRlZ3knO1xuaW1wb3J0IHtQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7am9pbldpdGhTbGFzaCwgbm9ybWFsaXplUXVlcnlQYXJhbXMsIHN0cmlwVHJhaWxpbmdTbGFzaH0gZnJvbSAnLi91dGlsJztcblxuLyoqIEBwdWJsaWNBcGkgKi9cbmV4cG9ydCBpbnRlcmZhY2UgUG9wU3RhdGVFdmVudCB7XG4gIHBvcD86IGJvb2xlYW47XG4gIHN0YXRlPzogYW55O1xuICB0eXBlPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogQSBzZXJ2aWNlIHRoYXQgYXBwbGljYXRpb25zIGNhbiB1c2UgdG8gaW50ZXJhY3Qgd2l0aCBhIGJyb3dzZXIncyBVUkwuXG4gKlxuICogRGVwZW5kaW5nIG9uIHRoZSBgTG9jYXRpb25TdHJhdGVneWAgdXNlZCwgYExvY2F0aW9uYCBwZXJzaXN0c1xuICogdG8gdGhlIFVSTCdzIHBhdGggb3IgdGhlIFVSTCdzIGhhc2ggc2VnbWVudC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIEl0J3MgYmV0dGVyIHRvIHVzZSB0aGUgYFJvdXRlciNuYXZpZ2F0ZWAgc2VydmljZSB0byB0cmlnZ2VyIHJvdXRlIGNoYW5nZXMuIFVzZVxuICogYExvY2F0aW9uYCBvbmx5IGlmIHlvdSBuZWVkIHRvIGludGVyYWN0IHdpdGggb3IgY3JlYXRlIG5vcm1hbGl6ZWQgVVJMcyBvdXRzaWRlIG9mXG4gKiByb3V0aW5nLlxuICpcbiAqIGBMb2NhdGlvbmAgaXMgcmVzcG9uc2libGUgZm9yIG5vcm1hbGl6aW5nIHRoZSBVUkwgYWdhaW5zdCB0aGUgYXBwbGljYXRpb24ncyBiYXNlIGhyZWYuXG4gKiBBIG5vcm1hbGl6ZWQgVVJMIGlzIGFic29sdXRlIGZyb20gdGhlIFVSTCBob3N0LCBpbmNsdWRlcyB0aGUgYXBwbGljYXRpb24ncyBiYXNlIGhyZWYsIGFuZCBoYXMgbm9cbiAqIHRyYWlsaW5nIHNsYXNoOlxuICogLSBgL215L2FwcC91c2VyLzEyM2AgaXMgbm9ybWFsaXplZFxuICogLSBgbXkvYXBwL3VzZXIvMTIzYCAqKmlzIG5vdCoqIG5vcm1hbGl6ZWRcbiAqIC0gYC9teS9hcHAvdXNlci8xMjMvYCAqKmlzIG5vdCoqIG5vcm1hbGl6ZWRcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD0nY29tbW9uL2xvY2F0aW9uL3RzL3BhdGhfbG9jYXRpb25fY29tcG9uZW50LnRzJ1xuICogcmVnaW9uPSdMb2NhdGlvbkNvbXBvbmVudCc+PC9jb2RlLWV4YW1wbGU+XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgLy8gU2VlICMyMzkxN1xuICB1c2VGYWN0b3J5OiBjcmVhdGVMb2NhdGlvbixcbn0pXG5leHBvcnQgY2xhc3MgTG9jYXRpb24ge1xuICAvKiogQGludGVybmFsICovXG4gIF9zdWJqZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYmFzZUhyZWY6IHN0cmluZztcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGxhdGZvcm1TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbjtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfdXJsQ2hhbmdlTGlzdGVuZXJzOiAoKHVybDogc3RyaW5nLCBzdGF0ZTogdW5rbm93bikgPT4gdm9pZClbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHBsYXRmb3JtU3RyYXRlZ3k6IExvY2F0aW9uU3RyYXRlZ3ksIHBsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLl9wbGF0Zm9ybVN0cmF0ZWd5ID0gcGxhdGZvcm1TdHJhdGVneTtcbiAgICBjb25zdCBicm93c2VyQmFzZUhyZWYgPSB0aGlzLl9wbGF0Zm9ybVN0cmF0ZWd5LmdldEJhc2VIcmVmKCk7XG4gICAgdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbiA9IHBsYXRmb3JtTG9jYXRpb247XG4gICAgdGhpcy5fYmFzZUhyZWYgPSBzdHJpcFRyYWlsaW5nU2xhc2goX3N0cmlwSW5kZXhIdG1sKGJyb3dzZXJCYXNlSHJlZikpO1xuICAgIHRoaXMuX3BsYXRmb3JtU3RyYXRlZ3kub25Qb3BTdGF0ZSgoZXYpID0+IHtcbiAgICAgIHRoaXMuX3N1YmplY3QuZW1pdCh7XG4gICAgICAgICd1cmwnOiB0aGlzLnBhdGgodHJ1ZSksXG4gICAgICAgICdwb3AnOiB0cnVlLFxuICAgICAgICAnc3RhdGUnOiBldi5zdGF0ZSxcbiAgICAgICAgJ3R5cGUnOiBldi50eXBlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplcyB0aGUgVVJMIHBhdGggZm9yIHRoaXMgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBpbmNsdWRlSGFzaCBUcnVlIHRvIGluY2x1ZGUgYW4gYW5jaG9yIGZyYWdtZW50IGluIHRoZSBwYXRoLlxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCBVUkwgcGF0aC5cbiAgICovXG4gIC8vIFRPRE86IHZzYXZraW4uIFJlbW92ZSB0aGUgYm9vbGVhbiBmbGFnIGFuZCBhbHdheXMgaW5jbHVkZSBoYXNoIG9uY2UgdGhlIGRlcHJlY2F0ZWQgcm91dGVyIGlzXG4gIC8vIHJlbW92ZWQuXG4gIHBhdGgoaW5jbHVkZUhhc2g6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHRoaXMuX3BsYXRmb3JtU3RyYXRlZ3kucGF0aChpbmNsdWRlSGFzaCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydHMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGxvY2F0aW9uIGhpc3RvcnkuXG4gICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBgaGlzdG9yeS5zdGF0ZWAgb2JqZWN0LlxuICAgKi9cbiAgZ2V0U3RhdGUoKTogdW5rbm93biB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtTG9jYXRpb24uZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBwYXRoIGFuZCBjb21wYXJlcyB0byB0aGUgY3VycmVudCBub3JtYWxpemVkIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFRoZSBnaXZlbiBVUkwgcGF0aC5cbiAgICogQHBhcmFtIHF1ZXJ5IFF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIFVSTCBwYXRoIGlzIGVxdWFsIHRvIHRoZSBjdXJyZW50IG5vcm1hbGl6ZWQgcGF0aCwgZmFsc2VcbiAgICogb3RoZXJ3aXNlLlxuICAgKi9cbiAgaXNDdXJyZW50UGF0aEVxdWFsVG8ocGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nID0gJycpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoKCkgPT0gdGhpcy5ub3JtYWxpemUocGF0aCArIG5vcm1hbGl6ZVF1ZXJ5UGFyYW1zKHF1ZXJ5KSk7XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplcyBhIFVSTCBwYXRoIGJ5IHN0cmlwcGluZyBhbnkgdHJhaWxpbmcgc2xhc2hlcy5cbiAgICpcbiAgICogQHBhcmFtIHVybCBTdHJpbmcgcmVwcmVzZW50aW5nIGEgVVJMLlxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCBVUkwgc3RyaW5nLlxuICAgKi9cbiAgbm9ybWFsaXplKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTG9jYXRpb24uc3RyaXBUcmFpbGluZ1NsYXNoKF9zdHJpcEJhc2VIcmVmKHRoaXMuX2Jhc2VIcmVmLCBfc3RyaXBJbmRleEh0bWwodXJsKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZXMgYW4gZXh0ZXJuYWwgVVJMIHBhdGguXG4gICAqIElmIHRoZSBnaXZlbiBVUkwgZG9lc24ndCBiZWdpbiB3aXRoIGEgbGVhZGluZyBzbGFzaCAoYCcvJ2ApLCBhZGRzIG9uZVxuICAgKiBiZWZvcmUgbm9ybWFsaXppbmcuIEFkZHMgYSBoYXNoIGlmIGBIYXNoTG9jYXRpb25TdHJhdGVneWAgaXNcbiAgICogaW4gdXNlLCBvciB0aGUgYEFQUF9CQVNFX0hSRUZgIGlmIHRoZSBgUGF0aExvY2F0aW9uU3RyYXRlZ3lgIGlzIGluIHVzZS5cbiAgICpcbiAgICogQHBhcmFtIHVybCBTdHJpbmcgcmVwcmVzZW50aW5nIGEgVVJMLlxuICAgKlxuICAgKiBAcmV0dXJucyAgQSBub3JtYWxpemVkIHBsYXRmb3JtLXNwZWNpZmljIFVSTC5cbiAgICovXG4gIHByZXBhcmVFeHRlcm5hbFVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHVybCAmJiB1cmxbMF0gIT09ICcvJykge1xuICAgICAgdXJsID0gJy8nICsgdXJsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGxhdGZvcm1TdHJhdGVneS5wcmVwYXJlRXh0ZXJuYWxVcmwodXJsKTtcbiAgfVxuXG4gIC8vIFRPRE86IHJlbmFtZSB0aGlzIG1ldGhvZCB0byBwdXNoU3RhdGVcbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGJyb3dzZXIncyBVUkwgdG8gYSBub3JtYWxpemVkIHZlcnNpb24gb2YgYSBnaXZlbiBVUkwsIGFuZCBwdXNoZXMgYVxuICAgKiBuZXcgaXRlbSBvbnRvIHRoZSBwbGF0Zm9ybSdzIGhpc3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoICBVUkwgcGF0aCB0byBub3JtYWxpemUuXG4gICAqIEBwYXJhbSBxdWVyeSBRdWVyeSBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0gc3RhdGUgTG9jYXRpb24gaGlzdG9yeSBzdGF0ZS5cbiAgICpcbiAgICovXG4gIGdvKHBhdGg6IHN0cmluZywgcXVlcnk6IHN0cmluZyA9ICcnLCBzdGF0ZTogYW55ID0gbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuX3BsYXRmb3JtU3RyYXRlZ3kucHVzaFN0YXRlKHN0YXRlLCAnJywgcGF0aCwgcXVlcnkpO1xuICAgIHRoaXMuX25vdGlmeVVybENoYW5nZUxpc3RlbmVycyhcbiAgICAgICAgdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwocGF0aCArIG5vcm1hbGl6ZVF1ZXJ5UGFyYW1zKHF1ZXJ5KSksIHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBicm93c2VyJ3MgVVJMIHRvIGEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBVUkwsIGFuZCByZXBsYWNlc1xuICAgKiB0aGUgdG9wIGl0ZW0gb24gdGhlIHBsYXRmb3JtJ3MgaGlzdG9yeSBzdGFjay5cbiAgICpcbiAgICogQHBhcmFtIHBhdGggIFVSTCBwYXRoIHRvIG5vcm1hbGl6ZS5cbiAgICogQHBhcmFtIHF1ZXJ5IFF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSBzdGF0ZSBMb2NhdGlvbiBoaXN0b3J5IHN0YXRlLlxuICAgKi9cbiAgcmVwbGFjZVN0YXRlKHBhdGg6IHN0cmluZywgcXVlcnk6IHN0cmluZyA9ICcnLCBzdGF0ZTogYW55ID0gbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuX3BsYXRmb3JtU3RyYXRlZ3kucmVwbGFjZVN0YXRlKHN0YXRlLCAnJywgcGF0aCwgcXVlcnkpO1xuICAgIHRoaXMuX25vdGlmeVVybENoYW5nZUxpc3RlbmVycyhcbiAgICAgICAgdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwocGF0aCArIG5vcm1hbGl6ZVF1ZXJ5UGFyYW1zKHF1ZXJ5KSksIHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgZm9yd2FyZCBpbiB0aGUgcGxhdGZvcm0ncyBoaXN0b3J5LlxuICAgKi9cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9wbGF0Zm9ybVN0cmF0ZWd5LmZvcndhcmQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgYmFjayBpbiB0aGUgcGxhdGZvcm0ncyBoaXN0b3J5LlxuICAgKi9cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLl9wbGF0Zm9ybVN0cmF0ZWd5LmJhY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBVUkwgY2hhbmdlIGxpc3RlbmVyLiBVc2UgdG8gY2F0Y2ggdXBkYXRlcyBwZXJmb3JtZWQgYnkgdGhlIEFuZ3VsYXJcbiAgICogZnJhbWV3b3JrIHRoYXQgYXJlIG5vdCBkZXRlY3RpYmxlIHRocm91Z2ggXCJwb3BzdGF0ZVwiIG9yIFwiaGFzaGNoYW5nZVwiIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjaGFuZ2UgaGFuZGxlciBmdW5jdGlvbiwgd2hpY2ggdGFrZSBhIFVSTCBhbmQgYSBsb2NhdGlvbiBoaXN0b3J5IHN0YXRlLlxuICAgKi9cbiAgb25VcmxDaGFuZ2UoZm46ICh1cmw6IHN0cmluZywgc3RhdGU6IHVua25vd24pID0+IHZvaWQpIHtcbiAgICB0aGlzLl91cmxDaGFuZ2VMaXN0ZW5lcnMucHVzaChmbik7XG4gICAgdGhpcy5zdWJzY3JpYmUodiA9PiB7XG4gICAgICB0aGlzLl9ub3RpZnlVcmxDaGFuZ2VMaXN0ZW5lcnModi51cmwsIHYuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfbm90aWZ5VXJsQ2hhbmdlTGlzdGVuZXJzKHVybDogc3RyaW5nID0gJycsIHN0YXRlOiB1bmtub3duKSB7XG4gICAgdGhpcy5fdXJsQ2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4odXJsLCBzdGF0ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgdG8gdGhlIHBsYXRmb3JtJ3MgYHBvcFN0YXRlYCBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBFdmVudCB0aGF0IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBoaXN0b3J5IGNoYW5nZXMuXG4gICAqIEBwYXJhbSBleGNlcHRpb24gVGhlIGV4Y2VwdGlvbiB0byB0aHJvdy5cbiAgICpcbiAgICogQHJldHVybnMgU3Vic2NyaWJlZCBldmVudHMuXG4gICAqL1xuICBzdWJzY3JpYmUoXG4gICAgICBvbk5leHQ6ICh2YWx1ZTogUG9wU3RhdGVFdmVudCkgPT4gdm9pZCwgb25UaHJvdz86ICgoZXhjZXB0aW9uOiBhbnkpID0+IHZvaWQpfG51bGwsXG4gICAgICBvblJldHVybj86ICgoKSA9PiB2b2lkKXxudWxsKTogU3Vic2NyaXB0aW9uTGlrZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3Quc3Vic2NyaWJlKHtuZXh0OiBvbk5leHQsIGVycm9yOiBvblRocm93LCBjb21wbGV0ZTogb25SZXR1cm59KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemVzIFVSTCBwYXJhbWV0ZXJzIGJ5IHByZXBlbmRpbmcgd2l0aCBgP2AgaWYgbmVlZGVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHBhcmFtcyBTdHJpbmcgb2YgVVJMIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBub3JtYWxpemVkIFVSTCBwYXJhbWV0ZXJzIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbm9ybWFsaXplUXVlcnlQYXJhbXM6IChwYXJhbXM6IHN0cmluZykgPT4gc3RyaW5nID0gbm9ybWFsaXplUXVlcnlQYXJhbXM7XG5cbiAgLyoqXG4gICAqIEpvaW5zIHR3byBwYXJ0cyBvZiBhIFVSTCB3aXRoIGEgc2xhc2ggaWYgbmVlZGVkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RhcnQgIFVSTCBzdHJpbmdcbiAgICogQHBhcmFtIGVuZCAgICBVUkwgc3RyaW5nXG4gICAqXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBqb2luZWQgVVJMIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgam9pbldpdGhTbGFzaDogKHN0YXJ0OiBzdHJpbmcsIGVuZDogc3RyaW5nKSA9PiBzdHJpbmcgPSBqb2luV2l0aFNsYXNoO1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdHJhaWxpbmcgc2xhc2ggZnJvbSBhIFVSTCBzdHJpbmcgaWYgbmVlZGVkLlxuICAgKiBMb29rcyBmb3IgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgZWl0aGVyIGAjYCwgYD9gLCBvciB0aGUgZW5kIG9mIHRoZVxuICAgKiBsaW5lIGFzIGAvYCBjaGFyYWN0ZXJzIGFuZCByZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBpZiBvbmUgZXhpc3RzLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTCBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBVUkwgc3RyaW5nLCBtb2RpZmllZCBpZiBuZWVkZWQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN0cmlwVHJhaWxpbmdTbGFzaDogKHVybDogc3RyaW5nKSA9PiBzdHJpbmcgPSBzdHJpcFRyYWlsaW5nU2xhc2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBMb2NhdGlvbijJtcm1aW5qZWN0KExvY2F0aW9uU3RyYXRlZ3kgYXMgYW55KSwgybXJtWluamVjdChQbGF0Zm9ybUxvY2F0aW9uIGFzIGFueSkpO1xufVxuXG5mdW5jdGlvbiBfc3RyaXBCYXNlSHJlZihiYXNlSHJlZjogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBiYXNlSHJlZiAmJiB1cmwuc3RhcnRzV2l0aChiYXNlSHJlZikgPyB1cmwuc3Vic3RyaW5nKGJhc2VIcmVmLmxlbmd0aCkgOiB1cmw7XG59XG5cbmZ1bmN0aW9uIF9zdHJpcEluZGV4SHRtbCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvXFwvaW5kZXguaHRtbCQvLCAnJyk7XG59XG4iXX0=