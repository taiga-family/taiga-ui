import {Pipe, type PipeTransform} from '@angular/core';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiDefaultSort} from '@taiga-ui/cdk/utils/miscellaneous';

@Pipe({name: 'tuiSorter'})
export class TuiSorterPipe implements PipeTransform {
    public transform<T>(key: keyof T): TuiComparator<T> {
        return (a, b) => tuiDefaultSort(a[key], b[key]);
    }
}
