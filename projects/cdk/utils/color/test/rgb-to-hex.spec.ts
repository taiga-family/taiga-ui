import {tuiRgbToHex} from '../rgb-to-hex';

describe(`rgbToHex`, () => {
    it(`works`, () => {
        expect(tuiRgbToHex(10, 1, 0)).toBe(`#0a0100`);
        expect(tuiRgbToHex(1, 1, 1)).toBe(`#010101`);
        expect(tuiRgbToHex(42, 237, 3)).toBe(`#2aed03`);
    });
});
