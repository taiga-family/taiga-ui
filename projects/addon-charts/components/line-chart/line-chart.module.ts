import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule, TuiLetModule} from '@taiga-ui/cdk';
import {TuiHintModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLineChartComponent} from './line-chart.component';
import {TuiLineChartHintDirective} from './line-chart-hint.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiHintModule,
        TuiFocusableModule,
        TuiLetModule,
    ],
    declarations: [TuiLineChartComponent, TuiLineChartHintDirective],
    exports: [TuiLineChartComponent, TuiLineChartHintDirective],
})
export class TuiLineChartModule {}
