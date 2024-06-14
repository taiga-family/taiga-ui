import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiCalendarMonth} from '@taiga-ui/kit';
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

@NgModule({
    imports: [
        CommonModule,
        TuiCalendarMonth,
        TuiDropdown,
        TuiPrimitiveTextfieldModule,
        TuiMapperPipe,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiLegacyDropdownOpenMonitorDirective,
    ],
    declarations: [TuiInputMonthComponent, TuiInputMonthDirective],
    exports: [TuiInputMonthComponent, TuiInputMonthDirective, TuiTextfieldComponent],
})
export class TuiInputMonthModule {}
