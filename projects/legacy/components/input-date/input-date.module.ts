import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiLet} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiCalendarComponent,
    TuiDropdown,
    TuiIcon,
    TuiLink,
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
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputDateComponent} from './input-date.component';
import {TuiInputDateDirective} from './input-date.directive';
import {TuiNativeDateDirective} from './native-date/native-date.component';

@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiCalendarComponent,
        TuiLink,
        TuiPrimitiveTextfieldModule,
        TuiValueAccessorModule,
        TuiLet,
        TuiTextfieldControllerModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiAppearance,
        TuiIcon,
        ...TuiDropdown,
    ],
    declarations: [TuiInputDateComponent, TuiInputDateDirective, TuiNativeDateDirective],
    exports: [
        TuiInputDateComponent,
        TuiInputDateDirective,
        TuiTextfieldComponent,
        ...TuiDropdown,
    ],
})
export class TuiInputDateModule {}
