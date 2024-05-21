import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiPieChartModule} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHint, TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPieChartExample1} from './examples/1';
import {TuiPieChartExample2} from './examples/2';
import {ExampleTuiPieChartComponent} from './pie-chart.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiPieChartModule,
        TuiAmountPipe,
        PolymorpheusModule,
        TuiAddonDocModule,
        TuiHint,
        TuiNotificationComponent,
        TuiLinkDirective,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPieChartComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiPieChartComponent, TuiPieChartExample1, TuiPieChartExample2],
    exports: [ExampleTuiPieChartComponent],
})
export class ExampleTuiPieChartModule {}
