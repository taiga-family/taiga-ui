export function tuiUniqBy<T extends object>(
    array: readonly T[],
    key: keyof T,
): readonly T[] {
    return Array.from(
        array
            .reduce(
                (map, item) => (map.has(item[key]) ? map : map.set(item[key], item)),
                new Map<T[keyof T], T>(),
            )
            .values(),
    );
}
