import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiCalendarModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputDateTimeComponent} from './input-date-time.component';
import {TuiInputDateTimeDirective} from './input-date-time.directive';

@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        PolymorpheusModule,
        TuiPreventDefaultModule,
        TuiCalendarModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiValueAccessorModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputDateTimeComponent, TuiInputDateTimeDirective],
    exports: [
        TuiInputDateTimeComponent,
        TuiInputDateTimeDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiInputDateTimeModule {}
