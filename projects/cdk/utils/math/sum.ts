/**
 * Calculates sum of any number of passed arguments with proper floating point precision
 */
export function tuiSum(): 0;
export function tuiSum(...args: number[]): number;
export function tuiSum(...args: bigint[]): bigint;
export function tuiSum(...args: ReadonlyArray<bigint | number>): number;
export function tuiSum(...args: ReadonlyArray<bigint | number>): bigint | number {
    if (args.length === 0) {
        return 0;
    }

    if (args.every((arg) => typeof arg === 'bigint')) {
        return args.reduce<bigint>((acc, n) => acc + n, BigInt(0));
    }

    const numbers = args.map((arg) => Number(arg));

    if (numbers.some((n) => !Number.isFinite(n))) {
        return numbers.reduce((acc, n) => acc + n, 0);
    }

    const decimal = numbers.map((n) => {
        const [mantissa = '', exponent = '0'] = n.toString().split('e');

        return Math.max(0, (mantissa.split('.')[1] ?? '').length - Number(exponent));
    });

    const maxDecimal = Math.max(0, ...decimal);
    const precision = 10 ** maxDecimal;
    const scaled = numbers.map((n) => Math.round(n * precision));
    const sumInt = scaled.reduce((acc, n) => acc + n, 0);
    const absoluteSum = scaled.reduce((acc, n) => acc + Math.abs(n), 0);

    if (Number.isSafeInteger(absoluteSum)) {
        return Number(`${sumInt}e-${maxDecimal}`);
    }

    // Fall back to exact decimal arithmetic when scaling is unsafe.
    const parts = numbers.map((n) => {
        if (Number.isInteger(n)) {
            return {value: BigInt(n), exponent: 0};
        }

        const [mantissa = '', exponent = '0'] = n.toString().split('e');
        const [integer = '', fraction = ''] = mantissa.split('.');

        return {
            value: BigInt(`${integer}${fraction}`),
            exponent: Number(exponent) - fraction.length,
        };
    });

    const minExponent = Math.min(...parts.map(({exponent}) => exponent));
    const sum = parts.reduce(
        (acc, {value, exponent}) =>
            acc + value * BigInt(10) ** BigInt(exponent - minExponent),
        BigInt(0),
    );

    return Number(`${sum}e${minExponent}`);
}
