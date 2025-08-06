import {type TuiValuesOf} from '@taiga-ui/cdk/types';

export function tuiUniqBy<T extends Record<string, any>>(
    array: readonly T[],
    key: keyof T,
): readonly T[] {
    return Array.from(
        array
            .reduce(
                (map, item) => (map.has(item[key]) ? map : map.set(item[key], item)),
                new Map<TuiValuesOf<T>, T>(),
            )
            .values(),
    );
}
