import {Provider} from '@angular/core';
import {TuiCurrencyVariants, TuiMoneySign} from '@taiga-ui/addon-commerce';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiDecimal, TuiHorizontalDirection} from '@taiga-ui/core';

export interface TuiAmountOptions {
    readonly currency: TuiCurrencyVariants;
    readonly currencyAlign: TuiHorizontalDirection;
    readonly decimal: TuiDecimal;
    readonly precision: number;
    readonly sign: TuiMoneySign;
}

export const TUI_AMOUNT_DEFAULT_OPTIONS: TuiAmountOptions = {
    decimal: `not-zero`,
    currency: null,
    currencyAlign: `right`,
    sign: `negative-only`,
    precision: 2,
};

export const TUI_AMOUNT_OPTIONS = tuiCreateToken(TUI_AMOUNT_DEFAULT_OPTIONS);

export function tuiAmountOptionsProvider(options: Partial<TuiAmountOptions>): Provider {
    return tuiProvideOptions(TUI_AMOUNT_OPTIONS, options, TUI_AMOUNT_DEFAULT_OPTIONS);
}
