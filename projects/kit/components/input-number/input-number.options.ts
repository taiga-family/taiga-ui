import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
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
export const TUI_INPUT_NUMBER_OPTIONS = tuiCreateOptions(
    TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
);

export function tuiInputNumberOptionsProvider(
    options: Partial<TuiInputNumberOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_NUMBER_OPTIONS,
        options,
        TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
    );
}
