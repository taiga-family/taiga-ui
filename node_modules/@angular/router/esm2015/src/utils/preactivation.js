/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/utils/preactivation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { equalParamsAndUrlSegments } from '../router_state';
import { equalPath } from '../url_tree';
import { forEach, shallowEqual } from '../utils/collection';
import { nodeChildrenAsMap } from '../utils/tree';
export class CanActivate {
    /**
     * @param {?} path
     */
    constructor(path) {
        this.path = path;
        this.route = this.path[this.path.length - 1];
    }
}
if (false) {
    /** @type {?} */
    CanActivate.prototype.route;
    /** @type {?} */
    CanActivate.prototype.path;
}
export class CanDeactivate {
    /**
     * @param {?} component
     * @param {?} route
     */
    constructor(component, route) {
        this.component = component;
        this.route = route;
    }
}
if (false) {
    /** @type {?} */
    CanDeactivate.prototype.component;
    /** @type {?} */
    CanDeactivate.prototype.route;
}
/**
 * @param {?} future
 * @param {?} curr
 * @param {?} parentContexts
 * @return {?}
 */
export function getAllRouteGuards(future, curr, parentContexts) {
    /** @type {?} */
    const futureRoot = future._root;
    /** @type {?} */
    const currRoot = curr ? curr._root : null;
    return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
/**
 * @param {?} p
 * @return {?}
 */
export function getCanActivateChild(p) {
    /** @type {?} */
    const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
    if (!canActivateChild || canActivateChild.length === 0)
        return null;
    return { node: p, guards: canActivateChild };
}
/**
 * @param {?} token
 * @param {?} snapshot
 * @param {?} moduleInjector
 * @return {?}
 */
export function getToken(token, snapshot, moduleInjector) {
    /** @type {?} */
    const config = getClosestLoadedConfig(snapshot);
    /** @type {?} */
    const injector = config ? config.module.injector : moduleInjector;
    return injector.get(token);
}
/**
 * @param {?} snapshot
 * @return {?}
 */
function getClosestLoadedConfig(snapshot) {
    if (!snapshot)
        return null;
    for (let s = snapshot.parent; s; s = s.parent) {
        /** @type {?} */
        const route = s.routeConfig;
        if (route && route._loadedConfig)
            return route._loadedConfig;
    }
    return null;
}
/**
 * @param {?} futureNode
 * @param {?} currNode
 * @param {?} contexts
 * @param {?} futurePath
 * @param {?=} checks
 * @return {?}
 */
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    /** @type {?} */
    const prevChildren = nodeChildrenAsMap(currNode);
    // Process the children of the future route
    futureNode.children.forEach((/**
     * @param {?} c
     * @return {?}
     */
    c => {
        getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
        delete prevChildren[c.value.outlet];
    }));
    // Process any children left from the current route (not active for the future route)
    forEach(prevChildren, (/**
     * @param {?} v
     * @param {?} k
     * @return {?}
     */
    (v, k) => deactivateRouteAndItsChildren(v, (/** @type {?} */ (contexts)).getContext(k), checks)));
    return checks;
}
/**
 * @param {?} futureNode
 * @param {?} currNode
 * @param {?} parentContexts
 * @param {?} futurePath
 * @param {?=} checks
 * @return {?}
 */
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    /** @type {?} */
    const future = futureNode.value;
    /** @type {?} */
    const curr = currNode ? currNode.value : null;
    /** @type {?} */
    const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
    // reusing the node
    if (curr && future.routeConfig === curr.routeConfig) {
        /** @type {?} */
        const shouldRun = shouldRunGuardsAndResolvers(curr, future, (/** @type {?} */ (future.routeConfig)).runGuardsAndResolvers);
        if (shouldRun) {
            checks.canActivateChecks.push(new CanActivate(futurePath));
        }
        else {
            // we need to set the data
            future.data = curr.data;
            future._resolvedData = curr._resolvedData;
        }
        // If we have a component, we need to go through an outlet.
        if (future.component) {
            getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
            // if we have a componentless route, we recurse but keep the same outlet map.
        }
        else {
            getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
        }
        if (shouldRun) {
            /** @type {?} */
            const component = context && context.outlet && context.outlet.component || null;
            checks.canDeactivateChecks.push(new CanDeactivate(component, curr));
        }
    }
    else {
        if (curr) {
            deactivateRouteAndItsChildren(currNode, context, checks);
        }
        checks.canActivateChecks.push(new CanActivate(futurePath));
        // If we have a component, we need to go through an outlet.
        if (future.component) {
            getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
            // if we have a componentless route, we recurse but keep the same outlet map.
        }
        else {
            getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
        }
    }
    return checks;
}
/**
 * @param {?} curr
 * @param {?} future
 * @param {?} mode
 * @return {?}
 */
function shouldRunGuardsAndResolvers(curr, future, mode) {
    if (typeof mode === 'function') {
        return mode(curr, future);
    }
    switch (mode) {
        case 'pathParamsChange':
            return !equalPath(curr.url, future.url);
        case 'pathParamsOrQueryParamsChange':
            return !equalPath(curr.url, future.url) ||
                !shallowEqual(curr.queryParams, future.queryParams);
        case 'always':
            return true;
        case 'paramsOrQueryParamsChange':
            return !equalParamsAndUrlSegments(curr, future) ||
                !shallowEqual(curr.queryParams, future.queryParams);
        case 'paramsChange':
        default:
            return !equalParamsAndUrlSegments(curr, future);
    }
}
/**
 * @param {?} route
 * @param {?} context
 * @param {?} checks
 * @return {?}
 */
function deactivateRouteAndItsChildren(route, context, checks) {
    /** @type {?} */
    const children = nodeChildrenAsMap(route);
    /** @type {?} */
    const r = route.value;
    forEach(children, (/**
     * @param {?} node
     * @param {?} childName
     * @return {?}
     */
    (node, childName) => {
        if (!r.component) {
            deactivateRouteAndItsChildren(node, context, checks);
        }
        else if (context) {
            deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
        }
        else {
            deactivateRouteAndItsChildren(node, null, checks);
        }
    }));
    if (!r.component) {
        checks.canDeactivateChecks.push(new CanDeactivate(null, r));
    }
    else if (context && context.outlet && context.outlet.isActivated) {
        checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
    }
    else {
        checks.canDeactivateChecks.push(new CanDeactivate(null, r));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYWN0aXZhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci9zcmMvdXRpbHMvcHJlYWN0aXZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLEVBQXlCLHlCQUF5QixFQUFzQixNQUFNLGlCQUFpQixDQUFDO0FBQ3ZHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFFMUQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFFdEIsWUFBbUIsSUFBOEI7UUFBOUIsU0FBSSxHQUFKLElBQUksQ0FBMEI7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjs7O0lBSkMsNEJBQXVDOztJQUMzQiwyQkFBcUM7O0FBS25ELE1BQU0sT0FBTyxhQUFhOzs7OztJQUN4QixZQUFtQixTQUFzQixFQUFTLEtBQTZCO1FBQTVELGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUF3QjtJQUFHLENBQUM7Q0FDcEY7OztJQURhLGtDQUE2Qjs7SUFBRSw4QkFBb0M7Ozs7Ozs7O0FBUWpGLE1BQU0sVUFBVSxpQkFBaUIsQ0FDN0IsTUFBMkIsRUFBRSxJQUF5QixFQUN0RCxjQUFzQzs7VUFDbEMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLOztVQUN6QixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO0lBRXpDLE9BQU8sbUJBQW1CLENBQUMsVUFB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TUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQ2xFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqRjtTQUFNO1FBQ0wsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3RDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0xvYWRlZFJvdXRlckNvbmZpZywgUnVuR3VhcmRzQW5kUmVzb2x2ZXJzfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtDaGlsZHJlbk91dGxldENvbnRleHRzLCBPdXRsZXRDb250ZXh0fSBmcm9tICcuLi9yb3V0ZXJfb3V0bGV0X2NvbnRleHQnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBlcXVhbFBhcmFtc0FuZFVybFNlZ21lbnRzLCBSb3V0ZXJTdGF0ZVNuYXBzaG90fSBmcm9tICcuLi9yb3V0ZXJfc3RhdGUnO1xuaW1wb3J0IHtlcXVhbFBhdGh9IGZyb20gJy4uL3VybF90cmVlJztcbmltcG9ydCB7Zm9yRWFjaCwgc2hhbGxvd0VxdWFsfSBmcm9tICcuLi91dGlscy9jb2xsZWN0aW9uJztcbmltcG9ydCB7bm9kZUNoaWxkcmVuQXNNYXAsIFRyZWVOb2RlfSBmcm9tICcuLi91dGlscy90cmVlJztcblxuZXhwb3J0IGNsYXNzIENhbkFjdGl2YXRlIHtcbiAgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXRoOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W10pIHtcbiAgICB0aGlzLnJvdXRlID0gdGhpcy5wYXRoW3RoaXMucGF0aC5sZW5ndGggLSAxXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FuRGVhY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnQ6IE9iamVjdHxudWxsLCBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHt9XG59XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgQ2hlY2tzID0ge1xuICBjYW5EZWFjdGl2YXRlQ2hlY2tzOiBDYW5EZWFjdGl2YXRlW10sXG4gIGNhbkFjdGl2YXRlQ2hlY2tzOiBDYW5BY3RpdmF0ZVtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFJvdXRlR3VhcmRzKFxuICAgIGZ1dHVyZTogUm91dGVyU3RhdGVTbmFwc2hvdCwgY3VycjogUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgICBwYXJlbnRDb250ZXh0czogQ2hpbGRyZW5PdXRsZXRDb250ZXh0cykge1xuICBjb25zdCBmdXR1cmVSb290ID0gZnV0dXJlLl9yb290O1xuICBjb25zdCBjdXJyUm9vdCA9IGN1cnIgPyBjdXJyLl9yb290IDogbnVsbDtcblxuICByZXR1cm4gZ2V0Q2hpbGRSb3V0ZUd1YXJkcyhmdXR1cmVSb290LCBjdXJyUm9vdCwgcGFyZW50Q29udGV4dHMsIFtmdXR1cmVSb290LnZhbHVlXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYW5BY3RpdmF0ZUNoaWxkKHA6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOlxuICAgIHtub2RlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBndWFyZHM6IGFueVtdfXxudWxsIHtcbiAgY29uc3QgY2FuQWN0aXZhdGVDaGlsZCA9IHAucm91dGVDb25maWcgPyBwLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlQ2hpbGQgOiBudWxsO1xuICBpZiAoIWNhbkFjdGl2YXRlQ2hpbGQgfHwgY2FuQWN0aXZhdGVDaGlsZC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICByZXR1cm4ge25vZGU6IHAsIGd1YXJkczogY2FuQWN0aXZhdGVDaGlsZH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbihcbiAgICB0b2tlbjogYW55LCBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgbW9kdWxlSW5qZWN0b3I6IEluamVjdG9yKTogYW55IHtcbiAgY29uc3QgY29uZmlnID0gZ2V0Q2xvc2VzdExvYWRlZENvbmZpZyhzbmFwc2hvdCk7XG4gIGNvbnN0IGluamVjdG9yID0gY29uZmlnID8gY29uZmlnLm1vZHVsZS5pbmplY3RvciA6IG1vZHVsZUluamVjdG9yO1xuICByZXR1cm4gaW5qZWN0b3IuZ2V0KHRva2VuKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xvc2VzdExvYWRlZENvbmZpZyhzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IExvYWRlZFJvdXRlckNvbmZpZ3xudWxsIHtcbiAgaWYgKCFzbmFwc2hvdCkgcmV0dXJuIG51bGw7XG5cbiAgZm9yIChsZXQgcyA9IHNuYXBzaG90LnBhcmVudDsgczsgcyA9IHMucGFyZW50KSB7XG4gICAgY29uc3Qgcm91dGUgPSBzLnJvdXRlQ29uZmlnO1xuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5fbG9hZGVkQ29uZmlnKSByZXR1cm4gcm91dGUuX2xvYWRlZENvbmZpZztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRDaGlsZFJvdXRlR3VhcmRzKFxuICAgIGZ1dHVyZU5vZGU6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+LCBjdXJyTm9kZTogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD58bnVsbCxcbiAgICBjb250ZXh0czogQ2hpbGRyZW5PdXRsZXRDb250ZXh0c3xudWxsLCBmdXR1cmVQYXRoOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W10sIGNoZWNrczogQ2hlY2tzID0ge1xuICAgICAgY2FuRGVhY3RpdmF0ZUNoZWNrczogW10sXG4gICAgICBjYW5BY3RpdmF0ZUNoZWNrczogW11cbiAgICB9KTogQ2hlY2tzIHtcbiAgY29uc3QgcHJldkNoaWxkcmVuID0gbm9kZUNoaWxkcmVuQXNNYXAoY3Vyck5vZGUpO1xuXG4gIC8vIFByb2Nlc3MgdGhlIGNoaWxkcmVuIG9mIHRoZSBmdXR1cmUgcm91dGVcbiAgZnV0dXJlTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGMgPT4ge1xuICAgIGdldFJvdXRlR3VhcmRzKGMsIHByZXZDaGlsZHJlbltjLnZhbHVlLm91dGxldF0sIGNvbnRleHRzLCBmdXR1cmVQYXRoLmNvbmNhdChbYy52YWx1ZV0pLCBjaGVja3MpO1xuICAgIGRlbGV0ZSBwcmV2Q2hpbGRyZW5bYy52YWx1ZS5vdXRsZXRdO1xuICB9KTtcblxuICAvLyBQcm9jZXNzIGFueSBjaGlsZHJlbiBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgcm91dGUgKG5vdCBhY3RpdmUgZm9yIHRoZSBmdXR1cmUgcm91dGUpXG4gIGZvckVhY2goXG4gICAgICBwcmV2Q2hpbGRyZW4sXG4gICAgICAodjogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4sIGs6IHN0cmluZykgPT5cbiAgICAgICAgICBkZWFjdGl2YXRlUm91dGVBbmRJdHNDaGlsZHJlbih2LCBjb250ZXh0cyEuZ2V0Q29udGV4dChrKSwgY2hlY2tzKSk7XG5cbiAgcmV0dXJuIGNoZWNrcztcbn1cblxuZnVuY3Rpb24gZ2V0Um91dGVHdWFyZHMoXG4gICAgZnV0dXJlTm9kZTogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4sIGN1cnJOb2RlOiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PixcbiAgICBwYXJlbnRDb250ZXh0czogQ2hpbGRyZW5PdXRsZXRDb250ZXh0c3xudWxsLCBmdXR1cmVQYXRoOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W10sXG4gICAgY2hlY2tzOiBDaGVja3MgPSB7XG4gICAgICBjYW5EZWFjdGl2YXRlQ2hlY2tzOiBbXSxcbiAgICAgIGNhbkFjdGl2YXRlQ2hlY2tzOiBbXVxuICAgIH0pOiBDaGVja3Mge1xuICBjb25zdCBmdXR1cmUgPSBmdXR1cmVOb2RlLnZhbHVlO1xuICBjb25zdCBjdXJyID0gY3Vyck5vZGUgPyBjdXJyTm9kZS52YWx1ZSA6IG51bGw7XG4gIGNvbnN0IGNvbnRleHQgPSBwYXJlbnRDb250ZXh0cyA/IHBhcmVudENvbnRleHRzLmdldENvbnRleHQoZnV0dXJlTm9kZS52YWx1ZS5vdXRsZXQpIDogbnVsbDtcblxuICAvLyByZXVzaW5nIHRoZSBub2RlXG4gIGlmIChjdXJyICYmIGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZykge1xuICAgIGNvbnN0IHNob3VsZFJ1biA9XG4gICAgICAgIHNob3VsZFJ1bkd1YXJkc0FuZFJlc29sdmVycyhjdXJyLCBmdXR1cmUsIGZ1dHVyZS5yb3V0ZUNvbmZpZyEucnVuR3VhcmRzQW5kUmVzb2x2ZXJzKTtcbiAgICBpZiAoc2hvdWxkUnVuKSB7XG4gICAgICBjaGVja3MuY2FuQWN0aXZhdGVDaGVja3MucHVzaChuZXcgQ2FuQWN0aXZhdGUoZnV0dXJlUGF0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZSBuZWVkIHRvIHNldCB0aGUgZGF0YVxuICAgICAgZnV0dXJlLmRhdGEgPSBjdXJyLmRhdGE7XG4gICAgICBmdXR1cmUuX3Jlc29sdmVkRGF0YSA9IGN1cnIuX3Jlc29sdmVkRGF0YTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGEgY29tcG9uZW50LCB3ZSBuZWVkIHRvIGdvIHRocm91Z2ggYW4gb3V0bGV0LlxuICAgIGlmIChmdXR1cmUuY29tcG9uZW50KSB7XG4gICAgICBnZXRDaGlsZFJvdXRlR3VhcmRzKFxuICAgICAgICAgIGZ1dHVyZU5vZGUsIGN1cnJOb2RlLCBjb250ZXh0ID8gY29udGV4dC5jaGlsZHJlbiA6IG51bGwsIGZ1dHVyZVBhdGgsIGNoZWNrcyk7XG5cbiAgICAgIC8vIGlmIHdlIGhhdmUgYSBjb21wb25lbnRsZXNzIHJvdXRlLCB3ZSByZWN1cnNlIGJ1dCBrZWVwIHRoZSBzYW1lIG91dGxldCBtYXAuXG4gICAgfSBlbHNlIHtcbiAgICAgIGdldENoaWxkUm91dGVHdWFyZHMoZnV0dXJlTm9kZSwgY3Vyck5vZGUsIHBhcmVudENvbnRleHRzLCBmdXR1cmVQYXRoLCBjaGVja3MpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRSdW4pIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbnRleHQgJiYgY29udGV4dC5vdXRsZXQgJiYgY29udGV4dC5vdXRsZXQuY29tcG9uZW50IHx8IG51bGw7XG4gICAgICBjaGVja3MuY2FuRGVhY3RpdmF0ZUNoZWNrcy5wdXNoKG5ldyBDYW5EZWFjdGl2YXRlKGNvbXBvbmVudCwgY3VycikpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoY3Vycikge1xuICAgICAgZGVhY3RpdmF0ZVJvdXRlQW5kSXRzQ2hpbGRyZW4oY3Vyck5vZGUsIGNvbnRleHQsIGNoZWNrcyk7XG4gICAgfVxuXG4gICAgY2hlY2tzLmNhbkFjdGl2YXRlQ2hlY2tzLnB1c2gobmV3IENhbkFjdGl2YXRlKGZ1dHVyZVBhdGgpKTtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgY29tcG9uZW50LCB3ZSBuZWVkIHRvIGdvIHRocm91Z2ggYW4gb3V0bGV0LlxuICAgIGlmIChmdXR1cmUuY29tcG9uZW50KSB7XG4gICAgICBnZXRDaGlsZFJvdXRlR3VhcmRzKGZ1dHVyZU5vZGUsIG51bGwsIGNvbnRleHQgPyBjb250ZXh0LmNoaWxkcmVuIDogbnVsbCwgZnV0dXJlUGF0aCwgY2hlY2tzKTtcblxuICAgICAgLy8gaWYgd2UgaGF2ZSBhIGNvbXBvbmVudGxlc3Mgcm91dGUsIHdlIHJlY3Vyc2UgYnV0IGtlZXAgdGhlIHNhbWUgb3V0bGV0IG1hcC5cbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0Q2hpbGRSb3V0ZUd1YXJkcyhmdXR1cmVOb2RlLCBudWxsLCBwYXJlbnRDb250ZXh0cywgZnV0dXJlUGF0aCwgY2hlY2tzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hlY2tzO1xufVxuXG5mdW5jdGlvbiBzaG91bGRSdW5HdWFyZHNBbmRSZXNvbHZlcnMoXG4gICAgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIG1vZGU6IFJ1bkd1YXJkc0FuZFJlc29sdmVyc3x1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiBtb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1vZGUoY3VyciwgZnV0dXJlKTtcbiAgfVxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdwYXRoUGFyYW1zQ2hhbmdlJzpcbiAgICAgIHJldHVybiAhZXF1YWxQYXRoKGN1cnIudXJsLCBmdXR1cmUudXJsKTtcblxuICAgIGNhc2UgJ3BhdGhQYXJhbXNPclF1ZXJ5UGFyYW1zQ2hhbmdlJzpcbiAgICAgIHJldHVybiAhZXF1YWxQYXRoKGN1cnIudXJsLCBmdXR1cmUudXJsKSB8fFxuICAgICAgICAgICFzaGFsbG93RXF1YWwoY3Vyci5xdWVyeVBhcmFtcywgZnV0dXJlLnF1ZXJ5UGFyYW1zKTtcblxuICAgIGNhc2UgJ2Fsd2F5cyc6XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgJ3BhcmFtc09yUXVlcnlQYXJhbXNDaGFuZ2UnOlxuICAgICAgcmV0dXJuICFlcXVhbFBhcmFtc0FuZFVybFNlZ21lbnRzKGN1cnIsIGZ1dHVyZSkgfHxcbiAgICAgICAgICAhc2hhbGxvd0VxdWFsKGN1cnIucXVlcnlQYXJhbXMsIGZ1dHVyZS5xdWVyeVBhcmFtcyk7XG5cbiAgICBjYXNlICdwYXJhbXNDaGFuZ2UnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gIWVxdWFsUGFyYW1zQW5kVXJsU2VnbWVudHMoY3VyciwgZnV0dXJlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWFjdGl2YXRlUm91dGVBbmRJdHNDaGlsZHJlbihcbiAgICByb3V0ZTogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4sIGNvbnRleHQ6IE91dGxldENvbnRleHR8bnVsbCwgY2hlY2tzOiBDaGVja3MpOiB2b2lkIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBub2RlQ2hpbGRyZW5Bc01hcChyb3V0ZSk7XG4gIGNvbnN0IHIgPSByb3V0ZS52YWx1ZTtcblxuICBmb3JFYWNoKGNoaWxkcmVuLCAobm9kZTogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4sIGNoaWxkTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFyLmNvbXBvbmVudCkge1xuICAgICAgZGVhY3RpdmF0ZVJvdXRlQW5kSXRzQ2hpbGRyZW4obm9kZSwgY29udGV4dCwgY2hlY2tzKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQpIHtcbiAgICAgIGRlYWN0aXZhdGVSb3V0ZUFuZEl0c0NoaWxkcmVuKG5vZGUsIGNvbnRleHQuY2hpbGRyZW4uZ2V0Q29udGV4dChjaGlsZE5hbWUpLCBjaGVja3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWFjdGl2YXRlUm91dGVBbmRJdHNDaGlsZHJlbihub2RlLCBudWxsLCBjaGVja3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFyLmNvbXBvbmVudCkge1xuICAgIGNoZWNrcy5jYW5EZWFjdGl2YXRlQ2hlY2tzLnB1c2gobmV3IENhbkRlYWN0aXZhdGUobnVsbCwgcikpO1xuICB9IGVsc2UgaWYgKGNvbnRleHQgJiYgY29udGV4dC5vdXRsZXQgJiYgY29udGV4dC5vdXRsZXQuaXNBY3RpdmF0ZWQpIHtcbiAgICBjaGVja3MuY2FuRGVhY3RpdmF0ZUNoZWNrcy5wdXNoKG5ldyBDYW5EZWFjdGl2YXRlKGNvbnRleHQub3V0bGV0LmNvbXBvbmVudCwgcikpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrcy5jYW5EZWFjdGl2YXRlQ2hlY2tzLnB1c2gobmV3IENhbkRlYWN0aXZhdGUobnVsbCwgcikpO1xuICB9XG59XG4iXX0=