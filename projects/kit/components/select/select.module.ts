import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiArrowModule} from '@taiga-ui/kit/components/arrow';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiSelectOptionModule} from '@taiga-ui/kit/components/select-option';
import {TuiStringifyContentPipeModule} from '@taiga-ui/kit/pipes';
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
        TuiArrowModule,
        TuiWrapperModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
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
