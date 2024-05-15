import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiHoveredDirective,
    TuiLetDirective,
    TuiMapperPipe,
    TuiRepeatTimesDirective,
} from '@taiga-ui/cdk';
import {TuiCalendarSheetPipe, TuiOrderWeekDaysPipe} from '@taiga-ui/core/pipes';

import {TuiPrimitiveCalendarComponent} from './primitive-calendar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLetDirective,
        TuiMapperPipe,
        TuiRepeatTimesDirective,
        TuiHoveredDirective,
        TuiCalendarSheetPipe,
        TuiOrderWeekDaysPipe,
    ],
    declarations: [TuiPrimitiveCalendarComponent],
    exports: [TuiPrimitiveCalendarComponent],
})
export class TuiPrimitiveCalendarModule {}
