import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
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

import {TuiComboBoxComponent} from './combo-box.component';
import {TuiComboBoxDirective} from './combo-box.directive';
import {TuiComboBoxStrictDirective} from './combo-box-strict.directive';

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
