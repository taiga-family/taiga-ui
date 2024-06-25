import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiDataListWrapper} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiStringifyContentPipe} from '@taiga-ui/kit/pipes/stringify-content';
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

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiPrimitiveTextfieldModule,
        TuiSelectOptionModule,
        TuiArrowComponent,
        TuiWrapperModule,
        TuiTextfieldControllerModule,
        TuiStringifyContentPipe,
        TuiLegacyDropdownOpenMonitorDirective,
        ...TuiDropdown,
        ...TuiDataList,
        ...TuiDataListWrapper,
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
        ...TuiDropdown,
        ...TuiDataList,
        ...TuiDataListWrapper,
    ],
})
export class TuiSelectModule {}
