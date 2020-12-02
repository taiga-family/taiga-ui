/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/operators/recognize.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { map, mergeMap } from 'rxjs/operators';
import { recognize as recognizeFn } from '../recognize';
/**
 * @param {?} rootComponentType
 * @param {?} config
 * @param {?} serializer
 * @param {?} paramsInheritanceStrategy
 * @param {?} relativeLinkResolution
 * @return {?}
 */
export function recognize(rootComponentType, config, serializer, paramsInheritanceStrategy, relativeLinkResolution) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return source.pipe(mergeMap((/**
         * @param {?} t
         * @return {?}
         */
        t => recognizeFn(rootComponentType, config, t.urlAfterRedirects, serializer(t.urlAfterRedirects), paramsInheritanceStrategy, relativeLinkResolution)
            .pipe(map((/**
         * @param {?} targetSnapshot
         * @return {?}
         */
        targetSnapshot => (Object.assign(Object.assign({}, t), { targetSnapshot }))))))));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb2duaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9vcGVyYXRvcnMvcmVjb2duaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0MsT0FBTyxFQUFDLFNBQVMsSUFBSSxXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7OztBQUl0RCxNQUFNLFVBQVUsU0FBUyxDQUNyQixpQkFBaUMsRUFBRSxNQUFlLEVBQUUsVUFBb0MsRUFDeEYseUJBQStDLEVBQy9DLHNCQUE0QztJQUM5Qzs7OztJQUFPLFVBQVMsTUFBd0M7UUFDdEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7Ozs7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQ1AsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEVBQy9FLHlCQUF5QixFQUFFLHNCQUFzQixDQUFDO2FBQ2pELElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxpQ0FBSyxDQUFDLEtBQUUsY0FBYyxJQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIG1lcmdlTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7Um91dGV9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge3JlY29nbml6ZSBhcyByZWNvZ25pemVGbn0gZnJvbSAnLi4vcmVjb2duaXplJztcbmltcG9ydCB7TmF2aWdhdGlvblRyYW5zaXRpb259IGZyb20gJy4uL3JvdXRlcic7XG5pbXBvcnQge1VybFRyZWV9IGZyb20gJy4uL3VybF90cmVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29nbml6ZShcbiAgICByb290Q29tcG9uZW50VHlwZTogVHlwZTxhbnk+fG51bGwsIGNvbmZpZzogUm91dGVbXSwgc2VyaWFsaXplcjogKHVybDogVXJsVHJlZSkgPT4gc3RyaW5nLFxuICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k6ICdlbXB0eU9ubHknfCdhbHdheXMnLFxuICAgIHJlbGF0aXZlTGlua1Jlc29sdXRpb246ICdsZWdhY3knfCdjb3JyZWN0ZWQnKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPE5hdmlnYXRpb25UcmFuc2l0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzb3VyY2U6IE9ic2VydmFibGU8TmF2aWdhdGlvblRyYW5zaXRpb24+KSB7XG4gICAgcmV0dXJuIHNvdXJjZS5waXBlKG1lcmdlTWFwKFxuICAgICAgICB0ID0+IHJlY29nbml6ZUZuKFxuICAgICAgICAgICAgICAgICByb290Q29tcG9uZW50VHlwZSwgY29uZmlnLCB0LnVybEFmdGVyUmVkaXJlY3RzLCBzZXJpYWxpemVyKHQudXJsQWZ0ZXJSZWRpcmVjdHMpLFxuICAgICAgICAgICAgICAgICBwYXJhbXNJbmhlcml0YW5jZVN0cmF0ZWd5LCByZWxhdGl2ZUxpbmtSZXNvbHV0aW9uKVxuICAgICAgICAgICAgICAgICAucGlwZShtYXAodGFyZ2V0U25hcHNob3QgPT4gKHsuLi50LCB0YXJnZXRTbmFwc2hvdH0pKSkpKTtcbiAgfTtcbn1cbiJdfQ==