import type {BooleanInput} from '@angular/cdk/coercion';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import type {OnChanges} from '@angular/core';
import {Directive, forwardRef, inject, Input} from '@angular/core';
import type {TuiComparator} from '@taiga-ui/addon-table/types';

import {TuiTableTh} from '../th/th.component';
import {TuiTableSortBy} from './sort-by.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    standalone: true,
    selector: 'th[tuiTh][tuiSortable]',
})
export class TuiTableSortable<T extends Partial<Record<keyof T, any>>>
    implements OnChanges
{
    private readonly table: TuiTableDirective<T> = inject(TuiTableDirective<T>);
    private readonly th: TuiTableTh<T> = inject(TuiTableTh<T>);
    private readonly sortBy = inject<TuiTableSortBy<T>>(forwardRef(() => TuiTableSortBy));

    @Input({
        alias: 'tuiSortable',
        transform: coerceBooleanProperty,
    })
    public sortable: BooleanInput;

    public get key(): keyof T {
        return this.th.key;
    }

    public sorter: TuiComparator<T> = (): number => 0;

    public ngOnChanges(): void {
        if (this.sortable) {
            this.sorter = this.match ? this.table.sorter : this.sorter;
            this.th.sorter = this.sorter;
        } else {
            this.th.sorter = null;
        }
    }

    public check(): void {
        if (this.match && this.table.sorter !== this.sorter) {
            this.table.updateSorter(this.sorter);
        }
    }

    private get match(): boolean {
        return this.sortBy.tuiSortBy === this.key;
    }
}
