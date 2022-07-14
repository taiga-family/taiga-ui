import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAxesModule, TuiLineChartModule} from '@taiga-ui/addon-charts';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';

import {TuiLineChartExample1} from './examples/1';
import {TuiLineChartExample2} from './examples/2';
import {TuiLineChartExample3} from './examples/3';
import {TuiLineChartExample4} from './examples/4';
import {TuiLineChartExample5} from './examples/5';
import {ExampleTuiLineChartComponent} from './line-chart.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAxesModule,
        TuiNotificationModule,
        TuiLineChartModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLineChartComponent)),
    ],
    declarations: [
        ExampleTuiLineChartComponent,
        TuiLineChartExample1,
        TuiLineChartExample2,
        TuiLineChartExample3,
        TuiLineChartExample4,
        TuiLineChartExample5,
    ],
    exports: [ExampleTuiLineChartComponent],
})
export class ExampleTuiLineChartModule {}
