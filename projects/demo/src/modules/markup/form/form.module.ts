import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiAmountPipe, TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiErrorModule,
    TuiGroupDirective,
    TuiHintModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiRadioModule} from '@taiga-ui/experimental';
import {
    TuiBlockDirective,
    TuiCheckboxLabeledModule,
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
    TuiRadioListModule,
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
        TuiCheckboxLabeledModule,
        TuiRadioListModule,
        TuiButtonModule,
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
        TuiLabelModule,
        TuiRadioModule,
        tuiGetDocModules(FormComponent),
    ],
    declarations: [FormComponent, TuiExample],
    exports: [FormComponent],
})
export class FormModule {}
