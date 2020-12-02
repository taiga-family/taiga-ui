import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule, TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiCalendarMonthModule} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthRangeComponent} from './input-month-range.component';

@NgModule({
    imports: [
        CommonModule,
        TuiCalendarMonthModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiSvgModule,
        TuiPreventDefaultModule,
        TuiActiveZoneModule,
    ],
    declarations: [TuiInputMonthRangeComponent],
    exports: [TuiInputMonthRangeComponent],
})
export class TuiInputMonthRangeModule {}
