import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiDecimal} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputNumberOptions {
    readonly decimal: TuiDecimal;
    readonly icons: Readonly<{
        down: PolymorpheusContent;
        up: PolymorpheusContent;
    }>;
    readonly max: number;
    readonly min: number;
    readonly precision: number;
    readonly step: number;
}

/** Default values for the input number options. */
export const TUI_INPUT_NUMBER_DEFAULT_OPTIONS: TuiInputNumberOptions = {
    icons: {
        up: 'tuiIconPlus',
        down: 'tuiIconMinus',
    },
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    step: 0,
    decimal: 'not-zero',
    precision: 2,
};

/**
 * Default parameters for input count component
 */
export const TUI_INPUT_NUMBER_OPTIONS = tuiCreateToken(TUI_INPUT_NUMBER_DEFAULT_OPTIONS);

export function tuiInputNumberOptionsProvider(
    options: Partial<TuiInputNumberOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_NUMBER_OPTIONS,
        options,
        TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
    );
}
