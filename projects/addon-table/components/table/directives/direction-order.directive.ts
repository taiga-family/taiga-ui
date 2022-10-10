import {Directive, Inject, Input, Output} from '@angular/core';
import {map} from 'rxjs/operators';

import {TuiTableDirective} from './table.directive';

@Directive({
    selector: `table[tuiTable][tuiDirectionOrder]`,
})
export class TuiDirectionOrderDirective<T> {
    @Input()
    set directionOrder(order: 'asc' | 'desc') {
        this.table.direction = order === `asc` ? 1 : -1;
    }

    @Output()
    readonly directionOrderChange = this.table.directionChange.pipe(
        map(dir => (dir === 1 ? `asc` : `desc`)),
    );

    constructor(
        @Inject(TuiTableDirective) private readonly table: TuiTableDirective<T>,
    ) {}
}
