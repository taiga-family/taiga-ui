import { __decorate, __extends, __metadata, __param } from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Inject, Injectable, InjectionToken, ɵɵinject } from '@angular/core';
import { getDOM } from '../dom_adapter';
import { DOCUMENT } from '../dom_tokens';
import * as i0 from "@angular/core";
/**
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM APIs, which allows the Router to be
 * platform-agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms that Angular supports. For example, `@angular/platform-browser` provides an
 * implementation specific to the browser environment, while `@angular/platform-server` provides
 * one suitable for use with server-side rendering.
 *
 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
 * when they need to interact with the DOM APIs like pushState, popState, etc.
 *
 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
 * by the {@link Router} in order to navigate between routes. Since all interactions between {@link
 * Router} /
 * {@link Location} / {@link LocationStrategy} and DOM APIs flow through the `PlatformLocation`
 * class, they are all platform-agnostic.
 *
 * @publicApi
 */
var PlatformLocation = /** @class */ (function () {
    function PlatformLocation() {
    }
    PlatformLocation.ɵprov = i0.ɵɵdefineInjectable({ factory: useBrowserPlatformLocation, token: PlatformLocation, providedIn: "platform" });
    PlatformLocation = __decorate([
        Injectable({
            providedIn: 'platform',
            // See #23917
            useFactory: useBrowserPlatformLocation
        })
    ], PlatformLocation);
    return PlatformLocation;
}());
export { PlatformLocation };
export function useBrowserPlatformLocation() {
    return ɵɵinject(BrowserPlatformLocation);
}
/**
 * @description
 * Indicates when a location is initialized.
 *
 * @publicApi
 */
export var LOCATION_INITIALIZED = new InjectionToken('Location Initialized');
/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 */
var BrowserPlatformLocation = /** @class */ (function (_super) {
    __extends(BrowserPlatformLocation, _super);
    function BrowserPlatformLocation(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._init();
        return _this;
    }
    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
    /** @internal */
    BrowserPlatformLocation.prototype._init = function () {
        this.location = getDOM().getLocation();
        this._history = getDOM().getHistory();
    };
    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () {
        return getDOM().getBaseHref(this._doc);
    };
    BrowserPlatformLocation.prototype.onPopState = function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
    };
    BrowserPlatformLocation.prototype.onHashChange = function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
    };
    Object.defineProperty(BrowserPlatformLocation.prototype, "href", {
        get: function () {
            return this.location.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "protocol", {
        get: function () {
            return this.location.protocol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "hostname", {
        get: function () {
            return this.location.hostname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "port", {
        get: function () {
            return this.location.port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
        get: function () {
            return this.location.pathname;
        },
        set: function (newPath) {
            this.location.pathname = newPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
        get: function () {
            return this.location.search;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
        get: function () {
            return this.location.hash;
        },
        enumerable: true,
        configurable: true
    });
    BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
        if (supportsState()) {
            this._history.pushState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
        if (supportsState()) {
            this._history.replaceState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    BrowserPlatformLocation.prototype.forward = function () {
        this._history.forward();
    };
    BrowserPlatformLocation.prototype.back = function () {
        this._history.back();
    };
    BrowserPlatformLocation.prototype.getState = function () {
        return this._history.state;
    };
    BrowserPlatformLocation.ɵprov = i0.ɵɵdefineInjectable({ factory: createBrowserPlatformLocation, token: BrowserPlatformLocation, providedIn: "platform" });
    BrowserPlatformLocation = __decorate([
        Injectable({
            providedIn: 'platform',
            // See #23917
            useFactory: createBrowserPlatformLocation,
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], BrowserPlatformLocation);
    return BrowserPlatformLocation;
}(PlatformLocation));
export { BrowserPlatformLocation };
export function supportsState() {
    return !!window.history.pushState;
}
export function createBrowserPlatformLocation() {
    return new BrowserPlatformLocation(ɵɵinject(DOCUMENT));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xvY2F0aW9uL3BsYXRmb3JtX2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUV2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBTUg7SUFBQTtLQXFCQzs7SUFyQnFCLGdCQUFnQjtRQUxyQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsVUFBVTtZQUN0QixhQUFhO1lBQ2IsVUFBVSxFQUFFLDBCQUEwQjtTQUN2QyxDQUFDO09BQ29CLGdCQUFnQixDQXFCckM7MkJBNUREO0NBNERDLEFBckJELElBcUJDO1NBckJxQixnQkFBZ0I7QUF1QnRDLE1BQU0sVUFBVSwwQkFBMEI7SUFDeEMsT0FBTyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FBZSxzQkFBc0IsQ0FBQyxDQUFDO0FBc0I3Rjs7OztHQUlHO0FBTUg7SUFBNkMsMkNBQWdCO0lBSTNELGlDQUFzQyxJQUFTO1FBQS9DLFlBQ0UsaUJBQU8sU0FFUjtRQUhxQyxVQUFJLEdBQUosSUFBSSxDQUFLO1FBRTdDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7SUFDZixDQUFDO0lBRUQsMEZBQTBGO0lBQzFGLGdCQUFnQjtJQUNoQix1Q0FBSyxHQUFMO1FBQ0csSUFBNkIsQ0FBQyxR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QUFVLEVBQUUsVUFBVTtZQUN0QixhQUFhO1lBQ2IsVUFBVSxFQUFFLDZCQUE2QjtTQUMxQyxDQUFDO1FBS2EsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7O09BSmxCLHVCQUF1QixDQWdGbkM7a0NBeExEO0NBd0xDLEFBaEZELENBQTZDLGdCQUFnQixHQWdGNUQ7U0FoRlksdUJBQXVCO0FBa0ZwQyxNQUFNLFVBQVUsYUFBYTtJQUMzQixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUNwQyxDQUFDO0FBQ0QsTUFBTSxVQUFVLDZCQUE2QjtJQUMzQyxPQUFPLElBQUksdUJBQXVCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCDJtcm1aW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Z2V0RE9NfSBmcm9tICcuLi9kb21fYWRhcHRlcic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICcuLi9kb21fdG9rZW5zJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBhbiBhcHBsaWNhdGlvbiBkZXZlbG9wZXIuIEluc3RlYWQsIHVzZVxuICoge0BsaW5rIExvY2F0aW9ufS5cbiAqXG4gKiBgUGxhdGZvcm1Mb2NhdGlvbmAgZW5jYXBzdWxhdGVzIGFsbCBjYWxscyB0byBET00gQVBJcywgd2hpY2ggYWxsb3dzIHRoZSBSb3V0ZXIgdG8gYmVcbiAqIHBsYXRmb3JtLWFnbm9zdGljLlxuICogVGhpcyBtZWFucyB0aGF0IHdlIGNhbiBoYXZlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbiBvZiBgUGxhdGZvcm1Mb2NhdGlvbmAgZm9yIHRoZSBkaWZmZXJlbnRcbiAqIHBsYXRmb3JtcyB0aGF0IEFuZ3VsYXIgc3VwcG9ydHMuIEZvciBleGFtcGxlLCBgQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcmAgcHJvdmlkZXMgYW5cbiAqIGltcGxlbWVudGF0aW9uIHNwZWNpZmljIHRvIHRoZSBicm93c2VyIGVudmlyb25tZW50LCB3aGlsZSBgQGFuZ3VsYXIvcGxhdGZvcm0tc2VydmVyYCBwcm92aWRlc1xuICogb25lIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gKlxuICogVGhlIGBQbGF0Zm9ybUxvY2F0aW9uYCBjbGFzcyBpcyB1c2VkIGRpcmVjdGx5IGJ5IGFsbCBpbXBsZW1lbnRhdGlvbnMgb2Yge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9XG4gKiB3aGVuIHRoZXkgbmVlZCB0byBpbnRlcmFjdCB3aXRoIHRoZSBET00gQVBJcyBsaWtlIHB1c2hTdGF0ZSwgcG9wU3RhdGUsIGV0Yy5cbiAqXG4gKiB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gaW4gdHVybiBpcyB1c2VkIGJ5IHRoZSB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2Ugd2hpY2ggaXMgdXNlZCBkaXJlY3RseVxuICogYnkgdGhlIHtAbGluayBSb3V0ZXJ9IGluIG9yZGVyIHRvIG5hdmlnYXRlIGJldHdlZW4gcm91dGVzLiBTaW5jZSBhbGwgaW50ZXJhY3Rpb25zIGJldHdlZW4ge0BsaW5rXG4gKiBSb3V0ZXJ9IC9cbiAqIHtAbGluayBMb2NhdGlvbn0gLyB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gYW5kIERPTSBBUElzIGZsb3cgdGhyb3VnaCB0aGUgYFBsYXRmb3JtTG9jYXRpb25gXG4gKiBjbGFzcywgdGhleSBhcmUgYWxsIHBsYXRmb3JtLWFnbm9zdGljLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncGxhdGZvcm0nLFxuICAvLyBTZWUgIzIzOTE3XG4gIHVzZUZhY3Rvcnk6IHVzZUJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBsYXRmb3JtTG9jYXRpb24ge1xuICBhYnN0cmFjdCBnZXRCYXNlSHJlZkZyb21ET00oKTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRTdGF0ZSgpOiB1bmtub3duO1xuICBhYnN0cmFjdCBvblBvcFN0YXRlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZDtcbiAgYWJzdHJhY3Qgb25IYXNoQ2hhbmdlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZDtcblxuICBhYnN0cmFjdCBnZXQgaHJlZigpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldCBwcm90b2NvbCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldCBob3N0bmFtZSgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldCBwb3J0KCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0IHBhdGhuYW1lKCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0IHNlYXJjaCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldCBoYXNoKCk6IHN0cmluZztcblxuICBhYnN0cmFjdCByZXBsYWNlU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkO1xuXG4gIGFic3RyYWN0IHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgZm9yd2FyZCgpOiB2b2lkO1xuXG4gIGFic3RyYWN0IGJhY2soKTogdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uKCkge1xuICByZXR1cm4gybXJtWluamVjdChCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbik7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJbmRpY2F0ZXMgd2hlbiBhIGxvY2F0aW9uIGlzIGluaXRpYWxpemVkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0lOSVRJQUxJWkVEID0gbmV3IEluamVjdGlvblRva2VuPFByb21pc2U8YW55Pj4oJ0xvY2F0aW9uIEluaXRpYWxpemVkJyk7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIHRoZSBldmVudCBmcm9tIGBvblBvcFN0YXRlYCBvciBgb25IYXNoQ2hhbmdlYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbkNoYW5nZUV2ZW50IHtcbiAgdHlwZTogc3RyaW5nO1xuICBzdGF0ZTogYW55O1xufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyIHtcbiAgKGV2ZW50OiBMb2NhdGlvbkNoYW5nZUV2ZW50KTogYW55O1xufVxuXG5cblxuLyoqXG4gKiBgUGxhdGZvcm1Mb2NhdGlvbmAgZW5jYXBzdWxhdGVzIGFsbCBvZiB0aGUgZGlyZWN0IGNhbGxzIHRvIHBsYXRmb3JtIEFQSXMuXG4gKiBUaGlzIGNsYXNzIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBhbiBhcHBsaWNhdGlvbiBkZXZlbG9wZXIuIEluc3RlYWQsIHVzZVxuICoge0BsaW5rIExvY2F0aW9ufS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncGxhdGZvcm0nLFxuICAvLyBTZWUgIzIzOTE3XG4gIHVzZUZhY3Rvcnk6IGNyZWF0ZUJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uLFxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbiBleHRlbmRzIFBsYXRmb3JtTG9jYXRpb24ge1xuICBwdWJsaWMgcmVhZG9ubHkgbG9jYXRpb24hOiBMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfaGlzdG9yeSE6IEhpc3Rvcnk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgbW92ZWQgdG8gaXRzIG93biBtZXRob2Qgc28gdGhhdCBgTW9ja1BsYXRmb3JtTG9jYXRpb25TdHJhdGVneWAgY2FuIG92ZXJ3cml0ZSBpdFxuICAvKiogQGludGVybmFsICovXG4gIF9pbml0KCkge1xuICAgICh0aGlzIGFzIHtsb2NhdGlvbjogTG9jYXRpb259KS5sb2NhdGlvbiA9IGdldERPTSgpLmdldExvY2F0aW9uKCk7XG4gICAgdGhpcy5faGlzdG9yeSA9IGdldERPTSgpLmdldEhpc3RvcnkoKTtcbiAgfVxuXG4gIGdldEJhc2VIcmVmRnJvbURPTSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRET00oKS5nZXRCYXNlSHJlZih0aGlzLl9kb2MpITtcbiAgfVxuXG4gIG9uUG9wU3RhdGUoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkIHtcbiAgICBnZXRET00oKS5nZXRHbG9iYWxFdmVudFRhcmdldCh0aGlzLl9kb2MsICd3aW5kb3cnKS5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZuLCBmYWxzZSk7XG4gIH1cblxuICBvbkhhc2hDaGFuZ2UoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkIHtcbiAgICBnZXRET00oKS5nZXRHbG9iYWxFdmVudFRhcmdldCh0aGlzLl9kb2MsICd3aW5kb3cnKS5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZm4sIGZhbHNlKTtcbiAgfVxuXG4gIGdldCBocmVmKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uaHJlZjtcbiAgfVxuICBnZXQgcHJvdG9jb2woKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5wcm90b2NvbDtcbiAgfVxuICBnZXQgaG9zdG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgfVxuICBnZXQgcG9ydCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnBvcnQ7XG4gIH1cbiAgZ2V0IHBhdGhuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24ucGF0aG5hbWU7XG4gIH1cbiAgZ2V0IHNlYXJjaCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaDtcbiAgfVxuICBnZXQgaGFzaCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLmhhc2g7XG4gIH1cbiAgc2V0IHBhdGhuYW1lKG5ld1BhdGg6IHN0cmluZykge1xuICAgIHRoaXMubG9jYXRpb24ucGF0aG5hbWUgPSBuZXdQYXRoO1xuICB9XG5cbiAgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHN1cHBvcnRzU3RhdGUoKSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHRpdGxlLCB1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHN1cHBvcnRzU3RhdGUoKSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsIHRpdGxlLCB1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgfVxuICB9XG5cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9oaXN0b3J5LmZvcndhcmQoKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5faGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBnZXRTdGF0ZSgpOiB1bmtub3duIHtcbiAgICByZXR1cm4gdGhpcy5faGlzdG9yeS5zdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNTdGF0ZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uKCkge1xuICByZXR1cm4gbmV3IEJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uKMm1ybVpbmplY3QoRE9DVU1FTlQpKTtcbn0iXX0=