import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiRadioModule} from '@taiga-ui/experimental';

import {TuiRadioExample1} from './examples/1';
import {ExampleTuiRadioComponent} from './radio.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        TuiNotificationModule,
        TuiPlatformModule,
        TuiRadioModule,
        tuiGetDocModules(ExampleTuiRadioComponent),
    ],
    declarations: [ExampleTuiRadioComponent, TuiRadioExample1],
    exports: [ExampleTuiRadioComponent],
})
export class ExampleTuiRadioModule {}
