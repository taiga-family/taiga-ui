import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiAmountPipe, TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiErrorModule,
    TuiGroupDirective,
    TuiHintModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {
    TuiBlockDirective,
    TuiCheckboxComponent,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiInputPasswordModule,
    TuiInputPhoneModule,
    TuiInputRangeModule,
    TuiInputSliderModule,
    TuiInputTagModule,
    TuiInputTimeModule,
    TuiRadioComponent,
    TuiRadioListComponent,
    TuiSelectModule,
    TuiStepperModule,
    TuiTextareaModule,
} from '@taiga-ui/kit';

import {StylesInfoModule} from '../../app/styles-info/styles-info.module';
import {TuiExample} from './example';
import {FormComponent} from './form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StylesInfoModule,
        TuiAmountPipe,
        TuiStepperModule,
        TuiInputDateModule,
        TuiInputTimeModule,
        TuiTextareaModule,
        TuiInputSliderModule,
        TuiInputRangeModule,
        TuiRadioListComponent,
        TuiButtonDirective,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiInputPasswordModule,
        TuiInputPhoneModule,
        TuiInputModule,
        TuiInputNumberModule,
        TuiCurrencyPipeModule,
        TuiInputTagModule,
        TuiSelectModule,
        TuiGroupDirective,
        TuiBlockDirective,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiRadioComponent,
        tuiGetDocModules(FormComponent),
        TuiCheckboxComponent,
        TuiLabelDirective,
    ],
    declarations: [FormComponent, TuiExample],
    exports: [FormComponent],
})
export class FormModule {}
