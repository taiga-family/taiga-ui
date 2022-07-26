import {NgModule} from '@angular/core';

import {TuiGenericFilterDirective} from './generic-filter.directive';
import {TuiTableFilterDirective} from './table-filter.directive';
import {TuiTableFiltersDirective} from './table-filters.directive';
import {TuiTableFiltersPipe} from './table-filters.pipe';

@NgModule({
    declarations: [
        TuiTableFiltersDirective,
        TuiTableFilterDirective,
        TuiTableFiltersPipe,
        TuiGenericFilterDirective,
    ],
    exports: [
        TuiTableFiltersDirective,
        TuiTableFilterDirective,
        TuiTableFiltersPipe,
        TuiGenericFilterDirective,
    ],
})
export class TuiTableFiltersModule {}
