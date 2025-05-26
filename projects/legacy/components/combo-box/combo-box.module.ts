import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
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

import {TuiComboBoxComponent} from './combo-box.component';
import {TuiComboBoxDirective} from './combo-box.directive';
import {TuiComboBoxStrictDirective} from './combo-box-strict.directive';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/combo-box TuiComboBox} (from @taiga-ui/kit) instead
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
        TuiLegacyDropdownOpenMonitorDirective,
        ...TuiDropdown,
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
        ...TuiDropdown,
    ],
})
export class TuiComboBoxModule {}
