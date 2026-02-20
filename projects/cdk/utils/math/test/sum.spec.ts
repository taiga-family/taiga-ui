import {tuiSum} from '@taiga-ui/cdk';

describe('tuiSum', () => {
    it('returns sum of integers', () => {
        expect(tuiSum(1, 2, 5)).toBe(8);
    });

    it('returns sum of spread array', () => {
        const array = [1, 2, 3, 4, 5];

        expect(tuiSum(...array)).toBe(15);
    });

    it('handles decimal numbers correctly', () => {
        expect(tuiSum(0.2, 0.1)).toBe(0.3);
    });

    it('handles multiple decimals with different precision', () => {
        expect(tuiSum(1.2, 0.03, 0.5)).toBe(1.73);
    });

    it('handles negative numbers', () => {
        expect(tuiSum(1.5, -0.5)).toBe(1);
    });

    it('handles only negative numbers', () => {
        expect(tuiSum(-1.2, -0.8)).toBe(-2);
    });

    it('returns 0 when no arguments provided', () => {
        expect(tuiSum()).toBe(0);
    });

    it('does not accumulate floating point error', () => {
        const result = tuiSum(0.1, 0.2, 0.3);

        expect(result).toBe(0.6);
    });

    it('handles trailing zero precision correctly', () => {
        expect(tuiSum(1.2, 0.3)).toBe(1.5);
    });
});
