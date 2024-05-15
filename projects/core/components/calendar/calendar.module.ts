import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiPrimitiveCalendarModule} from '@taiga-ui/core/components/primitive-calendar';
import {TuiPrimitiveYearMonthPaginationModule} from '@taiga-ui/core/components/primitive-year-month-pagination';
import {TuiPrimitiveYearPickerModule} from '@taiga-ui/core/components/primitive-year-picker';
import {TuiScrollbarComponent} from '@taiga-ui/core/components/scrollbar';

import {TuiCalendarComponent} from './calendar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPrimitiveYearMonthPaginationModule,
        TuiPrimitiveCalendarModule,
        TuiPrimitiveYearPickerModule,
        TuiScrollbarComponent,
        TuiMapperPipe,
    ],
    declarations: [TuiCalendarComponent],
    exports: [TuiCalendarComponent],
})
export class TuiCalendarModule {}
