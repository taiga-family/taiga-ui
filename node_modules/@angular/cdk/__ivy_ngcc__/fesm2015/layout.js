import { NgModule, Injectable, ɵɵdefineInjectable, ɵɵinject, NgZone } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Subject, combineLatest, concat, Observable } from 'rxjs';
import { take, skip, debounceTime, map, startWith, takeUntil } from 'rxjs/operators';
import { coerceArray } from '@angular/cdk/coercion';

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/layout-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
class LayoutModule {
}
LayoutModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LayoutModule });
LayoutModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/media-matcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Global registry for all dynamically-created, injected media queries.
 * @type {?}
 */
const mediaQueriesForWebkitCompatibility = new Set();
/**
 * Style tag that holds all of the dynamically-created media queries.
 * @type {?}
 */
let mediaQueryStyleNode;
/**
 * A utility for calling matchMedia queries.
 */
class MediaMatcher {
    /**
     * @param {?} _platform
     */
    constructor(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     * @param {?} query
     * @return {?}
     */
    matchMedia(query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    }
}
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(ɵngcc0.ɵɵinject(ɵngcc1.Platform)); };
/** @nocollapse */
MediaMatcher.ctorParameters = () => [
    { type: Platform }
];
/** @nocollapse */ MediaMatcher.ɵprov = ɵɵdefineInjectable({ factory: function MediaMatcher_Factory() { return new MediaMatcher(ɵɵinject(Platform)); }, token: MediaMatcher, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MediaMatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.Platform }]; }, null); })();
if (false) {
    /**
     * The internal matchMedia method to return back a MediaQueryList like object.
     * @type {?}
     * @private
     */
    MediaMatcher.prototype._matchMedia;
    /**
     * @type {?}
     * @private
     */
    MediaMatcher.prototype._platform;
}
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 * @param {?} query
 * @return {?}
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            (/** @type {?} */ (document.head)).appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            ((/** @type {?} */ (mediaQueryStyleNode.sheet)))
                .insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/**
 * No-op matchMedia replacement for non-browser platforms.
 * @param {?} query
 * @return {?}
 */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return (/** @type {?} */ ({
        matches: query === 'all' || query === '',
        media: query,
        addListener: (/**
         * @return {?}
         */
        () => { }),
        removeListener: (/**
         * @return {?}
         */
        () => { })
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/breakpoints-observer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The current state of a layout breakpoint.
 * @record
 */
function BreakpointState() { }
if (false) {
    /**
     * Whether the breakpoint is currently matching.
     * @type {?}
     */
    BreakpointState.prototype.matches;
    /**
     * A key boolean pair for each query provided to the observe method,
     * with its current matched state.
     * @type {?}
     */
    BreakpointState.prototype.breakpoints;
}
/**
 * The current state of a layout breakpoint.
 * @record
 */
function InternalBreakpointState() { }
if (false) {
    /**
     * Whether the breakpoint is currently matching.
     * @type {?}
     */
    InternalBreakpointState.prototype.matches;
    /**
     * The media query being to be matched
     * @type {?}
     */
    InternalBreakpointState.prototype.query;
}
/**
 * @record
 */
function Query() { }
if (false) {
    /** @type {?} */
    Query.prototype.observable;
    /** @type {?} */
    Query.prototype.mql;
}
/**
 * Utility for checking the matching state of \@media queries.
 */
class BreakpointObserver {
    /**
     * @param {?} _mediaMatcher
     * @param {?} _zone
     */
    constructor(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**
         * A map of all media queries currently being listened for.
         */
        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */
        this._destroySubject = new Subject();
    }
    /**
     * Completes the active subject, signalling to all other observables to complete.
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param {?} value One or more media queries to check.
     * @return {?} Whether any of the media queries match.
     */
    isMatched(value) {
        /** @type {?} */
        const queries = splitQueries(coerceArray(value));
        return queries.some((/**
         * @param {?} mediaQuery
         * @return {?}
         */
        mediaQuery => this._registerQuery(mediaQuery).mql.matches));
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param {?} value One or more media queries to check.
     * @return {?} A stream of matches for the given queries.
     */
    observe(value) {
        /** @type {?} */
        const queries = splitQueries(coerceArray(value));
        /** @type {?} */
        const observables = queries.map((/**
         * @param {?} query
         * @return {?}
         */
        query => this._registerQuery(query).observable));
        /** @type {?} */
        let stateObservable = combineLatest(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map((/**
         * @param {?} breakpointStates
         * @return {?}
         */
        (breakpointStates) => {
            /** @type {?} */
            const response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach((/**
             * @param {?} state
             * @return {?}
             */
            (state) => {
                response.matches = response.matches || state.matches;
                response.breakpoints[state.query] = state.matches;
            }));
            return response;
        })));
    }
    /**
     * Registers a specific query to be listened for.
     * @private
     * @param {?} query
     * @return {?}
     */
    _registerQuery(query) {
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return (/** @type {?} */ (this._queries.get(query)));
        }
        /** @type {?} */
        const mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        /** @type {?} */
        const queryObservable = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            /** @type {?} */
            const handler = (/**
             * @param {?} e
             * @return {?}
             */
            (e) => this._zone.run((/**
             * @return {?}
             */
            () => observer.next(e))));
            mql.addListener(handler);
            return (/**
             * @return {?}
             */
            () => {
                mql.removeListener(handler);
            });
        })).pipe(startWith(mql), map((/**
         * @param {?} nextMql
         * @return {?}
         */
        (nextMql) => ({ query, matches: nextMql.matches }))), takeUntil(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        /** @type {?} */
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
    }
}
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) { return new (t || BreakpointObserver)(ɵngcc0.ɵɵinject(MediaMatcher), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
/** @nocollapse */
BreakpointObserver.ctorParameters = () => [
    { type: MediaMatcher },
    { type: NgZone }
];
/** @nocollapse */ BreakpointObserver.ɵprov = ɵɵdefineInjectable({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(ɵɵinject(MediaMatcher), ɵɵinject(NgZone)); }, token: BreakpointObserver, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BreakpointObserver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MediaMatcher }, { type: ɵngcc0.NgZone }]; }, null); })();
if (false) {
    /**
     * A map of all media queries currently being listened for.
     * @type {?}
     * @private
     */
    BreakpointObserver.prototype._queries;
    /**
     * A subject for all other observables to takeUntil based on.
     * @type {?}
     * @private
     */
    BreakpointObserver.prototype._destroySubject;
    /**
     * @type {?}
     * @private
     */
    BreakpointObserver.prototype._mediaMatcher;
    /**
     * @type {?}
     * @private
     */
    BreakpointObserver.prototype._zone;
}
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 * @param {?} queries
 * @return {?}
 */
function splitQueries(queries) {
    return queries.map((/**
     * @param {?} query
     * @return {?}
     */
    (query) => query.split(',')))
        .reduce((/**
     * @param {?} a1
     * @param {?} a2
     * @return {?}
     */
    (a1, a2) => a1.concat(a2)))
        .map((/**
     * @param {?} query
     * @return {?}
     */
    query => query.trim()));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/breakpoints.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
const Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher };

//# sourceMappingURL=layout.js.map