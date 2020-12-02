import {formatSize} from '../format-size';

const units: [string, string, string] = ['B', 'KB', 'MB'];

describe('Форматирование размера файла', () => {
    it('Размер в байтах меньше 1 КБ выводится в байтах', () => {
        expect(formatSize(units, 900)).toBe('900 B');
    });

    it('Размер в байтах 1 КБ, выводится в килобайтах', () => {
        expect(formatSize(units, 1000)).toBe('1 KB');
    });

    it('Размер в байтах 1025 байт выводится в килобайтах с округлением вниз до 1 KB', () => {
        expect(formatSize(units, 1025)).toBe('1 КБ');
    });

    it('Размер в байтах больше 1976 выводится в килобайтах с округлением вверх до 2 KB', () => {
        expect(formatSize(units, 1977)).toBe('2 КБ');
    });

    it('Размер в байтах больше 1 Мб выводится в мегабайтах', () => {
        expect(formatSize(units, 10 * 1000 * 1000)).toBe('10 MB');
    });

    it('Мегабайты округляются до двух знаков после запятой', () => {
        expect(formatSize(units, 10 * 1000 * 1000 + 220 * 1000)).toBe('10.22 MB');
    });
});
