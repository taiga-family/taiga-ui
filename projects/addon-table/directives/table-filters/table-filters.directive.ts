import {Directive} from '@angular/core';
import {
    identity,
    map,
    merge,
    type Observable,
    ReplaySubject,
    startWith,
    switchMap,
} from 'rxjs';

import {type TuiTableFilter} from './table-filter';

@Directive({
    selector: '[tuiTableFilters]',
})
export class TuiTableFiltersDirective<T> {
    readonly #refresh$ = new ReplaySubject<Observable<unknown>>(1);

    #filters: ReadonlyArray<TuiTableFilter<T>> = [];

    public register(filter: TuiTableFilter<T>): void {
        this.#filters = this.#filters.concat(filter);
        this.#update();
    }

    public unregister(filter: TuiTableFilter<T>): void {
        this.#filters = this.#filters.filter((item) => item !== filter);
        this.#update();
    }

    public filter(items: readonly T[]): Observable<readonly T[]> {
        return this.#refresh$.pipe(
            switchMap(identity),
            startWith(null),
            map(() => items.filter((item) => this.#check(item))),
        );
    }

    #check(item: T): boolean {
        return this.#filters.every((filter) => filter.filter(item));
    }

    #update(): void {
        this.#refresh$.next(merge(...this.#filters.map(({refresh$}) => refresh$)));
    }
}
