import {EMPTY_ARRAY} from '@taiga-ui/cdk';
import {Observable, OperatorFunction} from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    scan,
    startWith,
    switchMap,
} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiSmartSearch} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function smartSearch<T>(
    getSearchFunction: (search: string) => Observable<readonly T[] | readonly T[][]>,
    searchDebounceTimeMs: number = 400,
): OperatorFunction<string, readonly T[] | readonly T[][] | null> {
    return source =>
        source.pipe(
            debounceTime(searchDebounceTimeMs),
            scan((previousSearched, current) => {
                return previousSearched !== `` && current.startsWith(previousSearched)
                    ? previousSearched
                    : current;
            }, ``),
            distinctUntilChanged(),
            switchMap(value => getSearchFunction(value).pipe(startWith(null))),
            startWith(EMPTY_ARRAY),
        );
}

export const tuiSmartSearch = smartSearch;
