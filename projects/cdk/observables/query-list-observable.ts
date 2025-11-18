import {type QueryList} from '@angular/core';
import {map, type Observable, startWith} from 'rxjs';

/**
 * Converts changes observable of a QueryList to an Observable of arrays
 * @deprecated TODO: Remove in v5
 */
export function tuiQueryListChanges<T>(
    queryList: QueryList<T>,
): Observable<readonly T[]> {
    return queryList.changes.pipe(
        startWith(null),
        map(() => queryList.toArray()),
    );
}
