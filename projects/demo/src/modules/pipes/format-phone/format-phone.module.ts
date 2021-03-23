import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiFormatPhonePipeModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule, TuiRadioListModule} from '@taiga-ui/kit';
import {TuiFormatPhoneExample1} from './examples/1';
import {ExampleTuiFormatPhoneComponent} from './format-phone.component';

@NgModule({
    imports: [
        TuiFormatPhonePipeModule,
        TuiInputModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiRadioListModule,
        TuiTextfieldControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiFormatPhoneComponent)),
    ],
    declarations: [ExampleTuiFormatPhoneComponent, TuiFormatPhoneExample1],
    exports: [ExampleTuiFormatPhoneComponent],
})
export class ExampleTuiFormatPhoneModule {}
