import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
    TuiValueAccessorModule,
} from '@taiga-ui/legacy/directives';

import {TuiInputPhoneComponent} from './input-phone.component';
import {TuiInputPhoneDirective} from './input-phone.directive';

@NgModule({
    imports: [
        MaskitoDirective,
        TuiPrimitiveTextfieldModule,
        TuiDropdown,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        TuiLegacyDropdownOpenMonitorDirective,
    ],
    declarations: [TuiInputPhoneComponent, TuiInputPhoneDirective],
    exports: [TuiInputPhoneComponent, TuiInputPhoneDirective, TuiTextfieldComponent],
})
export class TuiInputPhoneModule {}
