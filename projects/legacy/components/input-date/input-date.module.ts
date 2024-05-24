import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {
    TuiCalendarComponent,
    TuiHostedDropdownModule,
    TuiLinkDirective,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateComponent} from './input-date.component';
import {TuiInputDateDirective} from './input-date.directive';
import {TuiNativeDateDirective} from './native-date/native-date.component';

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
        TuiLetDirective,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputDateComponent, TuiInputDateDirective, TuiNativeDateDirective],
    exports: [TuiInputDateComponent, TuiInputDateDirective, TuiTextfieldLegacyComponent],
})
export class TuiInputDateModule {}
