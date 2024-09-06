import {
    TUI_CURRENCY_DICTIONARY,
    TuiCurrency,
    TuiCurrencyCode,
    tuiGetCurrencyByCode,
} from '@taiga-ui/addon-commerce';

describe('tuiGetCurrencyByCode', () => {
    it('aed', () => {
        expect(tuiGetCurrencyByCode(TuiCurrencyCode.Dirham)).toEqual(TuiCurrency.Dirham);
        expect(tuiGetCurrencyByCode(TuiCurrencyCode.Dirham)?.toString()).toBe('AED');
    });

    it('the same number of keys', () => {
        expect(Object.keys(TUI_CURRENCY_DICTIONARY).length).toBe(
            Object.keys(TuiCurrency ?? {}).length,
        );

        expect(Object.keys(TuiCurrency ?? {}).length).toBe(
            Object.keys(TuiCurrencyCode ?? {}).length,
        );
    });
});
