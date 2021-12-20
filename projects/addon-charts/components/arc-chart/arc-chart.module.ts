import {NgModule} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';

import {TuiArcChartComponent} from './arc-chart.component';

@NgModule({
    imports: [TuiRepeatTimesModule],
    declarations: [TuiArcChartComponent],
    exports: [TuiArcChartComponent],
})
export class TuiArcChartModule {}
