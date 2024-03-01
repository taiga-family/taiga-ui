import {Directive, forwardRef, inject, OnInit} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';

import {TuiThComponent} from '../th/th.component';
import {TuiSortByDirective} from './sort-by.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'th[tuiTh][tuiSortable]',
})
export class TuiSortableDirective<T extends Partial<Record<keyof T, any>>>
    implements OnInit
{
    private readonly table = inject(TuiTableDirective<T>);
    private readonly th = inject(TuiThComponent<T>);
    private readonly sortBy = inject<TuiSortByDirective<T>>(
        forwardRef(() => TuiSortByDirective),
    );

    public get key(): keyof T {
        return this.th.key;
    }

    public sorter: TuiComparator<T> = (): number => 0;

    public ngOnInit(): void {
        this.sorter = this.match ? this.table.sorter : this.sorter;
        this.th.sorter = this.sorter;
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
