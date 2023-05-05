import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiDecimal} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputNumberOptions {
    readonly icons: Readonly<{
        up: PolymorpheusContent;
        down: PolymorpheusContent;
    }>;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    readonly decimal: TuiDecimal;
    readonly precision: number;
}

/** Default values for the input number options. */
export const TUI_INPUT_NUMBER_DEFAULT_OPTIONS: TuiInputNumberOptions = {
    icons: {
        up: `tuiIconPlus`,
        down: `tuiIconMinus`,
    },
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    step: 0,
    decimal: `not-zero`,
    precision: 2,
};

/**
 * Default parameters for input count component
 */
export const TUI_INPUT_NUMBER_OPTIONS = new InjectionToken<TuiInputNumberOptions>(
    `[TUI_INPUT_NUMBER_OPTIONS]`,
    {
        factory: () => TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
    },
);

export const tuiInputNumberOptionsProvider: (
    options: Partial<TuiInputNumberOptions>,
) => ValueProvider = (options: Partial<TuiInputNumberOptions>) => ({
    provide: TUI_INPUT_NUMBER_OPTIONS,
    useValue: {...TUI_INPUT_NUMBER_DEFAULT_OPTIONS, ...options},
});
