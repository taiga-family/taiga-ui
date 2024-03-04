import {EMPTY_ARRAY} from '@taiga-ui/cdk';
import {
    debounceTime,
    distinctUntilChanged,
    type Observable,
    type OperatorFunction,
    scan,
    startWith,
    switchMap,
} from 'rxjs';

export function tuiSmartSearch<T>(
    getSearchFunction: (search: string) => Observable<readonly T[] | readonly T[][]>,
    searchDebounceTimeMs = 400,
): OperatorFunction<string, readonly T[] | readonly T[][] | null> {
    return source =>
        source.pipe(
            debounceTime(searchDebounceTimeMs),
            scan(
                (previousSearched, current) =>
                    previousSearched !== '' && current.startsWith(previousSearched)
                        ? previousSearched
                        : current,
                '',
            ),
            distinctUntilChanged(),
            switchMap(value => getSearchFunction(value).pipe(startWith(null))),
            startWith(EMPTY_ARRAY),
        );
}
