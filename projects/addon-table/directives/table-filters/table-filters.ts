import {TuiGenericFilter} from './generic-filter.directive';
import {TuiTableFilterDirective} from './table-filter.directive';
import {TuiTableFiltersDirective} from './table-filters.directive';
import {TuiTableFiltersPipe} from './table-filters.pipe';

export const TuiTableFilters = [
    TuiTableFiltersDirective,
    TuiTableFilterDirective,
    TuiTableFiltersPipe,
    TuiGenericFilter,
] as const;
