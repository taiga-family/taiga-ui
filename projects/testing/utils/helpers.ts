/* eslint-disable @typescript-eslint/naming-convention */
import {
    BaseHarnessFilters,
    ComponentHarness,
    ComponentHarnessConstructor,
    HarnessPredicate,
} from '@angular/cdk/testing';

/**
 * @deprecated use {@link tuiWithPredicate}
 */
export function withPredicate<
    T extends ComponentHarnessConstructor<ComponentHarness> & {
        with: (options?: BaseHarnessFilters) => HarnessPredicate<ComponentHarness>;
    },
>(original: T): T {
    original.with = (options: BaseHarnessFilters = {}) =>
        new HarnessPredicate(original, options);

    return original;
}

/**
 * Decorator to add default static 'with' method.
 * Use in conjunction with {@link HarnessWith} mixin.
 */
export const tuiWithPredicate = withPredicate;

/**
 * @deprecated use {@link tuiHarnessWith}
 */
export function HarnessWith<T>(
    hostSelector: string,
): ComponentHarnessConstructor<ComponentHarness> & {
    with: (options?: BaseHarnessFilters) => HarnessPredicate<ComponentHarness>;
} {
    return class extends ComponentHarness {
        static hostSelector = hostSelector;

        // @ts-ignore
        static with(_options: BaseHarnessFilters = {}): HarnessPredicate<T> {
            throw new Error('Hummus');
        }
    } as unknown as ComponentHarnessConstructor<ComponentHarness> & {
        with: (options?: BaseHarnessFilters) => HarnessPredicate<ComponentHarness>;
    };
}

/**
 * Mixin to extend {@link ComponentHarness} and add typed
 * static 'with' method. Use {@link withPredicate} decorator
 * to monkey-patch default static 'with' method.
 */
export const tuiHarnessWith = HarnessWith;
