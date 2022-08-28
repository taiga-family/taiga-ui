import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiRadioListModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputNumberExample1} from './examples/1';
import {TuiInputNumberExample2} from './examples/2';
import {TuiInputNumberExample3} from './examples/3';
import {TuiInputNumberExample4} from './examples/4';
import {TuiInputNumberExample5} from './examples/5';
import {ExampleTuiInputNumberComponent} from './input-number.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputNumberModule,
        TuiCurrencyPipeModule,
        TuiSvgModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiTextfieldControllerModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        TuiHintModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputNumberComponent)),
    ],
    declarations: [
        ExampleTuiInputNumberComponent,
        TuiInputNumberExample1,
        TuiInputNumberExample2,
        TuiInputNumberExample3,
        TuiInputNumberExample4,
        TuiInputNumberExample5,
    ],
    exports: [ExampleTuiInputNumberComponent],
})
export class ExampleTuiInputNumberModule {}
