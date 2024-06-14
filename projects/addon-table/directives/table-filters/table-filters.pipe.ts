import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {Observable} from 'rxjs';

import {TuiTableFiltersDirective} from './table-filters.directive';

@Pipe({
    name: 'tuiTableFilters',
})
export class TuiTableFiltersPipe<T> implements PipeTransform {
    private readonly filters = inject(TuiTableFiltersDirective<T>);

    public transform(items: readonly T[]): Observable<readonly T[]> {
        return this.filters.filter(items);
    }
}
