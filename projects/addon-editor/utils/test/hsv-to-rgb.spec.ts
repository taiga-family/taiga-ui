import {hsvToRgb} from '../hsv-to-rgb';

describe(`hsvToRgb`, () => {
    it(`works`, () => {
        expect(hsvToRgb(123, 0.5, 237)).toEqual([119, 237, 124]);
    });
});
