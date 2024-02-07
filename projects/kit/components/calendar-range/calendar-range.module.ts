import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiCalendarModule, TuiDataListModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiPrimitiveCalendarRangeModule} from '@taiga-ui/kit/internal/primitive-calendar-range';

import {TuiCalendarRangeComponent} from './calendar-range.component';

@NgModule({
    imports: [
        CommonModule,
        TuiMapperPipeModule,
        TuiCalendarModule,
        TuiCalendarModule,
        TuiSvgModule,
        TuiDataListModule,
        TuiPrimitiveCalendarRangeModule,
    ],
    declarations: [TuiCalendarRangeComponent],
    exports: [TuiCalendarRangeComponent],
})
export class TuiCalendarRangeModule {}
