import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiButtonModule, TuiLabelDirective} from '@taiga-ui/experimental';
import {
    TuiBadgeDirective,
    TuiSensitiveDirective,
    TuiSwitchComponent,
} from '@taiga-ui/kit';

import {TuiSensitiveExample1} from './examples/1';
import {TuiSensitiveExample2} from './examples/2';
import {ExampleTuiSensitiveComponent} from './sensitive.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        TuiSensitiveDirective,
        TuiNotificationModule,
        TuiSwitchComponent,
        TuiLabelDirective,
        TuiBadgeDirective,
        TuiButtonModule,
        tuiGetDocModules(ExampleTuiSensitiveComponent),
    ],
    declarations: [
        ExampleTuiSensitiveComponent,
        TuiSensitiveExample1,
        TuiSensitiveExample2,
    ],
    exports: [ExampleTuiSensitiveComponent],
})
export class ExampleTuiSensitiveModule {}
