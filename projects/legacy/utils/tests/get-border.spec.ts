import {tuiGetBorder} from '@taiga-ui/legacy';

describe('getBorder', () => {
    it('calculates all options', () => {
        expect(tuiGetBorder(true, true, true, true)).toBe(1.5 * 3 + 2.5 + 0.25 * 4);
    });

    it('calculates all options for small size', () => {
        expect(tuiGetBorder(true, true, true, true, 's')).toBe(1.5 * 3 + 2.5);
    });
});
