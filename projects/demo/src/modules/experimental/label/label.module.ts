import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiIconComponent} from '@taiga-ui/core';
import {
    TuiCheckboxModule,
    TuiLabelDirective,
    TuiRadioComponent,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiTitleModule,
    TuiToggleModule,
    TuiTooltipModule,
} from '@taiga-ui/experimental';

import {TuiLabelExample1} from './examples/1';
import {TuiLabelExample2} from './examples/2';
import {TuiLabelExample3} from './examples/3';
import {TuiLabelExample4} from './examples/4';
import {ExampleTuiLabelComponent} from './label.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TuiLabelDirective,
        TuiCheckboxModule,
        TuiTitleModule,
        TuiExamplePipe,
        TuiRadioComponent,
        TuiSetupComponent,
        tuiGetDocModules(ExampleTuiLabelComponent),
        TuiToggleModule,
        TuiIconComponent,
        TuiTextfieldComponent,
        TuiTextfieldDirective,
        TuiTooltipModule,
    ],
    declarations: [
        ExampleTuiLabelComponent,
        TuiLabelExample1,
        TuiLabelExample2,
        TuiLabelExample3,
        TuiLabelExample4,
    ],
    exports: [ExampleTuiLabelComponent],
})
export class ExampleTuiLabelModule {}
