import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiActiveZoneDirective, TuiLetDirective} from '@taiga-ui/cdk';
import {TuiSvgComponent} from '@taiga-ui/core';
import {TuiCalendarRangeComponent} from '@taiga-ui/kit';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy/components/hosted-dropdown';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiTextfieldControllerModule,
    TuiValueAccessorModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateRangeComponent} from './input-date-range.component';
import {TuiInputDateRangeDirective} from './input-date-range.directive';

@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        TuiActiveZoneDirective,
        TuiLetDirective,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHostedDropdownModule,
        TuiSvgComponent,
        TuiCalendarRangeComponent,
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
