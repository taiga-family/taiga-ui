/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/di/reflective_injector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injector } from './injector';
import { THROW_IF_NOT_FOUND } from './injector_compatibility';
import { Self, SkipSelf } from './metadata';
import { cyclicDependencyError, instantiationError, noProviderError, outOfBoundsError } from './reflective_errors';
import { ReflectiveKey } from './reflective_key';
import { resolveReflectiveProviders } from './reflective_provider';
// Threshold for the dynamic version
/** @type {?} */
const UNDEFINED = {};
/**
 * A ReflectiveDependency injection container used for instantiating objects and resolving
 * dependencies.
 *
 * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
 * constructor dependencies.
 *
 * In typical use, application code asks for the dependencies in the constructor and they are
 * resolved by the `Injector`.
 *
 * \@usageNotes
 * ### Example
 *
 * The following example creates an `Injector` configured to create `Engine` and `Car`.
 *
 * ```typescript
 * \@Injectable()
 * class Engine {
 * }
 *
 * \@Injectable()
 * class Car {
 *   constructor(public engine:Engine) {}
 * }
 *
 * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
 * var car = injector.get(Car);
 * expect(car instanceof Car).toBe(true);
 * expect(car.engine instanceof Engine).toBe(true);
 * ```
 *
 * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
 * resolve all of the object's dependencies automatically.
 *
 * @deprecated from v5 - slow and brings in a lot of code, Use `Injector.create` instead.
 * \@publicApi
 * @abstract
 */
export class ReflectiveInjector {
    /**
     * Turns an array of provider definitions into an array of resolved providers.
     *
     * A resolution is a process of flattening multiple nested arrays and converting individual
     * providers into an array of `ResolvedReflectiveProvider`s.
     *
     * \@usageNotes
     * ### Example
     *
     * ```typescript
     * \@Injectable()
     * class Engine {
     * }
     *  /
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
     *
     * expect(providers.length).toEqual(2);
     *
     * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
     * expect(providers[0].key.displayName).toBe("Car");
     * expect(providers[0].dependencies.length).toEqual(1);
     * expect(providers[0].factory).toBeDefined();
     *
     * expect(providers[1].key.displayName).toBe("Engine");
     * });
     * ```
     *
     * @param {?} providers
     * @return {?}
     */
    static resolve(providers) {
        return resolveReflectiveProviders(providers);
    }
    /**
     * Resolves an array of providers and creates an injector from those providers.
     *
     * The passed-in providers can be an array of `Type`, `Provider`,
     * or a recursive array of more providers.
     *
     * \@usageNotes
     * ### Example
     *
     * ```typescript
     * \@Injectable()
     * class Engine {
     * }
     *  /
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
     * expect(injector.get(Car) instanceof Car).toBe(true);
     * ```
     * @param {?} providers
     * @param {?=} parent
     * @return {?}
     */
    static resolveAndCreate(providers, parent) {
        /** @type {?} */
        const ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
        return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
    }
    /**
     * Creates an injector from previously resolved providers.
     *
     * This API is the recommended way to construct injectors in performance-sensitive parts.
     *
     * \@usageNotes
     * ### Example
     *
     * ```typescript
     * \@Injectable()
     * class Engine {
     * }
     *  /
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var providers = ReflectiveInjector.resolve([Car, Engine]);
     * var injector = ReflectiveInjector.fromResolvedProviders(providers);
     * expect(injector.get(Car) instanceof Car).toBe(true);
     * ```
     * @param {?} providers
     * @param {?=} parent
     * @return {?}
     */
    static fromResolvedProviders(providers, parent) {
        return new ReflectiveInjector_(providers, parent);
    }
}
if (false) {
    /**
     * Parent of this injector.
     *
     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
     * -->
     * @abstract
     * @return {?}
     */
    ReflectiveInjector.prototype.parent = function () { };
    /**
     * Resolves an array of providers and creates a child injector from those providers.
     *
     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
     * -->
     *
     * The passed-in providers can be an array of `Type`, `Provider`,
     * or a recursive array of more providers.
     *
     * \@usageNotes
     * ### Example
     *
     * ```typescript
     * class ParentProvider {}
     * class ChildProvider {}
     *
     * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
     * var child = parent.resolveAndCreateChild([ChildProvider]);
     *
     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
     * ```
     * @abstract
     * @param {?} providers
     * @return {?}
     */
    ReflectiveInjector.prototype.resolveAndCreateChild = function (providers) { };
    /**
     * Creates a child injector from previously resolved providers.
     *
     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
     * -->
     *
     * This API is the recommended way to construct injectors in performance-sensitive parts.
     *
     * \@usageNotes
     * ### Example
     *
     * ```typescript
     * class ParentProvider {}
     * class ChildProvider {}
     *
     * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
     * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
     *
     * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
     * var child = parent.createChildFromResolved(childProviders);
     *
     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
     * ```
     * @abstract
     * @param {?} providers
     * @return {?}
     */
    ReflectiveInjector.prototype.createChildFromResolved = function (providers) { };
    /**
     * Resolves a provider and instantiates an object in the context of the injector.
     *
     * The created object does not get cached by the injector.
     *
     * \@usageNotes
     * ### Example
     *
     * ```typescript
     * \@Injectable()
     * class Engine {
     * }
     *  /
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
     *
     * var car = injector.resolveAndInstantiate(Car);
     * expect(car.engine).toBe(injector.get(Engine));
     * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
     * ```
     * @abstract
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjector.prototype.resolveAndInstantiate = function (provider) { };
    /**
     * Instantiates an object using a resolved provider in the context of the injector.
     *
     * The created object does not get cached by the injector.
     *
     * \@usageNotes
     * ### Example
     *
     * ```typescript
     * \@Injectable()
     * class Engine {
     * }
     *  /
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
     * var carProvider = ReflectiveInjector.resolve([Car])[0];
     * var car = injector.instantiateResolved(carProvider);
     * expect(car.engine).toBe(injector.get(Engine));
     * expect(car).not.toBe(injector.instantiateResolved(carProvider));
     * ```
     * @abstract
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjector.prototype.instantiateResolved = function (provider) { };
    /**
     * @abstract
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    ReflectiveInjector.prototype.get = function (token, notFoundValue) { };
}
export class ReflectiveInjector_ {
    /**
     * Private
     * @param {?} _providers
     * @param {?=} _parent
     */
    constructor(_providers, _parent) {
        /**
         * \@internal
         */
        this._constructionCounter = 0;
        this._providers = _providers;
        this.parent = _parent || null;
        /** @type {?} */
        const len = _providers.length;
        this.keyIds = [];
        this.objs = [];
        for (let i = 0; i < len; i++) {
            this.keyIds[i] = _providers[i].key.id;
            this.objs[i] = UNDEFINED;
        }
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    get(token, notFoundValue = THROW_IF_NOT_FOUND) {
        return this._getByKey(ReflectiveKey.get(token), null, notFoundValue);
    }
    /**
     * @param {?} providers
     * @return {?}
     */
    resolveAndCreateChild(providers) {
        /** @type {?} */
        const ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
        return this.createChildFromResolved(ResolvedReflectiveProviders);
    }
    /**
     * @param {?} providers
     * @return {?}
     */
    createChildFromResolved(providers) {
        /** @type {?} */
        const inj = new ReflectiveInjector_(providers);
        ((/** @type {?} */ (inj))).parent = this;
        return inj;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    resolveAndInstantiate(provider) {
        return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    instantiateResolved(provider) {
        return this._instantiateProvider(provider);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getProviderAtIndex(index) {
        if (index < 0 || index >= this._providers.length) {
            throw outOfBoundsError(index);
        }
        return this._providers[index];
    }
    /**
     * \@internal
     * @param {?} provider
     * @return {?}
     */
    _new(provider) {
        if (this._constructionCounter++ > this._getMaxNumberOfObjects()) {
            throw cyclicDependencyError(this, provider.key);
        }
        return this._instantiateProvider(provider);
    }
    /**
     * @private
     * @return {?}
     */
    _getMaxNumberOfObjects() {
        return this.objs.length;
    }
    /**
     * @private
     * @param {?} provider
     * @return {?}
     */
    _instantiateProvider(provider) {
        if (provider.multiProvider) {
            /** @type {?} */
            const res = [];
            for (let i = 0; i < provider.resolvedFactories.length; ++i) {
                res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
            }
            return res;
        }
        else {
            return this._instantiate(provider, provider.resolvedFactories[0]);
        }
    }
    /**
     * @private
     * @param {?} provider
     * @param {?} ResolvedReflectiveFactory
     * @return {?}
     */
    _instantiate(provider, ResolvedReflectiveFactory) {
        /** @type {?} */
        const factory = ResolvedReflectiveFactory.factory;
        /** @type {?} */
        let deps;
        try {
            deps =
                ResolvedReflectiveFactory.dependencies.map((/**
                 * @param {?} dep
                 * @return {?}
                 */
                dep => this._getByReflectiveDependency(dep)));
        }
        catch (e) {
            if (e.addKey) {
                e.addKey(this, provider.key);
            }
            throw e;
        }
        /** @type {?} */
        let obj;
        try {
            obj = factory(...deps);
        }
        catch (e) {
            throw instantiationError(this, e, e.stack, provider.key);
        }
        return obj;
    }
    /**
     * @private
     * @param {?} dep
     * @return {?}
     */
    _getByReflectiveDependency(dep) {
        return this._getByKey(dep.key, dep.visibility, dep.optional ? null : THROW_IF_NOT_FOUND);
    }
    /**
     * @private
     * @param {?} key
     * @param {?} visibility
     * @param {?} notFoundValue
     * @return {?}
     */
    _getByKey(key, visibility, notFoundValue) {
        if (key === ReflectiveInjector_.INJECTOR_KEY) {
            return this;
        }
        if (visibility instanceof Self) {
            return this._getByKeySelf(key, notFoundValue);
        }
        else {
            return this._getByKeyDefault(key, notFoundValue, visibility);
        }
    }
    /**
     * @private
     * @param {?} keyId
     * @return {?}
     */
    _getObjByKeyId(keyId) {
        for (let i = 0; i < this.keyIds.length; i++) {
            if (this.keyIds[i] === keyId) {
                if (this.objs[i] === UNDEFINED) {
                    this.objs[i] = this._new(this._providers[i]);
                }
                return this.objs[i];
            }
        }
        return UNDEFINED;
    }
    /**
     * \@internal
     * @param {?} key
     * @param {?} notFoundValue
     * @return {?}
     */
    _throwOrNull(key, notFoundValue) {
        if (notFoundValue !== THROW_IF_NOT_FOUND) {
            return notFoundValue;
        }
        else {
            throw noProviderError(this, key);
        }
    }
    /**
     * \@internal
     * @param {?} key
     * @param {?} notFoundValue
     * @return {?}
     */
    _getByKeySelf(key, notFoundValue) {
        /** @type {?} */
        const obj = this._getObjByKeyId(key.id);
        return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
    }
    /**
     * \@internal
     * @param {?} key
     * @param {?} notFoundValue
     * @param {?} visibility
     * @return {?}
     */
    _getByKeyDefault(key, notFoundValue, visibility) {
        /** @type {?} */
        let inj;
        if (visibility instanceof SkipSelf) {
            inj = this.parent;
        }
        else {
            inj = this;
        }
        while (inj instanceof ReflectiveInjector_) {
            /** @type {?} */
            const inj_ = (/** @type {?} */ (inj));
            /** @type {?} */
            const obj = inj_._getObjByKeyId(key.id);
            if (obj !== UNDEFINED)
                return obj;
            inj = inj_.parent;
        }
        if (inj !== null) {
            return inj.get(key.token, notFoundValue);
        }
        else {
            return this._throwOrNull(key, notFoundValue);
        }
    }
    /**
     * @return {?}
     */
    get displayName() {
        /** @type {?} */
        const providers = _mapProviders(this, (/**
         * @param {?} b
         * @return {?}
         */
        (b) => ' "' + b.key.displayName + '" '))
            .join(', ');
        return `ReflectiveInjector(providers: [${providers}])`;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.displayName;
    }
}
ReflectiveInjector_.INJECTOR_KEY = ReflectiveKey.get(Injector);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReflectiveInjector_.INJECTOR_KEY;
    /**
     * \@internal
     * @type {?}
     */
    ReflectiveInjector_.prototype._constructionCounter;
    /**
     * \@internal
     * @type {?}
     */
    ReflectiveInjector_.prototype._providers;
    /** @type {?} */
    ReflectiveInjector_.prototype.parent;
    /** @type {?} */
    ReflectiveInjector_.prototype.keyIds;
    /** @type {?} */
    ReflectiveInjector_.prototype.objs;
}
/**
 * @param {?} injector
 * @param {?} fn
 * @return {?}
 */
function _mapProviders(injector, fn) {
    /** @type {?} */
    const res = [];
    for (let i = 0; i < injector._providers.length; ++i) {
        res[i] = fn(injector.getProviderAtIndex(i));
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGl2ZV9pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL3JlZmxlY3RpdmVfaW5qZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RCxPQUFPLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUMscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakgsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBOEUsMEJBQTBCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7O01BSXhJLFNBQVMsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q3BCLE1BQU0sT0FBZ0Isa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFxQjtRQUNsQyxPQUFPLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUJELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFxQixFQUFFLE1BQWlCOztjQUN4RCwyQkFBMkIsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3pFLE9BQU8sa0JBQWtCLENBQUMscUJBQXFCLENBQUMsMkJBQTJCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3QztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQge1RIUk9XX0lGX05PVF9GT1VORH0gZnJvbSAnLi9pbmplY3Rvcl9jb21wYXRpYmlsaXR5JztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJy4vaW50ZXJmYWNlL3Byb3ZpZGVyJztcbmltcG9ydCB7U2VsZiwgU2tpcFNlbGZ9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHtjeWNsaWNEZXBlbmRlbmN5RXJyb3IsIGluc3RhbnRpYXRpb25FcnJvciwgbm9Qcm92aWRlckVycm9yLCBvdXRPZkJvdW5kc0Vycm9yfSBmcm9tICcuL3JlZmxlY3RpdmVfZXJyb3JzJztcbmltcG9ydCB7UmVmbGVjdGl2ZUtleX0gZnJvbSAnLi9yZWZsZWN0aXZlX2tleSc7XG5pbXBvcnQge1JlZmxlY3RpdmVEZXBlbmRlbmN5LCBSZXNvbHZlZFJlZmxlY3RpdmVGYWN0b3J5LCBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlciwgcmVzb2x2ZVJlZmxlY3RpdmVQcm92aWRlcnN9IGZyb20gJy4vcmVmbGVjdGl2ZV9wcm92aWRlcic7XG5cblxuLy8gVGhyZXNob2xkIGZvciB0aGUgZHluYW1pYyB2ZXJzaW9uXG5jb25zdCBVTkRFRklORUQgPSB7fTtcblxuLyoqXG4gKiBBIFJlZmxlY3RpdmVEZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgdXNlZCBmb3IgaW5zdGFudGlhdGluZyBvYmplY3RzIGFuZCByZXNvbHZpbmdcbiAqIGRlcGVuZGVuY2llcy5cbiAqXG4gKiBBbiBgSW5qZWN0b3JgIGlzIGEgcmVwbGFjZW1lbnQgZm9yIGEgYG5ld2Agb3BlcmF0b3IsIHdoaWNoIGNhbiBhdXRvbWF0aWNhbGx5IHJlc29sdmUgdGhlXG4gKiBjb25zdHJ1Y3RvciBkZXBlbmRlbmNpZXMuXG4gKlxuICogSW4gdHlwaWNhbCB1c2UsIGFwcGxpY2F0aW9uIGNvZGUgYXNrcyBmb3IgdGhlIGRlcGVuZGVuY2llcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHRoZXkgYXJlXG4gKiByZXNvbHZlZCBieSB0aGUgYEluamVjdG9yYC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgY3JlYXRlcyBhbiBgSW5qZWN0b3JgIGNvbmZpZ3VyZWQgdG8gY3JlYXRlIGBFbmdpbmVgIGFuZCBgQ2FyYC5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBASW5qZWN0YWJsZSgpXG4gKiBjbGFzcyBFbmdpbmUge1xuICogfVxuICpcbiAqIEBJbmplY3RhYmxlKClcbiAqIGNsYXNzIENhciB7XG4gKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbmdpbmU6RW5naW5lKSB7fVxuICogfVxuICpcbiAqIHZhciBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtDYXIsIEVuZ2luZV0pO1xuICogdmFyIGNhciA9IGluamVjdG9yLmdldChDYXIpO1xuICogZXhwZWN0KGNhciBpbnN0YW5jZW9mIENhcikudG9CZSh0cnVlKTtcbiAqIGV4cGVjdChjYXIuZW5naW5lIGluc3RhbmNlb2YgRW5naW5lKS50b0JlKHRydWUpO1xuICogYGBgXG4gKlxuICogTm90aWNlLCB3ZSBkb24ndCB1c2UgdGhlIGBuZXdgIG9wZXJhdG9yIGJlY2F1c2Ugd2UgZXhwbGljaXRseSB3YW50IHRvIGhhdmUgdGhlIGBJbmplY3RvcmBcbiAqIHJlc29sdmUgYWxsIG9mIHRoZSBvYmplY3QncyBkZXBlbmRlbmNpZXMgYXV0b21hdGljYWxseS5cbiAqXG4gKiBAZGVwcmVjYXRlZCBmcm9tIHY1IC0gc2xvdyBhbmQgYnJpbmdzIGluIGEgbG90IG9mIGNvZGUsIFVzZSBgSW5qZWN0b3IuY3JlYXRlYCBpbnN0ZWFkLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVmbGVjdGl2ZUluamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICAvKipcbiAgICogVHVybnMgYW4gYXJyYXkgb2YgcHJvdmlkZXIgZGVmaW5pdGlvbnMgaW50byBhbiBhcnJheSBvZiByZXNvbHZlZCBwcm92aWRlcnMuXG4gICAqXG4gICAqIEEgcmVzb2x1dGlvbiBpcyBhIHByb2Nlc3Mgb2YgZmxhdHRlbmluZyBtdWx0aXBsZSBuZXN0ZWQgYXJyYXlzIGFuZCBjb252ZXJ0aW5nIGluZGl2aWR1YWxcbiAgICogcHJvdmlkZXJzIGludG8gYW4gYXJyYXkgb2YgYFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyYHMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogQEluamVjdGFibGUoKVxuICAgKiBjbGFzcyBFbmdpbmUge1xuICAgKiB9XG4gICAqXG4gICAqIEBJbmplY3RhYmxlKClcbiAgICogY2xhc3MgQ2FyIHtcbiAgICogICBjb25zdHJ1Y3RvcihwdWJsaWMgZW5naW5lOkVuZ2luZSkge31cbiAgICogfVxuICAgKlxuICAgKiB2YXIgcHJvdmlkZXJzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoW0NhciwgW1tFbmdpbmVdXV0pO1xuICAgKlxuICAgKiBleHBlY3QocHJvdmlkZXJzLmxlbmd0aCkudG9FcXVhbCgyKTtcbiAgICpcbiAgICogZXhwZWN0KHByb3ZpZGVyc1swXSBpbnN0YW5jZW9mIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyKS50b0JlKHRydWUpO1xuICAgKiBleHBlY3QocHJvdmlkZXJzWzBdLmtleS5kaXNwbGF5TmFtZSkudG9CZShcIkNhclwiKTtcbiAgICogZXhwZWN0KHByb3ZpZGVyc1swXS5kZXBlbmRlbmNpZXMubGVuZ3RoKS50b0VxdWFsKDEpO1xuICAgKiBleHBlY3QocHJvdmlkZXJzWzBdLmZhY3RvcnkpLnRvQmVEZWZpbmVkKCk7XG4gICAqXG4gICAqIGV4cGVjdChwcm92aWRlcnNbMV0ua2V5LmRpc3BsYXlOYW1lKS50b0JlKFwiRW5naW5lXCIpO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqL1xuICBzdGF0aWMgcmVzb2x2ZShwcm92aWRlcnM6IFByb3ZpZGVyW10pOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdIHtcbiAgICByZXR1cm4gcmVzb2x2ZVJlZmxlY3RpdmVQcm92aWRlcnMocHJvdmlkZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhbiBhcnJheSBvZiBwcm92aWRlcnMgYW5kIGNyZWF0ZXMgYW4gaW5qZWN0b3IgZnJvbSB0aG9zZSBwcm92aWRlcnMuXG4gICAqXG4gICAqIFRoZSBwYXNzZWQtaW4gcHJvdmlkZXJzIGNhbiBiZSBhbiBhcnJheSBvZiBgVHlwZWAsIGBQcm92aWRlcmAsXG4gICAqIG9yIGEgcmVjdXJzaXZlIGFycmF5IG9mIG1vcmUgcHJvdmlkZXJzLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIEBJbmplY3RhYmxlKClcbiAgICogY2xhc3MgRW5naW5lIHtcbiAgICogfVxuICAgKlxuICAgKiBASW5qZWN0YWJsZSgpXG4gICAqIGNsYXNzIENhciB7XG4gICAqICAgY29uc3RydWN0b3IocHVibGljIGVuZ2luZTpFbmdpbmUpIHt9XG4gICAqIH1cbiAgICpcbiAgICogdmFyIGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW0NhciwgRW5naW5lXSk7XG4gICAqIGV4cGVjdChpbmplY3Rvci5nZXQoQ2FyKSBpbnN0YW5jZW9mIENhcikudG9CZSh0cnVlKTtcbiAgICogYGBgXG4gICAqL1xuICBzdGF0aWMgcmVzb2x2ZUFuZENyZWF0ZShwcm92aWRlcnM6IFByb3ZpZGVyW10sIHBhcmVudD86IEluamVjdG9yKTogUmVmbGVjdGl2ZUluamVjdG9yIHtcbiAgICBjb25zdCBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcnMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShwcm92aWRlcnMpO1xuICAgIHJldHVybiBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVycywgcGFyZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluamVjdG9yIGZyb20gcHJldmlvdXNseSByZXNvbHZlZCBwcm92aWRlcnMuXG4gICAqXG4gICAqIFRoaXMgQVBJIGlzIHRoZSByZWNvbW1lbmRlZCB3YXkgdG8gY29uc3RydWN0IGluamVjdG9ycyBpbiBwZXJmb3JtYW5jZS1zZW5zaXRpdmUgcGFydHMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogQEluamVjdGFibGUoKVxuICAgKiBjbGFzcyBFbmdpbmUge1xuICAgKiB9XG4gICAqXG4gICAqIEBJbmplY3RhYmxlKClcbiAgICogY2xhc3MgQ2FyIHtcbiAgICogICBjb25zdHJ1Y3RvcihwdWJsaWMgZW5naW5lOkVuZ2luZSkge31cbiAgICogfVxuICAgKlxuICAgKiB2YXIgcHJvdmlkZXJzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoW0NhciwgRW5naW5lXSk7XG4gICAqIHZhciBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocHJvdmlkZXJzKTtcbiAgICogZXhwZWN0KGluamVjdG9yLmdldChDYXIpIGluc3RhbmNlb2YgQ2FyKS50b0JlKHRydWUpO1xuICAgKiBgYGBcbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzb2x2ZWRQcm92aWRlcnMocHJvdmlkZXJzOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdLCBwYXJlbnQ/OiBJbmplY3Rvcik6XG4gICAgICBSZWZsZWN0aXZlSW5qZWN0b3Ige1xuICAgIHJldHVybiBuZXcgUmVmbGVjdGl2ZUluamVjdG9yXyhwcm92aWRlcnMsIHBhcmVudCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQYXJlbnQgb2YgdGhpcyBpbmplY3Rvci5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIHRoZSBzZWN0aW9uIG9mIHRoZSB1c2VyIGd1aWRlIHRhbGtpbmcgYWJvdXQgaGllcmFyY2hpY2FsIGluamVjdGlvbi5cbiAgICogLS0+XG4gICAqL1xuICBhYnN0cmFjdCBnZXQgcGFyZW50KCk6IEluamVjdG9yfG51bGw7XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGFuIGFycmF5IG9mIHByb3ZpZGVycyBhbmQgY3JlYXRlcyBhIGNoaWxkIGluamVjdG9yIGZyb20gdGhvc2UgcHJvdmlkZXJzLlxuICAgKlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpbmsgdG8gdGhlIHNlY3Rpb24gb2YgdGhlIHVzZXIgZ3VpZGUgdGFsa2luZyBhYm91dCBoaWVyYXJjaGljYWwgaW5qZWN0aW9uLlxuICAgKiAtLT5cbiAgICpcbiAgICogVGhlIHBhc3NlZC1pbiBwcm92aWRlcnMgY2FuIGJlIGFuIGFycmF5IG9mIGBUeXBlYCwgYFByb3ZpZGVyYCxcbiAgICogb3IgYSByZWN1cnNpdmUgYXJyYXkgb2YgbW9yZSBwcm92aWRlcnMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY2xhc3MgUGFyZW50UHJvdmlkZXIge31cbiAgICogY2xhc3MgQ2hpbGRQcm92aWRlciB7fVxuICAgKlxuICAgKiB2YXIgcGFyZW50ID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1BhcmVudFByb3ZpZGVyXSk7XG4gICAqIHZhciBjaGlsZCA9IHBhcmVudC5yZXNvbHZlQW5kQ3JlYXRlQ2hpbGQoW0NoaWxkUHJvdmlkZXJdKTtcbiAgICpcbiAgICogZXhwZWN0KGNoaWxkLmdldChQYXJlbnRQcm92aWRlcikgaW5zdGFuY2VvZiBQYXJlbnRQcm92aWRlcikudG9CZSh0cnVlKTtcbiAgICogZXhwZWN0KGNoaWxkLmdldChDaGlsZFByb3ZpZGVyKSBpbnN0YW5jZW9mIENoaWxkUHJvdmlkZXIpLnRvQmUodHJ1ZSk7XG4gICAqIGV4cGVjdChjaGlsZC5nZXQoUGFyZW50UHJvdmlkZXIpKS50b0JlKHBhcmVudC5nZXQoUGFyZW50UHJvdmlkZXIpKTtcbiAgICogYGBgXG4gICAqL1xuICBhYnN0cmFjdCByZXNvbHZlQW5kQ3JlYXRlQ2hpbGQocHJvdmlkZXJzOiBQcm92aWRlcltdKTogUmVmbGVjdGl2ZUluamVjdG9yO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2hpbGQgaW5qZWN0b3IgZnJvbSBwcmV2aW91c2x5IHJlc29sdmVkIHByb3ZpZGVycy5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIHRoZSBzZWN0aW9uIG9mIHRoZSB1c2VyIGd1aWRlIHRhbGtpbmcgYWJvdXQgaGllcmFyY2hpY2FsIGluamVjdGlvbi5cbiAgICogLS0+XG4gICAqXG4gICAqIFRoaXMgQVBJIGlzIHRoZSByZWNvbW1lbmRlZCB3YXkgdG8gY29uc3RydWN0IGluamVjdG9ycyBpbiBwZXJmb3JtYW5jZS1zZW5zaXRpdmUgcGFydHMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY2xhc3MgUGFyZW50UHJvdmlkZXIge31cbiAgICogY2xhc3MgQ2hpbGRQcm92aWRlciB7fVxuICAgKlxuICAgKiB2YXIgcGFyZW50UHJvdmlkZXJzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoW1BhcmVudFByb3ZpZGVyXSk7XG4gICAqIHZhciBjaGlsZFByb3ZpZGVycyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKFtDaGlsZFByb3ZpZGVyXSk7XG4gICAqXG4gICAqIHZhciBwYXJlbnQgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKHBhcmVudFByb3ZpZGVycyk7XG4gICAqIHZhciBjaGlsZCA9IHBhcmVudC5jcmVhdGVDaGlsZEZyb21SZXNvbHZlZChjaGlsZFByb3ZpZGVycyk7XG4gICAqXG4gICAqIGV4cGVjdChjaGlsZC5nZXQoUGFyZW50UHJvdmlkZXIpIGluc3RhbmNlb2YgUGFyZW50UHJvdmlkZXIpLnRvQmUodHJ1ZSk7XG4gICAqIGV4cGVjdChjaGlsZC5nZXQoQ2hpbGRQcm92aWRlcikgaW5zdGFuY2VvZiBDaGlsZFByb3ZpZGVyKS50b0JlKHRydWUpO1xuICAgKiBleHBlY3QoY2hpbGQuZ2V0KFBhcmVudFByb3ZpZGVyKSkudG9CZShwYXJlbnQuZ2V0KFBhcmVudFByb3ZpZGVyKSk7XG4gICAqIGBgYFxuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlQ2hpbGRGcm9tUmVzb2x2ZWQocHJvdmlkZXJzOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdKTogUmVmbGVjdGl2ZUluamVjdG9yO1xuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIHByb3ZpZGVyIGFuZCBpbnN0YW50aWF0ZXMgYW4gb2JqZWN0IGluIHRoZSBjb250ZXh0IG9mIHRoZSBpbmplY3Rvci5cbiAgICpcbiAgICogVGhlIGNyZWF0ZWQgb2JqZWN0IGRvZXMgbm90IGdldCBjYWNoZWQgYnkgdGhlIGluamVjdG9yLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIEBJbmplY3RhYmxlKClcbiAgICogY2xhc3MgRW5naW5lIHtcbiAgICogfVxuICAgKlxuICAgKiBASW5qZWN0YWJsZSgpXG4gICAqIGNsYXNzIENhciB7XG4gICAqICAgY29uc3RydWN0b3IocHVibGljIGVuZ2luZTpFbmdpbmUpIHt9XG4gICAqIH1cbiAgICpcbiAgICogdmFyIGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW0VuZ2luZV0pO1xuICAgKlxuICAgKiB2YXIgY2FyID0gaW5qZWN0b3IucmVzb2x2ZUFuZEluc3RhbnRpYXRlKENhcik7XG4gICAqIGV4cGVjdChjYXIuZW5naW5lKS50b0JlKGluamVjdG9yLmdldChFbmdpbmUpKTtcbiAgICogZXhwZWN0KGNhcikubm90LnRvQmUoaW5qZWN0b3IucmVzb2x2ZUFuZEluc3RhbnRpYXRlKENhcikpO1xuICAgKiBgYGBcbiAgICovXG4gIGFic3RyYWN0IHJlc29sdmVBbmRJbnN0YW50aWF0ZShwcm92aWRlcjogUHJvdmlkZXIpOiBhbnk7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlcyBhbiBvYmplY3QgdXNpbmcgYSByZXNvbHZlZCBwcm92aWRlciBpbiB0aGUgY29udGV4dCBvZiB0aGUgaW5qZWN0b3IuXG4gICAqXG4gICAqIFRoZSBjcmVhdGVkIG9iamVjdCBkb2VzIG5vdCBnZXQgY2FjaGVkIGJ5IHRoZSBpbmplY3Rvci5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBASW5qZWN0YWJsZSgpXG4gICAqIGNsYXNzIEVuZ2luZSB7XG4gICAqIH1cbiAgICpcbiAgICogQEluamVjdGFibGUoKVxuICAgKiBjbGFzcyBDYXIge1xuICAgKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbmdpbmU6RW5naW5lKSB7fVxuICAgKiB9XG4gICAqXG4gICAqIHZhciBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtFbmdpbmVdKTtcbiAgICogdmFyIGNhclByb3ZpZGVyID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoW0Nhcl0pWzBdO1xuICAgKiB2YXIgY2FyID0gaW5qZWN0b3IuaW5zdGFudGlhdGVSZXNvbHZlZChjYXJQcm92aWRlcik7XG4gICAqIGV4cGVjdChjYXIuZW5naW5lKS50b0JlKGluamVjdG9yLmdldChFbmdpbmUpKTtcbiAgICogZXhwZWN0KGNhcikubm90LnRvQmUoaW5qZWN0b3IuaW5zdGFudGlhdGVSZXNvbHZlZChjYXJQcm92aWRlcikpO1xuICAgKiBgYGBcbiAgICovXG4gIGFic3RyYWN0IGluc3RhbnRpYXRlUmVzb2x2ZWQocHJvdmlkZXI6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyKTogYW55O1xuXG4gIGFic3RyYWN0IGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgUmVmbGVjdGl2ZUluamVjdG9yXyBpbXBsZW1lbnRzIFJlZmxlY3RpdmVJbmplY3RvciB7XG4gIHByaXZhdGUgc3RhdGljIElOSkVDVE9SX0tFWSA9IFJlZmxlY3RpdmVLZXkuZ2V0KEluamVjdG9yKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY29uc3RydWN0aW9uQ291bnRlcjogbnVtYmVyID0gMDtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgX3Byb3ZpZGVyczogUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJbXTtcbiAgcHVibGljIHJlYWRvbmx5IHBhcmVudDogSW5qZWN0b3J8bnVsbDtcblxuICBrZXlJZHM6IG51bWJlcltdO1xuICBvYmpzOiBhbnlbXTtcbiAgLyoqXG4gICAqIFByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKF9wcm92aWRlcnM6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10sIF9wYXJlbnQ/OiBJbmplY3Rvcikge1xuICAgIHRoaXMuX3Byb3ZpZGVycyA9IF9wcm92aWRlcnM7XG4gICAgdGhpcy5wYXJlbnQgPSBfcGFyZW50IHx8IG51bGw7XG5cbiAgICBjb25zdCBsZW4gPSBfcHJvdmlkZXJzLmxlbmd0aDtcblxuICAgIHRoaXMua2V5SWRzID0gW107XG4gICAgdGhpcy5vYmpzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0aGlzLmtleUlkc1tpXSA9IF9wcm92aWRlcnNbaV0ua2V5LmlkO1xuICAgICAgdGhpcy5vYmpzW2ldID0gVU5ERUZJTkVEO1xuICAgIH1cbiAgfVxuXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlOiBhbnkgPSBUSFJPV19JRl9OT1RfRk9VTkQpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9nZXRCeUtleShSZWZsZWN0aXZlS2V5LmdldCh0b2tlbiksIG51bGwsIG5vdEZvdW5kVmFsdWUpO1xuICB9XG5cbiAgcmVzb2x2ZUFuZENyZWF0ZUNoaWxkKHByb3ZpZGVyczogUHJvdmlkZXJbXSk6IFJlZmxlY3RpdmVJbmplY3RvciB7XG4gICAgY29uc3QgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUocHJvdmlkZXJzKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZEZyb21SZXNvbHZlZChSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcnMpO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGRGcm9tUmVzb2x2ZWQocHJvdmlkZXJzOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdKTogUmVmbGVjdGl2ZUluamVjdG9yIHtcbiAgICBjb25zdCBpbmogPSBuZXcgUmVmbGVjdGl2ZUluamVjdG9yXyhwcm92aWRlcnMpO1xuICAgIChpbmogYXMge3BhcmVudDogSW5qZWN0b3IgfCBudWxsfSkucGFyZW50ID0gdGhpcztcbiAgICByZXR1cm4gaW5qO1xuICB9XG5cbiAgcmVzb2x2ZUFuZEluc3RhbnRpYXRlKHByb3ZpZGVyOiBQcm92aWRlcik6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFudGlhdGVSZXNvbHZlZChSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShbcHJvdmlkZXJdKVswXSk7XG4gIH1cblxuICBpbnN0YW50aWF0ZVJlc29sdmVkKHByb3ZpZGVyOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcik6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbnRpYXRlUHJvdmlkZXIocHJvdmlkZXIpO1xuICB9XG5cbiAgZ2V0UHJvdmlkZXJBdEluZGV4KGluZGV4OiBudW1iZXIpOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlciB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl9wcm92aWRlcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBvdXRPZkJvdW5kc0Vycm9yKGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Byb3ZpZGVyc1tpbmRleF07XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9uZXcocHJvdmlkZXI6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyKTogYW55IHtcbiAgICBpZiAodGhpcy5fY29uc3RydWN0aW9uQ291bnRlcisrID4gdGhpcy5fZ2V0TWF4TnVtYmVyT2ZPYmplY3RzKCkpIHtcbiAgICAgIHRocm93IGN5Y2xpY0RlcGVuZGVuY3lFcnJvcih0aGlzLCBwcm92aWRlci5rZXkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFudGlhdGVQcm92aWRlcihwcm92aWRlcik7XG4gIH1cblxuICBwcml2YXRlIF9nZXRNYXhOdW1iZXJPZk9iamVjdHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vYmpzLmxlbmd0aDtcbiAgfVxuXG4gIHByaXZhdGUgX2luc3RhbnRpYXRlUHJvdmlkZXIocHJvdmlkZXI6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyKTogYW55IHtcbiAgICBpZiAocHJvdmlkZXIubXVsdGlQcm92aWRlcikge1xuICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3ZpZGVyLnJlc29sdmVkRmFjdG9yaWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHJlc1tpXSA9IHRoaXMuX2luc3RhbnRpYXRlKHByb3ZpZGVyLCBwcm92aWRlci5yZXNvbHZlZEZhY3Rvcmllc1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFudGlhdGUocHJvdmlkZXIsIHByb3ZpZGVyLnJlc29sdmVkRmFjdG9yaWVzWzBdKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbnN0YW50aWF0ZShcbiAgICAgIHByb3ZpZGVyOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcixcbiAgICAgIFJlc29sdmVkUmVmbGVjdGl2ZUZhY3Rvcnk6IFJlc29sdmVkUmVmbGVjdGl2ZUZhY3RvcnkpOiBhbnkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBSZXNvbHZlZFJlZmxlY3RpdmVGYWN0b3J5LmZhY3Rvcnk7XG5cbiAgICBsZXQgZGVwczogYW55W107XG4gICAgdHJ5IHtcbiAgICAgIGRlcHMgPVxuICAgICAgICAgIFJlc29sdmVkUmVmbGVjdGl2ZUZhY3RvcnkuZGVwZW5kZW5jaWVzLm1hcChkZXAgPT4gdGhpcy5fZ2V0QnlSZWZsZWN0aXZlRGVwZW5kZW5jeShkZXApKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5hZGRLZXkpIHtcbiAgICAgICAgZS5hZGRLZXkodGhpcywgcHJvdmlkZXIua2V5KTtcbiAgICAgIH1cbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgbGV0IG9iajogYW55O1xuICAgIHRyeSB7XG4gICAgICBvYmogPSBmYWN0b3J5KC4uLmRlcHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGluc3RhbnRpYXRpb25FcnJvcih0aGlzLCBlLCBlLnN0YWNrLCBwcm92aWRlci5rZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBwcml2YXRlIF9nZXRCeVJlZmxlY3RpdmVEZXBlbmRlbmN5KGRlcDogUmVmbGVjdGl2ZURlcGVuZGVuY3kpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9nZXRCeUtleShkZXAua2V5LCBkZXAudmlzaWJpbGl0eSwgZGVwLm9wdGlvbmFsID8gbnVsbCA6IFRIUk9XX0lGX05PVF9GT1VORCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRCeUtleShrZXk6IFJlZmxlY3RpdmVLZXksIHZpc2liaWxpdHk6IFNlbGZ8U2tpcFNlbGZ8bnVsbCwgbm90Rm91bmRWYWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAoa2V5ID09PSBSZWZsZWN0aXZlSW5qZWN0b3JfLklOSkVDVE9SX0tFWSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHZpc2liaWxpdHkgaW5zdGFuY2VvZiBTZWxmKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0QnlLZXlTZWxmKGtleSwgbm90Rm91bmRWYWx1ZSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldEJ5S2V5RGVmYXVsdChrZXksIG5vdEZvdW5kVmFsdWUsIHZpc2liaWxpdHkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldE9iakJ5S2V5SWQoa2V5SWQ6IG51bWJlcik6IGFueSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmtleUlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMua2V5SWRzW2ldID09PSBrZXlJZCkge1xuICAgICAgICBpZiAodGhpcy5vYmpzW2ldID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICB0aGlzLm9ianNbaV0gPSB0aGlzLl9uZXcodGhpcy5fcHJvdmlkZXJzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9ianNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFVOREVGSU5FRDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3Rocm93T3JOdWxsKGtleTogUmVmbGVjdGl2ZUtleSwgbm90Rm91bmRWYWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAobm90Rm91bmRWYWx1ZSAhPT0gVEhST1dfSUZfTk9UX0ZPVU5EKSB7XG4gICAgICByZXR1cm4gbm90Rm91bmRWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbm9Qcm92aWRlckVycm9yKHRoaXMsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0QnlLZXlTZWxmKGtleTogUmVmbGVjdGl2ZUtleSwgbm90Rm91bmRWYWx1ZTogYW55KTogYW55IHtcbiAgICBjb25zdCBvYmogPSB0aGlzLl9nZXRPYmpCeUtleUlkKGtleS5pZCk7XG4gICAgcmV0dXJuIChvYmogIT09IFVOREVGSU5FRCkgPyBvYmogOiB0aGlzLl90aHJvd09yTnVsbChrZXksIG5vdEZvdW5kVmFsdWUpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0QnlLZXlEZWZhdWx0KGtleTogUmVmbGVjdGl2ZUtleSwgbm90Rm91bmRWYWx1ZTogYW55LCB2aXNpYmlsaXR5OiBTZWxmfFNraXBTZWxmfG51bGwpOiBhbnkge1xuICAgIGxldCBpbmo6IEluamVjdG9yfG51bGw7XG5cbiAgICBpZiAodmlzaWJpbGl0eSBpbnN0YW5jZW9mIFNraXBTZWxmKSB7XG4gICAgICBpbmogPSB0aGlzLnBhcmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5qID0gdGhpcztcbiAgICB9XG5cbiAgICB3aGlsZSAoaW5qIGluc3RhbmNlb2YgUmVmbGVjdGl2ZUluamVjdG9yXykge1xuICAgICAgY29uc3QgaW5qXyA9IDxSZWZsZWN0aXZlSW5qZWN0b3JfPmluajtcbiAgICAgIGNvbnN0IG9iaiA9IGlual8uX2dldE9iakJ5S2V5SWQoa2V5LmlkKTtcbiAgICAgIGlmIChvYmogIT09IFVOREVGSU5FRCkgcmV0dXJuIG9iajtcbiAgICAgIGluaiA9IGlual8ucGFyZW50O1xuICAgIH1cbiAgICBpZiAoaW5qICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gaW5qLmdldChrZXkudG9rZW4sIG5vdEZvdW5kVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGhyb3dPck51bGwoa2V5LCBub3RGb3VuZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwcm92aWRlcnMgPVxuICAgICAgICBfbWFwUHJvdmlkZXJzKHRoaXMsIChiOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcikgPT4gJyBcIicgKyBiLmtleS5kaXNwbGF5TmFtZSArICdcIiAnKVxuICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIGBSZWZsZWN0aXZlSW5qZWN0b3IocHJvdmlkZXJzOiBbJHtwcm92aWRlcnN9XSlgO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfbWFwUHJvdmlkZXJzKGluamVjdG9yOiBSZWZsZWN0aXZlSW5qZWN0b3JfLCBmbjogRnVuY3Rpb24pOiBhbnlbXSB7XG4gIGNvbnN0IHJlczogYW55W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmplY3Rvci5fcHJvdmlkZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgcmVzW2ldID0gZm4oaW5qZWN0b3IuZ2V0UHJvdmlkZXJBdEluZGV4KGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuIl19