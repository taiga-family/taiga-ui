import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiInputNumberModule} from '@taiga-ui/kit';

import {ExampleTuiArcChartComponent} from './arc-chart.component';
import {TuiArcChartExample1} from './examples/1';
import {TuiArcChartExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TuiAmountPipe,
        TuiArcChartModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiArcChartComponent)),
        TuiInputNumberModule,
    ],
    declarations: [ExampleTuiArcChartComponent, TuiArcChartExample1, TuiArcChartExample2],
    exports: [ExampleTuiArcChartComponent],
})
export class ExampleTuiArcChartModule {}
