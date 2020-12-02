(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/coercion')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/layout', ['exports', '@angular/core', '@angular/cdk/platform', 'rxjs', 'rxjs/operators', '@angular/cdk/coercion'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.layout = {}), global.ng.core, global.ng.cdk.platform, global.rxjs, global.rxjs.operators, global.ng.cdk.coercion));
}(this, (function (exports, i0, i1, rxjs, operators, coercion) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule.decorators = [
            { type: i0.NgModule, args: [{},] }
        ];
        return LayoutModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Global registry for all dynamically-created, injected media queries. */
    var mediaQueriesForWebkitCompatibility = new Set();
    /** Style tag that holds all of the dynamically-created media queries. */
    var mediaQueryStyleNode;
    /** A utility for calling matchMedia queries. */
    var MediaMatcher = /** @class */ (function () {
        function MediaMatcher(_platform) {
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
         */
        MediaMatcher.prototype.matchMedia = function (query) {
            if (this._platform.WEBKIT) {
                createEmptyStyleRule(query);
            }
            return this._matchMedia(query);
        };
        MediaMatcher.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        MediaMatcher.ctorParameters = function () { return [
            { type: i1.Platform }
        ]; };
        MediaMatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaMatcher_Factory() { return new MediaMatcher(i0.ɵɵinject(i1.Platform)); }, token: MediaMatcher, providedIn: "root" });
        return MediaMatcher;
    }());
    /**
     * For Webkit engines that only trigger the MediaQueryListListener when
     * there is at least one CSS selector for the respective media query.
     */
    function createEmptyStyleRule(query) {
        if (mediaQueriesForWebkitCompatibility.has(query)) {
            return;
        }
        try {
            if (!mediaQueryStyleNode) {
                mediaQueryStyleNode = document.createElement('style');
                mediaQueryStyleNode.setAttribute('type', 'text/css');
                document.head.appendChild(mediaQueryStyleNode);
            }
            if (mediaQueryStyleNode.sheet) {
                mediaQueryStyleNode.sheet
                    .insertRule("@media " + query + " {.fx-query-test{ }}", 0);
                mediaQueriesForWebkitCompatibility.add(query);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    /** No-op matchMedia replacement for non-browser platforms. */
    function noopMatchMedia(query) {
        // Use `as any` here to avoid adding additional necessary properties for
        // the noop matcher.
        return {
            matches: query === 'all' || query === '',
            media: query,
            addListener: function () { },
            removeListener: function () { }
        };
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Utility for checking the matching state of @media queries. */
    var BreakpointObserver = /** @class */ (function () {
        function BreakpointObserver(_mediaMatcher, _zone) {
            this._mediaMatcher = _mediaMatcher;
            this._zone = _zone;
            /**  A map of all media queries currently being listened for. */
            this._queries = new Map();
            /** A subject for all other observables to takeUntil based on. */
            this._destroySubject = new rxjs.Subject();
        }
        /** Completes the active subject, signalling to all other observables to complete. */
        BreakpointObserver.prototype.ngOnDestroy = function () {
            this._destroySubject.next();
            this._destroySubject.complete();
        };
        /**
         * Whether one or more media queries match the current viewport size.
         * @param value One or more media queries to check.
         * @returns Whether any of the media queries match.
         */
        BreakpointObserver.prototype.isMatched = function (value) {
            var _this = this;
            var queries = splitQueries(coercion.coerceArray(value));
            return queries.some(function (mediaQuery) { return _this._registerQuery(mediaQuery).mql.matches; });
        };
        /**
         * Gets an observable of results for the given queries that will emit new results for any changes
         * in matching of the given queries.
         * @param value One or more media queries to check.
         * @returns A stream of matches for the given queries.
         */
        BreakpointObserver.prototype.observe = function (value) {
            var _this = this;
            var queries = splitQueries(coercion.coerceArray(value));
            var observables = queries.map(function (query) { return _this._registerQuery(query).observable; });
            var stateObservable = rxjs.combineLatest(observables);
            // Emit the first state immediately, and then debounce the subsequent emissions.
            stateObservable = rxjs.concat(stateObservable.pipe(operators.take(1)), stateObservable.pipe(operators.skip(1), operators.debounceTime(0)));
            return stateObservable.pipe(operators.map(function (breakpointStates) {
                var response = {
                    matches: false,
                    breakpoints: {},
                };
                breakpointStates.forEach(function (state) {
                    response.matches = response.matches || state.matches;
                    response.breakpoints[state.query] = state.matches;
                });
                return response;
            }));
        };
        /** Registers a specific query to be listened for. */
        BreakpointObserver.prototype._registerQuery = function (query) {
            var _this = this;
            // Only set up a new MediaQueryList if it is not already being listened for.
            if (this._queries.has(query)) {
                return this._queries.get(query);
            }
            var mql = this._mediaMatcher.matchMedia(query);
            // Create callback for match changes and add it is as a listener.
            var queryObservable = new rxjs.Observable(function (observer) {
                // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
                // back into the zone because matchMedia is only included in Zone.js by loading the
                // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
                // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
                // patches it.
                var handler = function (e) { return _this._zone.run(function () { return observer.next(e); }); };
                mql.addListener(handler);
                return function () {
                    mql.removeListener(handler);
                };
            }).pipe(operators.startWith(mql), operators.map(function (nextMql) { return ({ query: query, matches: nextMql.matches }); }), operators.takeUntil(this._destroySubject));
            // Add the MediaQueryList to the set of queries.
            var output = { observable: queryObservable, mql: mql };
            this._queries.set(query, output);
            return output;
        };
        BreakpointObserver.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        BreakpointObserver.ctorParameters = function () { return [
            { type: MediaMatcher },
            { type: i0.NgZone }
        ]; };
        BreakpointObserver.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(i0.ɵɵinject(MediaMatcher), i0.ɵɵinject(i0.NgZone)); }, token: BreakpointObserver, providedIn: "root" });
        return BreakpointObserver;
    }());
    /**
     * Split each query string into separate query strings if two queries are provided as comma
     * separated.
     */
    function splitQueries(queries) {
        return queries.map(function (query) { return query.split(','); })
            .reduce(function (a1, a2) { return a1.concat(a2); })
            .map(function (query) { return query.trim(); });
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // PascalCase is being used as Breakpoints is used like an enum.
    // tslint:disable-next-line:variable-name
    var Breakpoints = {
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
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BreakpointObserver = BreakpointObserver;
    exports.Breakpoints = Breakpoints;
    exports.LayoutModule = LayoutModule;
    exports.MediaMatcher = MediaMatcher;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-layout.umd.js.map
