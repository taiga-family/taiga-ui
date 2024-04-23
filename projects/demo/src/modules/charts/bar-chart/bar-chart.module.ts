import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAxesModule, TuiBarChartModule} from '@taiga-ui/addon-charts';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule, TuiLinkDirective, TuiNotificationModule} from '@taiga-ui/core';
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
        TuiLinkDirective,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBarChartComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiBarChartComponent, TuiBarChartExample1, TuiBarChartExample2],
    exports: [ExampleTuiBarChartComponent],
})
export class ExampleTuiBarChartModule {}
