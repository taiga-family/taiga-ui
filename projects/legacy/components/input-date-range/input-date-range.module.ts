import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {TuiDropdownModule, TuiSvgComponent} from '@taiga-ui/core';
import {TuiCalendarRangeComponent} from '@taiga-ui/kit';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiLegacyDropdownOpenMonitorDirective,
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
        TuiLetDirective,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiDropdownModule,
        TuiSvgComponent,
        TuiCalendarRangeComponent,
        TuiValueAccessorModule,
        TuiLegacyDropdownOpenMonitorDirective,
    ],
    declarations: [TuiInputDateRangeComponent, TuiInputDateRangeDirective],
    exports: [
        TuiInputDateRangeComponent,
        TuiInputDateRangeDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiInputDateRangeModule {}
