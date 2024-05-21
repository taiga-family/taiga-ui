import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiElementDirective} from '@taiga-ui/cdk';
import {TuiDataList, TuiDataListDirective, TuiLoaderComponent} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDataListGroupWrapperComponent} from './data-list-group-wrapper.component';
import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiElementDirective,
        TuiDataList,
        TuiLoaderComponent,
    ],
    declarations: [TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent],
    exports: [
        TuiDataListWrapperComponent,
        TuiDataListGroupWrapperComponent,
        TuiDataListDirective,
    ],
})
export class TuiDataListWrapperModule {}
