import {NgModule} from '@angular/core';
import {TuiDataListDirective} from '@taiga-ui/core';

import {TuiDataListGroupWrapperComponent} from './data-list-group-wrapper.component';
import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@NgModule({
    imports: [
        TuiDataListDirective,
        TuiDataListWrapperComponent,
        TuiDataListGroupWrapperComponent,
    ],
    exports: [
        TuiDataListWrapperComponent,
        TuiDataListGroupWrapperComponent,
        TuiDataListDirective,
    ],
})
export class TuiDataListWrapper {}
