export function tuiIsFlat<T>(
    items: readonly T[] | ReadonlyArray<readonly T[]>,
): items is readonly T[] {
    return !Array.isArray(items[0]);
}
