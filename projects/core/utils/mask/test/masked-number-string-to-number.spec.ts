import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {maskedNumberStringToNumber} from '../masked-number-string-to-number';

describe('Превращает текстовое значение числа, полученное от маски в число', () => {
    it('Корректно отрабатывает разделитель', () => {
        expect(
            maskedNumberStringToNumber(
                `12${CHAR_NO_BREAK_SPACE}345${CHAR_NO_BREAK_SPACE}678`,
            ),
        ).toBe(12345678);
    });

    it('Корректно отрабатывает дробную часть', () => {
        expect(maskedNumberStringToNumber('1,23')).toBe(1.23);
    });

    it('Возвращает NaN, если невозможно перевести строку в число', () => {
        expect(maskedNumberStringToNumber('Дичь')).toBeNaN();
    });
});
