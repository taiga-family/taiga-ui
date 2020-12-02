/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/entrypoint.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injector } from '../di/injector';
import { NgModuleFactory } from '../linker/ng_module_factory';
import { initServicesIfNeeded } from './services';
import { Services } from './types';
import { resolveDefinition } from './util';
/**
 * @param {?} override
 * @return {?}
 */
export function overrideProvider(override) {
    initServicesIfNeeded();
    return Services.overrideProvider(override);
}
/**
 * @param {?} comp
 * @param {?} componentFactory
 * @return {?}
 */
export function overrideComponentView(comp, componentFactory) {
    initServicesIfNeeded();
    return Services.overrideComponentView(comp, componentFactory);
}
/**
 * @return {?}
 */
export function clearOverrides() {
    initServicesIfNeeded();
    return Services.clearOverrides();
}
// Attention: this function is called as top level function.
// Putting any logic in here will destroy closure tree shaking!
/**
 * @param {?} ngModuleType
 * @param {?} bootstrapComponents
 * @param {?} defFactory
 * @return {?}
 */
export function createNgModuleFactory(ngModuleType, bootstrapComponents, defFactory) {
    return new NgModuleFactory_(ngModuleType, bootstrapComponents, defFactory);
}
/**
 * @param {?} def
 * @return {?}
 */
function cloneNgModuleDefinition(def) {
    /** @type {?} */
    const providers = Array.from(def.providers);
    /** @type {?} */
    const modules = Array.from(def.modules);
    /** @type {?} */
    const providersByKey = {};
    for (const key in def.providersByKey) {
        providersByKey[key] = def.providersByKey[key];
    }
    return {
        factory: def.factory,
        scope: def.scope,
        providers,
        modules,
        providersByKey,
    };
}
class NgModuleFactory_ extends NgModuleFactory {
    /**
     * @param {?} moduleType
     * @param {?} _bootstrapComponents
     * @param {?} _ngModuleDefFactory
     */
    constructor(moduleType, _bootstrapComponents, _ngModuleDefFactory) {
        // Attention: this ctor is called as top level function.
        // Putting any logic in here will destroy closure tree shaking!
        super();
        this.moduleType = moduleType;
        this._bootstrapComponents = _bootstrapComponents;
        this._ngModuleDefFactory = _ngModuleDefFactory;
    }
    /**
     * @param {?} parentInjector
     * @return {?}
     */
    create(parentInjector) {
        initServicesIfNeeded();
        // Clone the NgModuleDefinition so that any tree shakeable provider definition
        // added to this instance of the NgModuleRef doesn't affect the cached copy.
        // See https://github.com/angular/angular/issues/25018.
        /** @type {?} */
        const def = cloneNgModuleDefinition(resolveDefinition(this._ngModuleDefFactory));
        return Services.createNgModuleRef(this.moduleType, parentInjector || Injector.NULL, this._bootstrapComponents, def);
    }
}
if (false) {
    /** @type {?} */
    NgModuleFactory_.prototype.moduleType;
    /**
     * @type {?}
     * @private
     */
    NgModuleFactory_.prototype._bootstrapComponents;
    /**
     * @type {?}
     * @private
     */
    NgModuleFactory_.prototype._ngModuleDefFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlwb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvZW50cnlwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFDLGVBQWUsRUFBYyxNQUFNLDZCQUE2QixDQUFDO0FBRXpFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNoRCxPQUFPLEVBQXVGLFFBQVEsRUFBaUIsTUFBTSxTQUFTLENBQUM7QUFDdkksT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sUUFBUSxDQUFDOzs7OztBQUV6QyxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsUUFBMEI7SUFDekQsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsSUFBZSxFQUFFLGdCQUF1QztJQUM1RixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLE9BQU8sUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYztJQUM1QixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLE9BQU8sUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25DLENBQUM7Ozs7Ozs7OztBQUlELE1BQU0sVUFBVSxxQkFBcUIsQ0FDakMsWUFBdUIsRUFBRSxtQkFBZ0MsRUFDekQsVUFBcUM7SUFDdkMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM3RSxDQUFDOzs7OztBQUVELFNBQVMsdUJBQXVCLENBQUMsR0FBdUI7O1VBQ2hELFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7O1VBQ3JDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7O1VBQ2pDLGNBQWMsR0FBOEMsRUFBRTtJQUNwRSxLQUFLLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUU7UUFDcEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0M7SUFFRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1FBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztRQUNoQixTQUFTO1FBQ1QsT0FBTztRQUNQLGNBQWM7S0FDZixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sZ0JBQWlCLFNBQVEsZUFBb0I7Ozs7OztJQUNqRCxZQUNvQixVQUFxQixFQUFVLG9CQUFpQyxFQUN4RSxtQkFBOEM7UUFDeEQsd0RBQXdEO1FBQ3hELCtEQUErRDtRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQUpVLGVBQVUsR0FBVixVQUFVLENBQVc7UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWE7UUFDeEUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjtJQUkxRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxjQUE2QjtRQUNsQyxvQkFBb0IsRUFBRSxDQUFDOzs7OztjQUlqQixHQUFHLEdBQUcsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEYsT0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Q0FDRjs7O0lBaEJLLHNDQUFxQzs7Ozs7SUFBRSxnREFBeUM7Ozs7O0lBQ2hGLCtDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi4vZGkvaW5qZWN0b3InO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge0NvbXBvbmVudEZhY3Rvcnl9IGZyb20gJy4uL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeSc7XG5pbXBvcnQge05nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVSZWZ9IGZyb20gJy4uL2xpbmtlci9uZ19tb2R1bGVfZmFjdG9yeSc7XG5cbmltcG9ydCB7aW5pdFNlcnZpY2VzSWZOZWVkZWR9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHtOZ01vZHVsZURlZmluaXRpb24sIE5nTW9kdWxlRGVmaW5pdGlvbkZhY3RvcnksIE5nTW9kdWxlUHJvdmlkZXJEZWYsIFByb3ZpZGVyT3ZlcnJpZGUsIFNlcnZpY2VzLCBWaWV3RGVmaW5pdGlvbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3Jlc29sdmVEZWZpbml0aW9ufSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcnJpZGVQcm92aWRlcihvdmVycmlkZTogUHJvdmlkZXJPdmVycmlkZSkge1xuICBpbml0U2VydmljZXNJZk5lZWRlZCgpO1xuICByZXR1cm4gU2VydmljZXMub3ZlcnJpZGVQcm92aWRlcihvdmVycmlkZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVycmlkZUNvbXBvbmVudFZpZXcoY29tcDogVHlwZTxhbnk+LCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PGFueT4pIHtcbiAgaW5pdFNlcnZpY2VzSWZOZWVkZWQoKTtcbiAgcmV0dXJuIFNlcnZpY2VzLm92ZXJyaWRlQ29tcG9uZW50Vmlldyhjb21wLCBjb21wb25lbnRGYWN0b3J5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyT3ZlcnJpZGVzKCkge1xuICBpbml0U2VydmljZXNJZk5lZWRlZCgpO1xuICByZXR1cm4gU2VydmljZXMuY2xlYXJPdmVycmlkZXMoKTtcbn1cblxuLy8gQXR0ZW50aW9uOiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhcyB0b3AgbGV2ZWwgZnVuY3Rpb24uXG4vLyBQdXR0aW5nIGFueSBsb2dpYyBpbiBoZXJlIHdpbGwgZGVzdHJveSBjbG9zdXJlIHRyZWUgc2hha2luZyFcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZ01vZHVsZUZhY3RvcnkoXG4gICAgbmdNb2R1bGVUeXBlOiBUeXBlPGFueT4sIGJvb3RzdHJhcENvbXBvbmVudHM6IFR5cGU8YW55PltdLFxuICAgIGRlZkZhY3Rvcnk6IE5nTW9kdWxlRGVmaW5pdGlvbkZhY3RvcnkpOiBOZ01vZHVsZUZhY3Rvcnk8YW55PiB7XG4gIHJldHVybiBuZXcgTmdNb2R1bGVGYWN0b3J5XyhuZ01vZHVsZVR5cGUsIGJvb3RzdHJhcENvbXBvbmVudHMsIGRlZkZhY3RvcnkpO1xufVxuXG5mdW5jdGlvbiBjbG9uZU5nTW9kdWxlRGVmaW5pdGlvbihkZWY6IE5nTW9kdWxlRGVmaW5pdGlvbik6IE5nTW9kdWxlRGVmaW5pdGlvbiB7XG4gIGNvbnN0IHByb3ZpZGVycyA9IEFycmF5LmZyb20oZGVmLnByb3ZpZGVycyk7XG4gIGNvbnN0IG1vZHVsZXMgPSBBcnJheS5mcm9tKGRlZi5tb2R1bGVzKTtcbiAgY29uc3QgcHJvdmlkZXJzQnlLZXk6IHtbdG9rZW5LZXk6IHN0cmluZ106IE5nTW9kdWxlUHJvdmlkZXJEZWZ9ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGRlZi5wcm92aWRlcnNCeUtleSkge1xuICAgIHByb3ZpZGVyc0J5S2V5W2tleV0gPSBkZWYucHJvdmlkZXJzQnlLZXlba2V5XTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmFjdG9yeTogZGVmLmZhY3RvcnksXG4gICAgc2NvcGU6IGRlZi5zY29wZSxcbiAgICBwcm92aWRlcnMsXG4gICAgbW9kdWxlcyxcbiAgICBwcm92aWRlcnNCeUtleSxcbiAgfTtcbn1cblxuY2xhc3MgTmdNb2R1bGVGYWN0b3J5XyBleHRlbmRzIE5nTW9kdWxlRmFjdG9yeTxhbnk+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgcmVhZG9ubHkgbW9kdWxlVHlwZTogVHlwZTxhbnk+LCBwcml2YXRlIF9ib290c3RyYXBDb21wb25lbnRzOiBUeXBlPGFueT5bXSxcbiAgICAgIHByaXZhdGUgX25nTW9kdWxlRGVmRmFjdG9yeTogTmdNb2R1bGVEZWZpbml0aW9uRmFjdG9yeSkge1xuICAgIC8vIEF0dGVudGlvbjogdGhpcyBjdG9yIGlzIGNhbGxlZCBhcyB0b3AgbGV2ZWwgZnVuY3Rpb24uXG4gICAgLy8gUHV0dGluZyBhbnkgbG9naWMgaW4gaGVyZSB3aWxsIGRlc3Ryb3kgY2xvc3VyZSB0cmVlIHNoYWtpbmchXG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZShwYXJlbnRJbmplY3RvcjogSW5qZWN0b3J8bnVsbCk6IE5nTW9kdWxlUmVmPGFueT4ge1xuICAgIGluaXRTZXJ2aWNlc0lmTmVlZGVkKCk7XG4gICAgLy8gQ2xvbmUgdGhlIE5nTW9kdWxlRGVmaW5pdGlvbiBzbyB0aGF0IGFueSB0cmVlIHNoYWtlYWJsZSBwcm92aWRlciBkZWZpbml0aW9uXG4gICAgLy8gYWRkZWQgdG8gdGhpcyBpbnN0YW5jZSBvZiB0aGUgTmdNb2R1bGVSZWYgZG9lc24ndCBhZmZlY3QgdGhlIGNhY2hlZCBjb3B5LlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yNTAxOC5cbiAgICBjb25zdCBkZWYgPSBjbG9uZU5nTW9kdWxlRGVmaW5pdGlvbihyZXNvbHZlRGVmaW5pdGlvbih0aGlzLl9uZ01vZHVsZURlZkZhY3RvcnkpKTtcbiAgICByZXR1cm4gU2VydmljZXMuY3JlYXRlTmdNb2R1bGVSZWYoXG4gICAgICAgIHRoaXMubW9kdWxlVHlwZSwgcGFyZW50SW5qZWN0b3IgfHwgSW5qZWN0b3IuTlVMTCwgdGhpcy5fYm9vdHN0cmFwQ29tcG9uZW50cywgZGVmKTtcbiAgfVxufVxuIl19