import {
    TUI_CURRENCY_DICTIONARY,
    TuiCurrency,
    TuiCurrencyCode,
    tuiGetCurrencyByCode,
} from '@taiga-ui/addon-commerce';

describe(`tuiGetCurrencyByCode`, () => {
    it(`AED`, () => {
        expect(tuiGetCurrencyByCode(TuiCurrencyCode.Dirham)).toEqual(TuiCurrency.Dirham);
        expect(tuiGetCurrencyByCode(TuiCurrencyCode.Dirham)?.toString()).toEqual(`AED`);
    });

    it(`the same number of keys`, () => {
        expect(Object.keys(TUI_CURRENCY_DICTIONARY).length).toBe(
            // @ts-ignore
            Object.keys(TuiCurrency ?? {}).length,
        );

        expect(
            // @ts-ignore
            Object.keys(TuiCurrency ?? {}).length,
        ).toBe(
            // @ts-ignore
            Object.keys(TuiCurrencyCode ?? {}).length,
        );
    });
});
