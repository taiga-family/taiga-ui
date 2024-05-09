import {NgModule} from '@angular/core';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';

import {TuiArcChartComponent} from './arc-chart.component';

@NgModule({
    imports: [TuiRepeatTimesDirective],
    declarations: [TuiArcChartComponent],
    exports: [TuiArcChartComponent],
})
export class TuiArcChartModule {}
