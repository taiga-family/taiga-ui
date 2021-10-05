import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiPieChartModule} from '@taiga-ui/addon-charts/components/pie-chart';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiRingChartComponent} from './ring-chart.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiPieChartModule],
    declarations: [TuiRingChartComponent],
    exports: [TuiRingChartComponent],
})
export class TuiRingChartModule {}
