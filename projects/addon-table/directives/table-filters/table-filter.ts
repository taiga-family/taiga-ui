import type {Observable} from 'rxjs';

export interface TuiTableFilter<T> {
    readonly refresh$: Observable<unknown>;
    filter(item: T): boolean;
}
