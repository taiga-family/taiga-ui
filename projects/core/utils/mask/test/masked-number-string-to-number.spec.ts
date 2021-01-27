import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {maskedNumberStringToNumber} from '../masked-number-string-to-number';

describe('Converts the text value of a number obtained from a mask into a number', () => {
    it('the separator works correctly', () => {
        expect(
            maskedNumberStringToNumber(
                `12${CHAR_NO_BREAK_SPACE}345${CHAR_NO_BREAK_SPACE}678`,
            ),
        ).toBe(12345678);
    });

    it('correctly handles the fractional part', () => {
        expect(maskedNumberStringToNumber('1,23')).toBe(1.23);
    });

    it('returns NaN if the string cannot be converted to a number', () => {
        expect(maskedNumberStringToNumber('Дичь')).toBeNaN();
    });
});
