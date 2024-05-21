import {NgModule} from '@angular/core';

import {TuiDataListComponent} from './data-list.component';
import {TuiDataListDirective} from './data-list.directive';
import {TuiOptGroupDirective} from './opt-group.directive';
import {TuiOptionComponent} from './option.component';

@NgModule({
    imports: [
        TuiDataListComponent,
        TuiOptionComponent,
        TuiOptGroupDirective,
        TuiDataListDirective,
    ],
    exports: [
        TuiDataListComponent,
        TuiOptionComponent,
        TuiOptGroupDirective,
        TuiDataListDirective,
    ],
})
export class TuiDataList {}
