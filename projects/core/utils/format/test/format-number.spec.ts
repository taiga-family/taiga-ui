import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {formatNumber} from '../format-number';

describe('Number formatting', () => {
    it('inserts delimiter for numbers > 999', () => {
        expect(formatNumber(1000)).toBe(`1${CHAR_NO_BREAK_SPACE}000`);
    });

    it('correctly inserts the separator for one higher order', () => {
        expect(formatNumber(1234567)).toBe(
            `1${CHAR_NO_BREAK_SPACE}234${CHAR_NO_BREAK_SPACE}567`,
        );
    });

    it('correctly inserts the separator for the two higher orders', () => {
        expect(formatNumber(12345678)).toBe(
            `12${CHAR_NO_BREAK_SPACE}345${CHAR_NO_BREAK_SPACE}678`,
        );
    });

    it('correctly inserts the separator for the three higher orders', () => {
        expect(formatNumber(123456789)).toBe(
            `123${CHAR_NO_BREAK_SPACE}456${CHAR_NO_BREAK_SPACE}789`,
        );
    });

    it('keeps minus', () => {
        expect(formatNumber(-123)).toBe('-123');
    });

    it('preserves the fractional part', () => {
        expect(formatNumber(1.234)).toBe('1,234');
    });

    it('finishes the fractional part with zeros to a given value', () => {
        expect(formatNumber(123, 2)).toBe('123,00');
    });

    it('discards the extra fractional part', () => {
        expect(formatNumber(1.234, 2)).toBe('1,23');
    });

    it('discards the fractional part altogether', () => {
        expect(formatNumber(5.678, 0)).toBe('5');
    });

    it('accepts custom fractional separator', () => {
        expect(formatNumber(123.45, 2, '.')).toBe('123.45');
    });

    it('accepts custom thousands separator', () => {
        expect(formatNumber(12345.67, 2, ',', '.')).toBe('12.345,67');
    });
});
