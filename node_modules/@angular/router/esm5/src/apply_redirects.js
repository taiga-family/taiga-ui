/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign, __read, __spread, __values } from "tslib";
import { NgModuleRef } from '@angular/core';
import { EmptyError, from, Observable, of } from 'rxjs';
import { catchError, concatAll, every, first, map, mergeMap } from 'rxjs/operators';
import { LoadedRouterConfig } from './config';
import { defaultUrlMatcher, navigationCancelingError, PRIMARY_OUTLET } from './shared';
import { UrlSegmentGroup, UrlTree } from './url_tree';
import { forEach, waitForMap, wrapIntoObservable } from './utils/collection';
import { isCanLoad, isFunction } from './utils/type_guards';
var NoMatch = /** @class */ (function () {
    function NoMatch(segmentGroup) {
        this.segmentGroup = segmentGroup || null;
    }
    return NoMatch;
}());
var AbsoluteRedirect = /** @class */ (function () {
    function AbsoluteRedirect(urlTree) {
        this.urlTree = urlTree;
    }
    return AbsoluteRedirect;
}());
function noMatch(segmentGroup) {
    return new Observable(function (obs) { return obs.error(new NoMatch(segmentGroup)); });
}
function absoluteRedirect(newTree) {
    return new Observable(function (obs) { return obs.error(new AbsoluteRedirect(newTree)); });
}
function namedOutletsRedirect(redirectTo) {
    return new Observable(function (obs) { return obs.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + redirectTo + "'")); });
}
function canLoadFails(route) {
    return new Observable(function (obs) { return obs.error(navigationCancelingError("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
}
/**
 * Returns the `UrlTree` with the redirection applied.
 *
 * Lazy modules are loaded along the way.
 */
export function applyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
    return new ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config).apply();
}
var ApplyRedirects = /** @class */ (function () {
    function ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
        this.configLoader = configLoader;
        this.urlSerializer = urlSerializer;
        this.urlTree = urlTree;
        this.config = config;
        this.allowRedirects = true;
        this.ngModule = moduleInjector.get(NgModuleRef);
    }
    ApplyRedirects.prototype.apply = function () {
        var _this = this;
        var expanded$ = this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, PRIMARY_OUTLET);
        var urlTrees$ = expanded$.pipe(map(function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup, _this.urlTree.queryParams, _this.urlTree.fragment); }));
        return urlTrees$.pipe(catchError(function (e) {
            if (e instanceof AbsoluteRedirect) {
                // after an absolute redirect we do not apply any more redirects!
                _this.allowRedirects = false;
                // we need to run matching, so we can fetch all lazy-loaded modules
                return _this.match(e.urlTree);
            }
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            throw e;
        }));
    };
    ApplyRedirects.prototype.match = function (tree) {
        var _this = this;
        var expanded$ = this.expandSegmentGroup(this.ngModule, this.config, tree.root, PRIMARY_OUTLET);
        var mapped$ = expanded$.pipe(map(function (rootSegmentGroup) {
            return _this.createUrlTree(rootSegmentGroup, tree.queryParams, tree.fragment);
        }));
        return mapped$.pipe(catchError(function (e) {
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            throw e;
        }));
    };
    ApplyRedirects.prototype.noMatchError = function (e) {
        return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'");
    };
    ApplyRedirects.prototype.createUrlTree = function (rootCandidate, queryParams, fragment) {
        var _a;
        var root = rootCandidate.segments.length > 0 ?
            new UrlSegmentGroup([], (_a = {}, _a[PRIMARY_OUTLET] = rootCandidate, _a)) :
            rootCandidate;
        return new UrlTree(root, queryParams, fragment);
    };
    ApplyRedirects.prototype.expandSegmentGroup = function (ngModule, routes, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.expandChildren(ngModule, routes, segmentGroup)
                .pipe(map(function (children) { return new UrlSegmentGroup([], children); }));
        }
        return this.expandSegment(ngModule, segmentGroup, routes, segmentGroup.segments, outlet, true);
    };
    // Recursively expand segment groups for all the child outlets
    ApplyRedirects.prototype.expandChildren = function (ngModule, routes, segmentGroup) {
        var _this = this;
        return waitForMap(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(ngModule, routes, child, childOutlet); });
    };
    ApplyRedirects.prototype.expandSegment = function (ngModule, segmentGroup, routes, segments, outlet, allowRedirects) {
        var _this = this;
        return of.apply(void 0, __spread(routes)).pipe(map(function (r) {
            var expanded$ = _this.expandSegmentAgainstRoute(ngModule, segmentGroup, routes, r, segments, outlet, allowRedirects);
            return expanded$.pipe(catchError(function (e) {
                if (e instanceof NoMatch) {
                    // TODO(i): this return type doesn't match the declared Observable<UrlSegmentGroup> -
                    // talk to Jason
                    return of(null);
                }
                throw e;
            }));
        }), concatAll(), first(function (s) { return !!s; }), catchError(function (e, _) {
            if (e instanceof EmptyError || e.name === 'EmptyError') {
                if (_this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                    return of(new UrlSegmentGroup([], {}));
                }
                throw new NoMatch(segmentGroup);
            }
            throw e;
        }));
    };
    ApplyRedirects.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    ApplyRedirects.prototype.expandSegmentAgainstRoute = function (ngModule, segmentGroup, routes, route, paths, outlet, allowRedirects) {
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
    };
    ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function (ngModule, segmentGroup, routes, route, segments, outlet) {
        if (route.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(ngModule, routes, route, outlet);
        }
        return this.expandRegularSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, segments, outlet);
    };
    ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (ngModule, routes, route, outlet) {
        var _this = this;
        var newTree = this.applyRedirectCommands([], route.redirectTo, {});
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return this.lineralizeSegments(route, newTree).pipe(mergeMap(function (newSegments) {
            var group = new UrlSegmentGroup(newSegments, {});
            return _this.expandSegment(ngModule, group, routes, newSegments, outlet, false);
        }));
    };
    ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (ngModule, segmentGroup, routes, route, segments, outlet) {
        var _this = this;
        var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
        if (!matched)
            return noMatch(segmentGroup);
        var newTree = this.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return this.lineralizeSegments(route, newTree).pipe(mergeMap(function (newSegments) {
            return _this.expandSegment(ngModule, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
        }));
    };
    ApplyRedirects.prototype.matchSegmentAgainstRoute = function (ngModule, rawSegmentGroup, route, segments) {
        var _this = this;
        if (route.path === '**') {
            if (route.loadChildren) {
                return this.configLoader.load(ngModule.injector, route)
                    .pipe(map(function (cfg) {
                    route._loadedConfig = cfg;
                    return new UrlSegmentGroup(segments, {});
                }));
            }
            return of(new UrlSegmentGroup(segments, {}));
        }
        var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild;
        if (!matched)
            return noMatch(rawSegmentGroup);
        var rawSlicedSegments = segments.slice(lastChild);
        var childConfig$ = this.getChildConfig(ngModule, route, segments);
        return childConfig$.pipe(mergeMap(function (routerConfig) {
            var childModule = routerConfig.module;
            var childConfig = routerConfig.routes;
            var _a = split(rawSegmentGroup, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                var expanded$_1 = _this.expandChildren(childModule, childConfig, segmentGroup);
                return expanded$_1.pipe(map(function (children) { return new UrlSegmentGroup(consumedSegments, children); }));
            }
            if (childConfig.length === 0 && slicedSegments.length === 0) {
                return of(new UrlSegmentGroup(consumedSegments, {}));
            }
            var expanded$ = _this.expandSegment(childModule, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, true);
            return expanded$.pipe(map(function (cs) {
                return new UrlSegmentGroup(consumedSegments.concat(cs.segments), cs.children);
            }));
        }));
    };
    ApplyRedirects.prototype.getChildConfig = function (ngModule, route, segments) {
        var _this = this;
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
                .pipe(mergeMap(function (shouldLoad) {
                if (shouldLoad) {
                    return _this.configLoader.load(ngModule.injector, route)
                        .pipe(map(function (cfg) {
                        route._loadedConfig = cfg;
                        return cfg;
                    }));
                }
                return canLoadFails(route);
            }));
        }
        return of(new LoadedRouterConfig([], ngModule));
    };
    ApplyRedirects.prototype.lineralizeSegments = function (route, urlTree) {
        var res = [];
        var c = urlTree.root;
        while (true) {
            res = res.concat(c.segments);
            if (c.numberOfChildren === 0) {
                return of(res);
            }
            if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
                return namedOutletsRedirect(route.redirectTo);
            }
            c = c.children[PRIMARY_OUTLET];
        }
    };
    ApplyRedirects.prototype.applyRedirectCommands = function (segments, redirectTo, posParams) {
        return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    };
    ApplyRedirects.prototype.applyRedirectCreatreUrlTree = function (redirectTo, urlTree, segments, posParams) {
        var newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
        return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
    };
    ApplyRedirects.prototype.createQueryParams = function (redirectToParams, actualParams) {
        var res = {};
        forEach(redirectToParams, function (v, k) {
            var copySourceValue = typeof v === 'string' && v.startsWith(':');
            if (copySourceValue) {
                var sourceName = v.substring(1);
                res[k] = actualParams[sourceName];
            }
            else {
                res[k] = v;
            }
        });
        return res;
    };
    ApplyRedirects.prototype.createSegmentGroup = function (redirectTo, group, segments, posParams) {
        var _this = this;
        var updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
        var children = {};
        forEach(group.children, function (child, name) {
            children[name] = _this.createSegmentGroup(redirectTo, child, segments, posParams);
        });
        return new UrlSegmentGroup(updatedSegments, children);
    };
    ApplyRedirects.prototype.createSegments = function (redirectTo, redirectToSegments, actualSegments, posParams) {
        var _this = this;
        return redirectToSegments.map(function (s) { return s.path.startsWith(':') ? _this.findPosParam(redirectTo, s, posParams) :
            _this.findOrReturn(s, actualSegments); });
    };
    ApplyRedirects.prototype.findPosParam = function (redirectTo, redirectToUrlSegment, posParams) {
        var pos = posParams[redirectToUrlSegment.path.substring(1)];
        if (!pos)
            throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + redirectToUrlSegment.path + "'.");
        return pos;
    };
    ApplyRedirects.prototype.findOrReturn = function (redirectToUrlSegment, actualSegments) {
        var e_1, _a;
        var idx = 0;
        try {
            for (var actualSegments_1 = __values(actualSegments), actualSegments_1_1 = actualSegments_1.next(); !actualSegments_1_1.done; actualSegments_1_1 = actualSegments_1.next()) {
                var s = actualSegments_1_1.value;
                if (s.path === redirectToUrlSegment.path) {
                    actualSegments.splice(idx);
                    return s;
                }
                idx++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (actualSegments_1_1 && !actualSegments_1_1.done && (_a = actualSegments_1.return)) _a.call(actualSegments_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return redirectToUrlSegment;
    };
    return ApplyRedirects;
}());
function runCanLoadGuard(moduleInjector, route, segments) {
    var canLoad = route.canLoad;
    if (!canLoad || canLoad.length === 0)
        return of(true);
    var obs = from(canLoad).pipe(map(function (injectionToken) {
        var guard = moduleInjector.get(injectionToken);
        var guardVal;
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
    }));
    return obs.pipe(concatAll(), every(function (result) { return result === true; }));
}
function match(segmentGroup, route, segments) {
    if (route.path === '') {
        if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
            return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
    }
    var matcher = route.matcher || defaultUrlMatcher;
    var res = matcher(segments, segmentGroup, route);
    if (!res) {
        return {
            matched: false,
            consumedSegments: [],
            lastChild: 0,
            positionalParamSegments: {},
        };
    }
    return {
        matched: true,
        consumedSegments: res.consumed,
        lastChild: res.consumed.length,
        positionalParamSegments: res.posParams,
    };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
    }
    if (slicedSegments.length === 0 &&
        containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
        var s = new UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
    }
    return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
}
function mergeTrivialChildren(s) {
    if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
        var c = s.children[PRIMARY_OUTLET];
        return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
    }
    return s;
}
function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var e_2, _a;
    var res = {};
    try {
        for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
            var r = routes_1_1.value;
            if (isEmptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
                res[getOutlet(r)] = new UrlSegmentGroup([], {});
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return __assign(__assign({}, children), res);
}
function createChildrenForEmptySegments(routes, primarySegmentGroup) {
    var e_3, _a;
    var res = {};
    res[PRIMARY_OUTLET] = primarySegmentGroup;
    try {
        for (var routes_2 = __values(routes), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
            var r = routes_2_1.value;
            if (r.path === '' && getOutlet(r) !== PRIMARY_OUTLET) {
                res[getOutlet(r)] = new UrlSegmentGroup([], {});
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (routes_2_1 && !routes_2_1.done && (_a = routes_2.return)) _a.call(routes_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return res;
}
function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, segments, routes) {
    return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r) && getOutlet(r) !== PRIMARY_OUTLET; });
}
function containsEmptyPathRedirects(segmentGroup, segments, routes) {
    return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r); });
}
function isEmptyPathRedirect(segmentGroup, segments, r) {
    if ((segmentGroup.hasChildren() || segments.length > 0) && r.pathMatch === 'full') {
        return false;
    }
    return r.path === '' && r.redirectTo !== undefined;
}
function getOutlet(route) {
    return route.outlet || PRIMARY_OUTLET;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHlfcmVkaXJlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9hcHBseV9yZWRpcmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBVyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFZLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNoRSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRixPQUFPLEVBQUMsa0JBQWtCLEVBQWdCLE1BQU0sVUFBVSxDQUFDO0FBRzNELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBVSxjQUFjLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDN0YsT0FBTyxFQUFhLGVBQWUsRUFBaUIsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDM0UsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUUxRDtJQUdFLGlCQUFZLFlBQThCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFORCxJQU1DO0FBRUQ7SUFDRSwwQkFBbUIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFHLENBQUM7SUFDekMsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUVELFNBQVMsT0FBTyxDQUFDLFlBQTZCO0lBQzVDLE9BQU8sSUFBSSxVQUFVLENBQ2pCLFVBQUMsR0FBOEIsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO0FBQ2hGLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLE9BQWdCO0lBQ3hDLE9BQU8sSUFBSSxVQUFVLENBQ2pCLFVBQUMsR0FBOEIsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsVUFBa0I7SUFDOUMsT0FBTyxJQUFJLFVBQVUsQ0FDakIsVUFBQyxHQUE4QixJQUFLLE9BQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FDbkQsa0VBQWdFLFVBQVUsTUFBRyxDQUFDLENBQUMsRUFEL0MsQ0FDK0MsQ0FBQyxDQUFDO0FBQzNGLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFZO0lBQ2hDLE9BQU8sSUFBSSxVQUFVLENBQ2pCLFVBQUMsR0FBaUMsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLENBQzVDLHdCQUF3QixDQUFDLGtFQUNyQixLQUFLLENBQUMsSUFBSSx1QkFBbUIsQ0FBQyxDQUFDLEVBRkEsQ0FFQSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUMxQixjQUF3QixFQUFFLFlBQWdDLEVBQUUsYUFBNEIsRUFDeEYsT0FBZ0IsRUFBRSxNQUFjO0lBQ2xDLE9BQU8sSUFBSSxjQUFjLENBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xHLENBQUM7QUFFRDtJQUlFLHdCQUNJLGNBQXdCLEVBQVUsWUFBZ0MsRUFDMUQsYUFBNEIsRUFBVSxPQUFnQixFQUFVLE1BQWM7UUFEcEQsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQzFELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMbEYsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFNckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBb0JDO1FBbkJDLElBQU0sU0FBUyxHQUNYLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDM0YsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FDNUIsR0FBRyxDQUFDLFVBQUMsZ0JBQWlDLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUNyRCxnQkFBZ0IsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVMsQ0FBQyxFQURoQyxDQUNnQyxDQUFDLENBQUMsQ0FBQztRQUNsRixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsQ0FBTTtZQUN0QyxJQUFJLENBQUMsWUFBWSxnQkFBZ0IsRUFBRTtnQkFDakMsaUVBQWlFO2dCQUNqRSxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsbUVBQW1FO2dCQUNuRSxPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlCO1lBRUQsSUFBSSxDQUFDLFlBQVksT0FBTyxFQUFFO2dCQUN4QixNQUFNLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7WUFFRCxNQUFNLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU8sOEJBQUssR0FBYixVQUFjLElBQWE7UUFBM0IsaUJBYUM7UUFaQyxJQUFNLFNBQVMsR0FDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbkYsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FDMUIsR0FBRyxDQUFDLFVBQUMsZ0JBQWlDO1lBQzlCLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFTLENBQUM7UUFBdEUsQ0FBc0UsQ0FBQyxDQUFDLENBQUM7UUFDckYsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLENBQU07WUFDcEMsSUFBSSxDQUFDLFlBQVksT0FBTyxFQUFFO2dCQUN4QixNQUFNLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7WUFFRCxNQUFNLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU8scUNBQVksR0FBcEIsVUFBcUIsQ0FBVTtRQUM3QixPQUFPLElBQUksS0FBSyxDQUFDLDRDQUEwQyxDQUFDLENBQUMsWUFBWSxNQUFHLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU8sc0NBQWEsR0FBckIsVUFBc0IsYUFBOEIsRUFBRSxXQUFtQixFQUFFLFFBQWdCOztRQUV6RixJQUFNLElBQUksR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLGVBQWUsQ0FBQyxFQUFFLFlBQUcsR0FBQyxjQUFjLElBQUcsYUFBYSxNQUFFLENBQUMsQ0FBQztZQUM1RCxhQUFhLENBQUM7UUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTywyQ0FBa0IsR0FBMUIsVUFDSSxRQUEwQixFQUFFLE1BQWUsRUFBRSxZQUE2QixFQUMxRSxNQUFjO1FBQ2hCLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNwRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUM7aUJBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFhLElBQUssT0FBQSxJQUFJLGVBQWUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCw4REFBOEQ7SUFDdEQsdUNBQWMsR0FBdEIsVUFDSSxRQUEwQixFQUFFLE1BQWUsRUFDM0MsWUFBNkI7UUFGakMsaUJBTUM7UUFIQyxPQUFPLFVBQVUsQ0FDYixZQUFZLENBQUMsUUFBUSxFQUNyQixVQUFDLFdBQVcsRUFBRSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQTdELENBQTZELENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRU8sc0NBQWEsR0FBckIsVUFDSSxRQUEwQixFQUFFLFlBQTZCLEVBQUUsTUFBZSxFQUMxRSxRQUFzQixFQUFFLE1BQWMsRUFDdEMsY0FBdUI7UUFIM0IsaUJBMEJDO1FBdEJDLE9BQU8sRUFBRSx3QkFBSSxNQUFNLEdBQUUsSUFBSSxDQUNyQixHQUFHLENBQUMsVUFBQyxDQUFNO1lBQ1QsSUFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLHlCQUF5QixDQUM1QyxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN6RSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsQ0FBTTtnQkFDdEMsSUFBSSxDQUFDLFlBQVksT0FBTyxFQUFFO29CQUN4QixxRkFBcUY7b0JBQ3JGLGdCQUFnQjtvQkFDaEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFRLENBQUM7aUJBQ3hCO2dCQUNELE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxFQUNGLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07WUFDN0QsSUFBSSxDQUFDLFlBQVksVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO2dCQUN0RCxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUN6RCxPQUFPLEVBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDeEM7Z0JBQ0QsTUFBTSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNqQztZQUNELE1BQU0sQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTyx5Q0FBZ0IsR0FBeEIsVUFBeUIsWUFBNkIsRUFBRSxRQUFzQixFQUFFLE1BQWM7UUFFNUYsT0FBTyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVPLGtEQUF5QixHQUFqQyxVQUNJLFFBQTBCLEVBQUUsWUFBNkIsRUFBRSxNQUFlLEVBQUUsS0FBWSxFQUN4RixLQUFtQixFQUFFLE1BQWMsRUFBRSxjQUF1QjtRQUM5RCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDL0IsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVFO1FBRUQsSUFBSSxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxzQ0FBc0MsQ0FDOUMsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzRDtRQUVELE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTywrREFBc0MsR0FBOUMsVUFDSSxRQUEwQixFQUFFLFlBQTZCLEVBQUUsTUFBZSxFQUFFLEtBQVksRUFDeEYsUUFBc0IsRUFBRSxNQUFjO1FBQ3hDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsaURBQWlELENBQ3pELFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxJQUFJLENBQUMsNkNBQTZDLENBQ3JELFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVPLDBFQUFpRCxHQUF6RCxVQUNJLFFBQTBCLEVBQUUsTUFBZSxFQUFFLEtBQVksRUFDekQsTUFBYztRQUZsQixpQkFZQztRQVRDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLEtBQUssQ0FBQyxVQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFDLFdBQXlCO1lBQ3JGLElBQU0sS0FBSyxHQUFHLElBQUksZUFBZSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRCxPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLHNFQUE2QyxHQUFyRCxVQUNJLFFBQTBCLEVBQUUsWUFBNkIsRUFBRSxNQUFlLEVBQUUsS0FBWSxFQUN4RixRQUFzQixFQUFFLE1BQWM7UUFGMUMsaUJBa0JDO1FBZk8sSUFBQSx5Q0FDa0MsRUFEakMsb0JBQU8sRUFBRSxzQ0FBZ0IsRUFBRSx3QkFBUyxFQUFFLG9EQUNMLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUzQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQ3RDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFXLEVBQU8sdUJBQXVCLENBQUMsQ0FBQztRQUN2RSxJQUFJLEtBQUssQ0FBQyxVQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFDLFdBQXlCO1lBQ3JGLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FDckIsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUNyRixLQUFLLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU8saURBQXdCLEdBQWhDLFVBQ0ksUUFBMEIsRUFBRSxlQUFnQyxFQUFFLEtBQVksRUFDMUUsUUFBc0I7UUFGMUIsaUJBNENDO1FBekNDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO3FCQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBdUI7b0JBQ2hDLEtBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO29CQUMxQixPQUFPLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNUO1lBRUQsT0FBTyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFFSyxJQUFBLDRDQUFnRixFQUEvRSxvQkFBTyxFQUFFLHNDQUFnQixFQUFFLHdCQUFvRCxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFOUMsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQUMsWUFBZ0M7WUFDakUsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN4QyxJQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBRWxDLElBQUEsNkVBQ3NFLEVBRHJFLDhCQUFZLEVBQUUsa0NBQ3VELENBQUM7WUFFN0UsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQzdELElBQU0sV0FBUyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDOUUsT0FBTyxXQUFTLENBQUMsSUFBSSxDQUNqQixHQUFHLENBQUMsVUFBQyxRQUFhLElBQUssT0FBQSxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDLENBQUM7YUFDOUU7WUFFRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMzRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3REO1lBRUQsSUFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FDaEMsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQ2pCLEdBQUcsQ0FBQyxVQUFDLEVBQW1CO2dCQUNoQixPQUFBLElBQUksZUFBZSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUF0RSxDQUFzRSxDQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLHVDQUFjLEdBQXRCLFVBQXVCLFFBQTBCLEVBQUUsS0FBWSxFQUFFLFFBQXNCO1FBQXZGLGlCQTJCQztRQXpCQyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDbEIseUNBQXlDO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQ3RCLDRDQUE0QztZQUM1QyxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEM7WUFFRCxPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7aUJBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBQyxVQUFtQjtnQkFDakMsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzt5QkFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQXVCO3dCQUNoQyxLQUFLLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQzt3QkFDMUIsT0FBTyxHQUFHLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDVDtnQkFDRCxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTywyQ0FBa0IsR0FBMUIsVUFBMkIsS0FBWSxFQUFFLE9BQWdCO1FBQ3ZELElBQUksR0FBRyxHQUFpQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNyQixPQUFPLElBQUksRUFBRTtZQUNYLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDekQsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsVUFBVyxDQUFDLENBQUM7YUFDaEQ7WUFFRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFTyw4Q0FBcUIsR0FBN0IsVUFDSSxRQUFzQixFQUFFLFVBQWtCLEVBQUUsU0FBb0M7UUFDbEYsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLG9EQUEyQixHQUFuQyxVQUNJLFVBQWtCLEVBQUUsT0FBZ0IsRUFBRSxRQUFzQixFQUM1RCxTQUFvQztRQUN0QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZGLE9BQU8sSUFBSSxPQUFPLENBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQzlFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sMENBQWlCLEdBQXpCLFVBQTBCLGdCQUF3QixFQUFFLFlBQW9CO1FBQ3RFLElBQU0sR0FBRyxHQUFXLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxDQUFNLEVBQUUsQ0FBUztZQUMxQyxJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ1o7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVPLDJDQUFrQixHQUExQixVQUNJLFVBQWtCLEVBQUUsS0FBc0IsRUFBRSxRQUFzQixFQUNsRSxTQUFvQztRQUZ4QyxpQkFXQztRQVJDLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTdGLElBQUksUUFBUSxHQUFtQyxFQUFFLENBQUM7UUFDbEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFzQixFQUFFLElBQVk7WUFDM0QsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxlQUFlLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTyx1Q0FBYyxHQUF0QixVQUNJLFVBQWtCLEVBQUUsa0JBQWdDLEVBQUUsY0FBNEIsRUFDbEYsU0FBb0M7UUFGeEMsaUJBTUM7UUFIQyxPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FDekIsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLEVBRDdELENBQzZELENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU8scUNBQVksR0FBcEIsVUFDSSxVQUFrQixFQUFFLG9CQUFnQyxFQUNwRCxTQUFvQztRQUN0QyxJQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxHQUFHO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FDWCx5QkFBdUIsVUFBVSx3QkFBbUIsb0JBQW9CLENBQUMsSUFBSSxPQUFJLENBQUMsQ0FBQztRQUN6RixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTyxxQ0FBWSxHQUFwQixVQUFxQixvQkFBZ0MsRUFBRSxjQUE0Qjs7UUFDakYsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDOztZQUNaLEtBQWdCLElBQUEsbUJBQUEsU0FBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQTNCLElBQU0sQ0FBQywyQkFBQTtnQkFDVixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssb0JBQW9CLENBQUMsSUFBSSxFQUFFO29CQUN4QyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixPQUFPLENBQUMsQ0FBQztpQkFDVjtnQkFDRCxHQUFHLEVBQUUsQ0FBQzthQUNQOzs7Ozs7Ozs7UUFDRCxPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFwVkQsSUFvVkM7QUFFRCxTQUFTLGVBQWUsQ0FDcEIsY0FBd0IsRUFBRSxLQUFZLEVBQUUsUUFBc0I7SUFDaEUsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM5QixJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsY0FBbUI7UUFDckQsSUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRCxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQzthQUFNLElBQUksVUFBVSxDQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxLQUFLLElBQUksRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxZQUE2QixFQUFFLEtBQVksRUFBRSxRQUFzQjtJQU1oRixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDdkYsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxFQUFDLENBQUM7U0FDMUY7UUFFRCxPQUFPLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxFQUFFLEVBQUMsQ0FBQztLQUN6RjtJQUVELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksaUJBQWlCLENBQUM7SUFDbkQsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFbkQsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU87WUFDTCxPQUFPLEVBQUUsS0FBSztZQUNkLGdCQUFnQixFQUFTLEVBQUU7WUFDM0IsU0FBUyxFQUFFLENBQUM7WUFDWix1QkFBdUIsRUFBRSxFQUFFO1NBQzVCLENBQUM7S0FDSDtJQUVELE9BQU87UUFDTCxPQUFPLEVBQUUsSUFBSTtRQUNiLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxRQUFTO1FBQy9CLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU87UUFDL0IsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLFNBQVU7S0FDeEMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FDVixZQUE2QixFQUFFLGdCQUE4QixFQUFFLGNBQTRCLEVBQzNGLE1BQWU7SUFDakIsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDekIsMENBQTBDLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNwRixJQUFNLENBQUMsR0FBRyxJQUFJLGVBQWUsQ0FDekIsZ0JBQWdCLEVBQ2hCLDhCQUE4QixDQUMxQixNQUFNLEVBQUUsSUFBSSxlQUFlLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsT0FBTyxFQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFDLENBQUM7S0FDcEU7SUFFRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUMzQiwwQkFBMEIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ3BFLElBQU0sQ0FBQyxHQUFHLElBQUksZUFBZSxDQUN6QixZQUFZLENBQUMsUUFBUSxFQUNyQixrQ0FBa0MsQ0FDOUIsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxFQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLGdCQUFBLEVBQUMsQ0FBQztLQUNoRTtJQUVELE9BQU8sRUFBQyxZQUFZLGNBQUEsRUFBRSxjQUFjLGdCQUFBLEVBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxDQUFrQjtJQUM5QyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUMxRCxJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN2RTtJQUVELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELFNBQVMsa0NBQWtDLENBQ3ZDLFlBQTZCLEVBQUUsY0FBNEIsRUFBRSxNQUFlLEVBQzVFLFFBQTJDOztJQUM3QyxJQUFNLEdBQUcsR0FBc0MsRUFBRSxDQUFDOztRQUNsRCxLQUFnQixJQUFBLFdBQUEsU0FBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7WUFBbkIsSUFBTSxDQUFDLG1CQUFBO1lBQ1YsSUFBSSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7Ozs7Ozs7OztJQUNELDZCQUFXLFFBQVEsR0FBSyxHQUFHLEVBQUU7QUFDL0IsQ0FBQztBQUVELFNBQVMsOEJBQThCLENBQ25DLE1BQWUsRUFBRSxtQkFBb0M7O0lBQ3ZELElBQU0sR0FBRyxHQUFzQyxFQUFFLENBQUM7SUFDbEQsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDOztRQUMxQyxLQUFnQixJQUFBLFdBQUEsU0FBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7WUFBbkIsSUFBTSxDQUFDLG1CQUFBO1lBQ1YsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxFQUFFO2dCQUNwRCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7Ozs7Ozs7OztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsMENBQTBDLENBQy9DLFlBQTZCLEVBQUUsUUFBc0IsRUFBRSxNQUFlO0lBQ3hFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FDZCxVQUFBLENBQUMsSUFBSSxPQUFBLG1CQUFtQixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsRUFBakYsQ0FBaUYsQ0FBQyxDQUFDO0FBQzlGLENBQUM7QUFFRCxTQUFTLDBCQUEwQixDQUMvQixZQUE2QixFQUFFLFFBQXNCLEVBQUUsTUFBZTtJQUN4RSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQUM7QUFDMUUsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQ3hCLFlBQTZCLEVBQUUsUUFBc0IsRUFBRSxDQUFRO0lBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtRQUNqRixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQztBQUNyRCxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsS0FBWTtJQUM3QixPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3IsIE5nTW9kdWxlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RW1wdHlFcnJvciwgZnJvbSwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgY29uY2F0QWxsLCBldmVyeSwgZmlyc3QsIG1hcCwgbWVyZ2VNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtMb2FkZWRSb3V0ZXJDb25maWcsIFJvdXRlLCBSb3V0ZXN9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7Q2FuTG9hZEZufSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtSb3V0ZXJDb25maWdMb2FkZXJ9IGZyb20gJy4vcm91dGVyX2NvbmZpZ19sb2FkZXInO1xuaW1wb3J0IHtkZWZhdWx0VXJsTWF0Y2hlciwgbmF2aWdhdGlvbkNhbmNlbGluZ0Vycm9yLCBQYXJhbXMsIFBSSU1BUllfT1VUTEVUfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQge1VybFNlZ21lbnQsIFVybFNlZ21lbnRHcm91cCwgVXJsU2VyaWFsaXplciwgVXJsVHJlZX0gZnJvbSAnLi91cmxfdHJlZSc7XG5pbXBvcnQge2ZvckVhY2gsIHdhaXRGb3JNYXAsIHdyYXBJbnRvT2JzZXJ2YWJsZX0gZnJvbSAnLi91dGlscy9jb2xsZWN0aW9uJztcbmltcG9ydCB7aXNDYW5Mb2FkLCBpc0Z1bmN0aW9ufSBmcm9tICcuL3V0aWxzL3R5cGVfZ3VhcmRzJztcblxuY2xhc3MgTm9NYXRjaCB7XG4gIHB1YmxpYyBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cHxudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHNlZ21lbnRHcm91cD86IFVybFNlZ21lbnRHcm91cCkge1xuICAgIHRoaXMuc2VnbWVudEdyb3VwID0gc2VnbWVudEdyb3VwIHx8IG51bGw7XG4gIH1cbn1cblxuY2xhc3MgQWJzb2x1dGVSZWRpcmVjdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1cmxUcmVlOiBVcmxUcmVlKSB7fVxufVxuXG5mdW5jdGlvbiBub01hdGNoKHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwKTogT2JzZXJ2YWJsZTxVcmxTZWdtZW50R3JvdXA+IHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4oXG4gICAgICAob2JzOiBPYnNlcnZlcjxVcmxTZWdtZW50R3JvdXA+KSA9PiBvYnMuZXJyb3IobmV3IE5vTWF0Y2goc2VnbWVudEdyb3VwKSkpO1xufVxuXG5mdW5jdGlvbiBhYnNvbHV0ZVJlZGlyZWN0KG5ld1RyZWU6IFVybFRyZWUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VXJsU2VnbWVudEdyb3VwPihcbiAgICAgIChvYnM6IE9ic2VydmVyPFVybFNlZ21lbnRHcm91cD4pID0+IG9icy5lcnJvcihuZXcgQWJzb2x1dGVSZWRpcmVjdChuZXdUcmVlKSkpO1xufVxuXG5mdW5jdGlvbiBuYW1lZE91dGxldHNSZWRpcmVjdChyZWRpcmVjdFRvOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VXJsU2VnbWVudEdyb3VwPihcbiAgICAgIChvYnM6IE9ic2VydmVyPFVybFNlZ21lbnRHcm91cD4pID0+IG9icy5lcnJvcihuZXcgRXJyb3IoXG4gICAgICAgICAgYE9ubHkgYWJzb2x1dGUgcmVkaXJlY3RzIGNhbiBoYXZlIG5hbWVkIG91dGxldHMuIHJlZGlyZWN0VG86ICcke3JlZGlyZWN0VG99J2ApKSk7XG59XG5cbmZ1bmN0aW9uIGNhbkxvYWRGYWlscyhyb3V0ZTogUm91dGUpOiBPYnNlcnZhYmxlPExvYWRlZFJvdXRlckNvbmZpZz4ge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8TG9hZGVkUm91dGVyQ29uZmlnPihcbiAgICAgIChvYnM6IE9ic2VydmVyPExvYWRlZFJvdXRlckNvbmZpZz4pID0+IG9icy5lcnJvcihcbiAgICAgICAgICBuYXZpZ2F0aW9uQ2FuY2VsaW5nRXJyb3IoYENhbm5vdCBsb2FkIGNoaWxkcmVuIGJlY2F1c2UgdGhlIGd1YXJkIG9mIHRoZSByb3V0ZSBcInBhdGg6ICcke1xuICAgICAgICAgICAgICByb3V0ZS5wYXRofSdcIiByZXR1cm5lZCBmYWxzZWApKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYFVybFRyZWVgIHdpdGggdGhlIHJlZGlyZWN0aW9uIGFwcGxpZWQuXG4gKlxuICogTGF6eSBtb2R1bGVzIGFyZSBsb2FkZWQgYWxvbmcgdGhlIHdheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVkaXJlY3RzKFxuICAgIG1vZHVsZUluamVjdG9yOiBJbmplY3RvciwgY29uZmlnTG9hZGVyOiBSb3V0ZXJDb25maWdMb2FkZXIsIHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsXG4gICAgdXJsVHJlZTogVXJsVHJlZSwgY29uZmlnOiBSb3V0ZXMpOiBPYnNlcnZhYmxlPFVybFRyZWU+IHtcbiAgcmV0dXJuIG5ldyBBcHBseVJlZGlyZWN0cyhtb2R1bGVJbmplY3RvciwgY29uZmlnTG9hZGVyLCB1cmxTZXJpYWxpemVyLCB1cmxUcmVlLCBjb25maWcpLmFwcGx5KCk7XG59XG5cbmNsYXNzIEFwcGx5UmVkaXJlY3RzIHtcbiAgcHJpdmF0ZSBhbGxvd1JlZGlyZWN0czogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgY29uZmlnTG9hZGVyOiBSb3V0ZXJDb25maWdMb2FkZXIsXG4gICAgICBwcml2YXRlIHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsIHByaXZhdGUgdXJsVHJlZTogVXJsVHJlZSwgcHJpdmF0ZSBjb25maWc6IFJvdXRlcykge1xuICAgIHRoaXMubmdNb2R1bGUgPSBtb2R1bGVJbmplY3Rvci5nZXQoTmdNb2R1bGVSZWYpO1xuICB9XG5cbiAgYXBwbHkoKTogT2JzZXJ2YWJsZTxVcmxUcmVlPiB7XG4gICAgY29uc3QgZXhwYW5kZWQkID1cbiAgICAgICAgdGhpcy5leHBhbmRTZWdtZW50R3JvdXAodGhpcy5uZ01vZHVsZSwgdGhpcy5jb25maWcsIHRoaXMudXJsVHJlZS5yb290LCBQUklNQVJZX09VVExFVCk7XG4gICAgY29uc3QgdXJsVHJlZXMkID0gZXhwYW5kZWQkLnBpcGUoXG4gICAgICAgIG1hcCgocm9vdFNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwKSA9PiB0aGlzLmNyZWF0ZVVybFRyZWUoXG4gICAgICAgICAgICAgICAgcm9vdFNlZ21lbnRHcm91cCwgdGhpcy51cmxUcmVlLnF1ZXJ5UGFyYW1zLCB0aGlzLnVybFRyZWUuZnJhZ21lbnQhKSkpO1xuICAgIHJldHVybiB1cmxUcmVlcyQucGlwZShjYXRjaEVycm9yKChlOiBhbnkpID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQWJzb2x1dGVSZWRpcmVjdCkge1xuICAgICAgICAvLyBhZnRlciBhbiBhYnNvbHV0ZSByZWRpcmVjdCB3ZSBkbyBub3QgYXBwbHkgYW55IG1vcmUgcmVkaXJlY3RzIVxuICAgICAgICB0aGlzLmFsbG93UmVkaXJlY3RzID0gZmFsc2U7XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcnVuIG1hdGNoaW5nLCBzbyB3ZSBjYW4gZmV0Y2ggYWxsIGxhenktbG9hZGVkIG1vZHVsZXNcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2goZS51cmxUcmVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBOb01hdGNoKSB7XG4gICAgICAgIHRocm93IHRoaXMubm9NYXRjaEVycm9yKGUpO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlO1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2godHJlZTogVXJsVHJlZSk6IE9ic2VydmFibGU8VXJsVHJlZT4ge1xuICAgIGNvbnN0IGV4cGFuZGVkJCA9XG4gICAgICAgIHRoaXMuZXhwYW5kU2VnbWVudEdyb3VwKHRoaXMubmdNb2R1bGUsIHRoaXMuY29uZmlnLCB0cmVlLnJvb3QsIFBSSU1BUllfT1VUTEVUKTtcbiAgICBjb25zdCBtYXBwZWQkID0gZXhwYW5kZWQkLnBpcGUoXG4gICAgICAgIG1hcCgocm9vdFNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVXJsVHJlZShyb290U2VnbWVudEdyb3VwLCB0cmVlLnF1ZXJ5UGFyYW1zLCB0cmVlLmZyYWdtZW50ISkpKTtcbiAgICByZXR1cm4gbWFwcGVkJC5waXBlKGNhdGNoRXJyb3IoKGU6IGFueSk6IE9ic2VydmFibGU8VXJsVHJlZT4gPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBOb01hdGNoKSB7XG4gICAgICAgIHRocm93IHRoaXMubm9NYXRjaEVycm9yKGUpO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlO1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgbm9NYXRjaEVycm9yKGU6IE5vTWF0Y2gpOiBhbnkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYENhbm5vdCBtYXRjaCBhbnkgcm91dGVzLiBVUkwgU2VnbWVudDogJyR7ZS5zZWdtZW50R3JvdXB9J2ApO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVVcmxUcmVlKHJvb3RDYW5kaWRhdGU6IFVybFNlZ21lbnRHcm91cCwgcXVlcnlQYXJhbXM6IFBhcmFtcywgZnJhZ21lbnQ6IHN0cmluZyk6XG4gICAgICBVcmxUcmVlIHtcbiAgICBjb25zdCByb290ID0gcm9vdENhbmRpZGF0ZS5zZWdtZW50cy5sZW5ndGggPiAwID9cbiAgICAgICAgbmV3IFVybFNlZ21lbnRHcm91cChbXSwge1tQUklNQVJZX09VVExFVF06IHJvb3RDYW5kaWRhdGV9KSA6XG4gICAgICAgIHJvb3RDYW5kaWRhdGU7XG4gICAgcmV0dXJuIG5ldyBVcmxUcmVlKHJvb3QsIHF1ZXJ5UGFyYW1zLCBmcmFnbWVudCk7XG4gIH1cblxuICBwcml2YXRlIGV4cGFuZFNlZ21lbnRHcm91cChcbiAgICAgIG5nTW9kdWxlOiBOZ01vZHVsZVJlZjxhbnk+LCByb3V0ZXM6IFJvdXRlW10sIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLFxuICAgICAgb3V0bGV0OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4ge1xuICAgIGlmIChzZWdtZW50R3JvdXAuc2VnbWVudHMubGVuZ3RoID09PSAwICYmIHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbmRDaGlsZHJlbihuZ01vZHVsZSwgcm91dGVzLCBzZWdtZW50R3JvdXApXG4gICAgICAgICAgLnBpcGUobWFwKChjaGlsZHJlbjogYW55KSA9PiBuZXcgVXJsU2VnbWVudEdyb3VwKFtdLCBjaGlsZHJlbikpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5leHBhbmRTZWdtZW50KG5nTW9kdWxlLCBzZWdtZW50R3JvdXAsIHJvdXRlcywgc2VnbWVudEdyb3VwLnNlZ21lbnRzLCBvdXRsZXQsIHRydWUpO1xuICB9XG5cbiAgLy8gUmVjdXJzaXZlbHkgZXhwYW5kIHNlZ21lbnQgZ3JvdXBzIGZvciBhbGwgdGhlIGNoaWxkIG91dGxldHNcbiAgcHJpdmF0ZSBleHBhbmRDaGlsZHJlbihcbiAgICAgIG5nTW9kdWxlOiBOZ01vZHVsZVJlZjxhbnk+LCByb3V0ZXM6IFJvdXRlW10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCk6IE9ic2VydmFibGU8e1tuYW1lOiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXB9PiB7XG4gICAgcmV0dXJuIHdhaXRGb3JNYXAoXG4gICAgICAgIHNlZ21lbnRHcm91cC5jaGlsZHJlbixcbiAgICAgICAgKGNoaWxkT3V0bGV0LCBjaGlsZCkgPT4gdGhpcy5leHBhbmRTZWdtZW50R3JvdXAobmdNb2R1bGUsIHJvdXRlcywgY2hpbGQsIGNoaWxkT3V0bGV0KSk7XG4gIH1cblxuICBwcml2YXRlIGV4cGFuZFNlZ21lbnQoXG4gICAgICBuZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55Piwgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHJvdXRlczogUm91dGVbXSxcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIG91dGxldDogc3RyaW5nLFxuICAgICAgYWxsb3dSZWRpcmVjdHM6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4ge1xuICAgIHJldHVybiBvZiguLi5yb3V0ZXMpLnBpcGUoXG4gICAgICAgIG1hcCgocjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhwYW5kZWQkID0gdGhpcy5leHBhbmRTZWdtZW50QWdhaW5zdFJvdXRlKFxuICAgICAgICAgICAgICBuZ01vZHVsZSwgc2VnbWVudEdyb3VwLCByb3V0ZXMsIHIsIHNlZ21lbnRzLCBvdXRsZXQsIGFsbG93UmVkaXJlY3RzKTtcbiAgICAgICAgICByZXR1cm4gZXhwYW5kZWQkLnBpcGUoY2F0Y2hFcnJvcigoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE5vTWF0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gVE9ETyhpKTogdGhpcyByZXR1cm4gdHlwZSBkb2Vzbid0IG1hdGNoIHRoZSBkZWNsYXJlZCBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4gLVxuICAgICAgICAgICAgICAvLyB0YWxrIHRvIEphc29uXG4gICAgICAgICAgICAgIHJldHVybiBvZihudWxsKSBhcyBhbnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNvbmNhdEFsbCgpLCBmaXJzdCgoczogYW55KSA9PiAhIXMpLCBjYXRjaEVycm9yKChlOiBhbnksIF86IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgRW1wdHlFcnJvciB8fCBlLm5hbWUgPT09ICdFbXB0eUVycm9yJykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9MZWZ0b3ZlcnNJblVybChzZWdtZW50R3JvdXAsIHNlZ21lbnRzLCBvdXRsZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvZihuZXcgVXJsU2VnbWVudEdyb3VwKFtdLCB7fSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IE5vTWF0Y2goc2VnbWVudEdyb3VwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBub0xlZnRvdmVyc0luVXJsKHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBzZWdtZW50czogVXJsU2VnbWVudFtdLCBvdXRsZXQ6IHN0cmluZyk6XG4gICAgICBib29sZWFuIHtcbiAgICByZXR1cm4gc2VnbWVudHMubGVuZ3RoID09PSAwICYmICFzZWdtZW50R3JvdXAuY2hpbGRyZW5bb3V0bGV0XTtcbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kU2VnbWVudEFnYWluc3RSb3V0ZShcbiAgICAgIG5nTW9kdWxlOiBOZ01vZHVsZVJlZjxhbnk+LCBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgcm91dGVzOiBSb3V0ZVtdLCByb3V0ZTogUm91dGUsXG4gICAgICBwYXRoczogVXJsU2VnbWVudFtdLCBvdXRsZXQ6IHN0cmluZywgYWxsb3dSZWRpcmVjdHM6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4ge1xuICAgIGlmIChnZXRPdXRsZXQocm91dGUpICE9PSBvdXRsZXQpIHtcbiAgICAgIHJldHVybiBub01hdGNoKHNlZ21lbnRHcm91cCk7XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlLnJlZGlyZWN0VG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMubWF0Y2hTZWdtZW50QWdhaW5zdFJvdXRlKG5nTW9kdWxlLCBzZWdtZW50R3JvdXAsIHJvdXRlLCBwYXRocyk7XG4gICAgfVxuXG4gICAgaWYgKGFsbG93UmVkaXJlY3RzICYmIHRoaXMuYWxsb3dSZWRpcmVjdHMpIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuZFNlZ21lbnRBZ2FpbnN0Um91dGVVc2luZ1JlZGlyZWN0KFxuICAgICAgICAgIG5nTW9kdWxlLCBzZWdtZW50R3JvdXAsIHJvdXRlcywgcm91dGUsIHBhdGhzLCBvdXRsZXQpO1xuICAgIH1cblxuICAgIHJldHVybiBub01hdGNoKHNlZ21lbnRHcm91cCk7XG4gIH1cblxuICBwcml2YXRlIGV4cGFuZFNlZ21lbnRBZ2FpbnN0Um91dGVVc2luZ1JlZGlyZWN0KFxuICAgICAgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4sIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCByb3V0ZXM6IFJvdXRlW10sIHJvdXRlOiBSb3V0ZSxcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIG91dGxldDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVcmxTZWdtZW50R3JvdXA+IHtcbiAgICBpZiAocm91dGUucGF0aCA9PT0gJyoqJykge1xuICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kV2lsZENhcmRXaXRoUGFyYW1zQWdhaW5zdFJvdXRlVXNpbmdSZWRpcmVjdChcbiAgICAgICAgICBuZ01vZHVsZSwgcm91dGVzLCByb3V0ZSwgb3V0bGV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5leHBhbmRSZWd1bGFyU2VnbWVudEFnYWluc3RSb3V0ZVVzaW5nUmVkaXJlY3QoXG4gICAgICAgIG5nTW9kdWxlLCBzZWdtZW50R3JvdXAsIHJvdXRlcywgcm91dGUsIHNlZ21lbnRzLCBvdXRsZXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHBhbmRXaWxkQ2FyZFdpdGhQYXJhbXNBZ2FpbnN0Um91dGVVc2luZ1JlZGlyZWN0KFxuICAgICAgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4sIHJvdXRlczogUm91dGVbXSwgcm91dGU6IFJvdXRlLFxuICAgICAgb3V0bGV0OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVybFNlZ21lbnRHcm91cD4ge1xuICAgIGNvbnN0IG5ld1RyZWUgPSB0aGlzLmFwcGx5UmVkaXJlY3RDb21tYW5kcyhbXSwgcm91dGUucmVkaXJlY3RUbyEsIHt9KTtcbiAgICBpZiAocm91dGUucmVkaXJlY3RUbyEuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICByZXR1cm4gYWJzb2x1dGVSZWRpcmVjdChuZXdUcmVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5saW5lcmFsaXplU2VnbWVudHMocm91dGUsIG5ld1RyZWUpLnBpcGUobWVyZ2VNYXAoKG5ld1NlZ21lbnRzOiBVcmxTZWdtZW50W10pID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwID0gbmV3IFVybFNlZ21lbnRHcm91cChuZXdTZWdtZW50cywge30pO1xuICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kU2VnbWVudChuZ01vZHVsZSwgZ3JvdXAsIHJvdXRlcywgbmV3U2VnbWVudHMsIG91dGxldCwgZmFsc2UpO1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kUmVndWxhclNlZ21lbnRBZ2FpbnN0Um91dGVVc2luZ1JlZGlyZWN0KFxuICAgICAgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4sIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCByb3V0ZXM6IFJvdXRlW10sIHJvdXRlOiBSb3V0ZSxcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIG91dGxldDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVcmxTZWdtZW50R3JvdXA+IHtcbiAgICBjb25zdCB7bWF0Y2hlZCwgY29uc3VtZWRTZWdtZW50cywgbGFzdENoaWxkLCBwb3NpdGlvbmFsUGFyYW1TZWdtZW50c30gPVxuICAgICAgICBtYXRjaChzZWdtZW50R3JvdXAsIHJvdXRlLCBzZWdtZW50cyk7XG4gICAgaWYgKCFtYXRjaGVkKSByZXR1cm4gbm9NYXRjaChzZWdtZW50R3JvdXApO1xuXG4gICAgY29uc3QgbmV3VHJlZSA9IHRoaXMuYXBwbHlSZWRpcmVjdENvbW1hbmRzKFxuICAgICAgICBjb25zdW1lZFNlZ21lbnRzLCByb3V0ZS5yZWRpcmVjdFRvISwgPGFueT5wb3NpdGlvbmFsUGFyYW1TZWdtZW50cyk7XG4gICAgaWYgKHJvdXRlLnJlZGlyZWN0VG8hLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgcmV0dXJuIGFic29sdXRlUmVkaXJlY3QobmV3VHJlZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubGluZXJhbGl6ZVNlZ21lbnRzKHJvdXRlLCBuZXdUcmVlKS5waXBlKG1lcmdlTWFwKChuZXdTZWdtZW50czogVXJsU2VnbWVudFtdKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbmRTZWdtZW50KFxuICAgICAgICAgIG5nTW9kdWxlLCBzZWdtZW50R3JvdXAsIHJvdXRlcywgbmV3U2VnbWVudHMuY29uY2F0KHNlZ21lbnRzLnNsaWNlKGxhc3RDaGlsZCkpLCBvdXRsZXQsXG4gICAgICAgICAgZmFsc2UpO1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hTZWdtZW50QWdhaW5zdFJvdXRlKFxuICAgICAgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4sIHJhd1NlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCByb3V0ZTogUm91dGUsXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdKTogT2JzZXJ2YWJsZTxVcmxTZWdtZW50R3JvdXA+IHtcbiAgICBpZiAocm91dGUucGF0aCA9PT0gJyoqJykge1xuICAgICAgaWYgKHJvdXRlLmxvYWRDaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdMb2FkZXIubG9hZChuZ01vZHVsZS5pbmplY3Rvciwgcm91dGUpXG4gICAgICAgICAgICAucGlwZShtYXAoKGNmZzogTG9hZGVkUm91dGVyQ29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgIHJvdXRlLl9sb2FkZWRDb25maWcgPSBjZmc7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgVXJsU2VnbWVudEdyb3VwKHNlZ21lbnRzLCB7fSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvZihuZXcgVXJsU2VnbWVudEdyb3VwKHNlZ21lbnRzLCB7fSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHttYXRjaGVkLCBjb25zdW1lZFNlZ21lbnRzLCBsYXN0Q2hpbGR9ID0gbWF0Y2gocmF3U2VnbWVudEdyb3VwLCByb3V0ZSwgc2VnbWVudHMpO1xuICAgIGlmICghbWF0Y2hlZCkgcmV0dXJuIG5vTWF0Y2gocmF3U2VnbWVudEdyb3VwKTtcblxuICAgIGNvbnN0IHJhd1NsaWNlZFNlZ21lbnRzID0gc2VnbWVudHMuc2xpY2UobGFzdENoaWxkKTtcbiAgICBjb25zdCBjaGlsZENvbmZpZyQgPSB0aGlzLmdldENoaWxkQ29uZmlnKG5nTW9kdWxlLCByb3V0ZSwgc2VnbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkQ29uZmlnJC5waXBlKG1lcmdlTWFwKChyb3V0ZXJDb25maWc6IExvYWRlZFJvdXRlckNvbmZpZykgPT4ge1xuICAgICAgY29uc3QgY2hpbGRNb2R1bGUgPSByb3V0ZXJDb25maWcubW9kdWxlO1xuICAgICAgY29uc3QgY2hpbGRDb25maWcgPSByb3V0ZXJDb25maWcucm91dGVzO1xuXG4gICAgICBjb25zdCB7c2VnbWVudEdyb3VwLCBzbGljZWRTZWdtZW50c30gPVxuICAgICAgICAgIHNwbGl0KHJhd1NlZ21lbnRHcm91cCwgY29uc3VtZWRTZWdtZW50cywgcmF3U2xpY2VkU2VnbWVudHMsIGNoaWxkQ29uZmlnKTtcblxuICAgICAgaWYgKHNsaWNlZFNlZ21lbnRzLmxlbmd0aCA9PT0gMCAmJiBzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgICBjb25zdCBleHBhbmRlZCQgPSB0aGlzLmV4cGFuZENoaWxkcmVuKGNoaWxkTW9kdWxlLCBjaGlsZENvbmZpZywgc2VnbWVudEdyb3VwKTtcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkJC5waXBlKFxuICAgICAgICAgICAgbWFwKChjaGlsZHJlbjogYW55KSA9PiBuZXcgVXJsU2VnbWVudEdyb3VwKGNvbnN1bWVkU2VnbWVudHMsIGNoaWxkcmVuKSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRDb25maWcubGVuZ3RoID09PSAwICYmIHNsaWNlZFNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb2YobmV3IFVybFNlZ21lbnRHcm91cChjb25zdW1lZFNlZ21lbnRzLCB7fSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHBhbmRlZCQgPSB0aGlzLmV4cGFuZFNlZ21lbnQoXG4gICAgICAgICAgY2hpbGRNb2R1bGUsIHNlZ21lbnRHcm91cCwgY2hpbGRDb25maWcsIHNsaWNlZFNlZ21lbnRzLCBQUklNQVJZX09VVExFVCwgdHJ1ZSk7XG4gICAgICByZXR1cm4gZXhwYW5kZWQkLnBpcGUoXG4gICAgICAgICAgbWFwKChjczogVXJsU2VnbWVudEdyb3VwKSA9PlxuICAgICAgICAgICAgICAgICAgbmV3IFVybFNlZ21lbnRHcm91cChjb25zdW1lZFNlZ21lbnRzLmNvbmNhdChjcy5zZWdtZW50cyksIGNzLmNoaWxkcmVuKSkpO1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRDb25maWcobmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4sIHJvdXRlOiBSb3V0ZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6XG4gICAgICBPYnNlcnZhYmxlPExvYWRlZFJvdXRlckNvbmZpZz4ge1xuICAgIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgICAgLy8gVGhlIGNoaWxkcmVuIGJlbG9uZyB0byB0aGUgc2FtZSBtb2R1bGVcbiAgICAgIHJldHVybiBvZihuZXcgTG9hZGVkUm91dGVyQ29uZmlnKHJvdXRlLmNoaWxkcmVuLCBuZ01vZHVsZSkpO1xuICAgIH1cblxuICAgIGlmIChyb3V0ZS5sb2FkQ2hpbGRyZW4pIHtcbiAgICAgIC8vIGxhenkgY2hpbGRyZW4gYmVsb25nIHRvIHRoZSBsb2FkZWQgbW9kdWxlXG4gICAgICBpZiAocm91dGUuX2xvYWRlZENvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBvZihyb3V0ZS5fbG9hZGVkQ29uZmlnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ1bkNhbkxvYWRHdWFyZChuZ01vZHVsZS5pbmplY3Rvciwgcm91dGUsIHNlZ21lbnRzKVxuICAgICAgICAgIC5waXBlKG1lcmdlTWFwKChzaG91bGRMb2FkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkTG9hZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWdMb2FkZXIubG9hZChuZ01vZHVsZS5pbmplY3Rvciwgcm91dGUpXG4gICAgICAgICAgICAgICAgICAucGlwZShtYXAoKGNmZzogTG9hZGVkUm91dGVyQ29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlLl9sb2FkZWRDb25maWcgPSBjZmc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjZmc7XG4gICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FuTG9hZEZhaWxzKHJvdXRlKTtcbiAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mKG5ldyBMb2FkZWRSb3V0ZXJDb25maWcoW10sIG5nTW9kdWxlKSk7XG4gIH1cblxuICBwcml2YXRlIGxpbmVyYWxpemVTZWdtZW50cyhyb3V0ZTogUm91dGUsIHVybFRyZWU6IFVybFRyZWUpOiBPYnNlcnZhYmxlPFVybFNlZ21lbnRbXT4ge1xuICAgIGxldCByZXM6IFVybFNlZ21lbnRbXSA9IFtdO1xuICAgIGxldCBjID0gdXJsVHJlZS5yb290O1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICByZXMgPSByZXMuY29uY2F0KGMuc2VnbWVudHMpO1xuICAgICAgaWYgKGMubnVtYmVyT2ZDaGlsZHJlbiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGMubnVtYmVyT2ZDaGlsZHJlbiA+IDEgfHwgIWMuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdKSB7XG4gICAgICAgIHJldHVybiBuYW1lZE91dGxldHNSZWRpcmVjdChyb3V0ZS5yZWRpcmVjdFRvISk7XG4gICAgICB9XG5cbiAgICAgIGMgPSBjLmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UmVkaXJlY3RDb21tYW5kcyhcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIHJlZGlyZWN0VG86IHN0cmluZywgcG9zUGFyYW1zOiB7W2s6IHN0cmluZ106IFVybFNlZ21lbnR9KTogVXJsVHJlZSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlSZWRpcmVjdENyZWF0cmVVcmxUcmVlKFxuICAgICAgICByZWRpcmVjdFRvLCB0aGlzLnVybFNlcmlhbGl6ZXIucGFyc2UocmVkaXJlY3RUbyksIHNlZ21lbnRzLCBwb3NQYXJhbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVJlZGlyZWN0Q3JlYXRyZVVybFRyZWUoXG4gICAgICByZWRpcmVjdFRvOiBzdHJpbmcsIHVybFRyZWU6IFVybFRyZWUsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBwb3NQYXJhbXM6IHtbazogc3RyaW5nXTogVXJsU2VnbWVudH0pOiBVcmxUcmVlIHtcbiAgICBjb25zdCBuZXdSb290ID0gdGhpcy5jcmVhdGVTZWdtZW50R3JvdXAocmVkaXJlY3RUbywgdXJsVHJlZS5yb290LCBzZWdtZW50cywgcG9zUGFyYW1zKTtcbiAgICByZXR1cm4gbmV3IFVybFRyZWUoXG4gICAgICAgIG5ld1Jvb3QsIHRoaXMuY3JlYXRlUXVlcnlQYXJhbXModXJsVHJlZS5xdWVyeVBhcmFtcywgdGhpcy51cmxUcmVlLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgdXJsVHJlZS5mcmFnbWVudCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVF1ZXJ5UGFyYW1zKHJlZGlyZWN0VG9QYXJhbXM6IFBhcmFtcywgYWN0dWFsUGFyYW1zOiBQYXJhbXMpOiBQYXJhbXMge1xuICAgIGNvbnN0IHJlczogUGFyYW1zID0ge307XG4gICAgZm9yRWFjaChyZWRpcmVjdFRvUGFyYW1zLCAodjogYW55LCBrOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNvcHlTb3VyY2VWYWx1ZSA9IHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiB2LnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgIGlmIChjb3B5U291cmNlVmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc291cmNlTmFtZSA9IHYuc3Vic3RyaW5nKDEpO1xuICAgICAgICByZXNba10gPSBhY3R1YWxQYXJhbXNbc291cmNlTmFtZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNba10gPSB2O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNlZ21lbnRHcm91cChcbiAgICAgIHJlZGlyZWN0VG86IHN0cmluZywgZ3JvdXA6IFVybFNlZ21lbnRHcm91cCwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICAgIHBvc1BhcmFtczoge1trOiBzdHJpbmddOiBVcmxTZWdtZW50fSk6IFVybFNlZ21lbnRHcm91cCB7XG4gICAgY29uc3QgdXBkYXRlZFNlZ21lbnRzID0gdGhpcy5jcmVhdGVTZWdtZW50cyhyZWRpcmVjdFRvLCBncm91cC5zZWdtZW50cywgc2VnbWVudHMsIHBvc1BhcmFtcyk7XG5cbiAgICBsZXQgY2hpbGRyZW46IHtbbjogc3RyaW5nXTogVXJsU2VnbWVudEdyb3VwfSA9IHt9O1xuICAgIGZvckVhY2goZ3JvdXAuY2hpbGRyZW4sIChjaGlsZDogVXJsU2VnbWVudEdyb3VwLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNoaWxkcmVuW25hbWVdID0gdGhpcy5jcmVhdGVTZWdtZW50R3JvdXAocmVkaXJlY3RUbywgY2hpbGQsIHNlZ21lbnRzLCBwb3NQYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBVcmxTZWdtZW50R3JvdXAodXBkYXRlZFNlZ21lbnRzLCBjaGlsZHJlbik7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNlZ21lbnRzKFxuICAgICAgcmVkaXJlY3RUbzogc3RyaW5nLCByZWRpcmVjdFRvU2VnbWVudHM6IFVybFNlZ21lbnRbXSwgYWN0dWFsU2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICAgIHBvc1BhcmFtczoge1trOiBzdHJpbmddOiBVcmxTZWdtZW50fSk6IFVybFNlZ21lbnRbXSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0VG9TZWdtZW50cy5tYXAoXG4gICAgICAgIHMgPT4gcy5wYXRoLnN0YXJ0c1dpdGgoJzonKSA/IHRoaXMuZmluZFBvc1BhcmFtKHJlZGlyZWN0VG8sIHMsIHBvc1BhcmFtcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRPclJldHVybihzLCBhY3R1YWxTZWdtZW50cykpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUG9zUGFyYW0oXG4gICAgICByZWRpcmVjdFRvOiBzdHJpbmcsIHJlZGlyZWN0VG9VcmxTZWdtZW50OiBVcmxTZWdtZW50LFxuICAgICAgcG9zUGFyYW1zOiB7W2s6IHN0cmluZ106IFVybFNlZ21lbnR9KTogVXJsU2VnbWVudCB7XG4gICAgY29uc3QgcG9zID0gcG9zUGFyYW1zW3JlZGlyZWN0VG9VcmxTZWdtZW50LnBhdGguc3Vic3RyaW5nKDEpXTtcbiAgICBpZiAoIXBvcylcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2Fubm90IHJlZGlyZWN0IHRvICcke3JlZGlyZWN0VG99Jy4gQ2Fubm90IGZpbmQgJyR7cmVkaXJlY3RUb1VybFNlZ21lbnQucGF0aH0nLmApO1xuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICBwcml2YXRlIGZpbmRPclJldHVybihyZWRpcmVjdFRvVXJsU2VnbWVudDogVXJsU2VnbWVudCwgYWN0dWFsU2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IFVybFNlZ21lbnQge1xuICAgIGxldCBpZHggPSAwO1xuICAgIGZvciAoY29uc3QgcyBvZiBhY3R1YWxTZWdtZW50cykge1xuICAgICAgaWYgKHMucGF0aCA9PT0gcmVkaXJlY3RUb1VybFNlZ21lbnQucGF0aCkge1xuICAgICAgICBhY3R1YWxTZWdtZW50cy5zcGxpY2UoaWR4KTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9XG4gICAgICBpZHgrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlZGlyZWN0VG9VcmxTZWdtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkNhbkxvYWRHdWFyZChcbiAgICBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IsIHJvdXRlOiBSb3V0ZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICBjb25zdCBjYW5Mb2FkID0gcm91dGUuY2FuTG9hZDtcbiAgaWYgKCFjYW5Mb2FkIHx8IGNhbkxvYWQubGVuZ3RoID09PSAwKSByZXR1cm4gb2YodHJ1ZSk7XG5cbiAgY29uc3Qgb2JzID0gZnJvbShjYW5Mb2FkKS5waXBlKG1hcCgoaW5qZWN0aW9uVG9rZW46IGFueSkgPT4ge1xuICAgIGNvbnN0IGd1YXJkID0gbW9kdWxlSW5qZWN0b3IuZ2V0KGluamVjdGlvblRva2VuKTtcbiAgICBsZXQgZ3VhcmRWYWw7XG4gICAgaWYgKGlzQ2FuTG9hZChndWFyZCkpIHtcbiAgICAgIGd1YXJkVmFsID0gZ3VhcmQuY2FuTG9hZChyb3V0ZSwgc2VnbWVudHMpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbjxDYW5Mb2FkRm4+KGd1YXJkKSkge1xuICAgICAgZ3VhcmRWYWwgPSBndWFyZChyb3V0ZSwgc2VnbWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ2FuTG9hZCBndWFyZCcpO1xuICAgIH1cbiAgICByZXR1cm4gd3JhcEludG9PYnNlcnZhYmxlKGd1YXJkVmFsKTtcbiAgfSkpO1xuXG4gIHJldHVybiBvYnMucGlwZShjb25jYXRBbGwoKSwgZXZlcnkocmVzdWx0ID0+IHJlc3VsdCA9PT0gdHJ1ZSkpO1xufVxuXG5mdW5jdGlvbiBtYXRjaChzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgcm91dGU6IFJvdXRlLCBzZWdtZW50czogVXJsU2VnbWVudFtdKToge1xuICBtYXRjaGVkOiBib29sZWFuLFxuICBjb25zdW1lZFNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gIGxhc3RDaGlsZDogbnVtYmVyLFxuICBwb3NpdGlvbmFsUGFyYW1TZWdtZW50czoge1trOiBzdHJpbmddOiBVcmxTZWdtZW50fVxufSB7XG4gIGlmIChyb3V0ZS5wYXRoID09PSAnJykge1xuICAgIGlmICgocm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcpICYmIChzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSB8fCBzZWdtZW50cy5sZW5ndGggPiAwKSkge1xuICAgICAgcmV0dXJuIHttYXRjaGVkOiBmYWxzZSwgY29uc3VtZWRTZWdtZW50czogW10sIGxhc3RDaGlsZDogMCwgcG9zaXRpb25hbFBhcmFtU2VnbWVudHM6IHt9fTtcbiAgICB9XG5cbiAgICByZXR1cm4ge21hdGNoZWQ6IHRydWUsIGNvbnN1bWVkU2VnbWVudHM6IFtdLCBsYXN0Q2hpbGQ6IDAsIHBvc2l0aW9uYWxQYXJhbVNlZ21lbnRzOiB7fX07XG4gIH1cblxuICBjb25zdCBtYXRjaGVyID0gcm91dGUubWF0Y2hlciB8fCBkZWZhdWx0VXJsTWF0Y2hlcjtcbiAgY29uc3QgcmVzID0gbWF0Y2hlcihzZWdtZW50cywgc2VnbWVudEdyb3VwLCByb3V0ZSk7XG5cbiAgaWYgKCFyZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hlZDogZmFsc2UsXG4gICAgICBjb25zdW1lZFNlZ21lbnRzOiA8YW55W10+W10sXG4gICAgICBsYXN0Q2hpbGQ6IDAsXG4gICAgICBwb3NpdGlvbmFsUGFyYW1TZWdtZW50czoge30sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWF0Y2hlZDogdHJ1ZSxcbiAgICBjb25zdW1lZFNlZ21lbnRzOiByZXMuY29uc3VtZWQhLFxuICAgIGxhc3RDaGlsZDogcmVzLmNvbnN1bWVkLmxlbmd0aCEsXG4gICAgcG9zaXRpb25hbFBhcmFtU2VnbWVudHM6IHJlcy5wb3NQYXJhbXMhLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzcGxpdChcbiAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgY29uc3VtZWRTZWdtZW50czogVXJsU2VnbWVudFtdLCBzbGljZWRTZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgIGNvbmZpZzogUm91dGVbXSkge1xuICBpZiAoc2xpY2VkU2VnbWVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgY29udGFpbnNFbXB0eVBhdGhSZWRpcmVjdHNXaXRoTmFtZWRPdXRsZXRzKHNlZ21lbnRHcm91cCwgc2xpY2VkU2VnbWVudHMsIGNvbmZpZykpIHtcbiAgICBjb25zdCBzID0gbmV3IFVybFNlZ21lbnRHcm91cChcbiAgICAgICAgY29uc3VtZWRTZWdtZW50cyxcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW5Gb3JFbXB0eVNlZ21lbnRzKFxuICAgICAgICAgICAgY29uZmlnLCBuZXcgVXJsU2VnbWVudEdyb3VwKHNsaWNlZFNlZ21lbnRzLCBzZWdtZW50R3JvdXAuY2hpbGRyZW4pKSk7XG4gICAgcmV0dXJuIHtzZWdtZW50R3JvdXA6IG1lcmdlVHJpdmlhbENoaWxkcmVuKHMpLCBzbGljZWRTZWdtZW50czogW119O1xuICB9XG5cbiAgaWYgKHNsaWNlZFNlZ21lbnRzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgY29udGFpbnNFbXB0eVBhdGhSZWRpcmVjdHMoc2VnbWVudEdyb3VwLCBzbGljZWRTZWdtZW50cywgY29uZmlnKSkge1xuICAgIGNvbnN0IHMgPSBuZXcgVXJsU2VnbWVudEdyb3VwKFxuICAgICAgICBzZWdtZW50R3JvdXAuc2VnbWVudHMsXG4gICAgICAgIGFkZEVtcHR5U2VnbWVudHNUb0NoaWxkcmVuSWZOZWVkZWQoXG4gICAgICAgICAgICBzZWdtZW50R3JvdXAsIHNsaWNlZFNlZ21lbnRzLCBjb25maWcsIHNlZ21lbnRHcm91cC5jaGlsZHJlbikpO1xuICAgIHJldHVybiB7c2VnbWVudEdyb3VwOiBtZXJnZVRyaXZpYWxDaGlsZHJlbihzKSwgc2xpY2VkU2VnbWVudHN9O1xuICB9XG5cbiAgcmV0dXJuIHtzZWdtZW50R3JvdXAsIHNsaWNlZFNlZ21lbnRzfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VUcml2aWFsQ2hpbGRyZW4oczogVXJsU2VnbWVudEdyb3VwKTogVXJsU2VnbWVudEdyb3VwIHtcbiAgaWYgKHMubnVtYmVyT2ZDaGlsZHJlbiA9PT0gMSAmJiBzLmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXSkge1xuICAgIGNvbnN0IGMgPSBzLmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXTtcbiAgICByZXR1cm4gbmV3IFVybFNlZ21lbnRHcm91cChzLnNlZ21lbnRzLmNvbmNhdChjLnNlZ21lbnRzKSwgYy5jaGlsZHJlbik7XG4gIH1cblxuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gYWRkRW1wdHlTZWdtZW50c1RvQ2hpbGRyZW5JZk5lZWRlZChcbiAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgc2xpY2VkU2VnbWVudHM6IFVybFNlZ21lbnRbXSwgcm91dGVzOiBSb3V0ZVtdLFxuICAgIGNoaWxkcmVuOiB7W25hbWU6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0pOiB7W25hbWU6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0ge1xuICBjb25zdCByZXM6IHtbbmFtZTogc3RyaW5nXTogVXJsU2VnbWVudEdyb3VwfSA9IHt9O1xuICBmb3IgKGNvbnN0IHIgb2Ygcm91dGVzKSB7XG4gICAgaWYgKGlzRW1wdHlQYXRoUmVkaXJlY3Qoc2VnbWVudEdyb3VwLCBzbGljZWRTZWdtZW50cywgcikgJiYgIWNoaWxkcmVuW2dldE91dGxldChyKV0pIHtcbiAgICAgIHJlc1tnZXRPdXRsZXQocildID0gbmV3IFVybFNlZ21lbnRHcm91cChbXSwge30pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gey4uLmNoaWxkcmVuLCAuLi5yZXN9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGlsZHJlbkZvckVtcHR5U2VnbWVudHMoXG4gICAgcm91dGVzOiBSb3V0ZVtdLCBwcmltYXJ5U2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXApOiB7W25hbWU6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0ge1xuICBjb25zdCByZXM6IHtbbmFtZTogc3RyaW5nXTogVXJsU2VnbWVudEdyb3VwfSA9IHt9O1xuICByZXNbUFJJTUFSWV9PVVRMRVRdID0gcHJpbWFyeVNlZ21lbnRHcm91cDtcbiAgZm9yIChjb25zdCByIG9mIHJvdXRlcykge1xuICAgIGlmIChyLnBhdGggPT09ICcnICYmIGdldE91dGxldChyKSAhPT0gUFJJTUFSWV9PVVRMRVQpIHtcbiAgICAgIHJlc1tnZXRPdXRsZXQocildID0gbmV3IFVybFNlZ21lbnRHcm91cChbXSwge30pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBjb250YWluc0VtcHR5UGF0aFJlZGlyZWN0c1dpdGhOYW1lZE91dGxldHMoXG4gICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIHJvdXRlczogUm91dGVbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gcm91dGVzLnNvbWUoXG4gICAgICByID0+IGlzRW1wdHlQYXRoUmVkaXJlY3Qoc2VnbWVudEdyb3VwLCBzZWdtZW50cywgcikgJiYgZ2V0T3V0bGV0KHIpICE9PSBQUklNQVJZX09VVExFVCk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zRW1wdHlQYXRoUmVkaXJlY3RzKFxuICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBzZWdtZW50czogVXJsU2VnbWVudFtdLCByb3V0ZXM6IFJvdXRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHJvdXRlcy5zb21lKHIgPT4gaXNFbXB0eVBhdGhSZWRpcmVjdChzZWdtZW50R3JvdXAsIHNlZ21lbnRzLCByKSk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlQYXRoUmVkaXJlY3QoXG4gICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIHI6IFJvdXRlKTogYm9vbGVhbiB7XG4gIGlmICgoc2VnbWVudEdyb3VwLmhhc0NoaWxkcmVuKCkgfHwgc2VnbWVudHMubGVuZ3RoID4gMCkgJiYgci5wYXRoTWF0Y2ggPT09ICdmdWxsJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiByLnBhdGggPT09ICcnICYmIHIucmVkaXJlY3RUbyAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBnZXRPdXRsZXQocm91dGU6IFJvdXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIHJvdXRlLm91dGxldCB8fCBQUklNQVJZX09VVExFVDtcbn1cbiJdfQ==