/**
 * Calculates sum of any number of passed arguments
 */
export function tuiSum(...args: number[]): number {
    return args.reduce((a, b) => a + b, 0);
}
