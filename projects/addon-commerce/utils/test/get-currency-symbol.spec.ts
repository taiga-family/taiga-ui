import {getCurrencySymbol} from '../get-currency-symbol';

describe(`getCurrencySymbol`, () => {
    it(`returns founded currency symbol`, () => {
        const currency = `HKD`;

        expect(getCurrencySymbol(currency)).toBe(`HK$`);
    });

    it(`returns founded currency symbol`, () => {
        const currencyCode = `344`;

        expect(getCurrencySymbol(currencyCode)).toBe(`HK$`);
    });

    it(`returns null if symbol not found`, () => {
        const customCurrency = `CSTM`;

        expect(getCurrencySymbol(customCurrency)).toBe(null);
    });
});
