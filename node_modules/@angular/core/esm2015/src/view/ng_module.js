/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/ng_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { resolveForwardRef } from '../di/forward_ref';
import { Injector } from '../di/injector';
import { INJECTOR, setCurrentInjector } from '../di/injector_compatibility';
import { getInjectableDef } from '../di/interface/defs';
import { INJECTOR_SCOPE } from '../di/scope';
import { NgModuleRef } from '../linker/ng_module_factory';
import { newArray } from '../util/array_utils';
import { stringify } from '../util/stringify';
import { splitDepsDsl, tokenKey } from './util';
/** @type {?} */
const UNDEFINED_VALUE = {};
/** @type {?} */
const InjectorRefTokenKey = tokenKey(Injector);
/** @type {?} */
const INJECTORRefTokenKey = tokenKey(INJECTOR);
/** @type {?} */
const NgModuleRefTokenKey = tokenKey(NgModuleRef);
/**
 * @param {?} flags
 * @param {?} token
 * @param {?} value
 * @param {?} deps
 * @return {?}
 */
export function moduleProvideDef(flags, token, value, deps) {
    // Need to resolve forwardRefs as e.g. for `useValue` we
    // lowered the expression and then stopped evaluating it,
    // i.e. also didn't unwrap it.
    value = resolveForwardRef(value);
    /** @type {?} */
    const depDefs = splitDepsDsl(deps, stringify(token));
    return {
        // will bet set by the module definition
        index: -1,
        deps: depDefs,
        flags,
        token,
        value
    };
}
/**
 * @param {?} providers
 * @return {?}
 */
export function moduleDef(providers) {
    /** @type {?} */
    const providersByKey = {};
    /** @type {?} */
    const modules = [];
    /** @type {?} */
    let scope = null;
    for (let i = 0; i < providers.length; i++) {
        /** @type {?} */
        const provider = providers[i];
        if (provider.token === INJECTOR_SCOPE) {
            scope = provider.value;
        }
        if (provider.flags & 1073741824 /* TypeNgModule */) {
            modules.push(provider.token);
        }
        provider.index = i;
        providersByKey[tokenKey(provider.token)] = provider;
    }
    return {
        // Will be filled later...
        factory: null,
        providersByKey,
        providers,
        modules,
        scope: scope,
    };
}
/**
 * @param {?} data
 * @return {?}
 */
export function initNgModule(data) {
    /** @type {?} */
    const def = data._def;
    /** @type {?} */
    const providers = data._providers = newArray(def.providers.length);
    for (let i = 0; i < def.providers.length; i++) {
        /** @type {?} */
        const provDef = def.providers[i];
        if (!(provDef.flags & 4096 /* LazyProvider */)) {
            // Make sure the provider has not been already initialized outside this loop.
            if (providers[i] === undefined) {
                providers[i] = _createProviderInstance(data, provDef);
            }
        }
    }
}
/**
 * @param {?} data
 * @param {?} depDef
 * @param {?=} notFoundValue
 * @return {?}
 */
export function resolveNgModuleDep(data, depDef, notFoundValue = Injector.THROW_IF_NOT_FOUND) {
    /** @type {?} */
    const former = setCurrentInjector(data);
    try {
        if (depDef.flags & 8 /* Value */) {
            return depDef.token;
        }
        if (depDef.flags & 2 /* Optional */) {
            notFoundValue = null;
        }
        if (depDef.flags & 1 /* SkipSelf */) {
            return data._parent.get(depDef.token, notFoundValue);
        }
        /** @type {?} */
        const tokenKey = depDef.tokenKey;
        switch (tokenKey) {
            case InjectorRefTokenKey:
            case INJECTORRefTokenKey:
            case NgModuleRefTokenKey:
                return data;
        }
        /** @type {?} */
        const providerDef = data._def.providersByKey[tokenKey];
        /** @type {?} */
        let injectableDef;
        if (providerDef) {
            /** @type {?} */
            let providerInstance = data._providers[providerDef.index];
            if (providerInstance === undefined) {
                providerInstance = data._providers[providerDef.index] =
                    _createProviderInstance(data, providerDef);
            }
            return providerInstance === UNDEFINED_VALUE ? undefined : providerInstance;
        }
        else if ((injectableDef = getInjectableDef(depDef.token)) && targetsModule(data, injectableDef)) {
            /** @type {?} */
            const index = data._providers.length;
            data._def.providers[index] = data._def.providersByKey[depDef.tokenKey] = {
                flags: 1024 /* TypeFactoryProvider */ | 4096 /* LazyProvider */,
                value: injectableDef.factory,
                deps: [],
                index,
                token: depDef.token,
            };
            data._providers[index] = UNDEFINED_VALUE;
            return (data._providers[index] =
                _createProviderInstance(data, data._def.providersByKey[depDef.tokenKey]));
        }
        else if (depDef.flags & 4 /* Self */) {
            return notFoundValue;
        }
        return data._parent.get(depDef.token, notFoundValue);
    }
    finally {
        setCurrentInjector(former);
    }
}
/**
 * @param {?} ngModule
 * @param {?} scope
 * @return {?}
 */
function moduleTransitivelyPresent(ngModule, scope) {
    return ngModule._def.modules.indexOf(scope) > -1;
}
/**
 * @param {?} ngModule
 * @param {?} def
 * @return {?}
 */
function targetsModule(ngModule, def) {
    /** @type {?} */
    const providedIn = def.providedIn;
    return providedIn != null &&
        (providedIn === 'any' || providedIn === ngModule._def.scope ||
            moduleTransitivelyPresent(ngModule, providedIn));
}
/**
 * @param {?} ngModule
 * @param {?} providerDef
 * @return {?}
 */
function _createProviderInstance(ngModule, providerDef) {
    /** @type {?} */
    let injectable;
    switch (providerDef.flags & 201347067 /* Types */) {
        case 512 /* TypeClassProvider */:
            injectable = _createClass(ngModule, providerDef.value, providerDef.deps);
            break;
        case 1024 /* TypeFactoryProvider */:
            injectable = _callFactory(ngModule, providerDef.value, providerDef.deps);
            break;
        case 2048 /* TypeUseExistingProvider */:
            injectable = resolveNgModuleDep(ngModule, providerDef.deps[0]);
            break;
        case 256 /* TypeValueProvider */:
            injectable = providerDef.value;
            break;
    }
    // The read of `ngOnDestroy` here is slightly expensive as it's megamorphic, so it should be
    // avoided if possible. The sequence of checks here determines whether ngOnDestroy needs to be
    // checked. It might not if the `injectable` isn't an object or if NodeFlags.OnDestroy is already
    // set (ngOnDestroy was detected statically).
    if (injectable !== UNDEFINED_VALUE && injectable !== null && typeof injectable === 'object' &&
        !(providerDef.flags & 131072 /* OnDestroy */) && typeof injectable.ngOnDestroy === 'function') {
        providerDef.flags |= 131072 /* OnDestroy */;
    }
    return injectable === undefined ? UNDEFINED_VALUE : injectable;
}
/**
 * @param {?} ngModule
 * @param {?} ctor
 * @param {?} deps
 * @return {?}
 */
function _createClass(ngModule, ctor, deps) {
    /** @type {?} */
    const len = deps.length;
    switch (len) {
        case 0:
            return new ctor();
        case 1:
            return new ctor(resolveNgModuleDep(ngModule, deps[0]));
        case 2:
            return new ctor(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]));
        case 3:
            return new ctor(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]), resolveNgModuleDep(ngModule, deps[2]));
        default:
            /** @type {?} */
            const depValues = [];
            for (let i = 0; i < len; i++) {
                depValues[i] = resolveNgModuleDep(ngModule, deps[i]);
            }
            return new ctor(...depValues);
    }
}
/**
 * @param {?} ngModule
 * @param {?} factory
 * @param {?} deps
 * @return {?}
 */
function _callFactory(ngModule, factory, deps) {
    /** @type {?} */
    const len = deps.length;
    switch (len) {
        case 0:
            return factory();
        case 1:
            return factory(resolveNgModuleDep(ngModule, deps[0]));
        case 2:
            return factory(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]));
        case 3:
            return factory(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]), resolveNgModuleDep(ngModule, deps[2]));
        default:
            /** @type {?} */
            const depValues = [];
            for (let i = 0; i < len; i++) {
                depValues[i] = resolveNgModuleDep(ngModule, deps[i]);
            }
            return factory(...depValues);
    }
}
/**
 * @param {?} ngModule
 * @param {?} lifecycles
 * @return {?}
 */
export function callNgModuleLifecycle(ngModule, lifecycles) {
    /** @type {?} */
    const def = ngModule._def;
    /** @type {?} */
    const destroyed = new Set();
    for (let i = 0; i < def.providers.length; i++) {
        /** @type {?} */
        const provDef = def.providers[i];
        if (provDef.flags & 131072 /* OnDestroy */) {
            /** @type {?} */
            const instance = ngModule._providers[i];
            if (instance && instance !== UNDEFINED_VALUE) {
                /** @type {?} */
                const onDestroy = instance.ngOnDestroy;
                if (typeof onDestroy === 'function' && !destroyed.has(instance)) {
                    onDestroy.apply(instance);
                    destroyed.add(instance);
                }
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdmlldy9uZ19tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQWtCLE1BQU0sc0JBQXNCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUc1QyxPQUFPLEVBQUMsWUFBWSxFQUFFLFFBQVEsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7TUFFeEMsZUFBZSxHQUFHLEVBQUU7O01BRXBCLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7O01BQ3hDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7O01BQ3hDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7O0FBRWpELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDNUIsS0FBZ0IsRUFBRSxLQUFVLEVBQUUsS0FBVSxFQUFFLElBQTZCO0lBQ3pFLHdEQUF3RDtJQUN4RCx5REFBeUQ7SUFDekQsOEJBQThCO0lBQzlCLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7VUFDM0IsT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FB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Q0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtyZXNvbHZlRm9yd2FyZFJlZn0gZnJvbSAnLi4vZGkvZm9yd2FyZF9yZWYnO1xuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi4vZGkvaW5qZWN0b3InO1xuaW1wb3J0IHtJTkpFQ1RPUiwgc2V0Q3VycmVudEluamVjdG9yfSBmcm9tICcuLi9kaS9pbmplY3Rvcl9jb21wYXRpYmlsaXR5JztcbmltcG9ydCB7Z2V0SW5qZWN0YWJsZURlZiwgybXJtUluamVjdGFibGVEZWZ9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9kZWZzJztcbmltcG9ydCB7SU5KRUNUT1JfU0NPUEV9IGZyb20gJy4uL2RpL3Njb3BlJztcbmltcG9ydCB7TmdNb2R1bGVSZWZ9IGZyb20gJy4uL2xpbmtlci9uZ19tb2R1bGVfZmFjdG9yeSc7XG5pbXBvcnQge25ld0FycmF5fSBmcm9tICcuLi91dGlsL2FycmF5X3V0aWxzJztcbmltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICcuLi91dGlsL3N0cmluZ2lmeSc7XG5cbmltcG9ydCB7RGVwRGVmLCBEZXBGbGFncywgTmdNb2R1bGVEYXRhLCBOZ01vZHVsZURlZmluaXRpb24sIE5nTW9kdWxlUHJvdmlkZXJEZWYsIE5vZGVGbGFnc30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3NwbGl0RGVwc0RzbCwgdG9rZW5LZXl9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IFVOREVGSU5FRF9WQUxVRSA9IHt9O1xuXG5jb25zdCBJbmplY3RvclJlZlRva2VuS2V5ID0gdG9rZW5LZXkoSW5qZWN0b3IpO1xuY29uc3QgSU5KRUNUT1JSZWZUb2tlbktleSA9IHRva2VuS2V5KElOSkVDVE9SKTtcbmNvbnN0IE5nTW9kdWxlUmVmVG9rZW5LZXkgPSB0b2tlbktleShOZ01vZHVsZVJlZik7XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2R1bGVQcm92aWRlRGVmKFxuICAgIGZsYWdzOiBOb2RlRmxhZ3MsIHRva2VuOiBhbnksIHZhbHVlOiBhbnksIGRlcHM6IChbRGVwRmxhZ3MsIGFueV18YW55KVtdKTogTmdNb2R1bGVQcm92aWRlckRlZiB7XG4gIC8vIE5lZWQgdG8gcmVzb2x2ZSBmb3J3YXJkUmVmcyBhcyBlLmcuIGZvciBgdXNlVmFsdWVgIHdlXG4gIC8vIGxvd2VyZWQgdGhlIGV4cHJlc3Npb24gYW5kIHRoZW4gc3RvcHBlZCBldmFsdWF0aW5nIGl0LFxuICAvLyBpLmUuIGFsc28gZGlkbid0IHVud3JhcCBpdC5cbiAgdmFsdWUgPSByZXNvbHZlRm9yd2FyZFJlZih2YWx1ZSk7XG4gIGNvbnN0IGRlcERlZnMgPSBzcGxpdERlcHNEc2woZGVwcywgc3RyaW5naWZ5KHRva2VuKSk7XG4gIHJldHVybiB7XG4gICAgLy8gd2lsbCBiZXQgc2V0IGJ5IHRoZSBtb2R1bGUgZGVmaW5pdGlvblxuICAgIGluZGV4OiAtMSxcbiAgICBkZXBzOiBkZXBEZWZzLFxuICAgIGZsYWdzLFxuICAgIHRva2VuLFxuICAgIHZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2R1bGVEZWYocHJvdmlkZXJzOiBOZ01vZHVsZVByb3ZpZGVyRGVmW10pOiBOZ01vZHVsZURlZmluaXRpb24ge1xuICBjb25zdCBwcm92aWRlcnNCeUtleToge1trZXk6IHN0cmluZ106IE5nTW9kdWxlUHJvdmlkZXJEZWZ9ID0ge307XG4gIGNvbnN0IG1vZHVsZXMgPSBbXTtcbiAgbGV0IHNjb3BlOiAncm9vdCd8J3BsYXRmb3JtJ3xudWxsID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm92aWRlciA9IHByb3ZpZGVyc1tpXTtcbiAgICBpZiAocHJvdmlkZXIudG9rZW4gPT09IElOSkVDVE9SX1NDT1BFKSB7XG4gICAgICBzY29wZSA9IHByb3ZpZGVyLnZhbHVlO1xuICAgIH1cbiAgICBpZiAocHJvdmlkZXIuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZU5nTW9kdWxlKSB7XG4gICAgICBtb2R1bGVzLnB1c2gocHJvdmlkZXIudG9rZW4pO1xuICAgIH1cbiAgICBwcm92aWRlci5pbmRleCA9IGk7XG4gICAgcHJvdmlkZXJzQnlLZXlbdG9rZW5LZXkocHJvdmlkZXIudG9rZW4pXSA9IHByb3ZpZGVyO1xuICB9XG4gIHJldHVybiB7XG4gICAgLy8gV2lsbCBiZSBmaWxsZWQgbGF0ZXIuLi5cbiAgICBmYWN0b3J5OiBudWxsLFxuICAgIHByb3ZpZGVyc0J5S2V5LFxuICAgIHByb3ZpZGVycyxcbiAgICBtb2R1bGVzLFxuICAgIHNjb3BlOiBzY29wZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXROZ01vZHVsZShkYXRhOiBOZ01vZHVsZURhdGEpIHtcbiAgY29uc3QgZGVmID0gZGF0YS5fZGVmO1xuICBjb25zdCBwcm92aWRlcnMgPSBkYXRhLl9wcm92aWRlcnMgPSBuZXdBcnJheShkZWYucHJvdmlkZXJzLmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmLnByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb3ZEZWYgPSBkZWYucHJvdmlkZXJzW2ldO1xuICAgIGlmICghKHByb3ZEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuTGF6eVByb3ZpZGVyKSkge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBwcm92aWRlciBoYXMgbm90IGJlZW4gYWxyZWFkeSBpbml0aWFsaXplZCBvdXRzaWRlIHRoaXMgbG9vcC5cbiAgICAgIGlmIChwcm92aWRlcnNbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aWRlcnNbaV0gPSBfY3JlYXRlUHJvdmlkZXJJbnN0YW5jZShkYXRhLCBwcm92RGVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVOZ01vZHVsZURlcChcbiAgICBkYXRhOiBOZ01vZHVsZURhdGEsIGRlcERlZjogRGVwRGVmLCBub3RGb3VuZFZhbHVlOiBhbnkgPSBJbmplY3Rvci5USFJPV19JRl9OT1RfRk9VTkQpOiBhbnkge1xuICBjb25zdCBmb3JtZXIgPSBzZXRDdXJyZW50SW5qZWN0b3IoZGF0YSk7XG4gIHRyeSB7XG4gICAgaWYgKGRlcERlZi5mbGFncyAmIERlcEZsYWdzLlZhbHVlKSB7XG4gICAgICByZXR1cm4gZGVwRGVmLnRva2VuO1xuICAgIH1cbiAgICBpZiAoZGVwRGVmLmZsYWdzICYgRGVwRmxhZ3MuT3B0aW9uYWwpIHtcbiAgICAgIG5vdEZvdW5kVmFsdWUgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZGVwRGVmLmZsYWdzICYgRGVwRmxhZ3MuU2tpcFNlbGYpIHtcbiAgICAgIHJldHVybiBkYXRhLl9wYXJlbnQuZ2V0KGRlcERlZi50b2tlbiwgbm90Rm91bmRWYWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHRva2VuS2V5ID0gZGVwRGVmLnRva2VuS2V5O1xuICAgIHN3aXRjaCAodG9rZW5LZXkpIHtcbiAgICAgIGNhc2UgSW5qZWN0b3JSZWZUb2tlbktleTpcbiAgICAgIGNhc2UgSU5KRUNUT1JSZWZUb2tlbktleTpcbiAgICAgIGNhc2UgTmdNb2R1bGVSZWZUb2tlbktleTpcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNvbnN0IHByb3ZpZGVyRGVmID0gZGF0YS5fZGVmLnByb3ZpZGVyc0J5S2V5W3Rva2VuS2V5XTtcbiAgICBsZXQgaW5qZWN0YWJsZURlZjogybXJtUluamVjdGFibGVEZWY8YW55PnxudWxsO1xuICAgIGlmIChwcm92aWRlckRlZikge1xuICAgICAgbGV0IHByb3ZpZGVySW5zdGFuY2UgPSBkYXRhLl9wcm92aWRlcnNbcHJvdmlkZXJEZWYuaW5kZXhdO1xuICAgICAgaWYgKHByb3ZpZGVySW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aWRlckluc3RhbmNlID0gZGF0YS5fcHJvdmlkZXJzW3Byb3ZpZGVyRGVmLmluZGV4XSA9XG4gICAgICAgICAgICBfY3JlYXRlUHJvdmlkZXJJbnN0YW5jZShkYXRhLCBwcm92aWRlckRlZik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvdmlkZXJJbnN0YW5jZSA9PT0gVU5ERUZJTkVEX1ZBTFVFID8gdW5kZWZpbmVkIDogcHJvdmlkZXJJbnN0YW5jZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoaW5qZWN0YWJsZURlZiA9IGdldEluamVjdGFibGVEZWYoZGVwRGVmLnRva2VuKSkgJiYgdGFyZ2V0c01vZHVsZShkYXRhLCBpbmplY3RhYmxlRGVmKSkge1xuICAgICAgY29uc3QgaW5kZXggPSBkYXRhLl9wcm92aWRlcnMubGVuZ3RoO1xuICAgICAgZGF0YS5fZGVmLnByb3ZpZGVyc1tpbmRleF0gPSBkYXRhLl9kZWYucHJvdmlkZXJzQnlLZXlbZGVwRGVmLnRva2VuS2V5XSA9IHtcbiAgICAgICAgZmxhZ3M6IE5vZGVGbGFncy5UeXBlRmFjdG9yeVByb3ZpZGVyIHwgTm9kZUZsYWdzLkxhenlQcm92aWRlcixcbiAgICAgICAgdmFsdWU6IGluamVjdGFibGVEZWYuZmFjdG9yeSxcbiAgICAgICAgZGVwczogW10sXG4gICAgICAgIGluZGV4LFxuICAgICAgICB0b2tlbjogZGVwRGVmLnRva2VuLFxuICAgICAgfTtcbiAgICAgIGRhdGEuX3Byb3ZpZGVyc1tpbmRleF0gPSBVTkRFRklORURfVkFMVUU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIGRhdGEuX3Byb3ZpZGVyc1tpbmRleF0gPVxuICAgICAgICAgICAgICBfY3JlYXRlUHJvdmlkZXJJbnN0YW5jZShkYXRhLCBkYXRhLl9kZWYucHJvdmlkZXJzQnlLZXlbZGVwRGVmLnRva2VuS2V5XSkpO1xuICAgIH0gZWxzZSBpZiAoZGVwRGVmLmZsYWdzICYgRGVwRmxhZ3MuU2VsZikge1xuICAgICAgcmV0dXJuIG5vdEZvdW5kVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLl9wYXJlbnQuZ2V0KGRlcERlZi50b2tlbiwgbm90Rm91bmRWYWx1ZSk7XG4gIH0gZmluYWxseSB7XG4gICAgc2V0Q3VycmVudEluamVjdG9yKGZvcm1lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW9kdWxlVHJhbnNpdGl2ZWx5UHJlc2VudChuZ01vZHVsZTogTmdNb2R1bGVEYXRhLCBzY29wZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBuZ01vZHVsZS5fZGVmLm1vZHVsZXMuaW5kZXhPZihzY29wZSkgPiAtMTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0c01vZHVsZShuZ01vZHVsZTogTmdNb2R1bGVEYXRhLCBkZWY6IMm1ybVJbmplY3RhYmxlRGVmPGFueT4pOiBib29sZWFuIHtcbiAgY29uc3QgcHJvdmlkZWRJbiA9IGRlZi5wcm92aWRlZEluO1xuICByZXR1cm4gcHJvdmlkZWRJbiAhPSBudWxsICYmXG4gICAgICAocHJvdmlkZWRJbiA9PT0gJ2FueScgfHwgcHJvdmlkZWRJbiA9PT0gbmdNb2R1bGUuX2RlZi5zY29wZSB8fFxuICAgICAgIG1vZHVsZVRyYW5zaXRpdmVseVByZXNlbnQobmdNb2R1bGUsIHByb3ZpZGVkSW4pKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVByb3ZpZGVySW5zdGFuY2UobmdNb2R1bGU6IE5nTW9kdWxlRGF0YSwgcHJvdmlkZXJEZWY6IE5nTW9kdWxlUHJvdmlkZXJEZWYpOiBhbnkge1xuICBsZXQgaW5qZWN0YWJsZTogYW55O1xuICBzd2l0Y2ggKHByb3ZpZGVyRGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVzKSB7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZUNsYXNzUHJvdmlkZXI6XG4gICAgICBpbmplY3RhYmxlID0gX2NyZWF0ZUNsYXNzKG5nTW9kdWxlLCBwcm92aWRlckRlZi52YWx1ZSwgcHJvdmlkZXJEZWYuZGVwcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIE5vZGVGbGFncy5UeXBlRmFjdG9yeVByb3ZpZGVyOlxuICAgICAgaW5qZWN0YWJsZSA9IF9jYWxsRmFjdG9yeShuZ01vZHVsZSwgcHJvdmlkZXJEZWYudmFsdWUsIHByb3ZpZGVyRGVmLmRlcHMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVVzZUV4aXN0aW5nUHJvdmlkZXI6XG4gICAgICBpbmplY3RhYmxlID0gcmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBwcm92aWRlckRlZi5kZXBzWzBdKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVWYWx1ZVByb3ZpZGVyOlxuICAgICAgaW5qZWN0YWJsZSA9IHByb3ZpZGVyRGVmLnZhbHVlO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICAvLyBUaGUgcmVhZCBvZiBgbmdPbkRlc3Ryb3lgIGhlcmUgaXMgc2xpZ2h0bHkgZXhwZW5zaXZlIGFzIGl0J3MgbWVnYW1vcnBoaWMsIHNvIGl0IHNob3VsZCBiZVxuICAvLyBhdm9pZGVkIGlmIHBvc3NpYmxlLiBUaGUgc2VxdWVuY2Ugb2YgY2hlY2tzIGhlcmUgZGV0ZXJtaW5lcyB3aGV0aGVyIG5nT25EZXN0cm95IG5lZWRzIHRvIGJlXG4gIC8vIGNoZWNrZWQuIEl0IG1pZ2h0IG5vdCBpZiB0aGUgYGluamVjdGFibGVgIGlzbid0IGFuIG9iamVjdCBvciBpZiBOb2RlRmxhZ3MuT25EZXN0cm95IGlzIGFscmVhZHlcbiAgLy8gc2V0IChuZ09uRGVzdHJveSB3YXMgZGV0ZWN0ZWQgc3RhdGljYWxseSkuXG4gIGlmIChpbmplY3RhYmxlICE9PSBVTkRFRklORURfVkFMVUUgJiYgaW5qZWN0YWJsZSAhPT0gbnVsbCAmJiB0eXBlb2YgaW5qZWN0YWJsZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICEocHJvdmlkZXJEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuT25EZXN0cm95KSAmJiB0eXBlb2YgaW5qZWN0YWJsZS5uZ09uRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3ZpZGVyRGVmLmZsYWdzIHw9IE5vZGVGbGFncy5PbkRlc3Ryb3k7XG4gIH1cbiAgcmV0dXJuIGluamVjdGFibGUgPT09IHVuZGVmaW5lZCA/IFVOREVGSU5FRF9WQUxVRSA6IGluamVjdGFibGU7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhuZ01vZHVsZTogTmdNb2R1bGVEYXRhLCBjdG9yOiBhbnksIGRlcHM6IERlcERlZltdKTogYW55IHtcbiAgY29uc3QgbGVuID0gZGVwcy5sZW5ndGg7XG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIG5ldyBjdG9yKCk7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIG5ldyBjdG9yKHJlc29sdmVOZ01vZHVsZURlcChuZ01vZHVsZSwgZGVwc1swXSkpO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBuZXcgY3RvcihyZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMF0pLCByZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMV0pKTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gbmV3IGN0b3IoXG4gICAgICAgICAgcmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBkZXBzWzBdKSwgcmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBkZXBzWzFdKSxcbiAgICAgICAgICByZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMl0pKTtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc3QgZGVwVmFsdWVzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGRlcFZhbHVlc1tpXSA9IHJlc29sdmVOZ01vZHVsZURlcChuZ01vZHVsZSwgZGVwc1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IGN0b3IoLi4uZGVwVmFsdWVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY2FsbEZhY3RvcnkobmdNb2R1bGU6IE5nTW9kdWxlRGF0YSwgZmFjdG9yeTogYW55LCBkZXBzOiBEZXBEZWZbXSk6IGFueSB7XG4gIGNvbnN0IGxlbiA9IGRlcHMubGVuZ3RoO1xuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBmYWN0b3J5KCk7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGZhY3RvcnkocmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBkZXBzWzBdKSk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGZhY3RvcnkocmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBkZXBzWzBdKSwgcmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBkZXBzWzFdKSk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGZhY3RvcnkoXG4gICAgICAgICAgcmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBkZXBzWzBdKSwgcmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBkZXBzWzFdKSxcbiAgICAgICAgICByZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMl0pKTtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc3QgZGVwVmFsdWVzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGRlcFZhbHVlc1tpXSA9IHJlc29sdmVOZ01vZHVsZURlcChuZ01vZHVsZSwgZGVwc1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFjdG9yeSguLi5kZXBWYWx1ZXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsTmdNb2R1bGVMaWZlY3ljbGUobmdNb2R1bGU6IE5nTW9kdWxlRGF0YSwgbGlmZWN5Y2xlczogTm9kZUZsYWdzKSB7XG4gIGNvbnN0IGRlZiA9IG5nTW9kdWxlLl9kZWY7XG4gIGNvbnN0IGRlc3Ryb3llZCA9IG5ldyBTZXQ8YW55PigpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZi5wcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm92RGVmID0gZGVmLnByb3ZpZGVyc1tpXTtcbiAgICBpZiAocHJvdkRlZi5mbGFncyAmIE5vZGVGbGFncy5PbkRlc3Ryb3kpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmdNb2R1bGUuX3Byb3ZpZGVyc1tpXTtcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZSAhPT0gVU5ERUZJTkVEX1ZBTFVFKSB7XG4gICAgICAgIGNvbnN0IG9uRGVzdHJveTogRnVuY3Rpb258dW5kZWZpbmVkID0gaW5zdGFuY2UubmdPbkRlc3Ryb3k7XG4gICAgICAgIGlmICh0eXBlb2Ygb25EZXN0cm95ID09PSAnZnVuY3Rpb24nICYmICFkZXN0cm95ZWQuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICAgIG9uRGVzdHJveS5hcHBseShpbnN0YW5jZSk7XG4gICAgICAgICAgZGVzdHJveWVkLmFkZChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==