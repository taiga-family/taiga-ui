import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputCountOptions {
    readonly icons: Readonly<{
        up: PolymorpheusContent<Record<string, unknown>>;
        down: PolymorpheusContent<Record<string, unknown>>;
    }>;
    readonly appearance: string;
    readonly hideButtons: boolean;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    readonly postfix: string;
}

/** Default values for the input count options. */
export const TUI_INPUT_COUNT_DEFAULT_OPTIONS: TuiInputCountOptions = {
    icons: {
        up: `tuiIconPlus`,
        down: `tuiIconMinus`,
    },
    appearance: `textfield`,
    hideButtons: false,
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    postfix: ``,
};

export const TUI_INPUT_COUNT_OPTIONS = new InjectionToken<TuiInputCountOptions>(
    `[TUI_INPUT_COUNT_OPTIONS]: Default parameters for input count component`,
    {
        factory: () => TUI_INPUT_COUNT_DEFAULT_OPTIONS,
    },
);

export const tuiInputCountOptionsProvider: (
    options: Partial<TuiInputCountOptions>,
) => ValueProvider = (options: Partial<TuiInputCountOptions>) => ({
    provide: TUI_INPUT_COUNT_OPTIONS,
    useValue: {...TUI_INPUT_COUNT_DEFAULT_OPTIONS, ...options},
});
