import {contentChildren, Directive, inject, Input, Output} from '@angular/core';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {combineLatest, debounceTime, delay, filter, map, type Observable} from 'rxjs';

import {type TuiSortChange} from '../table.options';
import {TuiTableSortable} from './sortable.directive';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'table[tuiTable][tuiSortBy]',
})
export class TuiTableSortBy<T extends Partial<Record<keyof T, unknown>>> {
    private readonly sortables = contentChildren<TuiTableSortable<T>>(TuiTableSortable, {
        descendants: true,
    });

    private readonly table = inject(TuiTableDirective<T>);

    /**
     * @deprecated: use tuiSortChange
     */
    @Output()
    public readonly tuiSortByChange = this.table.sorterChange.pipe(
        // delay is for getting actual ContentChildren (sortables) https://github.com/angular/angular/issues/38976
        delay(0),
        filter(() => !!this.sortables().length),
        map((sorter) => this.getKey(sorter)),
    );

    @Output()
    public readonly tuiSortChange: Observable<TuiSortChange<T>> = combineLatest([
        this.tuiSortByChange,
        this.table.directionChange,
    ]).pipe(
        debounceTime(0),
        map(([sortKey, sortDirection]) => ({
            sortBy: sortKey,
            orderBy: sortDirection,
            sortKey,
            sortDirection,
        })),
    );

    public tuiSortBy: string | keyof T | null = null;

    @Input('tuiSortBy')
    public set sortBy(sortBy: string | keyof T | null) {
        this.tuiSortBy = sortBy;
        this.checkSortables();
    }

    protected checkSortables(): void {
        this.sortables().forEach((s) => s.check());
    }

    private getKey(sorter: TuiComparator<T> | null): keyof T | null {
        return this.sortables().find((s) => s.sorter === sorter)?.key || null;
    }
}
