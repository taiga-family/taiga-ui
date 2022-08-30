import {tuiNormalizeToIntNumber} from '../normalize-to-int-number';

describe(`normalizeToIntNumber`, () => {
    const min = -10;
    const max = 10;

    it(`NaN`, () => {
        expect(tuiNormalizeToIntNumber(NaN, min, max)).toBe(min);
    });

    it(`0.1`, () => {
        expect(tuiNormalizeToIntNumber(0.1, min, max)).toBe(0);
    });

    it(`5.7`, () => {
        expect(tuiNormalizeToIntNumber(5.7, min, max)).toBe(6);
    });

    it(`0.1`, () => {
        expect(tuiNormalizeToIntNumber(0.1, min, max)).toBe(0);
    });

    it(`Infinity`, () => {
        expect(tuiNormalizeToIntNumber(Infinity, min, max)).toBe(max);
    });

    it(`-Infinity`, () => {
        expect(tuiNormalizeToIntNumber(-Infinity, min, max)).toBe(min);
    });
});
