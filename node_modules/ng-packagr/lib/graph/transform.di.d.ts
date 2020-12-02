import { InjectionToken, FactoryProvider } from 'injection-js';
import { Transform } from './transform';
/**
 * A specialized `FactoryProvider` for a `Transform`.
 */
export interface TransformProvider extends FactoryProvider {
    /**
     * An injection token for the `Transform` provided by this provider.
     */
    provide: InjectionToken<Transform>;
    /**
     * A function to invoke to create the `Transform`.
     *
     * The factory function is invoked with resolved values of tokens in the `deps` field.
     */
    useFactory: (...args: any[]) => Transform;
}
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
export declare function provideTransform(module: TransformProvider): TransformProvider;
