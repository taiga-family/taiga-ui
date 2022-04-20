import {Directive, DoCheck, Inject} from '@angular/core';

import {TuiThComponent} from '../th/th.component';
import {TuiSortByDirective} from './sort-by.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'th[tuiTh][tuiSortable]',
})
export class TuiSortableDirective<T> implements DoCheck {
    constructor(
        @Inject(TuiSortByDirective) private readonly sortBy: TuiSortByDirective<T>,
        @Inject(TuiTableDirective) private readonly table: TuiTableDirective<T>,
        @Inject(TuiThComponent) private readonly th: TuiThComponent<T>,
    ) {
        this.th.sorter = this.sorter;
    }

    readonly sorter = () => 0;

    get key(): keyof T {
        return this.th.key;
    }

    ngDoCheck() {
        if (this.sortBy.tuiSortBy === this.key && this.table.sorter !== this.sorter) {
            this.table.updateSorter(this.sorter);
        }
    }
}
