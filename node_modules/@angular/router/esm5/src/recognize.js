/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign, __values } from "tslib";
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, inheritedParamsDataResolve, RouterStateSnapshot } from './router_state';
import { defaultUrlMatcher, PRIMARY_OUTLET } from './shared';
import { mapChildrenIntoArray, UrlSegmentGroup } from './url_tree';
import { forEach, last } from './utils/collection';
import { TreeNode } from './utils/tree';
var NoMatch = /** @class */ (function () {
    function NoMatch() {
    }
    return NoMatch;
}());
export function recognize(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution) {
    if (paramsInheritanceStrategy === void 0) { paramsInheritanceStrategy = 'emptyOnly'; }
    if (relativeLinkResolution === void 0) { relativeLinkResolution = 'legacy'; }
    return new Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution)
        .recognize();
}
var Recognizer = /** @class */ (function () {
    function Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution) {
        this.rootComponentType = rootComponentType;
        this.config = config;
        this.urlTree = urlTree;
        this.url = url;
        this.paramsInheritanceStrategy = paramsInheritanceStrategy;
        this.relativeLinkResolution = relativeLinkResolution;
    }
    Recognizer.prototype.recognize = function () {
        try {
            var rootSegmentGroup = split(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup;
            var children = this.processSegmentGroup(this.config, rootSegmentGroup, PRIMARY_OUTLET);
            var root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, this.urlTree.root, -1, {});
            var rootNode = new TreeNode(root, children);
            var routeState = new RouterStateSnapshot(this.url, rootNode);
            this.inheritParamsAndData(routeState._root);
            return of(routeState);
        }
        catch (e) {
            return new Observable(function (obs) { return obs.error(e); });
        }
    };
    Recognizer.prototype.inheritParamsAndData = function (routeNode) {
        var _this = this;
        var route = routeNode.value;
        var i = inheritedParamsDataResolve(route, this.paramsInheritanceStrategy);
        route.params = Object.freeze(i.params);
        route.data = Object.freeze(i.data);
        routeNode.children.forEach(function (n) { return _this.inheritParamsAndData(n); });
    };
    Recognizer.prototype.processSegmentGroup = function (config, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.processChildren(config, segmentGroup);
        }
        return this.processSegment(config, segmentGroup, segmentGroup.segments, outlet);
    };
    Recognizer.prototype.processChildren = function (config, segmentGroup) {
        var _this = this;
        var children = mapChildrenIntoArray(segmentGroup, function (child, childOutlet) { return _this.processSegmentGroup(config, child, childOutlet); });
        checkOutletNameUniqueness(children);
        sortActivatedRouteSnapshots(children);
        return children;
    };
    Recognizer.prototype.processSegment = function (config, segmentGroup, segments, outlet) {
        var e_1, _a;
        try {
            for (var config_1 = __values(config), config_1_1 = config_1.next(); !config_1_1.done; config_1_1 = config_1.next()) {
                var r = config_1_1.value;
                try {
                    return this.processSegmentAgainstRoute(r, segmentGroup, segments, outlet);
                }
                catch (e) {
                    if (!(e instanceof NoMatch))
                        throw e;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (config_1_1 && !config_1_1.done && (_a = config_1.return)) _a.call(config_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
            return [];
        }
        throw new NoMatch();
    };
    Recognizer.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    Recognizer.prototype.processSegmentAgainstRoute = function (route, rawSegment, segments, outlet) {
        if (route.redirectTo)
            throw new NoMatch();
        if ((route.outlet || PRIMARY_OUTLET) !== outlet)
            throw new NoMatch();
        var snapshot;
        var consumedSegments = [];
        var rawSlicedSegments = [];
        if (route.path === '**') {
            var params = segments.length > 0 ? last(segments).parameters : {};
            snapshot = new ActivatedRouteSnapshot(segments, params, Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
        }
        else {
            var result = match(rawSegment, route, segments);
            consumedSegments = result.consumedSegments;
            rawSlicedSegments = segments.slice(result.lastChild);
            snapshot = new ActivatedRouteSnapshot(consumedSegments, result.parameters, Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
        }
        var childConfig = getChildConfig(route);
        var _a = split(rawSegment, consumedSegments, rawSlicedSegments, childConfig, this.relativeLinkResolution), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
            var children_1 = this.processChildren(childConfig, segmentGroup);
            return [new TreeNode(snapshot, children_1)];
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
            return [new TreeNode(snapshot, [])];
        }
        var children = this.processSegment(childConfig, segmentGroup, slicedSegments, PRIMARY_OUTLET);
        return [new TreeNode(snapshot, children)];
    };
    return Recognizer;
}());
function sortActivatedRouteSnapshots(nodes) {
    nodes.sort(function (a, b) {
        if (a.value.outlet === PRIMARY_OUTLET)
            return -1;
        if (b.value.outlet === PRIMARY_OUTLET)
            return 1;
        return a.value.outlet.localeCompare(b.value.outlet);
    });
}
function getChildConfig(route) {
    if (route.children) {
        return route.children;
    }
    if (route.loadChildren) {
        return route._loadedConfig.routes;
    }
    return [];
}
function match(segmentGroup, route, segments) {
    if (route.path === '') {
        if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
            throw new NoMatch();
        }
        return { consumedSegments: [], lastChild: 0, parameters: {} };
    }
    var matcher = route.matcher || defaultUrlMatcher;
    var res = matcher(segments, segmentGroup, route);
    if (!res)
        throw new NoMatch();
    var posParams = {};
    forEach(res.posParams, function (v, k) {
        posParams[k] = v.path;
    });
    var parameters = res.consumed.length > 0 ? __assign(__assign({}, posParams), res.consumed[res.consumed.length - 1].parameters) :
        posParams;
    return { consumedSegments: res.consumed, lastChild: res.consumed.length, parameters: parameters };
}
function checkOutletNameUniqueness(nodes) {
    var names = {};
    nodes.forEach(function (n) {
        var routeWithSameOutletName = names[n.value.outlet];
        if (routeWithSameOutletName) {
            var p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
            var c = n.value.url.map(function (s) { return s.toString(); }).join('/');
            throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
        }
        names[n.value.outlet] = n.value;
    });
}
function getSourceSegmentGroup(segmentGroup) {
    var s = segmentGroup;
    while (s._sourceSegment) {
        s = s._sourceSegment;
    }
    return s;
}
function getPathIndexShift(segmentGroup) {
    var s = segmentGroup;
    var res = (s._segmentIndexShift ? s._segmentIndexShift : 0);
    while (s._sourceSegment) {
        s = s._sourceSegment;
        res += (s._segmentIndexShift ? s._segmentIndexShift : 0);
    }
    return res - 1;
}
function split(segmentGroup, consumedSegments, slicedSegments, config, relativeLinkResolution) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var s_1 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        s_1._sourceSegment = segmentGroup;
        s_1._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s_1, slicedSegments: [] };
    }
    if (slicedSegments.length === 0 &&
        containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
        var s_2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, config, segmentGroup.children, relativeLinkResolution));
        s_2._sourceSegment = segmentGroup;
        s_2._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s_2, slicedSegments: slicedSegments };
    }
    var s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
    s._sourceSegment = segmentGroup;
    s._segmentIndexShift = consumedSegments.length;
    return { segmentGroup: s, slicedSegments: slicedSegments };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, routes, children, relativeLinkResolution) {
    var e_2, _a;
    var res = {};
    try {
        for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
            var r = routes_1_1.value;
            if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
                var s = new UrlSegmentGroup([], {});
                s._sourceSegment = segmentGroup;
                if (relativeLinkResolution === 'legacy') {
                    s._segmentIndexShift = segmentGroup.segments.length;
                }
                else {
                    s._segmentIndexShift = consumedSegments.length;
                }
                res[getOutlet(r)] = s;
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
function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
    var e_3, _a;
    var res = {};
    res[PRIMARY_OUTLET] = primarySegment;
    primarySegment._sourceSegment = segmentGroup;
    primarySegment._segmentIndexShift = consumedSegments.length;
    try {
        for (var routes_2 = __values(routes), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
            var r = routes_2_1.value;
            if (r.path === '' && getOutlet(r) !== PRIMARY_OUTLET) {
                var s = new UrlSegmentGroup([], {});
                s._sourceSegment = segmentGroup;
                s._segmentIndexShift = consumedSegments.length;
                res[getOutlet(r)] = s;
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
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
    return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET; });
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
    return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r); });
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
    if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full') {
        return false;
    }
    return r.path === '' && r.redirectTo === undefined;
}
function getOutlet(route) {
    return route.outlet || PRIMARY_OUTLET;
}
function getData(route) {
    return route.data || {};
}
function getResolve(route) {
    return route.resolve || {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb2duaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9yZWNvZ25pemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUdILE9BQU8sRUFBQyxVQUFVLEVBQVksRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRzlDLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBNkIsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsSSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsY0FBYyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzNELE9BQU8sRUFBQyxvQkFBb0IsRUFBYyxlQUFlLEVBQVUsTUFBTSxZQUFZLENBQUM7QUFDdEYsT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXRDO0lBQUE7SUFBZSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFBaEIsSUFBZ0I7QUFFaEIsTUFBTSxVQUFVLFNBQVMsQ0FDckIsaUJBQWlDLEVBQUUsTUFBYyxFQUFFLE9BQWdCLEVBQUUsR0FBVyxFQUNoRix5QkFBa0UsRUFDbEUsc0JBQXVEO0lBRHZELDBDQUFBLEVBQUEsdUNBQWtFO0lBQ2xFLHVDQUFBLEVBQUEsaUNBQXVEO0lBQ3pELE9BQU8sSUFBSSxVQUFVLENBQ1YsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUseUJBQXlCLEVBQ2xFLHNCQUFzQixDQUFDO1NBQzdCLFNBQVMsRUFBRSxDQUFDO0FBQ25CLENBQUM7QUFFRDtJQUNFLG9CQUNZLGlCQUFpQyxFQUFVLE1BQWMsRUFBVSxPQUFnQixFQUNuRixHQUFXLEVBQVUseUJBQW9ELEVBQ3pFLHNCQUE0QztRQUY1QyxzQkFBaUIsR0FBakIs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Q0FBQyxJQUFJLE9BQUEsY0FBYyxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQ25CLFlBQTZCLEVBQUUsY0FBNEIsRUFBRSxDQUFRO0lBQ3ZFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtRQUN2RixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQztBQUNyRCxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsS0FBWTtJQUM3QixPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDO0FBQ3hDLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxLQUFZO0lBQzNCLE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7QUFDMUIsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLEtBQVk7SUFDOUIsT0FBTyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2Z9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge0RhdGEsIFJlc29sdmVEYXRhLCBSb3V0ZSwgUm91dGVzfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIGluaGVyaXRlZFBhcmFtc0RhdGFSZXNvbHZlLCBQYXJhbXNJbmhlcml0YW5jZVN0cmF0ZWd5LCBSb3V0ZXJTdGF0ZVNuYXBzaG90fSBmcm9tICcuL3JvdXRlcl9zdGF0ZSc7XG5pbXBvcnQge2RlZmF1bHRVcmxNYXRjaGVyLCBQUklNQVJZX09VVExFVH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHttYXBDaGlsZHJlbkludG9BcnJheSwgVXJsU2VnbWVudCwgVXJsU2VnbWVudEdyb3VwLCBVcmxUcmVlfSBmcm9tICcuL3VybF90cmVlJztcbmltcG9ydCB7Zm9yRWFjaCwgbGFzdH0gZnJvbSAnLi91dGlscy9jb2xsZWN0aW9uJztcbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gJy4vdXRpbHMvdHJlZSc7XG5cbmNsYXNzIE5vTWF0Y2gge31cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29nbml6ZShcbiAgICByb290Q29tcG9uZW50VHlwZTogVHlwZTxhbnk+fG51bGwsIGNvbmZpZzogUm91dGVzLCB1cmxUcmVlOiBVcmxUcmVlLCB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXNJbmhlcml0YW5jZVN0cmF0ZWd5OiBQYXJhbXNJbmhlcml0YW5jZVN0cmF0ZWd5ID0gJ2VtcHR5T25seScsXG4gICAgcmVsYXRpdmVMaW5rUmVzb2x1dGlvbjogJ2xlZ2FjeSd8J2NvcnJlY3RlZCcgPSAnbGVnYWN5Jyk6IE9ic2VydmFibGU8Um91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICByZXR1cm4gbmV3IFJlY29nbml6ZXIoXG4gICAgICAgICAgICAgcm9vdENvbXBvbmVudFR5cGUsIGNvbmZpZywgdXJsVHJlZSwgdXJsLCBwYXJhbXNJbmhlcml0YW5jZVN0cmF0ZWd5LFxuICAgICAgICAgICAgIHJlbGF0aXZlTGlua1Jlc29sdXRpb24pXG4gICAgICAucmVjb2duaXplKCk7XG59XG5cbmNsYXNzIFJlY29nbml6ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcm9vdENvbXBvbmVudFR5cGU6IFR5cGU8YW55PnxudWxsLCBwcml2YXRlIGNvbmZpZzogUm91dGVzLCBwcml2YXRlIHVybFRyZWU6IFVybFRyZWUsXG4gICAgICBwcml2YXRlIHVybDogc3RyaW5nLCBwcml2YXRlIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k6IFBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3ksXG4gICAgICBwcml2YXRlIHJlbGF0aXZlTGlua1Jlc29sdXRpb246ICdsZWdhY3knfCdjb3JyZWN0ZWQnKSB7fVxuXG4gIHJlY29nbml6ZSgpOiBPYnNlcnZhYmxlPFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm9vdFNlZ21lbnRHcm91cCA9XG4gICAgICAgICAgc3BsaXQodGhpcy51cmxUcmVlLnJvb3QsIFtdLCBbXSwgdGhpcy5jb25maWcsIHRoaXMucmVsYXRpdmVMaW5rUmVzb2x1dGlvbikuc2VnbWVudEdyb3VwO1xuXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucHJvY2Vzc1NlZ21lbnRHcm91cCh0aGlzLmNvbmZpZywgcm9vdFNlZ21lbnRHcm91cCwgUFJJTUFSWV9PVVRMRVQpO1xuXG4gICAgICBjb25zdCByb290ID0gbmV3IEFjdGl2YXRlZFJvdXRlU25hcHNob3QoXG4gICAgICAgICAgW10sIE9iamVjdC5mcmVlemUoe30pLCBPYmplY3QuZnJlZXplKHsuLi50aGlzLnVybFRyZWUucXVlcnlQYXJhbXN9KSxcbiAgICAgICAgICB0aGlzLnVybFRyZWUuZnJhZ21lbnQhLCB7fSwgUFJJTUFSWV9PVVRMRVQsIHRoaXMucm9vdENvbXBvbmVudFR5cGUsIG51bGwsXG4gICAgICAgICAgdGhpcy51cmxUcmVlLnJvb3QsIC0xLCB7fSk7XG5cbiAgICAgIGNvbnN0IHJvb3ROb2RlID0gbmV3IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+KHJvb3QsIGNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IHJvdXRlU3RhdGUgPSBuZXcgUm91dGVyU3RhdGVTbmFwc2hvdCh0aGlzLnVybCwgcm9vdE5vZGUpO1xuICAgICAgdGhpcy5pbmhlcml0UGFyYW1zQW5kRGF0YShyb3V0ZVN0YXRlLl9yb290KTtcbiAgICAgIHJldHVybiBvZihyb3V0ZVN0YXRlKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxSb3V0ZXJTdGF0ZVNuYXBzaG90PihcbiAgICAgICAgICAob2JzOiBPYnNlcnZlcjxSb3V0ZXJTdGF0ZVNuYXBzaG90PikgPT4gb2JzLmVycm9yKGUpKTtcbiAgICB9XG4gIH1cblxuICBpbmhlcml0UGFyYW1zQW5kRGF0YShyb3V0ZU5vZGU6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+KTogdm9pZCB7XG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZU5vZGUudmFsdWU7XG5cbiAgICBjb25zdCBpID0gaW5oZXJpdGVkUGFyYW1zRGF0YVJlc29sdmUocm91dGUsIHRoaXMucGFyYW1zSW5oZXJpdGFuY2VTdHJhdGVneSk7XG4gICAgcm91dGUucGFyYW1zID0gT2JqZWN0LmZyZWV6ZShpLnBhcmFtcyk7XG4gICAgcm91dGUuZGF0YSA9IE9iamVjdC5mcmVlemUoaS5kYXRhKTtcblxuICAgIHJvdXRlTm9kZS5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gdGhpcy5pbmhlcml0UGFyYW1zQW5kRGF0YShuKSk7XG4gIH1cblxuICBwcm9jZXNzU2VnbWVudEdyb3VwKGNvbmZpZzogUm91dGVbXSwgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIG91dGxldDogc3RyaW5nKTpcbiAgICAgIFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+W10ge1xuICAgIGlmIChzZWdtZW50R3JvdXAuc2VnbWVudHMubGVuZ3RoID09PSAwICYmIHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9jZXNzQ2hpbGRyZW4oY29uZmlnLCBzZWdtZW50R3JvdXApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb2Nlc3NTZWdtZW50KGNvbmZpZywgc2VnbWVudEdyb3VwLCBzZWdtZW50R3JvdXAuc2VnbWVudHMsIG91dGxldCk7XG4gIH1cblxuICBwcm9jZXNzQ2hpbGRyZW4oY29uZmlnOiBSb3V0ZVtdLCBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCk6XG4gICAgICBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PltdIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IG1hcENoaWxkcmVuSW50b0FycmF5KFxuICAgICAgICBzZWdtZW50R3JvdXAsIChjaGlsZCwgY2hpbGRPdXRsZXQpID0+IHRoaXMucHJvY2Vzc1NlZ21lbnRHcm91cChjb25maWcsIGNoaWxkLCBjaGlsZE91dGxldCkpO1xuICAgIGNoZWNrT3V0bGV0TmFtZVVuaXF1ZW5lc3MoY2hpbGRyZW4pO1xuICAgIHNvcnRBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90cyhjaGlsZHJlbik7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgcHJvY2Vzc1NlZ21lbnQoXG4gICAgICBjb25maWc6IFJvdXRlW10sIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgb3V0bGV0OiBzdHJpbmcpOiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PltdIHtcbiAgICBmb3IgKGNvbnN0IHIgb2YgY29uZmlnKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2VnbWVudEFnYWluc3RSb3V0ZShyLCBzZWdtZW50R3JvdXAsIHNlZ21lbnRzLCBvdXRsZXQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgTm9NYXRjaCkpIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5vTGVmdG92ZXJzSW5Vcmwoc2VnbWVudEdyb3VwLCBzZWdtZW50cywgb3V0bGV0KSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBOb01hdGNoKCk7XG4gIH1cblxuICBwcml2YXRlIG5vTGVmdG92ZXJzSW5Vcmwoc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIG91dGxldDogc3RyaW5nKTpcbiAgICAgIGJvb2xlYW4ge1xuICAgIHJldHVybiBzZWdtZW50cy5sZW5ndGggPT09IDAgJiYgIXNlZ21lbnRHcm91cC5jaGlsZHJlbltvdXRsZXRdO1xuICB9XG5cbiAgcHJvY2Vzc1NlZ21lbnRBZ2FpbnN0Um91dGUoXG4gICAgICByb3V0ZTogUm91dGUsIHJhd1NlZ21lbnQ6IFVybFNlZ21lbnRHcm91cCwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICAgIG91dGxldDogc3RyaW5nKTogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD5bXSB7XG4gICAgaWYgKHJvdXRlLnJlZGlyZWN0VG8pIHRocm93IG5ldyBOb01hdGNoKCk7XG5cbiAgICBpZiAoKHJvdXRlLm91dGxldCB8fCBQUklNQVJZX09VVExFVCkgIT09IG91dGxldCkgdGhyb3cgbmV3IE5vTWF0Y2goKTtcblxuICAgIGxldCBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbiAgICBsZXQgY29uc3VtZWRTZWdtZW50czogVXJsU2VnbWVudFtdID0gW107XG4gICAgbGV0IHJhd1NsaWNlZFNlZ21lbnRzOiBVcmxTZWdtZW50W10gPSBbXTtcblxuICAgIGlmIChyb3V0ZS5wYXRoID09PSAnKionKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBzZWdtZW50cy5sZW5ndGggPiAwID8gbGFzdChzZWdtZW50cykhLnBhcmFtZXRlcnMgOiB7fTtcbiAgICAgIHNuYXBzaG90ID0gbmV3IEFjdGl2YXRlZFJvdXRlU25hcHNob3QoXG4gICAgICAgICAgc2VnbWVudHMsIHBhcmFtcywgT2JqZWN0LmZyZWV6ZSh7Li4udGhpcy51cmxUcmVlLnF1ZXJ5UGFyYW1zfSksIHRoaXMudXJsVHJlZS5mcmFnbWVudCEsXG4gICAgICAgICAgZ2V0RGF0YShyb3V0ZSksIG91dGxldCwgcm91dGUuY29tcG9uZW50ISwgcm91dGUsIGdldFNvdXJjZVNlZ21lbnRHcm91cChyYXdTZWdtZW50KSxcbiAgICAgICAgICBnZXRQYXRoSW5kZXhTaGlmdChyYXdTZWdtZW50KSArIHNlZ21lbnRzLmxlbmd0aCwgZ2V0UmVzb2x2ZShyb3V0ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHQ6IE1hdGNoUmVzdWx0ID0gbWF0Y2gocmF3U2VnbWVudCwgcm91dGUsIHNlZ21lbnRzKTtcbiAgICAgIGNvbnN1bWVkU2VnbWVudHMgPSByZXN1bHQuY29uc3VtZWRTZWdtZW50cztcbiAgICAgIHJhd1NsaWNlZFNlZ21lbnRzID0gc2VnbWVudHMuc2xpY2UocmVzdWx0Lmxhc3RDaGlsZCk7XG5cbiAgICAgIHNuYXBzaG90ID0gbmV3IEFjdGl2YXRlZFJvdXRlU25hcHNob3QoXG4gICAgICAgICAgY29uc3VtZWRTZWdtZW50cywgcmVzdWx0LnBhcmFtZXRlcnMsIE9iamVjdC5mcmVlemUoey4uLnRoaXMudXJsVHJlZS5xdWVyeVBhcmFtc30pLFxuICAgICAgICAgIHRoaXMudXJsVHJlZS5mcmFnbWVudCEsIGdldERhdGEocm91dGUpLCBvdXRsZXQsIHJvdXRlLmNvbXBvbmVudCEsIHJvdXRlLFxuICAgICAgICAgIGdldFNvdXJjZVNlZ21lbnRHcm91cChyYXdTZWdtZW50KSxcbiAgICAgICAgICBnZXRQYXRoSW5kZXhTaGlmdChyYXdTZWdtZW50KSArIGNvbnN1bWVkU2VnbWVudHMubGVuZ3RoLCBnZXRSZXNvbHZlKHJvdXRlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRDb25maWc6IFJvdXRlW10gPSBnZXRDaGlsZENvbmZpZyhyb3V0ZSk7XG5cbiAgICBjb25zdCB7c2VnbWVudEdyb3VwLCBzbGljZWRTZWdtZW50c30gPSBzcGxpdChcbiAgICAgICAgcmF3U2VnbWVudCwgY29uc3VtZWRTZWdtZW50cywgcmF3U2xpY2VkU2VnbWVudHMsIGNoaWxkQ29uZmlnLCB0aGlzLnJlbGF0aXZlTGlua1Jlc29sdXRpb24pO1xuXG4gICAgaWYgKHNsaWNlZFNlZ21lbnRzLmxlbmd0aCA9PT0gMCAmJiBzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnByb2Nlc3NDaGlsZHJlbihjaGlsZENvbmZpZywgc2VnbWVudEdyb3VwKTtcbiAgICAgIHJldHVybiBbbmV3IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+KHNuYXBzaG90LCBjaGlsZHJlbildO1xuICAgIH1cblxuICAgIGlmIChjaGlsZENvbmZpZy5sZW5ndGggPT09IDAgJiYgc2xpY2VkU2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW25ldyBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PihzbmFwc2hvdCwgW10pXTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucHJvY2Vzc1NlZ21lbnQoY2hpbGRDb25maWcsIHNlZ21lbnRHcm91cCwgc2xpY2VkU2VnbWVudHMsIFBSSU1BUllfT1VUTEVUKTtcbiAgICByZXR1cm4gW25ldyBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PihzbmFwc2hvdCwgY2hpbGRyZW4pXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0QWN0aXZhdGVkUm91dGVTbmFwc2hvdHMobm9kZXM6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+W10pOiB2b2lkIHtcbiAgbm9kZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLnZhbHVlLm91dGxldCA9PT0gUFJJTUFSWV9PVVRMRVQpIHJldHVybiAtMTtcbiAgICBpZiAoYi52YWx1ZS5vdXRsZXQgPT09IFBSSU1BUllfT1VUTEVUKSByZXR1cm4gMTtcbiAgICByZXR1cm4gYS52YWx1ZS5vdXRsZXQubG9jYWxlQ29tcGFyZShiLnZhbHVlLm91dGxldCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDaGlsZENvbmZpZyhyb3V0ZTogUm91dGUpOiBSb3V0ZVtdIHtcbiAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIHJvdXRlLmNoaWxkcmVuO1xuICB9XG5cbiAgaWYgKHJvdXRlLmxvYWRDaGlsZHJlbikge1xuICAgIHJldHVybiByb3V0ZS5fbG9hZGVkQ29uZmlnIS5yb3V0ZXM7XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbmludGVyZmFjZSBNYXRjaFJlc3VsdCB7XG4gIGNvbnN1bWVkU2VnbWVudHM6IFVybFNlZ21lbnRbXTtcbiAgbGFzdENoaWxkOiBudW1iZXI7XG4gIHBhcmFtZXRlcnM6IGFueTtcbn1cblxuZnVuY3Rpb24gbWF0Y2goc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHJvdXRlOiBSb3V0ZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IE1hdGNoUmVzdWx0IHtcbiAgaWYgKHJvdXRlLnBhdGggPT09ICcnKSB7XG4gICAgaWYgKHJvdXRlLnBhdGhNYXRjaCA9PT0gJ2Z1bGwnICYmIChzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSB8fCBzZWdtZW50cy5sZW5ndGggPiAwKSkge1xuICAgICAgdGhyb3cgbmV3IE5vTWF0Y2goKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NvbnN1bWVkU2VnbWVudHM6IFtdLCBsYXN0Q2hpbGQ6IDAsIHBhcmFtZXRlcnM6IHt9fTtcbiAgfVxuXG4gIGNvbnN0IG1hdGNoZXIgPSByb3V0ZS5tYXRjaGVyIHx8IGRlZmF1bHRVcmxNYXRjaGVyO1xuICBjb25zdCByZXMgPSBtYXRjaGVyKHNlZ21lbnRzLCBzZWdtZW50R3JvdXAsIHJvdXRlKTtcbiAgaWYgKCFyZXMpIHRocm93IG5ldyBOb01hdGNoKCk7XG5cbiAgY29uc3QgcG9zUGFyYW1zOiB7W246IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgZm9yRWFjaChyZXMucG9zUGFyYW1zISwgKHY6IFVybFNlZ21lbnQsIGs6IHN0cmluZykgPT4ge1xuICAgIHBvc1BhcmFtc1trXSA9IHYucGF0aDtcbiAgfSk7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSByZXMuY29uc3VtZWQubGVuZ3RoID4gMCA/XG4gICAgICB7Li4ucG9zUGFyYW1zLCAuLi5yZXMuY29uc3VtZWRbcmVzLmNvbnN1bWVkLmxlbmd0aCAtIDFdLnBhcmFtZXRlcnN9IDpcbiAgICAgIHBvc1BhcmFtcztcblxuICByZXR1cm4ge2NvbnN1bWVkU2VnbWVudHM6IHJlcy5jb25zdW1lZCwgbGFzdENoaWxkOiByZXMuY29uc3VtZWQubGVuZ3RoLCBwYXJhbWV0ZXJzfTtcbn1cblxuZnVuY3Rpb24gY2hlY2tPdXRsZXROYW1lVW5pcXVlbmVzcyhub2RlczogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD5bXSk6IHZvaWQge1xuICBjb25zdCBuYW1lczoge1trOiBzdHJpbmddOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSA9IHt9O1xuICBub2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgIGNvbnN0IHJvdXRlV2l0aFNhbWVPdXRsZXROYW1lID0gbmFtZXNbbi52YWx1ZS5vdXRsZXRdO1xuICAgIGlmIChyb3V0ZVdpdGhTYW1lT3V0bGV0TmFtZSkge1xuICAgICAgY29uc3QgcCA9IHJvdXRlV2l0aFNhbWVPdXRsZXROYW1lLnVybC5tYXAocyA9PiBzLnRvU3RyaW5nKCkpLmpvaW4oJy8nKTtcbiAgICAgIGNvbnN0IGMgPSBuLnZhbHVlLnVybC5tYXAocyA9PiBzLnRvU3RyaW5nKCkpLmpvaW4oJy8nKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHdvIHNlZ21lbnRzIGNhbm5vdCBoYXZlIHRoZSBzYW1lIG91dGxldCBuYW1lOiAnJHtwfScgYW5kICcke2N9Jy5gKTtcbiAgICB9XG4gICAgbmFtZXNbbi52YWx1ZS5vdXRsZXRdID0gbi52YWx1ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZVNlZ21lbnRHcm91cChzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCk6IFVybFNlZ21lbnRHcm91cCB7XG4gIGxldCBzID0gc2VnbWVudEdyb3VwO1xuICB3aGlsZSAocy5fc291cmNlU2VnbWVudCkge1xuICAgIHMgPSBzLl9zb3VyY2VTZWdtZW50O1xuICB9XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiBnZXRQYXRoSW5kZXhTaGlmdChzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCk6IG51bWJlciB7XG4gIGxldCBzID0gc2VnbWVudEdyb3VwO1xuICBsZXQgcmVzID0gKHMuX3NlZ21lbnRJbmRleFNoaWZ0ID8gcy5fc2VnbWVudEluZGV4U2hpZnQgOiAwKTtcbiAgd2hpbGUgKHMuX3NvdXJjZVNlZ21lbnQpIHtcbiAgICBzID0gcy5fc291cmNlU2VnbWVudDtcbiAgICByZXMgKz0gKHMuX3NlZ21lbnRJbmRleFNoaWZ0ID8gcy5fc2VnbWVudEluZGV4U2hpZnQgOiAwKTtcbiAgfVxuICByZXR1cm4gcmVzIC0gMTtcbn1cblxuZnVuY3Rpb24gc3BsaXQoXG4gICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIGNvbnN1bWVkU2VnbWVudHM6IFVybFNlZ21lbnRbXSwgc2xpY2VkU2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICBjb25maWc6IFJvdXRlW10sIHJlbGF0aXZlTGlua1Jlc29sdXRpb246ICdsZWdhY3knfCdjb3JyZWN0ZWQnKSB7XG4gIGlmIChzbGljZWRTZWdtZW50cy5sZW5ndGggPiAwICYmXG4gICAgICBjb250YWluc0VtcHR5UGF0aE1hdGNoZXNXaXRoTmFtZWRPdXRsZXRzKHNlZ21lbnRHcm91cCwgc2xpY2VkU2VnbWVudHMsIGNvbmZpZykpIHtcbiAgICBjb25zdCBzID0gbmV3IFVybFNlZ21lbnRHcm91cChcbiAgICAgICAgY29uc3VtZWRTZWdtZW50cyxcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW5Gb3JFbXB0eVBhdGhzKFxuICAgICAgICAgICAgc2VnbWVudEdyb3VwLCBjb25zdW1lZFNlZ21lbnRzLCBjb25maWcsXG4gICAgICAgICAgICBuZXcgVXJsU2VnbWVudEdyb3VwKHNsaWNlZFNlZ21lbnRzLCBzZWdtZW50R3JvdXAuY2hpbGRyZW4pKSk7XG4gICAgcy5fc291cmNlU2VnbWVudCA9IHNlZ21lbnRHcm91cDtcbiAgICBzLl9zZWdtZW50SW5kZXhTaGlmdCA9IGNvbnN1bWVkU2VnbWVudHMubGVuZ3RoO1xuICAgIHJldHVybiB7c2VnbWVudEdyb3VwOiBzLCBzbGljZWRTZWdtZW50czogW119O1xuICB9XG5cbiAgaWYgKHNsaWNlZFNlZ21lbnRzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgY29udGFpbnNFbXB0eVBhdGhNYXRjaGVzKHNlZ21lbnRHcm91cCwgc2xpY2VkU2VnbWVudHMsIGNvbmZpZykpIHtcbiAgICBjb25zdCBzID0gbmV3IFVybFNlZ21lbnRHcm91cChcbiAgICAgICAgc2VnbWVudEdyb3VwLnNlZ21lbnRzLFxuICAgICAgICBhZGRFbXB0eVBhdGhzVG9DaGlsZHJlbklmTmVlZGVkKFxuICAgICAgICAgICAgc2VnbWVudEdyb3VwLCBjb25zdW1lZFNlZ21lbnRzLCBzbGljZWRTZWdtZW50cywgY29uZmlnLCBzZWdtZW50R3JvdXAuY2hpbGRyZW4sXG4gICAgICAgICAgICByZWxhdGl2ZUxpbmtSZXNvbHV0aW9uKSk7XG4gICAgcy5fc291cmNlU2VnbWVudCA9IHNlZ21lbnRHcm91cDtcbiAgICBzLl9zZWdtZW50SW5kZXhTaGlmdCA9IGNvbnN1bWVkU2VnbWVudHMubGVuZ3RoO1xuICAgIHJldHVybiB7c2VnbWVudEdyb3VwOiBzLCBzbGljZWRTZWdtZW50c307XG4gIH1cblxuICBjb25zdCBzID0gbmV3IFVybFNlZ21lbnRHcm91cChzZWdtZW50R3JvdXAuc2VnbWVudHMsIHNlZ21lbnRHcm91cC5jaGlsZHJlbik7XG4gIHMuX3NvdXJjZVNlZ21lbnQgPSBzZWdtZW50R3JvdXA7XG4gIHMuX3NlZ21lbnRJbmRleFNoaWZ0ID0gY29uc3VtZWRTZWdtZW50cy5sZW5ndGg7XG4gIHJldHVybiB7c2VnbWVudEdyb3VwOiBzLCBzbGljZWRTZWdtZW50c307XG59XG5cbmZ1bmN0aW9uIGFkZEVtcHR5UGF0aHNUb0NoaWxkcmVuSWZOZWVkZWQoXG4gICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIGNvbnN1bWVkU2VnbWVudHM6IFVybFNlZ21lbnRbXSwgc2xpY2VkU2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICByb3V0ZXM6IFJvdXRlW10sIGNoaWxkcmVuOiB7W25hbWU6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0sXG4gICAgcmVsYXRpdmVMaW5rUmVzb2x1dGlvbjogJ2xlZ2FjeSd8J2NvcnJlY3RlZCcpOiB7W25hbWU6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0ge1xuICBjb25zdCByZXM6IHtbbmFtZTogc3RyaW5nXTogVXJsU2VnbWVudEdyb3VwfSA9IHt9O1xuICBmb3IgKGNvbnN0IHIgb2Ygcm91dGVzKSB7XG4gICAgaWYgKGVtcHR5UGF0aE1hdGNoKHNlZ21lbnRHcm91cCwgc2xpY2VkU2VnbWVudHMsIHIpICYmICFjaGlsZHJlbltnZXRPdXRsZXQocildKSB7XG4gICAgICBjb25zdCBzID0gbmV3IFVybFNlZ21lbnRHcm91cChbXSwge30pO1xuICAgICAgcy5fc291cmNlU2VnbWVudCA9IHNlZ21lbnRHcm91cDtcbiAgICAgIGlmIChyZWxhdGl2ZUxpbmtSZXNvbHV0aW9uID09PSAnbGVnYWN5Jykge1xuICAgICAgICBzLl9zZWdtZW50SW5kZXhTaGlmdCA9IHNlZ21lbnRHcm91cC5zZWdtZW50cy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzLl9zZWdtZW50SW5kZXhTaGlmdCA9IGNvbnN1bWVkU2VnbWVudHMubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmVzW2dldE91dGxldChyKV0gPSBzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gey4uLmNoaWxkcmVuLCAuLi5yZXN9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGlsZHJlbkZvckVtcHR5UGF0aHMoXG4gICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIGNvbnN1bWVkU2VnbWVudHM6IFVybFNlZ21lbnRbXSwgcm91dGVzOiBSb3V0ZVtdLFxuICAgIHByaW1hcnlTZWdtZW50OiBVcmxTZWdtZW50R3JvdXApOiB7W25hbWU6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0ge1xuICBjb25zdCByZXM6IHtbbmFtZTogc3RyaW5nXTogVXJsU2VnbWVudEdyb3VwfSA9IHt9O1xuICByZXNbUFJJTUFSWV9PVVRMRVRdID0gcHJpbWFyeVNlZ21lbnQ7XG4gIHByaW1hcnlTZWdtZW50Ll9zb3VyY2VTZWdtZW50ID0gc2VnbWVudEdyb3VwO1xuICBwcmltYXJ5U2VnbWVudC5fc2VnbWVudEluZGV4U2hpZnQgPSBjb25zdW1lZFNlZ21lbnRzLmxlbmd0aDtcblxuICBmb3IgKGNvbnN0IHIgb2Ygcm91dGVzKSB7XG4gICAgaWYgKHIucGF0aCA9PT0gJycgJiYgZ2V0T3V0bGV0KHIpICE9PSBQUklNQVJZX09VVExFVCkge1xuICAgICAgY29uc3QgcyA9IG5ldyBVcmxTZWdtZW50R3JvdXAoW10sIHt9KTtcbiAgICAgIHMuX3NvdXJjZVNlZ21lbnQgPSBzZWdtZW50R3JvdXA7XG4gICAgICBzLl9zZWdtZW50SW5kZXhTaGlmdCA9IGNvbnN1bWVkU2VnbWVudHMubGVuZ3RoO1xuICAgICAgcmVzW2dldE91dGxldChyKV0gPSBzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBjb250YWluc0VtcHR5UGF0aE1hdGNoZXNXaXRoTmFtZWRPdXRsZXRzKFxuICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBzbGljZWRTZWdtZW50czogVXJsU2VnbWVudFtdLCByb3V0ZXM6IFJvdXRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHJvdXRlcy5zb21lKFxuICAgICAgciA9PiBlbXB0eVBhdGhNYXRjaChzZWdtZW50R3JvdXAsIHNsaWNlZFNlZ21lbnRzLCByKSAmJiBnZXRPdXRsZXQocikgIT09IFBSSU1BUllfT1VUTEVUKTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNFbXB0eVBhdGhNYXRjaGVzKFxuICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBzbGljZWRTZWdtZW50czogVXJsU2VnbWVudFtdLCByb3V0ZXM6IFJvdXRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHJvdXRlcy5zb21lKHIgPT4gZW1wdHlQYXRoTWF0Y2goc2VnbWVudEdyb3VwLCBzbGljZWRTZWdtZW50cywgcikpO1xufVxuXG5mdW5jdGlvbiBlbXB0eVBhdGhNYXRjaChcbiAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgc2xpY2VkU2VnbWVudHM6IFVybFNlZ21lbnRbXSwgcjogUm91dGUpOiBib29sZWFuIHtcbiAgaWYgKChzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSB8fCBzbGljZWRTZWdtZW50cy5sZW5ndGggPiAwKSAmJiByLnBhdGhNYXRjaCA9PT0gJ2Z1bGwnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHIucGF0aCA9PT0gJycgJiYgci5yZWRpcmVjdFRvID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGdldE91dGxldChyb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICByZXR1cm4gcm91dGUub3V0bGV0IHx8IFBSSU1BUllfT1VUTEVUO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhKHJvdXRlOiBSb3V0ZSk6IERhdGEge1xuICByZXR1cm4gcm91dGUuZGF0YSB8fCB7fTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVzb2x2ZShyb3V0ZTogUm91dGUpOiBSZXNvbHZlRGF0YSB7XG4gIHJldHVybiByb3V0ZS5yZXNvbHZlIHx8IHt9O1xufVxuIl19