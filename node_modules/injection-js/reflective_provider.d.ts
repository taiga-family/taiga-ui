/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Self, SkipSelf } from './metadata';
import { Provider } from './provider';
import { ReflectiveKey } from './reflective_key';
/**
 * `Dependency` is used by the framework to extend DI.
 * This is internal to Angular and should not be used directly.
 */
export declare class ReflectiveDependency {
    key: ReflectiveKey;
    optional: boolean;
    visibility: Self | SkipSelf | null;
    constructor(key: ReflectiveKey, optional: boolean, visibility: Self | SkipSelf | null);
    static fromKey(key: ReflectiveKey): ReflectiveDependency;
}
/**
 * An internal resolved representation of a {@link Provider} used by the {@link Injector}.
 *
 * It is usually created automatically by `Injector.resolveAndCreate`.
 *
 * It can be created manually, as follows:
 *
 * ### Example ([live demo](http://plnkr.co/edit/RfEnhh8kUEI0G3qsnIeT?p%3Dpreview&p=preview))
 *
 * ```typescript
 * var resolvedProviders = Injector.resolve([{ provide: 'message', useValue: 'Hello' }]);
 * var injector = Injector.fromResolvedProviders(resolvedProviders);
 *
 * expect(injector.get('message')).toEqual('Hello');
 * ```
 *
 * @experimental
 */
export interface ResolvedReflectiveProvider {
    /**
     * A key, usually a `Type<any>`.
     */
    key: ReflectiveKey;
    /**
     * Factory function which can return an instance of an object represented by a key.
     */
    resolvedFactories: ResolvedReflectiveFactory[];
    /**
     * Indicates if the provider is a multi-provider or a regular provider.
     */
    multiProvider: boolean;
}
export declare class ResolvedReflectiveProvider_ implements ResolvedReflectiveProvider {
    key: ReflectiveKey;
    resolvedFactories: ResolvedReflectiveFactory[];
    multiProvider: boolean;
    constructor(key: ReflectiveKey, resolvedFactories: ResolvedReflectiveFactory[], multiProvider: boolean);
    get resolvedFactory(): ResolvedReflectiveFactory;
}
/**
 * An internal resolved representation of a factory function created by resolving {@link
 * Provider}.
 * @experimental
 */
export declare class ResolvedReflectiveFactory {
    /**
     * Factory function which can return an instance of an object represented by a key.
     */
    factory: Function;
    /**
     * Arguments (dependencies) to the `factory` function.
     */
    dependencies: ReflectiveDependency[];
    constructor(
    /**
     * Factory function which can return an instance of an object represented by a key.
     */
    factory: Function, 
    /**
     * Arguments (dependencies) to the `factory` function.
     */
    dependencies: ReflectiveDependency[]);
}
/**
 * Resolve a list of Providers.
 */
export declare function resolveReflectiveProviders(providers: Provider[]): ResolvedReflectiveProvider[];
/**
 * Merges a list of ResolvedProviders into a list where
 * each key is contained exactly once and multi providers
 * have been merged.
 */
export declare function mergeResolvedReflectiveProviders(providers: ResolvedReflectiveProvider[], normalizedProvidersMap: Map<number, ResolvedReflectiveProvider>): Map<number, ResolvedReflectiveProvider>;
export declare function constructDependencies(typeOrFunc: any, dependencies?: any[]): ReflectiveDependency[];
