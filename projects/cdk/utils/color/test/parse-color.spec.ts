import {tuiParseColor} from '@taiga-ui/cdk';

describe(`tuiParseColor`, () => {
    it(`test case 1`, () => {
        expect(tuiParseColor(`rgba(0, 255, 255, 1)`)).toEqual([0, 255, 255, 1]);
    });

    it(`test case 2`, () => {
        expect(tuiParseColor(`rgb(1, 2, 3)`)).toEqual([1, 2, 3, 1]);
    });

    it(`test case 3`, () => {
        expect(tuiParseColor(`#ff00ff)`)).toEqual([255, 0, 255, 1]);
    });
});
