import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiBarSetModule} from '@taiga-ui/addon-charts/components/bar-set';
import {TuiFocusableModule, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiHintModule} from '@taiga-ui/core';

import {TuiBarChartComponent} from './bar-chart.component';

@NgModule({
    imports: [
        CommonModule,
        TuiBarSetModule,
        TuiFocusableModule,
        TuiHintModule,
        TuiMapperPipe,
    ],
    declarations: [TuiBarChartComponent],
    exports: [TuiBarChartComponent],
})
export class TuiBarChartModule {}
