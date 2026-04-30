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
        expect(tuiSum(0.1, 0.2, 0.3)).toBe(0.6);
    });

    it('handles trailing zero precision correctly', () => {
        expect(tuiSum(1.2, 0.3)).toBe(1.5);
    });

    it('returns sum of bigint values', () => {
        expect(tuiSum(BigInt(1), BigInt(2), BigInt(5))).toBe(BigInt(8));
    });

    it('returns sum of spread bigint array', () => {
        const array = [BigInt(1), BigInt(2), BigInt(3), BigInt(4), BigInt(5)];

        expect(tuiSum(...array)).toBe(BigInt(15));
    });

    it('handles negative bigint values', () => {
        expect(tuiSum(BigInt(10), BigInt(-3), BigInt(-2))).toBe(BigInt(5));
    });

    it('handles only negative bigint values', () => {
        expect(tuiSum(BigInt(-1), BigInt(-2), BigInt(-3))).toBe(BigInt(-6));
    });

    it('handles zero bigint values', () => {
        expect(tuiSum(BigInt(0), BigInt(0), BigInt(5))).toBe(BigInt(5));
    });

    it('handles large bigint values', () => {
        expect(tuiSum(BigInt('9007199254740993'), BigInt(7))).toBe(
            BigInt('9007199254741000'),
        );
    });

    it('handles mixed integer number and bigint', () => {
        expect(tuiSum(1, BigInt(2), 5)).toBe(8);
    });

    it('handles mixed decimal number and bigint', () => {
        expect(tuiSum(0.5, BigInt(2))).toBe(2.5);
    });

    it('handles mixed bigint and decimal number in any order', () => {
        expect(tuiSum(BigInt(2), 0.5)).toBe(2.5);
    });

    it('handles multiple mixed values', () => {
        expect(tuiSum(BigInt(1), 2.5, BigInt(3), 0.5)).toBe(7);
    });

    it('handles negative mixed values', () => {
        expect(tuiSum(BigInt(10), -0.5, BigInt(-2))).toBe(7.5);
    });

    it('handles zero in mixed values', () => {
        expect(tuiSum(BigInt(0), 0.5, 0)).toBe(0.5);
    });

    it('does not accumulate floating point error in mixed values', () => {
        expect(tuiSum(BigInt(1), 0.1, 0.2)).toBe(1.3);
    });

    it('returns sum of spread mixed array', () => {
        const array = [BigInt(1), 2, BigInt(3), 0.5] as const;

        expect(tuiSum(...array)).toBe(6.5);
    });
});
