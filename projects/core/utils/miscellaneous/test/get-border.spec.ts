import {tuiGetBorder} from '../get-border';

describe(`getBorder`, () => {
    it(`calculates all options`, () => {
        expect(tuiGetBorder(true, true, true, true)).toBe(1.5 * 3 + 2.5);
    });
});
