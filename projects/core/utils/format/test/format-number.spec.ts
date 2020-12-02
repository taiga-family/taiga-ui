import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {formatNumber} from '../format-number';

describe('Форматирование числа', () => {
    it('Вставляет разделитель для чисел > 999', () => {
        expect(formatNumber(1000)).toBe(`1${CHAR_NO_BREAK_SPACE}000`);
    });

    it('Корректно вставляет разделитель для одного старшего порядка', () => {
        expect(formatNumber(1234567)).toBe(
            `1${CHAR_NO_BREAK_SPACE}234${CHAR_NO_BREAK_SPACE}567`,
        );
    });

    it('Корректно вставляет разделитель для двух старших порядков', () => {
        expect(formatNumber(12345678)).toBe(
            `12${CHAR_NO_BREAK_SPACE}345${CHAR_NO_BREAK_SPACE}678`,
        );
    });

    it('Корректно вставляет разделитель для трёх старших порядков', () => {
        expect(formatNumber(123456789)).toBe(
            `123${CHAR_NO_BREAK_SPACE}456${CHAR_NO_BREAK_SPACE}789`,
        );
    });

    it('Сохраняет минус', () => {
        expect(formatNumber(-123)).toBe('-123');
    });

    it('Сохраняет дробную часть', () => {
        expect(formatNumber(1.234)).toBe('1,234');
    });

    it('Добивает нулями дробную часть до заданной величины', () => {
        expect(formatNumber(123, 2)).toBe('123,00');
    });

    it('Отбрасывает лишнюю дробную часть', () => {
        expect(formatNumber(1.234, 2)).toBe('1,23');
    });

    it('Отбрасывает дробную часть совсем', () => {
        expect(formatNumber(5.678, 0)).toBe('5');
    });

    it('Принимает кастомный разделитель дробной части', () => {
        expect(formatNumber(123.45, 2, '.')).toBe('123.45');
    });
});
