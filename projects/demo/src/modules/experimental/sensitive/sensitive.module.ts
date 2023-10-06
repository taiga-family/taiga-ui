import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiBadgeModule,
    TuiButtonModule,
    TuiSensitiveModule,
} from '@taiga-ui/experimental';
import {TuiToggleModule} from '@taiga-ui/kit';

import {TuiSensitiveExample1} from './examples/1';
import {TuiSensitiveExample2} from './examples/2';
import {ExampleTuiSensitiveComponent} from './sensitive.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        TuiSensitiveModule,
        TuiNotificationModule,
        TuiToggleModule,
        TuiBadgeModule,
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
