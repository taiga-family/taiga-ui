import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiLetModule, TuiMapperPipeModule} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiGroupModule,
    TuiHintControllerModule,
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
        ReactiveFormsModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiInputPhoneModule,
        TuiGroupModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        TuiArrowModule,
        TuiLetModule,
        TuiMapperPipeModule,
    ],
    declarations: [TuiInputPhoneInternationalComponent],
    exports: [TuiInputPhoneInternationalComponent],
})
export class TuiInputPhoneInternationalModule {}
