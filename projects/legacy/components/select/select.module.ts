import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiStringifyContentPipe} from '@taiga-ui/kit';
import {TuiArrowComponent} from '@taiga-ui/legacy/components/arrow';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy/components/hosted-dropdown';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiSelectOptionModule} from '@taiga-ui/legacy/components/select-option';
import {
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiNativeSelectComponent} from './native-select/native-select.component';
import {TuiNativeSelectGroupComponent} from './native-select/native-select-group.component';
import {TuiSelectComponent} from './select.component';
import {TuiSelectDirective} from './select.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiActiveZoneDirective,
        TuiPrimitiveTextfieldModule,
        TuiHostedDropdownModule,
        TuiSelectOptionModule,
        TuiArrowComponent,
        TuiWrapperModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapper,
        TuiDataList,
        TuiStringifyContentPipe,
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
