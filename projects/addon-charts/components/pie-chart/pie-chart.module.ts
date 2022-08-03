import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHoveredModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiHintModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPieChartComponent} from './pie-chart.component';
import {TuiPieChartDirective} from './pie-chart.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiRepeatTimesModule,
        TuiHoveredModule,
        PolymorpheusModule,
        TuiHintModule,
    ],
    declarations: [TuiPieChartComponent, TuiPieChartDirective],
    exports: [TuiPieChartComponent],
})
export class TuiPieChartModule {}
