import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
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

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiCalendar,
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
