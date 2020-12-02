import {TuiTextMaskPipeResult} from '../../../mask/text-mask-pipe-result';
import {tuiCreateAutoCorrectedNumberPipe} from '../create-auto-corrected-money-pipe';

const DUMMY: any = 'any';

function wrapper(
    rawString: string,
    decimalLimit?: number,
    decimalSymbol?: ',' | '.',
): string {
    return (tuiCreateAutoCorrectedNumberPipe(decimalLimit, decimalSymbol)(
        rawString,
        DUMMY,
    ) as TuiTextMaskPipeResult).value;
}

describe('tuiCreateAutoCorrectedNumberPipe возвращает', () => {
    describe('исходную строку, если она', () => {
        it('пустая', () => {
            expect(wrapper('')).toBe('');
        });

        it('если в ней нет запятой, и она не нужна (по умолчанию)', () => {
            expect(wrapper('-123')).toBe('-123');
        });

        it('если дробная часть соответствует формату', () => {
            expect(wrapper('123,45', 2)).toBe('123,45');
        });

        it('если есть точка и символ разделителя — точка', () => {
            expect(wrapper('123.45', 2, '.')).toBe('123.45');
        });
    });

    describe('исправленную строку, если дробная часть', () => {
        it('короче заданной', () => {
            expect(wrapper('123,00', 4)).toBe('123,0000');
        });

        it('совсем отсутствует, но нужна', () => {
            expect(wrapper('123', 2)).toBe('123,00');
        });

        it('совсем отсутствует, но нужна, с разделителем точкой', () => {
            expect(wrapper('123', 2, '.')).toBe('123.00');
        });
    });
});
