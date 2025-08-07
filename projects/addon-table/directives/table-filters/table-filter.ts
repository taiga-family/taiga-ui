import {type Observable} from 'rxjs';

export interface TuiTableFilter<T> {
    filter(item: T): boolean;
    readonly refresh$: Observable<unknown>;
}
