import {Provider} from '@angular/core';
import {TuiCurrency} from '@taiga-ui/addon-commerce/enums';
import {TuiCurrencyVariants, TuiMoneySign} from '@taiga-ui/addon-commerce/types';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiDecimal} from '@taiga-ui/core';

export interface TuiMoneyOptions {
    readonly decimal: TuiDecimal;
    readonly currency: TuiCurrencyVariants;
    readonly sign: TuiMoneySign;
    readonly colored: boolean;
    readonly precision: number;
    readonly singleColor: boolean;
}

export const TUI_MONEY_DEFAULT_OPTIONS: TuiMoneyOptions = {
    decimal: `not-zero`,
    currency: TuiCurrency.Ruble,
    sign: `negative-only`,
    colored: false,
    precision: 2,
    singleColor: false,
};

/**
 * @deprecated TODO: remove in 4.0
 */
export const TUI_MONEY_DEFAULT_DEFAULT_OPTIONS = TUI_MONEY_DEFAULT_OPTIONS;

export const TUI_MONEY_OPTIONS = tuiCreateOptions(TUI_MONEY_DEFAULT_OPTIONS);

export function tuiMoneyOptionsProvider(options: Partial<TuiMoneyOptions>): Provider {
    return tuiProvideOptions(TUI_MONEY_OPTIONS, options, TUI_MONEY_DEFAULT_OPTIONS);
}
