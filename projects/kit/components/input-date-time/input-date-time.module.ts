import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoModule} from '@maskito/angular';
import {TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiCalendarModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateTimeComponent} from './input-date-time.component';
import {TuiInputDateTimeDirective} from './input-date-time.directive';
import {TuiNativeDateTimeDirective} from './native-date-time/native-date-time.directive';

@NgModule({
    imports: [
        CommonModule,
        MaskitoModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiPreventDefaultModule,
        TuiCalendarModule,
        TuiSvgModule,
        TuiLinkModule,
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
