/**
 * Calculates sum of any number of passed arguments with proper floating point precision
 */
export function tuiSum(...args: number[]): number {
    const decimal = args.map((double) => (double.toString().split('.')[1] ?? '').length);
    const maxDecimal = Math.max(0, ...decimal);
    const precision = 10 ** maxDecimal;
    const sumInt = args.reduce((acc, n) => acc + Math.round(n * precision), 0);

    return sumInt / precision;
}
