import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCurrencyPipeModule, TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiGroupModule,
    TuiHintControllerModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiCheckboxLabeledModule,
    TuiDataListWrapperModule,
    TuiFieldErrorModule,
    TuiInputCountModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiInputPasswordModule,
    TuiInputPhoneModule,
    TuiInputRangeModule,
    TuiInputSliderModule,
    TuiInputTagModule,
    TuiInputTimeModule,
    TuiRadioBlockModule,
    TuiRadioListModule,
    TuiSelectModule,
    TuiStepperModule,
    TuiTextAreaModule,
} from '@taiga-ui/kit';
import {TuiExample} from './example';
import {FormComponent} from './form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiMoneyModule,
        TuiStepperModule,
        TuiInputDateModule,
        TuiInputTimeModule,
        TuiTextAreaModule,
        TuiInputSliderModule,
        TuiInputRangeModule,
        TuiCheckboxLabeledModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiFieldErrorModule,
        TuiInputPasswordModule,
        TuiInputPhoneModule,
        TuiInputModule,
        TuiInputNumberModule,
        TuiCurrencyPipeModule,
        TuiInputTagModule,
        TuiInputCountModule,
        TuiSelectModule,
        TuiGroupModule,
        TuiRadioBlockModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLabelModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(FormComponent)),
    ],
    declarations: [FormComponent, TuiExample],
    exports: [FormComponent],
})
export class FormModule {}
