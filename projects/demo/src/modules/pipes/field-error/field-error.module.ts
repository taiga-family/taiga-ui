import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTable} from '@taiga-ui/addon-table';
import {
    TuiButtonDirective,
    TuiErrorComponent,
    TuiHint,
    TuiLabelDirective,
    TuiLinkDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiCheckboxComponent,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiInputPhoneModule,
} from '@taiga-ui/kit';
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
        TuiAddonDoc,
        TuiTextfieldControllerModule,
        TuiErrorComponent,
        TuiFieldErrorPipeModule,
        TuiLabelDirective,
        TuiHint,
        TuiInputModule,
        TuiButtonDirective,
        TuiInputPhoneModule,
        TuiInputNumberModule,
        TuiLinkDirective,
        TuiTable,
        TuiInputNumberModule,
        TuiCurrencyPipe,
        PolymorpheusModule,
        TuiCheckboxComponent,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFieldErrorPipeComponent)),
        TuiSetupComponent,
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
