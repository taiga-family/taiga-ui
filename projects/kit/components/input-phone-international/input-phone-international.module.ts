import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneModule, TuiLetModule, TuiMapperPipeModule} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiGroupModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiArrowModule} from '@taiga-ui/kit/components/arrow';
import {TuiInputPhoneModule} from '@taiga-ui/kit/components/input-phone';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputPhoneInternationalComponent} from './input-phone-international.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiInputPhoneModule,
        TuiGroupModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        TuiArrowModule,
        TuiLetModule,
        TuiMapperPipeModule,
        TuiActiveZoneModule,
    ],
    declarations: [TuiInputPhoneInternationalComponent],
    exports: [TuiInputPhoneInternationalComponent],
})
export class TuiInputPhoneInternationalModule {}
