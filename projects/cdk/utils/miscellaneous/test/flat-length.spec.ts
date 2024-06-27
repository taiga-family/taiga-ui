import {tuiFlatLength} from '@taiga-ui/cdk';

describe('flatLength', () => {
    it('calculates correctly for single nested array', () => {
        expect(tuiFlatLength([[1, 2]])).toBe(2);
    });

    it('calculates correctly for many nested arrays', () => {
        expect(tuiFlatLength([[1, 2], [3], []])).toBe(3);
    });

    it('calculates correctly for empty arrays', () => {
        expect(tuiFlatLength([[], [], []])).toBe(0);
    });

    it('calculates correctly for an empty array', () => {
        expect(tuiFlatLength([])).toBe(0);
    });
});
