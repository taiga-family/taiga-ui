import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiFocusableModule,
    TuiHoveredModule,
    TuiLetDirective,
    TuiPressedModule,
} from '@taiga-ui/cdk';
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
        TuiHoveredModule,
        TuiPressedModule,
        TuiFocusableModule,
    ],
    declarations: [TuiCalendarMonthComponent],
    exports: [TuiCalendarMonthComponent],
})
export class TuiCalendarMonthModule {}
