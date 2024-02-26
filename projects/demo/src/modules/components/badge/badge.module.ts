import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiExamplePipe} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiPlatformModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiLabelModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiFadeModule, TuiIconModule} from '@taiga-ui/experimental';
import {TuiBadgeDirective, TuiRadioListModule} from '@taiga-ui/kit';

import {ExampleTuiBadgeComponent} from './badge.component';
import {TuiBadgeExample1} from './examples/1';
import {TuiBadgeExample2} from './examples/2';
import {TuiBadgeExample3} from './examples/3';
import {TuiBadgeExample4} from './examples/4';
import {TuiBadgeExample5} from './examples/5';
import {TuiBadgeExample6} from './examples/6';

@NgModule({
    imports: [
        TuiBadgeDirective,
        TuiModeModule,
        TuiRepeatTimesModule,
        TuiIconModule,
        TuiRadioListModule,
        FormsModule,
        CommonModule,
        TuiFadeModule,
        TuiNotificationModule,
        TuiBadgeDirective,
        TuiTextfieldControllerModule,
        TuiLabelModule,
        tuiGetDocModules(ExampleTuiBadgeComponent),
        TuiPlatformModule,
        TuiExamplePipe,
    ],
    declarations: [
        ExampleTuiBadgeComponent,
        TuiBadgeExample1,
        TuiBadgeExample2,
        TuiBadgeExample3,
        TuiBadgeExample4,
        TuiBadgeExample5,
        TuiBadgeExample6,
    ],
    exports: [ExampleTuiBadgeComponent],
})
export class ExampleTuiBadgeModule {}
