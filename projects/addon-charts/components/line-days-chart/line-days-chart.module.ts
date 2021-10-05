import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLineChartModule} from '@taiga-ui/addon-charts/components/line-chart';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiLineDaysChartHintDirective} from './line-days-chart-hint.directive';
import {TuiLineDaysChartComponent} from './line-days-chart.component';

@NgModule({
    imports: [CommonModule, TuiLineChartModule, PolymorpheusModule],
    declarations: [TuiLineDaysChartComponent, TuiLineDaysChartHintDirective],
    exports: [TuiLineDaysChartComponent, TuiLineDaysChartHintDirective],
})
export class TuiLineDaysChartModule {}
