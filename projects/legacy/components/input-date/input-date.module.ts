import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiLetDirective} from '@taiga-ui/cdk';
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
    exports: [TuiInputDateComponent, TuiInputDateDirective, TuiTextfieldComponent],
})
export class TuiInputDateModule {}
