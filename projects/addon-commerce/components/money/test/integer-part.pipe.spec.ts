import {TuiIntegerPartPipe} from '@taiga-ui/addon-commerce';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core';

describe('TuiIntegerPart', () => {
    it('Config with decimal limit', () => {
        const pipe = new TuiIntegerPartPipe({
            ...TUI_DEFAULT_NUMBER_FORMAT,
            decimalLimit: 2,
        });

        expect(pipe.transform(10123.123)).toBe(`10${CHAR_NO_BREAK_SPACE}123`);
        expect(pipe.transform(10123)).toBe(`10${CHAR_NO_BREAK_SPACE}123`);
        expect(pipe.transform(null as unknown as number)).toBe('0');
        expect(pipe.transform(undefined as unknown as number)).toBe('NaN');
        expect(pipe.transform('' as unknown as number)).toBe('0');
        expect(pipe.transform('10,5' as unknown as number)).toBe('NaN');
        expect(pipe.transform('10.5' as unknown as number)).toBe('10');
    });

    describe('Config with rounding', () => {
        it('rounding', () => {
            const pipe = new TuiIntegerPartPipe({
                ...TUI_DEFAULT_NUMBER_FORMAT,
                rounding: 'round',
            });

            expect(pipe.transform(2004.87)).toBe(`2${CHAR_NO_BREAK_SPACE}004`);
            expect(pipe.transform(1000.87)).toBe(`1${CHAR_NO_BREAK_SPACE}000`);
            expect(pipe.transform(100.99, 1)).toBe('101');
        });

        it('ceil', () => {
            const pipe = new TuiIntegerPartPipe({
                ...TUI_DEFAULT_NUMBER_FORMAT,
                rounding: 'ceil',
            });

            expect(pipe.transform(2004.87)).toBe(`2${CHAR_NO_BREAK_SPACE}004`);
            expect(pipe.transform(1000.87)).toBe(`1${CHAR_NO_BREAK_SPACE}000`);
            expect(pipe.transform(100.99, 1)).toBe('101');
        });

        it('floor', () => {
            const pipe = new TuiIntegerPartPipe({
                ...TUI_DEFAULT_NUMBER_FORMAT,
                rounding: 'floor',
            });

            expect(pipe.transform(2004.87)).toBe(`2${CHAR_NO_BREAK_SPACE}004`);
            expect(pipe.transform(1000.87)).toBe(`1${CHAR_NO_BREAK_SPACE}000`);
            expect(pipe.transform(100.99, 1)).toBe('100');
        });
    });
});
