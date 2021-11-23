import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLineChartModule} from '@taiga-ui/addon-charts/components/line-chart';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLineDaysChartComponent} from './line-days-chart.component';
import {TuiLineDaysChartHintDirective} from './line-days-chart-hint.directive';

@NgModule({
    imports: [CommonModule, TuiLineChartModule, PolymorpheusModule],
    declarations: [TuiLineDaysChartComponent, TuiLineDaysChartHintDirective],
    exports: [TuiLineDaysChartComponent, TuiLineDaysChartHintDirective],
})
export class TuiLineDaysChartModule {}
