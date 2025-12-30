import {type BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {
    computed,
    Directive,
    effect,
    forwardRef,
    inject,
    input,
    untracked,
} from '@angular/core';
import {type TuiComparator} from '@taiga-ui/addon-table/types';

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

    protected readonly setThSorter = effect(() => {
        this.th.sorter.set(this.sortable() ? this.sorter() : null);
    });

    protected readonly setTableSorter = effect(() => {
        if (this.match && untracked(this.table.sorter) !== this.sorter()) {
            this.table.updateSorter(this.sorter());
        }
    });

    public readonly sorter = computed<TuiComparator<T>>(() =>
        this.sortable() && untracked(() => this.match)
            ? untracked(this.table.sorter)
            : (): number => 0,
    );

    public get key(): keyof T {
        return this.th.key;
    }

    private get match(): boolean {
        return this.sortBy.tuiSortBy() === this.key;
    }
}
