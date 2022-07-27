import {formatCurrency} from '../format-currency';

describe(`formatCurrency`, () => {
    it(`returns founded currency symbol`, () => {
        const usdCode = `USD`;

        expect(formatCurrency(usdCode)).toBe(`$`);
    });

    it(`returns custom currency`, () => {
        const customCurrency = `CSTM`;

        expect(formatCurrency(customCurrency)).toBe(customCurrency);
    });

    it(`returns empty string if there is no value`, () => {
        const noCurrency = null;

        expect(formatCurrency(noCurrency)).toBe(``);
    });

    it(`returns correct currency from number currency code`, () => {
        const dollarCode = 840;

        expect(formatCurrency(dollarCode)).toBe(`$`);
    });

    it(`returns correct currency from number currency code with 2 decimal`, () => {
        const australianDollar = 36;

        expect(formatCurrency(australianDollar)).toBe(`A$`);
    });
});
