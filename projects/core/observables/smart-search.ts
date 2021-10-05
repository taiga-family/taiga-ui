import {EMPTY_ARRAY} from '@taiga-ui/cdk';
import {Observable, OperatorFunction} from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    scan,
    startWith,
    switchMap,
} from 'rxjs/operators';

export function smartSearch<T>(
    getSearchFunction: (search: string) => Observable<readonly T[] | readonly T[][]>,
    searchDebouceTimeMs: number = 400,
): OperatorFunction<string, readonly T[] | readonly T[][] | null> {
    return source =>
        source.pipe(
            debounceTime(searchDebouceTimeMs),
            scan((previousSearched, current) => {
                return previousSearched !== '' && current.startsWith(previousSearched)
                    ? previousSearched
                    : current;
            }, ''),
            distinctUntilChanged(),
            switchMap(value => getSearchFunction(value).pipe(startWith(null))),
            startWith(EMPTY_ARRAY),
        );
}
