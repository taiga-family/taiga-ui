import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {
    TuiAppearanceDirective,
    TuiCalendarComponent,
    TuiDropdownModule,
    TuiIconComponent,
    TuiLinkDirective,
} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
    TuiValueAccessorModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateTimeComponent} from './input-date-time.component';
import {TuiInputDateTimeDirective} from './input-date-time.directive';
import {TuiNativeDateTimeDirective} from './native-date-time/native-date-time.directive';

@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        PolymorpheusModule,
        TuiCalendarComponent,
        TuiLinkDirective,
        TuiDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiValueAccessorModule,
        TuiTextfieldControllerModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiIconComponent,
        TuiAppearanceDirective,
    ],
    declarations: [
        TuiInputDateTimeComponent,
        TuiInputDateTimeDirective,
        TuiNativeDateTimeDirective,
    ],
    exports: [
        TuiInputDateTimeComponent,
        TuiInputDateTimeDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiInputDateTimeModule {}
