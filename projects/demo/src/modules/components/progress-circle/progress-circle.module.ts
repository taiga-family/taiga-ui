import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules, TuiTextCodeModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';

import {TuiProgressCircleExample1} from './examples/1';
import {TuiProgressCircleExample2} from './examples/2';
import {TuiProgressCircleExample3} from './examples/3';
import {TuiProgressCircleExample4} from './examples/4';
import {TuiProgressCircleExample5} from './examples/5';
import {ExampleProgressCircleComponent} from './progress-circle.component';

@NgModule({
    imports: [
        CommonModule,
        tuiGetDocModules(ExampleProgressCircleComponent),
        TuiLinkModule,
        TuiProgressModule,
        TuiTextCodeModule,
    ],
    declarations: [
        ExampleProgressCircleComponent,
        TuiProgressCircleExample1,
        TuiProgressCircleExample2,
        TuiProgressCircleExample3,
        TuiProgressCircleExample4,
        TuiProgressCircleExample5,
    ],
})
export class ExampleTuiProgressCircleModule {}
