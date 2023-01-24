import {QueryList} from '@angular/core';
import {tuiGetOriginalArrayFromQueryList} from '@taiga-ui/cdk/utils/miscellaneous';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * Converts changes observable of a QueryList to an Observable of arrays
 */
export function tuiQueryListChanges<T>(
    queryList: QueryList<T>,
): Observable<readonly T[]> {
    return queryList.changes.pipe(
        startWith(null),
        map(() => tuiGetOriginalArrayFromQueryList(queryList)),
    );
}

/**
 * @deprecated An alias, use {@link tuiQueryListChanges} instead
 */
export const tuiItemsQueryListObservable = tuiQueryListChanges;
