import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
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
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiFormatPhoneComponent)),
    ],
    declarations: [ExampleTuiFormatPhoneComponent, TuiFormatPhoneExample1],
    exports: [ExampleTuiFormatPhoneComponent],
})
export class ExampleTuiFormatPhoneModule {}
