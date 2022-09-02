import type {PipeTransform} from '@angular/core';
import {Inject, Pipe} from '@angular/core';
import type {Observable} from 'rxjs';

import {TuiTableFiltersDirective} from './table-filters.directive';

@Pipe({
    name: `tuiTableFilters`,
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
