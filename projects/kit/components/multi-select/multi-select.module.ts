import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneDirective, TuiLetDirective, TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiLinkDirective,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiArrowModule} from '@taiga-ui/kit/components/arrow';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiInputTagModule} from '@taiga-ui/kit/components/input-tag';
import {TuiMultiSelectOptionModule} from '@taiga-ui/kit/components/multi-select-option';
import {TuiStringifyContentPipeModule} from '@taiga-ui/kit/pipes/stringify-content';
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
        TuiArrowModule,
        TuiLetDirective,
        TuiMapperPipe,
        TuiSvgComponent,
        TuiHostedDropdownModule,
        TuiInputTagModule,
        TuiMultiSelectOptionModule,
        TuiDataListWrapperModule,
        TuiMapperPipe,
        TuiLinkDirective,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        TuiStringifyContentPipeModule,
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
