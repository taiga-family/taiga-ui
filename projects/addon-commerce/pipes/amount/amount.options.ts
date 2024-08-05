import type {Provider} from '@angular/core';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiHorizontalDirection} from '@taiga-ui/core/types';

import type {TuiAmountSign} from './amount.types';

export interface TuiAmountOptions {
    readonly currency: TuiCurrencyVariants;
    readonly currencyAlign: TuiHorizontalDirection;
    readonly sign: TuiAmountSign;
}

export const TUI_AMOUNT_DEFAULT_OPTIONS: TuiAmountOptions = {
    currency: null,
    currencyAlign: 'left',
    sign: 'negative-only',
};

export const TUI_AMOUNT_OPTIONS = tuiCreateToken(TUI_AMOUNT_DEFAULT_OPTIONS);

export function tuiAmountOptionsProvider(options: Partial<TuiAmountOptions>): Provider {
    return tuiProvideOptions(TUI_AMOUNT_OPTIONS, options, TUI_AMOUNT_DEFAULT_OPTIONS);
}
