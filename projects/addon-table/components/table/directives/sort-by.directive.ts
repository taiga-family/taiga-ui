import {
    computed,
    contentChildren,
    Directive,
    effect,
    inject,
    input,
    untracked,
} from '@angular/core';
import {outputFromObservable, toObservable} from '@angular/core/rxjs-interop';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {filter, skip} from 'rxjs';

import {type TuiSortChange} from '../table.options';
import {TuiTableSortable} from './sortable.directive';
import {TuiTableDirective} from './table.directive';

@Directive({selector: 'table[tuiTable][tuiSortBy]'})
export class TuiTableSortBy<T extends Partial<Record<keyof T, unknown>>> {
    private readonly table = inject(TuiTableDirective<T>);

    private readonly sortables = contentChildren<TuiTableSortable<T>>(TuiTableSortable, {
        descendants: true,
    });

    private readonly sortChange = computed<TuiSortChange<T>>(() => ({
        sortKey: this.sortables().length ? this.getKey(this.table.sorter()) : null,
        sortDirection: this.table.direction(),
    }));

    protected readonly setTableSorter = effect(() => {
        const key = this.tuiSortBy();
        const sortable = this.sortables().find((item) => item.key === key);

        if (sortable && untracked(this.table.sorter) !== sortable.sorter()) {
            this.table.sorter.set(sortable.sorter());
        }
    });

    public readonly tuiSortChange = outputFromObservable(
        toObservable(this.sortChange).pipe(
            filter(() => Boolean(this.sortables().length)),
            skip(1),
        ),
    );

    public readonly tuiSortBy = input<string | keyof T | null>(null);

    private getKey(sorter: TuiComparator<T> | null): keyof T | null {
        return this.sortables().find((s) => s.sorter() === sorter)?.key || null;
    }
}
