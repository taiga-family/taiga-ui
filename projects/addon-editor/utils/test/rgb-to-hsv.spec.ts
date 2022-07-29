import {tuiRgbToHsv} from '../tui-rgb-to-hsv';

describe(`rgbToHsv`, () => {
    it(`works`, () => {
        expect(tuiRgbToHsv(42, 42, 84)).toEqual([240, 0.5, 84]);
    });
});
