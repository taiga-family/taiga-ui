import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiPure} from '@taiga-ui/cdk';

import {TuiTableDirective} from '../directives/table.directive';

@Pipe({
    name: `tuiTableSort`,
    pure: false,
})
export class TuiTableSortPipe<T extends Record<keyof T, any>> implements PipeTransform {
    constructor(
        @Inject(TuiTableDirective) private readonly table: TuiTableDirective<T>,
    ) {}

    transform(data: readonly T[]): readonly T[] {
        return this.sort(data, this.table.sorter, this.table.direction);
    }

    @tuiPure
    private sort(
        data: readonly T[],
        sorter: TuiComparator<T>,
        direction: -1 | 1,
    ): readonly T[] {
        return [...data].sort((a, b) => direction * sorter(a, b));
    }
}
