import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiFormatNumberPipeModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputSliderModule, TuiRadioListModule} from '@taiga-ui/kit';

import {TuiFormatNumberExample1} from './examples/1';
import {ExampleTuiFormatNumberComponent} from './format-number.component';

@NgModule({
    imports: [
        TuiFormatNumberPipeModule,
        TuiInputSliderModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiRadioListModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFormatNumberComponent)),
        TuiTextfieldControllerModule,
    ],
    declarations: [ExampleTuiFormatNumberComponent, TuiFormatNumberExample1],
    exports: [ExampleTuiFormatNumberComponent],
})
export class ExampleTuiFormatNumberModule {}
