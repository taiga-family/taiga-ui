import {
    ContentChildren,
    Directive,
    Inject,
    Input,
    Output,
    QueryList,
} from '@angular/core';
import type {TuiComparator} from '@taiga-ui/addon-table/types';
import {EMPTY_QUERY, tuiDefaultProp} from '@taiga-ui/cdk';
import {filter, map} from 'rxjs/operators';

import {TuiSortableDirective} from './sortable.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: `table[tuiTable][tuiSortBy]`,
})
export class TuiSortByDirective<T> {
    @ContentChildren(TuiSortableDirective, {descendants: true})
    private readonly sortables: QueryList<TuiSortableDirective<T>> = EMPTY_QUERY;

    @Input()
    @tuiDefaultProp()
    tuiSortBy: keyof T | string | null = null;

    @Output()
    readonly tuiSortByChange = this.table.sorterChange.pipe(
        filter(() => !!this.sortables.length),
        map(sorter => this.getKey(sorter)),
    );

    constructor(
        @Inject(TuiTableDirective) private readonly table: TuiTableDirective<T>,
    ) {}

    private getKey(sorter: TuiComparator<T> | null): keyof T | null {
        return this.sortables.find(s => s.sorter === sorter)?.key || null;
    }
}
