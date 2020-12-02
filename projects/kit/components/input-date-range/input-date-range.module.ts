import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiCalendarRangeModule} from '@taiga-ui/kit/components/calendar-range';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputDateRangeComponent} from './input-date-range.component';

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
    ],
    declarations: [TuiInputDateRangeComponent],
    exports: [TuiInputDateRangeComponent],
})
export class TuiInputDateRangeModule {}
