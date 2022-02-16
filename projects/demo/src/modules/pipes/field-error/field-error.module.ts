import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiErrorModule,
    TuiHintModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputCountModule, TuiInputModule, TuiInputPhoneModule} from '@taiga-ui/kit';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit/pipes/field-error';

import {TuiFieldErrorPipeExample1} from './examples/1';
import {TuiFieldErrorPipeExample2} from './examples/2';
import {TuiFieldErrorPipeExample3} from './examples/3';
import {TuiFieldErrorPipeExample4} from './examples/4';
import {TuiFieldErrorPipeExample5} from './examples/5';
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
        RouterModule.forChild(generateRoutes(ExampleTuiFieldErrorPipeComponent)),
    ],
    declarations: [
        ExampleTuiFieldErrorPipeComponent,
        TuiFieldErrorPipeExample1,
        TuiFieldErrorPipeExample2,
        TuiFieldErrorPipeExample3,
        TuiFieldErrorPipeExample4,
        TuiFieldErrorPipeExample5,
    ],
    exports: [ExampleTuiFieldErrorPipeComponent],
})
export class ExampleTuiFieldErrorModule {}
