import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipeModule, TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
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
        TuiMapperPipeModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputMonthComponent, TuiInputMonthDirective],
    exports: [TuiInputMonthComponent, TuiInputMonthDirective, TuiTextfieldComponent],
})
export class TuiInputMonthModule {}
