import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiExamplePipe} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNumberFormatModule} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit';

import {TuiNumberFormatExample1} from './examples/1';
import {ExampleTuiNumberFormatComponent} from './number-format.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiInputNumberModule,
        TuiNumberFormatModule,
        TuiExamplePipe,
        tuiGetDocModules(ExampleTuiNumberFormatComponent),
    ],
    declarations: [ExampleTuiNumberFormatComponent, TuiNumberFormatExample1],
    exports: [ExampleTuiNumberFormatComponent],
})
export class ExampleTuiTextfieldControllerModule {}
