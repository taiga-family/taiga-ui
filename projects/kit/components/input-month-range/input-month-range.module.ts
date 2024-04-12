import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective, TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiCalendarMonthModule} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthRangeComponent} from './input-month-range.component';
import {TuiInputMonthRangeDirective} from './input-month-range.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiCalendarMonthModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiSvgComponent,
        TuiActiveZoneDirective,
        TuiMapperPipe,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputMonthRangeComponent, TuiInputMonthRangeDirective],
    exports: [
        TuiInputMonthRangeComponent,
        TuiInputMonthRangeDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiInputMonthRangeModule {}
