import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiRingChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiRingChartExample1} from './examples/1';
import {TuiRingChartExample2} from './examples/2';
import {ExampleTuiRingChartComponent} from './ring-chart.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiRingChartModule,
        TuiMoneyModule,
        PolymorpheusModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRingChartComponent)),
    ],
    declarations: [
        ExampleTuiRingChartComponent,
        TuiRingChartExample1,
        TuiRingChartExample2,
    ],
    exports: [ExampleTuiRingChartComponent],
})
export class ExampleTuiRingChartModule {}
