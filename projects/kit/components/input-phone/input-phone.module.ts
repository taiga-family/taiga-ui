import {NgModule} from '@angular/core';
import {MaskitoModule} from '@maskito/angular';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';

import {TuiInputPhoneComponent} from './input-phone.component';
import {TuiInputPhoneDirective} from './input-phone.directive';

@NgModule({
    imports: [
        MaskitoModule,
        TuiPrimitiveTextfieldModule,
        TuiHostedDropdownModule,
        TuiTextfieldControllerModule,
        TuiActiveZoneModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputPhoneComponent, TuiInputPhoneDirective],
    exports: [TuiInputPhoneComponent, TuiInputPhoneDirective, TuiTextfieldComponent],
})
export class TuiInputPhoneModule {}
