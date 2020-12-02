"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a provider for a `Transform`.
 *
 * #### Example
 *
 * Creating a transformation `fooBar` that is composed of `foo` and `bar` transforms:
 *
 * ```ts
 * const FOO_BAR_TOKEN = new InjectionToken<Transform>('fooBar');
 *
 * const FOO_BAR_TRANSFORM provideTransform({
 *   provide: FOO_BAR_TOKEN,
 *   useFactory: (foo, bar) => {
 *     return pipe(foo, bar);
 *   },
 *   deps: [ FOO_TOKEN, BAR_TOKEN ]
 * });
 * ```
 *
 * @param module The provider for the transform
 * @return A (normalized) provider for the transform
 */
function provideTransform(module) {
    return Object.assign(Object.assign({}, module), { deps: module.deps || [] });
}
exports.provideTransform = provideTransform;
//# sourceMappingURL=transform.di.js.map