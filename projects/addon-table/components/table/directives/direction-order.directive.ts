import {Directive, effect, inject, input} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
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

    public readonly directionOrder = input<'asc' | 'desc'>();

    protected readonly setTableDirection = effect((_, order = this.directionOrder()) => {
        tuiSetSignal(
            this.table.direction,
            order === 'asc' ? TuiSortDirection.Asc : TuiSortDirection.Desc,
        );
    });
}
