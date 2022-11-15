import {
    BaseHarnessFilters,
    ComponentHarness,
    ComponentHarnessConstructor,
    ContentContainerComponentHarness,
    HarnessPredicate,
} from '@angular/cdk/testing';

/**
 * Decorator to add default static 'with' method.
 * Use in conjunction with {@link tuiHarnessWith} mixin.
 */
export function tuiWithPredicate<
    T extends ComponentHarnessConstructor<ComponentHarness> & {
        with: (options?: BaseHarnessFilters) => HarnessPredicate<ComponentHarness>;
    },
>(original: T): T {
    original.with = (options: BaseHarnessFilters = {}) =>
        new HarnessPredicate(original, options);

    return original;
}

/**
 * Mixin to extend {@link ComponentHarness} and add typed
 * static 'with' method. Use {@link tuiWithPredicate} decorator
 * to monkey-patch default static 'with' method.
 */
export function tuiHarnessWith<T>(
    hostSelector: string,
): ComponentHarnessConstructor<ComponentHarness> & {
    with: (options?: BaseHarnessFilters) => HarnessPredicate<ComponentHarness>;
} {
    return class extends ComponentHarness {
        static hostSelector = hostSelector;

        // @ts-ignore
        static with(_options: BaseHarnessFilters = {}): HarnessPredicate<T> {
            throw new Error(`Hummus`);
        }
    } as unknown as ComponentHarnessConstructor<ComponentHarness> & {
        with: (options?: BaseHarnessFilters) => HarnessPredicate<ComponentHarness>;
    };
}

export class TuiComponentHarness extends ComponentHarness {
    static with<T extends ComponentHarness>(
        this: ComponentHarnessConstructor<T>,
        options: BaseHarnessFilters,
    ): HarnessPredicate<T> {
        return new HarnessPredicate(this, options);
    }
}

export class TuiContentContainerComponentHarness extends ContentContainerComponentHarness {
    static with<T extends ComponentHarness>(
        this: ComponentHarnessConstructor<T>,
        options: BaseHarnessFilters,
    ): HarnessPredicate<T> {
        return new HarnessPredicate(this, options);
    }
}
