import {Directive, DoCheck, forwardRef, Inject, OnInit} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiLightweightToken} from '@taiga-ui/core';

import {TuiThComponent} from '../th/th.component';
import type {TuiSortByDirective} from './sort-by.directive';
import {TuiSortByToken} from './sort-by.token';
import {TuiSortableToken} from './sortable.token';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: `th[tuiTh][tuiSortable]`,
    providers: [tuiLightweightToken(TuiSortableToken, TuiSortableDirective)],
})
export class TuiSortableDirective<T extends Partial<Record<keyof T, any>>>
    implements DoCheck, OnInit
{
    constructor(
        @Inject(forwardRef(() => TuiSortByToken))
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
