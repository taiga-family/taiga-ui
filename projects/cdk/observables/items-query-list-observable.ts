import {QueryList} from '@angular/core';
import {getOriginalArrayFromQueryList} from '@taiga-ui/cdk/utils/miscellaneous';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiItemsQueryListObservable} instead
 * Converts changes observable of a QueryList to an Observable of arrays
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function itemsQueryListObservable<T>(
    queryList: QueryList<T>,
): Observable<readonly T[]> {
    return queryList.changes.pipe(
        map(() => getOriginalArrayFromQueryList(queryList)),
        startWith(getOriginalArrayFromQueryList(queryList)),
    );
}

export const tuiItemsQueryListObservable = itemsQueryListObservable;
