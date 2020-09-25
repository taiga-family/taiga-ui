/**
 * Calculates sum of any number of passed arguments
 */
export function sum(...args: number[]): number {
    return args.reduce((a, b) => a + b, 0);
}
