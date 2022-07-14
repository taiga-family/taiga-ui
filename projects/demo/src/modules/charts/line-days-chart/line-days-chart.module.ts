import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAxesModule,
    TuiLineChartModule,
    TuiLineDaysChartModule,
} from '@taiga-ui/addon-charts';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiFilterPipeModule, TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiInputDateRangeModule, TuiSelectModule} from '@taiga-ui/kit';

import {TuiLineDaysChartExample1} from './examples/1';
import {TuiLineDaysChartExample2} from './examples/2';
import {LabelsPipe} from './examples/2/pipe';
import {ExampleTuiLineDaysChartComponent} from './line-days-chart.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAxesModule,
        TuiSelectModule,
        TuiLineChartModule,
        TuiMapperPipeModule,
        TuiNotificationModule,
        TuiFilterPipeModule,
        TuiLineDaysChartModule,
        TuiInputDateRangeModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLineDaysChartComponent)),
    ],
    declarations: [
        ExampleTuiLineDaysChartComponent,
        TuiLineDaysChartExample1,
        TuiLineDaysChartExample2,
        LabelsPipe,
    ],
    exports: [ExampleTuiLineDaysChartComponent],
})
export class ExampleTuiLineDaysChartModule {}
