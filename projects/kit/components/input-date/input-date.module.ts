import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule, TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiCalendarModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TextMaskModule, TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateComponent} from './input-date.component';
import {TuiInputDateDirective} from './input-date.directive';

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
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputDateComponent, TuiInputDateDirective],
    exports: [TuiInputDateComponent, TuiInputDateDirective, TuiTextfieldComponent],
})
export class TuiInputDateModule {}
