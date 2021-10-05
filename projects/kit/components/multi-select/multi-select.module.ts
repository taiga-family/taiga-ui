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
} from '@taiga-ui/core';
import {TuiInputTagModule} from '@taiga-ui/kit/components/input-tag';
import {TuiMultiSelectOptionModule} from '@taiga-ui/kit/components/multi-select-option';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiHideSelectedPipe} from './hide-selected.pipe';
import {TuiMultiSelectGroupResetDirective} from './multi-select-group/multi-select-group-reset.directive';
import {TuiMultiSelectGroupComponent} from './multi-select-group/multi-select-group.component';
import {TuiMultiSelectGroupDirective} from './multi-select-group/multi-select-group.directive';
import {TuiMultiSelectComponent} from './multi-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiPreventDefaultModule,
        TuiActiveZoneModule,
        TuiLetModule,
        TuiMapperPipeModule,
        TuiHoveredModule,
        TuiSvgModule,
        TuiHostedDropdownModule,
        TuiInputTagModule,
        TuiMultiSelectOptionModule,
        TuiPrimitiveCheckboxModule,
        TuiDataListModule,
    ],
    declarations: [
        TuiMultiSelectComponent,
        TuiMultiSelectGroupComponent,
        TuiMultiSelectGroupDirective,
        TuiMultiSelectGroupResetDirective,
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
