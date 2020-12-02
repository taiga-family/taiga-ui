/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/linker/compiler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '../di/injectable';
import { InjectionToken } from '../di/injection_token';
import { ComponentFactory as ComponentFactoryR3 } from '../render3/component_ref';
import { getComponentDef, getNgModuleDef } from '../render3/definition';
import { NgModuleFactory as NgModuleFactoryR3 } from '../render3/ng_module_ref';
import { maybeUnwrapFn } from '../render3/util/misc_utils';
/**
 * Combination of NgModuleFactory and ComponentFactorys.
 *
 * \@publicApi
 * @template T
 */
export class ModuleWithComponentFactories {
    /**
     * @param {?} ngModuleFactory
     * @param {?} componentFactories
     */
    constructor(ngModuleFactory, componentFactories) {
        this.ngModuleFactory = ngModuleFactory;
        this.componentFactories = componentFactories;
    }
}
if (false) {
    /** @type {?} */
    ModuleWithComponentFactories.prototype.ngModuleFactory;
    /** @type {?} */
    ModuleWithComponentFactories.prototype.componentFactories;
}
/**
 * @return {?}
 */
function _throwError() {
    throw new Error(`Runtime compiler is not loaded`);
}
/** @type {?} */
const Compiler_compileModuleSync__PRE_R3__ = (/** @type {?} */ (_throwError));
/** @type {?} */
export const Compiler_compileModuleSync__POST_R3__ = (/**
 * @template T
 * @param {?} moduleType
 * @return {?}
 */
function (moduleType) {
    return new NgModuleFactoryR3(moduleType);
});
/** @type {?} */
const Compiler_compileModuleSync = Compiler_compileModuleSync__PRE_R3__;
/** @type {?} */
const Compiler_compileModuleAsync__PRE_R3__ = (/** @type {?} */ (_throwError));
/** @type {?} */
export const Compiler_compileModuleAsync__POST_R3__ = (/**
 * @template T
 * @param {?} moduleType
 * @return {?}
 */
function (moduleType) {
    return Promise.resolve(Compiler_compileModuleSync__POST_R3__(moduleType));
});
/** @type {?} */
const Compiler_compileModuleAsync = Compiler_compileModuleAsync__PRE_R3__;
/** @type {?} */
const Compiler_compileModuleAndAllComponentsSync__PRE_R3__ = (/** @type {?} */ (_throwError));
/** @type {?} */
export const Compiler_compileModuleAndAllComponentsSync__POST_R3__ = (/**
 * @template T
 * @param {?} moduleType
 * @return {?}
 */
function (moduleType) {
    /** @type {?} */
    const ngModuleFactory = Compiler_compileModuleSync__POST_R3__(moduleType);
    /** @type {?} */
    const moduleDef = (/** @type {?} */ (getNgModuleDef(moduleType)));
    /** @type {?} */
    const componentFactories = maybeUnwrapFn(moduleDef.declarations)
        .reduce((/**
     * @param {?} factories
     * @param {?} declaration
     * @return {?}
     */
    (factories, declaration) => {
        /** @type {?} */
        const componentDef = getComponentDef(declaration);
        componentDef && factories.push(new ComponentFactoryR3(componentDef));
        return factories;
    }), (/** @type {?} */ ([])));
    return new ModuleWithComponentFactories(ngModuleFactory, componentFactories);
});
/** @type {?} */
const Compiler_compileModuleAndAllComponentsSync = Compiler_compileModuleAndAllComponentsSync__PRE_R3__;
/** @type {?} */
const Compiler_compileModuleAndAllComponentsAsync__PRE_R3__ = (/** @type {?} */ (_throwError));
/** @type {?} */
export const Compiler_compileModuleAndAllComponentsAsync__POST_R3__ = (/**
 * @template T
 * @param {?} moduleType
 * @return {?}
 */
function (moduleType) {
    return Promise.resolve(Compiler_compileModuleAndAllComponentsSync__POST_R3__(moduleType));
});
/** @type {?} */
const Compiler_compileModuleAndAllComponentsAsync = Compiler_compileModuleAndAllComponentsAsync__PRE_R3__;
/**
 * Low-level service for running the angular compiler during runtime
 * to create {\@link ComponentFactory}s, which
 * can later be used to create and render a Component instance.
 *
 * Each `\@NgModule` provides an own `Compiler` to its injector,
 * that will use the directives/pipes of the ng module for compilation
 * of components.
 *
 * \@publicApi
 */
export class Compiler {
    constructor() {
        /**
         * Compiles the given NgModule and all of its components. All templates of the components listed
         * in `entryComponents` have to be inlined.
         */
        this.compileModuleSync = Compiler_compileModuleSync;
        /**
         * Compiles the given NgModule and all of its components
         */
        this.compileModuleAsync = Compiler_compileModuleAsync;
        /**
         * Same as {\@link #compileModuleSync} but also creates ComponentFactories for all components.
         */
        this.compileModuleAndAllComponentsSync = Compiler_compileModuleAndAllComponentsSync;
        /**
         * Same as {\@link #compileModuleAsync} but also creates ComponentFactories for all components.
         */
        this.compileModuleAndAllComponentsAsync = Compiler_compileModuleAndAllComponentsAsync;
    }
    /**
     * Clears all caches.
     * @return {?}
     */
    clearCache() { }
    /**
     * Clears the cache for the given component/ngModule.
     * @param {?} type
     * @return {?}
     */
    clearCacheFor(type) { }
    /**
     * Returns the id for a given NgModule, if one is defined and known to the compiler.
     * @param {?} moduleType
     * @return {?}
     */
    getModuleId(moduleType) {
        return undefined;
    }
}
Compiler.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Compiles the given NgModule and all of its components. All templates of the components listed
     * in `entryComponents` have to be inlined.
     * @type {?}
     */
    Compiler.prototype.compileModuleSync;
    /**
     * Compiles the given NgModule and all of its components
     * @type {?}
     */
    Compiler.prototype.compileModuleAsync;
    /**
     * Same as {\@link #compileModuleSync} but also creates ComponentFactories for all components.
     * @type {?}
     */
    Compiler.prototype.compileModuleAndAllComponentsSync;
    /**
     * Same as {\@link #compileModuleAsync} but also creates ComponentFactories for all components.
     * @type {?}
     */
    Compiler.prototype.compileModuleAndAllComponentsAsync;
}
/**
 * Token to provide CompilerOptions in the platform injector.
 *
 * \@publicApi
 * @type {?}
 */
export const COMPILER_OPTIONS = new InjectionToken('compilerOptions');
/**
 * A factory for creating a Compiler
 *
 * \@publicApi
 * @abstract
 */
export class CompilerFactory {
}
if (false) {
    /**
     * @abstract
     * @param {?=} options
     * @return {?}
     */
    CompilerFactory.prototype.createCompiler = function (options) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saW5rZXIvY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUtyRCxPQUFPLEVBQUMsZ0JBQWdCLElBQUksa0JBQWtCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRixPQUFPLEVBQUMsZUFBZSxFQUFFLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLElBQUksaUJBQWlCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFZekQsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUFDdkMsWUFDVyxlQUFtQyxFQUNuQyxrQkFBMkM7UUFEM0Msb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ25DLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7SUFBRyxDQUFDO0NBQzNEOzs7SUFGSyx1REFBMEM7O0lBQzFDLDBEQUFrRDs7Ozs7QUFJeEQsU0FBUyxXQUFXO0lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNwRCxDQUFDOztNQUVLLG9DQUFvQyxHQUN0QyxtQkFBQSxXQUFXLEVBQU87O0FBQ3RCLE1BQU0sT0FBTyxxQ0FBcUM7Ozs7O0FBQ3pCLFVBQVksVUFBbUI7SUFDdEQsT0FBTyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQTs7TUFDSywwQkFBMEIsR0FBRyxvQ0FBb0M7O01BRWpFLHFDQUFxQyxHQUNULG1CQUFBLFdBQVcsRUFBTzs7QUFDcEQsTUFBTSxPQUFPLHNDQUFzQzs7Ozs7QUFDakIsVUFBWSxVQUFtQjtJQUMvRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUM1RSxDQUFDLENBQUE7O01BQ0ssMkJBQTJCLEdBQUcscUNBQXFDOztNQUVuRSxvREFBb0QsR0FDcEIsbUJBQUEsV0FBVyxFQUFPOztBQUN4RCxNQUFNLE9BQU8scURBQXFEOzs7OztBQUM1QixVQUFZLFVBQW1COztVQUU3RCxlQUFlLEdBQUcscUNBQXFDLENBQUMsVUFBVSxDQUFDOztVQUNuRSxTQUFTLEdBQUcsbUJBQUEsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFDOztVQUN2QyxrQkFBa0IsR0FDcEIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7U0FDaEMsTUFBTTs7Ozs7SUFBQyxDQUFDLFNBQWtDLEVBQUUsV0FBc0IsRUFBRSxFQUFFOztjQUMvRCxZQUFZLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQztRQUNqRCxZQUFZLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDckUsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQyxHQUFFLG1CQUFBLEVBQUUsRUFBMkIsQ0FBQztJQUN6QyxPQUFPLElBQUksNEJBQTRCLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDL0UsQ0FBQyxDQUFBOztNQUNLLDBDQUEwQyxHQUM1QyxvREFBb0Q7O01BRWxELHFEQUFxRCxHQUNaLG1CQUFBLFdBQVcsRUFBTzs7QUFDakUsTUFBTSxPQUFPLHNEQUFzRDs7Ozs7QUFDcEIsVUFBWSxVQUFtQjtJQUU1RSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMscURBQXFELENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUM1RixDQUFDLENBQUE7O01BQ0ssMkNBQTJDLEdBQzdDLHFEQUFxRDs7Ozs7Ozs7Ozs7O0FBY3pELE1BQU0sT0FBTyxRQUFRO0lBRHJCOzs7OztRQU1FLHNCQUFpQixHQUFtRCwwQkFBMEIsQ0FBQzs7OztRQUsvRix1QkFBa0IsR0FDNEMsMkJBQTJCLENBQUM7Ozs7UUFLMUYsc0NBQWlDLEdBQzdCLDBDQUEwQyxDQUFDOzs7O1FBSy9DLHVDQUFrQyxHQUNhLDJDQUEyQyxDQUFDO0lBa0I3RixDQUFDOzs7OztJQWJDLFVBQVUsS0FBVSxDQUFDOzs7Ozs7SUFLckIsYUFBYSxDQUFDLElBQWUsSUFBRyxDQUFDOzs7Ozs7SUFLakMsV0FBVyxDQUFDLFVBQXFCO1FBQy9CLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7OztZQXpDRixVQUFVOzs7Ozs7OztJQU1ULHFDQUErRjs7Ozs7SUFLL0Ysc0NBQzBGOzs7OztJQUsxRixxREFDK0M7Ozs7O0lBSy9DLHNEQUMyRjs7Ozs7Ozs7QUFzQzdGLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBb0IsaUJBQWlCLENBQUM7Ozs7Ozs7QUFPeEYsTUFBTSxPQUFnQixlQUFlO0NBRXBDOzs7Ozs7O0lBREMsa0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJy4uL2RpL2luamVjdGFibGUnO1xuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnLi4vZGkvaW5qZWN0aW9uX3Rva2VuJztcbmltcG9ydCB7U3RhdGljUHJvdmlkZXJ9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9wcm92aWRlcic7XG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5fSBmcm9tICcuLi9pMThuL3Rva2Vucyc7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7Vmlld0VuY2Fwc3VsYXRpb259IGZyb20gJy4uL21ldGFkYXRhJztcbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeSBhcyBDb21wb25lbnRGYWN0b3J5UjN9IGZyb20gJy4uL3JlbmRlcjMvY29tcG9uZW50X3JlZic7XG5pbXBvcnQge2dldENvbXBvbmVudERlZiwgZ2V0TmdNb2R1bGVEZWZ9IGZyb20gJy4uL3JlbmRlcjMvZGVmaW5pdGlvbic7XG5pbXBvcnQge05nTW9kdWxlRmFjdG9yeSBhcyBOZ01vZHVsZUZhY3RvcnlSM30gZnJvbSAnLi4vcmVuZGVyMy9uZ19tb2R1bGVfcmVmJztcbmltcG9ydCB7bWF5YmVVbndyYXBGbn0gZnJvbSAnLi4vcmVuZGVyMy91dGlsL21pc2NfdXRpbHMnO1xuXG5pbXBvcnQge0NvbXBvbmVudEZhY3Rvcnl9IGZyb20gJy4vY29tcG9uZW50X2ZhY3RvcnknO1xuaW1wb3J0IHtOZ01vZHVsZUZhY3Rvcnl9IGZyb20gJy4vbmdfbW9kdWxlX2ZhY3RvcnknO1xuXG5cblxuLyoqXG4gKiBDb21iaW5hdGlvbiBvZiBOZ01vZHVsZUZhY3RvcnkgYW5kIENvbXBvbmVudEZhY3RvcnlzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXM8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuZ01vZHVsZUZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxUPixcbiAgICAgIHB1YmxpYyBjb21wb25lbnRGYWN0b3JpZXM6IENvbXBvbmVudEZhY3Rvcnk8YW55PltdKSB7fVxufVxuXG5cbmZ1bmN0aW9uIF90aHJvd0Vycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoYFJ1bnRpbWUgY29tcGlsZXIgaXMgbm90IGxvYWRlZGApO1xufVxuXG5jb25zdCBDb21waWxlcl9jb21waWxlTW9kdWxlU3luY19fUFJFX1IzX186IDxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KSA9PiBOZ01vZHVsZUZhY3Rvcnk8VD4gPVxuICAgIF90aHJvd0Vycm9yIGFzIGFueTtcbmV4cG9ydCBjb25zdCBDb21waWxlcl9jb21waWxlTW9kdWxlU3luY19fUE9TVF9SM19fOiA8VD4obW9kdWxlVHlwZTogVHlwZTxUPikgPT5cbiAgICBOZ01vZHVsZUZhY3Rvcnk8VD4gPSBmdW5jdGlvbjxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTmdNb2R1bGVGYWN0b3J5PFQ+IHtcbiAgcmV0dXJuIG5ldyBOZ01vZHVsZUZhY3RvcnlSMyhtb2R1bGVUeXBlKTtcbn07XG5jb25zdCBDb21waWxlcl9jb21waWxlTW9kdWxlU3luYyA9IENvbXBpbGVyX2NvbXBpbGVNb2R1bGVTeW5jX19QUkVfUjNfXztcblxuY29uc3QgQ29tcGlsZXJfY29tcGlsZU1vZHVsZUFzeW5jX19QUkVfUjNfXzogPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pID0+XG4gICAgUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8VD4+ID0gX3Rocm93RXJyb3IgYXMgYW55O1xuZXhwb3J0IGNvbnN0IENvbXBpbGVyX2NvbXBpbGVNb2R1bGVBc3luY19fUE9TVF9SM19fOiA8VD4obW9kdWxlVHlwZTogVHlwZTxUPikgPT5cbiAgICBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxUPj4gPSBmdW5jdGlvbjxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8VD4+IHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShDb21waWxlcl9jb21waWxlTW9kdWxlU3luY19fUE9TVF9SM19fKG1vZHVsZVR5cGUpKTtcbn07XG5jb25zdCBDb21waWxlcl9jb21waWxlTW9kdWxlQXN5bmMgPSBDb21waWxlcl9jb21waWxlTW9kdWxlQXN5bmNfX1BSRV9SM19fO1xuXG5jb25zdCBDb21waWxlcl9jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmNfX1BSRV9SM19fOiA8VD4obW9kdWxlVHlwZTogVHlwZTxUPikgPT5cbiAgICBNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+ID0gX3Rocm93RXJyb3IgYXMgYW55O1xuZXhwb3J0IGNvbnN0IENvbXBpbGVyX2NvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzU3luY19fUE9TVF9SM19fOiA8VD4obW9kdWxlVHlwZTogVHlwZTxUPikgPT5cbiAgICBNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+ID0gZnVuY3Rpb248VD4obW9kdWxlVHlwZTogVHlwZTxUPik6XG4gICAgICAgIE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXM8VD4ge1xuICBjb25zdCBuZ01vZHVsZUZhY3RvcnkgPSBDb21waWxlcl9jb21waWxlTW9kdWxlU3luY19fUE9TVF9SM19fKG1vZHVsZVR5cGUpO1xuICBjb25zdCBtb2R1bGVEZWYgPSBnZXROZ01vZHVsZURlZihtb2R1bGVUeXBlKSE7XG4gIGNvbnN0IGNvbXBvbmVudEZhY3RvcmllcyA9XG4gICAgICBtYXliZVVud3JhcEZuKG1vZHVsZURlZi5kZWNsYXJhdGlvbnMpXG4gICAgICAgICAgLnJlZHVjZSgoZmFjdG9yaWVzOiBDb21wb25lbnRGYWN0b3J5PGFueT5bXSwgZGVjbGFyYXRpb246IFR5cGU8YW55PikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50RGVmID0gZ2V0Q29tcG9uZW50RGVmKGRlY2xhcmF0aW9uKTtcbiAgICAgICAgICAgIGNvbXBvbmVudERlZiAmJiBmYWN0b3JpZXMucHVzaChuZXcgQ29tcG9uZW50RmFjdG9yeVIzKGNvbXBvbmVudERlZikpO1xuICAgICAgICAgICAgcmV0dXJuIGZhY3RvcmllcztcbiAgICAgICAgICB9LCBbXSBhcyBDb21wb25lbnRGYWN0b3J5PGFueT5bXSk7XG4gIHJldHVybiBuZXcgTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllcyhuZ01vZHVsZUZhY3RvcnksIGNvbXBvbmVudEZhY3Rvcmllcyk7XG59O1xuY29uc3QgQ29tcGlsZXJfY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jID1cbiAgICBDb21waWxlcl9jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmNfX1BSRV9SM19fO1xuXG5jb25zdCBDb21waWxlcl9jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jX19QUkVfUjNfXzogPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pID0+XG4gICAgUHJvbWlzZTxNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+PiA9IF90aHJvd0Vycm9yIGFzIGFueTtcbmV4cG9ydCBjb25zdCBDb21waWxlcl9jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jX19QT1NUX1IzX186IDxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KSA9PlxuICAgIFByb21pc2U8TW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPj4gPSBmdW5jdGlvbjxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTpcbiAgICAgICAgUHJvbWlzZTxNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+PiB7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoQ29tcGlsZXJfY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jX19QT1NUX1IzX18obW9kdWxlVHlwZSkpO1xufTtcbmNvbnN0IENvbXBpbGVyX2NvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMgPVxuICAgIENvbXBpbGVyX2NvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmNfX1BSRV9SM19fO1xuXG4vKipcbiAqIExvdy1sZXZlbCBzZXJ2aWNlIGZvciBydW5uaW5nIHRoZSBhbmd1bGFyIGNvbXBpbGVyIGR1cmluZyBydW50aW1lXG4gKiB0byBjcmVhdGUge0BsaW5rIENvbXBvbmVudEZhY3Rvcnl9cywgd2hpY2hcbiAqIGNhbiBsYXRlciBiZSB1c2VkIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIGEgQ29tcG9uZW50IGluc3RhbmNlLlxuICpcbiAqIEVhY2ggYEBOZ01vZHVsZWAgcHJvdmlkZXMgYW4gb3duIGBDb21waWxlcmAgdG8gaXRzIGluamVjdG9yLFxuICogdGhhdCB3aWxsIHVzZSB0aGUgZGlyZWN0aXZlcy9waXBlcyBvZiB0aGUgbmcgbW9kdWxlIGZvciBjb21waWxhdGlvblxuICogb2YgY29tcG9uZW50cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21waWxlciB7XG4gIC8qKlxuICAgKiBDb21waWxlcyB0aGUgZ2l2ZW4gTmdNb2R1bGUgYW5kIGFsbCBvZiBpdHMgY29tcG9uZW50cy4gQWxsIHRlbXBsYXRlcyBvZiB0aGUgY29tcG9uZW50cyBsaXN0ZWRcbiAgICogaW4gYGVudHJ5Q29tcG9uZW50c2AgaGF2ZSB0byBiZSBpbmxpbmVkLlxuICAgKi9cbiAgY29tcGlsZU1vZHVsZVN5bmM6IDxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KSA9PiBOZ01vZHVsZUZhY3Rvcnk8VD4gPSBDb21waWxlcl9jb21waWxlTW9kdWxlU3luYztcblxuICAvKipcbiAgICogQ29tcGlsZXMgdGhlIGdpdmVuIE5nTW9kdWxlIGFuZCBhbGwgb2YgaXRzIGNvbXBvbmVudHNcbiAgICovXG4gIGNvbXBpbGVNb2R1bGVBc3luYzpcbiAgICAgIDxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KSA9PiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxUPj4gPSBDb21waWxlcl9jb21waWxlTW9kdWxlQXN5bmM7XG5cbiAgLyoqXG4gICAqIFNhbWUgYXMge0BsaW5rICNjb21waWxlTW9kdWxlU3luY30gYnV0IGFsc28gY3JlYXRlcyBDb21wb25lbnRGYWN0b3JpZXMgZm9yIGFsbCBjb21wb25lbnRzLlxuICAgKi9cbiAgY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jOiA8VD4obW9kdWxlVHlwZTogVHlwZTxUPikgPT4gTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPiA9XG4gICAgICBDb21waWxlcl9jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmM7XG5cbiAgLyoqXG4gICAqIFNhbWUgYXMge0BsaW5rICNjb21waWxlTW9kdWxlQXN5bmN9IGJ1dCBhbHNvIGNyZWF0ZXMgQ29tcG9uZW50RmFjdG9yaWVzIGZvciBhbGwgY29tcG9uZW50cy5cbiAgICovXG4gIGNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmM6IDxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KSA9PlxuICAgICAgUHJvbWlzZTxNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+PiA9IENvbXBpbGVyX2NvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmM7XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVzLlxuICAgKi9cbiAgY2xlYXJDYWNoZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgY2FjaGUgZm9yIHRoZSBnaXZlbiBjb21wb25lbnQvbmdNb2R1bGUuXG4gICAqL1xuICBjbGVhckNhY2hlRm9yKHR5cGU6IFR5cGU8YW55Pikge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgZ2l2ZW4gTmdNb2R1bGUsIGlmIG9uZSBpcyBkZWZpbmVkIGFuZCBrbm93biB0byB0aGUgY29tcGlsZXIuXG4gICAqL1xuICBnZXRNb2R1bGVJZChtb2R1bGVUeXBlOiBUeXBlPGFueT4pOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBjb21waWxlclxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgQ29tcGlsZXJPcHRpb25zID0ge1xuICB1c2VKaXQ/OiBib29sZWFuLFxuICBkZWZhdWx0RW5jYXBzdWxhdGlvbj86IFZpZXdFbmNhcHN1bGF0aW9uLFxuICBwcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdLFxuICBtaXNzaW5nVHJhbnNsYXRpb24/OiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlcz86IGJvb2xlYW4sXG59O1xuXG4vKipcbiAqIFRva2VuIHRvIHByb3ZpZGUgQ29tcGlsZXJPcHRpb25zIGluIHRoZSBwbGF0Zm9ybSBpbmplY3Rvci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPENvbXBpbGVyT3B0aW9uc1tdPignY29tcGlsZXJPcHRpb25zJyk7XG5cbi8qKlxuICogQSBmYWN0b3J5IGZvciBjcmVhdGluZyBhIENvbXBpbGVyXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcGlsZXJGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlQ29tcGlsZXIob3B0aW9ucz86IENvbXBpbGVyT3B0aW9uc1tdKTogQ29tcGlsZXI7XG59XG4iXX0=