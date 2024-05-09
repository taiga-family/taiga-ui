import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHoveredDirective, TuiLetDirective} from '@taiga-ui/cdk';
import {
    TuiLinkDirective,
    TuiPrimitiveSpinButtonModule,
    TuiPrimitiveYearPickerModule,
    TuiScrollbarComponent,
} from '@taiga-ui/core';

import {TuiCalendarMonthComponent} from './calendar-month.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPrimitiveYearPickerModule,
        TuiPrimitiveSpinButtonModule,
        TuiScrollbarComponent,
        TuiLinkDirective,
        TuiLetDirective,
        TuiHoveredDirective,
    ],
    declarations: [TuiCalendarMonthComponent],
    exports: [TuiCalendarMonthComponent],
})
export class TuiCalendarMonthModule {}
