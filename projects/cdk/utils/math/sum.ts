/**
 * @deprecated: use {@link tuiSum} instead
 * Calculates sum of any number of passed arguments
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function sum(...args: number[]): number {
    return args.reduce((a, b) => a + b, 0);
}

export const tuiSum = sum;
