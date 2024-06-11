import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDataList, TuiDropdownModule} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiStringifyContentPipe} from '@taiga-ui/kit';
import {TuiArrowComponent} from '@taiga-ui/legacy/components/arrow';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiSelectOptionModule} from '@taiga-ui/legacy/components/select-option';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiNativeSelectComponent} from './native-select/native-select.component';
import {TuiNativeSelectGroupComponent} from './native-select/native-select-group.component';
import {TuiSelectComponent} from './select.component';
import {TuiSelectDirective} from './select.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiPrimitiveTextfieldModule,
        TuiDropdownModule,
        TuiSelectOptionModule,
        TuiArrowComponent,
        TuiWrapperModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapper,
        TuiDataList,
        TuiStringifyContentPipe,
        TuiLegacyDropdownOpenMonitorDirective,
    ],
    declarations: [
        TuiSelectComponent,
        TuiSelectDirective,
        TuiNativeSelectComponent,
        TuiNativeSelectGroupComponent,
    ],
    exports: [
        TuiSelectComponent,
        TuiSelectDirective,
        TuiTextfieldComponent,
        TuiNativeSelectComponent,
        TuiNativeSelectGroupComponent,
    ],
})
export class TuiSelectModule {}
