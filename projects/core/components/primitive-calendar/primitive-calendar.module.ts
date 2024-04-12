import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiHoveredModule,
    TuiLetModule,
    TuiMapperPipe,
    TuiPressedModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {
    TuiCalendarSheetPipeModule,
    TuiOrderWeekDaysPipeModule,
} from '@taiga-ui/core/pipes';

import {TuiPrimitiveCalendarComponent} from './primitive-calendar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLetModule,
        TuiMapperPipe,
        TuiRepeatTimesModule,
        TuiHoveredModule,
        TuiPressedModule,
        TuiCalendarSheetPipeModule,
        TuiOrderWeekDaysPipeModule,
    ],
    declarations: [TuiPrimitiveCalendarComponent],
    exports: [TuiPrimitiveCalendarComponent],
})
export class TuiPrimitiveCalendarModule {}
