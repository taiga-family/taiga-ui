import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {
    TuiButtonModule,
    TuiErrorModule,
    TuiHintModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiInputCountModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiInputPhoneModule,
} from '@taiga-ui/kit';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit/pipes/field-error';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiFieldErrorPipeExample1} from './examples/1';
import {TuiFieldErrorPipeExample2} from './examples/2';
import {TuiFieldErrorPipeExample3} from './examples/3';
import {TuiFieldErrorPipeExample4} from './examples/4';
import {TuiFieldErrorPipeExample5} from './examples/5';
import {TuiFieldErrorContentPipeExample6} from './examples/6';
import {ExampleTuiFieldErrorPipeComponent} from './field-error.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        TuiTextfieldControllerModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiLabelModule,
        TuiHintModule,
        TuiInputModule,
        TuiButtonModule,
        TuiInputPhoneModule,
        TuiInputCountModule,
        TuiLinkModule,
        TuiTableModule,
        TuiHintModule,
        TuiInputNumberModule,
        TuiCurrencyPipeModule,
        PolymorpheusModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFieldErrorPipeComponent)),
    ],
    declarations: [
        ExampleTuiFieldErrorPipeComponent,
        TuiFieldErrorPipeExample1,
        TuiFieldErrorPipeExample2,
        TuiFieldErrorPipeExample3,
        TuiFieldErrorPipeExample4,
        TuiFieldErrorPipeExample5,
        TuiFieldErrorContentPipeExample6,
    ],
    exports: [ExampleTuiFieldErrorPipeComponent],
})
export class ExampleTuiFieldErrorModule {}
