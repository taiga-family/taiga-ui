import {EMPTY_ARRAY} from '@taiga-ui/cdk';
import {TuiItems} from '@taiga-ui/core/types';
import {Observable, OperatorFunction} from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    scan,
    startWith,
    switchMap,
} from 'rxjs/operators';

export function smartSearch<T>(
    getSearchFunction: (search: string) => Observable<Exclude<TuiItems<T>, null>>,
    searchDebouceTimeMs: number = 400,
): OperatorFunction<string, TuiItems<T>> {
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
