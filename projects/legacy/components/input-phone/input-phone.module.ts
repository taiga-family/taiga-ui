import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy/components/hosted-dropdown';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiTextfieldControllerModule,
    TuiValueAccessorModule,
} from '@taiga-ui/legacy/directives';

import {TuiInputPhoneComponent} from './input-phone.component';
import {TuiInputPhoneDirective} from './input-phone.directive';

@NgModule({
    imports: [
        MaskitoDirective,
        TuiPrimitiveTextfieldModule,
        TuiHostedDropdownModule,
        TuiTextfieldControllerModule,
        TuiActiveZoneDirective,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputPhoneComponent, TuiInputPhoneDirective],
    exports: [TuiInputPhoneComponent, TuiInputPhoneDirective, TuiTextfieldComponent],
})
export class TuiInputPhoneModule {}
