/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
export * from './metadata';
export { forwardRef, resolveForwardRef, ForwardRefFn } from './forward_ref';
export { Injector } from './injector';
export { ReflectiveInjector } from './reflective_injector';
export { Provider, TypeProvider, ValueProvider, ClassProvider, ExistingProvider, FactoryProvider } from './provider';
export { ResolvedReflectiveFactory, ResolvedReflectiveProvider } from './reflective_provider';
export { ReflectiveKey } from './reflective_key';
export { InjectionToken, OpaqueToken } from './injection_token';
export { Class, TypeDecorator, makeDecorator, makeParamDecorator, makePropDecorator } from './util/decorators';
export { resolveDependencies } from './util/resolve_dependencies';
export { Type, isType } from './facade/type';
