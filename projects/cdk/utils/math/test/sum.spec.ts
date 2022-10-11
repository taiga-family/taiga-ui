import {tuiSum} from '@taiga-ui/cdk';

describe(`sum`, () => {
    it(`returns sum of args`, () => {
        expect(tuiSum(1, 2, 5)).toBe(8);
    });

    it(`returns sum of spread array`, () => {
        const array = [1, 2, 3, 4, 5];

        expect(tuiSum(...array)).toBe(15);
    });
});
