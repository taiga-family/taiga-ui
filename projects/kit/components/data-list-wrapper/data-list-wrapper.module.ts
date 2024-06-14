import {NgForOf, NgIf} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiElement} from '@taiga-ui/cdk';
import {TuiDataList, TuiLoader} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiDataListGroupWrapper} from './data-list-group-wrapper.component';
import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@NgModule({
    imports: [
        NgIf,
        NgForOf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiDataList,
        TuiElement,
        TuiLoader,
    ],
    declarations: [TuiDataListWrapperComponent, TuiDataListGroupWrapper],
    exports: [TuiDataListWrapperComponent, TuiDataListGroupWrapper, TuiDataList],
})
export class TuiDataListWrapper {}
