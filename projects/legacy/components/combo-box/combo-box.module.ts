import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDropdownModule} from '@taiga-ui/core';
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
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiComboBoxComponent} from './combo-box.component';
import {TuiComboBoxDirective} from './combo-box.directive';
import {TuiComboBoxStrictDirective} from './combo-box-strict.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiPrimitiveTextfieldModule,
        TuiDropdownModule,
        TuiSelectOptionModule,
        TuiArrowComponent,
        TuiWrapperModule,
        TuiTextfieldControllerModule,
        TuiLegacyDropdownOpenMonitorDirective,
    ],
    declarations: [
        TuiComboBoxComponent,
        TuiComboBoxStrictDirective,
        TuiComboBoxDirective,
    ],
    exports: [
        TuiComboBoxComponent,
        TuiComboBoxStrictDirective,
        TuiComboBoxDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiComboBoxModule {}
