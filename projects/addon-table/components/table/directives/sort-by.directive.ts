import {
    ChangeDetectorRef,
    ContentChildren,
    Directive,
    Inject,
    Input,
    Output,
    QueryList,
} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {filter, map, tap} from 'rxjs/operators';

import {TuiSortableDirective} from './sortable.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'table[tuiTable][tuiSortBy]',
})
export class TuiSortByDirective<T extends Partial<Record<keyof T, any>>> {
    @ContentChildren(TuiSortableDirective, {descendants: true})
    private readonly sortables: QueryList<TuiSortableDirective<T>> = EMPTY_QUERY;

    @Input()
    tuiSortBy: string | keyof T | null = null;

    @Output()
    readonly tuiSortByChange = this.table.sorterChange.pipe(
        // recalculate ContentChildren (sortables) https://github.com/angular/angular/issues/38976
        tap(() => this.cdr.detectChanges()),
        filter(() => !!this.sortables.length),
        map(sorter => this.getKey(sorter)),
    );

    constructor(
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Inject(TuiTableDirective) private readonly table: TuiTableDirective<T>,
    ) {}

    private getKey(sorter: TuiComparator<T> | null): keyof T | null {
        return this.sortables.find(s => s.sorter === sorter)?.key || null;
    }
}
