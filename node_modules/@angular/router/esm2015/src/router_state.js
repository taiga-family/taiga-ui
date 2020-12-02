/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/router_state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertToParamMap, PRIMARY_OUTLET } from './shared';
import { equalSegments, UrlSegment } from './url_tree';
import { shallowEqual, shallowEqualArrays } from './utils/collection';
import { Tree, TreeNode } from './utils/tree';
/**
 * Represents the state of the router as a tree of activated routes.
 *
 * \@usageNotes
 *
 * Every node in the route tree is an `ActivatedRoute` instance
 * that knows about the "consumed" URL segments, the extracted parameters,
 * and the resolved data.
 * Use the `ActivatedRoute` properties to traverse the tree from any node.
 *
 * ### Example
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @see `ActivatedRoute`
 *
 * \@publicApi
 */
export class RouterState extends Tree {
    /**
     * \@internal
     * @param {?} root
     * @param {?} snapshot
     */
    constructor(root, snapshot) {
        super(root);
        this.snapshot = snapshot;
        setRouterState((/** @type {?} */ (this)), root);
    }
    /**
     * @return {?}
     */
    toString() {
        return this.snapshot.toString();
    }
}
if (false) {
    /**
     * The current snapshot of the router state
     * @type {?}
     */
    RouterState.prototype.snapshot;
}
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
export function createEmptyState(urlTree, rootComponent) {
    /** @type {?} */
    const snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
    /** @type {?} */
    const emptyUrl = new BehaviorSubject([new UrlSegment('', {})]);
    /** @type {?} */
    const emptyParams = new BehaviorSubject({});
    /** @type {?} */
    const emptyData = new BehaviorSubject({});
    /** @type {?} */
    const emptyQueryParams = new BehaviorSubject({});
    /** @type {?} */
    const fragment = new BehaviorSubject('');
    /** @type {?} */
    const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
    activated.snapshot = snapshot.root;
    return new RouterState(new TreeNode(activated, []), snapshot);
}
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
export function createEmptyStateSnapshot(urlTree, rootComponent) {
    /** @type {?} */
    const emptyParams = {};
    /** @type {?} */
    const emptyData = {};
    /** @type {?} */
    const emptyQueryParams = {};
    /** @type {?} */
    const fragment = '';
    /** @type {?} */
    const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, {});
    return new RouterStateSnapshot('', new TreeNode(activated, []));
}
/**
 * Provides access to information about a route associated with a component
 * that is loaded in an outlet.
 * Use to traverse the `RouterState` tree and extract information from nodes.
 *
 * {\@example router/activated-route/module.ts region="activated-route"
 *     header="activated-route.component.ts"}
 *
 * \@publicApi
 */
export class ActivatedRoute {
    /**
     * \@internal
     * @param {?} url
     * @param {?} params
     * @param {?} queryParams
     * @param {?} fragment
     * @param {?} data
     * @param {?} outlet
     * @param {?} component
     * @param {?} futureSnapshot
     */
    constructor(url, params, queryParams, fragment, data, outlet, component, futureSnapshot) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
    }
    /**
     * The configuration used to match this route.
     * @return {?}
     */
    get routeConfig() {
        return this._futureSnapshot.routeConfig;
    }
    /**
     * The root of the router state.
     * @return {?}
     */
    get root() {
        return this._routerState.root;
    }
    /**
     * The parent of this route in the router state tree.
     * @return {?}
     */
    get parent() {
        return this._routerState.parent(this);
    }
    /**
     * The first child of this route in the router state tree.
     * @return {?}
     */
    get firstChild() {
        return this._routerState.firstChild(this);
    }
    /**
     * The children of this route in the router state tree.
     * @return {?}
     */
    get children() {
        return this._routerState.children(this);
    }
    /**
     * The path from the root of the router state tree to this route.
     * @return {?}
     */
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
    }
    /**
     * An Observable that contains a map of the required and optional parameters
     * specific to the route.
     * The map supports retrieving single and multiple values from the same parameter.
     * @return {?}
     */
    get paramMap() {
        if (!this._paramMap) {
            this._paramMap = this.params.pipe(map((/**
             * @param {?} p
             * @return {?}
             */
            (p) => convertToParamMap(p))));
        }
        return this._paramMap;
    }
    /**
     * An Observable that contains a map of the query parameters available to all routes.
     * The map supports retrieving single and multiple values from the query parameter.
     * @return {?}
     */
    get queryParamMap() {
        if (!this._queryParamMap) {
            this._queryParamMap =
                this.queryParams.pipe(map((/**
                 * @param {?} p
                 * @return {?}
                 */
                (p) => convertToParamMap(p))));
        }
        return this._queryParamMap;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
    }
}
if (false) {
    /**
     * The current snapshot of this route
     * @type {?}
     */
    ActivatedRoute.prototype.snapshot;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRoute.prototype._futureSnapshot;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRoute.prototype._routerState;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRoute.prototype._paramMap;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRoute.prototype._queryParamMap;
    /**
     * An observable of the URL segments matched by this route.
     * @type {?}
     */
    ActivatedRoute.prototype.url;
    /**
     * An observable of the matrix parameters scoped to this route.
     * @type {?}
     */
    ActivatedRoute.prototype.params;
    /**
     * An observable of the query parameters shared by all the routes.
     * @type {?}
     */
    ActivatedRoute.prototype.queryParams;
    /**
     * An observable of the URL fragment shared by all the routes.
     * @type {?}
     */
    ActivatedRoute.prototype.fragment;
    /**
     * An observable of the static and resolved data of this route.
     * @type {?}
     */
    ActivatedRoute.prototype.data;
    /**
     * The outlet name of the route, a constant.
     * @type {?}
     */
    ActivatedRoute.prototype.outlet;
    /**
     * The component of the route, a constant.
     * @type {?}
     */
    ActivatedRoute.prototype.component;
}
/**
 * Returns the inherited params, data, and resolve for a given route.
 * By default, this only inherits values up to the nearest path-less or component-less route.
 * \@internal
 * @param {?} route
 * @param {?=} paramsInheritanceStrategy
 * @return {?}
 */
export function inheritedParamsDataResolve(route, paramsInheritanceStrategy = 'emptyOnly') {
    /** @type {?} */
    const pathFromRoot = route.pathFromRoot;
    /** @type {?} */
    let inheritingStartingFrom = 0;
    if (paramsInheritanceStrategy !== 'always') {
        inheritingStartingFrom = pathFromRoot.length - 1;
        while (inheritingStartingFrom >= 1) {
            /** @type {?} */
            const current = pathFromRoot[inheritingStartingFrom];
            /** @type {?} */
            const parent = pathFromRoot[inheritingStartingFrom - 1];
            // current route is an empty path => inherits its parent's params and data
            if (current.routeConfig && current.routeConfig.path === '') {
                inheritingStartingFrom--;
                // parent is componentless => current route should inherit its params and data
            }
            else if (!parent.component) {
                inheritingStartingFrom--;
            }
            else {
                break;
            }
        }
    }
    return flattenInherited(pathFromRoot.slice(inheritingStartingFrom));
}
/**
 * \@internal
 * @param {?} pathFromRoot
 * @return {?}
 */
function flattenInherited(pathFromRoot) {
    return pathFromRoot.reduce((/**
     * @param {?} res
     * @param {?} curr
     * @return {?}
     */
    (res, curr) => {
        /** @type {?} */
        const params = Object.assign(Object.assign({}, res.params), curr.params);
        /** @type {?} */
        const data = Object.assign(Object.assign({}, res.data), curr.data);
        /** @type {?} */
        const resolve = Object.assign(Object.assign({}, res.resolve), curr._resolvedData);
        return { params, data, resolve };
    }), (/** @type {?} */ ({ params: {}, data: {}, resolve: {} })));
}
/**
 * \@description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
 * traverse the router state tree.
 *
 * ```
 * \@Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 * \@publicApi
 */
export class ActivatedRouteSnapshot {
    /**
     * \@internal
     * @param {?} url
     * @param {?} params
     * @param {?} queryParams
     * @param {?} fragment
     * @param {?} data
     * @param {?} outlet
     * @param {?} component
     * @param {?} routeConfig
     * @param {?} urlSegment
     * @param {?} lastPathIndex
     * @param {?} resolve
     */
    constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, urlSegment, lastPathIndex, resolve) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this.routeConfig = routeConfig;
        this._urlSegment = urlSegment;
        this._lastPathIndex = lastPathIndex;
        this._resolve = resolve;
    }
    /**
     * The root of the router state
     * @return {?}
     */
    get root() {
        return this._routerState.root;
    }
    /**
     * The parent of this route in the router state tree
     * @return {?}
     */
    get parent() {
        return this._routerState.parent(this);
    }
    /**
     * The first child of this route in the router state tree
     * @return {?}
     */
    get firstChild() {
        return this._routerState.firstChild(this);
    }
    /**
     * The children of this route in the router state tree
     * @return {?}
     */
    get children() {
        return this._routerState.children(this);
    }
    /**
     * The path from the root of the router state tree to this route
     * @return {?}
     */
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
    }
    /**
     * @return {?}
     */
    get paramMap() {
        if (!this._paramMap) {
            this._paramMap = convertToParamMap(this.params);
        }
        return this._paramMap;
    }
    /**
     * @return {?}
     */
    get queryParamMap() {
        if (!this._queryParamMap) {
            this._queryParamMap = convertToParamMap(this.queryParams);
        }
        return this._queryParamMap;
    }
    /**
     * @return {?}
     */
    toString() {
        /** @type {?} */
        const url = this.url.map((/**
         * @param {?} segment
         * @return {?}
         */
        segment => segment.toString())).join('/');
        /** @type {?} */
        const matched = this.routeConfig ? this.routeConfig.path : '';
        return `Route(url:'${url}', path:'${matched}')`;
    }
}
if (false) {
    /**
     * The configuration used to match this route *
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.routeConfig;
    /**
     * \@internal *
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._urlSegment;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._lastPathIndex;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._resolve;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._resolvedData;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._routerState;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._paramMap;
    /**
     * \@internal
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype._queryParamMap;
    /**
     * The URL segments matched by this route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.url;
    /**
     * The matrix parameters scoped to this route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.params;
    /**
     * The query parameters shared by all the routes
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.queryParams;
    /**
     * The URL fragment shared by all the routes
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.fragment;
    /**
     * The static and resolved data of this route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.data;
    /**
     * The outlet name of the route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.outlet;
    /**
     * The component of the route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.component;
}
/**
 * \@description
 *
 * Represents the state of the router at a moment in time.
 *
 * This is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * \@usageNotes
 * ### Example
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * \@publicApi
 */
export class RouterStateSnapshot extends Tree {
    /**
     * \@internal
     * @param {?} url
     * @param {?} root
     */
    constructor(url, root) {
        super(root);
        this.url = url;
        setRouterState((/** @type {?} */ (this)), root);
    }
    /**
     * @return {?}
     */
    toString() {
        return serializeNode(this._root);
    }
}
if (false) {
    /**
     * The url from which this snapshot was created
     * @type {?}
     */
    RouterStateSnapshot.prototype.url;
}
/**
 * @template U, T
 * @param {?} state
 * @param {?} node
 * @return {?}
 */
function setRouterState(state, node) {
    node.value._routerState = state;
    node.children.forEach((/**
     * @param {?} c
     * @return {?}
     */
    c => setRouterState(state, c)));
}
/**
 * @param {?} node
 * @return {?}
 */
function serializeNode(node) {
    /** @type {?} */
    const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(', ')} } ` : '';
    return `${node.value}${c}`;
}
/**
 * The expectation is that the activate route is created with the right set of parameters.
 * So we push new values into the observables only when they are not the initial values.
 * And we detect that by checking if the snapshot field is set.
 * @param {?} route
 * @return {?}
 */
export function advanceActivatedRoute(route) {
    if (route.snapshot) {
        /** @type {?} */
        const currentSnapshot = route.snapshot;
        /** @type {?} */
        const nextSnapshot = route._futureSnapshot;
        route.snapshot = nextSnapshot;
        if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
            ((/** @type {?} */ (route.queryParams))).next(nextSnapshot.queryParams);
        }
        if (currentSnapshot.fragment !== nextSnapshot.fragment) {
            ((/** @type {?} */ (route.fragment))).next(nextSnapshot.fragment);
        }
        if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
            ((/** @type {?} */ (route.params))).next(nextSnapshot.params);
        }
        if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
            ((/** @type {?} */ (route.url))).next(nextSnapshot.url);
        }
        if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
            ((/** @type {?} */ (route.data))).next(nextSnapshot.data);
        }
    }
    else {
        route.snapshot = route._futureSnapshot;
        // this is for resolved data
        ((/** @type {?} */ (route.data))).next(route._futureSnapshot.data);
    }
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function equalParamsAndUrlSegments(a, b) {
    /** @type {?} */
    const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
    /** @type {?} */
    const parentsMismatch = !a.parent !== !b.parent;
    return equalUrlParams && !parentsMismatch &&
        (!a.parent || equalParamsAndUrlSegments(a.parent, (/** @type {?} */ (b.parent))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3N0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9yb3V0ZXJfc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkMsT0FBTyxFQUFDLGlCQUFpQixFQUFvQixjQUFjLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBRSxVQUFVLEVBQTJCLE1BQU0sWUFBWSxDQUFDO0FBQy9FLE9BQU8sRUFBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUM1QyxNQUFNLE9BQU8sV0FBWSxTQUFRLElBQW9COzs7Ozs7SUFFbkQsWUFDSSxJQUE4QixFQUV2QixRQUE2QjtRQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFESCxhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUV0QyxjQUFjLENBQUMsbUJBQWEsSUFBSSxFQUFBLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNGOzs7Ozs7SUFSSywrQkFBb0M7Ozs7Ozs7QUFVMUMsTUFBTSxVQUFVLGdCQUFnQixDQUFDLE9BQWdCLEVBQUUsYUFBNkI7O1VBQ3hFLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDOztVQUMzRCxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxJQUFJ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QUksRUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEQ7QUFDSCxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUseUJBQXlCLENBQ3JDLENBQXlCLEVBQUUsQ0FBeUI7O1VBQ2hELGNBQWMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7VUFDaEYsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBRS9DLE9BQU8sY0FBYyxJQUFJLENBQUMsZUFBZTtRQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLG1CQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7RGF0YSwgUmVzb2x2ZURhdGEsIFJvdXRlfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge2NvbnZlcnRUb1BhcmFtTWFwLCBQYXJhbU1hcCwgUGFyYW1zLCBQUklNQVJZX09VVExFVH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHtlcXVhbFNlZ21lbnRzLCBVcmxTZWdtZW50LCBVcmxTZWdtZW50R3JvdXAsIFVybFRyZWV9IGZyb20gJy4vdXJsX3RyZWUnO1xuaW1wb3J0IHtzaGFsbG93RXF1YWwsIHNoYWxsb3dFcXVhbEFycmF5c30gZnJvbSAnLi91dGlscy9jb2xsZWN0aW9uJztcbmltcG9ydCB7VHJlZSwgVHJlZU5vZGV9IGZyb20gJy4vdXRpbHMvdHJlZSc7XG5cblxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIHN0YXRlIG9mIHRoZSByb3V0ZXIgYXMgYSB0cmVlIG9mIGFjdGl2YXRlZCByb3V0ZXMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBFdmVyeSBub2RlIGluIHRoZSByb3V0ZSB0cmVlIGlzIGFuIGBBY3RpdmF0ZWRSb3V0ZWAgaW5zdGFuY2VcbiAqIHRoYXQga25vd3MgYWJvdXQgdGhlIFwiY29uc3VtZWRcIiBVUkwgc2VnbWVudHMsIHRoZSBleHRyYWN0ZWQgcGFyYW1ldGVycyxcbiAqIGFuZCB0aGUgcmVzb2x2ZWQgZGF0YS5cbiAqIFVzZSB0aGUgYEFjdGl2YXRlZFJvdXRlYCBwcm9wZXJ0aWVzIHRvIHRyYXZlcnNlIHRoZSB0cmVlIGZyb20gYW55IG5vZGUuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIEBDb21wb25lbnQoe3RlbXBsYXRlVXJsOid0ZW1wbGF0ZS5odG1sJ30pXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XG4gKiAgICAgY29uc3Qgc3RhdGU6IFJvdXRlclN0YXRlID0gcm91dGVyLnJvdXRlclN0YXRlO1xuICogICAgIGNvbnN0IHJvb3Q6IEFjdGl2YXRlZFJvdXRlID0gc3RhdGUucm9vdDtcbiAqICAgICBjb25zdCBjaGlsZCA9IHJvb3QuZmlyc3RDaGlsZDtcbiAqICAgICBjb25zdCBpZDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gY2hpbGQucGFyYW1zLm1hcChwID0+IHAuaWQpO1xuICogICAgIC8vLi4uXG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBzZWUgYEFjdGl2YXRlZFJvdXRlYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFJvdXRlclN0YXRlIGV4dGVuZHMgVHJlZTxBY3RpdmF0ZWRSb3V0ZT4ge1xuICAvKiogQGludGVybmFsICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcm9vdDogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGU+LFxuICAgICAgLyoqIFRoZSBjdXJyZW50IHNuYXBzaG90IG9mIHRoZSByb3V0ZXIgc3RhdGUgKi9cbiAgICAgIHB1YmxpYyBzbmFwc2hvdDogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHN1cGVyKHJvb3QpO1xuICAgIHNldFJvdXRlclN0YXRlKDxSb3V0ZXJTdGF0ZT50aGlzLCByb290KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc25hcHNob3QudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1wdHlTdGF0ZSh1cmxUcmVlOiBVcmxUcmVlLCByb290Q29tcG9uZW50OiBUeXBlPGFueT58bnVsbCk6IFJvdXRlclN0YXRlIHtcbiAgY29uc3Qgc25hcHNob3QgPSBjcmVhdGVFbXB0eVN0YXRlU25hcHNob3QodXJsVHJlZSwgcm9vdENvbXBvbmVudCk7XG4gIGNvbnN0IGVtcHR5VXJsID0gbmV3IEJlaGF2aW9yU3ViamVjdChbbmV3IFVybFNlZ21lbnQoJycsIHt9KV0pO1xuICBjb25zdCBlbXB0eVBhcmFtcyA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICBjb25zdCBlbXB0eURhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgY29uc3QgZW1wdHlRdWVyeVBhcmFtcyA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICBjb25zdCBhY3RpdmF0ZWQgPSBuZXcgQWN0aXZhdGVkUm91dGUoXG4gICAgICBlbXB0eVVybCwgZW1wdHlQYXJhbXMsIGVtcHR5UXVlcnlQYXJhbXMsIGZyYWdtZW50LCBlbXB0eURhdGEsIFBSSU1BUllfT1VUTEVULCByb290Q29tcG9uZW50LFxuICAgICAgc25hcHNob3Qucm9vdCk7XG4gIGFjdGl2YXRlZC5zbmFwc2hvdCA9IHNuYXBzaG90LnJvb3Q7XG4gIHJldHVybiBuZXcgUm91dGVyU3RhdGUobmV3IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlPihhY3RpdmF0ZWQsIFtdKSwgc25hcHNob3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1wdHlTdGF0ZVNuYXBzaG90KFxuICAgIHVybFRyZWU6IFVybFRyZWUsIHJvb3RDb21wb25lbnQ6IFR5cGU8YW55PnxudWxsKTogUm91dGVyU3RhdGVTbmFwc2hvdCB7XG4gIGNvbnN0IGVtcHR5UGFyYW1zID0ge307XG4gIGNvbnN0IGVtcHR5RGF0YSA9IHt9O1xuICBjb25zdCBlbXB0eVF1ZXJ5UGFyYW1zID0ge307XG4gIGNvbnN0IGZyYWdtZW50ID0gJyc7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IG5ldyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KFxuICAgICAgW10sIGVtcHR5UGFyYW1zLCBlbXB0eVF1ZXJ5UGFyYW1zLCBmcmFnbWVudCwgZW1wdHlEYXRhLCBQUklNQVJZX09VVExFVCwgcm9vdENvbXBvbmVudCwgbnVsbCxcbiAgICAgIHVybFRyZWUucm9vdCwgLTEsIHt9KTtcbiAgcmV0dXJuIG5ldyBSb3V0ZXJTdGF0ZVNuYXBzaG90KCcnLCBuZXcgVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4oYWN0aXZhdGVkLCBbXSkpO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byBpbmZvcm1hdGlvbiBhYm91dCBhIHJvdXRlIGFzc29jaWF0ZWQgd2l0aCBhIGNvbXBvbmVudFxuICogdGhhdCBpcyBsb2FkZWQgaW4gYW4gb3V0bGV0LlxuICogVXNlIHRvIHRyYXZlcnNlIHRoZSBgUm91dGVyU3RhdGVgIHRyZWUgYW5kIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSBub2Rlcy5cbiAqXG4gKiB7QGV4YW1wbGUgcm91dGVyL2FjdGl2YXRlZC1yb3V0ZS9tb2R1bGUudHMgcmVnaW9uPVwiYWN0aXZhdGVkLXJvdXRlXCJcbiAqICAgICBoZWFkZXI9XCJhY3RpdmF0ZWQtcm91dGUuY29tcG9uZW50LnRzXCJ9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZhdGVkUm91dGUge1xuICAvKiogVGhlIGN1cnJlbnQgc25hcHNob3Qgb2YgdGhpcyByb3V0ZSAqL1xuICBzbmFwc2hvdCE6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Z1dHVyZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICAvKiogQGludGVybmFsICovXG4gIF9yb3V0ZXJTdGF0ZSE6IFJvdXRlclN0YXRlO1xuICAvKiogQGludGVybmFsICovXG4gIF9wYXJhbU1hcCE6IE9ic2VydmFibGU8UGFyYW1NYXA+O1xuICAvKiogQGludGVybmFsICovXG4gIF9xdWVyeVBhcmFtTWFwITogT2JzZXJ2YWJsZTxQYXJhbU1hcD47XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBVUkwgc2VnbWVudHMgbWF0Y2hlZCBieSB0aGlzIHJvdXRlLiAqL1xuICAgICAgcHVibGljIHVybDogT2JzZXJ2YWJsZTxVcmxTZWdtZW50W10+LFxuICAgICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIG1hdHJpeCBwYXJhbWV0ZXJzIHNjb3BlZCB0byB0aGlzIHJvdXRlLiAqL1xuICAgICAgcHVibGljIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+LFxuICAgICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgc2hhcmVkIGJ5IGFsbCB0aGUgcm91dGVzLiAqL1xuICAgICAgcHVibGljIHF1ZXJ5UGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz4sXG4gICAgICAvKiogQW4gb2JzZXJ2YWJsZSBvZiB0aGUgVVJMIGZyYWdtZW50IHNoYXJlZCBieSBhbGwgdGhlIHJvdXRlcy4gKi9cbiAgICAgIHB1YmxpYyBmcmFnbWVudDogT2JzZXJ2YWJsZTxzdHJpbmc+LFxuICAgICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIHN0YXRpYyBhbmQgcmVzb2x2ZWQgZGF0YSBvZiB0aGlzIHJvdXRlLiAqL1xuICAgICAgcHVibGljIGRhdGE6IE9ic2VydmFibGU8RGF0YT4sXG4gICAgICAvKiogVGhlIG91dGxldCBuYW1lIG9mIHRoZSByb3V0ZSwgYSBjb25zdGFudC4gKi9cbiAgICAgIHB1YmxpYyBvdXRsZXQ6IHN0cmluZyxcbiAgICAgIC8qKiBUaGUgY29tcG9uZW50IG9mIHRoZSByb3V0ZSwgYSBjb25zdGFudC4gKi9cbiAgICAgIC8vIFRPRE8odnNhdmtpbik6IHJlbW92ZSB8c3RyaW5nXG4gICAgICBwdWJsaWMgY29tcG9uZW50OiBUeXBlPGFueT58c3RyaW5nfG51bGwsIGZ1dHVyZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgdGhpcy5fZnV0dXJlU25hcHNob3QgPSBmdXR1cmVTbmFwc2hvdDtcbiAgfVxuXG4gIC8qKiBUaGUgY29uZmlndXJhdGlvbiB1c2VkIHRvIG1hdGNoIHRoaXMgcm91dGUuICovXG4gIGdldCByb3V0ZUNvbmZpZygpOiBSb3V0ZXxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZnV0dXJlU25hcHNob3Qucm91dGVDb25maWc7XG4gIH1cblxuICAvKiogVGhlIHJvb3Qgb2YgdGhlIHJvdXRlciBzdGF0ZS4gKi9cbiAgZ2V0IHJvb3QoKTogQWN0aXZhdGVkUm91dGUge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXJTdGF0ZS5yb290O1xuICB9XG5cbiAgLyoqIFRoZSBwYXJlbnQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUuICovXG4gIGdldCBwYXJlbnQoKTogQWN0aXZhdGVkUm91dGV8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlclN0YXRlLnBhcmVudCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBUaGUgZmlyc3QgY2hpbGQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUuICovXG4gIGdldCBmaXJzdENoaWxkKCk6IEFjdGl2YXRlZFJvdXRlfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXJTdGF0ZS5maXJzdENoaWxkKHRoaXMpO1xuICB9XG5cbiAgLyoqIFRoZSBjaGlsZHJlbiBvZiB0aGlzIHJvdXRlIGluIHRoZSByb3V0ZXIgc3RhdGUgdHJlZS4gKi9cbiAgZ2V0IGNoaWxkcmVuKCk6IEFjdGl2YXRlZFJvdXRlW10ge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXJTdGF0ZS5jaGlsZHJlbih0aGlzKTtcbiAgfVxuXG4gIC8qKiBUaGUgcGF0aCBmcm9tIHRoZSByb290IG9mIHRoZSByb3V0ZXIgc3RhdGUgdHJlZSB0byB0aGlzIHJvdXRlLiAqL1xuICBnZXQgcGF0aEZyb21Sb290KCk6IEFjdGl2YXRlZFJvdXRlW10ge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXJTdGF0ZS5wYXRoRnJvbVJvb3QodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQW4gT2JzZXJ2YWJsZSB0aGF0IGNvbnRhaW5zIGEgbWFwIG9mIHRoZSByZXF1aXJlZCBhbmQgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgKiBzcGVjaWZpYyB0byB0aGUgcm91dGUuXG4gICAqIFRoZSBtYXAgc3VwcG9ydHMgcmV0cmlldmluZyBzaW5nbGUgYW5kIG11bHRpcGxlIHZhbHVlcyBmcm9tIHRoZSBzYW1lIHBhcmFtZXRlci5cbiAgICovXG4gIGdldCBwYXJhbU1hcCgpOiBPYnNlcnZhYmxlPFBhcmFtTWFwPiB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbU1hcCkge1xuICAgICAgdGhpcy5fcGFyYW1NYXAgPSB0aGlzLnBhcmFtcy5waXBlKG1hcCgocDogUGFyYW1zKTogUGFyYW1NYXAgPT4gY29udmVydFRvUGFyYW1NYXAocCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtTWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIE9ic2VydmFibGUgdGhhdCBjb250YWlucyBhIG1hcCBvZiB0aGUgcXVlcnkgcGFyYW1ldGVycyBhdmFpbGFibGUgdG8gYWxsIHJvdXRlcy5cbiAgICogVGhlIG1hcCBzdXBwb3J0cyByZXRyaWV2aW5nIHNpbmdsZSBhbmQgbXVsdGlwbGUgdmFsdWVzIGZyb20gdGhlIHF1ZXJ5IHBhcmFtZXRlci5cbiAgICovXG4gIGdldCBxdWVyeVBhcmFtTWFwKCk6IE9ic2VydmFibGU8UGFyYW1NYXA+IHtcbiAgICBpZiAoIXRoaXMuX3F1ZXJ5UGFyYW1NYXApIHtcbiAgICAgIHRoaXMuX3F1ZXJ5UGFyYW1NYXAgPVxuICAgICAgICAgIHRoaXMucXVlcnlQYXJhbXMucGlwZShtYXAoKHA6IFBhcmFtcyk6IFBhcmFtTWFwID0+IGNvbnZlcnRUb1BhcmFtTWFwKHApKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9xdWVyeVBhcmFtTWFwO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zbmFwc2hvdCA/IHRoaXMuc25hcHNob3QudG9TdHJpbmcoKSA6IGBGdXR1cmUoJHt0aGlzLl9mdXR1cmVTbmFwc2hvdH0pYDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBQYXJhbXNJbmhlcml0YW5jZVN0cmF0ZWd5ID0gJ2VtcHR5T25seSd8J2Fsd2F5cyc7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCB0eXBlIEluaGVyaXRlZCA9IHtcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIGRhdGE6IERhdGEsXG4gIHJlc29sdmU6IERhdGEsXG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGluaGVyaXRlZCBwYXJhbXMsIGRhdGEsIGFuZCByZXNvbHZlIGZvciBhIGdpdmVuIHJvdXRlLlxuICogQnkgZGVmYXVsdCwgdGhpcyBvbmx5IGluaGVyaXRzIHZhbHVlcyB1cCB0byB0aGUgbmVhcmVzdCBwYXRoLWxlc3Mgb3IgY29tcG9uZW50LWxlc3Mgcm91dGUuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaGVyaXRlZFBhcmFtc0RhdGFSZXNvbHZlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k6IFBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3kgPSAnZW1wdHlPbmx5Jyk6IEluaGVyaXRlZCB7XG4gIGNvbnN0IHBhdGhGcm9tUm9vdCA9IHJvdXRlLnBhdGhGcm9tUm9vdDtcblxuICBsZXQgaW5oZXJpdGluZ1N0YXJ0aW5nRnJvbSA9IDA7XG4gIGlmIChwYXJhbXNJbmhlcml0YW5jZVN0cmF0ZWd5ICE9PSAnYWx3YXlzJykge1xuICAgIGluaGVyaXRpbmdTdGFydGluZ0Zyb20gPSBwYXRoRnJvbVJvb3QubGVuZ3RoIC0gMTtcblxuICAgIHdoaWxlIChpbmhlcml0aW5nU3RhcnRpbmdGcm9tID49IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBwYXRoRnJvbVJvb3RbaW5oZXJpdGluZ1N0YXJ0aW5nRnJvbV07XG4gICAgICBjb25zdCBwYXJlbnQgPSBwYXRoRnJvbVJvb3RbaW5oZXJpdGluZ1N0YXJ0aW5nRnJvbSAtIDFdO1xuICAgICAgLy8gY3VycmVudCByb3V0ZSBpcyBhbiBlbXB0eSBwYXRoID0+IGluaGVyaXRzIGl0cyBwYXJlbnQncyBwYXJhbXMgYW5kIGRhdGFcbiAgICAgIGlmIChjdXJyZW50LnJvdXRlQ29uZmlnICYmIGN1cnJlbnQucm91dGVDb25maWcucGF0aCA9PT0gJycpIHtcbiAgICAgICAgaW5oZXJpdGluZ1N0YXJ0aW5nRnJvbS0tO1xuXG4gICAgICAgIC8vIHBhcmVudCBpcyBjb21wb25lbnRsZXNzID0+IGN1cnJlbnQgcm91dGUgc2hvdWxkIGluaGVyaXQgaXRzIHBhcmFtcyBhbmQgZGF0YVxuICAgICAgfSBlbHNlIGlmICghcGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICBpbmhlcml0aW5nU3RhcnRpbmdGcm9tLS07XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmbGF0dGVuSW5oZXJpdGVkKHBhdGhGcm9tUm9vdC5zbGljZShpbmhlcml0aW5nU3RhcnRpbmdGcm9tKSk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmZ1bmN0aW9uIGZsYXR0ZW5Jbmhlcml0ZWQocGF0aEZyb21Sb290OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W10pOiBJbmhlcml0ZWQge1xuICByZXR1cm4gcGF0aEZyb21Sb290LnJlZHVjZSgocmVzLCBjdXJyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gey4uLnJlcy5wYXJhbXMsIC4uLmN1cnIucGFyYW1zfTtcbiAgICBjb25zdCBkYXRhID0gey4uLnJlcy5kYXRhLCAuLi5jdXJyLmRhdGF9O1xuICAgIGNvbnN0IHJlc29sdmUgPSB7Li4ucmVzLnJlc29sdmUsIC4uLmN1cnIuX3Jlc29sdmVkRGF0YX07XG4gICAgcmV0dXJuIHtwYXJhbXMsIGRhdGEsIHJlc29sdmV9O1xuICB9LCA8YW55PntwYXJhbXM6IHt9LCBkYXRhOiB7fSwgcmVzb2x2ZToge319KTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBDb250YWlucyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgYSByb3V0ZSBhc3NvY2lhdGVkIHdpdGggYSBjb21wb25lbnQgbG9hZGVkIGluIGFuXG4gKiBvdXRsZXQgYXQgYSBwYXJ0aWN1bGFyIG1vbWVudCBpbiB0aW1lLiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IGNhbiBhbHNvIGJlIHVzZWQgdG9cbiAqIHRyYXZlcnNlIHRoZSByb3V0ZXIgc3RhdGUgdHJlZS5cbiAqXG4gKiBgYGBcbiAqIEBDb21wb25lbnQoe3RlbXBsYXRlVXJsOicuL215LWNvbXBvbmVudC5odG1sJ30pXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICogICAgIGNvbnN0IGlkOiBzdHJpbmcgPSByb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XG4gKiAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSByb3V0ZS5zbmFwc2hvdC51cmwuam9pbignJyk7XG4gKiAgICAgY29uc3QgdXNlciA9IHJvdXRlLnNuYXBzaG90LmRhdGEudXNlcjtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB7XG4gIC8qKiBUaGUgY29uZmlndXJhdGlvbiB1c2VkIHRvIG1hdGNoIHRoaXMgcm91dGUgKiovXG4gIHB1YmxpYyByZWFkb25seSByb3V0ZUNvbmZpZzogUm91dGV8bnVsbDtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgX3VybFNlZ21lbnQ6IFVybFNlZ21lbnRHcm91cDtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfbGFzdFBhdGhJbmRleDogbnVtYmVyO1xuICAvKiogQGludGVybmFsICovXG4gIF9yZXNvbHZlOiBSZXNvbHZlRGF0YTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgX3Jlc29sdmVkRGF0YSE6IERhdGE7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9yb3V0ZXJTdGF0ZSE6IFJvdXRlclN0YXRlU25hcHNob3Q7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9wYXJhbU1hcCE6IFBhcmFtTWFwO1xuICAvKiogQGludGVybmFsICovXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBfcXVlcnlQYXJhbU1hcCE6IFBhcmFtTWFwO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogVGhlIFVSTCBzZWdtZW50cyBtYXRjaGVkIGJ5IHRoaXMgcm91dGUgKi9cbiAgICAgIHB1YmxpYyB1cmw6IFVybFNlZ21lbnRbXSxcbiAgICAgIC8qKiBUaGUgbWF0cml4IHBhcmFtZXRlcnMgc2NvcGVkIHRvIHRoaXMgcm91dGUgKi9cbiAgICAgIHB1YmxpYyBwYXJhbXM6IFBhcmFtcyxcbiAgICAgIC8qKiBUaGUgcXVlcnkgcGFyYW1ldGVycyBzaGFyZWQgYnkgYWxsIHRoZSByb3V0ZXMgKi9cbiAgICAgIHB1YmxpYyBxdWVyeVBhcmFtczogUGFyYW1zLFxuICAgICAgLyoqIFRoZSBVUkwgZnJhZ21lbnQgc2hhcmVkIGJ5IGFsbCB0aGUgcm91dGVzICovXG4gICAgICBwdWJsaWMgZnJhZ21lbnQ6IHN0cmluZyxcbiAgICAgIC8qKiBUaGUgc3RhdGljIGFuZCByZXNvbHZlZCBkYXRhIG9mIHRoaXMgcm91dGUgKi9cbiAgICAgIHB1YmxpYyBkYXRhOiBEYXRhLFxuICAgICAgLyoqIFRoZSBvdXRsZXQgbmFtZSBvZiB0aGUgcm91dGUgKi9cbiAgICAgIHB1YmxpYyBvdXRsZXQ6IHN0cmluZyxcbiAgICAgIC8qKiBUaGUgY29tcG9uZW50IG9mIHRoZSByb3V0ZSAqL1xuICAgICAgcHVibGljIGNvbXBvbmVudDogVHlwZTxhbnk+fHN0cmluZ3xudWxsLCByb3V0ZUNvbmZpZzogUm91dGV8bnVsbCwgdXJsU2VnbWVudDogVXJsU2VnbWVudEdyb3VwLFxuICAgICAgbGFzdFBhdGhJbmRleDogbnVtYmVyLCByZXNvbHZlOiBSZXNvbHZlRGF0YSkge1xuICAgIHRoaXMucm91dGVDb25maWcgPSByb3V0ZUNvbmZpZztcbiAgICB0aGlzLl91cmxTZWdtZW50ID0gdXJsU2VnbWVudDtcbiAgICB0aGlzLl9sYXN0UGF0aEluZGV4ID0gbGFzdFBhdGhJbmRleDtcbiAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgfVxuXG4gIC8qKiBUaGUgcm9vdCBvZiB0aGUgcm91dGVyIHN0YXRlICovXG4gIGdldCByb290KCk6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Qge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXJTdGF0ZS5yb290O1xuICB9XG5cbiAgLyoqIFRoZSBwYXJlbnQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgKi9cbiAgZ2V0IHBhcmVudCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fG51bGwge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXJTdGF0ZS5wYXJlbnQodGhpcyk7XG4gIH1cblxuICAvKiogVGhlIGZpcnN0IGNoaWxkIG9mIHRoaXMgcm91dGUgaW4gdGhlIHJvdXRlciBzdGF0ZSB0cmVlICovXG4gIGdldCBmaXJzdENoaWxkKCk6IEFjdGl2YXRlZFJvdXRlU25hcHNob3R8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlclN0YXRlLmZpcnN0Q2hpbGQodGhpcyk7XG4gIH1cblxuICAvKiogVGhlIGNoaWxkcmVuIG9mIHRoaXMgcm91dGUgaW4gdGhlIHJvdXRlciBzdGF0ZSB0cmVlICovXG4gIGdldCBjaGlsZHJlbigpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W10ge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXJTdGF0ZS5jaGlsZHJlbih0aGlzKTtcbiAgfVxuXG4gIC8qKiBUaGUgcGF0aCBmcm9tIHRoZSByb290IG9mIHRoZSByb3V0ZXIgc3RhdGUgdHJlZSB0byB0aGlzIHJvdXRlICovXG4gIGdldCBwYXRoRnJvbVJvb3QoKTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdFtdIHtcbiAgICByZXR1cm4gdGhpcy5fcm91dGVyU3RhdGUucGF0aEZyb21Sb290KHRoaXMpO1xuICB9XG5cbiAgZ2V0IHBhcmFtTWFwKCk6IFBhcmFtTWFwIHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtTWFwKSB7XG4gICAgICB0aGlzLl9wYXJhbU1hcCA9IGNvbnZlcnRUb1BhcmFtTWFwKHRoaXMucGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtTWFwO1xuICB9XG5cbiAgZ2V0IHF1ZXJ5UGFyYW1NYXAoKTogUGFyYW1NYXAge1xuICAgIGlmICghdGhpcy5fcXVlcnlQYXJhbU1hcCkge1xuICAgICAgdGhpcy5fcXVlcnlQYXJhbU1hcCA9IGNvbnZlcnRUb1BhcmFtTWFwKHRoaXMucXVlcnlQYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcXVlcnlQYXJhbU1hcDtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdXJsID0gdGhpcy51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC50b1N0cmluZygpKS5qb2luKCcvJyk7XG4gICAgY29uc3QgbWF0Y2hlZCA9IHRoaXMucm91dGVDb25maWcgPyB0aGlzLnJvdXRlQ29uZmlnLnBhdGggOiAnJztcbiAgICByZXR1cm4gYFJvdXRlKHVybDonJHt1cmx9JywgcGF0aDonJHttYXRjaGVkfScpYDtcbiAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFJlcHJlc2VudHMgdGhlIHN0YXRlIG9mIHRoZSByb3V0ZXIgYXQgYSBtb21lbnQgaW4gdGltZS5cbiAqXG4gKiBUaGlzIGlzIGEgdHJlZSBvZiBhY3RpdmF0ZWQgcm91dGUgc25hcHNob3RzLiBFdmVyeSBub2RlIGluIHRoaXMgdHJlZSBrbm93cyBhYm91dFxuICogdGhlIFwiY29uc3VtZWRcIiBVUkwgc2VnbWVudHMsIHRoZSBleHRyYWN0ZWQgcGFyYW1ldGVycywgYW5kIHRoZSByZXNvbHZlZCBkYXRhLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogQENvbXBvbmVudCh7dGVtcGxhdGVVcmw6J3RlbXBsYXRlLmh0bWwnfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAqICAgICBjb25zdCBzdGF0ZTogUm91dGVyU3RhdGUgPSByb3V0ZXIucm91dGVyU3RhdGU7XG4gKiAgICAgY29uc3Qgc25hcHNob3Q6IFJvdXRlclN0YXRlU25hcHNob3QgPSBzdGF0ZS5zbmFwc2hvdDtcbiAqICAgICBjb25zdCByb290OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90ID0gc25hcHNob3Qucm9vdDtcbiAqICAgICBjb25zdCBjaGlsZCA9IHJvb3QuZmlyc3RDaGlsZDtcbiAqICAgICBjb25zdCBpZDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gY2hpbGQucGFyYW1zLm1hcChwID0+IHAuaWQpO1xuICogICAgIC8vLi4uXG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFJvdXRlclN0YXRlU25hcHNob3QgZXh0ZW5kcyBUcmVlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+IHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBUaGUgdXJsIGZyb20gd2hpY2ggdGhpcyBzbmFwc2hvdCB3YXMgY3JlYXRlZCAqL1xuICAgICAgcHVibGljIHVybDogc3RyaW5nLCByb290OiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90Pikge1xuICAgIHN1cGVyKHJvb3QpO1xuICAgIHNldFJvdXRlclN0YXRlKDxSb3V0ZXJTdGF0ZVNuYXBzaG90PnRoaXMsIHJvb3QpO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2VyaWFsaXplTm9kZSh0aGlzLl9yb290KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRSb3V0ZXJTdGF0ZTxVLCBUIGV4dGVuZHMge19yb3V0ZXJTdGF0ZTogVX0+KHN0YXRlOiBVLCBub2RlOiBUcmVlTm9kZTxUPik6IHZvaWQge1xuICBub2RlLnZhbHVlLl9yb3V0ZXJTdGF0ZSA9IHN0YXRlO1xuICBub2RlLmNoaWxkcmVuLmZvckVhY2goYyA9PiBzZXRSb3V0ZXJTdGF0ZShzdGF0ZSwgYykpO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlKG5vZGU6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+KTogc3RyaW5nIHtcbiAgY29uc3QgYyA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCA/IGAgeyAke25vZGUuY2hpbGRyZW4ubWFwKHNlcmlhbGl6ZU5vZGUpLmpvaW4oJywgJyl9IH0gYCA6ICcnO1xuICByZXR1cm4gYCR7bm9kZS52YWx1ZX0ke2N9YDtcbn1cblxuLyoqXG4gKiBUaGUgZXhwZWN0YXRpb24gaXMgdGhhdCB0aGUgYWN0aXZhdGUgcm91dGUgaXMgY3JlYXRlZCB3aXRoIHRoZSByaWdodCBzZXQgb2YgcGFyYW1ldGVycy5cbiAqIFNvIHdlIHB1c2ggbmV3IHZhbHVlcyBpbnRvIHRoZSBvYnNlcnZhYmxlcyBvbmx5IHdoZW4gdGhleSBhcmUgbm90IHRoZSBpbml0aWFsIHZhbHVlcy5cbiAqIEFuZCB3ZSBkZXRlY3QgdGhhdCBieSBjaGVja2luZyBpZiB0aGUgc25hcHNob3QgZmllbGQgaXMgc2V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWR2YW5jZUFjdGl2YXRlZFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHZvaWQge1xuICBpZiAocm91dGUuc25hcHNob3QpIHtcbiAgICBjb25zdCBjdXJyZW50U25hcHNob3QgPSByb3V0ZS5zbmFwc2hvdDtcbiAgICBjb25zdCBuZXh0U25hcHNob3QgPSByb3V0ZS5fZnV0dXJlU25hcHNob3Q7XG4gICAgcm91dGUuc25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG4gICAgaWYgKCFzaGFsbG93RXF1YWwoY3VycmVudFNuYXBzaG90LnF1ZXJ5UGFyYW1zLCBuZXh0U25hcHNob3QucXVlcnlQYXJhbXMpKSB7XG4gICAgICAoPGFueT5yb3V0ZS5xdWVyeVBhcmFtcykubmV4dChuZXh0U25hcHNob3QucXVlcnlQYXJhbXMpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFNuYXBzaG90LmZyYWdtZW50ICE9PSBuZXh0U25hcHNob3QuZnJhZ21lbnQpIHtcbiAgICAgICg8YW55PnJvdXRlLmZyYWdtZW50KS5uZXh0KG5leHRTbmFwc2hvdC5mcmFnbWVudCk7XG4gICAgfVxuICAgIGlmICghc2hhbGxvd0VxdWFsKGN1cnJlbnRTbmFwc2hvdC5wYXJhbXMsIG5leHRTbmFwc2hvdC5wYXJhbXMpKSB7XG4gICAgICAoPGFueT5yb3V0ZS5wYXJhbXMpLm5leHQobmV4dFNuYXBzaG90LnBhcmFtcyk7XG4gICAgfVxuICAgIGlmICghc2hhbGxvd0VxdWFsQXJyYXlzKGN1cnJlbnRTbmFwc2hvdC51cmwsIG5leHRTbmFwc2hvdC51cmwpKSB7XG4gICAgICAoPGFueT5yb3V0ZS51cmwpLm5leHQobmV4dFNuYXBzaG90LnVybCk7XG4gICAgfVxuICAgIGlmICghc2hhbGxvd0VxdWFsKGN1cnJlbnRTbmFwc2hvdC5kYXRhLCBuZXh0U25hcHNob3QuZGF0YSkpIHtcbiAgICAgICg8YW55PnJvdXRlLmRhdGEpLm5leHQobmV4dFNuYXBzaG90LmRhdGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByb3V0ZS5zbmFwc2hvdCA9IHJvdXRlLl9mdXR1cmVTbmFwc2hvdDtcblxuICAgIC8vIHRoaXMgaXMgZm9yIHJlc29sdmVkIGRhdGFcbiAgICAoPGFueT5yb3V0ZS5kYXRhKS5uZXh0KHJvdXRlLl9mdXR1cmVTbmFwc2hvdC5kYXRhKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbFBhcmFtc0FuZFVybFNlZ21lbnRzKFxuICAgIGE6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgY29uc3QgZXF1YWxVcmxQYXJhbXMgPSBzaGFsbG93RXF1YWwoYS5wYXJhbXMsIGIucGFyYW1zKSAmJiBlcXVhbFNlZ21lbnRzKGEudXJsLCBiLnVybCk7XG4gIGNvbnN0IHBhcmVudHNNaXNtYXRjaCA9ICFhLnBhcmVudCAhPT0gIWIucGFyZW50O1xuXG4gIHJldHVybiBlcXVhbFVybFBhcmFtcyAmJiAhcGFyZW50c01pc21hdGNoICYmXG4gICAgICAoIWEucGFyZW50IHx8IGVxdWFsUGFyYW1zQW5kVXJsU2VnbWVudHMoYS5wYXJlbnQsIGIucGFyZW50ISkpO1xufVxuIl19