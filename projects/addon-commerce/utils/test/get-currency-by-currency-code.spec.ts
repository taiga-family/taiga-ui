import { TuiCurrencyCode, TuiCurrency } from '../../enums';
import {tuiGetCurrencyByCurrencyCode} from '../get-currency-by-currency-code';

describe(`getCurrencyByCurrencyCode`, () => {
    it(`returns alphabetic currency code`, () => {
        const currencyCode = TuiCurrencyCode.HongKongDollar;

        expect(tuiGetCurrencyByCurrencyCode(currencyCode)).toBe(TuiCurrency.HongKongDollar);
    });

    it(`returns alphabetic currency code`, () => {
        const currencyCode = TuiCurrencyCode.Baht;

        expect(tuiGetCurrencyByCurrencyCode(currencyCode)).toBe(TuiCurrency.Baht);
    });

    it(`returns null if currency code is unknown`, () => {
        const currencyCode = `unknown code`;

        expect(tuiGetCurrencyByCurrencyCode(currencyCode as TuiCurrencyCode)).toBe(null);
    });
});
