import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules, TuiTextCodeModule} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiLinkDirective, TuiNotificationModule} from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';

import {TuiProgressCircleExample1} from './examples/1';
import {TuiProgressCircleExample2} from './examples/2';
import {TuiProgressCircleExample3} from './examples/3';
import {TuiProgressCircleExample4} from './examples/4';
import {TuiProgressCircleExample5} from './examples/5';
import {TuiProgressCircleExample6} from './examples/6';
import {TuiProgressCircleExample7} from './examples/7';
import {ExampleProgressCircleComponent} from './progress-circle.component';

@NgModule({
    imports: [
        CommonModule,
        tuiGetDocModules(ExampleProgressCircleComponent),
        TuiLinkDirective,
        TuiNotificationModule,
        TuiProgressModule,
        TuiRepeatTimesModule,
        TuiTextCodeModule,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleProgressCircleComponent,
        TuiProgressCircleExample1,
        TuiProgressCircleExample2,
        TuiProgressCircleExample3,
        TuiProgressCircleExample4,
        TuiProgressCircleExample5,
        TuiProgressCircleExample6,
        TuiProgressCircleExample7,
    ],
})
export class ExampleTuiProgressCircleModule {}
