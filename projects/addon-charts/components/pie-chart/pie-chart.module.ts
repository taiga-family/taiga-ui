import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHoveredModule} from '@taiga-ui/cdk';
import {TuiColorModule, TuiPointerHintModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiPieChartComponent} from './pie-chart.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHoveredModule,
        PolymorpheusModule,
        TuiPointerHintModule,
        TuiColorModule,
    ],
    declarations: [TuiPieChartComponent],
    exports: [TuiPieChartComponent],
})
export class TuiPieChartModule {}
