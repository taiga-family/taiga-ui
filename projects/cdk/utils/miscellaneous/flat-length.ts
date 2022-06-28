/**
 * @deprecated: use {@link tuiFlatLength} instead
 * Flattens two-dimensional array and calculates resulting length
 *
 * @param array twi dimensional array
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function flatLength(array: ReadonlyArray<readonly unknown[]>): number {
    return array.reduce((count, section) => count + section.length, 0);
}

export const tuiFlatLength = flatLength;
