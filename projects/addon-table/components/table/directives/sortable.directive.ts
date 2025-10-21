import {type BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {Directive, effect, forwardRef, inject, input} from '@angular/core';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiTableTh} from '../th/th.component';
import {TuiTableSortBy} from './sort-by.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'th[tuiTh][tuiSortable]',
})
export class TuiTableSortable<T extends Partial<Record<keyof T, unknown>>> {
    private readonly table: TuiTableDirective<T> = inject(TuiTableDirective<T>);
    private readonly th: TuiTableTh<T> = inject(TuiTableTh<T>);
    private readonly sortBy = inject<TuiTableSortBy<T>>(forwardRef(() => TuiTableSortBy));

    public readonly sortable = input<BooleanInput, any>(undefined, {
        alias: 'tuiSortable',
        transform: coerceBooleanProperty,
    });

    protected readonly setSorter = effect(() => {
        if (this.sortable()) {
            this.sorter = this.match ? this.table.sorter : this.sorter;
            tuiSetSignal(this.th.sorter, this.sorter);
        } else {
            tuiSetSignal(this.th.sorter, null);
        }
    });

    public get key(): keyof T {
        return this.th.key;
    }

    public sorter: TuiComparator<T> = (): number => 0;

    public check(): void {
        if (this.match && this.table.sorter !== this.sorter) {
            this.table.updateSorter(this.sorter);
        }
    }

    private get match(): boolean {
        return this.sortBy.tuiSortBy === this.key;
    }
}
