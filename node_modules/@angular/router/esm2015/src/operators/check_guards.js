/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/operators/check_guards.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { defer, from, of } from 'rxjs';
import { concatAll, concatMap, first, map, mergeMap } from 'rxjs/operators';
import { ActivationStart, ChildActivationStart } from '../events';
import { wrapIntoObservable } from '../utils/collection';
import { getCanActivateChild, getToken } from '../utils/preactivation';
import { isBoolean, isCanActivate, isCanActivateChild, isCanDeactivate, isFunction } from '../utils/type_guards';
import { prioritizedGuardValue } from './prioritized_guard_value';
/**
 * @param {?} moduleInjector
 * @param {?=} forwardEvent
 * @return {?}
 */
export function checkGuards(moduleInjector, forwardEvent) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return source.pipe(mergeMap((/**
         * @param {?} t
         * @return {?}
         */
        t => {
            const { targetSnapshot, currentSnapshot, guards: { canActivateChecks, canDeactivateChecks } } = t;
            if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
                return of(Object.assign(Object.assign({}, t), { guardsResult: true }));
            }
            return runCanDeactivateChecks(canDeactivateChecks, (/** @type {?} */ (targetSnapshot)), currentSnapshot, moduleInjector)
                .pipe(mergeMap((/**
             * @param {?} canDeactivate
             * @return {?}
             */
            canDeactivate => {
                return canDeactivate && isBoolean(canDeactivate) ?
                    runCanActivateChecks((/** @type {?} */ (targetSnapshot)), canActivateChecks, moduleInjector, forwardEvent) :
                    of(canDeactivate);
            })), map((/**
             * @param {?} guardsResult
             * @return {?}
             */
            guardsResult => (Object.assign(Object.assign({}, t), { guardsResult })))));
        })));
    });
}
/**
 * @param {?} checks
 * @param {?} futureRSS
 * @param {?} currRSS
 * @param {?} moduleInjector
 * @return {?}
 */
function runCanDeactivateChecks(checks, futureRSS, currRSS, moduleInjector) {
    return from(checks).pipe(mergeMap((/**
     * @param {?} check
     * @return {?}
     */
    check => runCanDeactivate(check.component, check.route, currRSS, futureRSS, moduleInjector))), first((/**
     * @param {?} result
     * @return {?}
     */
    result => {
        return result !== true;
    }), (/** @type {?} */ (true))));
}
/**
 * @param {?} futureSnapshot
 * @param {?} checks
 * @param {?} moduleInjector
 * @param {?=} forwardEvent
 * @return {?}
 */
function runCanActivateChecks(futureSnapshot, checks, moduleInjector, forwardEvent) {
    return from(checks).pipe(concatMap((/**
     * @param {?} check
     * @return {?}
     */
    (check) => {
        return from([
            fireChildActivationStart(check.route.parent, forwardEvent),
            fireActivationStart(check.route, forwardEvent),
            runCanActivateChild(futureSnapshot, check.path, moduleInjector),
            runCanActivate(futureSnapshot, check.route, moduleInjector)
        ])
            .pipe(concatAll(), first((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            return result !== true;
        }), (/** @type {?} */ (true))));
    })), first((/**
     * @param {?} result
     * @return {?}
     */
    result => {
        return result !== true;
    }), (/** @type {?} */ (true))));
}
/**
 * This should fire off `ActivationStart` events for each route being activated at this
 * level.
 * In other words, if you're activating `a` and `b` below, `path` will contain the
 * `ActivatedRouteSnapshot`s for both and we will fire `ActivationStart` for both. Always
 * return
 * `true` so checks continue to run.
 * @param {?} snapshot
 * @param {?=} forwardEvent
 * @return {?}
 */
function fireActivationStart(snapshot, forwardEvent) {
    if (snapshot !== null && forwardEvent) {
        forwardEvent(new ActivationStart(snapshot));
    }
    return of(true);
}
/**
 * This should fire off `ChildActivationStart` events for each route being activated at this
 * level.
 * In other words, if you're activating `a` and `b` below, `path` will contain the
 * `ActivatedRouteSnapshot`s for both and we will fire `ChildActivationStart` for both. Always
 * return
 * `true` so checks continue to run.
 * @param {?} snapshot
 * @param {?=} forwardEvent
 * @return {?}
 */
function fireChildActivationStart(snapshot, forwardEvent) {
    if (snapshot !== null && forwardEvent) {
        forwardEvent(new ChildActivationStart(snapshot));
    }
    return of(true);
}
/**
 * @param {?} futureRSS
 * @param {?} futureARS
 * @param {?} moduleInjector
 * @return {?}
 */
function runCanActivate(futureRSS, futureARS, moduleInjector) {
    /** @type {?} */
    const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
    if (!canActivate || canActivate.length === 0)
        return of(true);
    /** @type {?} */
    const canActivateObservables = canActivate.map((/**
     * @param {?} c
     * @return {?}
     */
    (c) => {
        return defer((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const guard = getToken(c, futureARS, moduleInjector);
            /** @type {?} */
            let observable;
            if (isCanActivate(guard)) {
                observable = wrapIntoObservable(guard.canActivate(futureARS, futureRSS));
            }
            else if (isFunction(guard)) {
                observable = wrapIntoObservable(guard(futureARS, futureRSS));
            }
            else {
                throw new Error('Invalid CanActivate guard');
            }
            return observable.pipe(first());
        }));
    }));
    return of(canActivateObservables).pipe(prioritizedGuardValue());
}
/**
 * @param {?} futureRSS
 * @param {?} path
 * @param {?} moduleInjector
 * @return {?}
 */
function runCanActivateChild(futureRSS, path, moduleInjector) {
    /** @type {?} */
    const futureARS = path[path.length - 1];
    /** @type {?} */
    const canActivateChildGuards = path.slice(0, path.length - 1)
        .reverse()
        .map((/**
     * @param {?} p
     * @return {?}
     */
    p => getCanActivateChild(p)))
        .filter((/**
     * @param {?} _
     * @return {?}
     */
    _ => _ !== null));
    /** @type {?} */
    const canActivateChildGuardsMapped = canActivateChildGuards.map((/**
     * @param {?} d
     * @return {?}
     */
    (d) => {
        return defer((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const guardsMapped = d.guards.map((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                /** @type {?} */
                const guard = getToken(c, d.node, moduleInjector);
                /** @type {?} */
                let observable;
                if (isCanActivateChild(guard)) {
                    observable = wrapIntoObservable(guard.canActivateChild(futureARS, futureRSS));
                }
                else if (isFunction(guard)) {
                    observable = wrapIntoObservable(guard(futureARS, futureRSS));
                }
                else {
                    throw new Error('Invalid CanActivateChild guard');
                }
                return observable.pipe(first());
            }));
            return of(guardsMapped).pipe(prioritizedGuardValue());
        }));
    }));
    return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
/**
 * @param {?} component
 * @param {?} currARS
 * @param {?} currRSS
 * @param {?} futureRSS
 * @param {?} moduleInjector
 * @return {?}
 */
function runCanDeactivate(component, currARS, currRSS, futureRSS, moduleInjector) {
    /** @type {?} */
    const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
    if (!canDeactivate || canDeactivate.length === 0)
        return of(true);
    /** @type {?} */
    const canDeactivateObservables = canDeactivate.map((/**
     * @param {?} c
     * @return {?}
     */
    (c) => {
        /** @type {?} */
        const guard = getToken(c, currARS, moduleInjector);
        /** @type {?} */
        let observable;
        if (isCanDeactivate(guard)) {
            observable = wrapIntoObservable(guard.canDeactivate((/** @type {?} */ (component)), currARS, currRSS, futureRSS));
        }
        else if (isFunction(guard)) {
            observable = wrapIntoObservable(guard(component, currARS, currRSS, futureRSS));
        }
        else {
            throw new Error('Invalid CanDeactivate guard');
        }
        return observable.pipe(first());
    }));
    return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tfZ3VhcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9vcGVyYXRvcnMvY2hlY2tfZ3VhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUF3QyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0UsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxPQUFPLEVBQUMsZUFBZSxFQUFFLG9CQUFvQixFQUFRLE1BQU0sV0FBVyxDQUFDO0FBS3ZFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBNkIsbUJBQW1CLEVBQUUsUUFBUSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDakcsT0FBTyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRS9HLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7QUFFaEUsTUFBTSxVQUFVLFdBQVcsQ0FBQyxjQUF3QixFQUFFLFlBQW1DO0lBRXZGOzs7O0lBQU8sVUFBUyxNQUF3QztRQUN0RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO2tCQUN4QixFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEVBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUMsRUFBQyxHQUFHLENBQUM7WUFDN0YsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RFLE9BQU8sRUFBRSxpQ0FBSyxDQUFDLEtBQUUsWUFBWSxFQUFFLElBQUksSUFBRSxDQUFDO2FBQ3ZDO1lBRUQsT0FBTyxzQkFBc0IsQ0FDbEIsbUJBQW1CLEVBQUUsbUJBQUEsY0FBYyxFQUFDLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQztpQkFDNUUsSUFBSSxDQUNELFFBQVE7Ozs7WUFBQyxhQUFhLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxhQUFhLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQzlDLG9CQUFvQixDQUNoQixtQkFBQSxjQUFjLEVBQUMsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDdkUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7WUFBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGlDQUFLLENBQUMsS0FBRSxZQUFZLElBQUUsRUFBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7O0FBRUQsU0FBUyxzQkFBc0IsQ0FDM0IsTUFBdUIsRUFBRSxTQUE4QixFQUFFLE9BQTRCLEVBQ3JGLGNBQXdCO0lBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDcEIsUUFBUTs7OztJQUNKLEtBQUssQ0FBQyxFQUFFLENBQ0osZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLEVBQUMsRUFDM0YsS0FBSzs7OztJQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2IsT0FBTyxNQUFNLEtBQUssSUFBSSxDQUFDO0lBQ3pCLENBQUMsR0FBRSxtQkFBQSxJQUFJLEVBQXFCLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7Ozs7Ozs7O0FBRUQsU0FBUyxvQkFBb0IsQ0FDekIsY0FBbUMsRUFBRSxNQUFxQixFQUFFLGNBQXdCLEVBQ3BGLFlBQW1DO0lBQ3JDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDcEIsU0FBUzs7OztJQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1FBQy9CLE9BQU8sSUFBSSxDQUFDO1lBQ0gsd0JBQXdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO1lBQzFELG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDO1lBQzlDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQztZQUMvRCxjQUFjLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDO1NBQzVELENBQUM7YUFDSixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxLQUFLLElBQUksQ0FBQztRQUN6QixDQUFDLEdBQUUsbUJBQUEsSUFBSSxFQUFxQixDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDLEVBQUMsRUFDRixLQUFLOzs7O0lBQUMsTUFBTSxDQUFDLEVBQUU7UUFDYixPQUFPLE1BQU0sS0FBSyxJQUFJLENBQUM7SUFDekIsQ0FBQyxHQUFFLG1CQUFBLElBQUksRUFBcUIsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQzs7Ozs7Ozs7Ozs7O0FBVUQsU0FBUyxtQkFBbUIsQ0FDeEIsUUFBcUMsRUFDckMsWUFBbUM7SUFDckMsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFlBQVksRUFBRTtRQUNyQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM3QztJQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7OztBQVVELFNBQVMsd0JBQXdCLENBQzdCLFFBQXFDLEVBQ3JDLFlBQW1DO0lBQ3JDLElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxZQUFZLEVBQUU7UUFDckMsWUFBWSxDQUFDLElBQUksb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUNsRDtJQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLGNBQWMsQ0FDbkIsU0FBOEIsRUFBRSxTQUFpQyxFQUNqRSxjQUF3Qjs7VUFDcEIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJO0lBQ3BGLElBQUksQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7O1VBRXhELHNCQUFzQixHQUFHLFdBQVcsQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUN4RCxPQUFPLEtBQUs7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ1YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQzs7Z0JBQ2hELFVBQVU7WUFDZCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsVUFBVSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDMUU7aUJBQU0sSUFBSSxVQUFVLENBQWdCLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxVQUFVLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUM5QztZQUNELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0lBQ0YsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLG1CQUFtQixDQUN4QixTQUE4QixFQUFFLElBQThCLEVBQzlELGNBQXdCOztVQUNwQixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztVQUVqQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN6QixPQUFPLEVBQUU7U0FDVCxHQUFHOzs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBQztTQUNoQyxNQUFNOzs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFDOztVQUVyRCw0QkFBNEIsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUN6RSxPQUFPLEtBQUs7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ1YsWUFBWSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztZQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7O3NCQUNyQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQzs7b0JBQzdDLFVBQVU7Z0JBQ2QsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDN0IsVUFBVSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztpQkFDL0U7cUJBQU0sSUFBSSxVQUFVLENBQXFCLEtBQUssQ0FBQyxFQUFFO29CQUNoRCxVQUFVLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUM5RDtxQkFBTTtvQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7aUJBQ25EO2dCQUNELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQztZQUNGLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDLEVBQUM7SUFDRixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7QUFDeEUsQ0FBQzs7Ozs7Ozs7O0FBRUQsU0FBUyxnQkFBZ0IsQ0FDckIsU0FBc0IsRUFBRSxPQUErQixFQUFFLE9BQTRCLEVBQ3JGLFNBQThCLEVBQUUsY0FBd0I7O1VBQ3BELGFBQWEsR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUk7SUFDL0YsSUFBSSxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7VUFDNUQsd0JBQXdCLEdBQUcsYUFBYSxDQUFDLEdBQUc7Ozs7SUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFOztjQUN0RCxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDOztZQUM5QyxVQUFVO1FBQ2QsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsVUFBVSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQUEsU0FBUyxFQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQy9GO2FBQU0sSUFBSSxVQUFVLENBQXVCLEtBQUssQ0FBQyxFQUFFO1lBQ2xELFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxFQUFDO0lBQ0YsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0FBQ3BFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtkZWZlciwgZnJvbSwgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NvbmNhdEFsbCwgY29uY2F0TWFwLCBmaXJzdCwgbWFwLCBtZXJnZU1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge0FjdGl2YXRpb25TdGFydCwgQ2hpbGRBY3RpdmF0aW9uU3RhcnQsIEV2ZW50fSBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZUNoaWxkRm4sIENhbkFjdGl2YXRlRm4sIENhbkRlYWN0aXZhdGVGbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge05hdmlnYXRpb25UcmFuc2l0aW9ufSBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90fSBmcm9tICcuLi9yb3V0ZXJfc3RhdGUnO1xuaW1wb3J0IHtVcmxUcmVlfSBmcm9tICcuLi91cmxfdHJlZSc7XG5pbXBvcnQge3dyYXBJbnRvT2JzZXJ2YWJsZX0gZnJvbSAnLi4vdXRpbHMvY29sbGVjdGlvbic7XG5pbXBvcnQge0NhbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlLCBnZXRDYW5BY3RpdmF0ZUNoaWxkLCBnZXRUb2tlbn0gZnJvbSAnLi4vdXRpbHMvcHJlYWN0aXZhdGlvbic7XG5pbXBvcnQge2lzQm9vbGVhbiwgaXNDYW5BY3RpdmF0ZSwgaXNDYW5BY3RpdmF0ZUNoaWxkLCBpc0NhbkRlYWN0aXZhdGUsIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzL3R5cGVfZ3VhcmRzJztcblxuaW1wb3J0IHtwcmlvcml0aXplZEd1YXJkVmFsdWV9IGZyb20gJy4vcHJpb3JpdGl6ZWRfZ3VhcmRfdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tHdWFyZHMobW9kdWxlSW5qZWN0b3I6IEluamVjdG9yLCBmb3J3YXJkRXZlbnQ/OiAoZXZ0OiBFdmVudCkgPT4gdm9pZCk6XG4gICAgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPE5hdmlnYXRpb25UcmFuc2l0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzb3VyY2U6IE9ic2VydmFibGU8TmF2aWdhdGlvblRyYW5zaXRpb24+KSB7XG4gICAgcmV0dXJuIHNvdXJjZS5waXBlKG1lcmdlTWFwKHQgPT4ge1xuICAgICAgY29uc3Qge3RhcmdldFNuYXBzaG90LCBjdXJyZW50U25hcHNob3QsIGd1YXJkczoge2NhbkFjdGl2YXRlQ2hlY2tzLCBjYW5EZWFjdGl2YXRlQ2hlY2tzfX0gPSB0O1xuICAgICAgaWYgKGNhbkRlYWN0aXZhdGVDaGVja3MubGVuZ3RoID09PSAwICYmIGNhbkFjdGl2YXRlQ2hlY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb2Yoey4uLnQsIGd1YXJkc1Jlc3VsdDogdHJ1ZX0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcnVuQ2FuRGVhY3RpdmF0ZUNoZWNrcyhcbiAgICAgICAgICAgICAgICAgY2FuRGVhY3RpdmF0ZUNoZWNrcywgdGFyZ2V0U25hcHNob3QhLCBjdXJyZW50U25hcHNob3QsIG1vZHVsZUluamVjdG9yKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtZXJnZU1hcChjYW5EZWFjdGl2YXRlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FuRGVhY3RpdmF0ZSAmJiBpc0Jvb2xlYW4oY2FuRGVhY3RpdmF0ZSkgP1xuICAgICAgICAgICAgICAgICAgICBydW5DYW5BY3RpdmF0ZUNoZWNrcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFNuYXBzaG90ISwgY2FuQWN0aXZhdGVDaGVja3MsIG1vZHVsZUluamVjdG9yLCBmb3J3YXJkRXZlbnQpIDpcbiAgICAgICAgICAgICAgICAgICAgb2YoY2FuRGVhY3RpdmF0ZSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBtYXAoZ3VhcmRzUmVzdWx0ID0+ICh7Li4udCwgZ3VhcmRzUmVzdWx0fSkpKTtcbiAgICB9KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJ1bkNhbkRlYWN0aXZhdGVDaGVja3MoXG4gICAgY2hlY2tzOiBDYW5EZWFjdGl2YXRlW10sIGZ1dHVyZVJTUzogUm91dGVyU3RhdGVTbmFwc2hvdCwgY3VyclJTUzogUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgICBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgcmV0dXJuIGZyb20oY2hlY2tzKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoXG4gICAgICAgICAgY2hlY2sgPT5cbiAgICAgICAgICAgICAgcnVuQ2FuRGVhY3RpdmF0ZShjaGVjay5jb21wb25lbnQsIGNoZWNrLnJvdXRlLCBjdXJyUlNTLCBmdXR1cmVSU1MsIG1vZHVsZUluamVjdG9yKSksXG4gICAgICBmaXJzdChyZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICE9PSB0cnVlO1xuICAgICAgfSwgdHJ1ZSBhcyBib29sZWFuIHwgVXJsVHJlZSkpO1xufVxuXG5mdW5jdGlvbiBydW5DYW5BY3RpdmF0ZUNoZWNrcyhcbiAgICBmdXR1cmVTbmFwc2hvdDogUm91dGVyU3RhdGVTbmFwc2hvdCwgY2hlY2tzOiBDYW5BY3RpdmF0ZVtdLCBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IsXG4gICAgZm9yd2FyZEV2ZW50PzogKGV2dDogRXZlbnQpID0+IHZvaWQpIHtcbiAgcmV0dXJuIGZyb20oY2hlY2tzKS5waXBlKFxuICAgICAgY29uY2F0TWFwKChjaGVjazogQ2FuQWN0aXZhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICBmaXJlQ2hpbGRBY3RpdmF0aW9uU3RhcnQoY2hlY2sucm91dGUucGFyZW50LCBmb3J3YXJkRXZlbnQpLFxuICAgICAgICAgICAgICAgICBmaXJlQWN0aXZhdGlvblN0YXJ0KGNoZWNrLnJvdXRlLCBmb3J3YXJkRXZlbnQpLFxuICAgICAgICAgICAgICAgICBydW5DYW5BY3RpdmF0ZUNoaWxkKGZ1dHVyZVNuYXBzaG90LCBjaGVjay5wYXRoLCBtb2R1bGVJbmplY3RvciksXG4gICAgICAgICAgICAgICAgIHJ1bkNhbkFjdGl2YXRlKGZ1dHVyZVNuYXBzaG90LCBjaGVjay5yb3V0ZSwgbW9kdWxlSW5qZWN0b3IpXG4gICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnBpcGUoY29uY2F0QWxsKCksIGZpcnN0KHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgIT09IHRydWU7XG4gICAgICAgICAgICAgICAgICB9LCB0cnVlIGFzIGJvb2xlYW4gfCBVcmxUcmVlKSk7XG4gICAgICB9KSxcbiAgICAgIGZpcnN0KHJlc3VsdCA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHQgIT09IHRydWU7XG4gICAgICB9LCB0cnVlIGFzIGJvb2xlYW4gfCBVcmxUcmVlKSk7XG59XG5cbi8qKlxuICogVGhpcyBzaG91bGQgZmlyZSBvZmYgYEFjdGl2YXRpb25TdGFydGAgZXZlbnRzIGZvciBlYWNoIHJvdXRlIGJlaW5nIGFjdGl2YXRlZCBhdCB0aGlzXG4gKiBsZXZlbC5cbiAqIEluIG90aGVyIHdvcmRzLCBpZiB5b3UncmUgYWN0aXZhdGluZyBgYWAgYW5kIGBiYCBiZWxvdywgYHBhdGhgIHdpbGwgY29udGFpbiB0aGVcbiAqIGBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90YHMgZm9yIGJvdGggYW5kIHdlIHdpbGwgZmlyZSBgQWN0aXZhdGlvblN0YXJ0YCBmb3IgYm90aC4gQWx3YXlzXG4gKiByZXR1cm5cbiAqIGB0cnVlYCBzbyBjaGVja3MgY29udGludWUgdG8gcnVuLlxuICovXG5mdW5jdGlvbiBmaXJlQWN0aXZhdGlvblN0YXJ0KFxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fG51bGwsXG4gICAgZm9yd2FyZEV2ZW50PzogKGV2dDogRXZlbnQpID0+IHZvaWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgaWYgKHNuYXBzaG90ICE9PSBudWxsICYmIGZvcndhcmRFdmVudCkge1xuICAgIGZvcndhcmRFdmVudChuZXcgQWN0aXZhdGlvblN0YXJ0KHNuYXBzaG90KSk7XG4gIH1cbiAgcmV0dXJuIG9mKHRydWUpO1xufVxuXG4vKipcbiAqIFRoaXMgc2hvdWxkIGZpcmUgb2ZmIGBDaGlsZEFjdGl2YXRpb25TdGFydGAgZXZlbnRzIGZvciBlYWNoIHJvdXRlIGJlaW5nIGFjdGl2YXRlZCBhdCB0aGlzXG4gKiBsZXZlbC5cbiAqIEluIG90aGVyIHdvcmRzLCBpZiB5b3UncmUgYWN0aXZhdGluZyBgYWAgYW5kIGBiYCBiZWxvdywgYHBhdGhgIHdpbGwgY29udGFpbiB0aGVcbiAqIGBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90YHMgZm9yIGJvdGggYW5kIHdlIHdpbGwgZmlyZSBgQ2hpbGRBY3RpdmF0aW9uU3RhcnRgIGZvciBib3RoLiBBbHdheXNcbiAqIHJldHVyblxuICogYHRydWVgIHNvIGNoZWNrcyBjb250aW51ZSB0byBydW4uXG4gKi9cbmZ1bmN0aW9uIGZpcmVDaGlsZEFjdGl2YXRpb25TdGFydChcbiAgICBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdHxudWxsLFxuICAgIGZvcndhcmRFdmVudD86IChldnQ6IEV2ZW50KSA9PiB2b2lkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gIGlmIChzbmFwc2hvdCAhPT0gbnVsbCAmJiBmb3J3YXJkRXZlbnQpIHtcbiAgICBmb3J3YXJkRXZlbnQobmV3IENoaWxkQWN0aXZhdGlvblN0YXJ0KHNuYXBzaG90KSk7XG4gIH1cbiAgcmV0dXJuIG9mKHRydWUpO1xufVxuXG5mdW5jdGlvbiBydW5DYW5BY3RpdmF0ZShcbiAgICBmdXR1cmVSU1M6IFJvdXRlclN0YXRlU25hcHNob3QsIGZ1dHVyZUFSUzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IpOiBPYnNlcnZhYmxlPGJvb2xlYW58VXJsVHJlZT4ge1xuICBjb25zdCBjYW5BY3RpdmF0ZSA9IGZ1dHVyZUFSUy5yb3V0ZUNvbmZpZyA/IGZ1dHVyZUFSUy5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZSA6IG51bGw7XG4gIGlmICghY2FuQWN0aXZhdGUgfHwgY2FuQWN0aXZhdGUubGVuZ3RoID09PSAwKSByZXR1cm4gb2YodHJ1ZSk7XG5cbiAgY29uc3QgY2FuQWN0aXZhdGVPYnNlcnZhYmxlcyA9IGNhbkFjdGl2YXRlLm1hcCgoYzogYW55KSA9PiB7XG4gICAgcmV0dXJuIGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGd1YXJkID0gZ2V0VG9rZW4oYywgZnV0dXJlQVJTLCBtb2R1bGVJbmplY3Rvcik7XG4gICAgICBsZXQgb2JzZXJ2YWJsZTtcbiAgICAgIGlmIChpc0NhbkFjdGl2YXRlKGd1YXJkKSkge1xuICAgICAgICBvYnNlcnZhYmxlID0gd3JhcEludG9PYnNlcnZhYmxlKGd1YXJkLmNhbkFjdGl2YXRlKGZ1dHVyZUFSUywgZnV0dXJlUlNTKSk7XG4gICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb248Q2FuQWN0aXZhdGVGbj4oZ3VhcmQpKSB7XG4gICAgICAgIG9ic2VydmFibGUgPSB3cmFwSW50b09ic2VydmFibGUoZ3VhcmQoZnV0dXJlQVJTLCBmdXR1cmVSU1MpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDYW5BY3RpdmF0ZSBndWFyZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShmaXJzdCgpKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvZihjYW5BY3RpdmF0ZU9ic2VydmFibGVzKS5waXBlKHByaW9yaXRpemVkR3VhcmRWYWx1ZSgpKTtcbn1cblxuZnVuY3Rpb24gcnVuQ2FuQWN0aXZhdGVDaGlsZChcbiAgICBmdXR1cmVSU1M6IFJvdXRlclN0YXRlU25hcHNob3QsIHBhdGg6IEFjdGl2YXRlZFJvdXRlU25hcHNob3RbXSxcbiAgICBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IpOiBPYnNlcnZhYmxlPGJvb2xlYW58VXJsVHJlZT4ge1xuICBjb25zdCBmdXR1cmVBUlMgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG5cbiAgY29uc3QgY2FuQWN0aXZhdGVDaGlsZEd1YXJkcyA9IHBhdGguc2xpY2UoMCwgcGF0aC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHAgPT4gZ2V0Q2FuQWN0aXZhdGVDaGlsZChwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKF8gPT4gXyAhPT0gbnVsbCk7XG5cbiAgY29uc3QgY2FuQWN0aXZhdGVDaGlsZEd1YXJkc01hcHBlZCA9IGNhbkFjdGl2YXRlQ2hpbGRHdWFyZHMubWFwKChkOiBhbnkpID0+IHtcbiAgICByZXR1cm4gZGVmZXIoKCkgPT4ge1xuICAgICAgY29uc3QgZ3VhcmRzTWFwcGVkID0gZC5ndWFyZHMubWFwKChjOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZ3VhcmQgPSBnZXRUb2tlbihjLCBkLm5vZGUsIG1vZHVsZUluamVjdG9yKTtcbiAgICAgICAgbGV0IG9ic2VydmFibGU7XG4gICAgICAgIGlmIChpc0NhbkFjdGl2YXRlQ2hpbGQoZ3VhcmQpKSB7XG4gICAgICAgICAgb2JzZXJ2YWJsZSA9IHdyYXBJbnRvT2JzZXJ2YWJsZShndWFyZC5jYW5BY3RpdmF0ZUNoaWxkKGZ1dHVyZUFSUywgZnV0dXJlUlNTKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbjxDYW5BY3RpdmF0ZUNoaWxkRm4+KGd1YXJkKSkge1xuICAgICAgICAgIG9ic2VydmFibGUgPSB3cmFwSW50b09ic2VydmFibGUoZ3VhcmQoZnV0dXJlQVJTLCBmdXR1cmVSU1MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ2FuQWN0aXZhdGVDaGlsZCBndWFyZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoZmlyc3QoKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvZihndWFyZHNNYXBwZWQpLnBpcGUocHJpb3JpdGl6ZWRHdWFyZFZhbHVlKCkpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mKGNhbkFjdGl2YXRlQ2hpbGRHdWFyZHNNYXBwZWQpLnBpcGUocHJpb3JpdGl6ZWRHdWFyZFZhbHVlKCkpO1xufVxuXG5mdW5jdGlvbiBydW5DYW5EZWFjdGl2YXRlKFxuICAgIGNvbXBvbmVudDogT2JqZWN0fG51bGwsIGN1cnJBUlM6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGN1cnJSU1M6IFJvdXRlclN0YXRlU25hcHNob3QsXG4gICAgZnV0dXJlUlNTOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IpOiBPYnNlcnZhYmxlPGJvb2xlYW58VXJsVHJlZT4ge1xuICBjb25zdCBjYW5EZWFjdGl2YXRlID0gY3VyckFSUyAmJiBjdXJyQVJTLnJvdXRlQ29uZmlnID8gY3VyckFSUy5yb3V0ZUNvbmZpZy5jYW5EZWFjdGl2YXRlIDogbnVsbDtcbiAgaWYgKCFjYW5EZWFjdGl2YXRlIHx8IGNhbkRlYWN0aXZhdGUubGVuZ3RoID09PSAwKSByZXR1cm4gb2YodHJ1ZSk7XG4gIGNvbnN0IGNhbkRlYWN0aXZhdGVPYnNlcnZhYmxlcyA9IGNhbkRlYWN0aXZhdGUubWFwKChjOiBhbnkpID0+IHtcbiAgICBjb25zdCBndWFyZCA9IGdldFRva2VuKGMsIGN1cnJBUlMsIG1vZHVsZUluamVjdG9yKTtcbiAgICBsZXQgb2JzZXJ2YWJsZTtcbiAgICBpZiAoaXNDYW5EZWFjdGl2YXRlKGd1YXJkKSkge1xuICAgICAgb2JzZXJ2YWJsZSA9IHdyYXBJbnRvT2JzZXJ2YWJsZShndWFyZC5jYW5EZWFjdGl2YXRlKGNvbXBvbmVudCEsIGN1cnJBUlMsIGN1cnJSU1MsIGZ1dHVyZVJTUykpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbjxDYW5EZWFjdGl2YXRlRm48YW55Pj4oZ3VhcmQpKSB7XG4gICAgICBvYnNlcnZhYmxlID0gd3JhcEludG9PYnNlcnZhYmxlKGd1YXJkKGNvbXBvbmVudCwgY3VyckFSUywgY3VyclJTUywgZnV0dXJlUlNTKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDYW5EZWFjdGl2YXRlIGd1YXJkJyk7XG4gICAgfVxuICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoZmlyc3QoKSk7XG4gIH0pO1xuICByZXR1cm4gb2YoY2FuRGVhY3RpdmF0ZU9ic2VydmFibGVzKS5waXBlKHByaW9yaXRpemVkR3VhcmRWYWx1ZSgpKTtcbn1cbiJdfQ==