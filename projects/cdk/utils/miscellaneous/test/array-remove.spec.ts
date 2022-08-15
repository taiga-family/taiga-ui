import {tuiArrayRemove} from '@taiga-ui/cdk';

describe(`tuiArrayRemove`, () => {
    it(`removes item at index`, () => {
        expect(tuiArrayRemove([1, 2, 3], 1)).toEqual([1, 3]);
    });

    it(`ignores invalid indices`, () => {
        expect(tuiArrayRemove([1, 2, 3], -1)).toEqual([1, 2, 3]);
        expect(tuiArrayRemove([1, 2, 3], -10)).toEqual([1, 2, 3]);
        expect(tuiArrayRemove([1, 2, 3], NaN)).toEqual([1, 2, 3]);
        expect(tuiArrayRemove([1, 2, 3], -Infinity)).toEqual([1, 2, 3]);
        expect(tuiArrayRemove([1, 2, 3], Infinity)).toEqual([1, 2, 3]);
    });

    it(`ignores indices outside array length`, () => {
        expect(tuiArrayRemove([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });
});
