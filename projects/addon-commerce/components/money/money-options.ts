import {inject, InjectionToken, Provider} from '@angular/core';
import {TuiCurrency} from '@taiga-ui/addon-commerce/enums';
import {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';
import {tuiAssert} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, TuiDecimalT, TuiNumberFormatSettings} from '@taiga-ui/core';

export interface TuiMoneyOptions {
    readonly decimal: TuiDecimalT;
    readonly currency: TuiCurrencyVariants;
    /**
     * @deprecated use {@link TUI_NUMBER_FORMAT} from '@taiga-ui/core':
     * ```ts
     * providers: [{
     *      provide: TUI_NUMBER_FORMAT,
     *      useValue: {
     *          // ...
     *          signMode: 'negative-only',
     *      }
     * }]
     * ```
     * @todo TODO delete in v3.0
     */
    readonly sign: TuiNumberFormatSettings['signMode'];
    readonly colored: boolean;
    readonly precision: number;
    readonly singleColor: boolean;
}

export const TUI_MONEY_DEFAULT_DEFAULT_OPTIONS: Omit<TuiMoneyOptions, 'sign'> = {
    decimal: 'not-zero',
    currency: TuiCurrency.Ruble,
    colored: false,
    precision: 2,
    singleColor: false,
};

export const TUI_MONEY_OPTIONS = new InjectionToken<TuiMoneyOptions>(
    'Default parameters for money component',
    {
        factory: () => ({
            sign: inject(TUI_NUMBER_FORMAT).signMode,
            ...TUI_MONEY_DEFAULT_DEFAULT_OPTIONS,
        }),
    },
);

export const tuiMoneyOptionsProvider: (options: Partial<TuiMoneyOptions>) => Provider = (
    options: Partial<TuiMoneyOptions>,
) => {
    tuiAssert.assert(
        !options.sign,
        `[tuiMoneyOptionsProvider]: property 'sign' was deprecated (nothing changes for other properties)`,
        `Use property 'signMode' from DI-token TUI_NUMBER_FORMAT.`,
    );

    return {
        provide: TUI_MONEY_OPTIONS,
        deps: [TUI_NUMBER_FORMAT],
        useFactory: ({signMode}: TuiNumberFormatSettings) => ({
            sign: signMode,
            ...TUI_MONEY_DEFAULT_DEFAULT_OPTIONS,
            ...options,
        }),
    };
};
