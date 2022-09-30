import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiCalendarRangeModule} from '@taiga-ui/kit/components/calendar-range';
import {TextMaskModule, TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateRangeComponent} from './input-date-range.component';
import {TuiInputDateRangeDirective} from './input-date-range.directive';

@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        TuiActiveZoneModule,
        TuiLetModule,
        PolymorpheusModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHostedDropdownModule,
        TuiSvgModule,
        TuiCalendarRangeModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputDateRangeComponent, TuiInputDateRangeDirective],
    exports: [
        TuiInputDateRangeComponent,
        TuiInputDateRangeDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiInputDateRangeModule {}
