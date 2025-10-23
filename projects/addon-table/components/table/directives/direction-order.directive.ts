import {Directive, inject, Input} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';

import {TuiSortDirection} from '../table.options';
import {TuiTableDirective} from './table.directive';

@Directive({
    selector: 'table[tuiTable][tuiDirectionOrder]',
})
export class TuiTableDirectionOrder<T> {
    private readonly table = inject(TuiTableDirective<T>);

    private readonly directionOrderChange$ = this.table.directionChange$.pipe(
        map((dir) => (dir === 1 ? 'asc' : 'desc')),
    );

    /**
     * @deprecated: use tuiSortChange
     */
    public readonly directionOrderChange = outputFromObservable(
        this.directionOrderChange$,
    );

    @Input()
    public set directionOrder(order: 'asc' | 'desc') {
        this.table.direction =
            order === 'asc' ? TuiSortDirection.Asc : TuiSortDirection.Desc;
    }
}
