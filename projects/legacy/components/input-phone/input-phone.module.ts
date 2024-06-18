import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiDropdown} from '@taiga-ui/core';
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
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        TuiLegacyDropdownOpenMonitorDirective,
        ...TuiDropdown,
    ],
    declarations: [TuiInputPhoneComponent, TuiInputPhoneDirective],
    exports: [
        TuiInputPhoneComponent,
        TuiInputPhoneDirective,
        TuiTextfieldComponent,
        ...TuiDropdown,
    ],
})
export class TuiInputPhoneModule {}
