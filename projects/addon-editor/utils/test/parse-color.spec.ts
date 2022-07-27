import {parseColor} from '../parse-color';

describe(`parseColor`, () => {
    it(`test case 1`, () => {
        expect(parseColor(`rgba(0, 255, 255, 1)`)).toEqual([0, 255, 255, 1]);
    });

    it(`test case 2`, () => {
        expect(parseColor(`rgb(1, 2, 3)`)).toEqual([1, 2, 3, 1]);
    });

    it(`test case 3`, () => {
        expect(parseColor(`#ff00ff)`)).toEqual([255, 0, 255, 1]);
    });
});
