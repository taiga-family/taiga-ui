import {tuiFormatCurrency} from '../format-currency';

describe(`tuiFormatCurrency`, () => {
    it(`returns founded currency symbol`, () => {
        const usdCode = `USD`;

        expect(tuiFormatCurrency(usdCode)).toBe(`$`);
    });

    it(`returns custom currency`, () => {
        const customCurrency = `CSTM`;

        expect(tuiFormatCurrency(customCurrency)).toBe(customCurrency);
    });

    it(`returns empty string if there is no value`, () => {
        const noCurrency = null;

        expect(tuiFormatCurrency(noCurrency)).toBe(``);
    });

    it(`returns correct currency from number currency code`, () => {
        const dollarCode = 840;

        expect(tuiFormatCurrency(dollarCode)).toBe(`$`);
    });

    it(`returns correct currency from number currency code with 2 decimal`, () => {
        const australianDollar = 36;

        expect(tuiFormatCurrency(australianDollar)).toBe(`A$`);
    });
});
