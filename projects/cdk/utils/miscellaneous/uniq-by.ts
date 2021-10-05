export function uniqBy<T extends object>(
    array: ReadonlyArray<T>,
    key: keyof T,
): ReadonlyArray<T> {
    return Array.from(
        array
            .reduce(
                (map, item) => (map.has(item[key]) ? map : map.set(item[key], item)),
                new Map<T[keyof T], T>(),
            )
            .values(),
    );
}
