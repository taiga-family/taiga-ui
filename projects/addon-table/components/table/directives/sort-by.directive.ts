import {
    computed,
    contentChildren,
    Directive,
    effect,
    inject,
    input,
    output,
} from '@angular/core';
import {type TuiComparator} from '@taiga-ui/addon-table/types';

import {type TuiSortChange} from '../table.options';
import {TuiTableSortable} from './sortable.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'table[tuiTable][tuiSortBy]',
})
export class TuiTableSortBy<T extends Partial<Record<keyof T, unknown>>> {
    private readonly table = inject(TuiTableDirective<T>);
    private readonly sortables = contentChildren<TuiTableSortable<T>>(TuiTableSortable, {
        descendants: true,
    });

    private readonly sortChange = computed<TuiSortChange<T>>(() => ({
        sortKey: this.sortables().length ? this.getKey(this.table.sorter()) : null,
        sortDirection: this.table.direction(),
    }));

    protected readonly sortOutput = effect(() => {
        if (this.sortables().length) {
            this.tuiSortChange.emit(this.sortChange());
        }
    });

    public readonly tuiSortChange = output<TuiSortChange<T>>();
    public readonly tuiSortBy = input<string | keyof T | null>(null);

    private getKey(sorter: TuiComparator<T> | null): keyof T | null {
        return this.sortables().find((s) => s.sorter() === sorter)?.key || null;
    }
}
