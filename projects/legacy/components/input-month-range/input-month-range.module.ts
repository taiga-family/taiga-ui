import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy/directives';

import {TuiInputMonthRangeComponent} from './input-month-range.component';
import {TuiInputMonthRangeDirective} from './input-month-range.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiCalendarMonth,
        TuiPrimitiveTextfieldModule,
        TuiMapperPipe,
        TuiTextfieldControllerModule,
        TuiLegacyDropdownOpenMonitorDirective,
        ...TuiDropdown,
    ],
    declarations: [TuiInputMonthRangeComponent, TuiInputMonthRangeDirective],
    exports: [
        TuiInputMonthRangeComponent,
        TuiInputMonthRangeDirective,
        TuiTextfieldComponent,
        ...TuiDropdown,
    ],
})
export class TuiInputMonthRangeModule {}
