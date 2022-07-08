import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiActiveZoneModule,
    TuiHoveredModule,
    TuiLetModule,
    TuiMapperPipeModule,
    TuiPreventDefaultModule,
} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveCheckboxModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiArrowModule} from '@taiga-ui/kit/components/arrow';
import {TuiInputTagModule} from '@taiga-ui/kit/components/input-tag';
import {TuiMultiSelectOptionModule} from '@taiga-ui/kit/components/multi-select-option';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHideSelectedPipe} from './hide-selected.pipe';
import {TuiMultiSelectComponent} from './multi-select.component';
import {TuiMultiSelectGroupComponent} from './multi-select-group/multi-select-group.component';
import {TuiMultiSelectGroupDirective} from './multi-select-group/multi-select-group.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiPreventDefaultModule,
        TuiActiveZoneModule,
        TuiArrowModule,
        TuiLetModule,
        TuiMapperPipeModule,
        TuiHoveredModule,
        TuiSvgModule,
        TuiHostedDropdownModule,
        TuiInputTagModule,
        TuiMultiSelectOptionModule,
        TuiPrimitiveCheckboxModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [
        TuiMultiSelectComponent,
        TuiMultiSelectGroupComponent,
        TuiMultiSelectGroupDirective,
        TuiHideSelectedPipe,
    ],
    exports: [
        TuiMultiSelectComponent,
        TuiMultiSelectGroupComponent,
        TuiMultiSelectGroupDirective,
        TuiHideSelectedPipe,
    ],
})
export class TuiMultiSelectModule {}
