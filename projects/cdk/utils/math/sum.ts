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
    const decimal = numbers.map((n) => (n.toString().split('.')[1] ?? '').length);
    const maxDecimal = Math.max(0, ...decimal);
    const precision = 10 ** maxDecimal;
    const sumInt = numbers.reduce((acc, n) => acc + Math.round(n * precision), 0);

    return sumInt / precision;
}
