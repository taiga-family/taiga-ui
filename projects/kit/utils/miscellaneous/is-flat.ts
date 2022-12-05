export function tuiIsFlat<T>(
    items: ReadonlyArray<readonly T[]> | readonly T[],
): items is readonly T[] {
    return !Array.isArray(items[0]);
}
