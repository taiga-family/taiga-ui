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

describe('tuiCreateAutoCorrectedNumberPipe returns', () => {
    describe('the original string if it', () => {
        it('is blank', () => {
            expect(wrapper('')).toBe('');
        });

        it('does not contain a comma and it is not needed (by default)', () => {
            expect(wrapper('-123')).toBe('-123');
        });

        it('if the fractional part matches the format', () => {
            expect(wrapper('123,45', 2)).toBe('123,45');
        });

        it('if there is a dot and a delimiter character - dot', () => {
            expect(wrapper('123.45', 2, '.')).toBe('123.45');
        });
    });

    describe('the corrected string if the fractional part is', () => {
        it('shorter than the given one', () => {
            expect(wrapper('123,00', 4)).toBe('123,0000');
        });

        it('not available at all, but needed', () => {
            expect(wrapper('123', 2)).toBe('123,00');
        });

        it('not present at all, but needed, with a dot separator', () => {
            expect(wrapper('123', 2, '.')).toBe('123.00');
        });
    });
});
