import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiCalendarComponent, TuiDataList, TuiSvgComponent} from '@taiga-ui/core';
import {TuiPrimitiveCalendarRangeModule} from '@taiga-ui/kit/internal/primitive-calendar-range';

import {TuiCalendarRangeComponent} from './calendar-range.component';

@NgModule({
    imports: [
        CommonModule,
        TuiMapperPipe,
        TuiCalendarComponent,
        TuiSvgComponent,
        TuiDataList,
        TuiPrimitiveCalendarRangeModule,
    ],
    declarations: [TuiCalendarRangeComponent],
    exports: [TuiCalendarRangeComponent],
})
export class TuiCalendarRangeModule {}
