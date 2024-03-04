import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiExamplePipe} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiButtonModule,
    TuiLabelDirective,
    TuiRadioComponent,
    TuiRadioDirective,
} from '@taiga-ui/experimental';

import {TuiRadioExample1} from './examples/1';
import {TuiRadioExample2} from './examples/2';
import {ExampleTuiRadioComponent} from './radio.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        TuiNotificationModule,
        TuiPlatformModule,
        TuiRadioComponent,
        tuiGetDocModules(ExampleTuiRadioComponent),
        TuiButtonModule,
        TuiExamplePipe,
        TuiLabelDirective,
        TuiRadioDirective,
    ],
    declarations: [ExampleTuiRadioComponent, TuiRadioExample1, TuiRadioExample2],
    exports: [ExampleTuiRadioComponent],
})
export class ExampleTuiRadioModule {}
