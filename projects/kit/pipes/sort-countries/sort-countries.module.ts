import {NgModule} from '@angular/core';

import {TuiSortCountriesPipe} from './sort-countries.pipe';

@NgModule({
    declarations: [TuiSortCountriesPipe],
    exports: [TuiSortCountriesPipe],
})
export class TuiSortCountriesPipeModule {}
