import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TextMaskModule, TuiValueAccessorModule} from '@taiga-ui/kit/directives';

import {TuiInputPhoneComponent} from './input-phone.component';
import {TuiInputPhoneDirective} from './input-phone.directive';

@NgModule({
    imports: [
        TextMaskModule,
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
