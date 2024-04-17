import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneDirective, TuiLetModule, TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiFlagPipe,
    TuiGroupDirective,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
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
        TuiSvgComponent,
        TuiInputPhoneModule,
        TuiGroupDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        TuiArrowModule,
        TuiWrapperModule,
        TuiLetModule,
        TuiMapperPipe,
        TuiActiveZoneDirective,
        TuiFlagPipe,
    ],
    declarations: [TuiInputPhoneInternationalComponent],
    exports: [TuiInputPhoneInternationalComponent],
})
export class TuiInputPhoneInternationalModule {}
