import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiRingChartModule} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiRingChartExample1} from './examples/1';
import {TuiRingChartExample2} from './examples/2';
import {ExampleTuiRingChartComponent} from './ring-chart.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiAmountPipe,
        TuiRingChartModule,
        PolymorpheusModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRingChartComponent)),
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiRingChartComponent,
        TuiRingChartExample1,
        TuiRingChartExample2,
    ],
    exports: [ExampleTuiRingChartComponent],
})
export class ExampleTuiRingChartModule {}
