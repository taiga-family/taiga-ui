/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/jit/pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getCompilerFacade } from '../../compiler/compiler_facade';
import { reflectDependencies } from '../../di/jit/util';
import { NG_FACTORY_DEF, NG_PIPE_DEF } from '../fields';
import { angularCoreEnv } from './environment';
/**
 * @param {?} type
 * @param {?} meta
 * @return {?}
 */
export function compilePipe(type, meta) {
    /** @type {?} */
    let ngPipeDef = null;
    /** @type {?} */
    let ngFactoryDef = null;
    Object.defineProperty(type, NG_FACTORY_DEF, {
        get: (/**
         * @return {?}
         */
        () => {
            if (ngFactoryDef === null) {
                /** @type {?} */
                const metadata = getPipeMetadata(type, meta);
                /** @type {?} */
                const compiler = getCompilerFacade();
                ngFactoryDef = compiler.compileFactory(angularCoreEnv, `ng:///${metadata.name}/ɵfac.js`, Object.assign(Object.assign({}, metadata), { injectFn: 'directiveInject', target: compiler.R3FactoryTarget.Pipe }));
            }
            return ngFactoryDef;
        }),
        // Make the property configurable in dev mode to allow overriding in tests
        configurable: !!ngDevMode,
    });
    Object.defineProperty(type, NG_PIPE_DEF, {
        get: (/**
         * @return {?}
         */
        () => {
            if (ngPipeDef === null) {
                /** @type {?} */
                const metadata = getPipeMetadata(type, meta);
                ngPipeDef = getCompilerFacade().compilePipe(angularCoreEnv, `ng:///${metadata.name}/ɵpipe.js`, metadata);
            }
            return ngPipeDef;
        }),
        // Make the property configurable in dev mode to allow overriding in tests
        configurable: !!ngDevMode,
    });
}
/**
 * @param {?} type
 * @param {?} meta
 * @return {?}
 */
function getPipeMetadata(type, meta) {
    return {
        type: type,
        typeArgumentCount: 0,
        name: type.name,
        deps: reflectDependencies(type),
        pipeName: meta.name,
        pure: meta.pure !== undefined ? meta.pure : true
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaml0L3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGlCQUFpQixFQUF1QixNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBR3RELE9BQU8sRUFBQyxjQUFjLEVBQUUsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRXRELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUU3QyxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQWUsRUFBRSxJQUFVOztRQUNqRCxTQUFTLEdBQVEsSUFBSTs7UUFDckIsWUFBWSxHQUFRLElBQUk7SUFFNUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1FBQzFDLEdBQUc7OztRQUFFLEdBQUcsRUFBRTtZQUNSLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTs7c0JBQ25CLFFBQVEsR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzs7c0JBQ3RDLFFBQVEsR0FBRyxpQkFBaUIsRUFBRTtnQkFDcEMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ2xDLGNBQWMsRUFBRSxTQUFTLFFBQVEsQ0FBQyxJQUFJLFVBQVUsa0NBQzVDLFFBQVEsS0FBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFFLENBQUM7YUFDeEY7WUFDRCxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDLENBQUE7O1FBRUQsWUFBWSxFQUFFLENBQUMsQ0FBQyxTQUFTO0tBQzFCLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRTtRQUN2QyxHQUFHOzs7UUFBRSxHQUFHLEVBQUU7WUFDUixJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7O3NCQUNoQixRQUFRLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQzVDLFNBQVMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDLFdBQVcsQ0FDdkMsY0FBYyxFQUFFLFNBQVMsUUFBUSxDQUFDLElBQUksV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxDQUFBOztRQUVELFlBQVksRUFBRSxDQUFDLENBQUMsU0FBUztLQUMxQixDQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7QUFFRCxTQUFTLGVBQWUsQ0FBQyxJQUFlLEVBQUUsSUFBVTtJQUNsRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLElBQUk7UUFDVixpQkFBaUIsRUFBRSxDQUFDO1FBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7UUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtLQUNqRCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnZXRDb21waWxlckZhY2FkZSwgUjNQaXBlTWV0YWRhdGFGYWNhZGV9IGZyb20gJy4uLy4uL2NvbXBpbGVyL2NvbXBpbGVyX2ZhY2FkZSc7XG5pbXBvcnQge3JlZmxlY3REZXBlbmRlbmNpZXN9IGZyb20gJy4uLy4uL2RpL2ppdC91dGlsJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHtQaXBlfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9kaXJlY3RpdmVzJztcbmltcG9ydCB7TkdfRkFDVE9SWV9ERUYsIE5HX1BJUEVfREVGfSBmcm9tICcuLi9maWVsZHMnO1xuXG5pbXBvcnQge2FuZ3VsYXJDb3JlRW52fSBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVQaXBlKHR5cGU6IFR5cGU8YW55PiwgbWV0YTogUGlwZSk6IHZvaWQge1xuICBsZXQgbmdQaXBlRGVmOiBhbnkgPSBudWxsO1xuICBsZXQgbmdGYWN0b3J5RGVmOiBhbnkgPSBudWxsO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBOR19GQUNUT1JZX0RFRiwge1xuICAgIGdldDogKCkgPT4ge1xuICAgICAgaWYgKG5nRmFjdG9yeURlZiA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGdldFBpcGVNZXRhZGF0YSh0eXBlLCBtZXRhKTtcbiAgICAgICAgY29uc3QgY29tcGlsZXIgPSBnZXRDb21waWxlckZhY2FkZSgpO1xuICAgICAgICBuZ0ZhY3RvcnlEZWYgPSBjb21waWxlci5jb21waWxlRmFjdG9yeShcbiAgICAgICAgICAgIGFuZ3VsYXJDb3JlRW52LCBgbmc6Ly8vJHttZXRhZGF0YS5uYW1lfS/JtWZhYy5qc2AsXG4gICAgICAgICAgICB7Li4ubWV0YWRhdGEsIGluamVjdEZuOiAnZGlyZWN0aXZlSW5qZWN0JywgdGFyZ2V0OiBjb21waWxlci5SM0ZhY3RvcnlUYXJnZXQuUGlwZX0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5nRmFjdG9yeURlZjtcbiAgICB9LFxuICAgIC8vIE1ha2UgdGhlIHByb3BlcnR5IGNvbmZpZ3VyYWJsZSBpbiBkZXYgbW9kZSB0byBhbGxvdyBvdmVycmlkaW5nIGluIHRlc3RzXG4gICAgY29uZmlndXJhYmxlOiAhIW5nRGV2TW9kZSxcbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIE5HX1BJUEVfREVGLCB7XG4gICAgZ2V0OiAoKSA9PiB7XG4gICAgICBpZiAobmdQaXBlRGVmID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gZ2V0UGlwZU1ldGFkYXRhKHR5cGUsIG1ldGEpO1xuICAgICAgICBuZ1BpcGVEZWYgPSBnZXRDb21waWxlckZhY2FkZSgpLmNvbXBpbGVQaXBlKFxuICAgICAgICAgICAgYW5ndWxhckNvcmVFbnYsIGBuZzovLy8ke21ldGFkYXRhLm5hbWV9L8m1cGlwZS5qc2AsIG1ldGFkYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZ1BpcGVEZWY7XG4gICAgfSxcbiAgICAvLyBNYWtlIHRoZSBwcm9wZXJ0eSBjb25maWd1cmFibGUgaW4gZGV2IG1vZGUgdG8gYWxsb3cgb3ZlcnJpZGluZyBpbiB0ZXN0c1xuICAgIGNvbmZpZ3VyYWJsZTogISFuZ0Rldk1vZGUsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQaXBlTWV0YWRhdGEodHlwZTogVHlwZTxhbnk+LCBtZXRhOiBQaXBlKTogUjNQaXBlTWV0YWRhdGFGYWNhZGUge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdHlwZUFyZ3VtZW50Q291bnQ6IDAsXG4gICAgbmFtZTogdHlwZS5uYW1lLFxuICAgIGRlcHM6IHJlZmxlY3REZXBlbmRlbmNpZXModHlwZSksXG4gICAgcGlwZU5hbWU6IG1ldGEubmFtZSxcbiAgICBwdXJlOiBtZXRhLnB1cmUgIT09IHVuZGVmaW5lZCA/IG1ldGEucHVyZSA6IHRydWVcbiAgfTtcbn1cbiJdfQ==