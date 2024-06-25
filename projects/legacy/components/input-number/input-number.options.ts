import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 */
export interface TuiInputNumberOptions {
    readonly icons: Readonly<{
        down: string;
        up: string;
    }>;
    readonly max: number;
    readonly min: number;
    readonly step: number;
}

/**
 * @deprecated: drop in v5.0
 * Default values for the input number options.
 */
export const TUI_INPUT_NUMBER_DEFAULT_OPTIONS: TuiInputNumberOptions = {
    icons: {
        up: '@tui.plus',
        down: '@tui.minus',
    },
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    step: 0,
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for input count component
 */
export const TUI_INPUT_NUMBER_OPTIONS = tuiCreateToken(TUI_INPUT_NUMBER_DEFAULT_OPTIONS);

/**
 * @deprecated: drop in v5.0
 */
export function tuiInputNumberOptionsProvider(
    options: Partial<TuiInputNumberOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_NUMBER_OPTIONS,
        options,
        TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
    );
}
