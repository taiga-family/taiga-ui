import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiDropdownModule, TuiSvgComponent} from '@taiga-ui/core';
import {TuiCalendarMonthComponent} from '@taiga-ui/kit';
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
        TuiCalendarMonthComponent,
        TuiDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiSvgComponent,
        TuiMapperPipe,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiLegacyDropdownOpenMonitorDirective,
    ],
    declarations: [TuiInputMonthComponent, TuiInputMonthDirective],
    exports: [TuiInputMonthComponent, TuiInputMonthDirective, TuiTextfieldComponent],
})
export class TuiInputMonthModule {}
