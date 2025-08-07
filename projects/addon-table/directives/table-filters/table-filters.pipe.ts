import {inject, Pipe, type PipeTransform} from '@angular/core';
import {type Observable} from 'rxjs';

import {TuiTableFiltersDirective} from './table-filters.directive';

@Pipe({
    standalone: true,
    name: 'tuiTableFilters',
})
export class TuiTableFiltersPipe<T> implements PipeTransform {
    private readonly filters = inject(TuiTableFiltersDirective<T>);

    public transform<T>(items: readonly T[]): Observable<readonly T[]> {
        return this.filters.filter(items);
    }
}
