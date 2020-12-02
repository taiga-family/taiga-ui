/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign, __read } from "tslib";
import { ReplaySubject } from 'rxjs';
import { deepEqual, isAnchor, isPromise } from './utils';
var PATH_MATCH = /^([^?#]*)(\?([^#]*))?(#(.*))?$/;
var DOUBLE_SLASH_REGEX = /^\s*[\\/]{2,}/;
var IGNORE_URI_REGEXP = /^\s*(javascript|mailto):/i;
var DEFAULT_PORTS = {
    'http:': 80,
    'https:': 443,
    'ftp:': 21
};
/**
 * Location service that provides a drop-in replacement for the $location service
 * provided in AngularJS.
 *
 * @see [Using the Angular Unified Location Service](guide/upgrade#using-the-unified-angular-location-service)
 *
 * @publicApi
 */
var $locationShim = /** @class */ (function () {
    function $locationShim($injector, location, platformLocation, urlCodec, locationStrategy) {
        var _this = this;
        this.location = location;
        this.platformLocation = platformLocation;
        this.urlCodec = urlCodec;
        this.locationStrategy = locationStrategy;
        this.initalizing = true;
        this.updateBrowser = false;
        this.$$absUrl = '';
        this.$$url = '';
        this.$$host = '';
        this.$$replace = false;
        this.$$path = '';
        this.$$search = '';
        this.$$hash = '';
        this.$$changeListeners = [];
        this.cachedState = null;
        this.urlChanges = new ReplaySubject(1);
        this.lastBrowserUrl = '';
        // This variable should be used *only* inside the cacheState function.
        this.lastCachedState = null;
        var initialUrl = this.browserUrl();
        var parsedUrl = this.urlCodec.parse(initialUrl);
        if (typeof parsedUrl === 'string') {
            throw 'Invalid URL';
        }
        this.$$protocol = parsedUrl.protocol;
        this.$$host = parsedUrl.hostname;
        this.$$port = parseInt(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null;
        this.$$parseLinkUrl(initialUrl, initialUrl);
        this.cacheState();
        this.$$state = this.browserState();
        this.location.onUrlChange(function (newUrl, newState) {
            _this.urlChanges.next({ newUrl: newUrl, newState: newState });
        });
        if (isPromise($injector)) {
            $injector.then(function ($i) { return _this.initialize($i); });
        }
        else {
            this.initialize($injector);
        }
    }
    $locationShim.prototype.initialize = function ($injector) {
        var _this = this;
        var $rootScope = $injector.get('$rootScope');
        var $rootElement = $injector.get('$rootElement');
        $rootElement.on('click', function (event) {
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.which === 2 ||
                event.button === 2) {
                return;
            }
            var elm = event.target;
            // traverse the DOM up to find first A tag
            while (elm && elm.nodeName.toLowerCase() !== 'a') {
                // ignore rewriting if no A tag (reached root element, or no parent - removed from document)
                if (elm === $rootElement[0] || !(elm = elm.parentNode)) {
                    return;
                }
            }
            if (!isAnchor(elm)) {
                return;
            }
            var absHref = elm.href;
            var relHref = elm.getAttribute('href');
            // Ignore when url is started with javascript: or mailto:
            if (IGNORE_URI_REGEXP.test(absHref)) {
                return;
            }
            if (absHref && !elm.getAttribute('target') && !event.isDefaultPrevented()) {
                if (_this.$$parseLinkUrl(absHref, relHref)) {
                    // We do a preventDefault for all urls that are part of the AngularJS application,
                    // in html5mode and also without, so that we are able to abort navigation without
                    // getting double entries in the location history.
                    event.preventDefault();
                    // update location manually
                    if (_this.absUrl() !== _this.browserUrl()) {
                        $rootScope.$apply();
                    }
                }
            }
        });
        this.urlChanges.subscribe(function (_a) {
            var newUrl = _a.newUrl, newState = _a.newState;
            var oldUrl = _this.absUrl();
            var oldState = _this.$$state;
            _this.$$parse(newUrl);
            newUrl = _this.absUrl();
            _this.$$state = newState;
            var defaultPrevented = $rootScope.$broadcast('$locationChangeStart', newUrl, oldUrl, newState, oldState)
                .defaultPrevented;
            // if the location was changed by a `$locationChangeStart` handler then stop
            // processing this location change
            if (_this.absUrl() !== newUrl)
                return;
            // If default was prevented, set back to old state. This is the state that was locally
            // cached in the $location service.
            if (defaultPrevented) {
                _this.$$parse(oldUrl);
                _this.state(oldState);
                _this.setBrowserUrlWithFallback(oldUrl, false, oldState);
                _this.$$notifyChangeListeners(_this.url(), _this.$$state, oldUrl, oldState);
            }
            else {
                _this.initalizing = false;
                $rootScope.$broadcast('$locationChangeSuccess', newUrl, oldUrl, newState, oldState);
                _this.resetBrowserUpdate();
            }
            if (!$rootScope.$$phase) {
                $rootScope.$digest();
            }
        });
        // update browser
        $rootScope.$watch(function () {
            if (_this.initalizing || _this.updateBrowser) {
                _this.updateBrowser = false;
                var oldUrl_1 = _this.browserUrl();
                var newUrl = _this.absUrl();
                var oldState_1 = _this.browserState();
                var currentReplace_1 = _this.$$replace;
                var urlOrStateChanged_1 = !_this.urlCodec.areEqual(oldUrl_1, newUrl) || oldState_1 !== _this.$$state;
                // Fire location changes one time to on initialization. This must be done on the
                // next tick (thus inside $evalAsync()) in order for listeners to be registered
                // before the event fires. Mimicing behavior from $locationWatch:
                // https://github.com/angular/angular.js/blob/master/src/ng/location.js#L983
                if (_this.initalizing || urlOrStateChanged_1) {
                    _this.initalizing = false;
                    $rootScope.$evalAsync(function () {
                        // Get the new URL again since it could have changed due to async update
                        var newUrl = _this.absUrl();
                        var defaultPrevented = $rootScope
                            .$broadcast('$locationChangeStart', newUrl, oldUrl_1, _this.$$state, oldState_1)
                            .defaultPrevented;
                        // if the location was changed by a `$locationChangeStart` handler then stop
                        // processing this location change
                        if (_this.absUrl() !== newUrl)
                            return;
                        if (defaultPrevented) {
                            _this.$$parse(oldUrl_1);
                            _this.$$state = oldState_1;
                        }
                        else {
                            // This block doesn't run when initalizing because it's going to perform the update to
                            // the URL which shouldn't be needed when initalizing.
                            if (urlOrStateChanged_1) {
                                _this.setBrowserUrlWithFallback(newUrl, currentReplace_1, oldState_1 === _this.$$state ? null : _this.$$state);
                                _this.$$replace = false;
                            }
                            $rootScope.$broadcast('$locationChangeSuccess', newUrl, oldUrl_1, _this.$$state, oldState_1);
                            if (urlOrStateChanged_1) {
                                _this.$$notifyChangeListeners(_this.url(), _this.$$state, oldUrl_1, oldState_1);
                            }
                        }
                    });
                }
            }
            _this.$$replace = false;
        });
    };
    $locationShim.prototype.resetBrowserUpdate = function () {
        this.$$replace = false;
        this.$$state = this.browserState();
        this.updateBrowser = false;
        this.lastBrowserUrl = this.browserUrl();
    };
    $locationShim.prototype.browserUrl = function (url, replace, state) {
        // In modern browsers `history.state` is `null` by default; treating it separately
        // from `undefined` would cause `$browser.url('/foo')` to change `history.state`
        // to undefined via `pushState`. Instead, let's change `undefined` to `null` here.
        if (typeof state === 'undefined') {
            state = null;
        }
        // setter
        if (url) {
            var sameState = this.lastHistoryState === state;
            // Normalize the inputted URL
            url = this.urlCodec.parse(url).href;
            // Don't change anything if previous and current URLs and states match.
            if (this.lastBrowserUrl === url && sameState) {
                return this;
            }
            this.lastBrowserUrl = url;
            this.lastHistoryState = state;
            // Remove server base from URL as the Angular APIs for updating URL require
            // it to be the path+.
            url = this.stripBaseUrl(this.getServerBase(), url) || url;
            // Set the URL
            if (replace) {
                this.locationStrategy.replaceState(state, '', url, '');
            }
            else {
                this.locationStrategy.pushState(state, '', url, '');
            }
            this.cacheState();
            return this;
            // getter
        }
        else {
            return this.platformLocation.href;
        }
    };
    $locationShim.prototype.cacheState = function () {
        // This should be the only place in $browser where `history.state` is read.
        this.cachedState = this.platformLocation.getState();
        if (typeof this.cachedState === 'undefined') {
            this.cachedState = null;
        }
        // Prevent callbacks fo fire twice if both hashchange & popstate were fired.
        if (deepEqual(this.cachedState, this.lastCachedState)) {
            this.cachedState = this.lastCachedState;
        }
        this.lastCachedState = this.cachedState;
        this.lastHistoryState = this.cachedState;
    };
    /**
     * This function emulates the $browser.state() function from AngularJS. It will cause
     * history.state to be cached unless changed with deep equality check.
     */
    $locationShim.prototype.browserState = function () {
        return this.cachedState;
    };
    $locationShim.prototype.stripBaseUrl = function (base, url) {
        if (url.startsWith(base)) {
            return url.substr(base.length);
        }
        return undefined;
    };
    $locationShim.prototype.getServerBase = function () {
        var _a = this.platformLocation, protocol = _a.protocol, hostname = _a.hostname, port = _a.port;
        var baseHref = this.locationStrategy.getBaseHref();
        var url = protocol + "//" + hostname + (port ? ':' + port : '') + (baseHref || '/');
        return url.endsWith('/') ? url : url + '/';
    };
    $locationShim.prototype.parseAppUrl = function (url) {
        if (DOUBLE_SLASH_REGEX.test(url)) {
            throw new Error("Bad Path - URL cannot start with double slashes: " + url);
        }
        var prefixed = (url.charAt(0) !== '/');
        if (prefixed) {
            url = '/' + url;
        }
        var match = this.urlCodec.parse(url, this.getServerBase());
        if (typeof match === 'string') {
            throw new Error("Bad URL - Cannot parse URL: " + url);
        }
        var path = prefixed && match.pathname.charAt(0) === '/' ? match.pathname.substring(1) : match.pathname;
        this.$$path = this.urlCodec.decodePath(path);
        this.$$search = this.urlCodec.decodeSearch(match.search);
        this.$$hash = this.urlCodec.decodeHash(match.hash);
        // make sure path starts with '/';
        if (this.$$path && this.$$path.charAt(0) !== '/') {
            this.$$path = '/' + this.$$path;
        }
    };
    /**
     * Registers listeners for URL changes. This API is used to catch updates performed by the
     * AngularJS framework. These changes are a subset of the `$locationChangeStart` and
     * `$locationChangeSuccess` events which fire when AngularJS updates its internally-referenced
     * version of the browser URL.
     *
     * It's possible for `$locationChange` events to happen, but for the browser URL
     * (window.location) to remain unchanged. This `onChange` callback will fire only when AngularJS
     * actually updates the browser URL (window.location).
     *
     * @param fn The callback function that is triggered for the listener when the URL changes.
     * @param err The callback function that is triggered when an error occurs.
     */
    $locationShim.prototype.onChange = function (fn, err) {
        if (err === void 0) { err = function (e) { }; }
        this.$$changeListeners.push([fn, err]);
    };
    /** @internal */
    $locationShim.prototype.$$notifyChangeListeners = function (url, state, oldUrl, oldState) {
        if (url === void 0) { url = ''; }
        if (oldUrl === void 0) { oldUrl = ''; }
        this.$$changeListeners.forEach(function (_a) {
            var _b = __read(_a, 2), fn = _b[0], err = _b[1];
            try {
                fn(url, state, oldUrl, oldState);
            }
            catch (e) {
                err(e);
            }
        });
    };
    /**
     * Parses the provided URL, and sets the current URL to the parsed result.
     *
     * @param url The URL string.
     */
    $locationShim.prototype.$$parse = function (url) {
        var pathUrl;
        if (url.startsWith('/')) {
            pathUrl = url;
        }
        else {
            // Remove protocol & hostname if URL starts with it
            pathUrl = this.stripBaseUrl(this.getServerBase(), url);
        }
        if (typeof pathUrl === 'undefined') {
            throw new Error("Invalid url \"" + url + "\", missing path prefix \"" + this.getServerBase() + "\".");
        }
        this.parseAppUrl(pathUrl);
        if (!this.$$path) {
            this.$$path = '/';
        }
        this.composeUrls();
    };
    /**
     * Parses the provided URL and its relative URL.
     *
     * @param url The full URL string.
     * @param relHref A URL string relative to the full URL string.
     */
    $locationShim.prototype.$$parseLinkUrl = function (url, relHref) {
        // When relHref is passed, it should be a hash and is handled separately
        if (relHref && relHref[0] === '#') {
            this.hash(relHref.slice(1));
            return true;
        }
        var rewrittenUrl;
        var appUrl = this.stripBaseUrl(this.getServerBase(), url);
        if (typeof appUrl !== 'undefined') {
            rewrittenUrl = this.getServerBase() + appUrl;
        }
        else if (this.getServerBase() === url + '/') {
            rewrittenUrl = this.getServerBase();
        }
        // Set the URL
        if (rewrittenUrl) {
            this.$$parse(rewrittenUrl);
        }
        return !!rewrittenUrl;
    };
    $locationShim.prototype.setBrowserUrlWithFallback = function (url, replace, state) {
        var oldUrl = this.url();
        var oldState = this.$$state;
        try {
            this.browserUrl(url, replace, state);
            // Make sure $location.state() returns referentially identical (not just deeply equal)
            // state object; this makes possible quick checking if the state changed in the digest
            // loop. Checking deep equality would be too expensive.
            this.$$state = this.browserState();
        }
        catch (e) {
            // Restore old values if pushState fails
            this.url(oldUrl);
            this.$$state = oldState;
            throw e;
        }
    };
    $locationShim.prototype.composeUrls = function () {
        this.$$url = this.urlCodec.normalize(this.$$path, this.$$search, this.$$hash);
        this.$$absUrl = this.getServerBase() + this.$$url.substr(1); // remove '/' from front of URL
        this.updateBrowser = true;
    };
    /**
     * Retrieves the full URL representation with all segments encoded according to
     * rules specified in
     * [RFC 3986](http://www.ietf.org/rfc/rfc3986.txt).
     *
     *
     * ```js
     * // given URL http://example.com/#/some/path?foo=bar&baz=xoxo
     * let absUrl = $location.absUrl();
     * // => "http://example.com/#/some/path?foo=bar&baz=xoxo"
     * ```
     */
    $locationShim.prototype.absUrl = function () {
        return this.$$absUrl;
    };
    $locationShim.prototype.url = function (url) {
        if (typeof url === 'string') {
            if (!url.length) {
                url = '/';
            }
            var match = PATH_MATCH.exec(url);
            if (!match)
                return this;
            if (match[1] || url === '')
                this.path(this.urlCodec.decodePath(match[1]));
            if (match[2] || match[1] || url === '')
                this.search(match[3] || '');
            this.hash(match[5] || '');
            // Chainable method
            return this;
        }
        return this.$$url;
    };
    /**
     * Retrieves the protocol of the current URL.
     *
     * ```js
     * // given URL http://example.com/#/some/path?foo=bar&baz=xoxo
     * let protocol = $location.protocol();
     * // => "http"
     * ```
     */
    $locationShim.prototype.protocol = function () {
        return this.$$protocol;
    };
    /**
     * Retrieves the protocol of the current URL.
     *
     * In contrast to the non-AngularJS version `location.host` which returns `hostname:port`, this
     * returns the `hostname` portion only.
     *
     *
     * ```js
     * // given URL http://example.com/#/some/path?foo=bar&baz=xoxo
     * let host = $location.host();
     * // => "example.com"
     *
     * // given URL http://user:password@example.com:8080/#/some/path?foo=bar&baz=xoxo
     * host = $location.host();
     * // => "example.com"
     * host = location.host;
     * // => "example.com:8080"
     * ```
     */
    $locationShim.prototype.host = function () {
        return this.$$host;
    };
    /**
     * Retrieves the port of the current URL.
     *
     * ```js
     * // given URL http://example.com/#/some/path?foo=bar&baz=xoxo
     * let port = $location.port();
     * // => 80
     * ```
     */
    $locationShim.prototype.port = function () {
        return this.$$port;
    };
    $locationShim.prototype.path = function (path) {
        if (typeof path === 'undefined') {
            return this.$$path;
        }
        // null path converts to empty string. Prepend with "/" if needed.
        path = path !== null ? path.toString() : '';
        path = path.charAt(0) === '/' ? path : '/' + path;
        this.$$path = path;
        this.composeUrls();
        return this;
    };
    $locationShim.prototype.search = function (search, paramValue) {
        switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (typeof search === 'string' || typeof search === 'number') {
                    this.$$search = this.urlCodec.decodeSearch(search.toString());
                }
                else if (typeof search === 'object' && search !== null) {
                    // Copy the object so it's never mutated
                    search = __assign({}, search);
                    // remove object undefined or null properties
                    for (var key in search) {
                        if (search[key] == null)
                            delete search[key];
                    }
                    this.$$search = search;
                }
                else {
                    throw new Error('LocationProvider.search(): First argument must be a string or an object.');
                }
                break;
            default:
                if (typeof search === 'string') {
                    var currentSearch = this.search();
                    if (typeof paramValue === 'undefined' || paramValue === null) {
                        delete currentSearch[search];
                        return this.search(currentSearch);
                    }
                    else {
                        currentSearch[search] = paramValue;
                        return this.search(currentSearch);
                    }
                }
        }
        this.composeUrls();
        return this;
    };
    $locationShim.prototype.hash = function (hash) {
        if (typeof hash === 'undefined') {
            return this.$$hash;
        }
        this.$$hash = hash !== null ? hash.toString() : '';
        this.composeUrls();
        return this;
    };
    /**
     * Changes to `$location` during the current `$digest` will replace the current
     * history record, instead of adding a new one.
     */
    $locationShim.prototype.replace = function () {
        this.$$replace = true;
        return this;
    };
    $locationShim.prototype.state = function (state) {
        if (typeof state === 'undefined') {
            return this.$$state;
        }
        this.$$state = state;
        return this;
    };
    return $locationShim;
}());
export { $locationShim };
/**
 * The factory function used to create an instance of the `$locationShim` in Angular,
 * and provides an API-compatiable `$locationProvider` for AngularJS.
 *
 * @publicApi
 */
var $locationShimProvider = /** @class */ (function () {
    function $locationShimProvider(ngUpgrade, location, platformLocation, urlCodec, locationStrategy) {
        this.ngUpgrade = ngUpgrade;
        this.location = location;
        this.platformLocation = platformLocation;
        this.urlCodec = urlCodec;
        this.locationStrategy = locationStrategy;
    }
    /**
     * Factory method that returns an instance of the $locationShim
     */
    $locationShimProvider.prototype.$get = function () {
        return new $locationShim(this.ngUpgrade.$injector, this.location, this.platformLocation, this.urlCodec, this.locationStrategy);
    };
    /**
     * Stub method used to keep API compatible with AngularJS. This setting is configured through
     * the LocationUpgradeModule's `config` method in your Angular app.
     */
    $locationShimProvider.prototype.hashPrefix = function (prefix) {
        throw new Error('Configure LocationUpgrade through LocationUpgradeModule.config method.');
    };
    /**
     * Stub method used to keep API compatible with AngularJS. This setting is configured through
     * the LocationUpgradeModule's `config` method in your Angular app.
     */
    $locationShimProvider.prototype.html5Mode = function (mode) {
        throw new Error('Configure LocationUpgrade through LocationUpgradeModule.config method.');
    };
    return $locationShimProvider;
}());
export { $locationShimProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25fc2hpbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi91cGdyYWRlL3NyYy9sb2NhdGlvbl9zaGltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFJSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR25DLE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUV2RCxJQUFNLFVBQVUsR0FBRyxnQ0FBZ0MsQ0FBQztBQUNwRCxJQUFNLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztBQUMzQyxJQUFNLGlCQUFpQixHQUFHLDJCQUEyQixDQUFDO0FBQ3RELElBQU0sYUFBYSxHQUE0QjtJQUM3QyxPQUFPLEVBQUUsRUFBRTtJQUNYLFFBQVEsRUFBRSxHQUFHO0lBQ2IsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBRUY7Ozs7Ozs7R0FPRztBQUNIO0lBdUJFLHVCQUNJLFNBQWMsRUFBVSxRQUFrQixFQUFVLGdCQUFrQyxFQUM5RSxRQUFrQixFQUFVLGdCQUFrQztRQUYxRSxpQkE0QkM7UUEzQjJCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzlFLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBeEJsRSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLHNCQUFpQixHQUluQixFQUFFLENBQUM7UUFFRCxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFVLEdBQUcsSUFBSSxhQUFhLENBQXNDLENBQUMsQ0FBQyxDQUFDO1FBNkt2RSxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQTZDcEMsc0VBQXNFO1FBQzlELG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBdE50QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFckMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFaEQsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDakMsTUFBTSxhQUFhLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUVwRixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBQyxNQUFNLEVBQUUsUUFBUTtZQUN6QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sUUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRU8sa0NBQVUsR0FBbEIsVUFBbUIsU0FBYztRQUFqQyxpQkFtSUM7UUFsSUMsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRW5ELFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBVTtZQUNsQyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQztnQkFDckUsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU87YUFDUjtZQUVELElBQUksR0FBRyxHQUEyQixLQUFLLENBQUMsTUFBTSxDQUFDO1lBRS9DLDBDQUEwQztZQUMxQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLEdBQUcsRUFBRTtnQkFDaEQsNEZBQTRGO2dCQUM1RixJQUFJLEdBQUcsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3RELE9BQU87aUJBQ1I7YUFDRjtZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU87YUFDUjtZQUVELElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV6Qyx5REFBeUQ7WUFDekQsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU87YUFDUjtZQUVELElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUN6RSxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFO29CQUN6QyxrRkFBa0Y7b0JBQ2xGLGlGQUFpRjtvQkFDakYsa0RBQWtEO29CQUNsRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLDJCQUEyQjtvQkFDM0IsSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO3dCQUN2QyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7cUJBQ3JCO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBa0I7Z0JBQWpCLGtCQUFNLEVBQUUsc0JBQVE7WUFDMUMsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdCLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7WUFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQixNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLElBQU0sZ0JBQWdCLEdBQ2xCLFVBQVUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2lCQUM1RSxnQkFBZ0IsQ0FBQztZQUUxQiw0RUFBNEU7WUFDNUUsa0NBQWtDO1lBQ2xDLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLE1BQU07Z0JBQUUsT0FBTztZQUVyQyxzRkFBc0Y7WUFDdEYsbUNBQW1DO1lBQ25DLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN4RCxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzFFO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixVQUFVLENBQUMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILGlCQUFpQjtRQUNqQixVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ2hCLElBQUksS0FBSSxDQUFDLFdBQVcsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUMxQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFFM0IsSUFBTSxRQUFNLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzdCLElBQU0sVUFBUSxHQUFHLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxnQkFBYyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7Z0JBRXBDLElBQU0sbUJBQWlCLEdBQ25CLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLFVBQVEsS0FBSyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUV6RSxnRkFBZ0Y7Z0JBQ2hGLCtFQUErRTtnQkFDL0UsaUVBQWlFO2dCQUNqRSw0RUFBNEU7Z0JBQzVFLElBQUksS0FBSSxDQUFDLFdBQVcsSUFBSSxtQkFBaUIsRUFBRTtvQkFDekMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBRXpCLFVBQVUsQ0FBQyxVQUFVLENBQUM7d0JBQ3BCLHdFQUF3RTt3QkFDeEUsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUM3QixJQUFNLGdCQUFnQixHQUNsQixVQUFVOzZCQUNMLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsUUFBTSxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsVUFBUSxDQUFDOzZCQUMxRSxnQkFBZ0IsQ0FBQzt3QkFFMUIsNEVBQTRFO3dCQUM1RSxrQ0FBa0M7d0JBQ2xDLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLE1BQU07NEJBQUUsT0FBTzt3QkFFckMsSUFBSSxnQkFBZ0IsRUFBRTs0QkFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFNLENBQUMsQ0FBQzs0QkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFRLENBQUM7eUJBQ3pCOzZCQUFNOzRCQUNMLHNGQUFzRjs0QkFDdEYsc0RBQXNEOzRCQUN0RCxJQUFJLG1CQUFpQixFQUFFO2dDQUNyQixLQUFJLENBQUMseUJBQXlCLENBQzFCLE1BQU0sRUFBRSxnQkFBYyxFQUFFLFVBQVEsS0FBSyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQ0FDN0UsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7NkJBQ3hCOzRCQUNELFVBQVUsQ0FBQyxVQUFVLENBQ2pCLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxRQUFNLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxVQUFRLENBQUMsQ0FBQzs0QkFDdEUsSUFBSSxtQkFBaUIsRUFBRTtnQ0FDckIsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLFFBQU0sRUFBRSxVQUFRLENBQUMsQ0FBQzs2QkFDMUU7eUJBQ0Y7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDBDQUFrQixHQUExQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFNTyxrQ0FBVSxHQUFsQixVQUFtQixHQUFZLEVBQUUsT0FBaUIsRUFBRSxLQUFlO1FBQ2pFLGtGQUFrRjtRQUNsRixnRkFBZ0Y7UUFDaEYsa0ZBQWtGO1FBQ2xGLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQ2hDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDZDtRQUVELFNBQVM7UUFDVCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUM7WUFFaEQsNkJBQTZCO1lBQzdCLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFcEMsdUVBQXVFO1lBQ3ZFLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUM1QyxPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUU5QiwyRUFBMkU7WUFDM0Usc0JBQXNCO1lBQ3RCLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7WUFFMUQsY0FBYztZQUNkLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNyRDtZQUVELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUVsQixPQUFPLElBQUksQ0FBQztZQUNaLFNBQVM7U0FDVjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUlPLGtDQUFVLEdBQWxCO1FBQ0UsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BELElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUVELDRFQUE0RTtRQUM1RSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7T0FHRztJQUNLLG9DQUFZLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFTyxvQ0FBWSxHQUFwQixVQUFxQixJQUFZLEVBQUUsR0FBVztRQUM1QyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTyxxQ0FBYSxHQUFyQjtRQUNRLElBQUEsMEJBQWtELEVBQWpELHNCQUFRLEVBQUUsc0JBQVEsRUFBRSxjQUE2QixDQUFDO1FBQ3pELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLEdBQUcsR0FBTSxRQUFRLFVBQUssUUFBUSxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFHLFFBQVEsSUFBSSxHQUFHLENBQUUsQ0FBQztRQUNoRixPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUM3QyxDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBb0IsR0FBVztRQUM3QixJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFvRCxHQUFLLENBQUMsQ0FBQztTQUM1RTtRQUVELElBQUksUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLFFBQVEsRUFBRTtZQUNaLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQStCLEdBQUssQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLEdBQ0osUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDaEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRCxrQ0FBa0M7UUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNILGdDQUFRLEdBQVIsVUFDSSxFQUE0RSxFQUM1RSxHQUEwQztRQUExQyxvQkFBQSxFQUFBLGdCQUEyQixDQUFRLElBQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiwrQ0FBdUIsR0FBdkIsVUFDSSxHQUFnQixFQUFFLEtBQWMsRUFBRSxNQUFtQixFQUFFLFFBQWlCO1FBQXhFLG9CQUFBLEVBQUEsUUFBZ0I7UUFBa0IsdUJBQUEsRUFBQSxXQUFtQjtRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBUztnQkFBVCxrQkFBUyxFQUFSLFVBQUUsRUFBRSxXQUFHO1lBQ3RDLElBQUk7Z0JBQ0YsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2xDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsK0JBQU8sR0FBUCxVQUFRLEdBQVc7UUFDakIsSUFBSSxPQUF5QixDQUFDO1FBQzlCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLG1EQUFtRDtZQUNuRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFnQixHQUFHLGtDQUEyQixJQUFJLENBQUMsYUFBYSxFQUFFLFFBQUksQ0FBQyxDQUFDO1NBQ3pGO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxzQ0FBYyxHQUFkLFVBQWUsR0FBVyxFQUFFLE9BQXFCO1FBQy9DLHdFQUF3RTtRQUN4RSxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLFlBQVksQ0FBQztRQUNqQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUM5QzthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDN0MsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNyQztRQUNELGNBQWM7UUFDZCxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxpREFBeUIsR0FBakMsVUFBa0MsR0FBVyxFQUFFLE9BQWdCLEVBQUUsS0FBYztRQUM3RSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXJDLHNGQUFzRjtZQUN0RixzRkFBc0Y7WUFDdEYsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVix3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUV4QixNQUFNLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQztJQUVPLG1DQUFXLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsK0JBQStCO1FBQzdGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNILDhCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQWNELDJCQUFHLEdBQUgsVUFBSSxHQUFZO1FBQ2QsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNYO1lBRUQsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUN4QixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRTFCLG1CQUFtQjtZQUNuQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILGdDQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7SUFDSCw0QkFBSSxHQUFKO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILDRCQUFJLEdBQUo7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQWlCRCw0QkFBSSxHQUFKLFVBQUssSUFBeUI7UUFDNUIsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBRUQsa0VBQWtFO1FBQ2xFLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUVsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBNkNELDhCQUFNLEdBQU4sVUFDSSxNQUErQyxFQUMvQyxVQUEwRDtRQUM1RCxRQUFRLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2QixLQUFLLENBQUM7Z0JBQ0osSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO29CQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUMvRDtxQkFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUN4RCx3Q0FBd0M7b0JBQ3hDLE1BQU0sZ0JBQU8sTUFBTSxDQUFDLENBQUM7b0JBQ3JCLDZDQUE2QztvQkFDN0MsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7d0JBQ3hCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUk7NEJBQUUsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzdDO29CQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDTCxNQUFNLElBQUksS0FBSyxDQUNYLDBFQUEwRSxDQUFDLENBQUM7aUJBQ2pGO2dCQUNELE1BQU07WUFDUjtnQkFDRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtvQkFDOUIsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNwQyxJQUFJLE9BQU8sVUFBVSxLQUFLLFdBQVcsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO3dCQUM1RCxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDN0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUNuQzt5QkFBTTt3QkFDTCxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDO3dCQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQ25DO2lCQUNGO1NBQ0o7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBY0QsNEJBQUksR0FBSixVQUFLLElBQXlCO1FBQzVCLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFlRCw2QkFBSyxHQUFMLFVBQU0sS0FBZTtRQUNuQixJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFocUJELElBZ3FCQzs7QUFFRDs7Ozs7R0FLRztBQUNIO0lBQ0UsK0JBQ1ksU0FBd0IsRUFBVSxRQUFrQixFQUNwRCxnQkFBa0MsRUFBVSxRQUFrQixFQUM5RCxnQkFBa0M7UUFGbEMsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDOUQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFbEQ7O09BRUc7SUFDSCxvQ0FBSSxHQUFKO1FBQ0UsT0FBTyxJQUFJLGFBQWEsQ0FDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFDN0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBDQUFVLEdBQVYsVUFBVyxNQUFlO1FBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseUNBQVMsR0FBVCxVQUFVLElBQVU7UUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3ksIFBsYXRmb3JtTG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1VwZ3JhZGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcbmltcG9ydCB7UmVwbGF5U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7VXJsQ29kZWN9IGZyb20gJy4vcGFyYW1zJztcbmltcG9ydCB7ZGVlcEVxdWFsLCBpc0FuY2hvciwgaXNQcm9taXNlfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgUEFUSF9NQVRDSCA9IC9eKFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8kLztcbmNvbnN0IERPVUJMRV9TTEFTSF9SRUdFWCA9IC9eXFxzKltcXFxcL117Mix9LztcbmNvbnN0IElHTk9SRV9VUklfUkVHRVhQID0gL15cXHMqKGphdmFzY3JpcHR8bWFpbHRvKTovaTtcbmNvbnN0IERFRkFVTFRfUE9SVFM6IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuICAnaHR0cDonOiA4MCxcbiAgJ2h0dHBzOic6IDQ0MyxcbiAgJ2Z0cDonOiAyMVxufTtcblxuLyoqXG4gKiBMb2NhdGlvbiBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgYSBkcm9wLWluIHJlcGxhY2VtZW50IGZvciB0aGUgJGxvY2F0aW9uIHNlcnZpY2VcbiAqIHByb3ZpZGVkIGluIEFuZ3VsYXJKUy5cbiAqXG4gKiBAc2VlIFtVc2luZyB0aGUgQW5ndWxhciBVbmlmaWVkIExvY2F0aW9uIFNlcnZpY2VdKGd1aWRlL3VwZ3JhZGUjdXNpbmctdGhlLXVuaWZpZWQtYW5ndWxhci1sb2NhdGlvbi1zZXJ2aWNlKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzICRsb2NhdGlvblNoaW0ge1xuICBwcml2YXRlIGluaXRhbGl6aW5nID0gdHJ1ZTtcbiAgcHJpdmF0ZSB1cGRhdGVCcm93c2VyID0gZmFsc2U7XG4gIHByaXZhdGUgJCRhYnNVcmw6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlICQkdXJsOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSAkJHByb3RvY29sOiBzdHJpbmc7XG4gIHByaXZhdGUgJCRob3N0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSAkJHBvcnQ6IG51bWJlcnxudWxsO1xuICBwcml2YXRlICQkcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlICQkcGF0aDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgJCRzZWFyY2g6IGFueSA9ICcnO1xuICBwcml2YXRlICQkaGFzaDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgJCRzdGF0ZTogdW5rbm93bjtcbiAgcHJpdmF0ZSAkJGNoYW5nZUxpc3RlbmVyczogW1xuICAgICgodXJsOiBzdHJpbmcsIHN0YXRlOiB1bmtub3duLCBvbGRVcmw6IHN0cmluZywgb2xkU3RhdGU6IHVua25vd24sIGVycj86IChlOiBFcnJvcikgPT4gdm9pZCkgPT5cbiAgICAgICAgIHZvaWQpLFxuICAgIChlOiBFcnJvcikgPT4gdm9pZFxuICBdW10gPSBbXTtcblxuICBwcml2YXRlIGNhY2hlZFN0YXRlOiB1bmtub3duID0gbnVsbDtcblxuICBwcml2YXRlIHVybENoYW5nZXMgPSBuZXcgUmVwbGF5U3ViamVjdDx7bmV3VXJsOiBzdHJpbmcsIG5ld1N0YXRlOiB1bmtub3dufT4oMSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAkaW5qZWN0b3I6IGFueSwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbixcbiAgICAgIHByaXZhdGUgdXJsQ29kZWM6IFVybENvZGVjLCBwcml2YXRlIGxvY2F0aW9uU3RyYXRlZ3k6IExvY2F0aW9uU3RyYXRlZ3kpIHtcbiAgICBjb25zdCBpbml0aWFsVXJsID0gdGhpcy5icm93c2VyVXJsKCk7XG5cbiAgICBsZXQgcGFyc2VkVXJsID0gdGhpcy51cmxDb2RlYy5wYXJzZShpbml0aWFsVXJsKTtcblxuICAgIGlmICh0eXBlb2YgcGFyc2VkVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgJ0ludmFsaWQgVVJMJztcbiAgICB9XG5cbiAgICB0aGlzLiQkcHJvdG9jb2wgPSBwYXJzZWRVcmwucHJvdG9jb2w7XG4gICAgdGhpcy4kJGhvc3QgPSBwYXJzZWRVcmwuaG9zdG5hbWU7XG4gICAgdGhpcy4kJHBvcnQgPSBwYXJzZUludChwYXJzZWRVcmwucG9ydCkgfHwgREVGQVVMVF9QT1JUU1twYXJzZWRVcmwucHJvdG9jb2xdIHx8IG51bGw7XG5cbiAgICB0aGlzLiQkcGFyc2VMaW5rVXJsKGluaXRpYWxVcmwsIGluaXRpYWxVcmwpO1xuICAgIHRoaXMuY2FjaGVTdGF0ZSgpO1xuICAgIHRoaXMuJCRzdGF0ZSA9IHRoaXMuYnJvd3NlclN0YXRlKCk7XG5cbiAgICB0aGlzLmxvY2F0aW9uLm9uVXJsQ2hhbmdlKChuZXdVcmwsIG5ld1N0YXRlKSA9PiB7XG4gICAgICB0aGlzLnVybENoYW5nZXMubmV4dCh7bmV3VXJsLCBuZXdTdGF0ZX0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzUHJvbWlzZSgkaW5qZWN0b3IpKSB7XG4gICAgICAkaW5qZWN0b3IudGhlbigkaSA9PiB0aGlzLmluaXRpYWxpemUoJGkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsaXplKCRpbmplY3Rvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplKCRpbmplY3RvcjogYW55KSB7XG4gICAgY29uc3QgJHJvb3RTY29wZSA9ICRpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcbiAgICBjb25zdCAkcm9vdEVsZW1lbnQgPSAkaW5qZWN0b3IuZ2V0KCckcm9vdEVsZW1lbnQnKTtcblxuICAgICRyb290RWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC53aGljaCA9PT0gMiB8fFxuICAgICAgICAgIGV2ZW50LmJ1dHRvbiA9PT0gMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBlbG06IChOb2RlJlBhcmVudE5vZGUpfG51bGwgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIC8vIHRyYXZlcnNlIHRoZSBET00gdXAgdG8gZmluZCBmaXJzdCBBIHRhZ1xuICAgICAgd2hpbGUgKGVsbSAmJiBlbG0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2EnKSB7XG4gICAgICAgIC8vIGlnbm9yZSByZXdyaXRpbmcgaWYgbm8gQSB0YWcgKHJlYWNoZWQgcm9vdCBlbGVtZW50LCBvciBubyBwYXJlbnQgLSByZW1vdmVkIGZyb20gZG9jdW1lbnQpXG4gICAgICAgIGlmIChlbG0gPT09ICRyb290RWxlbWVudFswXSB8fCAhKGVsbSA9IGVsbS5wYXJlbnROb2RlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQW5jaG9yKGVsbSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhYnNIcmVmID0gZWxtLmhyZWY7XG4gICAgICBjb25zdCByZWxIcmVmID0gZWxtLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG4gICAgICAvLyBJZ25vcmUgd2hlbiB1cmwgaXMgc3RhcnRlZCB3aXRoIGphdmFzY3JpcHQ6IG9yIG1haWx0bzpcbiAgICAgIGlmIChJR05PUkVfVVJJX1JFR0VYUC50ZXN0KGFic0hyZWYpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFic0hyZWYgJiYgIWVsbS5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpICYmICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICBpZiAodGhpcy4kJHBhcnNlTGlua1VybChhYnNIcmVmLCByZWxIcmVmKSkge1xuICAgICAgICAgIC8vIFdlIGRvIGEgcHJldmVudERlZmF1bHQgZm9yIGFsbCB1cmxzIHRoYXQgYXJlIHBhcnQgb2YgdGhlIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbixcbiAgICAgICAgICAvLyBpbiBodG1sNW1vZGUgYW5kIGFsc28gd2l0aG91dCwgc28gdGhhdCB3ZSBhcmUgYWJsZSB0byBhYm9ydCBuYXZpZ2F0aW9uIHdpdGhvdXRcbiAgICAgICAgICAvLyBnZXR0aW5nIGRvdWJsZSBlbnRyaWVzIGluIHRoZSBsb2NhdGlvbiBoaXN0b3J5LlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgLy8gdXBkYXRlIGxvY2F0aW9uIG1hbnVhbGx5XG4gICAgICAgICAgaWYgKHRoaXMuYWJzVXJsKCkgIT09IHRoaXMuYnJvd3NlclVybCgpKSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy51cmxDaGFuZ2VzLnN1YnNjcmliZSgoe25ld1VybCwgbmV3U3RhdGV9KSA9PiB7XG4gICAgICBjb25zdCBvbGRVcmwgPSB0aGlzLmFic1VybCgpO1xuICAgICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLiQkc3RhdGU7XG4gICAgICB0aGlzLiQkcGFyc2UobmV3VXJsKTtcbiAgICAgIG5ld1VybCA9IHRoaXMuYWJzVXJsKCk7XG4gICAgICB0aGlzLiQkc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgIGNvbnN0IGRlZmF1bHRQcmV2ZW50ZWQgPVxuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnJGxvY2F0aW9uQ2hhbmdlU3RhcnQnLCBuZXdVcmwsIG9sZFVybCwgbmV3U3RhdGUsIG9sZFN0YXRlKVxuICAgICAgICAgICAgICAuZGVmYXVsdFByZXZlbnRlZDtcblxuICAgICAgLy8gaWYgdGhlIGxvY2F0aW9uIHdhcyBjaGFuZ2VkIGJ5IGEgYCRsb2NhdGlvbkNoYW5nZVN0YXJ0YCBoYW5kbGVyIHRoZW4gc3RvcFxuICAgICAgLy8gcHJvY2Vzc2luZyB0aGlzIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgaWYgKHRoaXMuYWJzVXJsKCkgIT09IG5ld1VybCkgcmV0dXJuO1xuXG4gICAgICAvLyBJZiBkZWZhdWx0IHdhcyBwcmV2ZW50ZWQsIHNldCBiYWNrIHRvIG9sZCBzdGF0ZS4gVGhpcyBpcyB0aGUgc3RhdGUgdGhhdCB3YXMgbG9jYWxseVxuICAgICAgLy8gY2FjaGVkIGluIHRoZSAkbG9jYXRpb24gc2VydmljZS5cbiAgICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuJCRwYXJzZShvbGRVcmwpO1xuICAgICAgICB0aGlzLnN0YXRlKG9sZFN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRCcm93c2VyVXJsV2l0aEZhbGxiYWNrKG9sZFVybCwgZmFsc2UsIG9sZFN0YXRlKTtcbiAgICAgICAgdGhpcy4kJG5vdGlmeUNoYW5nZUxpc3RlbmVycyh0aGlzLnVybCgpLCB0aGlzLiQkc3RhdGUsIG9sZFVybCwgb2xkU3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbml0YWxpemluZyA9IGZhbHNlO1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBuZXdVcmwsIG9sZFVybCwgbmV3U3RhdGUsIG9sZFN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEJyb3dzZXJVcGRhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmICghJHJvb3RTY29wZS4kJHBoYXNlKSB7XG4gICAgICAgICRyb290U2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIGJyb3dzZXJcbiAgICAkcm9vdFNjb3BlLiR3YXRjaCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbml0YWxpemluZyB8fCB0aGlzLnVwZGF0ZUJyb3dzZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCcm93c2VyID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgb2xkVXJsID0gdGhpcy5icm93c2VyVXJsKCk7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IHRoaXMuYWJzVXJsKCk7XG4gICAgICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5icm93c2VyU3RhdGUoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRSZXBsYWNlID0gdGhpcy4kJHJlcGxhY2U7XG5cbiAgICAgICAgY29uc3QgdXJsT3JTdGF0ZUNoYW5nZWQgPVxuICAgICAgICAgICAgIXRoaXMudXJsQ29kZWMuYXJlRXF1YWwob2xkVXJsLCBuZXdVcmwpIHx8IG9sZFN0YXRlICE9PSB0aGlzLiQkc3RhdGU7XG5cbiAgICAgICAgLy8gRmlyZSBsb2NhdGlvbiBjaGFuZ2VzIG9uZSB0aW1lIHRvIG9uIGluaXRpYWxpemF0aW9uLiBUaGlzIG11c3QgYmUgZG9uZSBvbiB0aGVcbiAgICAgICAgLy8gbmV4dCB0aWNrICh0aHVzIGluc2lkZSAkZXZhbEFzeW5jKCkpIGluIG9yZGVyIGZvciBsaXN0ZW5lcnMgdG8gYmUgcmVnaXN0ZXJlZFxuICAgICAgICAvLyBiZWZvcmUgdGhlIGV2ZW50IGZpcmVzLiBNaW1pY2luZyBiZWhhdmlvciBmcm9tICRsb2NhdGlvbldhdGNoOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvbWFzdGVyL3NyYy9uZy9sb2NhdGlvbi5qcyNMOTgzXG4gICAgICAgIGlmICh0aGlzLmluaXRhbGl6aW5nIHx8IHVybE9yU3RhdGVDaGFuZ2VkKSB7XG4gICAgICAgICAgdGhpcy5pbml0YWxpemluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgJHJvb3RTY29wZS4kZXZhbEFzeW5jKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgbmV3IFVSTCBhZ2FpbiBzaW5jZSBpdCBjb3VsZCBoYXZlIGNoYW5nZWQgZHVlIHRvIGFzeW5jIHVwZGF0ZVxuICAgICAgICAgICAgY29uc3QgbmV3VXJsID0gdGhpcy5hYnNVcmwoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQcmV2ZW50ZWQgPVxuICAgICAgICAgICAgICAgICRyb290U2NvcGVcbiAgICAgICAgICAgICAgICAgICAgLiRicm9hZGNhc3QoJyRsb2NhdGlvbkNoYW5nZVN0YXJ0JywgbmV3VXJsLCBvbGRVcmwsIHRoaXMuJCRzdGF0ZSwgb2xkU3RhdGUpXG4gICAgICAgICAgICAgICAgICAgIC5kZWZhdWx0UHJldmVudGVkO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgbG9jYXRpb24gd2FzIGNoYW5nZWQgYnkgYSBgJGxvY2F0aW9uQ2hhbmdlU3RhcnRgIGhhbmRsZXIgdGhlbiBzdG9wXG4gICAgICAgICAgICAvLyBwcm9jZXNzaW5nIHRoaXMgbG9jYXRpb24gY2hhbmdlXG4gICAgICAgICAgICBpZiAodGhpcy5hYnNVcmwoKSAhPT0gbmV3VXJsKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuJCRwYXJzZShvbGRVcmwpO1xuICAgICAgICAgICAgICB0aGlzLiQkc3RhdGUgPSBvbGRTdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgYmxvY2sgZG9lc24ndCBydW4gd2hlbiBpbml0YWxpemluZyBiZWNhdXNlIGl0J3MgZ29pbmcgdG8gcGVyZm9ybSB0aGUgdXBkYXRlIHRvXG4gICAgICAgICAgICAgIC8vIHRoZSBVUkwgd2hpY2ggc2hvdWxkbid0IGJlIG5lZWRlZCB3aGVuIGluaXRhbGl6aW5nLlxuICAgICAgICAgICAgICBpZiAodXJsT3JTdGF0ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJyb3dzZXJVcmxXaXRoRmFsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgIG5ld1VybCwgY3VycmVudFJlcGxhY2UsIG9sZFN0YXRlID09PSB0aGlzLiQkc3RhdGUgPyBudWxsIDogdGhpcy4kJHN0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkcmVwbGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdChcbiAgICAgICAgICAgICAgICAgICckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgbmV3VXJsLCBvbGRVcmwsIHRoaXMuJCRzdGF0ZSwgb2xkU3RhdGUpO1xuICAgICAgICAgICAgICBpZiAodXJsT3JTdGF0ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQkbm90aWZ5Q2hhbmdlTGlzdGVuZXJzKHRoaXMudXJsKCksIHRoaXMuJCRzdGF0ZSwgb2xkVXJsLCBvbGRTdGF0ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy4kJHJlcGxhY2UgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRCcm93c2VyVXBkYXRlKCkge1xuICAgIHRoaXMuJCRyZXBsYWNlID0gZmFsc2U7XG4gICAgdGhpcy4kJHN0YXRlID0gdGhpcy5icm93c2VyU3RhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUJyb3dzZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxhc3RCcm93c2VyVXJsID0gdGhpcy5icm93c2VyVXJsKCk7XG4gIH1cblxuICBwcml2YXRlIGxhc3RIaXN0b3J5U3RhdGU6IHVua25vd247XG4gIHByaXZhdGUgbGFzdEJyb3dzZXJVcmw6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGJyb3dzZXJVcmwoKTogc3RyaW5nO1xuICBwcml2YXRlIGJyb3dzZXJVcmwodXJsOiBzdHJpbmcsIHJlcGxhY2U/OiBib29sZWFuLCBzdGF0ZT86IHVua25vd24pOiB0aGlzO1xuICBwcml2YXRlIGJyb3dzZXJVcmwodXJsPzogc3RyaW5nLCByZXBsYWNlPzogYm9vbGVhbiwgc3RhdGU/OiB1bmtub3duKSB7XG4gICAgLy8gSW4gbW9kZXJuIGJyb3dzZXJzIGBoaXN0b3J5LnN0YXRlYCBpcyBgbnVsbGAgYnkgZGVmYXVsdDsgdHJlYXRpbmcgaXQgc2VwYXJhdGVseVxuICAgIC8vIGZyb20gYHVuZGVmaW5lZGAgd291bGQgY2F1c2UgYCRicm93c2VyLnVybCgnL2ZvbycpYCB0byBjaGFuZ2UgYGhpc3Rvcnkuc3RhdGVgXG4gICAgLy8gdG8gdW5kZWZpbmVkIHZpYSBgcHVzaFN0YXRlYC4gSW5zdGVhZCwgbGV0J3MgY2hhbmdlIGB1bmRlZmluZWRgIHRvIGBudWxsYCBoZXJlLlxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gc2V0dGVyXG4gICAgaWYgKHVybCkge1xuICAgICAgbGV0IHNhbWVTdGF0ZSA9IHRoaXMubGFzdEhpc3RvcnlTdGF0ZSA9PT0gc3RhdGU7XG5cbiAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgaW5wdXR0ZWQgVVJMXG4gICAgICB1cmwgPSB0aGlzLnVybENvZGVjLnBhcnNlKHVybCkuaHJlZjtcblxuICAgICAgLy8gRG9uJ3QgY2hhbmdlIGFueXRoaW5nIGlmIHByZXZpb3VzIGFuZCBjdXJyZW50IFVSTHMgYW5kIHN0YXRlcyBtYXRjaC5cbiAgICAgIGlmICh0aGlzLmxhc3RCcm93c2VyVXJsID09PSB1cmwgJiYgc2FtZVN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdGhpcy5sYXN0QnJvd3NlclVybCA9IHVybDtcbiAgICAgIHRoaXMubGFzdEhpc3RvcnlTdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAvLyBSZW1vdmUgc2VydmVyIGJhc2UgZnJvbSBVUkwgYXMgdGhlIEFuZ3VsYXIgQVBJcyBmb3IgdXBkYXRpbmcgVVJMIHJlcXVpcmVcbiAgICAgIC8vIGl0IHRvIGJlIHRoZSBwYXRoKy5cbiAgICAgIHVybCA9IHRoaXMuc3RyaXBCYXNlVXJsKHRoaXMuZ2V0U2VydmVyQmFzZSgpLCB1cmwpIHx8IHVybDtcblxuICAgICAgLy8gU2V0IHRoZSBVUkxcbiAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb25TdHJhdGVneS5yZXBsYWNlU3RhdGUoc3RhdGUsICcnLCB1cmwsICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9jYXRpb25TdHJhdGVneS5wdXNoU3RhdGUoc3RhdGUsICcnLCB1cmwsICcnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWNoZVN0YXRlKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgICAgLy8gZ2V0dGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXRmb3JtTG9jYXRpb24uaHJlZjtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIHZhcmlhYmxlIHNob3VsZCBiZSB1c2VkICpvbmx5KiBpbnNpZGUgdGhlIGNhY2hlU3RhdGUgZnVuY3Rpb24uXG4gIHByaXZhdGUgbGFzdENhY2hlZFN0YXRlOiB1bmtub3duID0gbnVsbDtcbiAgcHJpdmF0ZSBjYWNoZVN0YXRlKCkge1xuICAgIC8vIFRoaXMgc2hvdWxkIGJlIHRoZSBvbmx5IHBsYWNlIGluICRicm93c2VyIHdoZXJlIGBoaXN0b3J5LnN0YXRlYCBpcyByZWFkLlxuICAgIHRoaXMuY2FjaGVkU3RhdGUgPSB0aGlzLnBsYXRmb3JtTG9jYXRpb24uZ2V0U3RhdGUoKTtcbiAgICBpZiAodHlwZW9mIHRoaXMuY2FjaGVkU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNhY2hlZFN0YXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IGNhbGxiYWNrcyBmbyBmaXJlIHR3aWNlIGlmIGJvdGggaGFzaGNoYW5nZSAmIHBvcHN0YXRlIHdlcmUgZmlyZWQuXG4gICAgaWYgKGRlZXBFcXVhbCh0aGlzLmNhY2hlZFN0YXRlLCB0aGlzLmxhc3RDYWNoZWRTdGF0ZSkpIHtcbiAgICAgIHRoaXMuY2FjaGVkU3RhdGUgPSB0aGlzLmxhc3RDYWNoZWRTdGF0ZTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RDYWNoZWRTdGF0ZSA9IHRoaXMuY2FjaGVkU3RhdGU7XG4gICAgdGhpcy5sYXN0SGlzdG9yeVN0YXRlID0gdGhpcy5jYWNoZWRTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGVtdWxhdGVzIHRoZSAkYnJvd3Nlci5zdGF0ZSgpIGZ1bmN0aW9uIGZyb20gQW5ndWxhckpTLiBJdCB3aWxsIGNhdXNlXG4gICAqIGhpc3Rvcnkuc3RhdGUgdG8gYmUgY2FjaGVkIHVubGVzcyBjaGFuZ2VkIHdpdGggZGVlcCBlcXVhbGl0eSBjaGVjay5cbiAgICovXG4gIHByaXZhdGUgYnJvd3NlclN0YXRlKCk6IHVua25vd24ge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZFN0YXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdHJpcEJhc2VVcmwoYmFzZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aChiYXNlKSkge1xuICAgICAgcmV0dXJuIHVybC5zdWJzdHIoYmFzZS5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXJ2ZXJCYXNlKCkge1xuICAgIGNvbnN0IHtwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnR9ID0gdGhpcy5wbGF0Zm9ybUxvY2F0aW9uO1xuICAgIGNvbnN0IGJhc2VIcmVmID0gdGhpcy5sb2NhdGlvblN0cmF0ZWd5LmdldEJhc2VIcmVmKCk7XG4gICAgbGV0IHVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9JHtiYXNlSHJlZiB8fCAnLyd9YDtcbiAgICByZXR1cm4gdXJsLmVuZHNXaXRoKCcvJykgPyB1cmwgOiB1cmwgKyAnLyc7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQXBwVXJsKHVybDogc3RyaW5nKSB7XG4gICAgaWYgKERPVUJMRV9TTEFTSF9SRUdFWC50ZXN0KHVybCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQmFkIFBhdGggLSBVUkwgY2Fubm90IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXM6ICR7dXJsfWApO1xuICAgIH1cblxuICAgIGxldCBwcmVmaXhlZCA9ICh1cmwuY2hhckF0KDApICE9PSAnLycpO1xuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgdXJsID0gJy8nICsgdXJsO1xuICAgIH1cbiAgICBsZXQgbWF0Y2ggPSB0aGlzLnVybENvZGVjLnBhcnNlKHVybCwgdGhpcy5nZXRTZXJ2ZXJCYXNlKCkpO1xuICAgIGlmICh0eXBlb2YgbWF0Y2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJhZCBVUkwgLSBDYW5ub3QgcGFyc2UgVVJMOiAke3VybH1gKTtcbiAgICB9XG4gICAgbGV0IHBhdGggPVxuICAgICAgICBwcmVmaXhlZCAmJiBtYXRjaC5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IG1hdGNoLnBhdGhuYW1lLnN1YnN0cmluZygxKSA6IG1hdGNoLnBhdGhuYW1lO1xuICAgIHRoaXMuJCRwYXRoID0gdGhpcy51cmxDb2RlYy5kZWNvZGVQYXRoKHBhdGgpO1xuICAgIHRoaXMuJCRzZWFyY2ggPSB0aGlzLnVybENvZGVjLmRlY29kZVNlYXJjaChtYXRjaC5zZWFyY2gpO1xuICAgIHRoaXMuJCRoYXNoID0gdGhpcy51cmxDb2RlYy5kZWNvZGVIYXNoKG1hdGNoLmhhc2gpO1xuXG4gICAgLy8gbWFrZSBzdXJlIHBhdGggc3RhcnRzIHdpdGggJy8nO1xuICAgIGlmICh0aGlzLiQkcGF0aCAmJiB0aGlzLiQkcGF0aC5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgdGhpcy4kJHBhdGggPSAnLycgKyB0aGlzLiQkcGF0aDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGxpc3RlbmVycyBmb3IgVVJMIGNoYW5nZXMuIFRoaXMgQVBJIGlzIHVzZWQgdG8gY2F0Y2ggdXBkYXRlcyBwZXJmb3JtZWQgYnkgdGhlXG4gICAqIEFuZ3VsYXJKUyBmcmFtZXdvcmsuIFRoZXNlIGNoYW5nZXMgYXJlIGEgc3Vic2V0IG9mIHRoZSBgJGxvY2F0aW9uQ2hhbmdlU3RhcnRgIGFuZFxuICAgKiBgJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc2AgZXZlbnRzIHdoaWNoIGZpcmUgd2hlbiBBbmd1bGFySlMgdXBkYXRlcyBpdHMgaW50ZXJuYWxseS1yZWZlcmVuY2VkXG4gICAqIHZlcnNpb24gb2YgdGhlIGJyb3dzZXIgVVJMLlxuICAgKlxuICAgKiBJdCdzIHBvc3NpYmxlIGZvciBgJGxvY2F0aW9uQ2hhbmdlYCBldmVudHMgdG8gaGFwcGVuLCBidXQgZm9yIHRoZSBicm93c2VyIFVSTFxuICAgKiAod2luZG93LmxvY2F0aW9uKSB0byByZW1haW4gdW5jaGFuZ2VkLiBUaGlzIGBvbkNoYW5nZWAgY2FsbGJhY2sgd2lsbCBmaXJlIG9ubHkgd2hlbiBBbmd1bGFySlNcbiAgICogYWN0dWFsbHkgdXBkYXRlcyB0aGUgYnJvd3NlciBVUkwgKHdpbmRvdy5sb2NhdGlvbikuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyB0cmlnZ2VyZWQgZm9yIHRoZSBsaXN0ZW5lciB3aGVuIHRoZSBVUkwgY2hhbmdlcy5cbiAgICogQHBhcmFtIGVyciBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMuXG4gICAqL1xuICBvbkNoYW5nZShcbiAgICAgIGZuOiAodXJsOiBzdHJpbmcsIHN0YXRlOiB1bmtub3duLCBvbGRVcmw6IHN0cmluZywgb2xkU3RhdGU6IHVua25vd24pID0+IHZvaWQsXG4gICAgICBlcnI6IChlOiBFcnJvcikgPT4gdm9pZCA9IChlOiBFcnJvcikgPT4ge30pIHtcbiAgICB0aGlzLiQkY2hhbmdlTGlzdGVuZXJzLnB1c2goW2ZuLCBlcnJdKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgJCRub3RpZnlDaGFuZ2VMaXN0ZW5lcnMoXG4gICAgICB1cmw6IHN0cmluZyA9ICcnLCBzdGF0ZTogdW5rbm93biwgb2xkVXJsOiBzdHJpbmcgPSAnJywgb2xkU3RhdGU6IHVua25vd24pIHtcbiAgICB0aGlzLiQkY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goKFtmbiwgZXJyXSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4odXJsLCBzdGF0ZSwgb2xkVXJsLCBvbGRTdGF0ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVycihlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIHByb3ZpZGVkIFVSTCwgYW5kIHNldHMgdGhlIGN1cnJlbnQgVVJMIHRvIHRoZSBwYXJzZWQgcmVzdWx0LlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFRoZSBVUkwgc3RyaW5nLlxuICAgKi9cbiAgJCRwYXJzZSh1cmw6IHN0cmluZykge1xuICAgIGxldCBwYXRoVXJsOiBzdHJpbmd8dW5kZWZpbmVkO1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBwYXRoVXJsID0gdXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW1vdmUgcHJvdG9jb2wgJiBob3N0bmFtZSBpZiBVUkwgc3RhcnRzIHdpdGggaXRcbiAgICAgIHBhdGhVcmwgPSB0aGlzLnN0cmlwQmFzZVVybCh0aGlzLmdldFNlcnZlckJhc2UoKSwgdXJsKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXRoVXJsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVybCBcIiR7dXJsfVwiLCBtaXNzaW5nIHBhdGggcHJlZml4IFwiJHt0aGlzLmdldFNlcnZlckJhc2UoKX1cIi5gKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcnNlQXBwVXJsKHBhdGhVcmwpO1xuXG4gICAgaWYgKCF0aGlzLiQkcGF0aCkge1xuICAgICAgdGhpcy4kJHBhdGggPSAnLyc7XG4gICAgfVxuICAgIHRoaXMuY29tcG9zZVVybHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIHByb3ZpZGVkIFVSTCBhbmQgaXRzIHJlbGF0aXZlIFVSTC5cbiAgICpcbiAgICogQHBhcmFtIHVybCBUaGUgZnVsbCBVUkwgc3RyaW5nLlxuICAgKiBAcGFyYW0gcmVsSHJlZiBBIFVSTCBzdHJpbmcgcmVsYXRpdmUgdG8gdGhlIGZ1bGwgVVJMIHN0cmluZy5cbiAgICovXG4gICQkcGFyc2VMaW5rVXJsKHVybDogc3RyaW5nLCByZWxIcmVmPzogc3RyaW5nfG51bGwpOiBib29sZWFuIHtcbiAgICAvLyBXaGVuIHJlbEhyZWYgaXMgcGFzc2VkLCBpdCBzaG91bGQgYmUgYSBoYXNoIGFuZCBpcyBoYW5kbGVkIHNlcGFyYXRlbHlcbiAgICBpZiAocmVsSHJlZiAmJiByZWxIcmVmWzBdID09PSAnIycpIHtcbiAgICAgIHRoaXMuaGFzaChyZWxIcmVmLnNsaWNlKDEpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBsZXQgcmV3cml0dGVuVXJsO1xuICAgIGxldCBhcHBVcmwgPSB0aGlzLnN0cmlwQmFzZVVybCh0aGlzLmdldFNlcnZlckJhc2UoKSwgdXJsKTtcbiAgICBpZiAodHlwZW9mIGFwcFVybCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJld3JpdHRlblVybCA9IHRoaXMuZ2V0U2VydmVyQmFzZSgpICsgYXBwVXJsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5nZXRTZXJ2ZXJCYXNlKCkgPT09IHVybCArICcvJykge1xuICAgICAgcmV3cml0dGVuVXJsID0gdGhpcy5nZXRTZXJ2ZXJCYXNlKCk7XG4gICAgfVxuICAgIC8vIFNldCB0aGUgVVJMXG4gICAgaWYgKHJld3JpdHRlblVybCkge1xuICAgICAgdGhpcy4kJHBhcnNlKHJld3JpdHRlblVybCk7XG4gICAgfVxuICAgIHJldHVybiAhIXJld3JpdHRlblVybDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QnJvd3NlclVybFdpdGhGYWxsYmFjayh1cmw6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiwgc3RhdGU6IHVua25vd24pIHtcbiAgICBjb25zdCBvbGRVcmwgPSB0aGlzLnVybCgpO1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy4kJHN0YXRlO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmJyb3dzZXJVcmwodXJsLCByZXBsYWNlLCBzdGF0ZSk7XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSAkbG9jYXRpb24uc3RhdGUoKSByZXR1cm5zIHJlZmVyZW50aWFsbHkgaWRlbnRpY2FsIChub3QganVzdCBkZWVwbHkgZXF1YWwpXG4gICAgICAvLyBzdGF0ZSBvYmplY3Q7IHRoaXMgbWFrZXMgcG9zc2libGUgcXVpY2sgY2hlY2tpbmcgaWYgdGhlIHN0YXRlIGNoYW5nZWQgaW4gdGhlIGRpZ2VzdFxuICAgICAgLy8gbG9vcC4gQ2hlY2tpbmcgZGVlcCBlcXVhbGl0eSB3b3VsZCBiZSB0b28gZXhwZW5zaXZlLlxuICAgICAgdGhpcy4kJHN0YXRlID0gdGhpcy5icm93c2VyU3RhdGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBSZXN0b3JlIG9sZCB2YWx1ZXMgaWYgcHVzaFN0YXRlIGZhaWxzXG4gICAgICB0aGlzLnVybChvbGRVcmwpO1xuICAgICAgdGhpcy4kJHN0YXRlID0gb2xkU3RhdGU7XG5cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb21wb3NlVXJscygpIHtcbiAgICB0aGlzLiQkdXJsID0gdGhpcy51cmxDb2RlYy5ub3JtYWxpemUodGhpcy4kJHBhdGgsIHRoaXMuJCRzZWFyY2gsIHRoaXMuJCRoYXNoKTtcbiAgICB0aGlzLiQkYWJzVXJsID0gdGhpcy5nZXRTZXJ2ZXJCYXNlKCkgKyB0aGlzLiQkdXJsLnN1YnN0cigxKTsgIC8vIHJlbW92ZSAnLycgZnJvbSBmcm9udCBvZiBVUkxcbiAgICB0aGlzLnVwZGF0ZUJyb3dzZXIgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZnVsbCBVUkwgcmVwcmVzZW50YXRpb24gd2l0aCBhbGwgc2VnbWVudHMgZW5jb2RlZCBhY2NvcmRpbmcgdG9cbiAgICogcnVsZXMgc3BlY2lmaWVkIGluXG4gICAqIFtSRkMgMzk4Nl0oaHR0cDovL3d3dy5pZXRmLm9yZy9yZmMvcmZjMzk4Ni50eHQpLlxuICAgKlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAvLyBnaXZlbiBVUkwgaHR0cDovL2V4YW1wbGUuY29tLyMvc29tZS9wYXRoP2Zvbz1iYXImYmF6PXhveG9cbiAgICogbGV0IGFic1VybCA9ICRsb2NhdGlvbi5hYnNVcmwoKTtcbiAgICogLy8gPT4gXCJodHRwOi8vZXhhbXBsZS5jb20vIy9zb21lL3BhdGg/Zm9vPWJhciZiYXo9eG94b1wiXG4gICAqIGBgYFxuICAgKi9cbiAgYWJzVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuJCRhYnNVcmw7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjdXJyZW50IFVSTCwgb3Igc2V0cyBhIG5ldyBVUkwuIFdoZW4gc2V0dGluZyBhIFVSTCxcbiAgICogY2hhbmdlcyB0aGUgcGF0aCwgc2VhcmNoLCBhbmQgaGFzaCwgYW5kIHJldHVybnMgYSByZWZlcmVuY2UgdG8gaXRzIG93biBpbnN0YW5jZS5cbiAgICpcbiAgICogYGBganNcbiAgICogLy8gZ2l2ZW4gVVJMIGh0dHA6Ly9leGFtcGxlLmNvbS8jL3NvbWUvcGF0aD9mb289YmFyJmJhej14b3hvXG4gICAqIGxldCB1cmwgPSAkbG9jYXRpb24udXJsKCk7XG4gICAqIC8vID0+IFwiL3NvbWUvcGF0aD9mb289YmFyJmJhej14b3hvXCJcbiAgICogYGBgXG4gICAqL1xuICB1cmwoKTogc3RyaW5nO1xuICB1cmwodXJsOiBzdHJpbmcpOiB0aGlzO1xuICB1cmwodXJsPzogc3RyaW5nKTogc3RyaW5nfHRoaXMge1xuICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKCF1cmwubGVuZ3RoKSB7XG4gICAgICAgIHVybCA9ICcvJztcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWF0Y2ggPSBQQVRIX01BVENILmV4ZWModXJsKTtcbiAgICAgIGlmICghbWF0Y2gpIHJldHVybiB0aGlzO1xuICAgICAgaWYgKG1hdGNoWzFdIHx8IHVybCA9PT0gJycpIHRoaXMucGF0aCh0aGlzLnVybENvZGVjLmRlY29kZVBhdGgobWF0Y2hbMV0pKTtcbiAgICAgIGlmIChtYXRjaFsyXSB8fCBtYXRjaFsxXSB8fCB1cmwgPT09ICcnKSB0aGlzLnNlYXJjaChtYXRjaFszXSB8fCAnJyk7XG4gICAgICB0aGlzLmhhc2gobWF0Y2hbNV0gfHwgJycpO1xuXG4gICAgICAvLyBDaGFpbmFibGUgbWV0aG9kXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4kJHVybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHByb3RvY29sIG9mIHRoZSBjdXJyZW50IFVSTC5cbiAgICpcbiAgICogYGBganNcbiAgICogLy8gZ2l2ZW4gVVJMIGh0dHA6Ly9leGFtcGxlLmNvbS8jL3NvbWUvcGF0aD9mb289YmFyJmJhej14b3hvXG4gICAqIGxldCBwcm90b2NvbCA9ICRsb2NhdGlvbi5wcm90b2NvbCgpO1xuICAgKiAvLyA9PiBcImh0dHBcIlxuICAgKiBgYGBcbiAgICovXG4gIHByb3RvY29sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuJCRwcm90b2NvbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHByb3RvY29sIG9mIHRoZSBjdXJyZW50IFVSTC5cbiAgICpcbiAgICogSW4gY29udHJhc3QgdG8gdGhlIG5vbi1Bbmd1bGFySlMgdmVyc2lvbiBgbG9jYXRpb24uaG9zdGAgd2hpY2ggcmV0dXJucyBgaG9zdG5hbWU6cG9ydGAsIHRoaXNcbiAgICogcmV0dXJucyB0aGUgYGhvc3RuYW1lYCBwb3J0aW9uIG9ubHkuXG4gICAqXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIC8vIGdpdmVuIFVSTCBodHRwOi8vZXhhbXBsZS5jb20vIy9zb21lL3BhdGg/Zm9vPWJhciZiYXo9eG94b1xuICAgKiBsZXQgaG9zdCA9ICRsb2NhdGlvbi5ob3N0KCk7XG4gICAqIC8vID0+IFwiZXhhbXBsZS5jb21cIlxuICAgKlxuICAgKiAvLyBnaXZlbiBVUkwgaHR0cDovL3VzZXI6cGFzc3dvcmRAZXhhbXBsZS5jb206ODA4MC8jL3NvbWUvcGF0aD9mb289YmFyJmJhej14b3hvXG4gICAqIGhvc3QgPSAkbG9jYXRpb24uaG9zdCgpO1xuICAgKiAvLyA9PiBcImV4YW1wbGUuY29tXCJcbiAgICogaG9zdCA9IGxvY2F0aW9uLmhvc3Q7XG4gICAqIC8vID0+IFwiZXhhbXBsZS5jb206ODA4MFwiXG4gICAqIGBgYFxuICAgKi9cbiAgaG9zdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLiQkaG9zdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHBvcnQgb2YgdGhlIGN1cnJlbnQgVVJMLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAvLyBnaXZlbiBVUkwgaHR0cDovL2V4YW1wbGUuY29tLyMvc29tZS9wYXRoP2Zvbz1iYXImYmF6PXhveG9cbiAgICogbGV0IHBvcnQgPSAkbG9jYXRpb24ucG9ydCgpO1xuICAgKiAvLyA9PiA4MFxuICAgKiBgYGBcbiAgICovXG4gIHBvcnQoKTogbnVtYmVyfG51bGwge1xuICAgIHJldHVybiB0aGlzLiQkcG9ydDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHBhdGggb2YgdGhlIGN1cnJlbnQgVVJMLCBvciBjaGFuZ2VzIHRoZSBwYXRoIGFuZCByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIGl0cyBvd25cbiAgICogaW5zdGFuY2UuXG4gICAqXG4gICAqIFBhdGhzIHNob3VsZCBhbHdheXMgYmVnaW4gd2l0aCBmb3J3YXJkIHNsYXNoICgvKS4gVGhpcyBtZXRob2QgYWRkcyB0aGUgZm9yd2FyZCBzbGFzaFxuICAgKiBpZiBpdCBpcyBtaXNzaW5nLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAvLyBnaXZlbiBVUkwgaHR0cDovL2V4YW1wbGUuY29tLyMvc29tZS9wYXRoP2Zvbz1iYXImYmF6PXhveG9cbiAgICogbGV0IHBhdGggPSAkbG9jYXRpb24ucGF0aCgpO1xuICAgKiAvLyA9PiBcIi9zb21lL3BhdGhcIlxuICAgKiBgYGBcbiAgICovXG4gIHBhdGgoKTogc3RyaW5nO1xuICBwYXRoKHBhdGg6IHN0cmluZ3xudW1iZXJ8bnVsbCk6IHRoaXM7XG4gIHBhdGgocGF0aD86IHN0cmluZ3xudW1iZXJ8bnVsbCk6IHN0cmluZ3x0aGlzIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kJHBhdGg7XG4gICAgfVxuXG4gICAgLy8gbnVsbCBwYXRoIGNvbnZlcnRzIHRvIGVtcHR5IHN0cmluZy4gUHJlcGVuZCB3aXRoIFwiL1wiIGlmIG5lZWRlZC5cbiAgICBwYXRoID0gcGF0aCAhPT0gbnVsbCA/IHBhdGgudG9TdHJpbmcoKSA6ICcnO1xuICAgIHBhdGggPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6ICcvJyArIHBhdGg7XG5cbiAgICB0aGlzLiQkcGF0aCA9IHBhdGg7XG5cbiAgICB0aGlzLmNvbXBvc2VVcmxzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGEgbWFwIG9mIHRoZSBzZWFyY2ggcGFyYW1ldGVycyBvZiB0aGUgY3VycmVudCBVUkwsIG9yIGNoYW5nZXMgYSBzZWFyY2hcbiAgICogcGFydCBhbmQgcmV0dXJucyBhIHJlZmVyZW5jZSB0byBpdHMgb3duIGluc3RhbmNlLlxuICAgKlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAvLyBnaXZlbiBVUkwgaHR0cDovL2V4YW1wbGUuY29tLyMvc29tZS9wYXRoP2Zvbz1iYXImYmF6PXhveG9cbiAgICogbGV0IHNlYXJjaE9iamVjdCA9ICRsb2NhdGlvbi5zZWFyY2goKTtcbiAgICogLy8gPT4ge2ZvbzogJ2JhcicsIGJhejogJ3hveG8nfVxuICAgKlxuICAgKiAvLyBzZXQgZm9vIHRvICd5aXBlZSdcbiAgICogJGxvY2F0aW9uLnNlYXJjaCgnZm9vJywgJ3lpcGVlJyk7XG4gICAqIC8vICRsb2NhdGlvbi5zZWFyY2goKSA9PiB7Zm9vOiAneWlwZWUnLCBiYXo6ICd4b3hvJ31cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdC48c3RyaW5nPnxPYmplY3QuPEFycmF5LjxzdHJpbmc+Pn0gc2VhcmNoIE5ldyBzZWFyY2ggcGFyYW1zIC0gc3RyaW5nIG9yXG4gICAqIGhhc2ggb2JqZWN0LlxuICAgKlxuICAgKiBXaGVuIGNhbGxlZCB3aXRoIGEgc2luZ2xlIGFyZ3VtZW50IHRoZSBtZXRob2QgYWN0cyBhcyBhIHNldHRlciwgc2V0dGluZyB0aGUgYHNlYXJjaGAgY29tcG9uZW50XG4gICAqIG9mIGAkbG9jYXRpb25gIHRvIHRoZSBzcGVjaWZpZWQgdmFsdWUuXG4gICAqXG4gICAqIElmIHRoZSBhcmd1bWVudCBpcyBhIGhhc2ggb2JqZWN0IGNvbnRhaW5pbmcgYW4gYXJyYXkgb2YgdmFsdWVzLCB0aGVzZSB2YWx1ZXMgd2lsbCBiZSBlbmNvZGVkXG4gICAqIGFzIGR1cGxpY2F0ZSBzZWFyY2ggcGFyYW1ldGVycyBpbiB0aGUgVVJMLlxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8TnVtYmVyfEFycmF5PHN0cmluZz58Ym9vbGVhbik9fSBwYXJhbVZhbHVlIElmIGBzZWFyY2hgIGlzIGEgc3RyaW5nIG9yIG51bWJlcixcbiAgICogICAgIHRoZW4gYHBhcmFtVmFsdWVgXG4gICAqIHdpbGwgb3ZlcnJpZGUgb25seSBhIHNpbmdsZSBzZWFyY2ggcHJvcGVydHkuXG4gICAqXG4gICAqIElmIGBwYXJhbVZhbHVlYCBpcyBhbiBhcnJheSwgaXQgd2lsbCBvdmVycmlkZSB0aGUgcHJvcGVydHkgb2YgdGhlIGBzZWFyY2hgIGNvbXBvbmVudCBvZlxuICAgKiBgJGxvY2F0aW9uYCBzcGVjaWZpZWQgdmlhIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAgICpcbiAgICogSWYgYHBhcmFtVmFsdWVgIGlzIGBudWxsYCwgdGhlIHByb3BlcnR5IHNwZWNpZmllZCB2aWEgdGhlIGZpcnN0IGFyZ3VtZW50IHdpbGwgYmUgZGVsZXRlZC5cbiAgICpcbiAgICogSWYgYHBhcmFtVmFsdWVgIGlzIGB0cnVlYCwgdGhlIHByb3BlcnR5IHNwZWNpZmllZCB2aWEgdGhlIGZpcnN0IGFyZ3VtZW50IHdpbGwgYmUgYWRkZWQgd2l0aCBub1xuICAgKiB2YWx1ZSBub3IgdHJhaWxpbmcgZXF1YWwgc2lnbi5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcGFyc2VkIGBzZWFyY2hgIG9iamVjdCBvZiB0aGUgY3VycmVudCBVUkwsIG9yIHRoZSBjaGFuZ2VkIGBzZWFyY2hgIG9iamVjdC5cbiAgICovXG4gIHNlYXJjaCgpOiB7W2tleTogc3RyaW5nXTogdW5rbm93bn07XG4gIHNlYXJjaChzZWFyY2g6IHN0cmluZ3xudW1iZXJ8e1trZXk6IHN0cmluZ106IHVua25vd259KTogdGhpcztcbiAgc2VhcmNoKFxuICAgICAgc2VhcmNoOiBzdHJpbmd8bnVtYmVyfHtba2V5OiBzdHJpbmddOiB1bmtub3dufSxcbiAgICAgIHBhcmFtVmFsdWU6IG51bGx8dW5kZWZpbmVkfHN0cmluZ3xudW1iZXJ8Ym9vbGVhbnxzdHJpbmdbXSk6IHRoaXM7XG4gIHNlYXJjaChcbiAgICAgIHNlYXJjaD86IHN0cmluZ3xudW1iZXJ8e1trZXk6IHN0cmluZ106IHVua25vd259LFxuICAgICAgcGFyYW1WYWx1ZT86IG51bGx8dW5kZWZpbmVkfHN0cmluZ3xudW1iZXJ8Ym9vbGVhbnxzdHJpbmdbXSk6IHtba2V5OiBzdHJpbmddOiB1bmtub3dufXx0aGlzIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2g7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmICh0eXBlb2Ygc2VhcmNoID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygc2VhcmNoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHRoaXMuJCRzZWFyY2ggPSB0aGlzLnVybENvZGVjLmRlY29kZVNlYXJjaChzZWFyY2gudG9TdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlYXJjaCA9PT0gJ29iamVjdCcgJiYgc2VhcmNoICE9PSBudWxsKSB7XG4gICAgICAgICAgLy8gQ29weSB0aGUgb2JqZWN0IHNvIGl0J3MgbmV2ZXIgbXV0YXRlZFxuICAgICAgICAgIHNlYXJjaCA9IHsuLi5zZWFyY2h9O1xuICAgICAgICAgIC8vIHJlbW92ZSBvYmplY3QgdW5kZWZpbmVkIG9yIG51bGwgcHJvcGVydGllc1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNlYXJjaCkge1xuICAgICAgICAgICAgaWYgKHNlYXJjaFtrZXldID09IG51bGwpIGRlbGV0ZSBzZWFyY2hba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLiQkc2VhcmNoID0gc2VhcmNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgJ0xvY2F0aW9uUHJvdmlkZXIuc2VhcmNoKCk6IEZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFNlYXJjaCA9IHRoaXMuc2VhcmNoKCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbVZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwYXJhbVZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgY3VycmVudFNlYXJjaFtzZWFyY2hdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoKGN1cnJlbnRTZWFyY2gpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50U2VhcmNoW3NlYXJjaF0gPSBwYXJhbVZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoKGN1cnJlbnRTZWFyY2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbXBvc2VVcmxzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjdXJyZW50IGhhc2ggZnJhZ21lbnQsIG9yIGNoYW5nZXMgdGhlIGhhc2ggZnJhZ21lbnQgYW5kIHJldHVybnMgYSByZWZlcmVuY2UgdG9cbiAgICogaXRzIG93biBpbnN0YW5jZS5cbiAgICpcbiAgICogYGBganNcbiAgICogLy8gZ2l2ZW4gVVJMIGh0dHA6Ly9leGFtcGxlLmNvbS8jL3NvbWUvcGF0aD9mb289YmFyJmJhej14b3hvI2hhc2hWYWx1ZVxuICAgKiBsZXQgaGFzaCA9ICRsb2NhdGlvbi5oYXNoKCk7XG4gICAqIC8vID0+IFwiaGFzaFZhbHVlXCJcbiAgICogYGBgXG4gICAqL1xuICBoYXNoKCk6IHN0cmluZztcbiAgaGFzaChoYXNoOiBzdHJpbmd8bnVtYmVyfG51bGwpOiB0aGlzO1xuICBoYXNoKGhhc2g/OiBzdHJpbmd8bnVtYmVyfG51bGwpOiBzdHJpbmd8dGhpcyB7XG4gICAgaWYgKHR5cGVvZiBoYXNoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXMuJCRoYXNoO1xuICAgIH1cblxuICAgIHRoaXMuJCRoYXNoID0gaGFzaCAhPT0gbnVsbCA/IGhhc2gudG9TdHJpbmcoKSA6ICcnO1xuXG4gICAgdGhpcy5jb21wb3NlVXJscygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdG8gYCRsb2NhdGlvbmAgZHVyaW5nIHRoZSBjdXJyZW50IGAkZGlnZXN0YCB3aWxsIHJlcGxhY2UgdGhlIGN1cnJlbnRcbiAgICogaGlzdG9yeSByZWNvcmQsIGluc3RlYWQgb2YgYWRkaW5nIGEgbmV3IG9uZS5cbiAgICovXG4gIHJlcGxhY2UoKTogdGhpcyB7XG4gICAgdGhpcy4kJHJlcGxhY2UgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgaGlzdG9yeSBzdGF0ZSBvYmplY3Qgd2hlbiBjYWxsZWQgd2l0aG91dCBhbnkgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBDaGFuZ2UgdGhlIGhpc3Rvcnkgc3RhdGUgb2JqZWN0IHdoZW4gY2FsbGVkIHdpdGggb25lIHBhcmFtZXRlciBhbmQgcmV0dXJuIGAkbG9jYXRpb25gLlxuICAgKiBUaGUgc3RhdGUgb2JqZWN0IGlzIGxhdGVyIHBhc3NlZCB0byBgcHVzaFN0YXRlYCBvciBgcmVwbGFjZVN0YXRlYC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgc3VwcG9ydGVkIG9ubHkgaW4gSFRNTDUgbW9kZSBhbmQgb25seSBpbiBicm93c2VycyBzdXBwb3J0aW5nXG4gICAqIHRoZSBIVE1MNSBIaXN0b3J5IEFQSSBtZXRob2RzIHN1Y2ggYXMgYHB1c2hTdGF0ZWAgYW5kIGByZXBsYWNlU3RhdGVgLiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0XG4gICAqIG9sZGVyIGJyb3dzZXJzIChsaWtlIElFOSBvciBBbmRyb2lkIDwgNC4wKSwgZG9uJ3QgdXNlIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKi9cbiAgc3RhdGUoKTogdW5rbm93bjtcbiAgc3RhdGUoc3RhdGU6IHVua25vd24pOiB0aGlzO1xuICBzdGF0ZShzdGF0ZT86IHVua25vd24pOiB1bmtub3dufHRoaXMge1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kJHN0YXRlO1xuICAgIH1cblxuICAgIHRoaXMuJCRzdGF0ZSA9IHN0YXRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGZhY3RvcnkgZnVuY3Rpb24gdXNlZCB0byBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIGAkbG9jYXRpb25TaGltYCBpbiBBbmd1bGFyLFxuICogYW5kIHByb3ZpZGVzIGFuIEFQSS1jb21wYXRpYWJsZSBgJGxvY2F0aW9uUHJvdmlkZXJgIGZvciBBbmd1bGFySlMuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgJGxvY2F0aW9uU2hpbVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIG5nVXBncmFkZTogVXBncmFkZU1vZHVsZSwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgICBwcml2YXRlIHBsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24sIHByaXZhdGUgdXJsQ29kZWM6IFVybENvZGVjLFxuICAgICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5KSB7fVxuXG4gIC8qKlxuICAgKiBGYWN0b3J5IG1ldGhvZCB0aGF0IHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlICRsb2NhdGlvblNoaW1cbiAgICovXG4gICRnZXQoKSB7XG4gICAgcmV0dXJuIG5ldyAkbG9jYXRpb25TaGltKFxuICAgICAgICB0aGlzLm5nVXBncmFkZS4kaW5qZWN0b3IsIHRoaXMubG9jYXRpb24sIHRoaXMucGxhdGZvcm1Mb2NhdGlvbiwgdGhpcy51cmxDb2RlYyxcbiAgICAgICAgdGhpcy5sb2NhdGlvblN0cmF0ZWd5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdHViIG1ldGhvZCB1c2VkIHRvIGtlZXAgQVBJIGNvbXBhdGlibGUgd2l0aCBBbmd1bGFySlMuIFRoaXMgc2V0dGluZyBpcyBjb25maWd1cmVkIHRocm91Z2hcbiAgICogdGhlIExvY2F0aW9uVXBncmFkZU1vZHVsZSdzIGBjb25maWdgIG1ldGhvZCBpbiB5b3VyIEFuZ3VsYXIgYXBwLlxuICAgKi9cbiAgaGFzaFByZWZpeChwcmVmaXg/OiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZ3VyZSBMb2NhdGlvblVwZ3JhZGUgdGhyb3VnaCBMb2NhdGlvblVwZ3JhZGVNb2R1bGUuY29uZmlnIG1ldGhvZC4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdHViIG1ldGhvZCB1c2VkIHRvIGtlZXAgQVBJIGNvbXBhdGlibGUgd2l0aCBBbmd1bGFySlMuIFRoaXMgc2V0dGluZyBpcyBjb25maWd1cmVkIHRocm91Z2hcbiAgICogdGhlIExvY2F0aW9uVXBncmFkZU1vZHVsZSdzIGBjb25maWdgIG1ldGhvZCBpbiB5b3VyIEFuZ3VsYXIgYXBwLlxuICAgKi9cbiAgaHRtbDVNb2RlKG1vZGU/OiBhbnkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZ3VyZSBMb2NhdGlvblVwZ3JhZGUgdGhyb3VnaCBMb2NhdGlvblVwZ3JhZGVNb2R1bGUuY29uZmlnIG1ldGhvZC4nKTtcbiAgfVxufVxuIl19