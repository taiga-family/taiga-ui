/**
 * @deprecated: use {@link tuiIsFlat} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isFlat<T>(
    items: readonly T[] | ReadonlyArray<readonly T[]>,
): items is readonly T[] {
    return !Array.isArray(items[0]);
}

export const tuiIsFlat = isFlat;
