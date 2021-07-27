import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule, TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiCalendarModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputDateTimeComponent} from './input-date-time.component';

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
        TuiLetModule,
    ],
    declarations: [TuiInputDateTimeComponent],
    exports: [TuiInputDateTimeComponent],
})
export class TuiInputDateTimeModule {}
