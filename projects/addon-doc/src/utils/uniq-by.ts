export function uniqBy<T extends object>(
    array: ReadonlyArray<T>,
    key: keyof T,
): ReadonlyArray<T> {
    return Array.from(
        array
            .reduce((map, item) => {
                if (!map.has(item[key])) {
                    map.set(item[key], item);
                }

                return map;
            }, new Map<T[keyof T], T>())
            .values(),
    );
}
