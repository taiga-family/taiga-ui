import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiDataList,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiStringifyContentPipeModule} from '@taiga-ui/kit';
import {TuiArrowComponent} from '@taiga-ui/legacy/components/arrow';
import {TuiSelectOptionModule} from '@taiga-ui/legacy/components/select-option';
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
        TuiDataListWrapperModule,
        TuiDataList,
        TuiStringifyContentPipeModule,
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
        TuiTextfieldLegacyComponent,
        TuiNativeSelectComponent,
        TuiNativeSelectGroupComponent,
    ],
})
export class TuiSelectModule {}
