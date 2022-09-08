import {Directive, DoCheck, forwardRef, Inject, OnInit} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';

import {TuiThComponent} from '../th/th.component';
import {TuiSortByDirective} from './sort-by.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: `th[tuiTh][tuiSortable]`,
})
export class TuiSortableDirective<T extends Record<keyof T, any>>
    implements DoCheck, OnInit
{
    constructor(
        @Inject(forwardRef(() => TuiSortByDirective))
        private readonly sortBy: TuiSortByDirective<T>,
        @Inject(TuiTableDirective) private readonly table: TuiTableDirective<T>,
        @Inject(TuiThComponent) private readonly th: TuiThComponent<T>,
    ) {}

    sorter: TuiComparator<T> = (): number => 0;

    get key(): keyof T {
        return this.th.key;
    }

    ngOnInit(): void {
        this.sorter = this.match ? this.table.sorter : this.sorter;
        this.th.sorter = this.sorter;
    }

    ngDoCheck(): void {
        if (this.match && this.table.sorter !== this.sorter) {
            this.table.updateSorter(this.sorter);
        }
    }

    private get match(): boolean {
        return this.sortBy.tuiSortBy === this.key;
    }
}
