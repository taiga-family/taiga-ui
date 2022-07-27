import {hexToRgb} from '../hex-to-rgb';

describe(`hexToRgb`, () => {
    it(`works`, () => {
        expect(hexToRgb(`2aed03`)).toEqual([42, 237, 3]);
    });
});
