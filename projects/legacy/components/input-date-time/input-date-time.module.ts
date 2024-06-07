import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiCalendarComponent, TuiLinkDirective, TuiSvgComponent} from '@taiga-ui/core';
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

import {TuiInputDateTimeComponent} from './input-date-time.component';
import {TuiInputDateTimeDirective} from './input-date-time.directive';
import {TuiNativeDateTimeDirective} from './native-date-time/native-date-time.directive';

@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiCalendarComponent,
        TuiSvgComponent,
        TuiLinkDirective,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiValueAccessorModule,
        TuiTextfieldControllerModule,
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
