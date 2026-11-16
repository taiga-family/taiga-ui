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

    it('handles small numbers in scientific notation', () => {
        expect(tuiSum(1e-7, 2e-7)).toBe(3e-7);
        expect(tuiSum(1.25e-7, 2.5e-7)).toBe(3.75e-7);
    });

    it('handles scientific notation with mixed decimal precision', () => {
        expect(tuiSum(0.1, 2e-7, 3e-8)).toBe(0.10000023);
        expect(tuiSum(1, 1e-7)).toBe(1.0000001);
        expect(tuiSum(67_108_864.1, 1e-8)).toBe(67_108_864.10000001);
        expect(tuiSum(-67_108_864.1, -1e-8)).toBe(-67_108_864.10000001);
    });

    it('handles large values in scientific notation', () => {
        expect(tuiSum(1e21, 2e21)).toBe(3e21);
        expect(tuiSum(1e21, 1e-7)).toBe(1e21);
    });

    it('does not overflow while scaling extreme values', () => {
        expect(tuiSum(1e308, 1e-7)).toBe(1e308);
        expect(tuiSum(1e-309, 2e-309)).toBe(3e-309);
        expect(tuiSum(Number.MIN_VALUE, Number.MIN_VALUE)).toBe(1e-323);
    });

    it('does not lose large values when scaling small numbers', () => {
        expect(tuiSum(1e20, 1e-9)).toBe(1e20);
        expect(tuiSum(1e20, -1e20, 0.1, 0.2)).toBe(0.3);
    });

    it('preserves decimal precision with subnormal numbers', () => {
        expect(tuiSum(0.1, 0.2, 1e-309)).toBe(0.3);
    });

    it('preserves accuracy after intermediate scaling overflow', () => {
        expect(tuiSum(Number.MAX_SAFE_INTEGER, 2, -Number.MAX_SAFE_INTEGER)).toBe(2);
        expect(tuiSum(-Number.MAX_SAFE_INTEGER, -2, Number.MAX_SAFE_INTEGER)).toBe(-2);
    });

    it('preserves large integer operands', () => {
        expect(tuiSum(1_000_000_000_000_000_128, -1e18)).toBe(128);
        expect(tuiSum(-1_000_000_000_000_000_128, 1e18)).toBe(-128);
        expect(tuiSum(1_000_000_000_000_000_128, -1e18, 0.1, 0.2)).toBe(128.3);
    });

    it('preserves scientific notation without division rounding', () => {
        expect(tuiSum(1e-25, 1e-25)).toBe(2e-25);
        expect(tuiSum(-1e-25, -1e-25)).toBe(-2e-25);
        expect(tuiSum(1.1e-25, 2.2e-25)).toBe(3.3e-25);
        expect(tuiSum(1e-308, 1e-308)).toBe(2e-308);
    });

    it('handles exponents from -308 to 308', () => {
        for (let exponent = -308; exponent <= 308; exponent++) {
            const value = Number(`1e${exponent}`);
            // Large integral inputs retain their actual binary64 integer values.
            const doubled = exponent <= 15 ? Number(`2e${exponent}`) : value + value;

            expect(tuiSum(value, value)).toBe(doubled);
            expect(tuiSum(-value, -value)).toBe(-doubled);
            expect(tuiSum(value, -value)).toBe(0);
        }
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
