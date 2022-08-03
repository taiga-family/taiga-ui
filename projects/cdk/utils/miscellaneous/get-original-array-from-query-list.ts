import {QueryList} from '@angular/core';

/**
 * Extracts original array from {@link QueryList} rather than
 * creating a copy like {@link QueryList.toArray} does.
 * @param queryList
 * @returns original array from {@link QueryList}.
 */
export function tuiGetOriginalArrayFromQueryList<T>(
    queryList: QueryList<T>,
): readonly T[] {
    let array: readonly T[] = [];

    queryList.find((_item, _index, originalArray) => {
        array = originalArray;

        return true;
    });

    return array;
}
