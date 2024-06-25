import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
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

import {TuiInputMonthComponent} from './input-month.component';
import {TuiInputMonthDirective} from './input-month.directive';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [
        CommonModule,
        TuiCalendarMonth,
        TuiPrimitiveTextfieldModule,
        TuiMapperPipe,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiLegacyDropdownOpenMonitorDirective,
        ...TuiDropdown,
    ],
    declarations: [TuiInputMonthComponent, TuiInputMonthDirective],
    exports: [
        TuiInputMonthComponent,
        TuiInputMonthDirective,
        TuiTextfieldComponent,
        ...TuiDropdown,
    ],
})
export class TuiInputMonthModule {}
