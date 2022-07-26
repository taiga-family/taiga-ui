import {Inject, Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';

import {TuiTableFiltersDirective} from './table-filters.directive';

@Pipe({
    name: 'tuiTableFilters',
})
export class TuiTableFiltersPipe<T> implements PipeTransform {
    constructor(
        @Inject(TuiTableFiltersDirective)
        private readonly filters: TuiTableFiltersDirective<T>,
    ) {}

    transform(items: readonly T[]): Observable<readonly T[]> {
        return this.filters.filter(items);
    }
}
