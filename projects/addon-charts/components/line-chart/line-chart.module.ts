import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule, TuiLetModule} from '@taiga-ui/cdk';
import {TuiDescribedByModule, TuiHintModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiLineChartHintDirective} from './line-chart-hint.directive';
import {TuiLineChartComponent} from './line-chart.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiHintModule,
        TuiFocusableModule,
        TuiDescribedByModule,
        TuiLetModule,
    ],
    declarations: [TuiLineChartComponent, TuiLineChartHintDirective],
    exports: [TuiLineChartComponent, TuiLineChartHintDirective],
})
export class TuiLineChartModule {}
