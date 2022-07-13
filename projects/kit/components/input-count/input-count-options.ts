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

// TODO: 3.0 remove in ivy compilation
export const PASSWORD_ICON_UP = `tuiIconPlus`;
export const PASSWORD_ICON_DOWN = `tuiIconMinus`;

/** Default values for the input count options. */
export const TUI_INPUT_COUNT_DEFAULT_OPTIONS: TuiInputCountOptions = {
    icons: {
        up: PASSWORD_ICON_UP,
        down: PASSWORD_ICON_DOWN,
    },
    appearance: `textfield`,
    hideButtons: false,
    min: 0,
    max: Infinity,
    step: 1,
    postfix: ``,
};

export const TUI_INPUT_COUNT_OPTIONS = new InjectionToken<TuiInputCountOptions>(
    `Default parameters for input count component`,
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
