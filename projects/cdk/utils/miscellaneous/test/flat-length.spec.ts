import {flatLength} from '../flat-length';

describe(`flatLength`, () => {
    it(`Calculates correctly for single nested array`, () => {
        expect(flatLength([[1, 2]])).toBe(2);
    });

    it(`Calculates correctly for many nested arrays`, () => {
        expect(flatLength([[1, 2], [3], []])).toBe(3);
    });

    it(`Calculates correctly for empty arrays`, () => {
        expect(flatLength([[], [], []])).toBe(0);
    });

    it(`Calculates correctly for an empty array`, () => {
        expect(flatLength([])).toBe(0);
    });
});
