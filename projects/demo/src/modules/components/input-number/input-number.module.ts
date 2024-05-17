import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiHint,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiNumberFormatDirective,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiRadioListComponent} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputNumberExample1} from './examples/1';
import {TuiInputNumberExample2} from './examples/2';
import {TuiInputNumberExample3} from './examples/3';
import {TuiInputNumberExample4} from './examples/4';
import {TuiInputNumberExample5} from './examples/5';
import {TuiInputNumberExample6} from './examples/6';
import {TuiInputNumberExample7} from './examples/7';
import {ExampleTuiInputNumberComponent} from './input-number.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputNumberModule,
        TuiCurrencyPipe,
        TuiSvgComponent,
        TuiRadioListComponent,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiTextfieldControllerModule,
        TuiNotificationComponent,
        TuiAddonDoc,
        InheritedDocumentationModule,
        TuiHint,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputNumberComponent)),
        TuiNumberFormatDirective,
    ],
    declarations: [
        ExampleTuiInputNumberComponent,
        TuiInputNumberExample1,
        TuiInputNumberExample2,
        TuiInputNumberExample3,
        TuiInputNumberExample4,
        TuiInputNumberExample5,
        TuiInputNumberExample6,
        TuiInputNumberExample7,
    ],
    exports: [ExampleTuiInputNumberComponent],
})
export class ExampleTuiInputNumberModule {}
