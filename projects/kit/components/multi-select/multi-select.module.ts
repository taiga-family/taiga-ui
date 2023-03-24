import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiActiveZoneModule,
    TuiLetModule,
    TuiMapperPipeModule,
    TuiPreventDefaultModule,
} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiArrowModule} from '@taiga-ui/kit/components/arrow';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiInputTagModule} from '@taiga-ui/kit/components/input-tag';
import {TuiMultiSelectOptionModule} from '@taiga-ui/kit/components/multi-select-option';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHideSelectedPipe} from './hide-selected.pipe';
import {TuiMultiSelectComponent} from './multi-select.component';
import {TuiMultiSelectDirective} from './multi-select.directive';
import {TuiMultiSelectGroupComponent} from './multi-select-group/multi-select-group.component';
import {TuiMultiSelectGroupDirective} from './multi-select-group/multi-select-group.directive';
import {TuiNativeSelectComponent} from './native-multi-select/native-select.component';
import {TuiNativeSelectGroupComponent} from './native-multi-select/native-select-group.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiPreventDefaultModule,
        TuiActiveZoneModule,
        TuiArrowModule,
        TuiLetModule,
        TuiMapperPipeModule,
        TuiSvgModule,
        TuiHostedDropdownModule,
        TuiInputTagModule,
        TuiMultiSelectOptionModule,
        TuiDataListWrapperModule,
        TuiMapperPipeModule,
        TuiLinkModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [
        TuiMultiSelectComponent,
        TuiMultiSelectGroupComponent,
        TuiMultiSelectGroupDirective,
        TuiHideSelectedPipe,
        TuiNativeSelectComponent,
        TuiNativeSelectGroupComponent,
        TuiMultiSelectDirective,
    ],
    exports: [
        TuiMultiSelectComponent,
        TuiMultiSelectGroupComponent,
        TuiMultiSelectGroupDirective,
        TuiHideSelectedPipe,
        TuiMultiSelectDirective,
        TuiNativeSelectComponent,
        TuiNativeSelectGroupComponent,
    ],
})
export class TuiMultiSelectModule {}
