import {AsyncPipe, NgIf} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDataListComponent} from './data-list.component';
import {TuiDataListDirective} from './data-list.directive';
import {TuiOptGroupDirective} from './opt-group.directive';
import {TuiOptionDirective} from './option.component';
import {TuiWithDataListDirective} from './with-data-list.directive';

@NgModule({
    imports: [TuiWithDataListDirective, NgIf, AsyncPipe, PolymorpheusOutlet],
    declarations: [
        TuiDataListComponent,
        TuiOptionDirective,
        TuiOptGroupDirective,
        TuiDataListDirective,
    ],
    exports: [
        TuiDataListComponent,
        TuiOptionDirective,
        TuiOptGroupDirective,
        TuiDataListDirective,
        TuiWithDataListDirective,
    ],
})
export class TuiDataList {}
