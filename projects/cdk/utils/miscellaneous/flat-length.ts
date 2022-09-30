/**
 * Flattens two-dimensional array and calculates resulting length
 *
 * @param array twi dimensional array
 */
export function tuiFlatLength(array: ReadonlyArray<readonly unknown[]>): number {
    return array.reduce((count, section) => count + section.length, 0);
}
