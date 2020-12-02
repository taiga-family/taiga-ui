/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/apply_redirects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModuleRef } from '@angular/core';
import { EmptyError, from, Observable, of } from 'rxjs';
import { catchError, concatAll, every, first, map, mergeMap } from 'rxjs/operators';
import { LoadedRouterConfig } from './config';
import { defaultUrlMatcher, navigationCancelingError, PRIMARY_OUTLET } from './shared';
import { UrlSegmentGroup, UrlTree } from './url_tree';
import { forEach, waitForMap, wrapIntoObservable } from './utils/collection';
import { isCanLoad, isFunction } from './utils/type_guards';
class NoMatch {
    /**
     * @param {?=} segmentGroup
     */
    constructor(segmentGroup) {
        this.segmentGroup = segmentGroup || null;
    }
}
if (false) {
    /** @type {?} */
    NoMatch.prototype.segmentGroup;
}
class AbsoluteRedirect {
    /**
     * @param {?} urlTree
     */
    constructor(urlTree) {
        this.urlTree = urlTree;
    }
}
if (false) {
    /** @type {?} */
    AbsoluteRedirect.prototype.urlTree;
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function noMatch(segmentGroup) {
    return new Observable((/**
     * @param {?} obs
     * @return {?}
     */
    (obs) => obs.error(new NoMatch(segmentGroup))));
}
/**
 * @param {?} newTree
 * @return {?}
 */
function absoluteRedirect(newTree) {
    return new Observable((/**
     * @param {?} obs
     * @return {?}
     */
    (obs) => obs.error(new AbsoluteRedirect(newTree))));
}
/**
 * @param {?} redirectTo
 * @return {?}
 */
function namedOutletsRedirect(redirectTo) {
    return new Observable((/**
     * @param {?} obs
     * @return {?}
     */
    (obs) => obs.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`))));
}
/**
 * @param {?} route
 * @return {?}
 */
function canLoadFails(route) {
    return new Observable((/**
     * @param {?} obs
     * @return {?}
     */
    (obs) => obs.error(navigationCancelingError(`Cannot load children because the guard of the route "path: '${route.path}'" returned false`))));
}
/**
 * Returns the `UrlTree` with the redirection applied.
 *
 * Lazy modules are loaded along the way.
 * @param {?} moduleInjector
 * @param {?} configLoader
 * @param {?} urlSerializer
 * @param {?} urlTree
 * @param {?} config
 * @return {?}
 */
export function applyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
    return new ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config).apply();
}
class ApplyRedirects {
    /**
     * @param {?} moduleInjector
     * @param {?} configLoader
     * @param {?} urlSerializer
     * @param {?} urlTree
     * @param {?} config
     */
    constructor(moduleInjector, configLoader, urlSerializer, urlTree, config) {
        this.configLoader = configLoader;
        this.urlSerializer = urlSerializer;
        this.urlTree = urlTree;
        this.config = config;
        this.allowRedirects = true;
        this.ngModule = moduleInjector.get(NgModuleRef);
    }
    /**
     * @return {?}
     */
    apply() {
        /** @type {?} */
        const expanded$ = this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, PRIMARY_OUTLET);
        /** @type {?} */
        const urlTrees$ = expanded$.pipe(map((/**
         * @param {?} rootSegmentGroup
         * @return {?}
         */
        (rootSegmentGroup) => this.createUrlTree(rootSegmentGroup, this.urlTree.queryParams, (/** @type {?} */ (this.urlTree.fragment))))));
        return urlTrees$.pipe(catchError((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            if (e instanceof AbsoluteRedirect) {
                // after an absolute redirect we do not apply any more redirects!
                this.allowRedirects = false;
                // we need to run matching, so we can fetch all lazy-loaded modules
                return this.match(e.urlTree);
            }
            if (e instanceof NoMatch) {
                throw this.noMatchError(e);
            }
            throw e;
        })));
    }
    /**
     * @private
     * @param {?} tree
     * @return {?}
     */
    match(tree) {
        /** @type {?} */
        const expanded$ = this.expandSegmentGroup(this.ngModule, this.config, tree.root, PRIMARY_OUTLET);
        /** @type {?} */
        const mapped$ = expanded$.pipe(map((/**
         * @param {?} rootSegmentGroup
         * @return {?}
         */
        (rootSegmentGroup) => this.createUrlTree(rootSegmentGroup, tree.queryParams, (/** @type {?} */ (tree.fragment))))));
        return mapped$.pipe(catchError((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            if (e instanceof NoMatch) {
                throw this.noMatchError(e);
            }
            throw e;
        })));
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    noMatchError(e) {
        return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`);
    }
    /**
     * @private
     * @param {?} rootCandidate
     * @param {?} queryParams
     * @param {?} fragment
     * @return {?}
     */
    createUrlTree(rootCandidate, queryParams, fragment) {
        /** @type {?} */
        const root = rootCandidate.segments.length > 0 ?
            new UrlSegmentGroup([], { [PRIMARY_OUTLET]: rootCandidate }) :
            rootCandidate;
        return new UrlTree(root, queryParams, fragment);
    }
    /**
     * @private
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    expandSegmentGroup(ngModule, routes, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.expandChildren(ngModule, routes, segmentGroup)
                .pipe(map((/**
             * @param {?} children
             * @return {?}
             */
            (children) => new UrlSegmentGroup([], children))));
        }
        return this.expandSegment(ngModule, segmentGroup, routes, segmentGroup.segments, outlet, true);
    }
    // Recursively expand segment groups for all the child outlets
    /**
     * @private
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} segmentGroup
     * @return {?}
     */
    expandChildren(ngModule, routes, segmentGroup) {
        return waitForMap(segmentGroup.children, (/**
         * @param {?} childOutlet
         * @param {?} child
         * @return {?}
         */
        (childOutlet, child) => this.expandSegmentGroup(ngModule, routes, child, childOutlet)));
    }
    /**
     * @private
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} segments
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    expandSegment(ngModule, segmentGroup, routes, segments, outlet, allowRedirects) {
        return of(...routes).pipe(map((/**
         * @param {?} r
         * @return {?}
         */
        (r) => {
            /** @type {?} */
            const expanded$ = this.expandSegmentAgainstRoute(ngModule, segmentGroup, routes, r, segments, outlet, allowRedirects);
            return expanded$.pipe(catchError((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                if (e instanceof NoMatch) {
                    // TODO(i): this return type doesn't match the declared Observable<UrlSegmentGroup> -
                    // talk to Jason
                    return (/** @type {?} */ (of(null)));
                }
                throw e;
            })));
        })), concatAll(), first((/**
         * @param {?} s
         * @return {?}
         */
        (s) => !!s)), catchError((/**
         * @param {?} e
         * @param {?} _
         * @return {?}
         */
        (e, _) => {
            if (e instanceof EmptyError || e.name === 'EmptyError') {
                if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                    return of(new UrlSegmentGroup([], {}));
                }
                throw new NoMatch(segmentGroup);
            }
            throw e;
        })));
    }
    /**
     * @private
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    noLeftoversInUrl(segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    }
    /**
     * @private
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} paths
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    expandSegmentAgainstRoute(ngModule, segmentGroup, routes, route, paths, outlet, allowRedirects) {
        if (getOutlet(route) !== outlet) {
            return noMatch(segmentGroup);
        }
        if (route.redirectTo === undefined) {
            return this.matchSegmentAgainstRoute(ngModule, segmentGroup, route, paths);
        }
        if (allowRedirects && this.allowRedirects) {
            return this.expandSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, paths, outlet);
        }
        return noMatch(segmentGroup);
    }
    /**
     * @private
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    expandSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, segments, outlet) {
        if (route.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(ngModule, routes, route, outlet);
        }
        return this.expandRegularSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, segments, outlet);
    }
    /**
     * @private
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} route
     * @param {?} outlet
     * @return {?}
     */
    expandWildCardWithParamsAgainstRouteUsingRedirect(ngModule, routes, route, outlet) {
        /** @type {?} */
        const newTree = this.applyRedirectCommands([], (/** @type {?} */ (route.redirectTo)), {});
        if ((/** @type {?} */ (route.redirectTo)).startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return this.lineralizeSegments(route, newTree).pipe(mergeMap((/**
         * @param {?} newSegments
         * @return {?}
         */
        (newSegments) => {
            /** @type {?} */
            const group = new UrlSegmentGroup(newSegments, {});
            return this.expandSegment(ngModule, group, routes, newSegments, outlet, false);
        })));
    }
    /**
     * @private
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    expandRegularSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, segments, outlet) {
        const { matched, consumedSegments, lastChild, positionalParamSegments } = match(segmentGroup, route, segments);
        if (!matched)
            return noMatch(segmentGroup);
        /** @type {?} */
        const newTree = this.applyRedirectCommands(consumedSegments, (/** @type {?} */ (route.redirectTo)), (/** @type {?} */ (positionalParamSegments)));
        if ((/** @type {?} */ (route.redirectTo)).startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return this.lineralizeSegments(route, newTree).pipe(mergeMap((/**
         * @param {?} newSegments
         * @return {?}
         */
        (newSegments) => {
            return this.expandSegment(ngModule, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
        })));
    }
    /**
     * @private
     * @param {?} ngModule
     * @param {?} rawSegmentGroup
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    matchSegmentAgainstRoute(ngModule, rawSegmentGroup, route, segments) {
        if (route.path === '**') {
            if (route.loadChildren) {
                return this.configLoader.load(ngModule.injector, route)
                    .pipe(map((/**
                 * @param {?} cfg
                 * @return {?}
                 */
                (cfg) => {
                    route._loadedConfig = cfg;
                    return new UrlSegmentGroup(segments, {});
                })));
            }
            return of(new UrlSegmentGroup(segments, {}));
        }
        const { matched, consumedSegments, lastChild } = match(rawSegmentGroup, route, segments);
        if (!matched)
            return noMatch(rawSegmentGroup);
        /** @type {?} */
        const rawSlicedSegments = segments.slice(lastChild);
        /** @type {?} */
        const childConfig$ = this.getChildConfig(ngModule, route, segments);
        return childConfig$.pipe(mergeMap((/**
         * @param {?} routerConfig
         * @return {?}
         */
        (routerConfig) => {
            /** @type {?} */
            const childModule = routerConfig.module;
            /** @type {?} */
            const childConfig = routerConfig.routes;
            const { segmentGroup, slicedSegments } = split(rawSegmentGroup, consumedSegments, rawSlicedSegments, childConfig);
            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                /** @type {?} */
                const expanded$ = this.expandChildren(childModule, childConfig, segmentGroup);
                return expanded$.pipe(map((/**
                 * @param {?} children
                 * @return {?}
                 */
                (children) => new UrlSegmentGroup(consumedSegments, children))));
            }
            if (childConfig.length === 0 && slicedSegments.length === 0) {
                return of(new UrlSegmentGroup(consumedSegments, {}));
            }
            /** @type {?} */
            const expanded$ = this.expandSegment(childModule, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, true);
            return expanded$.pipe(map((/**
             * @param {?} cs
             * @return {?}
             */
            (cs) => new UrlSegmentGroup(consumedSegments.concat(cs.segments), cs.children))));
        })));
    }
    /**
     * @private
     * @param {?} ngModule
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    getChildConfig(ngModule, route, segments) {
        if (route.children) {
            // The children belong to the same module
            return of(new LoadedRouterConfig(route.children, ngModule));
        }
        if (route.loadChildren) {
            // lazy children belong to the loaded module
            if (route._loadedConfig !== undefined) {
                return of(route._loadedConfig);
            }
            return runCanLoadGuard(ngModule.injector, route, segments)
                .pipe(mergeMap((/**
             * @param {?} shouldLoad
             * @return {?}
             */
            (shouldLoad) => {
                if (shouldLoad) {
                    return this.configLoader.load(ngModule.injector, route)
                        .pipe(map((/**
                     * @param {?} cfg
                     * @return {?}
                     */
                    (cfg) => {
                        route._loadedConfig = cfg;
                        return cfg;
                    })));
                }
                return canLoadFails(route);
            })));
        }
        return of(new LoadedRouterConfig([], ngModule));
    }
    /**
     * @private
     * @param {?} route
     * @param {?} urlTree
     * @return {?}
     */
    lineralizeSegments(route, urlTree) {
        /** @type {?} */
        let res = [];
        /** @type {?} */
        let c = urlTree.root;
        while (true) {
            res = res.concat(c.segments);
            if (c.numberOfChildren === 0) {
                return of(res);
            }
            if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
                return namedOutletsRedirect((/** @type {?} */ (route.redirectTo)));
            }
            c = c.children[PRIMARY_OUTLET];
        }
    }
    /**
     * @private
     * @param {?} segments
     * @param {?} redirectTo
     * @param {?} posParams
     * @return {?}
     */
    applyRedirectCommands(segments, redirectTo, posParams) {
        return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    }
    /**
     * @private
     * @param {?} redirectTo
     * @param {?} urlTree
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    applyRedirectCreatreUrlTree(redirectTo, urlTree, segments, posParams) {
        /** @type {?} */
        const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
        return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
    }
    /**
     * @private
     * @param {?} redirectToParams
     * @param {?} actualParams
     * @return {?}
     */
    createQueryParams(redirectToParams, actualParams) {
        /** @type {?} */
        const res = {};
        forEach(redirectToParams, (/**
         * @param {?} v
         * @param {?} k
         * @return {?}
         */
        (v, k) => {
            /** @type {?} */
            const copySourceValue = typeof v === 'string' && v.startsWith(':');
            if (copySourceValue) {
                /** @type {?} */
                const sourceName = v.substring(1);
                res[k] = actualParams[sourceName];
            }
            else {
                res[k] = v;
            }
        }));
        return res;
    }
    /**
     * @private
     * @param {?} redirectTo
     * @param {?} group
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    createSegmentGroup(redirectTo, group, segments, posParams) {
        /** @type {?} */
        const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
        /** @type {?} */
        let children = {};
        forEach(group.children, (/**
         * @param {?} child
         * @param {?} name
         * @return {?}
         */
        (child, name) => {
            children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
        }));
        return new UrlSegmentGroup(updatedSegments, children);
    }
    /**
     * @private
     * @param {?} redirectTo
     * @param {?} redirectToSegments
     * @param {?} actualSegments
     * @param {?} posParams
     * @return {?}
     */
    createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
        return redirectToSegments.map((/**
         * @param {?} s
         * @return {?}
         */
        s => s.path.startsWith(':') ? this.findPosParam(redirectTo, s, posParams) :
            this.findOrReturn(s, actualSegments)));
    }
    /**
     * @private
     * @param {?} redirectTo
     * @param {?} redirectToUrlSegment
     * @param {?} posParams
     * @return {?}
     */
    findPosParam(redirectTo, redirectToUrlSegment, posParams) {
        /** @type {?} */
        const pos = posParams[redirectToUrlSegment.path.substring(1)];
        if (!pos)
            throw new Error(`Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
        return pos;
    }
    /**
     * @private
     * @param {?} redirectToUrlSegment
     * @param {?} actualSegments
     * @return {?}
     */
    findOrReturn(redirectToUrlSegment, actualSegments) {
        /** @type {?} */
        let idx = 0;
        for (const s of actualSegments) {
            if (s.path === redirectToUrlSegment.path) {
                actualSegments.splice(idx);
                return s;
            }
            idx++;
        }
        return redirectToUrlSegment;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApplyRedirects.prototype.allowRedirects;
    /**
     * @type {?}
     * @private
     */
    ApplyRedirects.prototype.ngModule;
    /**
     * @type {?}
     * @private
     */
    ApplyRedirects.prototype.configLoader;
    /**
     * @type {?}
     * @private
     */
    ApplyRedirects.prototype.urlSerializer;
    /**
     * @type {?}
     * @private
     */
    ApplyRedirects.prototype.urlTree;
    /**
     * @type {?}
     * @private
     */
    ApplyRedirects.prototype.config;
}
/**
 * @param {?} moduleInjector
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function runCanLoadGuard(moduleInjector, route, segments) {
    /** @type {?} */
    const canLoad = route.canLoad;
    if (!canLoad || canLoad.length === 0)
        return of(true);
    /** @type {?} */
    const obs = from(canLoad).pipe(map((/**
     * @param {?} injectionToken
     * @return {?}
     */
    (injectionToken) => {
        /** @type {?} */
        const guard = moduleInjector.get(injectionToken);
        /** @type {?} */
        let guardVal;
        if (isCanLoad(guard)) {
            guardVal = guard.canLoad(route, segments);
        }
        else if (isFunction(guard)) {
            guardVal = guard(route, segments);
        }
        else {
            throw new Error('Invalid CanLoad guard');
        }
        return wrapIntoObservable(guardVal);
    })));
    return obs.pipe(concatAll(), every((/**
     * @param {?} result
     * @return {?}
     */
    result => result === true)));
}
/**
 * @param {?} segmentGroup
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function match(segmentGroup, route, segments) {
    if (route.path === '') {
        if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
            return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
    }
    /** @type {?} */
    const matcher = route.matcher || defaultUrlMatcher;
    /** @type {?} */
    const res = matcher(segments, segmentGroup, route);
    if (!res) {
        return {
            matched: false,
            consumedSegments: (/** @type {?} */ ([])),
            lastChild: 0,
            positionalParamSegments: {},
        };
    }
    return {
        matched: true,
        consumedSegments: (/** @type {?} */ (res.consumed)),
        lastChild: (/** @type {?} */ (res.consumed.length)),
        positionalParamSegments: (/** @type {?} */ (res.posParams)),
    };
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} config
 * @return {?}
 */
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        /** @type {?} */
        const s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
    }
    if (slicedSegments.length === 0 &&
        containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
        /** @type {?} */
        const s = new UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments };
    }
    return { segmentGroup, slicedSegments };
}
/**
 * @param {?} s
 * @return {?}
 */
function mergeTrivialChildren(s) {
    if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
        /** @type {?} */
        const c = s.children[PRIMARY_OUTLET];
        return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
    }
    return s;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @param {?} children
 * @return {?}
 */
function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    /** @type {?} */
    const res = {};
    for (const r of routes) {
        if (isEmptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
            res[getOutlet(r)] = new UrlSegmentGroup([], {});
        }
    }
    return Object.assign(Object.assign({}, children), res);
}
/**
 * @param {?} routes
 * @param {?} primarySegmentGroup
 * @return {?}
 */
function createChildrenForEmptySegments(routes, primarySegmentGroup) {
    /** @type {?} */
    const res = {};
    res[PRIMARY_OUTLET] = primarySegmentGroup;
    for (const r of routes) {
        if (r.path === '' && getOutlet(r) !== PRIMARY_OUTLET) {
            res[getOutlet(r)] = new UrlSegmentGroup([], {});
        }
    }
    return res;
}
/**
 * @param {?} segmentGroup
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, segments, routes) {
    return routes.some((/**
     * @param {?} r
     * @return {?}
     */
    r => isEmptyPathRedirect(segmentGroup, segments, r) && getOutlet(r) !== PRIMARY_OUTLET));
}
/**
 * @param {?} segmentGroup
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirects(segmentGroup, segments, routes) {
    return routes.some((/**
     * @param {?} r
     * @return {?}
     */
    r => isEmptyPathRedirect(segmentGroup, segments, r)));
}
/**
 * @param {?} segmentGroup
 * @param {?} segments
 * @param {?} r
 * @return {?}
 */
function isEmptyPathRedirect(segmentGroup, segments, r) {
    if ((segmentGroup.hasChildren() || segments.length > 0) && r.pathMatch === 'full') {
        return false;
    }
    return r.path === '' && r.redirectTo !== undefined;
}
/**
 * @param {?} route
 * @return {?}
 */
function getOutlet(route) {
    return route.outlet || PRIMARY_OUTLET;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHlfcmVkaXJlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9hcHBseV9yZWRpcmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFXLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWxGLE9BQU8sRUFBQyxrQkFBa0IsRUFBZ0IsTUFBTSxVQUFVLENBQUM7QUFHM0QsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHdCQUF3QixFQUFVLGNBQWMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUM3RixPQUFPLEVBQWEsZUFBZSxFQUFpQixPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRTFELE1BQU0sT0FBTzs7OztJQUdYLFlBQVksWUFBOEI7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDO0lBQzNDLENBQUM7Q0FDRjs7O0lBTEMsK0JBQTBDOztBQU81QyxNQUFNLGdCQUFnQjs7OztJQUNwQixZQUFtQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUcsQ0FBQztDQUN4Qzs7O0lBRGEsbUNBQXVCOzs7Ozs7QUFHckMsU0FBUyxPQUFPLENBQUMsWUFBNkI7SUFDNUMsT0FBTyxJQUFJ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QkFBMEIsQ0FDL0IsWUFBNkIsRUFBRSxRQUFzQixFQUFFLE1BQWU7SUFDeEUsT0FBTyxNQUFNLENBQUMsSUFBSTs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO0FBQzFFLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLG1CQUFtQixDQUN4QixZQUE2QixFQUFFLFFBQXNCLEVBQUUsQ0FBUTtJQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDakYsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUM7QUFDckQsQ0FBQzs7Ozs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxLQUFZO0lBQzdCLE9BQU8sS0FBSyxDQUFDLE1BQU0sSUFBSSxjQUFjLENBQUM7QUFDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RvciwgTmdNb2R1bGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFbXB0eUVycm9yLCBmcm9tLCBPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBjb25jYXRBbGwsIGV2ZXJ5LCBmaXJzdCwgbWFwLCBtZXJnZU1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge0xvYWRlZFJvdXRlckNvbmZpZywgUm91dGUsIFJvdXRlc30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtDYW5Mb2FkRm59IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge1JvdXRlckNvbmZpZ0xvYWRlcn0gZnJvbSAnLi9yb3V0ZXJfY29uZmlnX2xvYWRlcic7XG5pbXBvcnQge2RlZmF1bHRVcmxNYXRjaGVyLCBuYXZpZ2F0aW9uQ2FuY2VsaW5nRXJyb3IsIFBhcmFtcywgUFJJTUFSWV9PVVRMRVR9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7VXJsU2VnbWVudCwgVXJsU2VnbWVudEdyb3VwLCBVcmxTZXJpYWxpemVyLCBVcmxUcmVlfSBmcm9tICcuL3VybF90cmVlJztcbmltcG9ydCB7Zm9yRWFjaCwgd2FpdEZvck1hcCwgd3JhcEludG9PYnNlcnZhYmxlfSBmcm9tICcuL3V0aWxzL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtpc0NhbkxvYWQsIGlzRnVuY3Rpb259IGZyb20gJy4vdXRpbHMvdHlwZV9ndWFyZHMnO1xuXG5jbGFzcyBOb01hdGNoIHtcbiAgcHVibGljIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwfG51bGw7XG5cbiAgY29uc3RydWN0b3Ioc2VnbWVudEdyb3VwPzogVXJsU2VnbWVudEdyb3VwKSB7XG4gICAgdGhpcy5zZWdtZW50R3JvdXAgPSBzZWdtZW50R3JvdXAgfHwgbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBBYnNvbHV0ZVJlZGlyZWN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHVybFRyZWU6IFVybFRyZWUpIHt9XG59XG5cbmZ1bmN0aW9uIG5vTWF0Y2goc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXApOiBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4ge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VXJsU2VnbWVudEdyb3VwPihcbiAgICAgIChvYnM6IE9ic2VydmVyPFVybFNlZ21lbnRHcm91cD4pID0+IG9icy5lcnJvcihuZXcgTm9NYXRjaChzZWdtZW50R3JvdXApKSk7XG59XG5cbmZ1bmN0aW9uIGFic29sdXRlUmVkaXJlY3QobmV3VHJlZTogVXJsVHJlZSk6IE9ic2VydmFibGU8YW55PiB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxVcmxTZWdtZW50R3JvdXA+KFxuICAgICAgKG9iczogT2JzZXJ2ZXI8VXJsU2VnbWVudEdyb3VwPikgPT4gb2JzLmVycm9yKG5ldyBBYnNvbHV0ZVJlZGlyZWN0KG5ld1RyZWUpKSk7XG59XG5cbmZ1bmN0aW9uIG5hbWVkT3V0bGV0c1JlZGlyZWN0KHJlZGlyZWN0VG86IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxVcmxTZWdtZW50R3JvdXA+KFxuICAgICAgKG9iczogT2JzZXJ2ZXI8VXJsU2VnbWVudEdyb3VwPikgPT4gb2JzLmVycm9yKG5ldyBFcnJvcihcbiAgICAgICAgICBgT25seSBhYnNvbHV0ZSByZWRpcmVjdHMgY2FuIGhhdmUgbmFtZWQgb3V0bGV0cy4gcmVkaXJlY3RUbzogJyR7cmVkaXJlY3RUb30nYCkpKTtcbn1cblxuZnVuY3Rpb24gY2FuTG9hZEZhaWxzKHJvdXRlOiBSb3V0ZSk6IE9ic2VydmFibGU8TG9hZGVkUm91dGVyQ29uZmlnPiB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxMb2FkZWRSb3V0ZXJDb25maWc+KFxuICAgICAgKG9iczogT2JzZXJ2ZXI8TG9hZGVkUm91dGVyQ29uZmlnPikgPT4gb2JzLmVycm9yKFxuICAgICAgICAgIG5hdmlnYXRpb25DYW5jZWxpbmdFcnJvcihgQ2Fubm90IGxvYWQgY2hpbGRyZW4gYmVjYXVzZSB0aGUgZ3VhcmQgb2YgdGhlIHJvdXRlIFwicGF0aDogJyR7XG4gICAgICAgICAgICAgIHJvdXRlLnBhdGh9J1wiIHJldHVybmVkIGZhbHNlYCkpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBgVXJsVHJlZWAgd2l0aCB0aGUgcmVkaXJlY3Rpb24gYXBwbGllZC5cbiAqXG4gKiBMYXp5IG1vZHVsZXMgYXJlIGxvYWRlZCBhbG9uZyB0aGUgd2F5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWRpcmVjdHMoXG4gICAgbW9kdWxlSW5qZWN0b3I6IEluamVjdG9yLCBjb25maWdMb2FkZXI6IFJvdXRlckNvbmZpZ0xvYWRlciwgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplcixcbiAgICB1cmxUcmVlOiBVcmxUcmVlLCBjb25maWc6IFJvdXRlcyk6IE9ic2VydmFibGU8VXJsVHJlZT4ge1xuICByZXR1cm4gbmV3IEFwcGx5UmVkaXJlY3RzKG1vZHVsZUluamVjdG9yLCBjb25maWdMb2FkZXIsIHVybFNlcmlhbGl6ZXIsIHVybFRyZWUsIGNvbmZpZykuYXBwbHkoKTtcbn1cblxuY2xhc3MgQXBwbHlSZWRpcmVjdHMge1xuICBwcml2YXRlIGFsbG93UmVkaXJlY3RzOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBuZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIG1vZHVsZUluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBjb25maWdMb2FkZXI6IFJvdXRlckNvbmZpZ0xvYWRlcixcbiAgICAgIHByaXZhdGUgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplciwgcHJpdmF0ZSB1cmxUcmVlOiBVcmxUcmVlLCBwcml2YXRlIGNvbmZpZzogUm91dGVzKSB7XG4gICAgdGhpcy5uZ01vZHVsZSA9IG1vZHVsZUluamVjdG9yLmdldChOZ01vZHVsZVJlZik7XG4gIH1cblxuICBhcHBseSgpOiBPYnNlcnZhYmxlPFVybFRyZWU+IHtcbiAgICBjb25zdCBleHBhbmRlZCQgPVxuICAgICAgICB0aGlzLmV4cGFuZFNlZ21lbnRHcm91cCh0aGlzLm5nTW9kdWxlLCB0aGlzLmNvbmZpZywgdGhpcy51cmxUcmVlLnJvb3QsIFBSSU1BUllfT1VUTEVUKTtcbiAgICBjb25zdCB1cmxUcmVlcyQgPSBleHBhbmRlZCQucGlwZShcbiAgICAgICAgbWFwKChyb290U2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXApID0+IHRoaXMuY3JlYXRlVXJsVHJlZShcbiAgICAgICAgICAgICAgICByb290U2VnbWVudEdyb3VwLCB0aGlzLnVybFRyZWUucXVlcnlQYXJhbXMsIHRoaXMudXJsVHJlZS5mcmFnbWVudCEpKSk7XG4gICAgcmV0dXJuIHVybFRyZWVzJC5waXBlKGNhdGNoRXJyb3IoKGU6IGFueSkgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBBYnNvbHV0ZVJlZGlyZWN0KSB7XG4gICAgICAgIC8vIGFmdGVyIGFuIGFic29sdXRlIHJlZGlyZWN0IHdlIGRvIG5vdCBhcHBseSBhbnkgbW9yZSByZWRpcmVjdHMhXG4gICAgICAgIHRoaXMuYWxsb3dSZWRpcmVjdHMgPSBmYWxzZTtcbiAgICAgICAgLy8gd2UgbmVlZCB0byBydW4gbWF0Y2hpbmcsIHNvIHdlIGNhbiBmZXRjaCBhbGwgbGF6eS1sb2FkZWQgbW9kdWxlc1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaChlLnVybFRyZWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIE5vTWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5ub01hdGNoRXJyb3IoZSk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGU7XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaCh0cmVlOiBVcmxUcmVlKTogT2JzZXJ2YWJsZTxVcmxUcmVlPiB7XG4gICAgY29uc3QgZXhwYW5kZWQkID1cbiAgICAgICAgdGhpcy5leHBhbmRTZWdtZW50R3JvdXAodGhpcy5uZ01vZHVsZSwgdGhpcy5jb25maWcsIHRyZWUucm9vdCwgUFJJTUFSWV9PVVRMRVQpO1xuICAgIGNvbnN0IG1hcHBlZCQgPSBleHBhbmRlZCQucGlwZShcbiAgICAgICAgbWFwKChyb290U2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXApID0+XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVVcmxUcmVlKHJvb3RTZWdtZW50R3JvdXAsIHRyZWUucXVlcnlQYXJhbXMsIHRyZWUuZnJhZ21lbnQhKSkpO1xuICAgIHJldHVybiBtYXBwZWQkLnBpcGUoY2F0Y2hFcnJvcigoZTogYW55KTogT2JzZXJ2YWJsZTxVcmxUcmVlPiA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIE5vTWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5ub01hdGNoRXJyb3IoZSk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGU7XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBub01hdGNoRXJyb3IoZTogTm9NYXRjaCk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgQ2Fubm90IG1hdGNoIGFueSByb3V0ZXMuIFVSTCBTZWdtZW50OiAnJHtlLnNlZ21lbnRHcm91cH0nYCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVVybFRyZWUocm9vdENhbmRpZGF0ZTogVXJsU2VnbWVudEdyb3VwLCBxdWVyeVBhcmFtczogUGFyYW1zLCBmcmFnbWVudDogc3RyaW5nKTpcbiAgICAgIFVybFRyZWUge1xuICAgIGNvbnN0IHJvb3QgPSByb290Q2FuZGlkYXRlLnNlZ21lbnRzLmxlbmd0aCA+IDAgP1xuICAgICAgICBuZXcgVXJsU2VnbWVudEdyb3VwKFtdLCB7W1BSSU1BUllfT1VUTEVUXTogcm9vdENhbmRpZGF0ZX0pIDpcbiAgICAgICAgcm9vdENhbmRpZGF0ZTtcbiAgICByZXR1cm4gbmV3IFVybFRyZWUocm9vdCwgcXVlcnlQYXJhbXMsIGZyYWdtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kU2VnbWVudEdyb3VwKFxuICAgICAgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4sIHJvdXRlczogUm91dGVbXSwgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsXG4gICAgICBvdXRsZXQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXJsU2VnbWVudEdyb3VwPiB7XG4gICAgaWYgKHNlZ21lbnRHcm91cC5zZWdtZW50cy5sZW5ndGggPT09IDAgJiYgc2VnbWVudEdyb3VwLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuZENoaWxkcmVuKG5nTW9kdWxlLCByb3V0ZXMsIHNlZ21lbnRHcm91cClcbiAgICAgICAgICAucGlwZShtYXAoKGNoaWxkcmVuOiBhbnkpID0+IG5ldyBVcmxTZWdtZW50R3JvdXAoW10sIGNoaWxkcmVuKSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4cGFuZFNlZ21lbnQobmdNb2R1bGUsIHNlZ21lbnRHcm91cCwgcm91dGVzLCBzZWdtZW50R3JvdXAuc2VnbWVudHMsIG91dGxldCwgdHJ1ZSk7XG4gIH1cblxuICAvLyBSZWN1cnNpdmVseSBleHBhbmQgc2VnbWVudCBncm91cHMgZm9yIGFsbCB0aGUgY2hpbGQgb3V0bGV0c1xuICBwcml2YXRlIGV4cGFuZENoaWxkcmVuKFxuICAgICAgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4sIHJvdXRlczogUm91dGVbXSxcbiAgICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwKTogT2JzZXJ2YWJsZTx7W25hbWU6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0+IHtcbiAgICByZXR1cm4gd2FpdEZvck1hcChcbiAgICAgICAgc2VnbWVudEdyb3VwLmNoaWxkcmVuLFxuICAgICAgICAoY2hpbGRPdXRsZXQsIGNoaWxkKSA9PiB0aGlzLmV4cGFuZFNlZ21lbnRHcm91cChuZ01vZHVsZSwgcm91dGVzLCBjaGlsZCwgY2hpbGRPdXRsZXQpKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kU2VnbWVudChcbiAgICAgIG5nTW9kdWxlOiBOZ01vZHVsZVJlZjxhbnk+LCBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgcm91dGVzOiBSb3V0ZVtdLFxuICAgICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgb3V0bGV0OiBzdHJpbmcsXG4gICAgICBhbGxvd1JlZGlyZWN0czogYm9vbGVhbik6IE9ic2VydmFibGU8VXJsU2VnbWVudEdyb3VwPiB7XG4gICAgcmV0dXJuIG9mKC4uLnJvdXRlcykucGlwZShcbiAgICAgICAgbWFwKChyOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBleHBhbmRlZCQgPSB0aGlzLmV4cGFuZFNlZ21lbnRBZ2FpbnN0Um91dGUoXG4gICAgICAgICAgICAgIG5nTW9kdWxlLCBzZWdtZW50R3JvdXAsIHJvdXRlcywgciwgc2VnbWVudHMsIG91dGxldCwgYWxsb3dSZWRpcmVjdHMpO1xuICAgICAgICAgIHJldHVybiBleHBhbmRlZCQucGlwZShjYXRjaEVycm9yKChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTm9NYXRjaCkge1xuICAgICAgICAgICAgICAvLyBUT0RPKGkpOiB0aGlzIHJldHVybiB0eXBlIGRvZXNuJ3QgbWF0Y2ggdGhlIGRlY2xhcmVkIE9ic2VydmFibGU8VXJsU2VnbWVudEdyb3VwPiAtXG4gICAgICAgICAgICAgIC8vIHRhbGsgdG8gSmFzb25cbiAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpIGFzIGFueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KSxcbiAgICAgICAgY29uY2F0QWxsKCksIGZpcnN0KChzOiBhbnkpID0+ICEhcyksIGNhdGNoRXJyb3IoKGU6IGFueSwgXzogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFbXB0eUVycm9yIHx8IGUubmFtZSA9PT0gJ0VtcHR5RXJyb3InKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub0xlZnRvdmVyc0luVXJsKHNlZ21lbnRHcm91cCwgc2VnbWVudHMsIG91dGxldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBVcmxTZWdtZW50R3JvdXAoW10sIHt9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgTm9NYXRjaChzZWdtZW50R3JvdXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIG5vTGVmdG92ZXJzSW5Vcmwoc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIG91dGxldDogc3RyaW5nKTpcbiAgICAgIGJvb2xlYW4ge1xuICAgIHJldHVybiBzZWdtZW50cy5sZW5ndGggPT09IDAgJiYgIXNlZ21lbnRHcm91cC5jaGlsZHJlbltvdXRsZXRdO1xuICB9XG5cbiAgcHJpdmF0ZSBleHBhbmRTZWdtZW50QWdhaW5zdFJvdXRlKFxuICAgICAgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4sIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCByb3V0ZXM6IFJvdXRlW10sIHJvdXRlOiBSb3V0ZSxcbiAgICAgIHBhdGhzOiBVcmxTZWdtZW50W10sIG91dGxldDogc3RyaW5nLCBhbGxvd1JlZGlyZWN0czogYm9vbGVhbik6IE9ic2VydmFibGU8VXJsU2VnbWVudEdyb3VwPiB7XG4gICAgaWYgKGdldE91dGxldChyb3V0ZSkgIT09IG91dGxldCkge1xuICAgICAgcmV0dXJuIG5vTWF0Y2goc2VnbWVudEdyb3VwKTtcbiAgICB9XG5cbiAgICBpZiAocm91dGUucmVkaXJlY3RUbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXRjaFNlZ21lbnRBZ2FpbnN0Um91dGUobmdNb2R1bGUsIHNlZ21lbnRHcm91cCwgcm91dGUsIHBhdGhzKTtcbiAgICB9XG5cbiAgICBpZiAoYWxsb3dSZWRpcmVjdHMgJiYgdGhpcy5hbGxvd1JlZGlyZWN0cykge1xuICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kU2VnbWVudEFnYWluc3RSb3V0ZVVzaW5nUmVkaXJlY3QoXG4gICAgICAgICAgbmdNb2R1bGUsIHNlZ21lbnRHcm91cCwgcm91dGVzLCByb3V0ZSwgcGF0aHMsIG91dGxldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vTWF0Y2goc2VnbWVudEdyb3VwKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kU2VnbWVudEFnYWluc3RSb3V0ZVVzaW5nUmVkaXJlY3QoXG4gICAgICBuZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55Piwgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHJvdXRlczogUm91dGVbXSwgcm91dGU6IFJvdXRlLFxuICAgICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgb3V0bGV0OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4ge1xuICAgIGlmIChyb3V0ZS5wYXRoID09PSAnKionKSB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbmRXaWxkQ2FyZFdpdGhQYXJhbXNBZ2FpbnN0Um91dGVVc2luZ1JlZGlyZWN0KFxuICAgICAgICAgIG5nTW9kdWxlLCByb3V0ZXMsIHJvdXRlLCBvdXRsZXQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4cGFuZFJlZ3VsYXJTZWdtZW50QWdhaW5zdFJvdXRlVXNpbmdSZWRpcmVjdChcbiAgICAgICAgbmdNb2R1bGUsIHNlZ21lbnRHcm91cCwgcm91dGVzLCByb3V0ZSwgc2VnbWVudHMsIG91dGxldCk7XG4gIH1cblxuICBwcml2YXRlIGV4cGFuZFdpbGRDYXJkV2l0aFBhcmFtc0FnYWluc3RSb3V0ZVVzaW5nUmVkaXJlY3QoXG4gICAgICBuZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55Piwgcm91dGVzOiBSb3V0ZVtdLCByb3V0ZTogUm91dGUsXG4gICAgICBvdXRsZXQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXJsU2VnbWVudEdyb3VwPiB7XG4gICAgY29uc3QgbmV3VHJlZSA9IHRoaXMuYXBwbHlSZWRpcmVjdENvbW1hbmRzKFtdLCByb3V0ZS5yZWRpcmVjdFRvISwge30pO1xuICAgIGlmIChyb3V0ZS5yZWRpcmVjdFRvIS5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHJldHVybiBhYnNvbHV0ZVJlZGlyZWN0KG5ld1RyZWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxpbmVyYWxpemVTZWdtZW50cyhyb3V0ZSwgbmV3VHJlZSkucGlwZShtZXJnZU1hcCgobmV3U2VnbWVudHM6IFVybFNlZ21lbnRbXSkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgVXJsU2VnbWVudEdyb3VwKG5ld1NlZ21lbnRzLCB7fSk7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbmRTZWdtZW50KG5nTW9kdWxlLCBncm91cCwgcm91dGVzLCBuZXdTZWdtZW50cywgb3V0bGV0LCBmYWxzZSk7XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHBhbmRSZWd1bGFyU2VnbWVudEFnYWluc3RSb3V0ZVVzaW5nUmVkaXJlY3QoXG4gICAgICBuZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55Piwgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHJvdXRlczogUm91dGVbXSwgcm91dGU6IFJvdXRlLFxuICAgICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgb3V0bGV0OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4ge1xuICAgIGNvbnN0IHttYXRjaGVkLCBjb25zdW1lZFNlZ21lbnRzLCBsYXN0Q2hpbGQsIHBvc2l0aW9uYWxQYXJhbVNlZ21lbnRzfSA9XG4gICAgICAgIG1hdGNoKHNlZ21lbnRHcm91cCwgcm91dGUsIHNlZ21lbnRzKTtcbiAgICBpZiAoIW1hdGNoZWQpIHJldHVybiBub01hdGNoKHNlZ21lbnRHcm91cCk7XG5cbiAgICBjb25zdCBuZXdUcmVlID0gdGhpcy5hcHBseVJlZGlyZWN0Q29tbWFuZHMoXG4gICAgICAgIGNvbnN1bWVkU2VnbWVudHMsIHJvdXRlLnJlZGlyZWN0VG8hLCA8YW55PnBvc2l0aW9uYWxQYXJhbVNlZ21lbnRzKTtcbiAgICBpZiAocm91dGUucmVkaXJlY3RUbyEuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICByZXR1cm4gYWJzb2x1dGVSZWRpcmVjdChuZXdUcmVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5saW5lcmFsaXplU2VnbWVudHMocm91dGUsIG5ld1RyZWUpLnBpcGUobWVyZ2VNYXAoKG5ld1NlZ21lbnRzOiBVcmxTZWdtZW50W10pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuZFNlZ21lbnQoXG4gICAgICAgICAgbmdNb2R1bGUsIHNlZ21lbnRHcm91cCwgcm91dGVzLCBuZXdTZWdtZW50cy5jb25jYXQoc2VnbWVudHMuc2xpY2UobGFzdENoaWxkKSksIG91dGxldCxcbiAgICAgICAgICBmYWxzZSk7XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaFNlZ21lbnRBZ2FpbnN0Um91dGUoXG4gICAgICBuZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55PiwgcmF3U2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHJvdXRlOiBSb3V0ZSxcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4ge1xuICAgIGlmIChyb3V0ZS5wYXRoID09PSAnKionKSB7XG4gICAgICBpZiAocm91dGUubG9hZENoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ0xvYWRlci5sb2FkKG5nTW9kdWxlLmluamVjdG9yLCByb3V0ZSlcbiAgICAgICAgICAgIC5waXBlKG1hcCgoY2ZnOiBMb2FkZWRSb3V0ZXJDb25maWcpID0+IHtcbiAgICAgICAgICAgICAgcm91dGUuX2xvYWRlZENvbmZpZyA9IGNmZztcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVcmxTZWdtZW50R3JvdXAoc2VnbWVudHMsIHt9KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9mKG5ldyBVcmxTZWdtZW50R3JvdXAoc2VnbWVudHMsIHt9KSk7XG4gICAgfVxuXG4gICAgY29uc3Qge21hdGNoZWQsIGNvbnN1bWVkU2VnbWVudHMsIGxhc3RDaGlsZH0gPSBtYXRjaChyYXdTZWdtZW50R3JvdXAsIHJvdXRlLCBzZWdtZW50cyk7XG4gICAgaWYgKCFtYXRjaGVkKSByZXR1cm4gbm9NYXRjaChyYXdTZWdtZW50R3JvdXApO1xuXG4gICAgY29uc3QgcmF3U2xpY2VkU2VnbWVudHMgPSBzZWdtZW50cy5zbGljZShsYXN0Q2hpbGQpO1xuICAgIGNvbnN0IGNoaWxkQ29uZmlnJCA9IHRoaXMuZ2V0Q2hpbGRDb25maWcobmdNb2R1bGUsIHJvdXRlLCBzZWdtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRDb25maWckLnBpcGUobWVyZ2VNYXAoKHJvdXRlckNvbmZpZzogTG9hZGVkUm91dGVyQ29uZmlnKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE1vZHVsZSA9IHJvdXRlckNvbmZpZy5tb2R1bGU7XG4gICAgICBjb25zdCBjaGlsZENvbmZpZyA9IHJvdXRlckNvbmZpZy5yb3V0ZXM7XG5cbiAgICAgIGNvbnN0IHtzZWdtZW50R3JvdXAsIHNsaWNlZFNlZ21lbnRzfSA9XG4gICAgICAgICAgc3BsaXQocmF3U2VnbWVudEdyb3VwLCBjb25zdW1lZFNlZ21lbnRzLCByYXdTbGljZWRTZWdtZW50cywgY2hpbGRDb25maWcpO1xuXG4gICAgICBpZiAoc2xpY2VkU2VnbWVudHMubGVuZ3RoID09PSAwICYmIHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkJCA9IHRoaXMuZXhwYW5kQ2hpbGRyZW4oY2hpbGRNb2R1bGUsIGNoaWxkQ29uZmlnLCBzZWdtZW50R3JvdXApO1xuICAgICAgICByZXR1cm4gZXhwYW5kZWQkLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGNoaWxkcmVuOiBhbnkpID0+IG5ldyBVcmxTZWdtZW50R3JvdXAoY29uc3VtZWRTZWdtZW50cywgY2hpbGRyZW4pKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZENvbmZpZy5sZW5ndGggPT09IDAgJiYgc2xpY2VkU2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvZihuZXcgVXJsU2VnbWVudEdyb3VwKGNvbnN1bWVkU2VnbWVudHMsIHt9KSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGFuZGVkJCA9IHRoaXMuZXhwYW5kU2VnbWVudChcbiAgICAgICAgICBjaGlsZE1vZHVsZSwgc2VnbWVudEdyb3VwLCBjaGlsZENvbmZpZywgc2xpY2VkU2VnbWVudHMsIFBSSU1BUllfT1VUTEVULCB0cnVlKTtcbiAgICAgIHJldHVybiBleHBhbmRlZCQucGlwZShcbiAgICAgICAgICBtYXAoKGNzOiBVcmxTZWdtZW50R3JvdXApID0+XG4gICAgICAgICAgICAgICAgICBuZXcgVXJsU2VnbWVudEdyb3VwKGNvbnN1bWVkU2VnbWVudHMuY29uY2F0KGNzLnNlZ21lbnRzKSwgY3MuY2hpbGRyZW4pKSk7XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGlsZENvbmZpZyhuZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55Piwgcm91dGU6IFJvdXRlLCBzZWdtZW50czogVXJsU2VnbWVudFtdKTpcbiAgICAgIE9ic2VydmFibGU8TG9hZGVkUm91dGVyQ29uZmlnPiB7XG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgICAvLyBUaGUgY2hpbGRyZW4gYmVsb25nIHRvIHRoZSBzYW1lIG1vZHVsZVxuICAgICAgcmV0dXJuIG9mKG5ldyBMb2FkZWRSb3V0ZXJDb25maWcocm91dGUuY2hpbGRyZW4sIG5nTW9kdWxlKSk7XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlLmxvYWRDaGlsZHJlbikge1xuICAgICAgLy8gbGF6eSBjaGlsZHJlbiBiZWxvbmcgdG8gdGhlIGxvYWRlZCBtb2R1bGVcbiAgICAgIGlmIChyb3V0ZS5fbG9hZGVkQ29uZmlnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG9mKHJvdXRlLl9sb2FkZWRDb25maWcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcnVuQ2FuTG9hZEd1YXJkKG5nTW9kdWxlLmluamVjdG9yLCByb3V0ZSwgc2VnbWVudHMpXG4gICAgICAgICAgLnBpcGUobWVyZ2VNYXAoKHNob3VsZExvYWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChzaG91bGRMb2FkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ0xvYWRlci5sb2FkKG5nTW9kdWxlLmluamVjdG9yLCByb3V0ZSlcbiAgICAgICAgICAgICAgICAgIC5waXBlKG1hcCgoY2ZnOiBMb2FkZWRSb3V0ZXJDb25maWcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUuX2xvYWRlZENvbmZpZyA9IGNmZztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNmZztcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYW5Mb2FkRmFpbHMocm91dGUpO1xuICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2YobmV3IExvYWRlZFJvdXRlckNvbmZpZyhbXSwgbmdNb2R1bGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgbGluZXJhbGl6ZVNlZ21lbnRzKHJvdXRlOiBSb3V0ZSwgdXJsVHJlZTogVXJsVHJlZSk6IE9ic2VydmFibGU8VXJsU2VnbWVudFtdPiB7XG4gICAgbGV0IHJlczogVXJsU2VnbWVudFtdID0gW107XG4gICAgbGV0IGMgPSB1cmxUcmVlLnJvb3Q7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHJlcyA9IHJlcy5jb25jYXQoYy5zZWdtZW50cyk7XG4gICAgICBpZiAoYy5udW1iZXJPZkNoaWxkcmVuID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvZihyZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYy5udW1iZXJPZkNoaWxkcmVuID4gMSB8fCAhYy5jaGlsZHJlbltQUklNQVJZX09VVExFVF0pIHtcbiAgICAgICAgcmV0dXJuIG5hbWVkT3V0bGV0c1JlZGlyZWN0KHJvdXRlLnJlZGlyZWN0VG8hKTtcbiAgICAgIH1cblxuICAgICAgYyA9IGMuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlSZWRpcmVjdENvbW1hbmRzKFxuICAgICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgcmVkaXJlY3RUbzogc3RyaW5nLCBwb3NQYXJhbXM6IHtbazogc3RyaW5nXTogVXJsU2VnbWVudH0pOiBVcmxUcmVlIHtcbiAgICByZXR1cm4gdGhpcy5hcHBseVJlZGlyZWN0Q3JlYXRyZVVybFRyZWUoXG4gICAgICAgIHJlZGlyZWN0VG8sIHRoaXMudXJsU2VyaWFsaXplci5wYXJzZShyZWRpcmVjdFRvKSwgc2VnbWVudHMsIHBvc1BhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UmVkaXJlY3RDcmVhdHJlVXJsVHJlZShcbiAgICAgIHJlZGlyZWN0VG86IHN0cmluZywgdXJsVHJlZTogVXJsVHJlZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICAgIHBvc1BhcmFtczoge1trOiBzdHJpbmddOiBVcmxTZWdtZW50fSk6IFVybFRyZWUge1xuICAgIGNvbnN0IG5ld1Jvb3QgPSB0aGlzLmNyZWF0ZVNlZ21lbnRHcm91cChyZWRpcmVjdFRvLCB1cmxUcmVlLnJvb3QsIHNlZ21lbnRzLCBwb3NQYXJhbXMpO1xuICAgIHJldHVybiBuZXcgVXJsVHJlZShcbiAgICAgICAgbmV3Um9vdCwgdGhpcy5jcmVhdGVRdWVyeVBhcmFtcyh1cmxUcmVlLnF1ZXJ5UGFyYW1zLCB0aGlzLnVybFRyZWUucXVlcnlQYXJhbXMpLFxuICAgICAgICB1cmxUcmVlLmZyYWdtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUXVlcnlQYXJhbXMocmVkaXJlY3RUb1BhcmFtczogUGFyYW1zLCBhY3R1YWxQYXJhbXM6IFBhcmFtcyk6IFBhcmFtcyB7XG4gICAgY29uc3QgcmVzOiBQYXJhbXMgPSB7fTtcbiAgICBmb3JFYWNoKHJlZGlyZWN0VG9QYXJhbXMsICh2OiBhbnksIGs6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgY29weVNvdXJjZVZhbHVlID0gdHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHYuc3RhcnRzV2l0aCgnOicpO1xuICAgICAgaWYgKGNvcHlTb3VyY2VWYWx1ZSkge1xuICAgICAgICBjb25zdCBzb3VyY2VOYW1lID0gdi5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHJlc1trXSA9IGFjdHVhbFBhcmFtc1tzb3VyY2VOYW1lXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1trXSA9IHY7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2VnbWVudEdyb3VwKFxuICAgICAgcmVkaXJlY3RUbzogc3RyaW5nLCBncm91cDogVXJsU2VnbWVudEdyb3VwLCBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgcG9zUGFyYW1zOiB7W2s6IHN0cmluZ106IFVybFNlZ21lbnR9KTogVXJsU2VnbWVudEdyb3VwIHtcbiAgICBjb25zdCB1cGRhdGVkU2VnbWVudHMgPSB0aGlzLmNyZWF0ZVNlZ21lbnRzKHJlZGlyZWN0VG8sIGdyb3VwLnNlZ21lbnRzLCBzZWdtZW50cywgcG9zUGFyYW1zKTtcblxuICAgIGxldCBjaGlsZHJlbjoge1tuOiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXB9ID0ge307XG4gICAgZm9yRWFjaChncm91cC5jaGlsZHJlbiwgKGNoaWxkOiBVcmxTZWdtZW50R3JvdXAsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY2hpbGRyZW5bbmFtZV0gPSB0aGlzLmNyZWF0ZVNlZ21lbnRHcm91cChyZWRpcmVjdFRvLCBjaGlsZCwgc2VnbWVudHMsIHBvc1BhcmFtcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFVybFNlZ21lbnRHcm91cCh1cGRhdGVkU2VnbWVudHMsIGNoaWxkcmVuKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2VnbWVudHMoXG4gICAgICByZWRpcmVjdFRvOiBzdHJpbmcsIHJlZGlyZWN0VG9TZWdtZW50czogVXJsU2VnbWVudFtdLCBhY3R1YWxTZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgcG9zUGFyYW1zOiB7W2s6IHN0cmluZ106IFVybFNlZ21lbnR9KTogVXJsU2VnbWVudFtdIHtcbiAgICByZXR1cm4gcmVkaXJlY3RUb1NlZ21lbnRzLm1hcChcbiAgICAgICAgcyA9PiBzLnBhdGguc3RhcnRzV2l0aCgnOicpID8gdGhpcy5maW5kUG9zUGFyYW0ocmVkaXJlY3RUbywgcywgcG9zUGFyYW1zKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZE9yUmV0dXJuKHMsIGFjdHVhbFNlZ21lbnRzKSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQb3NQYXJhbShcbiAgICAgIHJlZGlyZWN0VG86IHN0cmluZywgcmVkaXJlY3RUb1VybFNlZ21lbnQ6IFVybFNlZ21lbnQsXG4gICAgICBwb3NQYXJhbXM6IHtbazogc3RyaW5nXTogVXJsU2VnbWVudH0pOiBVcmxTZWdtZW50IHtcbiAgICBjb25zdCBwb3MgPSBwb3NQYXJhbXNbcmVkaXJlY3RUb1VybFNlZ21lbnQucGF0aC5zdWJzdHJpbmcoMSldO1xuICAgIGlmICghcG9zKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDYW5ub3QgcmVkaXJlY3QgdG8gJyR7cmVkaXJlY3RUb30nLiBDYW5ub3QgZmluZCAnJHtyZWRpcmVjdFRvVXJsU2VnbWVudC5wYXRofScuYCk7XG4gICAgcmV0dXJuIHBvcztcbiAgfVxuXG4gIHByaXZhdGUgZmluZE9yUmV0dXJuKHJlZGlyZWN0VG9VcmxTZWdtZW50OiBVcmxTZWdtZW50LCBhY3R1YWxTZWdtZW50czogVXJsU2VnbWVudFtdKTogVXJsU2VnbWVudCB7XG4gICAgbGV0IGlkeCA9IDA7XG4gICAgZm9yIChjb25zdCBzIG9mIGFjdHVhbFNlZ21lbnRzKSB7XG4gICAgICBpZiAocy5wYXRoID09PSByZWRpcmVjdFRvVXJsU2VnbWVudC5wYXRoKSB7XG4gICAgICAgIGFjdHVhbFNlZ21lbnRzLnNwbGljZShpZHgpO1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH1cbiAgICAgIGlkeCsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVkaXJlY3RUb1VybFNlZ21lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuQ2FuTG9hZEd1YXJkKFxuICAgIG1vZHVsZUluamVjdG9yOiBJbmplY3Rvciwgcm91dGU6IFJvdXRlLCBzZWdtZW50czogVXJsU2VnbWVudFtdKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gIGNvbnN0IGNhbkxvYWQgPSByb3V0ZS5jYW5Mb2FkO1xuICBpZiAoIWNhbkxvYWQgfHwgY2FuTG9hZC5sZW5ndGggPT09IDApIHJldHVybiBvZih0cnVlKTtcblxuICBjb25zdCBvYnMgPSBmcm9tKGNhbkxvYWQpLnBpcGUobWFwKChpbmplY3Rpb25Ub2tlbjogYW55KSA9PiB7XG4gICAgY29uc3QgZ3VhcmQgPSBtb2R1bGVJbmplY3Rvci5nZXQoaW5qZWN0aW9uVG9rZW4pO1xuICAgIGxldCBndWFyZFZhbDtcbiAgICBpZiAoaXNDYW5Mb2FkKGd1YXJkKSkge1xuICAgICAgZ3VhcmRWYWwgPSBndWFyZC5jYW5Mb2FkKHJvdXRlLCBzZWdtZW50cyk7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uPENhbkxvYWRGbj4oZ3VhcmQpKSB7XG4gICAgICBndWFyZFZhbCA9IGd1YXJkKHJvdXRlLCBzZWdtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDYW5Mb2FkIGd1YXJkJyk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwSW50b09ic2VydmFibGUoZ3VhcmRWYWwpO1xuICB9KSk7XG5cbiAgcmV0dXJuIG9icy5waXBlKGNvbmNhdEFsbCgpLCBldmVyeShyZXN1bHQgPT4gcmVzdWx0ID09PSB0cnVlKSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoKHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCByb3V0ZTogUm91dGUsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10pOiB7XG4gIG1hdGNoZWQ6IGJvb2xlYW4sXG4gIGNvbnN1bWVkU2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgbGFzdENoaWxkOiBudW1iZXIsXG4gIHBvc2l0aW9uYWxQYXJhbVNlZ21lbnRzOiB7W2s6IHN0cmluZ106IFVybFNlZ21lbnR9XG59IHtcbiAgaWYgKHJvdXRlLnBhdGggPT09ICcnKSB7XG4gICAgaWYgKChyb3V0ZS5wYXRoTWF0Y2ggPT09ICdmdWxsJykgJiYgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHNlZ21lbnRzLmxlbmd0aCA+IDApKSB7XG4gICAgICByZXR1cm4ge21hdGNoZWQ6IGZhbHNlLCBjb25zdW1lZFNlZ21lbnRzOiBbXSwgbGFzdENoaWxkOiAwLCBwb3NpdGlvbmFsUGFyYW1TZWdtZW50czoge319O1xuICAgIH1cblxuICAgIHJldHVybiB7bWF0Y2hlZDogdHJ1ZSwgY29uc3VtZWRTZWdtZW50czogW10sIGxhc3RDaGlsZDogMCwgcG9zaXRpb25hbFBhcmFtU2VnbWVudHM6IHt9fTtcbiAgfVxuXG4gIGNvbnN0IG1hdGNoZXIgPSByb3V0ZS5tYXRjaGVyIHx8IGRlZmF1bHRVcmxNYXRjaGVyO1xuICBjb25zdCByZXMgPSBtYXRjaGVyKHNlZ21lbnRzLCBzZWdtZW50R3JvdXAsIHJvdXRlKTtcblxuICBpZiAoIXJlcykge1xuICAgIHJldHVybiB7XG4gICAgICBtYXRjaGVkOiBmYWxzZSxcbiAgICAgIGNvbnN1bWVkU2VnbWVudHM6IDxhbnlbXT5bXSxcbiAgICAgIGxhc3RDaGlsZDogMCxcbiAgICAgIHBvc2l0aW9uYWxQYXJhbVNlZ21lbnRzOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVkOiB0cnVlLFxuICAgIGNvbnN1bWVkU2VnbWVudHM6IHJlcy5jb25zdW1lZCEsXG4gICAgbGFzdENoaWxkOiByZXMuY29uc3VtZWQubGVuZ3RoISxcbiAgICBwb3NpdGlvbmFsUGFyYW1TZWdtZW50czogcmVzLnBvc1BhcmFtcyEsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNwbGl0KFxuICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBjb25zdW1lZFNlZ21lbnRzOiBVcmxTZWdtZW50W10sIHNsaWNlZFNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgY29uZmlnOiBSb3V0ZVtdKSB7XG4gIGlmIChzbGljZWRTZWdtZW50cy5sZW5ndGggPiAwICYmXG4gICAgICBjb250YWluc0VtcHR5UGF0aFJlZGlyZWN0c1dpdGhOYW1lZE91dGxldHMoc2VnbWVudEdyb3VwLCBzbGljZWRTZWdtZW50cywgY29uZmlnKSkge1xuICAgIGNvbnN0IHMgPSBuZXcgVXJsU2VnbWVudEdyb3VwKFxuICAgICAgICBjb25zdW1lZFNlZ21lbnRzLFxuICAgICAgICBjcmVhdGVDaGlsZHJlbkZvckVtcHR5U2VnbWVudHMoXG4gICAgICAgICAgICBjb25maWcsIG5ldyBVcmxTZWdtZW50R3JvdXAoc2xpY2VkU2VnbWVudHMsIHNlZ21lbnRHcm91cC5jaGlsZHJlbikpKTtcbiAgICByZXR1cm4ge3NlZ21lbnRHcm91cDogbWVyZ2VUcml2aWFsQ2hpbGRyZW4ocyksIHNsaWNlZFNlZ21lbnRzOiBbXX07XG4gIH1cblxuICBpZiAoc2xpY2VkU2VnbWVudHMubGVuZ3RoID09PSAwICYmXG4gICAgICBjb250YWluc0VtcHR5UGF0aFJlZGlyZWN0cyhzZWdtZW50R3JvdXAsIHNsaWNlZFNlZ21lbnRzLCBjb25maWcpKSB7XG4gICAgY29uc3QgcyA9IG5ldyBVcmxTZWdtZW50R3JvdXAoXG4gICAgICAgIHNlZ21lbnRHcm91cC5zZWdtZW50cyxcbiAgICAgICAgYWRkRW1wdHlTZWdtZW50c1RvQ2hpbGRyZW5JZk5lZWRlZChcbiAgICAgICAgICAgIHNlZ21lbnRHcm91cCwgc2xpY2VkU2VnbWVudHMsIGNvbmZpZywgc2VnbWVudEdyb3VwLmNoaWxkcmVuKSk7XG4gICAgcmV0dXJuIHtzZWdtZW50R3JvdXA6IG1lcmdlVHJpdmlhbENoaWxkcmVuKHMpLCBzbGljZWRTZWdtZW50c307XG4gIH1cblxuICByZXR1cm4ge3NlZ21lbnRHcm91cCwgc2xpY2VkU2VnbWVudHN9O1xufVxuXG5mdW5jdGlvbiBtZXJnZVRyaXZpYWxDaGlsZHJlbihzOiBVcmxTZWdtZW50R3JvdXApOiBVcmxTZWdtZW50R3JvdXAge1xuICBpZiAocy5udW1iZXJPZkNoaWxkcmVuID09PSAxICYmIHMuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdKSB7XG4gICAgY29uc3QgYyA9IHMuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdO1xuICAgIHJldHVybiBuZXcgVXJsU2VnbWVudEdyb3VwKHMuc2VnbWVudHMuY29uY2F0KGMuc2VnbWVudHMpLCBjLmNoaWxkcmVuKTtcbiAgfVxuXG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiBhZGRFbXB0eVNlZ21lbnRzVG9DaGlsZHJlbklmTmVlZGVkKFxuICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBzbGljZWRTZWdtZW50czogVXJsU2VnbWVudFtdLCByb3V0ZXM6IFJvdXRlW10sXG4gICAgY2hpbGRyZW46IHtbbmFtZTogc3RyaW5nXTogVXJsU2VnbWVudEdyb3VwfSk6IHtbbmFtZTogc3RyaW5nXTogVXJsU2VnbWVudEdyb3VwfSB7XG4gIGNvbnN0IHJlczoge1tuYW1lOiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXB9ID0ge307XG4gIGZvciAoY29uc3QgciBvZiByb3V0ZXMpIHtcbiAgICBpZiAoaXNFbXB0eVBhdGhSZWRpcmVjdChzZWdtZW50R3JvdXAsIHNsaWNlZFNlZ21lbnRzLCByKSAmJiAhY2hpbGRyZW5bZ2V0T3V0bGV0KHIpXSkge1xuICAgICAgcmVzW2dldE91dGxldChyKV0gPSBuZXcgVXJsU2VnbWVudEdyb3VwKFtdLCB7fSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7Li4uY2hpbGRyZW4sIC4uLnJlc307XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoaWxkcmVuRm9yRW1wdHlTZWdtZW50cyhcbiAgICByb3V0ZXM6IFJvdXRlW10sIHByaW1hcnlTZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCk6IHtbbmFtZTogc3RyaW5nXTogVXJsU2VnbWVudEdyb3VwfSB7XG4gIGNvbnN0IHJlczoge1tuYW1lOiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXB9ID0ge307XG4gIHJlc1tQUklNQVJZX09VVExFVF0gPSBwcmltYXJ5U2VnbWVudEdyb3VwO1xuICBmb3IgKGNvbnN0IHIgb2Ygcm91dGVzKSB7XG4gICAgaWYgKHIucGF0aCA9PT0gJycgJiYgZ2V0T3V0bGV0KHIpICE9PSBQUklNQVJZX09VVExFVCkge1xuICAgICAgcmVzW2dldE91dGxldChyKV0gPSBuZXcgVXJsU2VnbWVudEdyb3VwKFtdLCB7fSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zRW1wdHlQYXRoUmVkaXJlY3RzV2l0aE5hbWVkT3V0bGV0cyhcbiAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgcm91dGVzOiBSb3V0ZVtdKTogYm9vbGVhbiB7XG4gIHJldHVybiByb3V0ZXMuc29tZShcbiAgICAgIHIgPT4gaXNFbXB0eVBhdGhSZWRpcmVjdChzZWdtZW50R3JvdXAsIHNlZ21lbnRzLCByKSAmJiBnZXRPdXRsZXQocikgIT09IFBSSU1BUllfT1VUTEVUKTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNFbXB0eVBhdGhSZWRpcmVjdHMoXG4gICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIHJvdXRlczogUm91dGVbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gcm91dGVzLnNvbWUociA9PiBpc0VtcHR5UGF0aFJlZGlyZWN0KHNlZ21lbnRHcm91cCwgc2VnbWVudHMsIHIpKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eVBhdGhSZWRpcmVjdChcbiAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgcjogUm91dGUpOiBib29sZWFuIHtcbiAgaWYgKChzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSB8fCBzZWdtZW50cy5sZW5ndGggPiAwKSAmJiByLnBhdGhNYXRjaCA9PT0gJ2Z1bGwnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHIucGF0aCA9PT0gJycgJiYgci5yZWRpcmVjdFRvICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGdldE91dGxldChyb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICByZXR1cm4gcm91dGUub3V0bGV0IHx8IFBSSU1BUllfT1VUTEVUO1xufVxuIl19