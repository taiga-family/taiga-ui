import type {Provider} from '@angular/core';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiInputNumberOptions {
    readonly max: number;
    readonly min: number;
    readonly prefix: string;
    readonly postfix: string;
    readonly valueTransformer: TuiValueTransformer<number | null> | null;
}

export const TUI_INPUT_NUMBER_DEFAULT_OPTIONS: TuiInputNumberOptions = {
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    prefix: '',
    postfix: '',
    valueTransformer: null,
};

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
