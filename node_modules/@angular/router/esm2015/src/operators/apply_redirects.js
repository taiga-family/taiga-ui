/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/operators/apply_redirects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { map, switchMap } from 'rxjs/operators';
import { applyRedirects as applyRedirectsFn } from '../apply_redirects';
/**
 * @param {?} moduleInjector
 * @param {?} configLoader
 * @param {?} urlSerializer
 * @param {?} config
 * @return {?}
 */
export function applyRedirects(moduleInjector, configLoader, urlSerializer, config) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return source.pipe(switchMap((/**
         * @param {?} t
         * @return {?}
         */
        t => applyRedirectsFn(moduleInjector, configLoader, urlSerializer, t.extractedUrl, config)
            .pipe(map((/**
         * @param {?} urlAfterRedirects
         * @return {?}
         */
        urlAfterRedirects => (Object.assign(Object.assign({}, t), { urlAfterRedirects }))))))));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHlfcmVkaXJlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9vcGVyYXRvcnMvYXBwbHlfcmVkaXJlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFDLGNBQWMsSUFBSSxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztBQU10RSxNQUFNLFVBQVUsY0FBYyxDQUMxQixjQUF3QixFQUFFLFlBQWdDLEVBQUUsYUFBNEIsRUFDeEYsTUFBYztJQUNoQjs7OztJQUFPLFVBQVMsTUFBd0M7UUFDdEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7UUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQzthQUNoRixJQUFJLENBQUMsR0FBRzs7OztRQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxpQ0FBSyxDQUFDLEtBQUUsaUJBQWlCLElBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge2FwcGx5UmVkaXJlY3RzIGFzIGFwcGx5UmVkaXJlY3RzRm59IGZyb20gJy4uL2FwcGx5X3JlZGlyZWN0cyc7XG5pbXBvcnQge1JvdXRlc30gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7TmF2aWdhdGlvblRyYW5zaXRpb259IGZyb20gJy4uL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlckNvbmZpZ0xvYWRlcn0gZnJvbSAnLi4vcm91dGVyX2NvbmZpZ19sb2FkZXInO1xuaW1wb3J0IHtVcmxTZXJpYWxpemVyfSBmcm9tICcuLi91cmxfdHJlZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJlZGlyZWN0cyhcbiAgICBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IsIGNvbmZpZ0xvYWRlcjogUm91dGVyQ29uZmlnTG9hZGVyLCB1cmxTZXJpYWxpemVyOiBVcmxTZXJpYWxpemVyLFxuICAgIGNvbmZpZzogUm91dGVzKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPE5hdmlnYXRpb25UcmFuc2l0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzb3VyY2U6IE9ic2VydmFibGU8TmF2aWdhdGlvblRyYW5zaXRpb24+KSB7XG4gICAgcmV0dXJuIHNvdXJjZS5waXBlKHN3aXRjaE1hcChcbiAgICAgICAgdCA9PiBhcHBseVJlZGlyZWN0c0ZuKG1vZHVsZUluamVjdG9yLCBjb25maWdMb2FkZXIsIHVybFNlcmlhbGl6ZXIsIHQuZXh0cmFjdGVkVXJsLCBjb25maWcpXG4gICAgICAgICAgICAgICAgIC5waXBlKG1hcCh1cmxBZnRlclJlZGlyZWN0cyA9PiAoey4uLnQsIHVybEFmdGVyUmVkaXJlY3RzfSkpKSkpO1xuICB9O1xufVxuIl19