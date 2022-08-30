import {tuiHexToRgb} from '../hex-to-rgb';

describe(`tuiHexToRgb`, () => {
    it(`works`, () => {
        expect(tuiHexToRgb(`2aed03`)).toEqual([42, 237, 3]);
    });
});
