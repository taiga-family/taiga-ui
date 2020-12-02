import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputPhoneComponent} from './input-phone.component';

@NgModule({
    imports: [
        TextMaskModule,
        TuiPrimitiveTextfieldModule,
        TuiHostedDropdownModule,
        TuiTextfieldControllerModule,
        TuiActiveZoneModule,
    ],
    declarations: [TuiInputPhoneComponent],
    exports: [TuiInputPhoneComponent],
})
export class TuiInputPhoneModule {}
