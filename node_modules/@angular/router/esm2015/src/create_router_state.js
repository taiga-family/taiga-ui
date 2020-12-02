/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/create_router_state.ts
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
import { ActivatedRoute, RouterState } from './router_state';
import { TreeNode } from './utils/tree';
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
export function createRouterState(routeReuseStrategy, curr, prevState) {
    /** @type {?} */
    const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
    return new RouterState(root, curr);
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?=} prevState
 * @return {?}
 */
function createNode(routeReuseStrategy, curr, prevState) {
    // reuse an activated route that is currently displayed on the screen
    if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
        /** @type {?} */
        const value = prevState.value;
        value._futureSnapshot = curr.value;
        /** @type {?} */
        const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
        return new TreeNode(value, children);
        // retrieve an activated route that is used to be displayed, but is not currently displayed
    }
    else {
        /** @type {?} */
        const detachedRouteHandle = (/** @type {?} */ (routeReuseStrategy.retrieve(curr.value)));
        if (detachedRouteHandle) {
            /** @type {?} */
            const tree = detachedRouteHandle.route;
            setFutureSnapshotsOfActivatedRoutes(curr, tree);
            return tree;
        }
        else {
            /** @type {?} */
            const value = createActivatedRoute(curr.value);
            /** @type {?} */
            const children = curr.children.map((/**
             * @param {?} c
             * @return {?}
             */
            c => createNode(routeReuseStrategy, c)));
            return new TreeNode(value, children);
        }
    }
}
/**
 * @param {?} curr
 * @param {?} result
 * @return {?}
 */
function setFutureSnapshotsOfActivatedRoutes(curr, result) {
    if (curr.value.routeConfig !== result.value.routeConfig) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
    }
    if (curr.children.length !== result.children.length) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
    }
    result.value._futureSnapshot = curr.value;
    for (let i = 0; i < curr.children.length; ++i) {
        setFutureSnapshotsOfActivatedRoutes(curr.children[i], result.children[i]);
    }
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
    return curr.children.map((/**
     * @param {?} child
     * @return {?}
     */
    child => {
        for (const p of prevState.children) {
            if (routeReuseStrategy.shouldReuseRoute(p.value.snapshot, child.value)) {
                return createNode(routeReuseStrategy, child, p);
            }
        }
        return createNode(routeReuseStrategy, child);
    }));
}
/**
 * @param {?} c
 * @return {?}
 */
function createActivatedRoute(c) {
    return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX3JvdXRlcl9zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci9zcmMvY3JlYXRlX3JvdXRlcl9zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR3JDLE9BQU8sRUFBQyxjQUFjLEVBQTBCLFdBQVcsRUFBc0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7O0FBRXRDLE1BQU0sVUFBVSxpQkFBaUIsQ0FDN0Isa0JBQXNDLEVBQUUsSUFBeUIsRUFDakUsU0FBc0I7O1VBQ2xCLElBQUksR0FBRyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoRyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyQyxDQUFDOzs7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQ2Ysa0JBQXNDLEVBQUUsSUFBc0MsRUFDOUUsU0FBb0M7SUFDdEMscUVBQXFFO0lBQ3JFLElBQUksU0FBUyxJQUFJLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTs7Y0FDcEYsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLO1FBQzdCLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Y0FDN0IsUUFBUSxHQUFHLHFCQUFxQixDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxTQUFTLENBQUM7UUFDM0UsT0FBTyxJQUFJLFFBQVEsQ0FBaUIsS0FBSyxFQUFFLFFB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Yy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtEZXRhY2hlZFJvdXRlSGFuZGxlSW50ZXJuYWwsIFJvdXRlUmV1c2VTdHJhdGVneX0gZnJvbSAnLi9yb3V0ZV9yZXVzZV9zdHJhdGVneSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdH0gZnJvbSAnLi9yb3V0ZXJfc3RhdGUnO1xuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSAnLi91dGlscy90cmVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlclN0YXRlKFxuICAgIHJvdXRlUmV1c2VTdHJhdGVneTogUm91dGVSZXVzZVN0cmF0ZWd5LCBjdXJyOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICAgIHByZXZTdGF0ZTogUm91dGVyU3RhdGUpOiBSb3V0ZXJTdGF0ZSB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVOb2RlKHJvdXRlUmV1c2VTdHJhdGVneSwgY3Vyci5fcm9vdCwgcHJldlN0YXRlID8gcHJldlN0YXRlLl9yb290IDogdW5kZWZpbmVkKTtcbiAgcmV0dXJuIG5ldyBSb3V0ZXJTdGF0ZShyb290LCBjdXJyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9kZShcbiAgICByb3V0ZVJldXNlU3RyYXRlZ3k6IFJvdXRlUmV1c2VTdHJhdGVneSwgY3VycjogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4sXG4gICAgcHJldlN0YXRlPzogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGU+KTogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGU+IHtcbiAgLy8gcmV1c2UgYW4gYWN0aXZhdGVkIHJvdXRlIHRoYXQgaXMgY3VycmVudGx5IGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuXG4gIGlmIChwcmV2U3RhdGUgJiYgcm91dGVSZXVzZVN0cmF0ZWd5LnNob3VsZFJldXNlUm91dGUoY3Vyci52YWx1ZSwgcHJldlN0YXRlLnZhbHVlLnNuYXBzaG90KSkge1xuICAgIGNvbnN0IHZhbHVlID0gcHJldlN0YXRlLnZhbHVlO1xuICAgIHZhbHVlLl9mdXR1cmVTbmFwc2hvdCA9IGN1cnIudmFsdWU7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjcmVhdGVPclJldXNlQ2hpbGRyZW4ocm91dGVSZXVzZVN0cmF0ZWd5LCBjdXJyLCBwcmV2U3RhdGUpO1xuICAgIHJldHVybiBuZXcgVHJlZU5vZGU8QWN0aXZhdGVkUm91dGU+KHZhbHVlLCBjaGlsZHJlbik7XG5cbiAgICAvLyByZXRyaWV2ZSBhbiBhY3RpdmF0ZWQgcm91dGUgdGhhdCBpcyB1c2VkIHRvIGJlIGRpc3BsYXllZCwgYnV0IGlzIG5vdCBjdXJyZW50bHkgZGlzcGxheWVkXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGV0YWNoZWRSb3V0ZUhhbmRsZSA9XG4gICAgICAgIDxEZXRhY2hlZFJvdXRlSGFuZGxlSW50ZXJuYWw+cm91dGVSZXVzZVN0cmF0ZWd5LnJldHJpZXZlKGN1cnIudmFsdWUpO1xuICAgIGlmIChkZXRhY2hlZFJvdXRlSGFuZGxlKSB7XG4gICAgICBjb25zdCB0cmVlOiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4gPSBkZXRhY2hlZFJvdXRlSGFuZGxlLnJvdXRlO1xuICAgICAgc2V0RnV0dXJlU25hcHNob3RzT2ZBY3RpdmF0ZWRSb3V0ZXMoY3VyciwgdHJlZSk7XG4gICAgICByZXR1cm4gdHJlZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNyZWF0ZUFjdGl2YXRlZFJvdXRlKGN1cnIudmFsdWUpO1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBjdXJyLmNoaWxkcmVuLm1hcChjID0+IGNyZWF0ZU5vZGUocm91dGVSZXVzZVN0cmF0ZWd5LCBjKSk7XG4gICAgICByZXR1cm4gbmV3IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlPih2YWx1ZSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRGdXR1cmVTbmFwc2hvdHNPZkFjdGl2YXRlZFJvdXRlcyhcbiAgICBjdXJyOiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PiwgcmVzdWx0OiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4pOiB2b2lkIHtcbiAgaWYgKGN1cnIudmFsdWUucm91dGVDb25maWcgIT09IHJlc3VsdC52YWx1ZS5yb3V0ZUNvbmZpZykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlYXR0YWNoIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgY3JlYXRlZCBmcm9tIGEgZGlmZmVyZW50IHJvdXRlJyk7XG4gIH1cbiAgaWYgKGN1cnIuY2hpbGRyZW4ubGVuZ3RoICE9PSByZXN1bHQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVhdHRhY2ggQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB3aXRoIGEgZGlmZmVyZW50IG51bWJlciBvZiBjaGlsZHJlbicpO1xuICB9XG4gIHJlc3VsdC52YWx1ZS5fZnV0dXJlU25hcHNob3QgPSBjdXJyLnZhbHVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnIuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICBzZXRGdXR1cmVTbmFwc2hvdHNPZkFjdGl2YXRlZFJvdXRlcyhjdXJyLmNoaWxkcmVuW2ldLCByZXN1bHQuY2hpbGRyZW5baV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9yUmV1c2VDaGlsZHJlbihcbiAgICByb3V0ZVJldXNlU3RyYXRlZ3k6IFJvdXRlUmV1c2VTdHJhdGVneSwgY3VycjogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4sXG4gICAgcHJldlN0YXRlOiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4pIHtcbiAgcmV0dXJuIGN1cnIuY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICBmb3IgKGNvbnN0IHAgb2YgcHJldlN0YXRlLmNoaWxkcmVuKSB7XG4gICAgICBpZiAocm91dGVSZXVzZVN0cmF0ZWd5LnNob3VsZFJldXNlUm91dGUocC52YWx1ZS5zbmFwc2hvdCwgY2hpbGQudmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVOb2RlKHJvdXRlUmV1c2VTdHJhdGVneSwgY2hpbGQsIHApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlTm9kZShyb3V0ZVJldXNlU3RyYXRlZ3ksIGNoaWxkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGl2YXRlZFJvdXRlKGM6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgcmV0dXJuIG5ldyBBY3RpdmF0ZWRSb3V0ZShcbiAgICAgIG5ldyBCZWhhdmlvclN1YmplY3QoYy51cmwpLCBuZXcgQmVoYXZpb3JTdWJqZWN0KGMucGFyYW1zKSwgbmV3IEJlaGF2aW9yU3ViamVjdChjLnF1ZXJ5UGFyYW1zKSxcbiAgICAgIG5ldyBCZWhhdmlvclN1YmplY3QoYy5mcmFnbWVudCksIG5ldyBCZWhhdmlvclN1YmplY3QoYy5kYXRhKSwgYy5vdXRsZXQsIGMuY29tcG9uZW50LCBjKTtcbn1cbiJdfQ==