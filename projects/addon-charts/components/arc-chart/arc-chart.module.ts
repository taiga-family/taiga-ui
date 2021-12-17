import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiArcChartComponent} from './arc-chart.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [TuiArcChartComponent],
    exports: [TuiArcChartComponent],
})
export class TuiArcChartModule {}
