import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';

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
    exports: [
        TuiInputPhoneComponent,
        TuiInputPhoneDirective,
        TuiTextfieldLegacyComponent,
    ],
})
export class TuiInputPhoneModule {}
