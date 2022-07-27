import {rgbToHsv} from '../rgb-to-hsv';

describe(`rgbToHsv`, () => {
    it(`works`, () => {
        expect(rgbToHsv(42, 42, 84)).toEqual([240, 0.5, 84]);
    });
});
