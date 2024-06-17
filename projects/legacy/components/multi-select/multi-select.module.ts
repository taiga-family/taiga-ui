import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiLet, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiDataList, TuiDropdownModule, TuiLink} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiStringifyContentPipe} from '@taiga-ui/kit';
import {TuiArrowComponent} from '@taiga-ui/legacy/components/arrow';
import {TuiInputTagModule} from '@taiga-ui/legacy/components/input-tag';
import {TuiMultiSelectOptionModule} from '@taiga-ui/legacy/components/multi-select-option';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

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
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiWrapperModule,
        TuiArrowComponent,
        TuiLet,
        TuiMapperPipe,
        TuiDropdownModule,
        TuiInputTagModule,
        TuiMultiSelectOptionModule,
        TuiDataListWrapper,
        TuiMapperPipe,
        TuiLink,
        TuiDataList,
        TuiTextfieldControllerModule,
        TuiStringifyContentPipe,
        TuiLegacyDropdownOpenMonitorDirective,
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
