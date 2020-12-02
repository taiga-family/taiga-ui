/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/upgrade/src/location_shim.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ReplaySubject } from 'rxjs';
import { deepEqual, isAnchor, isPromise } from './utils';
/** @type {?} */
const PATH_MATCH = /^([^?#]*)(\?([^#]*))?(#(.*))?$/;
/** @type {?} */
const DOUBLE_SLASH_REGEX = /^\s*[\\/]{2,}/;
/** @type {?} */
const IGNORE_URI_REGEXP = /^\s*(javascript|mailto):/i;
/** @type {?} */
const DEFAULT_PORTS = {
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
 * \@publicApi
 */
export class $locationShim {
    /**
     * @param {?} $injector
     * @param {?} location
     * @param {?} platformLocation
     * @param {?} urlCodec
     * @param {?} locationStrategy
     */
    constructor($injector, location, platformLocation, urlCodec, locationStrategy) {
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
        /** @type {?} */
        const initialUrl = this.browserUrl();
        /** @type {?} */
        let parsedUrl = this.urlCodec.parse(initialUrl);
        if (typeof parsedUrl === 'string') {
            throw 'Invalid URL';
        }
        this.$$protocol = parsedUrl.protocol;
        this.$$host = parsedUrl.hostname;
        this.$$port = parseInt(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null;
        this.$$parseLinkUrl(initialUrl, initialUrl);
        this.cacheState();
        this.$$state = this.browserState();
        this.location.onUrlChange((/**
         * @param {?} newUrl
         * @param {?} newState
         * @return {?}
         */
        (newUrl, newState) => {
            this.urlChanges.next({ newUrl, newState });
        }));
        if (isPromise($injector)) {
            $injector.then((/**
             * @param {?} $i
             * @return {?}
             */
            $i => this.initialize($i)));
        }
        else {
            this.initialize($injector);
        }
    }
    /**
     * @private
     * @param {?} $injector
     * @return {?}
     */
    initialize($injector) {
        /** @type {?} */
        const $rootScope = $injector.get('$rootScope');
        /** @type {?} */
        const $rootElement = $injector.get('$rootElement');
        $rootElement.on('click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.which === 2 ||
                event.button === 2) {
                return;
            }
            /** @type {?} */
            let elm = event.target;
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
            /** @type {?} */
            const absHref = elm.href;
            /** @type {?} */
            const relHref = elm.getAttribute('href');
            // Ignore when url is started with javascript: or mailto:
            if (IGNORE_URI_REGEXP.test(absHref)) {
                return;
            }
            if (absHref && !elm.getAttribute('target') && !event.isDefaultPrevented()) {
                if (this.$$parseLinkUrl(absHref, relHref)) {
                    // We do a preventDefault for all urls that are part of the AngularJS application,
                    // in html5mode and also without, so that we are able to abort navigation without
                    // getting double entries in the location history.
                    event.preventDefault();
                    // update location manually
                    if (this.absUrl() !== this.browserUrl()) {
                        $rootScope.$apply();
                    }
                }
            }
        }));
        this.urlChanges.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ newUrl, newState }) => {
            /** @type {?} */
            const oldUrl = this.absUrl();
            /** @type {?} */
            const oldState = this.$$state;
            this.$$parse(newUrl);
            newUrl = this.absUrl();
            this.$$state = newState;
            /** @type {?} */
            const defaultPrevented = $rootScope.$broadcast('$locationChangeStart', newUrl, oldUrl, newState, oldState)
                .defaultPrevented;
            // if the location was changed by a `$locationChangeStart` handler then stop
            // processing this location change
            if (this.absUrl() !== newUrl)
                return;
            // If default was prevented, set back to old state. This is the state that was locally
            // cached in the $location service.
            if (defaultPrevented) {
                this.$$parse(oldUrl);
                this.state(oldState);
                this.setBrowserUrlWithFallback(oldUrl, false, oldState);
                this.$$notifyChangeListeners(this.url(), this.$$state, oldUrl, oldState);
            }
            else {
                this.initalizing = false;
                $rootScope.$broadcast('$locationChangeSuccess', newUrl, oldUrl, newState, oldState);
                this.resetBrowserUpdate();
            }
            if (!$rootScope.$$phase) {
                $rootScope.$digest();
            }
        }));
        // update browser
        $rootScope.$watch((/**
         * @return {?}
         */
        () => {
            if (this.initalizing || this.updateBrowser) {
                this.updateBrowser = false;
                /** @type {?} */
                const oldUrl = this.browserUrl();
                /** @type {?} */
                const newUrl = this.absUrl();
                /** @type {?} */
                const oldState = this.browserState();
                /** @type {?} */
                let currentReplace = this.$$replace;
                /** @type {?} */
                const urlOrStateChanged = !this.urlCodec.areEqual(oldUrl, newUrl) || oldState !== this.$$state;
                // Fire location changes one time to on initialization. This must be done on the
                // next tick (thus inside $evalAsync()) in order for listeners to be registered
                // before the event fires. Mimicing behavior from $locationWatch:
                // https://github.com/angular/angular.js/blob/master/src/ng/location.js#L983
                if (this.initalizing || urlOrStateChanged) {
                    this.initalizing = false;
                    $rootScope.$evalAsync((/**
                     * @return {?}
                     */
                    () => {
                        // Get the new URL again since it could have changed due to async update
                        /** @type {?} */
                        const newUrl = this.absUrl();
                        /** @type {?} */
                        const defaultPrevented = $rootScope
                            .$broadcast('$locationChangeStart', newUrl, oldUrl, this.$$state, oldState)
                            .defaultPrevented;
                        // if the location was changed by a `$locationChangeStart` handler then stop
                        // processing this location change
                        if (this.absUrl() !== newUrl)
                            return;
                        if (defaultPrevented) {
                            this.$$parse(oldUrl);
                            this.$$state = oldState;
                        }
                        else {
                            // This block doesn't run when initalizing because it's going to perform the update to
                            // the URL which shouldn't be needed when initalizing.
                            if (urlOrStateChanged) {
                                this.setBrowserUrlWithFallback(newUrl, currentReplace, oldState === this.$$state ? null : this.$$state);
                                this.$$replace = false;
                            }
                            $rootScope.$broadcast('$locationChangeSuccess', newUrl, oldUrl, this.$$state, oldState);
                            if (urlOrStateChanged) {
                                this.$$notifyChangeListeners(this.url(), this.$$state, oldUrl, oldState);
                            }
                        }
                    }));
                }
            }
            this.$$replace = false;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    resetBrowserUpdate() {
        this.$$replace = false;
        this.$$state = this.browserState();
        this.updateBrowser = false;
        this.lastBrowserUrl = this.browserUrl();
    }
    /**
     * @private
     * @param {?=} url
     * @param {?=} replace
     * @param {?=} state
     * @return {?}
     */
    browserUrl(url, replace, state) {
        // In modern browsers `history.state` is `null` by default; treating it separately
        // from `undefined` would cause `$browser.url('/foo')` to change `history.state`
        // to undefined via `pushState`. Instead, let's change `undefined` to `null` here.
        if (typeof state === 'undefined') {
            state = null;
        }
        // setter
        if (url) {
            /** @type {?} */
            let sameState = this.lastHistoryState === state;
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
    }
    /**
     * @private
     * @return {?}
     */
    cacheState() {
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
    }
    /**
     * This function emulates the $browser.state() function from AngularJS. It will cause
     * history.state to be cached unless changed with deep equality check.
     * @private
     * @return {?}
     */
    browserState() {
        return this.cachedState;
    }
    /**
     * @private
     * @param {?} base
     * @param {?} url
     * @return {?}
     */
    stripBaseUrl(base, url) {
        if (url.startsWith(base)) {
            return url.substr(base.length);
        }
        return undefined;
    }
    /**
     * @private
     * @return {?}
     */
    getServerBase() {
        const { protocol, hostname, port } = this.platformLocation;
        /** @type {?} */
        const baseHref = this.locationStrategy.getBaseHref();
        /** @type {?} */
        let url = `${protocol}//${hostname}${port ? ':' + port : ''}${baseHref || '/'}`;
        return url.endsWith('/') ? url : url + '/';
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    parseAppUrl(url) {
        if (DOUBLE_SLASH_REGEX.test(url)) {
            throw new Error(`Bad Path - URL cannot start with double slashes: ${url}`);
        }
        /** @type {?} */
        let prefixed = (url.charAt(0) !== '/');
        if (prefixed) {
            url = '/' + url;
        }
        /** @type {?} */
        let match = this.urlCodec.parse(url, this.getServerBase());
        if (typeof match === 'string') {
            throw new Error(`Bad URL - Cannot parse URL: ${url}`);
        }
        /** @type {?} */
        let path = prefixed && match.pathname.charAt(0) === '/' ? match.pathname.substring(1) : match.pathname;
        this.$$path = this.urlCodec.decodePath(path);
        this.$$search = this.urlCodec.decodeSearch(match.search);
        this.$$hash = this.urlCodec.decodeHash(match.hash);
        // make sure path starts with '/';
        if (this.$$path && this.$$path.charAt(0) !== '/') {
            this.$$path = '/' + this.$$path;
        }
    }
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
     * @param {?} fn The callback function that is triggered for the listener when the URL changes.
     * @param {?=} err The callback function that is triggered when an error occurs.
     * @return {?}
     */
    onChange(fn, err = (/**
     * @param {?} e
     * @return {?}
     */
    (e) => { })) {
        this.$$changeListeners.push([fn, err]);
    }
    /**
     * \@internal
     * @param {?=} url
     * @param {?=} state
     * @param {?=} oldUrl
     * @param {?=} oldState
     * @return {?}
     */
    $$notifyChangeListeners(url = '', state, oldUrl = '', oldState) {
        this.$$changeListeners.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ([fn, err]) => {
            try {
                fn(url, state, oldUrl, oldState);
            }
            catch (e) {
                err(e);
            }
        }));
    }
    /**
     * Parses the provided URL, and sets the current URL to the parsed result.
     *
     * @param {?} url The URL string.
     * @return {?}
     */
    $$parse(url) {
        /** @type {?} */
        let pathUrl;
        if (url.startsWith('/')) {
            pathUrl = url;
        }
        else {
            // Remove protocol & hostname if URL starts with it
            pathUrl = this.stripBaseUrl(this.getServerBase(), url);
        }
        if (typeof pathUrl === 'undefined') {
            throw new Error(`Invalid url "${url}", missing path prefix "${this.getServerBase()}".`);
        }
        this.parseAppUrl(pathUrl);
        if (!this.$$path) {
            this.$$path = '/';
        }
        this.composeUrls();
    }
    /**
     * Parses the provided URL and its relative URL.
     *
     * @param {?} url The full URL string.
     * @param {?=} relHref A URL string relative to the full URL string.
     * @return {?}
     */
    $$parseLinkUrl(url, relHref) {
        // When relHref is passed, it should be a hash and is handled separately
        if (relHref && relHref[0] === '#') {
            this.hash(relHref.slice(1));
            return true;
        }
        /** @type {?} */
        let rewrittenUrl;
        /** @type {?} */
        let appUrl = this.stripBaseUrl(this.getServerBase(), url);
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
    }
    /**
     * @private
     * @param {?} url
     * @param {?} replace
     * @param {?} state
     * @return {?}
     */
    setBrowserUrlWithFallback(url, replace, state) {
        /** @type {?} */
        const oldUrl = this.url();
        /** @type {?} */
        const oldState = this.$$state;
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
    }
    /**
     * @private
     * @return {?}
     */
    composeUrls() {
        this.$$url = this.urlCodec.normalize(this.$$path, this.$$search, this.$$hash);
        this.$$absUrl = this.getServerBase() + this.$$url.substr(1); // remove '/' from front of URL
        this.updateBrowser = true;
    }
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
     * @return {?}
     */
    absUrl() {
        return this.$$absUrl;
    }
    /**
     * @param {?=} url
     * @return {?}
     */
    url(url) {
        if (typeof url === 'string') {
            if (!url.length) {
                url = '/';
            }
            /** @type {?} */
            const match = PATH_MATCH.exec(url);
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
    }
    /**
     * Retrieves the protocol of the current URL.
     *
     * ```js
     * // given URL http://example.com/#/some/path?foo=bar&baz=xoxo
     * let protocol = $location.protocol();
     * // => "http"
     * ```
     * @return {?}
     */
    protocol() {
        return this.$$protocol;
    }
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
     * // given URL http://user:password\@example.com:8080/#/some/path?foo=bar&baz=xoxo
     * host = $location.host();
     * // => "example.com"
     * host = location.host;
     * // => "example.com:8080"
     * ```
     * @return {?}
     */
    host() {
        return this.$$host;
    }
    /**
     * Retrieves the port of the current URL.
     *
     * ```js
     * // given URL http://example.com/#/some/path?foo=bar&baz=xoxo
     * let port = $location.port();
     * // => 80
     * ```
     * @return {?}
     */
    port() {
        return this.$$port;
    }
    /**
     * @param {?=} path
     * @return {?}
     */
    path(path) {
        if (typeof path === 'undefined') {
            return this.$$path;
        }
        // null path converts to empty string. Prepend with "/" if needed.
        path = path !== null ? path.toString() : '';
        path = path.charAt(0) === '/' ? path : '/' + path;
        this.$$path = path;
        this.composeUrls();
        return this;
    }
    /**
     * @param {?=} search
     * @param {?=} paramValue
     * @return {?}
     */
    search(search, paramValue) {
        switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (typeof search === 'string' || typeof search === 'number') {
                    this.$$search = this.urlCodec.decodeSearch(search.toString());
                }
                else if (typeof search === 'object' && search !== null) {
                    // Copy the object so it's never mutated
                    search = Object.assign({}, search);
                    // remove object undefined or null properties
                    for (const key in search) {
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
                    /** @type {?} */
                    const currentSearch = this.search();
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
    }
    /**
     * @param {?=} hash
     * @return {?}
     */
    hash(hash) {
        if (typeof hash === 'undefined') {
            return this.$$hash;
        }
        this.$$hash = hash !== null ? hash.toString() : '';
        this.composeUrls();
        return this;
    }
    /**
     * Changes to `$location` during the current `$digest` will replace the current
     * history record, instead of adding a new one.
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    replace() {
        (/** @type {?} */ (this)).$$replace = true;
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?=} state
     * @return {?}
     */
    state(state) {
        if (typeof state === 'undefined') {
            return this.$$state;
        }
        this.$$state = state;
        return this;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.initalizing;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.updateBrowser;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$absUrl;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$url;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$protocol;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$host;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$port;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$replace;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$path;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$search;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$hash;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$state;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.$$changeListeners;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.cachedState;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.urlChanges;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.lastHistoryState;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.lastBrowserUrl;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.lastCachedState;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.location;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.platformLocation;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.urlCodec;
    /**
     * @type {?}
     * @private
     */
    $locationShim.prototype.locationStrategy;
}
/**
 * The factory function used to create an instance of the `$locationShim` in Angular,
 * and provides an API-compatiable `$locationProvider` for AngularJS.
 *
 * \@publicApi
 */
export class $locationShimProvider {
    /**
     * @param {?} ngUpgrade
     * @param {?} location
     * @param {?} platformLocation
     * @param {?} urlCodec
     * @param {?} locationStrategy
     */
    constructor(ngUpgrade, location, platformLocation, urlCodec, locationStrategy) {
        this.ngUpgrade = ngUpgrade;
        this.location = location;
        this.platformLocation = platformLocation;
        this.urlCodec = urlCodec;
        this.locationStrategy = locationStrategy;
    }
    /**
     * Factory method that returns an instance of the $locationShim
     * @return {?}
     */
    $get() {
        return new $locationShim(this.ngUpgrade.$injector, this.location, this.platformLocation, this.urlCodec, this.locationStrategy);
    }
    /**
     * Stub method used to keep API compatible with AngularJS. This setting is configured through
     * the LocationUpgradeModule's `config` method in your Angular app.
     * @param {?=} prefix
     * @return {?}
     */
    hashPrefix(prefix) {
        throw new Error('Configure LocationUpgrade through LocationUpgradeModule.config method.');
    }
    /**
     * Stub method used to keep API compatible with AngularJS. This setting is configured through
     * the LocationUpgradeModule's `config` method in your Angular app.
     * @param {?=} mode
     * @return {?}
     */
    html5Mode(mode) {
        throw new Error('Configure LocationUpgrade through LocationUpgradeModule.config method.');
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    $locationShimProvider.prototype.ngUpgrade;
    /**
     * @type {?}
     * @private
     */
    $locationShimProvider.prototype.location;
    /**
     * @type {?}
     * @private
     */
    $locationShimProvider.prototype.platformLocation;
    /**
     * @type {?}
     * @private
     */
    $locationShimProvider.prototype.urlCodec;
    /**
     * @type {?}
     * @private
     */
    $locationShimProvider.prototype.locationStrategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25fc2hpbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi91cGdyYWRlL3NyYy9sb2NhdGlvbl9zaGltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHbkMsT0FBTyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLE1BQU0sU0FBUyxDQUFDOztNQUVqRCxVQUFVLEdBQUcsZ0NBQWdDOztNQUM3QyxrQkFBa0IsR0FBRyxlQUFlOztNQUNwQyxpQkFBaUIsR0FBRywyQkFBMkI7O01BQy9DLGFBQWEsR0FBNEI7SUFDN0MsT0FBTyxFQUFFLEVBQUU7SUFDWCxRQUFRLEVBQUUsR0FBRztJQUNiLE1BQU0sRUFBRSxFQUFFO0NBQ1g7Ozs7Ozs7OztBQVVELE1BQU0sT0FBTyxhQUFhOzs7Ozs7OztJQXVCeEIsWUFDSSxTQUFjLEVBQVUsUUFBa0IsRUFBVSxnQkFBa0MsRUFDOUUsUUFBa0IsRUFBVSxnQkFBa0M7UUFEOUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDOUUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF4QmxFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUVuQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFFcEIsc0JBQWlCLEdBSW5CLEVB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UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzlELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUtsRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLGFBQWEsQ0FDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFDN0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7OztJQU1ELFVBQVUsQ0FBQyxNQUFlO1FBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7Ozs7O0lBTUQsU0FBUyxDQUFDLElBQVU7UUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Q0FDRjs7Ozs7O0lBNUJLLDBDQUFnQzs7Ozs7SUFBRSx5Q0FBMEI7Ozs7O0lBQzVELGlEQUEwQzs7Ozs7SUFBRSx5Q0FBMEI7Ozs7O0lBQ3RFLGlEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSwgUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VXBncmFkZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xuaW1wb3J0IHtSZXBsYXlTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtVcmxDb2RlY30gZnJvbSAnLi9wYXJhbXMnO1xuaW1wb3J0IHtkZWVwRXF1YWwsIGlzQW5jaG9yLCBpc1Byb21pc2V9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBQQVRIX01BVENIID0gL14oW14/I10qKShcXD8oW14jXSopKT8oIyguKikpPyQvO1xuY29uc3QgRE9VQkxFX1NMQVNIX1JFR0VYID0gL15cXHMqW1xcXFwvXXsyLH0vO1xuY29uc3QgSUdOT1JFX1VSSV9SRUdFWFAgPSAvXlxccyooamF2YXNjcmlwdHxtYWlsdG8pOi9pO1xuY29uc3QgREVGQVVMVF9QT1JUUzoge1trZXk6IHN0cmluZ106IG51bWJlcn0gPSB7XG4gICdodHRwOic6IDgwLFxuICAnaHR0cHM6JzogNDQzLFxuICAnZnRwOic6IDIxXG59O1xuXG4vKipcbiAqIExvY2F0aW9uIHNlcnZpY2UgdGhhdCBwcm92aWRlcyBhIGRyb3AtaW4gcmVwbGFjZW1lbnQgZm9yIHRoZSAkbG9jYXRpb24gc2VydmljZVxuICogcHJvdmlkZWQgaW4gQW5ndWxhckpTLlxuICpcbiAqIEBzZWUgW1VzaW5nIHRoZSBBbmd1bGFyIFVuaWZpZWQgTG9jYXRpb24gU2VydmljZV0oZ3VpZGUvdXBncmFkZSN1c2luZy10aGUtdW5pZmllZC1hbmd1bGFyLWxvY2F0aW9uLXNlcnZpY2UpXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgJGxvY2F0aW9uU2hpbSB7XG4gIHByaXZhdGUgaW5pdGFsaXppbmcgPSB0cnVlO1xuICBwcml2YXRlIHVwZGF0ZUJyb3dzZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSAkJGFic1VybDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgJCR1cmw6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlICQkcHJvdG9jb2w6IHN0cmluZztcbiAgcHJpdmF0ZSAkJGhvc3Q6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlICQkcG9ydDogbnVtYmVyfG51bGw7XG4gIHByaXZhdGUgJCRyZXBsYWNlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgJCRwYXRoOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSAkJHNlYXJjaDogYW55ID0gJyc7XG4gIHByaXZhdGUgJCRoYXNoOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSAkJHN0YXRlOiB1bmtub3duO1xuICBwcml2YXRlICQkY2hhbmdlTGlzdGVuZXJzOiBbXG4gICAgKCh1cmw6IHN0cmluZywgc3RhdGU6IHVua25vd24sIG9sZFVybDogc3RyaW5nLCBvbGRTdGF0ZTogdW5rbm93biwgZXJyPzogKGU6IEVycm9yKSA9PiB2b2lkKSA9PlxuICAgICAgICAgdm9pZCksXG4gICAgKGU6IEVycm9yKSA9PiB2b2lkXG4gIF1bXSA9IFtdO1xuXG4gIHByaXZhdGUgY2FjaGVkU3RhdGU6IHVua25vd24gPSBudWxsO1xuXG4gIHByaXZhdGUgdXJsQ2hhbmdlcyA9IG5ldyBSZXBsYXlTdWJqZWN0PHtuZXdVcmw6IHN0cmluZywgbmV3U3RhdGU6IHVua25vd259PigxKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgICRpbmplY3RvcjogYW55LCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSBwbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uLFxuICAgICAgcHJpdmF0ZSB1cmxDb2RlYzogVXJsQ29kZWMsIHByaXZhdGUgbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSkge1xuICAgIGNvbnN0IGluaXRpYWxVcmwgPSB0aGlzLmJyb3dzZXJVcmwoKTtcblxuICAgIGxldCBwYXJzZWRVcmwgPSB0aGlzLnVybENvZGVjLnBhcnNlKGluaXRpYWxVcmwpO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJzZWRVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyAnSW52YWxpZCBVUkwnO1xuICAgIH1cblxuICAgIHRoaXMuJCRwcm90b2NvbCA9IHBhcnNlZFVybC5wcm90b2NvbDtcbiAgICB0aGlzLiQkaG9zdCA9IHBhcnNlZFVybC5ob3N0bmFtZTtcbiAgICB0aGlzLiQkcG9ydCA9IHBhcnNlSW50KHBhcnNlZFVybC5wb3J0KSB8fCBERUZBVUxUX1BPUlRTW3BhcnNlZFVybC5wcm90b2NvbF0gfHwgbnVsbDtcblxuICAgIHRoaXMuJCRwYXJzZUxpbmtVcmwoaW5pdGlhbFVybCwgaW5pdGlhbFVybCk7XG4gICAgdGhpcy5jYWNoZVN0YXRlKCk7XG4gICAgdGhpcy4kJHN0YXRlID0gdGhpcy5icm93c2VyU3RhdGUoKTtcblxuICAgIHRoaXMubG9jYXRpb24ub25VcmxDaGFuZ2UoKG5ld1VybCwgbmV3U3RhdGUpID0+IHtcbiAgICAgIHRoaXMudXJsQ2hhbmdlcy5uZXh0KHtuZXdVcmwsIG5ld1N0YXRlfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNQcm9taXNlKCRpbmplY3RvcikpIHtcbiAgICAgICRpbmplY3Rvci50aGVuKCRpID0+IHRoaXMuaW5pdGlhbGl6ZSgkaSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUoJGluamVjdG9yKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUoJGluamVjdG9yOiBhbnkpIHtcbiAgICBjb25zdCAkcm9vdFNjb3BlID0gJGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xuICAgIGNvbnN0ICRyb290RWxlbWVudCA9ICRpbmplY3Rvci5nZXQoJyRyb290RWxlbWVudCcpO1xuXG4gICAgJHJvb3RFbGVtZW50Lm9uKCdjbGljaycsIChldmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LndoaWNoID09PSAyIHx8XG4gICAgICAgICAgZXZlbnQuYnV0dG9uID09PSAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVsbTogKE5vZGUmUGFyZW50Tm9kZSl8bnVsbCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgLy8gdHJhdmVyc2UgdGhlIERPTSB1cCB0byBmaW5kIGZpcnN0IEEgdGFnXG4gICAgICB3aGlsZSAoZWxtICYmIGVsbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnYScpIHtcbiAgICAgICAgLy8gaWdub3JlIHJld3JpdGluZyBpZiBubyBBIHRhZyAocmVhY2hlZCByb290IGVsZW1lbnQsIG9yIG5vIHBhcmVudCAtIHJlbW92ZWQgZnJvbSBkb2N1bWVudClcbiAgICAgICAgaWYgKGVsbSA9PT0gJHJvb3RFbGVtZW50WzBdIHx8ICEoZWxtID0gZWxtLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNBbmNob3IoZWxtKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFic0hyZWYgPSBlbG0uaHJlZjtcbiAgICAgIGNvbnN0IHJlbEhyZWYgPSBlbG0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgIC8vIElnbm9yZSB3aGVuIHVybCBpcyBzdGFydGVkIHdpdGggamF2YXNjcmlwdDogb3IgbWFpbHRvOlxuICAgICAgaWYgKElHTk9SRV9VUklfUkVHRVhQLnRlc3QoYWJzSHJlZikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWJzSHJlZiAmJiAhZWxtLmdldEF0dHJpYnV0ZSgndGFyZ2V0JykgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIGlmICh0aGlzLiQkcGFyc2VMaW5rVXJsKGFic0hyZWYsIHJlbEhyZWYpKSB7XG4gICAgICAgICAgLy8gV2UgZG8gYSBwcmV2ZW50RGVmYXVsdCBmb3IgYWxsIHVybHMgdGhhdCBhcmUgcGFydCBvZiB0aGUgQW5ndWxhckpTIGFwcGxpY2F0aW9uLFxuICAgICAgICAgIC8vIGluIGh0bWw1bW9kZSBhbmQgYWxzbyB3aXRob3V0LCBzbyB0aGF0IHdlIGFyZSBhYmxlIHRvIGFib3J0IG5hdmlnYXRpb24gd2l0aG91dFxuICAgICAgICAgIC8vIGdldHRpbmcgZG91YmxlIGVudHJpZXMgaW4gdGhlIGxvY2F0aW9uIGhpc3RvcnkuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAvLyB1cGRhdGUgbG9jYXRpb24gbWFudWFsbHlcbiAgICAgICAgICBpZiAodGhpcy5hYnNVcmwoKSAhPT0gdGhpcy5icm93c2VyVXJsKCkpIHtcbiAgICAgICAgICAgICRyb290U2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnVybENoYW5nZXMuc3Vic2NyaWJlKCh7bmV3VXJsLCBuZXdTdGF0ZX0pID0+IHtcbiAgICAgIGNvbnN0IG9sZFVybCA9IHRoaXMuYWJzVXJsKCk7XG4gICAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuJCRzdGF0ZTtcbiAgICAgIHRoaXMuJCRwYXJzZShuZXdVcmwpO1xuICAgICAgbmV3VXJsID0gdGhpcy5hYnNVcmwoKTtcbiAgICAgIHRoaXMuJCRzdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgY29uc3QgZGVmYXVsdFByZXZlbnRlZCA9XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCckbG9jYXRpb25DaGFuZ2VTdGFydCcsIG5ld1VybCwgb2xkVXJsLCBuZXdTdGF0ZSwgb2xkU3RhdGUpXG4gICAgICAgICAgICAgIC5kZWZhdWx0UHJldmVudGVkO1xuXG4gICAgICAvLyBpZiB0aGUgbG9jYXRpb24gd2FzIGNoYW5nZWQgYnkgYSBgJGxvY2F0aW9uQ2hhbmdlU3RhcnRgIGhhbmRsZXIgdGhlbiBzdG9wXG4gICAgICAvLyBwcm9jZXNzaW5nIHRoaXMgbG9jYXRpb24gY2hhbmdlXG4gICAgICBpZiAodGhpcy5hYnNVcmwoKSAhPT0gbmV3VXJsKSByZXR1cm47XG5cbiAgICAgIC8vIElmIGRlZmF1bHQgd2FzIHByZXZlbnRlZCwgc2V0IGJhY2sgdG8gb2xkIHN0YXRlLiBUaGlzIGlzIHRoZSBzdGF0ZSB0aGF0IHdhcyBsb2NhbGx5XG4gICAgICAvLyBjYWNoZWQgaW4gdGhlICRsb2NhdGlvbiBzZXJ2aWNlLlxuICAgICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy4kJHBhcnNlKG9sZFVybCk7XG4gICAgICAgIHRoaXMuc3RhdGUob2xkU3RhdGUpO1xuICAgICAgICB0aGlzLnNldEJyb3dzZXJVcmxXaXRoRmFsbGJhY2sob2xkVXJsLCBmYWxzZSwgb2xkU3RhdGUpO1xuICAgICAgICB0aGlzLiQkbm90aWZ5Q2hhbmdlTGlzdGVuZXJzKHRoaXMudXJsKCksIHRoaXMuJCRzdGF0ZSwgb2xkVXJsLCBvbGRTdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluaXRhbGl6aW5nID0gZmFsc2U7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIG5ld1VybCwgb2xkVXJsLCBuZXdTdGF0ZSwgb2xkU3RhdGUpO1xuICAgICAgICB0aGlzLnJlc2V0QnJvd3NlclVwZGF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKCEkcm9vdFNjb3BlLiQkcGhhc2UpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kZGlnZXN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgYnJvd3NlclxuICAgICRyb290U2NvcGUuJHdhdGNoKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmluaXRhbGl6aW5nIHx8IHRoaXMudXBkYXRlQnJvd3Nlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZUJyb3dzZXIgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBvbGRVcmwgPSB0aGlzLmJyb3dzZXJVcmwoKTtcbiAgICAgICAgY29uc3QgbmV3VXJsID0gdGhpcy5hYnNVcmwoKTtcbiAgICAgICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLmJyb3dzZXJTdGF0ZSgpO1xuICAgICAgICBsZXQgY3VycmVudFJlcGxhY2UgPSB0aGlzLiQkcmVwbGFjZTtcblxuICAgICAgICBjb25zdCB1cmxPclN0YXRlQ2hhbmdlZCA9XG4gICAgICAgICAgICAhdGhpcy51cmxDb2RlYy5hcmVFcXVhbChvbGRVcmwsIG5ld1VybCkgfHwgb2xkU3RhdGUgIT09IHRoaXMuJCRzdGF0ZTtcblxuICAgICAgICAvLyBGaXJlIGxvY2F0aW9uIGNoYW5nZXMgb25lIHRpbWUgdG8gb24gaW5pdGlhbGl6YXRpb24uIFRoaXMgbXVzdCBiZSBkb25lIG9uIHRoZVxuICAgICAgICAvLyBuZXh0IHRpY2sgKHRodXMgaW5zaWRlICRldmFsQXN5bmMoKSkgaW4gb3JkZXIgZm9yIGxpc3RlbmVycyB0byBiZSByZWdpc3RlcmVkXG4gICAgICAgIC8vIGJlZm9yZSB0aGUgZXZlbnQgZmlyZXMuIE1pbWljaW5nIGJlaGF2aW9yIGZyb20gJGxvY2F0aW9uV2F0Y2g6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9tYXN0ZXIvc3JjL25nL2xvY2F0aW9uLmpzI0w5ODNcbiAgICAgICAgaWYgKHRoaXMuaW5pdGFsaXppbmcgfHwgdXJsT3JTdGF0ZUNoYW5nZWQpIHtcbiAgICAgICAgICB0aGlzLmluaXRhbGl6aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAkcm9vdFNjb3BlLiRldmFsQXN5bmMoKCkgPT4ge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBuZXcgVVJMIGFnYWluIHNpbmNlIGl0IGNvdWxkIGhhdmUgY2hhbmdlZCBkdWUgdG8gYXN5bmMgdXBkYXRlXG4gICAgICAgICAgICBjb25zdCBuZXdVcmwgPSB0aGlzLmFic1VybCgpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByZXZlbnRlZCA9XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZVxuICAgICAgICAgICAgICAgICAgICAuJGJyb2FkY2FzdCgnJGxvY2F0aW9uQ2hhbmdlU3RhcnQnLCBuZXdVcmwsIG9sZFVybCwgdGhpcy4kJHN0YXRlLCBvbGRTdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgLmRlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhdGlvbiB3YXMgY2hhbmdlZCBieSBhIGAkbG9jYXRpb25DaGFuZ2VTdGFydGAgaGFuZGxlciB0aGVuIHN0b3BcbiAgICAgICAgICAgIC8vIHByb2Nlc3NpbmcgdGhpcyBsb2NhdGlvbiBjaGFuZ2VcbiAgICAgICAgICAgIGlmICh0aGlzLmFic1VybCgpICE9PSBuZXdVcmwpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy4kJHBhcnNlKG9sZFVybCk7XG4gICAgICAgICAgICAgIHRoaXMuJCRzdGF0ZSA9IG9sZFN0YXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBibG9jayBkb2Vzbid0IHJ1biB3aGVuIGluaXRhbGl6aW5nIGJlY2F1c2UgaXQncyBnb2luZyB0byBwZXJmb3JtIHRoZSB1cGRhdGUgdG9cbiAgICAgICAgICAgICAgLy8gdGhlIFVSTCB3aGljaCBzaG91bGRuJ3QgYmUgbmVlZGVkIHdoZW4gaW5pdGFsaXppbmcuXG4gICAgICAgICAgICAgIGlmICh1cmxPclN0YXRlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnJvd3NlclVybFdpdGhGYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgICAgbmV3VXJsLCBjdXJyZW50UmVwbGFjZSwgb2xkU3RhdGUgPT09IHRoaXMuJCRzdGF0ZSA/IG51bGwgOiB0aGlzLiQkc3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuJCRyZXBsYWNlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KFxuICAgICAgICAgICAgICAgICAgJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBuZXdVcmwsIG9sZFVybCwgdGhpcy4kJHN0YXRlLCBvbGRTdGF0ZSk7XG4gICAgICAgICAgICAgIGlmICh1cmxPclN0YXRlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCRub3RpZnlDaGFuZ2VMaXN0ZW5lcnModGhpcy51cmwoKSwgdGhpcy4kJHN0YXRlLCBvbGRVcmwsIG9sZFN0YXRlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiQkcmVwbGFjZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEJyb3dzZXJVcGRhdGUoKSB7XG4gICAgdGhpcy4kJHJlcGxhY2UgPSBmYWxzZTtcbiAgICB0aGlzLiQkc3RhdGUgPSB0aGlzLmJyb3dzZXJTdGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlQnJvd3NlciA9IGZhbHNlO1xuICAgIHRoaXMubGFzdEJyb3dzZXJVcmwgPSB0aGlzLmJyb3dzZXJVcmwoKTtcbiAgfVxuXG4gIHByaXZhdGUgbGFzdEhpc3RvcnlTdGF0ZTogdW5rbm93bjtcbiAgcHJpdmF0ZSBsYXN0QnJvd3NlclVybDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgYnJvd3NlclVybCgpOiBzdHJpbmc7XG4gIHByaXZhdGUgYnJvd3NlclVybCh1cmw6IHN0cmluZywgcmVwbGFjZT86IGJvb2xlYW4sIHN0YXRlPzogdW5rbm93bik6IHRoaXM7XG4gIHByaXZhdGUgYnJvd3NlclVybCh1cmw/OiBzdHJpbmcsIHJlcGxhY2U/OiBib29sZWFuLCBzdGF0ZT86IHVua25vd24pIHtcbiAgICAvLyBJbiBtb2Rlcm4gYnJvd3NlcnMgYGhpc3Rvcnkuc3RhdGVgIGlzIGBudWxsYCBieSBkZWZhdWx0OyB0cmVhdGluZyBpdCBzZXBhcmF0ZWx5XG4gICAgLy8gZnJvbSBgdW5kZWZpbmVkYCB3b3VsZCBjYXVzZSBgJGJyb3dzZXIudXJsKCcvZm9vJylgIHRvIGNoYW5nZSBgaGlzdG9yeS5zdGF0ZWBcbiAgICAvLyB0byB1bmRlZmluZWQgdmlhIGBwdXNoU3RhdGVgLiBJbnN0ZWFkLCBsZXQncyBjaGFuZ2UgYHVuZGVmaW5lZGAgdG8gYG51bGxgIGhlcmUuXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN0YXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzZXR0ZXJcbiAgICBpZiAodXJsKSB7XG4gICAgICBsZXQgc2FtZVN0YXRlID0gdGhpcy5sYXN0SGlzdG9yeVN0YXRlID09PSBzdGF0ZTtcblxuICAgICAgLy8gTm9ybWFsaXplIHRoZSBpbnB1dHRlZCBVUkxcbiAgICAgIHVybCA9IHRoaXMudXJsQ29kZWMucGFyc2UodXJsKS5ocmVmO1xuXG4gICAgICAvLyBEb24ndCBjaGFuZ2UgYW55dGhpbmcgaWYgcHJldmlvdXMgYW5kIGN1cnJlbnQgVVJMcyBhbmQgc3RhdGVzIG1hdGNoLlxuICAgICAgaWYgKHRoaXMubGFzdEJyb3dzZXJVcmwgPT09IHVybCAmJiBzYW1lU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RCcm93c2VyVXJsID0gdXJsO1xuICAgICAgdGhpcy5sYXN0SGlzdG9yeVN0YXRlID0gc3RhdGU7XG5cbiAgICAgIC8vIFJlbW92ZSBzZXJ2ZXIgYmFzZSBmcm9tIFVSTCBhcyB0aGUgQW5ndWxhciBBUElzIGZvciB1cGRhdGluZyBVUkwgcmVxdWlyZVxuICAgICAgLy8gaXQgdG8gYmUgdGhlIHBhdGgrLlxuICAgICAgdXJsID0gdGhpcy5zdHJpcEJhc2VVcmwodGhpcy5nZXRTZXJ2ZXJCYXNlKCksIHVybCkgfHwgdXJsO1xuXG4gICAgICAvLyBTZXQgdGhlIFVSTFxuICAgICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvblN0cmF0ZWd5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgJycsIHVybCwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvblN0cmF0ZWd5LnB1c2hTdGF0ZShzdGF0ZSwgJycsIHVybCwgJycpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNhY2hlU3RhdGUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAvLyBnZXR0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGxhdGZvcm1Mb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgdmFyaWFibGUgc2hvdWxkIGJlIHVzZWQgKm9ubHkqIGluc2lkZSB0aGUgY2FjaGVTdGF0ZSBmdW5jdGlvbi5cbiAgcHJpdmF0ZSBsYXN0Q2FjaGVkU3RhdGU6IHVua25vd24gPSBudWxsO1xuICBwcml2YXRlIGNhY2hlU3RhdGUoKSB7XG4gICAgLy8gVGhpcyBzaG91bGQgYmUgdGhlIG9ubHkgcGxhY2UgaW4gJGJyb3dzZXIgd2hlcmUgYGhpc3Rvcnkuc3RhdGVgIGlzIHJlYWQuXG4gICAgdGhpcy5jYWNoZWRTdGF0ZSA9IHRoaXMucGxhdGZvcm1Mb2NhdGlvbi5nZXRTdGF0ZSgpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5jYWNoZWRTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2FjaGVkU3RhdGUgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgY2FsbGJhY2tzIGZvIGZpcmUgdHdpY2UgaWYgYm90aCBoYXNoY2hhbmdlICYgcG9wc3RhdGUgd2VyZSBmaXJlZC5cbiAgICBpZiAoZGVlcEVxdWFsKHRoaXMuY2FjaGVkU3RhdGUsIHRoaXMubGFzdENhY2hlZFN0YXRlKSkge1xuICAgICAgdGhpcy5jYWNoZWRTdGF0ZSA9IHRoaXMubGFzdENhY2hlZFN0YXRlO1xuICAgIH1cblxuICAgIHRoaXMubGFzdENhY2hlZFN0YXRlID0gdGhpcy5jYWNoZWRTdGF0ZTtcbiAgICB0aGlzLmxhc3RIaXN0b3J5U3RhdGUgPSB0aGlzLmNhY2hlZFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZW11bGF0ZXMgdGhlICRicm93c2VyLnN0YXRlKCkgZnVuY3Rpb24gZnJvbSBBbmd1bGFySlMuIEl0IHdpbGwgY2F1c2VcbiAgICogaGlzdG9yeS5zdGF0ZSB0byBiZSBjYWNoZWQgdW5sZXNzIGNoYW5nZWQgd2l0aCBkZWVwIGVxdWFsaXR5IGNoZWNrLlxuICAgKi9cbiAgcHJpdmF0ZSBicm93c2VyU3RhdGUoKTogdW5rbm93biB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVkU3RhdGU7XG4gIH1cblxuICBwcml2YXRlIHN0cmlwQmFzZVVybChiYXNlOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKGJhc2UpKSB7XG4gICAgICByZXR1cm4gdXJsLnN1YnN0cihiYXNlLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldFNlcnZlckJhc2UoKSB7XG4gICAgY29uc3Qge3Byb3RvY29sLCBob3N0bmFtZSwgcG9ydH0gPSB0aGlzLnBsYXRmb3JtTG9jYXRpb247XG4gICAgY29uc3QgYmFzZUhyZWYgPSB0aGlzLmxvY2F0aW9uU3RyYXRlZ3kuZ2V0QmFzZUhyZWYoKTtcbiAgICBsZXQgdXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ30ke2Jhc2VIcmVmIHx8ICcvJ31gO1xuICAgIHJldHVybiB1cmwuZW5kc1dpdGgoJy8nKSA/IHVybCA6IHVybCArICcvJztcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VBcHBVcmwodXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoRE9VQkxFX1NMQVNIX1JFR0VYLnRlc3QodXJsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBCYWQgUGF0aCAtIFVSTCBjYW5ub3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlczogJHt1cmx9YCk7XG4gICAgfVxuXG4gICAgbGV0IHByZWZpeGVkID0gKHVybC5jaGFyQXQoMCkgIT09ICcvJyk7XG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICB1cmwgPSAnLycgKyB1cmw7XG4gICAgfVxuICAgIGxldCBtYXRjaCA9IHRoaXMudXJsQ29kZWMucGFyc2UodXJsLCB0aGlzLmdldFNlcnZlckJhc2UoKSk7XG4gICAgaWYgKHR5cGVvZiBtYXRjaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQmFkIFVSTCAtIENhbm5vdCBwYXJzZSBVUkw6ICR7dXJsfWApO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9XG4gICAgICAgIHByZWZpeGVkICYmIG1hdGNoLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nID8gbWF0Y2gucGF0aG5hbWUuc3Vic3RyaW5nKDEpIDogbWF0Y2gucGF0aG5hbWU7XG4gICAgdGhpcy4kJHBhdGggPSB0aGlzLnVybENvZGVjLmRlY29kZVBhdGgocGF0aCk7XG4gICAgdGhpcy4kJHNlYXJjaCA9IHRoaXMudXJsQ29kZWMuZGVjb2RlU2VhcmNoKG1hdGNoLnNlYXJjaCk7XG4gICAgdGhpcy4kJGhhc2ggPSB0aGlzLnVybENvZGVjLmRlY29kZUhhc2gobWF0Y2guaGFzaCk7XG5cbiAgICAvLyBtYWtlIHN1cmUgcGF0aCBzdGFydHMgd2l0aCAnLyc7XG4gICAgaWYgKHRoaXMuJCRwYXRoICYmIHRoaXMuJCRwYXRoLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICB0aGlzLiQkcGF0aCA9ICcvJyArIHRoaXMuJCRwYXRoO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgbGlzdGVuZXJzIGZvciBVUkwgY2hhbmdlcy4gVGhpcyBBUEkgaXMgdXNlZCB0byBjYXRjaCB1cGRhdGVzIHBlcmZvcm1lZCBieSB0aGVcbiAgICogQW5ndWxhckpTIGZyYW1ld29yay4gVGhlc2UgY2hhbmdlcyBhcmUgYSBzdWJzZXQgb2YgdGhlIGAkbG9jYXRpb25DaGFuZ2VTdGFydGAgYW5kXG4gICAqIGAkbG9jYXRpb25DaGFuZ2VTdWNjZXNzYCBldmVudHMgd2hpY2ggZmlyZSB3aGVuIEFuZ3VsYXJKUyB1cGRhdGVzIGl0cyBpbnRlcm5hbGx5LXJlZmVyZW5jZWRcbiAgICogdmVyc2lvbiBvZiB0aGUgYnJvd3NlciBVUkwuXG4gICAqXG4gICAqIEl0J3MgcG9zc2libGUgZm9yIGAkbG9jYXRpb25DaGFuZ2VgIGV2ZW50cyB0byBoYXBwZW4sIGJ1dCBmb3IgdGhlIGJyb3dzZXIgVVJMXG4gICAqICh3aW5kb3cubG9jYXRpb24pIHRvIHJlbWFpbiB1bmNoYW5nZWQuIFRoaXMgYG9uQ2hhbmdlYCBjYWxsYmFjayB3aWxsIGZpcmUgb25seSB3aGVuIEFuZ3VsYXJKU1xuICAgKiBhY3R1YWxseSB1cGRhdGVzIHRoZSBicm93c2VyIFVSTCAod2luZG93LmxvY2F0aW9uKS5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIHRyaWdnZXJlZCBmb3IgdGhlIGxpc3RlbmVyIHdoZW4gdGhlIFVSTCBjaGFuZ2VzLlxuICAgKiBAcGFyYW0gZXJyIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIHRyaWdnZXJlZCB3aGVuIGFuIGVycm9yIG9jY3Vycy5cbiAgICovXG4gIG9uQ2hhbmdlKFxuICAgICAgZm46ICh1cmw6IHN0cmluZywgc3RhdGU6IHVua25vd24sIG9sZFVybDogc3RyaW5nLCBvbGRTdGF0ZTogdW5rbm93bikgPT4gdm9pZCxcbiAgICAgIGVycjogKGU6IEVycm9yKSA9PiB2b2lkID0gKGU6IEVycm9yKSA9PiB7fSkge1xuICAgIHRoaXMuJCRjaGFuZ2VMaXN0ZW5lcnMucHVzaChbZm4sIGVycl0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICAkJG5vdGlmeUNoYW5nZUxpc3RlbmVycyhcbiAgICAgIHVybDogc3RyaW5nID0gJycsIHN0YXRlOiB1bmtub3duLCBvbGRVcmw6IHN0cmluZyA9ICcnLCBvbGRTdGF0ZTogdW5rbm93bikge1xuICAgIHRoaXMuJCRjaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaCgoW2ZuLCBlcnJdKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBmbih1cmwsIHN0YXRlLCBvbGRVcmwsIG9sZFN0YXRlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgcHJvdmlkZWQgVVJMLCBhbmQgc2V0cyB0aGUgY3VycmVudCBVUkwgdG8gdGhlIHBhcnNlZCByZXN1bHQuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVGhlIFVSTCBzdHJpbmcuXG4gICAqL1xuICAkJHBhcnNlKHVybDogc3RyaW5nKSB7XG4gICAgbGV0IHBhdGhVcmw6IHN0cmluZ3x1bmRlZmluZWQ7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHBhdGhVcmwgPSB1cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSBwcm90b2NvbCAmIGhvc3RuYW1lIGlmIFVSTCBzdGFydHMgd2l0aCBpdFxuICAgICAgcGF0aFVybCA9IHRoaXMuc3RyaXBCYXNlVXJsKHRoaXMuZ2V0U2VydmVyQmFzZSgpLCB1cmwpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhdGhVcmwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdXJsIFwiJHt1cmx9XCIsIG1pc3NpbmcgcGF0aCBwcmVmaXggXCIke3RoaXMuZ2V0U2VydmVyQmFzZSgpfVwiLmApO1xuICAgIH1cblxuICAgIHRoaXMucGFyc2VBcHBVcmwocGF0aFVybCk7XG5cbiAgICBpZiAoIXRoaXMuJCRwYXRoKSB7XG4gICAgICB0aGlzLiQkcGF0aCA9ICcvJztcbiAgICB9XG4gICAgdGhpcy5jb21wb3NlVXJscygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgcHJvdmlkZWQgVVJMIGFuZCBpdHMgcmVsYXRpdmUgVVJMLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFRoZSBmdWxsIFVSTCBzdHJpbmcuXG4gICAqIEBwYXJhbSByZWxIcmVmIEEgVVJMIHN0cmluZyByZWxhdGl2ZSB0byB0aGUgZnVsbCBVUkwgc3RyaW5nLlxuICAgKi9cbiAgJCRwYXJzZUxpbmtVcmwodXJsOiBzdHJpbmcsIHJlbEhyZWY/OiBzdHJpbmd8bnVsbCk6IGJvb2xlYW4ge1xuICAgIC8vIFdoZW4gcmVsSHJlZiBpcyBwYXNzZWQsIGl0IHNob3VsZCBiZSBhIGhhc2ggYW5kIGlzIGhhbmRsZWQgc2VwYXJhdGVseVxuICAgIGlmIChyZWxIcmVmICYmIHJlbEhyZWZbMF0gPT09ICcjJykge1xuICAgICAgdGhpcy5oYXNoKHJlbEhyZWYuc2xpY2UoMSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGxldCByZXdyaXR0ZW5Vcmw7XG4gICAgbGV0IGFwcFVybCA9IHRoaXMuc3RyaXBCYXNlVXJsKHRoaXMuZ2V0U2VydmVyQmFzZSgpLCB1cmwpO1xuICAgIGlmICh0eXBlb2YgYXBwVXJsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV3cml0dGVuVXJsID0gdGhpcy5nZXRTZXJ2ZXJCYXNlKCkgKyBhcHBVcmw7XG4gICAgfSBlbHNlIGlmICh0aGlzLmdldFNlcnZlckJhc2UoKSA9PT0gdXJsICsgJy8nKSB7XG4gICAgICByZXdyaXR0ZW5VcmwgPSB0aGlzLmdldFNlcnZlckJhc2UoKTtcbiAgICB9XG4gICAgLy8gU2V0IHRoZSBVUkxcbiAgICBpZiAocmV3cml0dGVuVXJsKSB7XG4gICAgICB0aGlzLiQkcGFyc2UocmV3cml0dGVuVXJsKTtcbiAgICB9XG4gICAgcmV0dXJuICEhcmV3cml0dGVuVXJsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRCcm93c2VyVXJsV2l0aEZhbGxiYWNrKHVybDogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuLCBzdGF0ZTogdW5rbm93bikge1xuICAgIGNvbnN0IG9sZFVybCA9IHRoaXMudXJsKCk7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLiQkc3RhdGU7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuYnJvd3NlclVybCh1cmwsIHJlcGxhY2UsIHN0YXRlKTtcblxuICAgICAgLy8gTWFrZSBzdXJlICRsb2NhdGlvbi5zdGF0ZSgpIHJldHVybnMgcmVmZXJlbnRpYWxseSBpZGVudGljYWwgKG5vdCBqdXN0IGRlZXBseSBlcXVhbClcbiAgICAgIC8vIHN0YXRlIG9iamVjdDsgdGhpcyBtYWtlcyBwb3NzaWJsZSBxdWljayBjaGVja2luZyBpZiB0aGUgc3RhdGUgY2hhbmdlZCBpbiB0aGUgZGlnZXN0XG4gICAgICAvLyBsb29wLiBDaGVja2luZyBkZWVwIGVxdWFsaXR5IHdvdWxkIGJlIHRvbyBleHBlbnNpdmUuXG4gICAgICB0aGlzLiQkc3RhdGUgPSB0aGlzLmJyb3dzZXJTdGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFJlc3RvcmUgb2xkIHZhbHVlcyBpZiBwdXNoU3RhdGUgZmFpbHNcbiAgICAgIHRoaXMudXJsKG9sZFVybCk7XG4gICAgICB0aGlzLiQkc3RhdGUgPSBvbGRTdGF0ZTtcblxuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbXBvc2VVcmxzKCkge1xuICAgIHRoaXMuJCR1cmwgPSB0aGlzLnVybENvZGVjLm5vcm1hbGl6ZSh0aGlzLiQkcGF0aCwgdGhpcy4kJHNlYXJjaCwgdGhpcy4kJGhhc2gpO1xuICAgIHRoaXMuJCRhYnNVcmwgPSB0aGlzLmdldFNlcnZlckJhc2UoKSArIHRoaXMuJCR1cmwuc3Vic3RyKDEpOyAgLy8gcmVtb3ZlICcvJyBmcm9tIGZyb250IG9mIFVSTFxuICAgIHRoaXMudXBkYXRlQnJvd3NlciA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBmdWxsIFVSTCByZXByZXNlbnRhdGlvbiB3aXRoIGFsbCBzZWdtZW50cyBlbmNvZGVkIGFjY29yZGluZyB0b1xuICAgKiBydWxlcyBzcGVjaWZpZWQgaW5cbiAgICogW1JGQyAzOTg2XShodHRwOi8vd3d3LmlldGYub3JnL3JmYy9yZmMzOTg2LnR4dCkuXG4gICAqXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIC8vIGdpdmVuIFVSTCBodHRwOi8vZXhhbXBsZS5jb20vIy9zb21lL3BhdGg/Zm9vPWJhciZiYXo9eG94b1xuICAgKiBsZXQgYWJzVXJsID0gJGxvY2F0aW9uLmFic1VybCgpO1xuICAgKiAvLyA9PiBcImh0dHA6Ly9leGFtcGxlLmNvbS8jL3NvbWUvcGF0aD9mb289YmFyJmJhej14b3hvXCJcbiAgICogYGBgXG4gICAqL1xuICBhYnNVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy4kJGFic1VybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgVVJMLCBvciBzZXRzIGEgbmV3IFVSTC4gV2hlbiBzZXR0aW5nIGEgVVJMLFxuICAgKiBjaGFuZ2VzIHRoZSBwYXRoLCBzZWFyY2gsIGFuZCBoYXNoLCBhbmQgcmV0dXJucyBhIHJlZmVyZW5jZSB0byBpdHMgb3duIGluc3RhbmNlLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAvLyBnaXZlbiBVUkwgaHR0cDovL2V4YW1wbGUuY29tLyMvc29tZS9wYXRoP2Zvbz1iYXImYmF6PXhveG9cbiAgICogbGV0IHVybCA9ICRsb2NhdGlvbi51cmwoKTtcbiAgICogLy8gPT4gXCIvc29tZS9wYXRoP2Zvbz1iYXImYmF6PXhveG9cIlxuICAgKiBgYGBcbiAgICovXG4gIHVybCgpOiBzdHJpbmc7XG4gIHVybCh1cmw6IHN0cmluZyk6IHRoaXM7XG4gIHVybCh1cmw/OiBzdHJpbmcpOiBzdHJpbmd8dGhpcyB7XG4gICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIXVybC5sZW5ndGgpIHtcbiAgICAgICAgdXJsID0gJy8nO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXRjaCA9IFBBVEhfTUFUQ0guZXhlYyh1cmwpO1xuICAgICAgaWYgKCFtYXRjaCkgcmV0dXJuIHRoaXM7XG4gICAgICBpZiAobWF0Y2hbMV0gfHwgdXJsID09PSAnJykgdGhpcy5wYXRoKHRoaXMudXJsQ29kZWMuZGVjb2RlUGF0aChtYXRjaFsxXSkpO1xuICAgICAgaWYgKG1hdGNoWzJdIHx8IG1hdGNoWzFdIHx8IHVybCA9PT0gJycpIHRoaXMuc2VhcmNoKG1hdGNoWzNdIHx8ICcnKTtcbiAgICAgIHRoaXMuaGFzaChtYXRjaFs1XSB8fCAnJyk7XG5cbiAgICAgIC8vIENoYWluYWJsZSBtZXRob2RcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiQkdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgcHJvdG9jb2wgb2YgdGhlIGN1cnJlbnQgVVJMLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAvLyBnaXZlbiBVUkwgaHR0cDovL2V4YW1wbGUuY29tLyMvc29tZS9wYXRoP2Zvbz1iYXImYmF6PXhveG9cbiAgICogbGV0IHByb3RvY29sID0gJGxvY2F0aW9uLnByb3RvY29sKCk7XG4gICAqIC8vID0+IFwiaHR0cFwiXG4gICAqIGBgYFxuICAgKi9cbiAgcHJvdG9jb2woKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy4kJHByb3RvY29sO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgcHJvdG9jb2wgb2YgdGhlIGN1cnJlbnQgVVJMLlxuICAgKlxuICAgKiBJbiBjb250cmFzdCB0byB0aGUgbm9uLUFuZ3VsYXJKUyB2ZXJzaW9uIGBsb2NhdGlvbi5ob3N0YCB3aGljaCByZXR1cm5zIGBob3N0bmFtZTpwb3J0YCwgdGhpc1xuICAgKiByZXR1cm5zIHRoZSBgaG9zdG5hbWVgIHBvcnRpb24gb25seS5cbiAgICpcbiAgICpcbiAgICogYGBganNcbiAgICogLy8gZ2l2ZW4gVVJMIGh0dHA6Ly9leGFtcGxlLmNvbS8jL3NvbWUvcGF0aD9mb289YmFyJmJhej14b3hvXG4gICAqIGxldCBob3N0ID0gJGxvY2F0aW9uLmhvc3QoKTtcbiAgICogLy8gPT4gXCJleGFtcGxlLmNvbVwiXG4gICAqXG4gICAqIC8vIGdpdmVuIFVSTCBodHRwOi8vdXNlcjpwYXNzd29yZEBleGFtcGxlLmNvbTo4MDgwLyMvc29tZS9wYXRoP2Zvbz1iYXImYmF6PXhveG9cbiAgICogaG9zdCA9ICRsb2NhdGlvbi5ob3N0KCk7XG4gICAqIC8vID0+IFwiZXhhbXBsZS5jb21cIlxuICAgKiBob3N0ID0gbG9jYXRpb24uaG9zdDtcbiAgICogLy8gPT4gXCJleGFtcGxlLmNvbTo4MDgwXCJcbiAgICogYGBgXG4gICAqL1xuICBob3N0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuJCRob3N0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgcG9ydCBvZiB0aGUgY3VycmVudCBVUkwuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIC8vIGdpdmVuIFVSTCBodHRwOi8vZXhhbXBsZS5jb20vIy9zb21lL3BhdGg/Zm9vPWJhciZiYXo9eG94b1xuICAgKiBsZXQgcG9ydCA9ICRsb2NhdGlvbi5wb3J0KCk7XG4gICAqIC8vID0+IDgwXG4gICAqIGBgYFxuICAgKi9cbiAgcG9ydCgpOiBudW1iZXJ8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuJCRwb3J0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgcGF0aCBvZiB0aGUgY3VycmVudCBVUkwsIG9yIGNoYW5nZXMgdGhlIHBhdGggYW5kIHJldHVybnMgYSByZWZlcmVuY2UgdG8gaXRzIG93blxuICAgKiBpbnN0YW5jZS5cbiAgICpcbiAgICogUGF0aHMgc2hvdWxkIGFsd2F5cyBiZWdpbiB3aXRoIGZvcndhcmQgc2xhc2ggKC8pLiBUaGlzIG1ldGhvZCBhZGRzIHRoZSBmb3J3YXJkIHNsYXNoXG4gICAqIGlmIGl0IGlzIG1pc3NpbmcuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIC8vIGdpdmVuIFVSTCBodHRwOi8vZXhhbXBsZS5jb20vIy9zb21lL3BhdGg/Zm9vPWJhciZiYXo9eG94b1xuICAgKiBsZXQgcGF0aCA9ICRsb2NhdGlvbi5wYXRoKCk7XG4gICAqIC8vID0+IFwiL3NvbWUvcGF0aFwiXG4gICAqIGBgYFxuICAgKi9cbiAgcGF0aCgpOiBzdHJpbmc7XG4gIHBhdGgocGF0aDogc3RyaW5nfG51bWJlcnxudWxsKTogdGhpcztcbiAgcGF0aChwYXRoPzogc3RyaW5nfG51bWJlcnxudWxsKTogc3RyaW5nfHRoaXMge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiQkcGF0aDtcbiAgICB9XG5cbiAgICAvLyBudWxsIHBhdGggY29udmVydHMgdG8gZW1wdHkgc3RyaW5nLiBQcmVwZW5kIHdpdGggXCIvXCIgaWYgbmVlZGVkLlxuICAgIHBhdGggPSBwYXRoICE9PSBudWxsID8gcGF0aC50b1N0cmluZygpIDogJyc7XG4gICAgcGF0aCA9IHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogJy8nICsgcGF0aDtcblxuICAgIHRoaXMuJCRwYXRoID0gcGF0aDtcblxuICAgIHRoaXMuY29tcG9zZVVybHMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSBtYXAgb2YgdGhlIHNlYXJjaCBwYXJhbWV0ZXJzIG9mIHRoZSBjdXJyZW50IFVSTCwgb3IgY2hhbmdlcyBhIHNlYXJjaFxuICAgKiBwYXJ0IGFuZCByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIGl0cyBvd24gaW5zdGFuY2UuXG4gICAqXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIC8vIGdpdmVuIFVSTCBodHRwOi8vZXhhbXBsZS5jb20vIy9zb21lL3BhdGg/Zm9vPWJhciZiYXo9eG94b1xuICAgKiBsZXQgc2VhcmNoT2JqZWN0ID0gJGxvY2F0aW9uLnNlYXJjaCgpO1xuICAgKiAvLyA9PiB7Zm9vOiAnYmFyJywgYmF6OiAneG94byd9XG4gICAqXG4gICAqIC8vIHNldCBmb28gdG8gJ3lpcGVlJ1xuICAgKiAkbG9jYXRpb24uc2VhcmNoKCdmb28nLCAneWlwZWUnKTtcbiAgICogLy8gJGxvY2F0aW9uLnNlYXJjaCgpID0+IHtmb286ICd5aXBlZScsIGJhejogJ3hveG8nfVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0LjxzdHJpbmc+fE9iamVjdC48QXJyYXkuPHN0cmluZz4+fSBzZWFyY2ggTmV3IHNlYXJjaCBwYXJhbXMgLSBzdHJpbmcgb3JcbiAgICogaGFzaCBvYmplY3QuXG4gICAqXG4gICAqIFdoZW4gY2FsbGVkIHdpdGggYSBzaW5nbGUgYXJndW1lbnQgdGhlIG1ldGhvZCBhY3RzIGFzIGEgc2V0dGVyLCBzZXR0aW5nIHRoZSBgc2VhcmNoYCBjb21wb25lbnRcbiAgICogb2YgYCRsb2NhdGlvbmAgdG8gdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICpcbiAgICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgaGFzaCBvYmplY3QgY29udGFpbmluZyBhbiBhcnJheSBvZiB2YWx1ZXMsIHRoZXNlIHZhbHVlcyB3aWxsIGJlIGVuY29kZWRcbiAgICogYXMgZHVwbGljYXRlIHNlYXJjaCBwYXJhbWV0ZXJzIGluIHRoZSBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xOdW1iZXJ8QXJyYXk8c3RyaW5nPnxib29sZWFuKT19IHBhcmFtVmFsdWUgSWYgYHNlYXJjaGAgaXMgYSBzdHJpbmcgb3IgbnVtYmVyLFxuICAgKiAgICAgdGhlbiBgcGFyYW1WYWx1ZWBcbiAgICogd2lsbCBvdmVycmlkZSBvbmx5IGEgc2luZ2xlIHNlYXJjaCBwcm9wZXJ0eS5cbiAgICpcbiAgICogSWYgYHBhcmFtVmFsdWVgIGlzIGFuIGFycmF5LCBpdCB3aWxsIG92ZXJyaWRlIHRoZSBwcm9wZXJ0eSBvZiB0aGUgYHNlYXJjaGAgY29tcG9uZW50IG9mXG4gICAqIGAkbG9jYXRpb25gIHNwZWNpZmllZCB2aWEgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICAgKlxuICAgKiBJZiBgcGFyYW1WYWx1ZWAgaXMgYG51bGxgLCB0aGUgcHJvcGVydHkgc3BlY2lmaWVkIHZpYSB0aGUgZmlyc3QgYXJndW1lbnQgd2lsbCBiZSBkZWxldGVkLlxuICAgKlxuICAgKiBJZiBgcGFyYW1WYWx1ZWAgaXMgYHRydWVgLCB0aGUgcHJvcGVydHkgc3BlY2lmaWVkIHZpYSB0aGUgZmlyc3QgYXJndW1lbnQgd2lsbCBiZSBhZGRlZCB3aXRoIG5vXG4gICAqIHZhbHVlIG5vciB0cmFpbGluZyBlcXVhbCBzaWduLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwYXJzZWQgYHNlYXJjaGAgb2JqZWN0IG9mIHRoZSBjdXJyZW50IFVSTCwgb3IgdGhlIGNoYW5nZWQgYHNlYXJjaGAgb2JqZWN0LlxuICAgKi9cbiAgc2VhcmNoKCk6IHtba2V5OiBzdHJpbmddOiB1bmtub3dufTtcbiAgc2VhcmNoKHNlYXJjaDogc3RyaW5nfG51bWJlcnx7W2tleTogc3RyaW5nXTogdW5rbm93bn0pOiB0aGlzO1xuICBzZWFyY2goXG4gICAgICBzZWFyY2g6IHN0cmluZ3xudW1iZXJ8e1trZXk6IHN0cmluZ106IHVua25vd259LFxuICAgICAgcGFyYW1WYWx1ZTogbnVsbHx1bmRlZmluZWR8c3RyaW5nfG51bWJlcnxib29sZWFufHN0cmluZ1tdKTogdGhpcztcbiAgc2VhcmNoKFxuICAgICAgc2VhcmNoPzogc3RyaW5nfG51bWJlcnx7W2tleTogc3RyaW5nXTogdW5rbm93bn0sXG4gICAgICBwYXJhbVZhbHVlPzogbnVsbHx1bmRlZmluZWR8c3RyaW5nfG51bWJlcnxib29sZWFufHN0cmluZ1tdKToge1trZXk6IHN0cmluZ106IHVua25vd259fHRoaXMge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gdGhpcy4kJHNlYXJjaDtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBzZWFyY2ggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGhpcy4kJHNlYXJjaCA9IHRoaXMudXJsQ29kZWMuZGVjb2RlU2VhcmNoKHNlYXJjaC50b1N0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VhcmNoID09PSAnb2JqZWN0JyAmJiBzZWFyY2ggIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBDb3B5IHRoZSBvYmplY3Qgc28gaXQncyBuZXZlciBtdXRhdGVkXG4gICAgICAgICAgc2VhcmNoID0gey4uLnNlYXJjaH07XG4gICAgICAgICAgLy8gcmVtb3ZlIG9iamVjdCB1bmRlZmluZWQgb3IgbnVsbCBwcm9wZXJ0aWVzXG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2VhcmNoKSB7XG4gICAgICAgICAgICBpZiAoc2VhcmNoW2tleV0gPT0gbnVsbCkgZGVsZXRlIHNlYXJjaFtrZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuJCRzZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAnTG9jYXRpb25Qcm92aWRlci5zZWFyY2goKTogRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50U2VhcmNoID0gdGhpcy5zZWFyY2goKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHBhcmFtVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjdXJyZW50U2VhcmNoW3NlYXJjaF07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2goY3VycmVudFNlYXJjaCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRTZWFyY2hbc2VhcmNoXSA9IHBhcmFtVmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2goY3VycmVudFNlYXJjaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29tcG9zZVVybHMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgaGFzaCBmcmFnbWVudCwgb3IgY2hhbmdlcyB0aGUgaGFzaCBmcmFnbWVudCBhbmQgcmV0dXJucyBhIHJlZmVyZW5jZSB0b1xuICAgKiBpdHMgb3duIGluc3RhbmNlLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAvLyBnaXZlbiBVUkwgaHR0cDovL2V4YW1wbGUuY29tLyMvc29tZS9wYXRoP2Zvbz1iYXImYmF6PXhveG8jaGFzaFZhbHVlXG4gICAqIGxldCBoYXNoID0gJGxvY2F0aW9uLmhhc2goKTtcbiAgICogLy8gPT4gXCJoYXNoVmFsdWVcIlxuICAgKiBgYGBcbiAgICovXG4gIGhhc2goKTogc3RyaW5nO1xuICBoYXNoKGhhc2g6IHN0cmluZ3xudW1iZXJ8bnVsbCk6IHRoaXM7XG4gIGhhc2goaGFzaD86IHN0cmluZ3xudW1iZXJ8bnVsbCk6IHN0cmluZ3x0aGlzIHtcbiAgICBpZiAodHlwZW9mIGhhc2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kJGhhc2g7XG4gICAgfVxuXG4gICAgdGhpcy4kJGhhc2ggPSBoYXNoICE9PSBudWxsID8gaGFzaC50b1N0cmluZygpIDogJyc7XG5cbiAgICB0aGlzLmNvbXBvc2VVcmxzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0byBgJGxvY2F0aW9uYCBkdXJpbmcgdGhlIGN1cnJlbnQgYCRkaWdlc3RgIHdpbGwgcmVwbGFjZSB0aGUgY3VycmVudFxuICAgKiBoaXN0b3J5IHJlY29yZCwgaW5zdGVhZCBvZiBhZGRpbmcgYSBuZXcgb25lLlxuICAgKi9cbiAgcmVwbGFjZSgpOiB0aGlzIHtcbiAgICB0aGlzLiQkcmVwbGFjZSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBoaXN0b3J5IHN0YXRlIG9iamVjdCB3aGVuIGNhbGxlZCB3aXRob3V0IGFueSBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIENoYW5nZSB0aGUgaGlzdG9yeSBzdGF0ZSBvYmplY3Qgd2hlbiBjYWxsZWQgd2l0aCBvbmUgcGFyYW1ldGVyIGFuZCByZXR1cm4gYCRsb2NhdGlvbmAuXG4gICAqIFRoZSBzdGF0ZSBvYmplY3QgaXMgbGF0ZXIgcGFzc2VkIHRvIGBwdXNoU3RhdGVgIG9yIGByZXBsYWNlU3RhdGVgLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBzdXBwb3J0ZWQgb25seSBpbiBIVE1MNSBtb2RlIGFuZCBvbmx5IGluIGJyb3dzZXJzIHN1cHBvcnRpbmdcbiAgICogdGhlIEhUTUw1IEhpc3RvcnkgQVBJIG1ldGhvZHMgc3VjaCBhcyBgcHVzaFN0YXRlYCBhbmQgYHJlcGxhY2VTdGF0ZWAuIElmIHlvdSBuZWVkIHRvIHN1cHBvcnRcbiAgICogb2xkZXIgYnJvd3NlcnMgKGxpa2UgSUU5IG9yIEFuZHJvaWQgPCA0LjApLCBkb24ndCB1c2UgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqL1xuICBzdGF0ZSgpOiB1bmtub3duO1xuICBzdGF0ZShzdGF0ZTogdW5rbm93bik6IHRoaXM7XG4gIHN0YXRlKHN0YXRlPzogdW5rbm93bik6IHVua25vd258dGhpcyB7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiQkc3RhdGU7XG4gICAgfVxuXG4gICAgdGhpcy4kJHN0YXRlID0gc3RhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgZmFjdG9yeSBmdW5jdGlvbiB1c2VkIHRvIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgYCRsb2NhdGlvblNoaW1gIGluIEFuZ3VsYXIsXG4gKiBhbmQgcHJvdmlkZXMgYW4gQVBJLWNvbXBhdGlhYmxlIGAkbG9jYXRpb25Qcm92aWRlcmAgZm9yIEFuZ3VsYXJKUy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyAkbG9jYXRpb25TaGltUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgbmdVcGdyYWRlOiBVcGdyYWRlTW9kdWxlLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgIHByaXZhdGUgcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbiwgcHJpdmF0ZSB1cmxDb2RlYzogVXJsQ29kZWMsXG4gICAgICBwcml2YXRlIGxvY2F0aW9uU3RyYXRlZ3k6IExvY2F0aW9uU3RyYXRlZ3kpIHt9XG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgbWV0aG9kIHRoYXQgcmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgJGxvY2F0aW9uU2hpbVxuICAgKi9cbiAgJGdldCgpIHtcbiAgICByZXR1cm4gbmV3ICRsb2NhdGlvblNoaW0oXG4gICAgICAgIHRoaXMubmdVcGdyYWRlLiRpbmplY3RvciwgdGhpcy5sb2NhdGlvbiwgdGhpcy5wbGF0Zm9ybUxvY2F0aW9uLCB0aGlzLnVybENvZGVjLFxuICAgICAgICB0aGlzLmxvY2F0aW9uU3RyYXRlZ3kpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0dWIgbWV0aG9kIHVzZWQgdG8ga2VlcCBBUEkgY29tcGF0aWJsZSB3aXRoIEFuZ3VsYXJKUy4gVGhpcyBzZXR0aW5nIGlzIGNvbmZpZ3VyZWQgdGhyb3VnaFxuICAgKiB0aGUgTG9jYXRpb25VcGdyYWRlTW9kdWxlJ3MgYGNvbmZpZ2AgbWV0aG9kIGluIHlvdXIgQW5ndWxhciBhcHAuXG4gICAqL1xuICBoYXNoUHJlZml4KHByZWZpeD86IHN0cmluZykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJlIExvY2F0aW9uVXBncmFkZSB0aHJvdWdoIExvY2F0aW9uVXBncmFkZU1vZHVsZS5jb25maWcgbWV0aG9kLicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0dWIgbWV0aG9kIHVzZWQgdG8ga2VlcCBBUEkgY29tcGF0aWJsZSB3aXRoIEFuZ3VsYXJKUy4gVGhpcyBzZXR0aW5nIGlzIGNvbmZpZ3VyZWQgdGhyb3VnaFxuICAgKiB0aGUgTG9jYXRpb25VcGdyYWRlTW9kdWxlJ3MgYGNvbmZpZ2AgbWV0aG9kIGluIHlvdXIgQW5ndWxhciBhcHAuXG4gICAqL1xuICBodG1sNU1vZGUobW9kZT86IGFueSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJlIExvY2F0aW9uVXBncmFkZSB0aHJvdWdoIExvY2F0aW9uVXBncmFkZU1vZHVsZS5jb25maWcgbWV0aG9kLicpO1xuICB9XG59XG4iXX0=