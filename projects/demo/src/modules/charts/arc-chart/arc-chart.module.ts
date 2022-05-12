import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiInputCountModule} from '@taiga-ui/kit';

import {ExampleTuiArcChartComponent} from './arc-chart.component';
import {TuiArcChartExample1} from './examples/1';
import {TuiArcChartExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TuiInputCountModule,
        TuiArcChartModule,
        TuiMoneyModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiArcChartComponent)),
    ],
    declarations: [ExampleTuiArcChartComponent, TuiArcChartExample1, TuiArcChartExample2],
    exports: [ExampleTuiArcChartComponent],
})
export class ExampleTuiArcChartModule {}
