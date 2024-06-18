import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiCalendarMonthComponent} from '@taiga-ui/kit';
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
        TuiCalendarMonthComponent,
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
