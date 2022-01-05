import {numberToStringWithoutExp} from '@taiga-ui/core/utils/format/number-to-string-without-exp';

describe('number converting to string without exponent', () => {
    it('value with exponent and without fractional part', () => {
        expect(numberToStringWithoutExp(1e-10)).toBe('0.0000000001');
    });

    it('value with exponent and fractional part', () => {
        expect(numberToStringWithoutExp(1.23e-8)).toBe('0.0000000123');
    });
});
