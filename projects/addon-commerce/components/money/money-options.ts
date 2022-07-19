import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiCurrency} from '@taiga-ui/addon-commerce/enums';
import {TuiCurrencyVariants, TuiMoneySign} from '@taiga-ui/addon-commerce/types';
import {TuiDecimal} from '@taiga-ui/core';

export interface TuiMoneyOptions {
    readonly decimal: TuiDecimal;
    readonly currency: TuiCurrencyVariants;
    readonly sign: TuiMoneySign;
    readonly colored: boolean;
    readonly precision: number;
    readonly singleColor: boolean;
}

export const TUI_MONEY_DEFAULT_DEFAULT_OPTIONS: TuiMoneyOptions = {
    decimal: 'not-zero',
    currency: TuiCurrency.Ruble,
    sign: 'negative-only',
    colored: false,
    precision: 2,
    singleColor: false,
};

export const TUI_MONEY_OPTIONS = new InjectionToken<TuiMoneyOptions>(
    'Default parameters for money component',
    {
        factory: () => TUI_MONEY_DEFAULT_DEFAULT_OPTIONS,
    },
);

export const tuiMoneyOptionsProvider: (
    options: Partial<TuiMoneyOptions>,
) => ValueProvider = (options: Partial<TuiMoneyOptions>) => ({
    provide: TUI_MONEY_OPTIONS,
    useValue: {...TUI_MONEY_DEFAULT_DEFAULT_OPTIONS, ...options},
});
