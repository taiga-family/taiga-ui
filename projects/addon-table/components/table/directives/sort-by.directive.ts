import {
    contentChildren,
    Directive,
    effect,
    inject,
    input,
    untracked,
} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {combineLatest, debounceTime, delay, filter, map, type Observable} from 'rxjs';

import {type TuiSortChange} from '../table.options';
import {TuiTableSortable} from './sortable.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'table[tuiTable][tuiSortBy]',
})
export class TuiTableSortBy<T extends Partial<Record<keyof T, unknown>>> {
    private readonly sortables = contentChildren<TuiTableSortable<T>>(TuiTableSortable, {
        descendants: true,
    });

    private readonly table = inject(TuiTableDirective<T>);

    /**
     * @deprecated
     */
    private readonly tuiSortByChange$ = this.table.sorterChange$.pipe(
        // delay is for getting actual ContentChildren (sortables) https://github.com/angular/angular/issues/38976
        delay(0),
        filter(() => !!this.sortables().length),
        map((sorter) => this.getKey(sorter)),
    );

    /**
     * @deprecated: use tuiSortChange
     */
    public readonly tuiSortByChange = outputFromObservable(this.tuiSortByChange$);

    public readonly tuiSortChange$: Observable<TuiSortChange<T>> = combineLatest([
        this.tuiSortByChange$,
        this.table.directionChange$,
    ]).pipe(
        debounceTime(0),
        map(([sortKey, sortDirection]) => ({
            sortBy: sortKey,
            orderBy: sortDirection,
            sortKey,
            sortDirection,
        })),
    );

    public readonly tuiSortChange = outputFromObservable(this.tuiSortChange$);

    public readonly tuiSortBy = input<string | keyof T | null>(null);

    protected readonly checkSortables = effect((_, __ = this.tuiSortBy()) =>
        untracked(this.sortables).forEach((s) => s.check()),
    );

    private getKey(sorter: TuiComparator<T> | null): keyof T | null {
        return this.sortables().find((s) => s.sorter() === sorter)?.key || null;
    }
}
