import {QueryList} from '@angular/core';
import {getOriginalArrayFromQueryList} from '@taiga-ui/cdk/utils/miscellaneous';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * Converts changes observable of a QueryList to an Observable of arrays
 */
export function tuiItemsQueryListObservable<T>(
    queryList: QueryList<T>,
): Observable<readonly T[]> {
    return queryList.changes.pipe(
        map(() => getOriginalArrayFromQueryList(queryList)),
        startWith(getOriginalArrayFromQueryList(queryList)),
    );
}
