import {TuiFormatCardPipe} from '@taiga-ui/addon-commerce/pipes';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';

describe('TuiFormatCardPipe', () => {
    const pipe = new TuiFormatCardPipe();

    it('value is empty', () => {
        expect(pipe.transform()).toBe('');
        expect(pipe.transform(null)).toBe('');
        expect(pipe.transform(null, true)).toBe('');
        expect(pipe.transform(undefined, true)).toBe('');
        expect(pipe.transform(null, true)).toBe('');
    });

    it('value has card', () => {
        expect(pipe.transform('1234')).toBe('1234');
        expect(pipe.transform('123456')).toBe(`1234${CHAR_NO_BREAK_SPACE}56`);
        expect(pipe.transform('1234567891011111')).toBe(
            '1234 5678 9101 1111'.replaceAll(' ', CHAR_NO_BREAK_SPACE),
        );
    });
});
