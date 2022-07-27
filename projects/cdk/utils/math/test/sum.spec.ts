import {sum} from '../sum';

describe(`sum`, () => {
    it(`returns sum of args`, () => {
        expect(sum(1, 2, 5)).toBe(8);
    });

    it(`returns sum of spread array`, () => {
        const array = [1, 2, 3, 4, 5];

        expect(sum(...array)).toBe(15);
    });
});
