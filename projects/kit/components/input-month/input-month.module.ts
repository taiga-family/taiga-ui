import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiMonthPipeModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldComponent,
} from '@taiga-ui/core';
import {TuiCalendarMonthModule} from '@taiga-ui/kit/components/calendar-month';

import {TuiInputMonthComponent} from './input-month.component';
import {TuiInputMonthDirective} from './input-month.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiCalendarMonthModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiSvgModule,
        TuiPreventDefaultModule,
        TuiMonthPipeModule,
    ],
    declarations: [TuiInputMonthComponent, TuiInputMonthDirective],
    exports: [TuiInputMonthComponent, TuiInputMonthDirective, TuiTextfieldComponent],
})
export class TuiInputMonthModule {}
