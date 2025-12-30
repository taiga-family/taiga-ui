import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';

import {type TuiAmountSign} from './amount.types';

export interface TuiAmountOptions {
    readonly currency: TuiCurrencyVariants;
    readonly currencyAlign: TuiHorizontalDirection;
    readonly sign: TuiAmountSign;
}

export const TUI_AMOUNT_DEFAULT_OPTIONS: TuiAmountOptions = {
    currency: null,
    currencyAlign: 'start',
    sign: 'negative-only',
};

export const [TUI_AMOUNT_OPTIONS, tuiAmountOptionsProvider] = tuiCreateOptions(
    TUI_AMOUNT_DEFAULT_OPTIONS,
);
