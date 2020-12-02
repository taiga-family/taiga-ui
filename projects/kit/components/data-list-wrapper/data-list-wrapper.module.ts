import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiElementModule} from '@taiga-ui/cdk';
import {TuiDataListModule, TuiLoaderModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiDataListGroupWrapperComponent} from './data-list-group-wrapper.component';
import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiElementModule,
        TuiDataListModule,
        TuiLoaderModule,
    ],
    declarations: [TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent],
    exports: [TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent],
})
export class TuiDataListWrapperModule {}
