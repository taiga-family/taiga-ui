import {tuiGetCurrencySymbol} from '../get-currency-symbol';

describe('getCurrencySymbol', () => {
    it('returns founded currency symbol', () => {
        const currency = 'HKD';

        expect(tuiGetCurrencySymbol(currency)).toBe('HK$');
    });

    it('returns founded currency symbol', () => {
        const currencyCode = '344';

        expect(tuiGetCurrencySymbol(currencyCode)).toBe('HK$');
    });

    it('returns null if symbol not found', () => {
        const customCurrency = 'CSTM';

        expect(tuiGetCurrencySymbol(customCurrency)).toBe(null);
    });
});
