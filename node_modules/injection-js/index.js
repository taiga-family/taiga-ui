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
export { forwardRef, resolveForwardRef } from './forward_ref';
export { Injector } from './injector';
export { ReflectiveInjector } from './reflective_injector';
export { ResolvedReflectiveFactory } from './reflective_provider';
export { ReflectiveKey } from './reflective_key';
export { InjectionToken, OpaqueToken } from './injection_token';
export { Class, makeDecorator, makeParamDecorator, makePropDecorator } from './util/decorators';
export { resolveDependencies } from './util/resolve_dependencies';
export { Type, isType } from './facade/type';
//# sourceMappingURL=index.js.map