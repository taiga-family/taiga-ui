/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread } from "tslib";
import '../util/ng_dev_mode';
import { getFactoryDef } from '../render3/definition';
import { throwCyclicDependencyError, throwInvalidProviderError, throwMixedMultiProviderError } from '../render3/errors';
import { deepForEach, newArray } from '../util/array_utils';
import { stringify } from '../util/stringify';
import { resolveForwardRef } from './forward_ref';
import { InjectionToken } from './injection_token';
import { catchInjectorError, injectArgs, INJECTOR, NG_TEMP_TOKEN_PATH, NullInjector, setCurrentInjector, THROW_IF_NOT_FOUND, USE_VALUE, ɵɵinject } from './injector_compatibility';
import { getInheritedInjectableDef, getInjectableDef, getInjectorDef } from './interface/defs';
import { InjectFlags } from './interface/injector';
import { INJECTOR_SCOPE } from './scope';
/**
 * Marker which indicates that a value has not yet been created from the factory function.
 */
var NOT_YET = {};
/**
 * Marker which indicates that the factory function for a token is in the process of being called.
 *
 * If the injector is asked to inject a token with its value set to CIRCULAR, that indicates
 * injection of a dependency has recursively attempted to inject the original token, and there is
 * a circular dependency among the providers.
 */
var CIRCULAR = {};
var EMPTY_ARRAY = [];
/**
 * A lazily initialized NullInjector.
 */
var NULL_INJECTOR = undefined;
function getNullInjector() {
    if (NULL_INJECTOR === undefined) {
        NULL_INJECTOR = new NullInjector();
    }
    return NULL_INJECTOR;
}
/**
 * Create a new `Injector` which is configured using a `defType` of `InjectorType<any>`s.
 *
 * @publicApi
 */
export function createInjector(defType, parent, additionalProviders, name) {
    if (parent === void 0) { parent = null; }
    if (additionalProviders === void 0) { additionalProviders = null; }
    var injector = createInjectorWithoutInjectorInstances(defType, parent, additionalProviders, name);
    injector._resolveInjectorDefTypes();
    return injector;
}
/**
 * Creates a new injector without eagerly resolving its injector types. Can be used in places
 * where resolving the injector types immediately can lead to an infinite loop. The injector types
 * should be resolved at a later point by calling `_resolveInjectorDefTypes`.
 */
export function createInjectorWithoutInjectorInstances(defType, parent, additionalProviders, name) {
    if (parent === void 0) { parent = null; }
    if (additionalProviders === void 0) { additionalProviders = null; }
    return new R3Injector(defType, additionalProviders, parent || getNullInjector(), name);
}
var R3Injector = /** @class */ (function () {
    function R3Injector(def, additionalProviders, parent, source) {
        var _this = this;
        if (source === void 0) { source = null; }
        this.parent = parent;
        /**
         * Map of tokens to records which contain the instances of those tokens.
         * - `null` value implies that we don't have the record. Used by tree-shakable injectors
         * to prevent further searches.
         */
        this.records = new Map();
        /**
         * The transitive set of `InjectorType`s which define this injector.
         */
        this.injectorDefTypes = new Set();
        /**
         * Set of values instantiated by this injector which contain `ngOnDestroy` lifecycle hooks.
         */
        this.onDestroy = new Set();
        this._destroyed = false;
        var dedupStack = [];
        // Start off by creating Records for every provider declared in every InjectorType
        // included transitively in additional providers then do the same for `def`. This order is
        // important because `def` may include providers that override ones in additionalProviders.
        additionalProviders &&
            deepForEach(additionalProviders, function (provider) { return _this.processProvider(provider, def, additionalProviders); });
        deepForEach([def], function (injectorDef) { return _this.processInjectorType(injectorDef, [], dedupStack); });
        // Make sure the INJECTOR token provides this injector.
        this.records.set(INJECTOR, makeRecord(undefined, this));
        // Detect whether this injector has the APP_ROOT_SCOPE token and thus should provide
        // any injectable scoped to APP_ROOT_SCOPE.
        var record = this.records.get(INJECTOR_SCOPE);
        this.scope = record != null ? record.value : null;
        // Source name, used for debugging
        this.source = source || (typeof def === 'object' ? null : stringify(def));
    }
    Object.defineProperty(R3Injector.prototype, "destroyed", {
        /**
         * Flag indicating that this injector was previously destroyed.
         */
        get: function () {
            return this._destroyed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the injector and release references to every instance or provider associated with it.
     *
     * Also calls the `OnDestroy` lifecycle hooks of every instance that was created for which a
     * hook was found.
     */
    R3Injector.prototype.destroy = function () {
        this.assertNotDestroyed();
        // Set destroyed = true first, in case lifecycle hooks re-enter destroy().
        this._destroyed = true;
        try {
            // Call all the lifecycle hooks.
            this.onDestroy.forEach(function (service) { return service.ngOnDestroy(); });
        }
        finally {
            // Release all references.
            this.records.clear();
            this.onDestroy.clear();
            this.injectorDefTypes.clear();
        }
    };
    R3Injector.prototype.get = function (token, notFoundValue, flags) {
        if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
        if (flags === void 0) { flags = InjectFlags.Default; }
        this.assertNotDestroyed();
        // Set the injection context.
        var previousInjector = setCurrentInjector(this);
        try {
            // Check for the SkipSelf flag.
            if (!(flags & InjectFlags.SkipSelf)) {
                // SkipSelf isn't set, check if the record belongs to this injector.
                var record = this.records.get(token);
                if (record === undefined) {
                    // No record, but maybe the token is scoped to this injector. Look for an injectable
                    // def with a scope matching this injector.
                    var def = couldBeInjectableType(token) && getInjectableDef(token);
                    if (def && this.injectableDefInScope(def)) {
                        // Found an injectable def and it's scoped to this injector. Pretend as if it was here
                        // all along.
                        record = makeRecord(injectableDefOrInjectorDefFactory(token), NOT_YET);
                    }
                    else {
                        record = null;
                    }
                    this.records.set(token, record);
                }
                // If a record was found, get the instance for it and return it.
                if (record != null /* NOT null || undefined */) {
                    return this.hydrate(token, record);
                }
            }
            // Select the next injector based on the Self flag - if self is set, the next injector is
            // the NullInjector, otherwise it's the parent.
            var nextInjector = !(flags & InjectFlags.Self) ? this.parent : getNullInjector();
            // Set the notFoundValue based on the Optional flag - if optional is set and notFoundValue
            // is undefined, the value is null, otherwise it's the notFoundValue.
            notFoundValue = (flags & InjectFlags.Optional) && notFoundValue === THROW_IF_NOT_FOUND ?
                null :
                notFoundValue;
            return nextInjector.get(token, notFoundValue);
        }
        catch (e) {
            if (e.name === 'NullInjectorError') {
                var path = e[NG_TEMP_TOKEN_PATH] = e[NG_TEMP_TOKEN_PATH] || [];
                path.unshift(stringify(token));
                if (previousInjector) {
                    // We still have a parent injector, keep throwing
                    throw e;
                }
                else {
                    // Format & throw the final error message when we don't have any previous injector
                    return catchInjectorError(e, token, 'R3InjectorError', this.source);
                }
            }
            else {
                throw e;
            }
        }
        finally {
            // Lastly, clean up the state by restoring the previous injector.
            setCurrentInjector(previousInjector);
        }
    };
    /** @internal */
    R3Injector.prototype._resolveInjectorDefTypes = function () {
        var _this = this;
        this.injectorDefTypes.forEach(function (defType) { return _this.get(defType); });
    };
    R3Injector.prototype.toString = function () {
        var tokens = [], records = this.records;
        records.forEach(function (v, token) { return tokens.push(stringify(token)); });
        return "R3Injector[" + tokens.join(', ') + "]";
    };
    R3Injector.prototype.assertNotDestroyed = function () {
        if (this._destroyed) {
            throw new Error('Injector has already been destroyed.');
        }
    };
    /**
     * Add an `InjectorType` or `InjectorTypeWithProviders` and all of its transitive providers
     * to this injector.
     *
     * If an `InjectorTypeWithProviders` that declares providers besides the type is specified,
     * the function will return "true" to indicate that the providers of the type definition need
     * to be processed. This allows us to process providers of injector types after all imports of
     * an injector definition are processed. (following View Engine semantics: see FW-1349)
     */
    R3Injector.prototype.processInjectorType = function (defOrWrappedDef, parents, dedupStack) {
        var _this = this;
        defOrWrappedDef = resolveForwardRef(defOrWrappedDef);
        if (!defOrWrappedDef)
            return false;
        // Either the defOrWrappedDef is an InjectorType (with injector def) or an
        // InjectorDefTypeWithProviders (aka ModuleWithProviders). Detecting either is a megamorphic
        // read, so care is taken to only do the read once.
        // First attempt to read the injector def (`ɵinj`).
        var def = getInjectorDef(defOrWrappedDef);
        // If that's not present, then attempt to read ngModule from the InjectorDefTypeWithProviders.
        var ngModule = (def == null) && defOrWrappedDef.ngModule || undefined;
        // Determine the InjectorType. In the case where `defOrWrappedDef` is an `InjectorType`,
        // then this is easy. In the case of an InjectorDefTypeWithProviders, then the definition type
        // is the `ngModule`.
        var defType = (ngModule === undefined) ? defOrWrappedDef : ngModule;
        // Check for circular dependencies.
        if (ngDevMode && parents.indexOf(defType) !== -1) {
            var defName = stringify(defType);
            throw new Error("Circular dependency in DI detected for type " + defName + ". Dependency path: " + parents.map(function (defType) { return stringify(defType); }).join(' > ') + " > " + defName + ".");
        }
        // Check for multiple imports of the same module
        var isDuplicate = dedupStack.indexOf(defType) !== -1;
        // Finally, if defOrWrappedType was an `InjectorDefTypeWithProviders`, then the actual
        // `InjectorDef` is on its `ngModule`.
        if (ngModule !== undefined) {
            def = getInjectorDef(ngModule);
        }
        // If no definition was found, it might be from exports. Remove it.
        if (def == null) {
            return false;
        }
        // Add providers in the same way that @NgModule resolution did:
        // First, include providers from any imports.
        if (def.imports != null && !isDuplicate) {
            // Before processing defType's imports, add it to the set of parents. This way, if it ends
            // up deeply importing itself, this can be detected.
            ngDevMode && parents.push(defType);
            // Add it to the set of dedups. This way we can detect multiple imports of the same module
            dedupStack.push(defType);
            var importTypesWithProviders_1;
            try {
                deepForEach(def.imports, function (imported) {
                    if (_this.processInjectorType(imported, parents, dedupStack)) {
                        if (importTypesWithProviders_1 === undefined)
                            importTypesWithProviders_1 = [];
                        // If the processed import is an injector type with providers, we store it in the
                        // list of import types with providers, so that we can process those afterwards.
                        importTypesWithProviders_1.push(imported);
                    }
                });
            }
            finally {
                // Remove it from the parents set when finished.
                ngDevMode && parents.pop();
            }
            // Imports which are declared with providers (TypeWithProviders) need to be processed
            // after all imported modules are processed. This is similar to how View Engine
            // processes/merges module imports in the metadata resolver. See: FW-1349.
            if (importTypesWithProviders_1 !== undefined) {
                var _loop_1 = function (i) {
                    var _a = importTypesWithProviders_1[i], ngModule_1 = _a.ngModule, providers = _a.providers;
                    deepForEach(providers, function (provider) { return _this.processProvider(provider, ngModule_1, providers || EMPTY_ARRAY); });
                };
                for (var i = 0; i < importTypesWithProviders_1.length; i++) {
                    _loop_1(i);
                }
            }
        }
        // Track the InjectorType and add a provider for it. It's important that this is done after the
        // def's imports.
        this.injectorDefTypes.add(defType);
        this.records.set(defType, makeRecord(def.factory, NOT_YET));
        // Next, include providers listed on the definition itself.
        var defProviders = def.providers;
        if (defProviders != null && !isDuplicate) {
            var injectorType_1 = defOrWrappedDef;
            deepForEach(defProviders, function (provider) { return _this.processProvider(provider, injectorType_1, defProviders); });
        }
        return (ngModule !== undefined &&
            defOrWrappedDef.providers !== undefined);
    };
    /**
     * Process a `SingleProvider` and add it.
     */
    R3Injector.prototype.processProvider = function (provider, ngModuleType, providers) {
        // Determine the token from the provider. Either it's its own token, or has a {provide: ...}
        // property.
        provider = resolveForwardRef(provider);
        var token = isTypeProvider(provider) ? provider : resolveForwardRef(provider && provider.provide);
        // Construct a `Record` for the provider.
        var record = providerToRecord(provider, ngModuleType, providers);
        if (!isTypeProvider(provider) && provider.multi === true) {
            // If the provider indicates that it's a multi-provider, process it specially.
            // First check whether it's been defined already.
            var multiRecord_1 = this.records.get(token);
            if (multiRecord_1) {
                // It has. Throw a nice error if
                if (multiRecord_1.multi === undefined) {
                    throwMixedMultiProviderError();
                }
            }
            else {
                multiRecord_1 = makeRecord(undefined, NOT_YET, true);
                multiRecord_1.factory = function () { return injectArgs(multiRecord_1.multi); };
                this.records.set(token, multiRecord_1);
            }
            token = provider;
            multiRecord_1.multi.push(provider);
        }
        else {
            var existing = this.records.get(token);
            if (existing && existing.multi !== undefined) {
                throwMixedMultiProviderError();
            }
        }
        this.records.set(token, record);
    };
    R3Injector.prototype.hydrate = function (token, record) {
        if (record.value === CIRCULAR) {
            throwCyclicDependencyError(stringify(token));
        }
        else if (record.value === NOT_YET) {
            record.value = CIRCULAR;
            record.value = record.factory();
        }
        if (typeof record.value === 'object' && record.value && hasOnDestroy(record.value)) {
            this.onDestroy.add(record.value);
        }
        return record.value;
    };
    R3Injector.prototype.injectableDefInScope = function (def) {
        if (!def.providedIn) {
            return false;
        }
        else if (typeof def.providedIn === 'string') {
            return def.providedIn === 'any' || (def.providedIn === this.scope);
        }
        else {
            return this.injectorDefTypes.has(def.providedIn);
        }
    };
    return R3Injector;
}());
export { R3Injector };
function injectableDefOrInjectorDefFactory(token) {
    // Most tokens will have an injectable def directly on them, which specifies a factory directly.
    var injectableDef = getInjectableDef(token);
    var factory = injectableDef !== null ? injectableDef.factory : getFactoryDef(token);
    if (factory !== null) {
        return factory;
    }
    // If the token is an NgModule, it's also injectable but the factory is on its injector def
    // (`ɵinj`)
    var injectorDef = getInjectorDef(token);
    if (injectorDef !== null) {
        return injectorDef.factory;
    }
    // InjectionTokens should have an injectable def (ɵprov) and thus should be handled above.
    // If it's missing that, it's an error.
    if (token instanceof InjectionToken) {
        throw new Error("Token " + stringify(token) + " is missing a \u0275prov definition.");
    }
    // Undecorated types can sometimes be created if they have no constructor arguments.
    if (token instanceof Function) {
        return getUndecoratedInjectableFactory(token);
    }
    // There was no way to resolve a factory for this token.
    throw new Error('unreachable');
}
function getUndecoratedInjectableFactory(token) {
    // If the token has parameters then it has dependencies that we cannot resolve implicitly.
    var paramLength = token.length;
    if (paramLength > 0) {
        var args = newArray(paramLength, '?');
        throw new Error("Can't resolve all parameters for " + stringify(token) + ": (" + args.join(', ') + ").");
    }
    // The constructor function appears to have no parameters.
    // This might be because it inherits from a super-class. In which case, use an injectable
    // def from an ancestor if there is one.
    // Otherwise this really is a simple class with no dependencies, so return a factory that
    // just instantiates the zero-arg constructor.
    var inheritedInjectableDef = getInheritedInjectableDef(token);
    if (inheritedInjectableDef !== null) {
        return function () { return inheritedInjectableDef.factory(token); };
    }
    else {
        return function () { return new token(); };
    }
}
function providerToRecord(provider, ngModuleType, providers) {
    if (isValueProvider(provider)) {
        return makeRecord(undefined, provider.useValue);
    }
    else {
        var factory = providerToFactory(provider, ngModuleType, providers);
        return makeRecord(factory, NOT_YET);
    }
}
/**
 * Converts a `SingleProvider` into a factory function.
 *
 * @param provider provider to convert to factory
 */
export function providerToFactory(provider, ngModuleType, providers) {
    var factory = undefined;
    if (isTypeProvider(provider)) {
        var unwrappedProvider = resolveForwardRef(provider);
        return getFactoryDef(unwrappedProvider) || injectableDefOrInjectorDefFactory(unwrappedProvider);
    }
    else {
        if (isValueProvider(provider)) {
            factory = function () { return resolveForwardRef(provider.useValue); };
        }
        else if (isFactoryProvider(provider)) {
            factory = function () { return provider.useFactory.apply(provider, __spread(injectArgs(provider.deps || []))); };
        }
        else if (isExistingProvider(provider)) {
            factory = function () { return ɵɵinject(resolveForwardRef(provider.useExisting)); };
        }
        else {
            var classRef_1 = resolveForwardRef(provider &&
                (provider.useClass || provider.provide));
            if (!classRef_1) {
                throwInvalidProviderError(ngModuleType, providers, provider);
            }
            if (hasDeps(provider)) {
                factory = function () { return new ((classRef_1).bind.apply((classRef_1), __spread([void 0], injectArgs(provider.deps))))(); };
            }
            else {
                return getFactoryDef(classRef_1) || injectableDefOrInjectorDefFactory(classRef_1);
            }
        }
    }
    return factory;
}
function makeRecord(factory, value, multi) {
    if (multi === void 0) { multi = false; }
    return {
        factory: factory,
        value: value,
        multi: multi ? [] : undefined,
    };
}
function isValueProvider(value) {
    return value !== null && typeof value == 'object' && USE_VALUE in value;
}
function isExistingProvider(value) {
    return !!(value && value.useExisting);
}
function isFactoryProvider(value) {
    return !!(value && value.useFactory);
}
export function isTypeProvider(value) {
    return typeof value === 'function';
}
export function isClassProvider(value) {
    return !!value.useClass;
}
function hasDeps(value) {
    return !!value.deps;
}
function hasOnDestroy(value) {
    return value !== null && typeof value === 'object' &&
        typeof value.ngOnDestroy === 'function';
}
function couldBeInjectableType(value) {
    return (typeof value === 'function') ||
        (typeof value === 'object' && value instanceof InjectionToken);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfaW5qZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kaS9yM19pbmplY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxxQkFBcUIsQ0FBQztBQUk3QixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLDRCQUE0QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFdEgsT0FBTyxFQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2pMLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQTJELE1BQU0sa0JBQWtCLENBQUM7QUFDdkosT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFVdkM7O0dBRUc7QUFDSCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFFbkI7Ozs7OztHQU1HO0FBQ0gsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBRXBCLElBQU0sV0FBVyxHQUFHLEVBQVcsQ0FBQztBQUVoQzs7R0FF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LEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxjQUFjLENBQUMsQ0FBQztBQUNyRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgJy4uL3V0aWwvbmdfZGV2X21vZGUnO1xuXG5pbXBvcnQge09uRGVzdHJveX0gZnJvbSAnLi4vaW50ZXJmYWNlL2xpZmVjeWNsZV9ob29rcyc7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7Z2V0RmFjdG9yeURlZn0gZnJvbSAnLi4vcmVuZGVyMy9kZWZpbml0aW9uJztcbmltcG9ydCB7dGhyb3dDeWNsaWNEZXBlbmRlbmN5RXJyb3IsIHRocm93SW52YWxpZFByb3ZpZGVyRXJyb3IsIHRocm93TWl4ZWRNdWx0aVByb3ZpZGVyRXJyb3J9IGZyb20gJy4uL3JlbmRlcjMvZXJyb3JzJztcbmltcG9ydCB7RmFjdG9yeUZufSBmcm9tICcuLi9yZW5kZXIzL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5pbXBvcnQge2RlZXBGb3JFYWNoLCBuZXdBcnJheX0gZnJvbSAnLi4vdXRpbC9hcnJheV91dGlscyc7XG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAnLi4vdXRpbC9zdHJpbmdpZnknO1xuXG5pbXBvcnQge3Jlc29sdmVGb3J3YXJkUmVmfSBmcm9tICcuL2ZvcndhcmRfcmVmJztcbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJy4vaW5qZWN0aW9uX3Rva2VuJztcbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHtjYXRjaEluamVjdG9yRXJyb3IsIGluamVjdEFyZ3MsIElOSkVDVE9SLCBOR19URU1QX1RPS0VOX1BBVEgsIE51bGxJbmplY3Rvciwgc2V0Q3VycmVudEluamVjdG9yLCBUSFJPV19JRl9OT1RfRk9VTkQsIFVTRV9WQUxVRSwgybXJtWluamVjdH0gZnJvbSAnLi9pbmplY3Rvcl9jb21wYXRpYmlsaXR5JztcbmltcG9ydCB7Z2V0SW5oZXJpdGVkSW5qZWN0YWJsZURlZiwgZ2V0SW5qZWN0YWJsZURlZiwgZ2V0SW5qZWN0b3JEZWYsIEluamVjdG9yVHlwZSwgSW5qZWN0b3JUeXBlV2l0aFByb3ZpZGVycywgybXJtUluamVjdGFibGVEZWZ9IGZyb20gJy4vaW50ZXJmYWNlL2RlZnMnO1xuaW1wb3J0IHtJbmplY3RGbGFnc30gZnJvbSAnLi9pbnRlcmZhY2UvaW5qZWN0b3InO1xuaW1wb3J0IHtDbGFzc1Byb3ZpZGVyLCBDb25zdHJ1Y3RvclByb3ZpZGVyLCBFeGlzdGluZ1Byb3ZpZGVyLCBGYWN0b3J5UHJvdmlkZXIsIFN0YXRpY0NsYXNzUHJvdmlkZXIsIFN0YXRpY1Byb3ZpZGVyLCBUeXBlUHJvdmlkZXIsIFZhbHVlUHJvdmlkZXJ9IGZyb20gJy4vaW50ZXJmYWNlL3Byb3ZpZGVyJztcbmltcG9ydCB7SU5KRUNUT1JfU0NPUEV9IGZyb20gJy4vc2NvcGUnO1xuXG5cblxuLyoqXG4gKiBJbnRlcm5hbCB0eXBlIGZvciBhIHNpbmdsZSBwcm92aWRlciBpbiBhIGRlZXAgcHJvdmlkZXIgYXJyYXkuXG4gKi9cbnR5cGUgU2luZ2xlUHJvdmlkZXIgPSBUeXBlUHJvdmlkZXJ8VmFsdWVQcm92aWRlcnxDbGFzc1Byb3ZpZGVyfENvbnN0cnVjdG9yUHJvdmlkZXJ8RXhpc3RpbmdQcm92aWRlcnxcbiAgICBGYWN0b3J5UHJvdmlkZXJ8U3RhdGljQ2xhc3NQcm92aWRlcjtcblxuLyoqXG4gKiBNYXJrZXIgd2hpY2ggaW5kaWNhdGVzIHRoYXQgYSB2YWx1ZSBoYXMgbm90IHlldCBiZWVuIGNyZWF0ZWQgZnJvbSB0aGUgZmFjdG9yeSBmdW5jdGlvbi5cbiAqL1xuY29uc3QgTk9UX1lFVCA9IHt9O1xuXG4vKipcbiAqIE1hcmtlciB3aGljaCBpbmRpY2F0ZXMgdGhhdCB0aGUgZmFjdG9yeSBmdW5jdGlvbiBmb3IgYSB0b2tlbiBpcyBpbiB0aGUgcHJvY2VzcyBvZiBiZWluZyBjYWxsZWQuXG4gKlxuICogSWYgdGhlIGluamVjdG9yIGlzIGFza2VkIHRvIGluamVjdCBhIHRva2VuIHdpdGggaXRzIHZhbHVlIHNldCB0byBDSVJDVUxBUiwgdGhhdCBpbmRpY2F0ZXNcbiAqIGluamVjdGlvbiBvZiBhIGRlcGVuZGVuY3kgaGFzIHJlY3Vyc2l2ZWx5IGF0dGVtcHRlZCB0byBpbmplY3QgdGhlIG9yaWdpbmFsIHRva2VuLCBhbmQgdGhlcmUgaXNcbiAqIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSBhbW9uZyB0aGUgcHJvdmlkZXJzLlxuICovXG5jb25zdCBDSVJDVUxBUiA9IHt9O1xuXG5jb25zdCBFTVBUWV9BUlJBWSA9IFtdIGFzIGFueVtdO1xuXG4vKipcbiAqIEEgbGF6aWx5IGluaXRpYWxpemVkIE51bGxJbmplY3Rvci5cbiAqL1xubGV0IE5VTExfSU5KRUNUT1I6IEluamVjdG9yfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gZ2V0TnVsbEluamVjdG9yKCk6IEluamVjdG9yIHtcbiAgaWYgKE5VTExfSU5KRUNUT1IgPT09IHVuZGVmaW5lZCkge1xuICAgIE5VTExfSU5KRUNUT1IgPSBuZXcgTnVsbEluamVjdG9yKCk7XG4gIH1cbiAgcmV0dXJuIE5VTExfSU5KRUNUT1I7XG59XG5cbi8qKlxuICogQW4gZW50cnkgaW4gdGhlIGluamVjdG9yIHdoaWNoIHRyYWNrcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gdG9rZW4sIGluY2x1ZGluZyBhIHBvc3NpYmxlXG4gKiBjdXJyZW50IHZhbHVlLlxuICovXG5pbnRlcmZhY2UgUmVjb3JkPFQ+IHtcbiAgZmFjdG9yeTogKCgpID0+IFQpfHVuZGVmaW5lZDtcbiAgdmFsdWU6IFR8e307XG4gIG11bHRpOiBhbnlbXXx1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGBJbmplY3RvcmAgd2hpY2ggaXMgY29uZmlndXJlZCB1c2luZyBhIGBkZWZUeXBlYCBvZiBgSW5qZWN0b3JUeXBlPGFueT5gcy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbmplY3RvcihcbiAgICBkZWZUeXBlOiAvKiBJbmplY3RvclR5cGU8YW55PiAqLyBhbnksIHBhcmVudDogSW5qZWN0b3J8bnVsbCA9IG51bGwsXG4gICAgYWRkaXRpb25hbFByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXXxudWxsID0gbnVsbCwgbmFtZT86IHN0cmluZyk6IEluamVjdG9yIHtcbiAgY29uc3QgaW5qZWN0b3IgPVxuICAgICAgY3JlYXRlSW5qZWN0b3JXaXRob3V0SW5qZWN0b3JJbnN0YW5jZXMoZGVmVHlwZSwgcGFyZW50LCBhZGRpdGlvbmFsUHJvdmlkZXJzLCBuYW1lKTtcbiAgaW5qZWN0b3IuX3Jlc29sdmVJbmplY3RvckRlZlR5cGVzKCk7XG4gIHJldHVybiBpbmplY3Rvcjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGluamVjdG9yIHdpdGhvdXQgZWFnZXJseSByZXNvbHZpbmcgaXRzIGluamVjdG9yIHR5cGVzLiBDYW4gYmUgdXNlZCBpbiBwbGFjZXNcbiAqIHdoZXJlIHJlc29sdmluZyB0aGUgaW5qZWN0b3IgdHlwZXMgaW1tZWRpYXRlbHkgY2FuIGxlYWQgdG8gYW4gaW5maW5pdGUgbG9vcC4gVGhlIGluamVjdG9yIHR5cGVzXG4gKiBzaG91bGQgYmUgcmVzb2x2ZWQgYXQgYSBsYXRlciBwb2ludCBieSBjYWxsaW5nIGBfcmVzb2x2ZUluamVjdG9yRGVmVHlwZXNgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5qZWN0b3JXaXRob3V0SW5qZWN0b3JJbnN0YW5jZXMoXG4gICAgZGVmVHlwZTogLyogSW5qZWN0b3JUeXBlPGFueT4gKi8gYW55LCBwYXJlbnQ6IEluamVjdG9yfG51bGwgPSBudWxsLFxuICAgIGFkZGl0aW9uYWxQcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW118bnVsbCA9IG51bGwsIG5hbWU/OiBzdHJpbmcpOiBSM0luamVjdG9yIHtcbiAgcmV0dXJuIG5ldyBSM0luamVjdG9yKGRlZlR5cGUsIGFkZGl0aW9uYWxQcm92aWRlcnMsIHBhcmVudCB8fCBnZXROdWxsSW5qZWN0b3IoKSwgbmFtZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBSM0luamVjdG9yIHtcbiAgLyoqXG4gICAqIE1hcCBvZiB0b2tlbnMgdG8gcmVjb3JkcyB3aGljaCBjb250YWluIHRoZSBpbnN0YW5jZXMgb2YgdGhvc2UgdG9rZW5zLlxuICAgKiAtIGBudWxsYCB2YWx1ZSBpbXBsaWVzIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0aGUgcmVjb3JkLiBVc2VkIGJ5IHRyZWUtc2hha2FibGUgaW5qZWN0b3JzXG4gICAqIHRvIHByZXZlbnQgZnVydGhlciBzZWFyY2hlcy5cbiAgICovXG4gIHByaXZhdGUgcmVjb3JkcyA9IG5ldyBNYXA8VHlwZTxhbnk+fEluamVjdGlvblRva2VuPGFueT4sIFJlY29yZDxhbnk+fG51bGw+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSB0cmFuc2l0aXZlIHNldCBvZiBgSW5qZWN0b3JUeXBlYHMgd2hpY2ggZGVmaW5lIHRoaXMgaW5qZWN0b3IuXG4gICAqL1xuICBwcml2YXRlIGluamVjdG9yRGVmVHlwZXMgPSBuZXcgU2V0PEluamVjdG9yVHlwZTxhbnk+PigpO1xuXG4gIC8qKlxuICAgKiBTZXQgb2YgdmFsdWVzIGluc3RhbnRpYXRlZCBieSB0aGlzIGluamVjdG9yIHdoaWNoIGNvbnRhaW4gYG5nT25EZXN0cm95YCBsaWZlY3ljbGUgaG9va3MuXG4gICAqL1xuICBwcml2YXRlIG9uRGVzdHJveSA9IG5ldyBTZXQ8T25EZXN0cm95PigpO1xuXG4gIC8qKlxuICAgKiBGbGFnIGluZGljYXRpbmcgdGhpcyBpbmplY3RvciBwcm92aWRlcyB0aGUgQVBQX1JPT1RfU0NPUEUgdG9rZW4sIGFuZCB0aHVzIGNvdW50cyBhcyB0aGVcbiAgICogcm9vdCBzY29wZS5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgc2NvcGU6ICdyb290J3wncGxhdGZvcm0nfG51bGw7XG5cbiAgcmVhZG9ubHkgc291cmNlOiBzdHJpbmd8bnVsbDtcblxuICAvKipcbiAgICogRmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhpcyBpbmplY3RvciB3YXMgcHJldmlvdXNseSBkZXN0cm95ZWQuXG4gICAqL1xuICBnZXQgZGVzdHJveWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBkZWY6IEluamVjdG9yVHlwZTxhbnk+LCBhZGRpdGlvbmFsUHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdfG51bGwsIHJlYWRvbmx5IHBhcmVudDogSW5qZWN0b3IsXG4gICAgICBzb3VyY2U6IHN0cmluZ3xudWxsID0gbnVsbCkge1xuICAgIGNvbnN0IGRlZHVwU3RhY2s6IEluamVjdG9yVHlwZTxhbnk+W10gPSBbXTtcblxuICAgIC8vIFN0YXJ0IG9mZiBieSBjcmVhdGluZyBSZWNvcmRzIGZvciBldmVyeSBwcm92aWRlciBkZWNsYXJlZCBpbiBldmVyeSBJbmplY3RvclR5cGVcbiAgICAvLyBpbmNsdWRlZCB0cmFuc2l0aXZlbHkgaW4gYWRkaXRpb25hbCBwcm92aWRlcnMgdGhlbiBkbyB0aGUgc2FtZSBmb3IgYGRlZmAuIFRoaXMgb3JkZXIgaXNcbiAgICAvLyBpbXBvcnRhbnQgYmVjYXVzZSBgZGVmYCBtYXkgaW5jbHVkZSBwcm92aWRlcnMgdGhhdCBvdmVycmlkZSBvbmVzIGluIGFkZGl0aW9uYWxQcm92aWRlcnMuXG4gICAgYWRkaXRpb25hbFByb3ZpZGVycyAmJlxuICAgICAgICBkZWVwRm9yRWFjaChcbiAgICAgICAgICAgIGFkZGl0aW9uYWxQcm92aWRlcnMsXG4gICAgICAgICAgICBwcm92aWRlciA9PiB0aGlzLnByb2Nlc3NQcm92aWRlcihwcm92aWRlciwgZGVmLCBhZGRpdGlvbmFsUHJvdmlkZXJzKSk7XG5cbiAgICBkZWVwRm9yRWFjaChbZGVmXSwgaW5qZWN0b3JEZWYgPT4gdGhpcy5wcm9jZXNzSW5qZWN0b3JUeXBlKGluamVjdG9yRGVmLCBbXSwgZGVkdXBTdGFjaykpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBJTkpFQ1RPUiB0b2tlbiBwcm92aWRlcyB0aGlzIGluamVjdG9yLlxuICAgIHRoaXMucmVjb3Jkcy5zZXQoSU5KRUNUT1IsIG1ha2VSZWNvcmQodW5kZWZpbmVkLCB0aGlzKSk7XG5cbiAgICAvLyBEZXRlY3Qgd2hldGhlciB0aGlzIGluamVjdG9yIGhhcyB0aGUgQVBQX1JPT1RfU0NPUEUgdG9rZW4gYW5kIHRodXMgc2hvdWxkIHByb3ZpZGVcbiAgICAvLyBhbnkgaW5qZWN0YWJsZSBzY29wZWQgdG8gQVBQX1JPT1RfU0NPUEUuXG4gICAgY29uc3QgcmVjb3JkID0gdGhpcy5yZWNvcmRzLmdldChJTkpFQ1RPUl9TQ09QRSk7XG4gICAgdGhpcy5zY29wZSA9IHJlY29yZCAhPSBudWxsID8gcmVjb3JkLnZhbHVlIDogbnVsbDtcblxuICAgIC8vIFNvdXJjZSBuYW1lLCB1c2VkIGZvciBkZWJ1Z2dpbmdcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZSB8fCAodHlwZW9mIGRlZiA9PT0gJ29iamVjdCcgPyBudWxsIDogc3RyaW5naWZ5KGRlZikpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluamVjdG9yIGFuZCByZWxlYXNlIHJlZmVyZW5jZXMgdG8gZXZlcnkgaW5zdGFuY2Ugb3IgcHJvdmlkZXIgYXNzb2NpYXRlZCB3aXRoIGl0LlxuICAgKlxuICAgKiBBbHNvIGNhbGxzIHRoZSBgT25EZXN0cm95YCBsaWZlY3ljbGUgaG9va3Mgb2YgZXZlcnkgaW5zdGFuY2UgdGhhdCB3YXMgY3JlYXRlZCBmb3Igd2hpY2ggYVxuICAgKiBob29rIHdhcyBmb3VuZC5cbiAgICovXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hc3NlcnROb3REZXN0cm95ZWQoKTtcblxuICAgIC8vIFNldCBkZXN0cm95ZWQgPSB0cnVlIGZpcnN0LCBpbiBjYXNlIGxpZmVjeWNsZSBob29rcyByZS1lbnRlciBkZXN0cm95KCkuXG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgLy8gQ2FsbCBhbGwgdGhlIGxpZmVjeWNsZSBob29rcy5cbiAgICAgIHRoaXMub25EZXN0cm95LmZvckVhY2goc2VydmljZSA9PiBzZXJ2aWNlLm5nT25EZXN0cm95KCkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBSZWxlYXNlIGFsbCByZWZlcmVuY2VzLlxuICAgICAgdGhpcy5yZWNvcmRzLmNsZWFyKCk7XG4gICAgICB0aGlzLm9uRGVzdHJveS5jbGVhcigpO1xuICAgICAgdGhpcy5pbmplY3RvckRlZlR5cGVzLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0PFQ+KFxuICAgICAgdG9rZW46IFR5cGU8VD58SW5qZWN0aW9uVG9rZW48VD4sIG5vdEZvdW5kVmFsdWU6IGFueSA9IFRIUk9XX0lGX05PVF9GT1VORCxcbiAgICAgIGZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdCk6IFQge1xuICAgIHRoaXMuYXNzZXJ0Tm90RGVzdHJveWVkKCk7XG4gICAgLy8gU2V0IHRoZSBpbmplY3Rpb24gY29udGV4dC5cbiAgICBjb25zdCBwcmV2aW91c0luamVjdG9yID0gc2V0Q3VycmVudEluamVjdG9yKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICAvLyBDaGVjayBmb3IgdGhlIFNraXBTZWxmIGZsYWcuXG4gICAgICBpZiAoIShmbGFncyAmIEluamVjdEZsYWdzLlNraXBTZWxmKSkge1xuICAgICAgICAvLyBTa2lwU2VsZiBpc24ndCBzZXQsIGNoZWNrIGlmIHRoZSByZWNvcmQgYmVsb25ncyB0byB0aGlzIGluamVjdG9yLlxuICAgICAgICBsZXQgcmVjb3JkOiBSZWNvcmQ8VD58dW5kZWZpbmVkfG51bGwgPSB0aGlzLnJlY29yZHMuZ2V0KHRva2VuKTtcbiAgICAgICAgaWYgKHJlY29yZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gTm8gcmVjb3JkLCBidXQgbWF5YmUgdGhlIHRva2VuIGlzIHNjb3BlZCB0byB0aGlzIGluamVjdG9yLiBMb29rIGZvciBhbiBpbmplY3RhYmxlXG4gICAgICAgICAgLy8gZGVmIHdpdGggYSBzY29wZSBtYXRjaGluZyB0aGlzIGluamVjdG9yLlxuICAgICAgICAgIGNvbnN0IGRlZiA9IGNvdWxkQmVJbmplY3RhYmxlVHlwZSh0b2tlbikgJiYgZ2V0SW5qZWN0YWJsZURlZih0b2tlbik7XG4gICAgICAgICAgaWYgKGRlZiAmJiB0aGlzLmluamVjdGFibGVEZWZJblNjb3BlKGRlZikpIHtcbiAgICAgICAgICAgIC8vIEZvdW5kIGFuIGluamVjdGFibGUgZGVmIGFuZCBpdCdzIHNjb3BlZCB0byB0aGlzIGluamVjdG9yLiBQcmV0ZW5kIGFzIGlmIGl0IHdhcyBoZXJlXG4gICAgICAgICAgICAvLyBhbGwgYWxvbmcuXG4gICAgICAgICAgICByZWNvcmQgPSBtYWtlUmVjb3JkKGluamVjdGFibGVEZWZPckluamVjdG9yRGVmRmFjdG9yeSh0b2tlbiksIE5PVF9ZRVQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWNvcmQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlY29yZHMuc2V0KHRva2VuLCByZWNvcmQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgcmVjb3JkIHdhcyBmb3VuZCwgZ2V0IHRoZSBpbnN0YW5jZSBmb3IgaXQgYW5kIHJldHVybiBpdC5cbiAgICAgICAgaWYgKHJlY29yZCAhPSBudWxsIC8qIE5PVCBudWxsIHx8IHVuZGVmaW5lZCAqLykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh5ZHJhdGUodG9rZW4sIHJlY29yZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2VsZWN0IHRoZSBuZXh0IGluamVjdG9yIGJhc2VkIG9uIHRoZSBTZWxmIGZsYWcgLSBpZiBzZWxmIGlzIHNldCwgdGhlIG5leHQgaW5qZWN0b3IgaXNcbiAgICAgIC8vIHRoZSBOdWxsSW5qZWN0b3IsIG90aGVyd2lzZSBpdCdzIHRoZSBwYXJlbnQuXG4gICAgICBjb25zdCBuZXh0SW5qZWN0b3IgPSAhKGZsYWdzICYgSW5qZWN0RmxhZ3MuU2VsZikgPyB0aGlzLnBhcmVudCA6IGdldE51bGxJbmplY3RvcigpO1xuICAgICAgLy8gU2V0IHRoZSBub3RGb3VuZFZhbHVlIGJhc2VkIG9uIHRoZSBPcHRpb25hbCBmbGFnIC0gaWYgb3B0aW9uYWwgaXMgc2V0IGFuZCBub3RGb3VuZFZhbHVlXG4gICAgICAvLyBpcyB1bmRlZmluZWQsIHRoZSB2YWx1ZSBpcyBudWxsLCBvdGhlcndpc2UgaXQncyB0aGUgbm90Rm91bmRWYWx1ZS5cbiAgICAgIG5vdEZvdW5kVmFsdWUgPSAoZmxhZ3MgJiBJbmplY3RGbGFncy5PcHRpb25hbCkgJiYgbm90Rm91bmRWYWx1ZSA9PT0gVEhST1dfSUZfTk9UX0ZPVU5EID9cbiAgICAgICAgICBudWxsIDpcbiAgICAgICAgICBub3RGb3VuZFZhbHVlO1xuICAgICAgcmV0dXJuIG5leHRJbmplY3Rvci5nZXQodG9rZW4sIG5vdEZvdW5kVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOdWxsSW5qZWN0b3JFcnJvcicpIHtcbiAgICAgICAgY29uc3QgcGF0aDogYW55W10gPSBlW05HX1RFTVBfVE9LRU5fUEFUSF0gPSBlW05HX1RFTVBfVE9LRU5fUEFUSF0gfHwgW107XG4gICAgICAgIHBhdGgudW5zaGlmdChzdHJpbmdpZnkodG9rZW4pKTtcbiAgICAgICAgaWYgKHByZXZpb3VzSW5qZWN0b3IpIHtcbiAgICAgICAgICAvLyBXZSBzdGlsbCBoYXZlIGEgcGFyZW50IGluamVjdG9yLCBrZWVwIHRocm93aW5nXG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGb3JtYXQgJiB0aHJvdyB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZSB3aGVuIHdlIGRvbid0IGhhdmUgYW55IHByZXZpb3VzIGluamVjdG9yXG4gICAgICAgICAgcmV0dXJuIGNhdGNoSW5qZWN0b3JFcnJvcihlLCB0b2tlbiwgJ1IzSW5qZWN0b3JFcnJvcicsIHRoaXMuc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gTGFzdGx5LCBjbGVhbiB1cCB0aGUgc3RhdGUgYnkgcmVzdG9yaW5nIHRoZSBwcmV2aW91cyBpbmplY3Rvci5cbiAgICAgIHNldEN1cnJlbnRJbmplY3RvcihwcmV2aW91c0luamVjdG9yKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9yZXNvbHZlSW5qZWN0b3JEZWZUeXBlcygpIHtcbiAgICB0aGlzLmluamVjdG9yRGVmVHlwZXMuZm9yRWFjaChkZWZUeXBlID0+IHRoaXMuZ2V0KGRlZlR5cGUpKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHRva2VucyA9IDxzdHJpbmdbXT5bXSwgcmVjb3JkcyA9IHRoaXMucmVjb3JkcztcbiAgICByZWNvcmRzLmZvckVhY2goKHYsIHRva2VuKSA9PiB0b2tlbnMucHVzaChzdHJpbmdpZnkodG9rZW4pKSk7XG4gICAgcmV0dXJuIGBSM0luamVjdG9yWyR7dG9rZW5zLmpvaW4oJywgJyl9XWA7XG4gIH1cblxuICBwcml2YXRlIGFzc2VydE5vdERlc3Ryb3llZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luamVjdG9yIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gYEluamVjdG9yVHlwZWAgb3IgYEluamVjdG9yVHlwZVdpdGhQcm92aWRlcnNgIGFuZCBhbGwgb2YgaXRzIHRyYW5zaXRpdmUgcHJvdmlkZXJzXG4gICAqIHRvIHRoaXMgaW5qZWN0b3IuXG4gICAqXG4gICAqIElmIGFuIGBJbmplY3RvclR5cGVXaXRoUHJvdmlkZXJzYCB0aGF0IGRlY2xhcmVzIHByb3ZpZGVycyBiZXNpZGVzIHRoZSB0eXBlIGlzIHNwZWNpZmllZCxcbiAgICogdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIFwidHJ1ZVwiIHRvIGluZGljYXRlIHRoYXQgdGhlIHByb3ZpZGVycyBvZiB0aGUgdHlwZSBkZWZpbml0aW9uIG5lZWRcbiAgICogdG8gYmUgcHJvY2Vzc2VkLiBUaGlzIGFsbG93cyB1cyB0byBwcm9jZXNzIHByb3ZpZGVycyBvZiBpbmplY3RvciB0eXBlcyBhZnRlciBhbGwgaW1wb3J0cyBvZlxuICAgKiBhbiBpbmplY3RvciBkZWZpbml0aW9uIGFyZSBwcm9jZXNzZWQuIChmb2xsb3dpbmcgVmlldyBFbmdpbmUgc2VtYW50aWNzOiBzZWUgRlctMTM0OSlcbiAgICovXG4gIHByaXZhdGUgcHJvY2Vzc0luamVjdG9yVHlwZShcbiAgICAgIGRlZk9yV3JhcHBlZERlZjogSW5qZWN0b3JUeXBlPGFueT58SW5qZWN0b3JUeXBlV2l0aFByb3ZpZGVyczxhbnk+LFxuICAgICAgcGFyZW50czogSW5qZWN0b3JUeXBlPGFueT5bXSxcbiAgICAgIGRlZHVwU3RhY2s6IEluamVjdG9yVHlwZTxhbnk+W10pOiBkZWZPcldyYXBwZWREZWYgaXMgSW5qZWN0b3JUeXBlV2l0aFByb3ZpZGVyczxhbnk+IHtcbiAgICBkZWZPcldyYXBwZWREZWYgPSByZXNvbHZlRm9yd2FyZFJlZihkZWZPcldyYXBwZWREZWYpO1xuICAgIGlmICghZGVmT3JXcmFwcGVkRGVmKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBFaXRoZXIgdGhlIGRlZk9yV3JhcHBlZERlZiBpcyBhbiBJbmplY3RvclR5cGUgKHdpdGggaW5qZWN0b3IgZGVmKSBvciBhblxuICAgIC8vIEluamVjdG9yRGVmVHlwZVdpdGhQcm92aWRlcnMgKGFrYSBNb2R1bGVXaXRoUHJvdmlkZXJzKS4gRGV0ZWN0aW5nIGVpdGhlciBpcyBhIG1lZ2Ftb3JwaGljXG4gICAgLy8gcmVhZCwgc28gY2FyZSBpcyB0YWtlbiB0byBvbmx5IGRvIHRoZSByZWFkIG9uY2UuXG5cbiAgICAvLyBGaXJzdCBhdHRlbXB0IHRvIHJlYWQgdGhlIGluamVjdG9yIGRlZiAoYMm1aW5qYCkuXG4gICAgbGV0IGRlZiA9IGdldEluamVjdG9yRGVmKGRlZk9yV3JhcHBlZERlZik7XG5cbiAgICAvLyBJZiB0aGF0J3Mgbm90IHByZXNlbnQsIHRoZW4gYXR0ZW1wdCB0byByZWFkIG5nTW9kdWxlIGZyb20gdGhlIEluamVjdG9yRGVmVHlwZVdpdGhQcm92aWRlcnMuXG4gICAgY29uc3QgbmdNb2R1bGUgPVxuICAgICAgICAoZGVmID09IG51bGwpICYmIChkZWZPcldyYXBwZWREZWYgYXMgSW5qZWN0b3JUeXBlV2l0aFByb3ZpZGVyczxhbnk+KS5uZ01vZHVsZSB8fCB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIEluamVjdG9yVHlwZS4gSW4gdGhlIGNhc2Ugd2hlcmUgYGRlZk9yV3JhcHBlZERlZmAgaXMgYW4gYEluamVjdG9yVHlwZWAsXG4gICAgLy8gdGhlbiB0aGlzIGlzIGVhc3kuIEluIHRoZSBjYXNlIG9mIGFuIEluamVjdG9yRGVmVHlwZVdpdGhQcm92aWRlcnMsIHRoZW4gdGhlIGRlZmluaXRpb24gdHlwZVxuICAgIC8vIGlzIHRoZSBgbmdNb2R1bGVgLlxuICAgIGNvbnN0IGRlZlR5cGU6IEluamVjdG9yVHlwZTxhbnk+ID1cbiAgICAgICAgKG5nTW9kdWxlID09PSB1bmRlZmluZWQpID8gKGRlZk9yV3JhcHBlZERlZiBhcyBJbmplY3RvclR5cGU8YW55PikgOiBuZ01vZHVsZTtcblxuICAgIC8vIENoZWNrIGZvciBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4gICAgaWYgKG5nRGV2TW9kZSAmJiBwYXJlbnRzLmluZGV4T2YoZGVmVHlwZSkgIT09IC0xKSB7XG4gICAgICBjb25zdCBkZWZOYW1lID0gc3RyaW5naWZ5KGRlZlR5cGUpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBkZXBlbmRlbmN5IGluIERJIGRldGVjdGVkIGZvciB0eXBlICR7ZGVmTmFtZX0uIERlcGVuZGVuY3kgcGF0aDogJHtcbiAgICAgICAgICBwYXJlbnRzLm1hcChkZWZUeXBlID0+IHN0cmluZ2lmeShkZWZUeXBlKSkuam9pbignID4gJyl9ID4gJHtkZWZOYW1lfS5gKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbXVsdGlwbGUgaW1wb3J0cyBvZiB0aGUgc2FtZSBtb2R1bGVcbiAgICBjb25zdCBpc0R1cGxpY2F0ZSA9IGRlZHVwU3RhY2suaW5kZXhPZihkZWZUeXBlKSAhPT0gLTE7XG5cbiAgICAvLyBGaW5hbGx5LCBpZiBkZWZPcldyYXBwZWRUeXBlIHdhcyBhbiBgSW5qZWN0b3JEZWZUeXBlV2l0aFByb3ZpZGVyc2AsIHRoZW4gdGhlIGFjdHVhbFxuICAgIC8vIGBJbmplY3RvckRlZmAgaXMgb24gaXRzIGBuZ01vZHVsZWAuXG4gICAgaWYgKG5nTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlZiA9IGdldEluamVjdG9yRGVmKG5nTW9kdWxlKTtcbiAgICB9XG5cbiAgICAvLyBJZiBubyBkZWZpbml0aW9uIHdhcyBmb3VuZCwgaXQgbWlnaHQgYmUgZnJvbSBleHBvcnRzLiBSZW1vdmUgaXQuXG4gICAgaWYgKGRlZiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIHByb3ZpZGVycyBpbiB0aGUgc2FtZSB3YXkgdGhhdCBATmdNb2R1bGUgcmVzb2x1dGlvbiBkaWQ6XG5cbiAgICAvLyBGaXJzdCwgaW5jbHVkZSBwcm92aWRlcnMgZnJvbSBhbnkgaW1wb3J0cy5cbiAgICBpZiAoZGVmLmltcG9ydHMgIT0gbnVsbCAmJiAhaXNEdXBsaWNhdGUpIHtcbiAgICAgIC8vIEJlZm9yZSBwcm9jZXNzaW5nIGRlZlR5cGUncyBpbXBvcnRzLCBhZGQgaXQgdG8gdGhlIHNldCBvZiBwYXJlbnRzLiBUaGlzIHdheSwgaWYgaXQgZW5kc1xuICAgICAgLy8gdXAgZGVlcGx5IGltcG9ydGluZyBpdHNlbGYsIHRoaXMgY2FuIGJlIGRldGVjdGVkLlxuICAgICAgbmdEZXZNb2RlICYmIHBhcmVudHMucHVzaChkZWZUeXBlKTtcbiAgICAgIC8vIEFkZCBpdCB0byB0aGUgc2V0IG9mIGRlZHVwcy4gVGhpcyB3YXkgd2UgY2FuIGRldGVjdCBtdWx0aXBsZSBpbXBvcnRzIG9mIHRoZSBzYW1lIG1vZHVsZVxuICAgICAgZGVkdXBTdGFjay5wdXNoKGRlZlR5cGUpO1xuXG4gICAgICBsZXQgaW1wb3J0VHlwZXNXaXRoUHJvdmlkZXJzOiAoSW5qZWN0b3JUeXBlV2l0aFByb3ZpZGVyczxhbnk+W10pfHVuZGVmaW5lZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRlZXBGb3JFYWNoKGRlZi5pbXBvcnRzLCBpbXBvcnRlZCA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc0luamVjdG9yVHlwZShpbXBvcnRlZCwgcGFyZW50cywgZGVkdXBTdGFjaykpIHtcbiAgICAgICAgICAgIGlmIChpbXBvcnRUeXBlc1dpdGhQcm92aWRlcnMgPT09IHVuZGVmaW5lZCkgaW1wb3J0VHlwZXNXaXRoUHJvdmlkZXJzID0gW107XG4gICAgICAgICAgICAvLyBJZiB0aGUgcHJvY2Vzc2VkIGltcG9ydCBpcyBhbiBpbmplY3RvciB0eXBlIHdpdGggcHJvdmlkZXJzLCB3ZSBzdG9yZSBpdCBpbiB0aGVcbiAgICAgICAgICAgIC8vIGxpc3Qgb2YgaW1wb3J0IHR5cGVzIHdpdGggcHJvdmlkZXJzLCBzbyB0aGF0IHdlIGNhbiBwcm9jZXNzIHRob3NlIGFmdGVyd2FyZHMuXG4gICAgICAgICAgICBpbXBvcnRUeXBlc1dpdGhQcm92aWRlcnMucHVzaChpbXBvcnRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBwYXJlbnRzIHNldCB3aGVuIGZpbmlzaGVkLlxuICAgICAgICBuZ0Rldk1vZGUgJiYgcGFyZW50cy5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgLy8gSW1wb3J0cyB3aGljaCBhcmUgZGVjbGFyZWQgd2l0aCBwcm92aWRlcnMgKFR5cGVXaXRoUHJvdmlkZXJzKSBuZWVkIHRvIGJlIHByb2Nlc3NlZFxuICAgICAgLy8gYWZ0ZXIgYWxsIGltcG9ydGVkIG1vZHVsZXMgYXJlIHByb2Nlc3NlZC4gVGhpcyBpcyBzaW1pbGFyIHRvIGhvdyBWaWV3IEVuZ2luZVxuICAgICAgLy8gcHJvY2Vzc2VzL21lcmdlcyBtb2R1bGUgaW1wb3J0cyBpbiB0aGUgbWV0YWRhdGEgcmVzb2x2ZXIuIFNlZTogRlctMTM0OS5cbiAgICAgIGlmIChpbXBvcnRUeXBlc1dpdGhQcm92aWRlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltcG9ydFR5cGVzV2l0aFByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHtuZ01vZHVsZSwgcHJvdmlkZXJzfSA9IGltcG9ydFR5cGVzV2l0aFByb3ZpZGVyc1tpXTtcbiAgICAgICAgICBkZWVwRm9yRWFjaChcbiAgICAgICAgICAgICAgcHJvdmlkZXJzISxcbiAgICAgICAgICAgICAgcHJvdmlkZXIgPT4gdGhpcy5wcm9jZXNzUHJvdmlkZXIocHJvdmlkZXIsIG5nTW9kdWxlLCBwcm92aWRlcnMgfHwgRU1QVFlfQVJSQVkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBUcmFjayB0aGUgSW5qZWN0b3JUeXBlIGFuZCBhZGQgYSBwcm92aWRlciBmb3IgaXQuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhpcyBpcyBkb25lIGFmdGVyIHRoZVxuICAgIC8vIGRlZidzIGltcG9ydHMuXG4gICAgdGhpcy5pbmplY3RvckRlZlR5cGVzLmFkZChkZWZUeXBlKTtcbiAgICB0aGlzLnJlY29yZHMuc2V0KGRlZlR5cGUsIG1ha2VSZWNvcmQoZGVmLmZhY3RvcnksIE5PVF9ZRVQpKTtcblxuICAgIC8vIE5leHQsIGluY2x1ZGUgcHJvdmlkZXJzIGxpc3RlZCBvbiB0aGUgZGVmaW5pdGlvbiBpdHNlbGYuXG4gICAgY29uc3QgZGVmUHJvdmlkZXJzID0gZGVmLnByb3ZpZGVycztcbiAgICBpZiAoZGVmUHJvdmlkZXJzICE9IG51bGwgJiYgIWlzRHVwbGljYXRlKSB7XG4gICAgICBjb25zdCBpbmplY3RvclR5cGUgPSBkZWZPcldyYXBwZWREZWYgYXMgSW5qZWN0b3JUeXBlPGFueT47XG4gICAgICBkZWVwRm9yRWFjaChcbiAgICAgICAgICBkZWZQcm92aWRlcnMsIHByb3ZpZGVyID0+IHRoaXMucHJvY2Vzc1Byb3ZpZGVyKHByb3ZpZGVyLCBpbmplY3RvclR5cGUsIGRlZlByb3ZpZGVycykpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIG5nTW9kdWxlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgKGRlZk9yV3JhcHBlZERlZiBhcyBJbmplY3RvclR5cGVXaXRoUHJvdmlkZXJzPGFueT4pLnByb3ZpZGVycyAhPT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIGEgYFNpbmdsZVByb3ZpZGVyYCBhbmQgYWRkIGl0LlxuICAgKi9cbiAgcHJpdmF0ZSBwcm9jZXNzUHJvdmlkZXIoXG4gICAgICBwcm92aWRlcjogU2luZ2xlUHJvdmlkZXIsIG5nTW9kdWxlVHlwZTogSW5qZWN0b3JUeXBlPGFueT4sIHByb3ZpZGVyczogYW55W10pOiB2b2lkIHtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHRva2VuIGZyb20gdGhlIHByb3ZpZGVyLiBFaXRoZXIgaXQncyBpdHMgb3duIHRva2VuLCBvciBoYXMgYSB7cHJvdmlkZTogLi4ufVxuICAgIC8vIHByb3BlcnR5LlxuICAgIHByb3ZpZGVyID0gcmVzb2x2ZUZvcndhcmRSZWYocHJvdmlkZXIpO1xuICAgIGxldCB0b2tlbjogYW55ID1cbiAgICAgICAgaXNUeXBlUHJvdmlkZXIocHJvdmlkZXIpID8gcHJvdmlkZXIgOiByZXNvbHZlRm9yd2FyZFJlZihwcm92aWRlciAmJiBwcm92aWRlci5wcm92aWRlKTtcblxuICAgIC8vIENvbnN0cnVjdCBhIGBSZWNvcmRgIGZvciB0aGUgcHJvdmlkZXIuXG4gICAgY29uc3QgcmVjb3JkID0gcHJvdmlkZXJUb1JlY29yZChwcm92aWRlciwgbmdNb2R1bGVUeXBlLCBwcm92aWRlcnMpO1xuXG4gICAgaWYgKCFpc1R5cGVQcm92aWRlcihwcm92aWRlcikgJiYgcHJvdmlkZXIubXVsdGkgPT09IHRydWUpIHtcbiAgICAgIC8vIElmIHRoZSBwcm92aWRlciBpbmRpY2F0ZXMgdGhhdCBpdCdzIGEgbXVsdGktcHJvdmlkZXIsIHByb2Nlc3MgaXQgc3BlY2lhbGx5LlxuICAgICAgLy8gRmlyc3QgY2hlY2sgd2hldGhlciBpdCdzIGJlZW4gZGVmaW5lZCBhbHJlYWR5LlxuICAgICAgbGV0IG11bHRpUmVjb3JkID0gdGhpcy5yZWNvcmRzLmdldCh0b2tlbik7XG4gICAgICBpZiAobXVsdGlSZWNvcmQpIHtcbiAgICAgICAgLy8gSXQgaGFzLiBUaHJvdyBhIG5pY2UgZXJyb3IgaWZcbiAgICAgICAgaWYgKG11bHRpUmVjb3JkLm11bHRpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvd01peGVkTXVsdGlQcm92aWRlckVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpUmVjb3JkID0gbWFrZVJlY29yZCh1bmRlZmluZWQsIE5PVF9ZRVQsIHRydWUpO1xuICAgICAgICBtdWx0aVJlY29yZC5mYWN0b3J5ID0gKCkgPT4gaW5qZWN0QXJncyhtdWx0aVJlY29yZCEubXVsdGkhKTtcbiAgICAgICAgdGhpcy5yZWNvcmRzLnNldCh0b2tlbiwgbXVsdGlSZWNvcmQpO1xuICAgICAgfVxuICAgICAgdG9rZW4gPSBwcm92aWRlcjtcbiAgICAgIG11bHRpUmVjb3JkLm11bHRpIS5wdXNoKHByb3ZpZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLnJlY29yZHMuZ2V0KHRva2VuKTtcbiAgICAgIGlmIChleGlzdGluZyAmJiBleGlzdGluZy5tdWx0aSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93TWl4ZWRNdWx0aVByb3ZpZGVyRXJyb3IoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWNvcmRzLnNldCh0b2tlbiwgcmVjb3JkKTtcbiAgfVxuXG4gIHByaXZhdGUgaHlkcmF0ZTxUPih0b2tlbjogVHlwZTxUPnxJbmplY3Rpb25Ub2tlbjxUPiwgcmVjb3JkOiBSZWNvcmQ8VD4pOiBUIHtcbiAgICBpZiAocmVjb3JkLnZhbHVlID09PSBDSVJDVUxBUikge1xuICAgICAgdGhyb3dDeWNsaWNEZXBlbmRlbmN5RXJyb3Ioc3RyaW5naWZ5KHRva2VuKSk7XG4gICAgfSBlbHNlIGlmIChyZWNvcmQudmFsdWUgPT09IE5PVF9ZRVQpIHtcbiAgICAgIHJlY29yZC52YWx1ZSA9IENJUkNVTEFSO1xuICAgICAgcmVjb3JkLnZhbHVlID0gcmVjb3JkLmZhY3RvcnkhKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVjb3JkLnZhbHVlID09PSAnb2JqZWN0JyAmJiByZWNvcmQudmFsdWUgJiYgaGFzT25EZXN0cm95KHJlY29yZC52YWx1ZSkpIHtcbiAgICAgIHRoaXMub25EZXN0cm95LmFkZChyZWNvcmQudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVjb3JkLnZhbHVlIGFzIFQ7XG4gIH1cblxuICBwcml2YXRlIGluamVjdGFibGVEZWZJblNjb3BlKGRlZjogybXJtUluamVjdGFibGVEZWY8YW55Pik6IGJvb2xlYW4ge1xuICAgIGlmICghZGVmLnByb3ZpZGVkSW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWYucHJvdmlkZWRJbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkZWYucHJvdmlkZWRJbiA9PT0gJ2FueScgfHwgKGRlZi5wcm92aWRlZEluID09PSB0aGlzLnNjb3BlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3JEZWZUeXBlcy5oYXMoZGVmLnByb3ZpZGVkSW4pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbmplY3RhYmxlRGVmT3JJbmplY3RvckRlZkZhY3RvcnkodG9rZW46IFR5cGU8YW55PnxJbmplY3Rpb25Ub2tlbjxhbnk+KTogRmFjdG9yeUZuPGFueT4ge1xuICAvLyBNb3N0IHRva2VucyB3aWxsIGhhdmUgYW4gaW5qZWN0YWJsZSBkZWYgZGlyZWN0bHkgb24gdGhlbSwgd2hpY2ggc3BlY2lmaWVzIGEgZmFjdG9yeSBkaXJlY3RseS5cbiAgY29uc3QgaW5qZWN0YWJsZURlZiA9IGdldEluamVjdGFibGVEZWYodG9rZW4pO1xuICBjb25zdCBmYWN0b3J5ID0gaW5qZWN0YWJsZURlZiAhPT0gbnVsbCA/IGluamVjdGFibGVEZWYuZmFjdG9yeSA6IGdldEZhY3RvcnlEZWYodG9rZW4pO1xuXG4gIGlmIChmYWN0b3J5ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhY3Rvcnk7XG4gIH1cblxuICAvLyBJZiB0aGUgdG9rZW4gaXMgYW4gTmdNb2R1bGUsIGl0J3MgYWxzbyBpbmplY3RhYmxlIGJ1dCB0aGUgZmFjdG9yeSBpcyBvbiBpdHMgaW5qZWN0b3IgZGVmXG4gIC8vIChgybVpbmpgKVxuICBjb25zdCBpbmplY3RvckRlZiA9IGdldEluamVjdG9yRGVmKHRva2VuKTtcbiAgaWYgKGluamVjdG9yRGVmICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGluamVjdG9yRGVmLmZhY3Rvcnk7XG4gIH1cblxuICAvLyBJbmplY3Rpb25Ub2tlbnMgc2hvdWxkIGhhdmUgYW4gaW5qZWN0YWJsZSBkZWYgKMm1cHJvdikgYW5kIHRodXMgc2hvdWxkIGJlIGhhbmRsZWQgYWJvdmUuXG4gIC8vIElmIGl0J3MgbWlzc2luZyB0aGF0LCBpdCdzIGFuIGVycm9yLlxuICBpZiAodG9rZW4gaW5zdGFuY2VvZiBJbmplY3Rpb25Ub2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgVG9rZW4gJHtzdHJpbmdpZnkodG9rZW4pfSBpcyBtaXNzaW5nIGEgybVwcm92IGRlZmluaXRpb24uYCk7XG4gIH1cblxuICAvLyBVbmRlY29yYXRlZCB0eXBlcyBjYW4gc29tZXRpbWVzIGJlIGNyZWF0ZWQgaWYgdGhleSBoYXZlIG5vIGNvbnN0cnVjdG9yIGFyZ3VtZW50cy5cbiAgaWYgKHRva2VuIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gZ2V0VW5kZWNvcmF0ZWRJbmplY3RhYmxlRmFjdG9yeSh0b2tlbik7XG4gIH1cblxuICAvLyBUaGVyZSB3YXMgbm8gd2F5IHRvIHJlc29sdmUgYSBmYWN0b3J5IGZvciB0aGlzIHRva2VuLlxuICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVhY2hhYmxlJyk7XG59XG5cbmZ1bmN0aW9uIGdldFVuZGVjb3JhdGVkSW5qZWN0YWJsZUZhY3RvcnkodG9rZW46IEZ1bmN0aW9uKSB7XG4gIC8vIElmIHRoZSB0b2tlbiBoYXMgcGFyYW1ldGVycyB0aGVuIGl0IGhhcyBkZXBlbmRlbmNpZXMgdGhhdCB3ZSBjYW5ub3QgcmVzb2x2ZSBpbXBsaWNpdGx5LlxuICBjb25zdCBwYXJhbUxlbmd0aCA9IHRva2VuLmxlbmd0aDtcbiAgaWYgKHBhcmFtTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGFyZ3M6IHN0cmluZ1tdID0gbmV3QXJyYXkocGFyYW1MZW5ndGgsICc/Jyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCByZXNvbHZlIGFsbCBwYXJhbWV0ZXJzIGZvciAke3N0cmluZ2lmeSh0b2tlbil9OiAoJHthcmdzLmpvaW4oJywgJyl9KS5gKTtcbiAgfVxuXG4gIC8vIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBhcHBlYXJzIHRvIGhhdmUgbm8gcGFyYW1ldGVycy5cbiAgLy8gVGhpcyBtaWdodCBiZSBiZWNhdXNlIGl0IGluaGVyaXRzIGZyb20gYSBzdXBlci1jbGFzcy4gSW4gd2hpY2ggY2FzZSwgdXNlIGFuIGluamVjdGFibGVcbiAgLy8gZGVmIGZyb20gYW4gYW5jZXN0b3IgaWYgdGhlcmUgaXMgb25lLlxuICAvLyBPdGhlcndpc2UgdGhpcyByZWFsbHkgaXMgYSBzaW1wbGUgY2xhc3Mgd2l0aCBubyBkZXBlbmRlbmNpZXMsIHNvIHJldHVybiBhIGZhY3RvcnkgdGhhdFxuICAvLyBqdXN0IGluc3RhbnRpYXRlcyB0aGUgemVyby1hcmcgY29uc3RydWN0b3IuXG4gIGNvbnN0IGluaGVyaXRlZEluamVjdGFibGVEZWYgPSBnZXRJbmhlcml0ZWRJbmplY3RhYmxlRGVmKHRva2VuKTtcbiAgaWYgKGluaGVyaXRlZEluamVjdGFibGVEZWYgIT09IG51bGwpIHtcbiAgICByZXR1cm4gKCkgPT4gaW5oZXJpdGVkSW5qZWN0YWJsZURlZi5mYWN0b3J5KHRva2VuIGFzIFR5cGU8YW55Pik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgpID0+IG5ldyAodG9rZW4gYXMgVHlwZTxhbnk+KSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb3ZpZGVyVG9SZWNvcmQoXG4gICAgcHJvdmlkZXI6IFNpbmdsZVByb3ZpZGVyLCBuZ01vZHVsZVR5cGU6IEluamVjdG9yVHlwZTxhbnk+LCBwcm92aWRlcnM6IGFueVtdKTogUmVjb3JkPGFueT4ge1xuICBpZiAoaXNWYWx1ZVByb3ZpZGVyKHByb3ZpZGVyKSkge1xuICAgIHJldHVybiBtYWtlUmVjb3JkKHVuZGVmaW5lZCwgcHJvdmlkZXIudXNlVmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZhY3Rvcnk6ICgoKSA9PiBhbnkpfHVuZGVmaW5lZCA9IHByb3ZpZGVyVG9GYWN0b3J5KHByb3ZpZGVyLCBuZ01vZHVsZVR5cGUsIHByb3ZpZGVycyk7XG4gICAgcmV0dXJuIG1ha2VSZWNvcmQoZmFjdG9yeSwgTk9UX1lFVCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGBTaW5nbGVQcm92aWRlcmAgaW50byBhIGZhY3RvcnkgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHByb3ZpZGVyIHByb3ZpZGVyIHRvIGNvbnZlcnQgdG8gZmFjdG9yeVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZXJUb0ZhY3RvcnkoXG4gICAgcHJvdmlkZXI6IFNpbmdsZVByb3ZpZGVyLCBuZ01vZHVsZVR5cGU/OiBJbmplY3RvclR5cGU8YW55PiwgcHJvdmlkZXJzPzogYW55W10pOiAoKSA9PiBhbnkge1xuICBsZXQgZmFjdG9yeTogKCgpID0+IGFueSl8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBpZiAoaXNUeXBlUHJvdmlkZXIocHJvdmlkZXIpKSB7XG4gICAgY29uc3QgdW53cmFwcGVkUHJvdmlkZXIgPSByZXNvbHZlRm9yd2FyZFJlZihwcm92aWRlcik7XG4gICAgcmV0dXJuIGdldEZhY3RvcnlEZWYodW53cmFwcGVkUHJvdmlkZXIpIHx8IGluamVjdGFibGVEZWZPckluamVjdG9yRGVmRmFjdG9yeSh1bndyYXBwZWRQcm92aWRlcik7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzVmFsdWVQcm92aWRlcihwcm92aWRlcikpIHtcbiAgICAgIGZhY3RvcnkgPSAoKSA9PiByZXNvbHZlRm9yd2FyZFJlZihwcm92aWRlci51c2VWYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc0ZhY3RvcnlQcm92aWRlcihwcm92aWRlcikpIHtcbiAgICAgIGZhY3RvcnkgPSAoKSA9PiBwcm92aWRlci51c2VGYWN0b3J5KC4uLmluamVjdEFyZ3MocHJvdmlkZXIuZGVwcyB8fCBbXSkpO1xuICAgIH0gZWxzZSBpZiAoaXNFeGlzdGluZ1Byb3ZpZGVyKHByb3ZpZGVyKSkge1xuICAgICAgZmFjdG9yeSA9ICgpID0+IMm1ybVpbmplY3QocmVzb2x2ZUZvcndhcmRSZWYocHJvdmlkZXIudXNlRXhpc3RpbmcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2xhc3NSZWYgPSByZXNvbHZlRm9yd2FyZFJlZihcbiAgICAgICAgICBwcm92aWRlciAmJlxuICAgICAgICAgICgocHJvdmlkZXIgYXMgU3RhdGljQ2xhc3NQcm92aWRlciB8IENsYXNzUHJvdmlkZXIpLnVzZUNsYXNzIHx8IHByb3ZpZGVyLnByb3ZpZGUpKTtcbiAgICAgIGlmICghY2xhc3NSZWYpIHtcbiAgICAgICAgdGhyb3dJbnZhbGlkUHJvdmlkZXJFcnJvcihuZ01vZHVsZVR5cGUsIHByb3ZpZGVycywgcHJvdmlkZXIpO1xuICAgICAgfVxuICAgICAgaWYgKGhhc0RlcHMocHJvdmlkZXIpKSB7XG4gICAgICAgIGZhY3RvcnkgPSAoKSA9PiBuZXcgKGNsYXNzUmVmKSguLi5pbmplY3RBcmdzKHByb3ZpZGVyLmRlcHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXRGYWN0b3J5RGVmKGNsYXNzUmVmKSB8fCBpbmplY3RhYmxlRGVmT3JJbmplY3RvckRlZkZhY3RvcnkoY2xhc3NSZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gbWFrZVJlY29yZDxUPihcbiAgICBmYWN0b3J5OiAoKCkgPT4gVCl8dW5kZWZpbmVkLCB2YWx1ZTogVHx7fSwgbXVsdGk6IGJvb2xlYW4gPSBmYWxzZSk6IFJlY29yZDxUPiB7XG4gIHJldHVybiB7XG4gICAgZmFjdG9yeTogZmFjdG9yeSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbXVsdGk6IG11bHRpID8gW10gOiB1bmRlZmluZWQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsdWVQcm92aWRlcih2YWx1ZTogU2luZ2xlUHJvdmlkZXIpOiB2YWx1ZSBpcyBWYWx1ZVByb3ZpZGVyIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiBVU0VfVkFMVUUgaW4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzRXhpc3RpbmdQcm92aWRlcih2YWx1ZTogU2luZ2xlUHJvdmlkZXIpOiB2YWx1ZSBpcyBFeGlzdGluZ1Byb3ZpZGVyIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmICh2YWx1ZSBhcyBFeGlzdGluZ1Byb3ZpZGVyKS51c2VFeGlzdGluZyk7XG59XG5cbmZ1bmN0aW9uIGlzRmFjdG9yeVByb3ZpZGVyKHZhbHVlOiBTaW5nbGVQcm92aWRlcik6IHZhbHVlIGlzIEZhY3RvcnlQcm92aWRlciB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiAodmFsdWUgYXMgRmFjdG9yeVByb3ZpZGVyKS51c2VGYWN0b3J5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZVByb3ZpZGVyKHZhbHVlOiBTaW5nbGVQcm92aWRlcik6IHZhbHVlIGlzIFR5cGVQcm92aWRlciB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NsYXNzUHJvdmlkZXIodmFsdWU6IFNpbmdsZVByb3ZpZGVyKTogdmFsdWUgaXMgQ2xhc3NQcm92aWRlciB7XG4gIHJldHVybiAhISh2YWx1ZSBhcyBTdGF0aWNDbGFzc1Byb3ZpZGVyIHwgQ2xhc3NQcm92aWRlcikudXNlQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIGhhc0RlcHModmFsdWU6IENsYXNzUHJvdmlkZXJ8Q29uc3RydWN0b3JQcm92aWRlcnxcbiAgICAgICAgICAgICAgICAgU3RhdGljQ2xhc3NQcm92aWRlcik6IHZhbHVlIGlzIENsYXNzUHJvdmlkZXIme2RlcHM6IGFueVtdfSB7XG4gIHJldHVybiAhISh2YWx1ZSBhcyBhbnkpLmRlcHM7XG59XG5cbmZ1bmN0aW9uIGhhc09uRGVzdHJveSh2YWx1ZTogYW55KTogdmFsdWUgaXMgT25EZXN0cm95IHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiAodmFsdWUgYXMgT25EZXN0cm95KS5uZ09uRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gY291bGRCZUluamVjdGFibGVUeXBlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBUeXBlPGFueT58SW5qZWN0aW9uVG9rZW48YW55PiB7XG4gIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBJbmplY3Rpb25Ub2tlbik7XG59XG4iXX0=