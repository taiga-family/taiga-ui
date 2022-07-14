import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiProgressModule} from '@taiga-ui/kit';

import {TuiProgressCircleExample1} from './examples/1';
import {TuiProgressCircleExample2} from './examples/2';
import {TuiProgressCircleExample3} from './examples/3';
import {TuiProgressCircleExample4} from './examples/4';
import {ExampleProgressCircleComponent} from './progress-circle.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiProgressModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleProgressCircleComponent)),
    ],
    declarations: [
        ExampleProgressCircleComponent,
        TuiProgressCircleExample1,
        TuiProgressCircleExample2,
        TuiProgressCircleExample3,
        TuiProgressCircleExample4,
    ],
})
export class ExampleTuiProgressCircleModule {}
