import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiFocusableModule,
    TuiHoveredModule,
    TuiLetModule,
    TuiPressedModule,
} from '@taiga-ui/cdk';
import {
    TuiLinkModule,
    TuiPrimitiveSpinButtonModule,
    TuiPrimitiveYearPickerModule,
    TuiScrollbarModule,
} from '@taiga-ui/core';
import {TuiCalendarMonthComponent} from './calendar-month.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPrimitiveYearPickerModule,
        TuiPrimitiveSpinButtonModule,
        TuiScrollbarModule,
        TuiLinkModule,
        TuiLetModule,
        TuiHoveredModule,
        TuiPressedModule,
        TuiFocusableModule,
    ],
    declarations: [TuiCalendarMonthComponent],
    exports: [TuiCalendarMonthComponent],
})
export class TuiCalendarMonthModule {}
