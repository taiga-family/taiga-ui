/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/operators/resolve_data.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { from, of } from 'rxjs';
import { concatMap, last, map, mergeMap, reduce } from 'rxjs/operators';
import { inheritedParamsDataResolve } from '../router_state';
import { wrapIntoObservable } from '../utils/collection';
import { getToken } from '../utils/preactivation';
/**
 * @param {?} paramsInheritanceStrategy
 * @param {?} moduleInjector
 * @return {?}
 */
export function resolveData(paramsInheritanceStrategy, moduleInjector) {
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
            const { targetSnapshot, guards: { canActivateChecks } } = t;
            if (!canActivateChecks.length) {
                return of(t);
            }
            return from(canActivateChecks)
                .pipe(concatMap((/**
             * @param {?} check
             * @return {?}
             */
            check => runResolve(check.route, (/** @type {?} */ (targetSnapshot)), paramsInheritanceStrategy, moduleInjector))), reduce((/**
             * @param {?} _
             * @param {?} __
             * @return {?}
             */
            (_, __) => _)), map((/**
             * @param {?} _
             * @return {?}
             */
            _ => t)));
        })));
    });
}
/**
 * @param {?} futureARS
 * @param {?} futureRSS
 * @param {?} paramsInheritanceStrategy
 * @param {?} moduleInjector
 * @return {?}
 */
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, moduleInjector) {
    /** @type {?} */
    const resolve = futureARS._resolve;
    return resolveNode(resolve, futureARS, futureRSS, moduleInjector)
        .pipe(map((/**
     * @param {?} resolvedData
     * @return {?}
     */
    (resolvedData) => {
        futureARS._resolvedData = resolvedData;
        futureARS.data = Object.assign(Object.assign({}, futureARS.data), inheritedParamsDataResolve(futureARS, paramsInheritanceStrategy).resolve);
        return null;
    })));
}
/**
 * @param {?} resolve
 * @param {?} futureARS
 * @param {?} futureRSS
 * @param {?} moduleInjector
 * @return {?}
 */
function resolveNode(resolve, futureARS, futureRSS, moduleInjector) {
    /** @type {?} */
    const keys = Object.keys(resolve);
    if (keys.length === 0) {
        return of({});
    }
    if (keys.length === 1) {
        /** @type {?} */
        const key = keys[0];
        return getResolver(resolve[key], futureARS, futureRSS, moduleInjector)
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return { [key]: value };
        })));
    }
    /** @type {?} */
    const data = {};
    /** @type {?} */
    const runningResolvers$ = from(keys).pipe(mergeMap((/**
     * @param {?} key
     * @return {?}
     */
    (key) => {
        return getResolver(resolve[key], futureARS, futureRSS, moduleInjector)
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            data[key] = value;
            return value;
        })));
    })));
    return runningResolvers$.pipe(last(), map((/**
     * @return {?}
     */
    () => data)));
}
/**
 * @param {?} injectionToken
 * @param {?} futureARS
 * @param {?} futureRSS
 * @param {?} moduleInjector
 * @return {?}
 */
function getResolver(injectionToken, futureARS, futureRSS, moduleInjector) {
    /** @type {?} */
    const resolver = getToken(injectionToken, futureARS, moduleInjector);
    return resolver.resolve ? wrapIntoObservable(resolver.resolve(futureARS, futureRSS)) :
        wrapIntoObservable(resolver(futureARS, futureRSS));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZV9kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9vcGVyYXRvcnMvcmVzb2x2ZV9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxJQUFJLEVBQXdDLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwRSxPQUFPLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBSXRFLE9BQU8sRUFBeUIsMEJBQTBCLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFDeEcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFFaEQsTUFBTSxVQUFVLFdBQVcsQ0FDdkIseUJBQStDLEVBQy9DLGNBQXdCO0lBQzFCOzs7O0lBQU8sVUFBUyxNQUF3QztRQUN0RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO2tCQUN4QixFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBQyxpQkFBaUIsRUFBQyxFQUFDLEdBQUcsQ0FBQztZQUV2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNkO1lBRUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7aUJBQ3pCLElBQUksQ0FDRCxTQUFTOzs7O1lBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQ2YsS0FBSyxDQUFDLEtBQUssRUFBRSxtQkFBQSxjQUFjLEVBQUMsRUFBRSx5QkFBeUIsRUFBRSxjQUFjLENBQUMsRUFBQyxFQUNqRixNQUFNOzs7OztZQUFDLENB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IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2Zyb20sIE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjb25jYXRNYXAsIGxhc3QsIG1hcCwgbWVyZ2VNYXAsIHJlZHVjZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1Jlc29sdmVEYXRhfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uVHJhbnNpdGlvbn0gZnJvbSAnLi4vcm91dGVyJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgaW5oZXJpdGVkUGFyYW1zRGF0YVJlc29sdmUsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gJy4uL3JvdXRlcl9zdGF0ZSc7XG5pbXBvcnQge3dyYXBJbnRvT2JzZXJ2YWJsZX0gZnJvbSAnLi4vdXRpbHMvY29sbGVjdGlvbic7XG5pbXBvcnQge2dldFRva2VufSBmcm9tICcuLi91dGlscy9wcmVhY3RpdmF0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVEYXRhKFxuICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k6ICdlbXB0eU9ubHknfCdhbHdheXMnLFxuICAgIG1vZHVsZUluamVjdG9yOiBJbmplY3Rvcik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxOYXZpZ2F0aW9uVHJhbnNpdGlvbj4ge1xuICByZXR1cm4gZnVuY3Rpb24oc291cmNlOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25UcmFuc2l0aW9uPikge1xuICAgIHJldHVybiBzb3VyY2UucGlwZShtZXJnZU1hcCh0ID0+IHtcbiAgICAgIGNvbnN0IHt0YXJnZXRTbmFwc2hvdCwgZ3VhcmRzOiB7Y2FuQWN0aXZhdGVDaGVja3N9fSA9IHQ7XG5cbiAgICAgIGlmICghY2FuQWN0aXZhdGVDaGVja3MubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBvZih0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZyb20oY2FuQWN0aXZhdGVDaGVja3MpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIGNvbmNhdE1hcChcbiAgICAgICAgICAgICAgICAgIGNoZWNrID0+IHJ1blJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2sucm91dGUsIHRhcmdldFNuYXBzaG90ISwgcGFyYW1zSW5oZXJpdGFuY2VTdHJhdGVneSwgbW9kdWxlSW5qZWN0b3IpKSxcbiAgICAgICAgICAgICAgcmVkdWNlKChfOiBhbnksIF9fOiBhbnkpID0+IF8pLCBtYXAoXyA9PiB0KSk7XG4gICAgfSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBydW5SZXNvbHZlKFxuICAgIGZ1dHVyZUFSUzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgZnV0dXJlUlNTOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k6ICdlbXB0eU9ubHknfCdhbHdheXMnLCBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgY29uc3QgcmVzb2x2ZSA9IGZ1dHVyZUFSUy5fcmVzb2x2ZTtcbiAgcmV0dXJuIHJlc29sdmVOb2RlKHJlc29sdmUsIGZ1dHVyZUFSUywgZnV0dXJlUlNTLCBtb2R1bGVJbmplY3RvcilcbiAgICAgIC5waXBlKG1hcCgocmVzb2x2ZWREYXRhOiBhbnkpID0+IHtcbiAgICAgICAgZnV0dXJlQVJTLl9yZXNvbHZlZERhdGEgPSByZXNvbHZlZERhdGE7XG4gICAgICAgIGZ1dHVyZUFSUy5kYXRhID0ge1xuICAgICAgICAgIC4uLmZ1dHVyZUFSUy5kYXRhLFxuICAgICAgICAgIC4uLmluaGVyaXRlZFBhcmFtc0RhdGFSZXNvbHZlKGZ1dHVyZUFSUywgcGFyYW1zSW5oZXJpdGFuY2VTdHJhdGVneSkucmVzb2x2ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU5vZGUoXG4gICAgcmVzb2x2ZTogUmVzb2x2ZURhdGEsIGZ1dHVyZUFSUzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgZnV0dXJlUlNTOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICAgIG1vZHVsZUluamVjdG9yOiBJbmplY3Rvcik6IE9ic2VydmFibGU8YW55PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXNvbHZlKTtcbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9mKHt9KTtcbiAgfVxuICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzWzBdO1xuICAgIHJldHVybiBnZXRSZXNvbHZlcihyZXNvbHZlW2tleV0sIGZ1dHVyZUFSUywgZnV0dXJlUlNTLCBtb2R1bGVJbmplY3RvcilcbiAgICAgICAgLnBpcGUobWFwKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtba2V5XTogdmFsdWV9O1xuICAgICAgICB9KSk7XG4gIH1cbiAgY29uc3QgZGF0YToge1trOiBzdHJpbmddOiBhbnl9ID0ge307XG4gIGNvbnN0IHJ1bm5pbmdSZXNvbHZlcnMkID0gZnJvbShrZXlzKS5waXBlKG1lcmdlTWFwKChrZXk6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBnZXRSZXNvbHZlcihyZXNvbHZlW2tleV0sIGZ1dHVyZUFSUywgZnV0dXJlUlNTLCBtb2R1bGVJbmplY3RvcilcbiAgICAgICAgLnBpcGUobWFwKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KSk7XG4gIH0pKTtcbiAgcmV0dXJuIHJ1bm5pbmdSZXNvbHZlcnMkLnBpcGUobGFzdCgpLCBtYXAoKCkgPT4gZGF0YSkpO1xufVxuXG5mdW5jdGlvbiBnZXRSZXNvbHZlcihcbiAgICBpbmplY3Rpb25Ub2tlbjogYW55LCBmdXR1cmVBUlM6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGZ1dHVyZVJTUzogUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgICBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IpOiBPYnNlcnZhYmxlPGFueT4ge1xuICBjb25zdCByZXNvbHZlciA9IGdldFRva2VuKGluamVjdGlvblRva2VuLCBmdXR1cmVBUlMsIG1vZHVsZUluamVjdG9yKTtcbiAgcmV0dXJuIHJlc29sdmVyLnJlc29sdmUgPyB3cmFwSW50b09ic2VydmFibGUocmVzb2x2ZXIucmVzb2x2ZShmdXR1cmVBUlMsIGZ1dHVyZVJTUykpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwSW50b09ic2VydmFibGUocmVzb2x2ZXIoZnV0dXJlQVJTLCBmdXR1cmVSU1MpKTtcbn0iXX0=