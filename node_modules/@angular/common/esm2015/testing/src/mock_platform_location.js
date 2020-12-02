/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/testing/src/mock_platform_location.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Parser from https://tools.ietf.org/html/rfc3986#appendix-B
 * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
 *  12            3  4          5       6  7        8 9
 *
 * Example: http://www.ics.uci.edu/pub/ietf/uri/#Related
 *
 * Results in:
 *
 * $1 = http:
 * $2 = http
 * $3 = //www.ics.uci.edu
 * $4 = www.ics.uci.edu
 * $5 = /pub/ietf/uri/
 * $6 = <undefined>
 * $7 = <undefined>
 * $8 = #Related
 * $9 = Related
 * @type {?}
 */
const urlParse = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
/**
 * @param {?} urlStr
 * @param {?} baseHref
 * @return {?}
 */
function parseUrl(urlStr, baseHref) {
    /** @type {?} */
    const verifyProtocol = /^((http[s]?|ftp):\/\/)/;
    /** @type {?} */
    let serverBase;
    // URL class requires full URL. If the URL string doesn't start with protocol, we need to add
    // an arbitrary base URL which can be removed afterward.
    if (!verifyProtocol.test(urlStr)) {
        serverBase = 'http://empty.com/';
    }
    /** @type {?} */
    let parsedUrl;
    try {
        parsedUrl = new URL(urlStr, serverBase);
    }
    catch (e) {
        /** @type {?} */
        const result = urlParse.exec(serverBase || '' + urlStr);
        if (!result) {
            throw new Error(`Invalid URL: ${urlStr} with base: ${baseHref}`);
        }
        /** @type {?} */
        const hostSplit = result[4].split(':');
        parsedUrl = {
            protocol: result[1],
            hostname: hostSplit[0],
            port: hostSplit[1] || '',
            pathname: result[5],
            search: result[6],
            hash: result[8],
        };
    }
    if (parsedUrl.pathname && parsedUrl.pathname.indexOf(baseHref) === 0) {
        parsedUrl.pathname = parsedUrl.pathname.substring(baseHref.length);
    }
    return {
        hostname: !serverBase && parsedUrl.hostname || '',
        protocol: !serverBase && parsedUrl.protocol || '',
        port: !serverBase && parsedUrl.port || '',
        pathname: parsedUrl.pathname || '/',
        search: parsedUrl.search || '',
        hash: parsedUrl.hash || '',
    };
}
/**
 * Mock platform location config
 *
 * \@publicApi
 * @record
 */
export function MockPlatformLocationConfig() { }
if (false) {
    /** @type {?|undefined} */
    MockPlatformLocationConfig.prototype.startUrl;
    /** @type {?|undefined} */
    MockPlatformLocationConfig.prototype.appBaseHref;
}
/**
 * Provider for mock platform location config
 *
 * \@publicApi
 * @type {?}
 */
export const MOCK_PLATFORM_LOCATION_CONFIG = new InjectionToken('MOCK_PLATFORM_LOCATION_CONFIG');
/**
 * Mock implementation of URL state.
 *
 * \@publicApi
 */
export class MockPlatformLocation {
    /**
     * @param {?=} config
     */
    constructor(config) {
        this.baseHref = '';
        this.hashUpdate = new Subject();
        this.urlChanges = [{ hostname: '', protocol: '', port: '', pathname: '/', search: '', hash: '', state: null }];
        if (config) {
            this.baseHref = config.appBaseHref || '';
            /** @type {?} */
            const parsedChanges = this.parseChanges(null, config.startUrl || 'http://<empty>/', this.baseHref);
            this.urlChanges[0] = Object.assign({}, parsedChanges);
        }
    }
    /**
     * @return {?}
     */
    get hostname() {
        return this.urlChanges[0].hostname;
    }
    /**
     * @return {?}
     */
    get protocol() {
        return this.urlChanges[0].protocol;
    }
    /**
     * @return {?}
     */
    get port() {
        return this.urlChanges[0].port;
    }
    /**
     * @return {?}
     */
    get pathname() {
        return this.urlChanges[0].pathname;
    }
    /**
     * @return {?}
     */
    get search() {
        return this.urlChanges[0].search;
    }
    /**
     * @return {?}
     */
    get hash() {
        return this.urlChanges[0].hash;
    }
    /**
     * @return {?}
     */
    get state() {
        return this.urlChanges[0].state;
    }
    /**
     * @return {?}
     */
    getBaseHrefFromDOM() {
        return this.baseHref;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onPopState(fn) {
        // No-op: a state stack is not implemented, so
        // no events will ever come.
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onHashChange(fn) {
        this.hashUpdate.subscribe(fn);
    }
    /**
     * @return {?}
     */
    get href() {
        /** @type {?} */
        let url = `${this.protocol}//${this.hostname}${this.port ? ':' + this.port : ''}`;
        url += `${this.pathname === '/' ? '' : this.pathname}${this.search}${this.hash}`;
        return url;
    }
    /**
     * @return {?}
     */
    get url() {
        return `${this.pathname}${this.search}${this.hash}`;
    }
    /**
     * @private
     * @param {?} state
     * @param {?} url
     * @param {?=} baseHref
     * @return {?}
     */
    parseChanges(state, url, baseHref = '') {
        // When the `history.state` value is stored, it is always copied.
        state = JSON.parse(JSON.stringify(state));
        return Object.assign(Object.assign({}, parseUrl(url, baseHref)), { state });
    }
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} newUrl
     * @return {?}
     */
    replaceState(state, title, newUrl) {
        const { pathname, search, state: parsedState, hash } = this.parseChanges(state, newUrl);
        this.urlChanges[0] = Object.assign(Object.assign({}, this.urlChanges[0]), { pathname, search, hash, state: parsedState });
    }
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} newUrl
     * @return {?}
     */
    pushState(state, title, newUrl) {
        const { pathname, search, state: parsedState, hash } = this.parseChanges(state, newUrl);
        this.urlChanges.unshift(Object.assign(Object.assign({}, this.urlChanges[0]), { pathname, search, hash, state: parsedState }));
    }
    /**
     * @return {?}
     */
    forward() {
        throw new Error('Not implemented');
    }
    /**
     * @return {?}
     */
    back() {
        /** @type {?} */
        const oldUrl = this.url;
        /** @type {?} */
        const oldHash = this.hash;
        this.urlChanges.shift();
        /** @type {?} */
        const newHash = this.hash;
        if (oldHash !== newHash) {
            scheduleMicroTask((/**
             * @return {?}
             */
            () => this.hashUpdate.next((/** @type {?} */ ({ type: 'hashchange', state: null, oldUrl, newUrl: this.url })))));
        }
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
}
MockPlatformLocation.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MockPlatformLocation.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MOCK_PLATFORM_LOCATION_CONFIG,] }, { type: Optional }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockPlatformLocation.prototype.baseHref;
    /**
     * @type {?}
     * @private
     */
    MockPlatformLocation.prototype.hashUpdate;
    /**
     * @type {?}
     * @private
     */
    MockPlatformLocation.prototype.urlChanges;
}
/**
 * @param {?} cb
 * @return {?}
 */
export function scheduleMicroTask(cb) {
    Promise.resolve(null).then(cb);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja19wbGF0Zm9ybV9sb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi90ZXN0aW5nL3NyYy9tb2NrX3BsYXRmb3JtX2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BcUJ2QixRQUFRLEdBQUcsK0RBQStEOzs7Ozs7QUFFaEYsU0FBUyxRQUFRLENBQUMsTUFBYyxFQUFFLFFBQWdCOztVQUMxQyxjQUFjLEdBQUcsd0JBQXdCOztRQUMzQyxVQUE0QjtJQUVoQyw2RkFBNkY7SUFDN0Ysd0RBQXdEO0lBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2hDLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQztLQUNsQzs7UUFDRyxTQU9IO0lBQ0QsSUFBSTtRQUNGLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDekM7SUFBQyxPQUFPLENBQUMsRUFBRTs7Y0FDSixNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsTUFBTSxlQUFlLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDbEU7O2NBQ0ssU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RDLFNBQVMsR0FBRztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FB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O1FBRXpCLElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUN2QixpQkFBaUI7OztZQUNiLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN0QixtQkFBQSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsRUFBdUIsQ0FBQyxFQUFDLENBQUM7U0FDOUY7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUEzR0YsVUFBVTs7Ozs0Q0FjSSxNQUFNLFNBQUMsNkJBQTZCLGNBQUcsUUFBUTs7Ozs7OztJQVo1RCx3Q0FBOEI7Ozs7O0lBQzlCLDBDQUF3RDs7Ozs7SUFDeEQsMENBUWlHOzs7Ozs7QUFrR25HLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxFQUFhO0lBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TG9jYXRpb25DaGFuZ2VFdmVudCwgTG9jYXRpb25DaGFuZ2VMaXN0ZW5lciwgUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBQYXJzZXIgZnJvbSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNhcHBlbmRpeC1CXG4gKiBeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcPyhbXiNdKikpPygjKC4qKSk/XG4gKiAgMTIgICAgICAgICAgICAzICA0ICAgICAgICAgIDUgICAgICAgNiAgNyAgICAgICAgOCA5XG4gKlxuICogRXhhbXBsZTogaHR0cDovL3d3dy5pY3MudWNpLmVkdS9wdWIvaWV0Zi91cmkvI1JlbGF0ZWRcbiAqXG4gKiBSZXN1bHRzIGluOlxuICpcbiAqICQxID0gaHR0cDpcbiAqICQyID0gaHR0cFxuICogJDMgPSAvL3d3dy5pY3MudWNpLmVkdVxuICogJDQgPSB3d3cuaWNzLnVjaS5lZHVcbiAqICQ1ID0gL3B1Yi9pZXRmL3VyaS9cbiAqICQ2ID0gPHVuZGVmaW5lZD5cbiAqICQ3ID0gPHVuZGVmaW5lZD5cbiAqICQ4ID0gI1JlbGF0ZWRcbiAqICQ5ID0gUmVsYXRlZFxuICovXG5jb25zdCB1cmxQYXJzZSA9IC9eKChbXjpcXC8/I10rKTopPyhcXC9cXC8oW15cXC8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8vO1xuXG5mdW5jdGlvbiBwYXJzZVVybCh1cmxTdHI6IHN0cmluZywgYmFzZUhyZWY6IHN0cmluZykge1xuICBjb25zdCB2ZXJpZnlQcm90b2NvbCA9IC9eKChodHRwW3NdP3xmdHApOlxcL1xcLykvO1xuICBsZXQgc2VydmVyQmFzZTogc3RyaW5nfHVuZGVmaW5lZDtcblxuICAvLyBVUkwgY2xhc3MgcmVxdWlyZXMgZnVsbCBVUkwuIElmIHRoZSBVUkwgc3RyaW5nIGRvZXNuJ3Qgc3RhcnQgd2l0aCBwcm90b2NvbCwgd2UgbmVlZCB0byBhZGRcbiAgLy8gYW4gYXJiaXRyYXJ5IGJhc2UgVVJMIHdoaWNoIGNhbiBiZSByZW1vdmVkIGFmdGVyd2FyZC5cbiAgaWYgKCF2ZXJpZnlQcm90b2NvbC50ZXN0KHVybFN0cikpIHtcbiAgICBzZXJ2ZXJCYXNlID0gJ2h0dHA6Ly9lbXB0eS5jb20vJztcbiAgfVxuICBsZXQgcGFyc2VkVXJsOiB7XG4gICAgcHJvdG9jb2w6IHN0cmluZyxcbiAgICBob3N0bmFtZTogc3RyaW5nLFxuICAgIHBvcnQ6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHNlYXJjaDogc3RyaW5nLFxuICAgIGhhc2g6IHN0cmluZ1xuICB9O1xuICB0cnkge1xuICAgIHBhcnNlZFVybCA9IG5ldyBVUkwodXJsU3RyLCBzZXJ2ZXJCYXNlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHVybFBhcnNlLmV4ZWMoc2VydmVyQmFzZSB8fCAnJyArIHVybFN0cik7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBVUkw6ICR7dXJsU3RyfSB3aXRoIGJhc2U6ICR7YmFzZUhyZWZ9YCk7XG4gICAgfVxuICAgIGNvbnN0IGhvc3RTcGxpdCA9IHJlc3VsdFs0XS5zcGxpdCgnOicpO1xuICAgIHBhcnNlZFVybCA9IHtcbiAgICAgIHByb3RvY29sOiByZXN1bHRbMV0sXG4gICAgICBob3N0bmFtZTogaG9zdFNwbGl0WzBdLFxuICAgICAgcG9ydDogaG9zdFNwbGl0WzFdIHx8ICcnLFxuICAgICAgcGF0aG5hbWU6IHJlc3VsdFs1XSxcbiAgICAgIHNlYXJjaDogcmVzdWx0WzZdLFxuICAgICAgaGFzaDogcmVzdWx0WzhdLFxuICAgIH07XG4gIH1cbiAgaWYgKHBhcnNlZFVybC5wYXRobmFtZSAmJiBwYXJzZWRVcmwucGF0aG5hbWUuaW5kZXhPZihiYXNlSHJlZikgPT09IDApIHtcbiAgICBwYXJzZWRVcmwucGF0aG5hbWUgPSBwYXJzZWRVcmwucGF0aG5hbWUuc3Vic3RyaW5nKGJhc2VIcmVmLmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBob3N0bmFtZTogIXNlcnZlckJhc2UgJiYgcGFyc2VkVXJsLmhvc3RuYW1lIHx8ICcnLFxuICAgIHByb3RvY29sOiAhc2VydmVyQmFzZSAmJiBwYXJzZWRVcmwucHJvdG9jb2wgfHwgJycsXG4gICAgcG9ydDogIXNlcnZlckJhc2UgJiYgcGFyc2VkVXJsLnBvcnQgfHwgJycsXG4gICAgcGF0aG5hbWU6IHBhcnNlZFVybC5wYXRobmFtZSB8fCAnLycsXG4gICAgc2VhcmNoOiBwYXJzZWRVcmwuc2VhcmNoIHx8ICcnLFxuICAgIGhhc2g6IHBhcnNlZFVybC5oYXNoIHx8ICcnLFxuICB9O1xufVxuXG4vKipcbiAqIE1vY2sgcGxhdGZvcm0gbG9jYXRpb24gY29uZmlnXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vY2tQbGF0Zm9ybUxvY2F0aW9uQ29uZmlnIHtcbiAgc3RhcnRVcmw/OiBzdHJpbmc7XG4gIGFwcEJhc2VIcmVmPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBtb2NrIHBsYXRmb3JtIGxvY2F0aW9uIGNvbmZpZ1xuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IE1PQ0tfUExBVEZPUk1fTE9DQVRJT05fQ09ORklHID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48TW9ja1BsYXRmb3JtTG9jYXRpb25Db25maWc+KCdNT0NLX1BMQVRGT1JNX0xPQ0FUSU9OX0NPTkZJRycpO1xuXG4vKipcbiAqIE1vY2sgaW1wbGVtZW50YXRpb24gb2YgVVJMIHN0YXRlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tQbGF0Zm9ybUxvY2F0aW9uIGltcGxlbWVudHMgUGxhdGZvcm1Mb2NhdGlvbiB7XG4gIHByaXZhdGUgYmFzZUhyZWY6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGhhc2hVcGRhdGUgPSBuZXcgU3ViamVjdDxMb2NhdGlvbkNoYW5nZUV2ZW50PigpO1xuICBwcml2YXRlIHVybENoYW5nZXM6IHtcbiAgICBob3N0bmFtZTogc3RyaW5nLFxuICAgIHByb3RvY29sOiBzdHJpbmcsXG4gICAgcG9ydDogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgc2VhcmNoOiBzdHJpbmcsXG4gICAgaGFzaDogc3RyaW5nLFxuICAgIHN0YXRlOiB1bmtub3duXG4gIH1bXSA9IFt7aG9zdG5hbWU6ICcnLCBwcm90b2NvbDogJycsIHBvcnQ6ICcnLCBwYXRobmFtZTogJy8nLCBzZWFyY2g6ICcnLCBoYXNoOiAnJywgc3RhdGU6IG51bGx9XTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1PQ0tfUExBVEZPUk1fTE9DQVRJT05fQ09ORklHKSBAT3B0aW9uYWwoKSBjb25maWc/OlxuICAgICAgICAgICAgICAgICAgTW9ja1BsYXRmb3JtTG9jYXRpb25Db25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB0aGlzLmJhc2VIcmVmID0gY29uZmlnLmFwcEJhc2VIcmVmIHx8ICcnO1xuXG4gICAgICBjb25zdCBwYXJzZWRDaGFuZ2VzID1cbiAgICAgICAgICB0aGlzLnBhcnNlQ2hhbmdlcyhudWxsLCBjb25maWcuc3RhcnRVcmwgfHwgJ2h0dHA6Ly88ZW1wdHk+LycsIHRoaXMuYmFzZUhyZWYpO1xuICAgICAgdGhpcy51cmxDaGFuZ2VzWzBdID0gey4uLnBhcnNlZENoYW5nZXN9O1xuICAgIH1cbiAgfVxuXG4gIGdldCBob3N0bmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy51cmxDaGFuZ2VzWzBdLmhvc3RuYW1lO1xuICB9XG4gIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy51cmxDaGFuZ2VzWzBdLnByb3RvY29sO1xuICB9XG4gIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLnVybENoYW5nZXNbMF0ucG9ydDtcbiAgfVxuICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsQ2hhbmdlc1swXS5wYXRobmFtZTtcbiAgfVxuICBnZXQgc2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLnVybENoYW5nZXNbMF0uc2VhcmNoO1xuICB9XG4gIGdldCBoYXNoKCkge1xuICAgIHJldHVybiB0aGlzLnVybENoYW5nZXNbMF0uaGFzaDtcbiAgfVxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsQ2hhbmdlc1swXS5zdGF0ZTtcbiAgfVxuXG5cbiAgZ2V0QmFzZUhyZWZGcm9tRE9NKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYmFzZUhyZWY7XG4gIH1cblxuICBvblBvcFN0YXRlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZCB7XG4gICAgLy8gTm8tb3A6IGEgc3RhdGUgc3RhY2sgaXMgbm90IGltcGxlbWVudGVkLCBzb1xuICAgIC8vIG5vIGV2ZW50cyB3aWxsIGV2ZXIgY29tZS5cbiAgfVxuXG4gIG9uSGFzaENoYW5nZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQge1xuICAgIHRoaXMuaGFzaFVwZGF0ZS5zdWJzY3JpYmUoZm4pO1xuICB9XG5cbiAgZ2V0IGhyZWYoKTogc3RyaW5nIHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5wcm90b2NvbH0vLyR7dGhpcy5ob3N0bmFtZX0ke3RoaXMucG9ydCA/ICc6JyArIHRoaXMucG9ydCA6ICcnfWA7XG4gICAgdXJsICs9IGAke3RoaXMucGF0aG5hbWUgPT09ICcvJyA/ICcnIDogdGhpcy5wYXRobmFtZX0ke3RoaXMuc2VhcmNofSR7dGhpcy5oYXNofWA7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGdldCB1cmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5wYXRobmFtZX0ke3RoaXMuc2VhcmNofSR7dGhpcy5oYXNofWA7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQ2hhbmdlcyhzdGF0ZTogdW5rbm93biwgdXJsOiBzdHJpbmcsIGJhc2VIcmVmOiBzdHJpbmcgPSAnJykge1xuICAgIC8vIFdoZW4gdGhlIGBoaXN0b3J5LnN0YXRlYCB2YWx1ZSBpcyBzdG9yZWQsIGl0IGlzIGFsd2F5cyBjb3BpZWQuXG4gICAgc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gICAgcmV0dXJuIHsuLi5wYXJzZVVybCh1cmwsIGJhc2VIcmVmKSwgc3RhdGV9O1xuICB9XG5cbiAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIG5ld1VybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qge3BhdGhuYW1lLCBzZWFyY2gsIHN0YXRlOiBwYXJzZWRTdGF0ZSwgaGFzaH0gPSB0aGlzLnBhcnNlQ2hhbmdlcyhzdGF0ZSwgbmV3VXJsKTtcblxuICAgIHRoaXMudXJsQ2hhbmdlc1swXSA9IHsuLi50aGlzLnVybENoYW5nZXNbMF0sIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlOiBwYXJzZWRTdGF0ZX07XG4gIH1cblxuICBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgbmV3VXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB7cGF0aG5hbWUsIHNlYXJjaCwgc3RhdGU6IHBhcnNlZFN0YXRlLCBoYXNofSA9IHRoaXMucGFyc2VDaGFuZ2VzKHN0YXRlLCBuZXdVcmwpO1xuICAgIHRoaXMudXJsQ2hhbmdlcy51bnNoaWZ0KHsuLi50aGlzLnVybENoYW5nZXNbMF0sIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlOiBwYXJzZWRTdGF0ZX0pO1xuICB9XG5cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICBjb25zdCBvbGRVcmwgPSB0aGlzLnVybDtcbiAgICBjb25zdCBvbGRIYXNoID0gdGhpcy5oYXNoO1xuICAgIHRoaXMudXJsQ2hhbmdlcy5zaGlmdCgpO1xuICAgIGNvbnN0IG5ld0hhc2ggPSB0aGlzLmhhc2g7XG5cbiAgICBpZiAob2xkSGFzaCAhPT0gbmV3SGFzaCkge1xuICAgICAgc2NoZWR1bGVNaWNyb1Rhc2soXG4gICAgICAgICAgKCkgPT4gdGhpcy5oYXNoVXBkYXRlLm5leHQoXG4gICAgICAgICAgICAgIHt0eXBlOiAnaGFzaGNoYW5nZScsIHN0YXRlOiBudWxsLCBvbGRVcmwsIG5ld1VybDogdGhpcy51cmx9IGFzIExvY2F0aW9uQ2hhbmdlRXZlbnQpKTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSgpOiB1bmtub3duIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVNaWNyb1Rhc2soY2I6ICgpID0+IGFueSkge1xuICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbihjYik7XG59Il19