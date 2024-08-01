import type {Provider} from '@angular/core';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiDecimalOptions {
    readonly currency: TuiCurrencyVariants;
}

export const TUI_DECIMAL_DEFAULT_OPTIONS: TuiDecimalOptions = {
    currency: null,
};

export const TUI_DECIMAL_OPTIONS = tuiCreateToken(TUI_DECIMAL_DEFAULT_OPTIONS);

export function tuiDecimalOptionsProvider(options: Partial<TuiDecimalOptions>): Provider {
    return tuiProvideOptions(TUI_DECIMAL_OPTIONS, options, TUI_DECIMAL_DEFAULT_OPTIONS);
}
