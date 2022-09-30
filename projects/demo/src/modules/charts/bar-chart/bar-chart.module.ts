import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAxesModule, TuiBarChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';

import {ExampleTuiBarChartComponent} from './bar-chart.component';
import {TuiBarChartExample1} from './examples/1';
import {TuiBarChartExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAxesModule,
        TuiBarChartModule,
        TuiHintModule,
        TuiNotificationModule,
        TuiLinkModule,
        TuiMoneyModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBarChartComponent)),
    ],
    declarations: [ExampleTuiBarChartComponent, TuiBarChartExample1, TuiBarChartExample2],
    exports: [ExampleTuiBarChartComponent],
})
export class ExampleTuiBarChartModule {}
