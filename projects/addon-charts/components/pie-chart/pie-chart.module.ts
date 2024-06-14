import {NgModule} from '@angular/core';
import {TuiHovered, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiHint} from '@taiga-ui/core';

import {TuiPieChartComponent} from './pie-chart.component';
import {TuiPieChartDirective} from './pie-chart.directive';

@NgModule({
    imports: [TuiHovered, TuiRepeatTimes, ...TuiHint],
    declarations: [TuiPieChartComponent, TuiPieChartDirective],
    exports: [TuiPieChartComponent, TuiPieChartDirective, ...TuiHint],
})
export class TuiPieChart {}
