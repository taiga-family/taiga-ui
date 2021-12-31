import {toStringWithoutExponent} from '@taiga-ui/core/utils/format/to-string-without-exp';

describe('ToStringWithoutExp', () => {
    it('value without exp', () => {
        expect(toStringWithoutExponent(0.001)).toBe('0.001');
    });

    it('value with exponent and without fractional part', () => {
        expect(toStringWithoutExponent(1e-10)).toBe('0.0000000001');
    });

    it('value with exponent and fractional part', () => {
        expect(toStringWithoutExponent(1.23e-11)).toBe('0.0000000000123');
    });
});
