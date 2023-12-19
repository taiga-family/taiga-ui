import {Provider} from '@angular/core';
import {TuiCurrency} from '@taiga-ui/addon-commerce/enums';
import {TuiCurrencyVariants, TuiMoneySign} from '@taiga-ui/addon-commerce/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiDecimal, TuiHorizontalDirection} from '@taiga-ui/core';

export interface TuiMoneyOptions {
    readonly colored: boolean;
    readonly currency: TuiCurrencyVariants;
    readonly currencyAlign: TuiHorizontalDirection;
    readonly decimal: TuiDecimal;
    readonly precision: number;
    readonly sign: TuiMoneySign;
    readonly singleColor: boolean;
}

export const TUI_MONEY_DEFAULT_OPTIONS: TuiMoneyOptions = {
    decimal: 'not-zero',
    currency: TuiCurrency.Ruble,
    currencyAlign: 'right',
    sign: 'negative-only',
    colored: false,
    precision: 2,
    singleColor: false,
};

/**
 * @deprecated TODO: remove in 4.0
 */
export const TUI_MONEY_DEFAULT_DEFAULT_OPTIONS = TUI_MONEY_DEFAULT_OPTIONS;

export const TUI_MONEY_OPTIONS = tuiCreateToken(TUI_MONEY_DEFAULT_OPTIONS);

export function tuiMoneyOptionsProvider(options: Partial<TuiMoneyOptions>): Provider {
    return tuiProvideOptions(TUI_MONEY_OPTIONS, options, TUI_MONEY_DEFAULT_OPTIONS);
}
