import {tuiRgbaToHex} from '@taiga-ui/cdk';

describe(`rgbaToHex`, () => {
    it(`works`, () => {
        expect(tuiRgbaToHex(`rgb(10, 1, 0)`)).toBe(`#0A0100FF`);
        expect(tuiRgbaToHex(`rgba(1, 1, 1, .5)`)).toBe(`#0101017F`);
        expect(tuiRgbaToHex(`rgba(1, 1, 1, 0)`)).toBe(`#01010100`);
    });

    it(`doesn't work`, () => {
        expect(() => tuiRgbaToHex(``)).toThrow(new Error(`Invalid RGBa`));
        expect(() => tuiRgbaToHex(`abc`)).toThrow(new Error(`Invalid RGBa`));
    });
});
