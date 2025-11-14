import {inject, Pipe, type PipeTransform} from '@angular/core';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiTableDirective} from '../directives/table.directive';
import {type TuiSortDirection} from '../table.options';

@Pipe({
    name: 'tuiTableSort',
    pure: false,
})
export class TuiTableSortPipe<K> implements PipeTransform {
    private readonly table = inject(TuiTableDirective<K>);

    public transform<T extends K>(data?: readonly T[] | null): readonly T[] {
        return this.sort<T>(data ?? [], this.table.sorter, this.table.direction());
    }

    @tuiPure
    private sort<T extends K>(
        data: readonly T[],
        sorter: TuiComparator<T>,
        direction: TuiSortDirection,
    ): readonly T[] {
        return [...data].sort((a, b) => direction * sorter(a, b));
    }
}
