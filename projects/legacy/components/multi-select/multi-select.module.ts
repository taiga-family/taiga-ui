import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneDirective, TuiLetDirective, TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiDataList,
    TuiHostedDropdownModule,
    TuiLinkDirective,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiStringifyContentPipe} from '@taiga-ui/kit';
import {TuiArrowComponent} from '@taiga-ui/legacy/components/arrow';
import {TuiInputTagModule} from '@taiga-ui/legacy/components/input-tag';
import {TuiMultiSelectOptionModule} from '@taiga-ui/legacy/components/multi-select-option';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHideSelectedPipe} from './hide-selected.pipe';
import {TuiMultiSelectComponent} from './multi-select.component';
import {TuiMultiSelectDirective} from './multi-select.directive';
import {TuiMultiSelectGroupComponent} from './multi-select-group/multi-select-group.component';
import {TuiMultiSelectGroupDirective} from './multi-select-group/multi-select-group.directive';
import {TuiNativeMultiSelectComponent} from './native-multi-select/native-multi-select.component';
import {TuiNativeMultiSelectGroupComponent} from './native-multi-select/native-multi-select-group.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiActiveZoneDirective,
        TuiArrowComponent,
        TuiLetDirective,
        TuiMapperPipe,
        TuiSvgComponent,
        TuiHostedDropdownModule,
        TuiInputTagModule,
        TuiMultiSelectOptionModule,
        TuiDataListWrapper,
        TuiMapperPipe,
        TuiLinkDirective,
        TuiDataList,
        TuiTextfieldControllerModule,
        TuiStringifyContentPipe,
    ],
    declarations: [
        TuiMultiSelectComponent,
        TuiMultiSelectGroupComponent,
        TuiMultiSelectGroupDirective,
        TuiHideSelectedPipe,
        TuiNativeMultiSelectComponent,
        TuiNativeMultiSelectGroupComponent,
        TuiMultiSelectDirective,
    ],
    exports: [
        TuiMultiSelectComponent,
        TuiMultiSelectGroupComponent,
        TuiMultiSelectGroupDirective,
        TuiHideSelectedPipe,
        TuiMultiSelectDirective,
        TuiNativeMultiSelectComponent,
        TuiNativeMultiSelectGroupComponent,
    ],
})
export class TuiMultiSelectModule {}
