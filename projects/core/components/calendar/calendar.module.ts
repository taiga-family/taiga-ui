import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiPrimitiveCalendarModule} from '@taiga-ui/core/components/primitive-calendar';
import {TuiPrimitiveYearPickerModule} from '@taiga-ui/core/components/primitive-year-picker';
import {TuiScrollbarComponent} from '@taiga-ui/core/components/scrollbar';
import {TuiPrimitiveYearMonthPaginationModule} from '@taiga-ui/core/internal/primitive-year-month-pagination';

import {TuiCalendarComponent} from './calendar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPrimitiveYearMonthPaginationModule,
        TuiPrimitiveCalendarModule,
        TuiPrimitiveYearPickerModule,
        TuiScrollbarComponent,
        TuiMapperPipeModule,
    ],
    declarations: [TuiCalendarComponent],
    exports: [TuiCalendarComponent],
})
export class TuiCalendarModule {}
