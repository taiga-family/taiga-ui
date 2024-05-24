import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
} from '@taiga-ui/core';
import {TuiCalendarMonthComponent} from '@taiga-ui/kit';

import {TuiInputMonthComponent} from './input-month.component';
import {TuiInputMonthDirective} from './input-month.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiCalendarMonthComponent,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiSvgComponent,
        TuiMapperPipe,
        TuiTextfieldControllerModule,
        FormsModule,
    ],
    declarations: [TuiInputMonthComponent, TuiInputMonthDirective],
    exports: [
        TuiInputMonthComponent,
        TuiInputMonthDirective,
        TuiTextfieldLegacyComponent,
    ],
})
export class TuiInputMonthModule {}
