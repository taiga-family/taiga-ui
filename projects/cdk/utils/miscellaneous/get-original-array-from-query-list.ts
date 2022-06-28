import {QueryList} from '@angular/core';

/**
 * @deprecated: use {@link tuiGetOriginalArrayFromQueryList} instead
 * Extracts original array from {@link QueryList} rather than
 * creating a copy like {@link QueryList.toArray} does.
 * @param queryList
 * @returns original array from {@link QueryList}.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getOriginalArrayFromQueryList<T>(queryList: QueryList<T>): readonly T[] {
    let array: readonly T[] = [];

    queryList.find((_item, _index, originalArray) => {
        array = originalArray;

        return true;
    });

    return array;
}

export const tuiGetOriginalArrayFromQueryList = getOriginalArrayFromQueryList;
