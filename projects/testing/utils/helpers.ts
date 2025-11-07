import {
    type BaseHarnessFilters,
    ComponentHarness,
    type ComponentHarnessConstructor,
    ContentContainerComponentHarness,
    HarnessPredicate,
} from '@angular/cdk/testing';

/**
 * Decorator to add default static 'with' method.
 * Use in conjunction with {@link tuiHarnessWith} mixin.
 */
export function tuiWithPredicate<
    T extends ComponentHarnessConstructor<ComponentHarness> & {
        with(options?: BaseHarnessFilters): HarnessPredicate<ComponentHarness>;
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
    with(options?: BaseHarnessFilters): HarnessPredicate<ComponentHarness>;
} {
    return class extends ComponentHarness {
        public static readonly locator?: T;
        public static hostSelector = hostSelector;

        public static with(
            _options: BaseHarnessFilters = {},
        ): HarnessPredicate<ComponentHarness> {
            throw new Error('Hummus');
        }
    };
}

export class TuiComponentHarness extends ComponentHarness {
    public static with<T extends ComponentHarness>(
        this: ComponentHarnessConstructor<T>,
        options: BaseHarnessFilters,
    ): HarnessPredicate<T> {
        return new HarnessPredicate(this, options);
    }
}

export class TuiContentContainerComponentHarness extends ContentContainerComponentHarness {
    public static with<T extends ComponentHarness>(
        this: ComponentHarnessConstructor<T>,
        options: BaseHarnessFilters,
    ): HarnessPredicate<T> {
        return new HarnessPredicate(this, options);
    }
}
