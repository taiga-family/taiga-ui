import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {
    TuiAxesComponent,
    TuiLineChartModule,
    TuiLineDaysChartModule,
} from '@taiga-ui/addon-charts';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiFilterPipe, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiNotificationComponent} from '@taiga-ui/core';
import {TuiInputDateRangeModule, TuiSelectModule} from '@taiga-ui/kit';

import {TuiLineDaysChartExample1} from './examples/1';
import {TuiLineDaysChartExample2} from './examples/2';
import {LabelsPipe} from './examples/2/pipe';
import {ExampleTuiLineDaysChartComponent} from './line-days-chart.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAxesComponent,
        TuiSelectModule,
        TuiLineChartModule,
        TuiMapperPipe,
        TuiNotificationComponent,
        TuiFilterPipe,
        TuiLineDaysChartModule,
        TuiInputDateRangeModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLineDaysChartComponent)),
        TuiSetupComponent,
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
