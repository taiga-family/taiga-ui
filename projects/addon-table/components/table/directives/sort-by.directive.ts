import {
    ContentChildren,
    Directive,
    Inject,
    Input,
    Output,
    QueryList,
} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {EMPTY_QUERY, tuiDefaultProp} from '@taiga-ui/cdk';
import {tuiLightweightToken} from '@taiga-ui/core';
import {filter, map} from 'rxjs/operators';

import {TuiSortByToken} from './sort-by.token';
import type {TuiSortableDirective} from './sortable.directive';
import {TuiSortableToken} from './sortable.token';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: `table[tuiTable][tuiSortBy]`,
    providers: [tuiLightweightToken(TuiSortByToken, TuiSortByDirective)],
})
export class TuiSortByDirective<T extends Partial<Record<keyof T, any>>> {
    @ContentChildren(TuiSortableToken, {descendants: true})
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
