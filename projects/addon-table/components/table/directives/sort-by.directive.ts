import type {QueryList} from '@angular/core';
import {ContentChildren, Directive, inject, Input, Output} from '@angular/core';
import type {TuiComparator} from '@taiga-ui/addon-table/types';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {delay, filter, map} from 'rxjs';

import {TuiSortableDirective} from './sortable.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    standalone: true,
    selector: 'table[tuiTable][tuiSortBy]',
})
export class TuiSortByDirective<T extends Partial<Record<keyof T, any>>> {
    @ContentChildren(TuiSortableDirective, {descendants: true})
    private readonly sortables: QueryList<TuiSortableDirective<T>> = EMPTY_QUERY;

    private readonly table = inject(TuiTableDirective<T>);

    @Output()
    public readonly tuiSortByChange = this.table.sorterChange.pipe(
        // delay is for getting actual ContentChildren (sortables) https://github.com/angular/angular/issues/38976
        delay(0),
        filter(() => !!this.sortables.length),
        map(sorter => this.getKey(sorter)),
    );

    public tuiSortBy: string | keyof T | null = null;

    @Input('tuiSortBy')
    public set sortBy(sortBy: string | keyof T | null) {
        this.tuiSortBy = sortBy;
        this.checkSortables();
    }

    protected checkSortables(): void {
        this.sortables.forEach(s => s.check());
    }

    private getKey(sorter: TuiComparator<T> | null): keyof T | null {
        return this.sortables.find(s => s.sorter === sorter)?.key || null;
    }
}
