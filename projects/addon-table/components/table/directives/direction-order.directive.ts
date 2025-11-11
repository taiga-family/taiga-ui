import {Directive, inject, Input, Output} from '@angular/core';
import {map} from 'rxjs';

import {TuiSortDirection} from '../table.options';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'table[tuiTable][tuiDirectionOrder]',
})
export class TuiTableDirectionOrder<T> {
    private readonly table = inject(TuiTableDirective<T>);

    /**
     * @deprecated: use tuiSortChange
     */
    @Output()
    public readonly directionOrderChange = this.table.directionChange.pipe(
        map((dir) => (dir === 1 ? 'asc' : 'desc')),
    );

    @Input()
    public set directionOrder(order: 'asc' | 'desc') {
        this.table.direction =
            order === 'asc' ? TuiSortDirection.Asc : TuiSortDirection.Desc;
    }
}
