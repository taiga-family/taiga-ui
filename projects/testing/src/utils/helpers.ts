import {
    BaseHarnessFilters,
    ComponentHarness,
    ComponentHarnessConstructor,
    HarnessPredicate,
} from '@angular/cdk/testing';

interface With {
    with: (options?: BaseHarnessFilters) => HarnessPredicate<ComponentHarness>;
}

/**
 * Decorator to add default static 'with' method.
 * Use in conjunction with {@link HarnessWith} mixin.
 */
export function withPredicate<
    T extends ComponentHarnessConstructor<ComponentHarness> & With,
>(original: T): T {
    original.with = (options: BaseHarnessFilters = {}) =>
        new HarnessPredicate(original, options);

    return original;
}

/**
 * Mixin to extend {@link ComponentHarness} and add typed
 * static 'with' method. Use {@link withPredicate} decorator
 * to monkey-patch default static 'with' method.
 */
export const HarnessWith = <T>(hostSelector: string) =>
    class extends ComponentHarness {
        static hostSelector = hostSelector;

        // @ts-ignore
        static with(_options: BaseHarnessFilters = {}): HarnessPredicate<T> {
            throw new Error('Hummus');
        }
    };
