import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';

import {tuiFormatNumber} from '../format-number';

describe(`Number formatting`, () => {
    it(`inserts delimiter for numbers > 999`, () => {
        expect(tuiFormatNumber(1000)).toBe(`1${CHAR_NO_BREAK_SPACE}000`);
    });

    it(`correctly inserts the separator for one higher order`, () => {
        expect(tuiFormatNumber(1234567)).toBe(
            `1${CHAR_NO_BREAK_SPACE}234${CHAR_NO_BREAK_SPACE}567`,
        );
    });

    it(`correctly inserts the separator for the two higher orders`, () => {
        expect(tuiFormatNumber(12345678)).toBe(
            `12${CHAR_NO_BREAK_SPACE}345${CHAR_NO_BREAK_SPACE}678`,
        );
    });

    it(`correctly inserts the separator for the three higher orders`, () => {
        expect(tuiFormatNumber(123456789)).toBe(
            `123${CHAR_NO_BREAK_SPACE}456${CHAR_NO_BREAK_SPACE}789`,
        );
    });

    it(`keeps minus`, () => {
        expect(tuiFormatNumber(-123)).toBe(`-123`);
    });

    it(`preserves the fractional part`, () => {
        expect(tuiFormatNumber(1.234)).toBe(`1,234`);
    });

    it(`finishes the fractional part with zeros to a given value`, () => {
        expect(tuiFormatNumber(123, {decimalLimit: 2})).toBe(`123,00`);
    });

    it(`discards the extra fractional part`, () => {
        expect(tuiFormatNumber(1.234, {decimalLimit: 2})).toBe(`1,23`);
    });

    it(`discards the fractional part altogether`, () => {
        expect(tuiFormatNumber(5.678, {decimalLimit: 0})).toBe(`5`);
    });

    it(`accepts custom fractional separator`, () => {
        expect(tuiFormatNumber(123.45, {decimalLimit: 2, decimalSeparator: `.`})).toBe(
            `123.45`,
        );
    });

    it(`accepts custom thousands separator`, () => {
        expect(
            tuiFormatNumber(12345.67, {
                decimalLimit: 2,
                decimalSeparator: `,`,
                thousandSeparator: `.`,
            }),
        ).toBe(`12.345,67`);
    });

    it(`do not add zeros when disable zero padding flag`, () => {
        expect(
            tuiFormatNumber(12345.6, {
                decimalLimit: 2,
                decimalSeparator: `,`,
                thousandSeparator: `.`,
                zeroPadding: false,
            }),
        ).toBe(`12.345,6`);
    });

    it(`add zeros with default behavior`, () => {
        expect(
            tuiFormatNumber(12345.6, {
                decimalLimit: 2,
                decimalSeparator: `,`,
                thousandSeparator: `.`,
            }),
        ).toBe(`12.345,60`);
    });

    it(`value with exponent and fractional part with and decimal bigger than precision`, () => {
        expect(tuiFormatNumber(1.23e-8, {decimalLimit: 12})).toBe(`0,000000012300`);
    });

    it(`deletes trailing zeros when zero padding flag is disabled`, () => {
        expect(
            tuiFormatNumber(12345.6078, {
                decimalLimit: 2,
                decimalSeparator: `,`,
                thousandSeparator: `.`,
                zeroPadding: false,
            }),
        ).toBe(`12.345,6`);
    });

    it(`displays without decimal separator when zero padding flag is disabled and there is no significant digits`, () => {
        expect(
            tuiFormatNumber(12345.006, {
                decimalLimit: 2,
                decimalSeparator: `,`,
                thousandSeparator: `.`,
                zeroPadding: false,
            }),
        ).toBe(`12.345`);
    });

    it(`does not delete significant zeros in decimal part when padding flag is disabled`, () => {
        expect(
            tuiFormatNumber(0.01, {
                decimalLimit: 2,
                decimalSeparator: `,`,
                thousandSeparator: `.`,
                zeroPadding: false,
            }),
        ).toBe(`0,01`);
    });

    it(`deletes trailing zeros only in decimal part when zero padding flag is disabled`, () => {
        expect(
            tuiFormatNumber(0.001, {
                decimalLimit: 2,
                decimalSeparator: `,`,
                thousandSeparator: `.`,
                zeroPadding: false,
            }),
        ).toBe(`0`);
    });
});
