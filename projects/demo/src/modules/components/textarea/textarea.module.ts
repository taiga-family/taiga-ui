import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiErrorModule,
    TuiHintModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiFieldErrorPipeModule,
    TuiRadioListModule,
    TuiTextareaModule,
} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiTextareaExample1} from './examples/1';
import {TuiTextareaExample2} from './examples/2';
import {TuiTextareaExample3} from './examples/3';
import {TuiTextareaExample4} from './examples/4';
import {TuiTextareaExample5} from './examples/5';
import {TuiTextareaExample6} from './examples/6';
import {ExampleTuiTextareaComponent} from './textarea.component';

@NgModule({
    imports: [
        TuiTextareaModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        TuiSvgModule,
        CommonModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiLabelModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiNotificationModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTextareaComponent)),
        TuiTextCodeModule,
    ],
    declarations: [
        ExampleTuiTextareaComponent,
        TuiTextareaExample1,
        TuiTextareaExample2,
        TuiTextareaExample3,
        TuiTextareaExample4,
        TuiTextareaExample5,
        TuiTextareaExample6,
    ],
    exports: [ExampleTuiTextareaComponent],
})
export class ExampleTuiTextareaModule {}
