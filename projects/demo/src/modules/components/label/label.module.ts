import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiLabelModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

import {TuiLabelExample1} from './examples/1';
import {TuiLabelExample2} from './examples/2';
import {TuiLabelExample3} from './examples/3';
import {ExampleTuiLabelComponent} from './label.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiLabelModule,
        TuiTooltipModule,
        TuiTextfieldControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLabelComponent)),
    ],
    declarations: [
        ExampleTuiLabelComponent,
        TuiLabelExample1,
        TuiLabelExample2,
        TuiLabelExample3,
    ],
    exports: [ExampleTuiLabelComponent],
})
export class ExampleTuiLabelModule {}
