import {Directive, inject, Input, Output} from '@angular/core';
import {map} from 'rxjs';

import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'table[tuiTable][tuiDirectionOrder]',
})
export class TuiDirectionOrderDirective<T> {
    private readonly table = inject(TuiTableDirective<T>);

    @Input()
    set directionOrder(order: 'asc' | 'desc') {
        this.table.direction = order === 'asc' ? 1 : -1;
    }

    @Output()
    readonly directionOrderChange = this.table.directionChange.pipe(
        map(dir => (dir === 1 ? 'asc' : 'desc')),
    );
}
