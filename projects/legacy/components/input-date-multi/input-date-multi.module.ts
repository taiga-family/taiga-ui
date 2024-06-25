import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiInputTagModule} from '@taiga-ui/legacy/components/input-tag';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputDateMultiComponent} from './input-date-multi.component';

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
        TuiInputTagModule,
        FormsModule,
        TuiMapperPipe,
        TuiTextfieldControllerModule,
        TuiPrimitiveTextfieldModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiIcon,
        TuiAppearance,
        ...TuiDropdown,
    ],
    declarations: [TuiInputDateMultiComponent],
    exports: [TuiInputDateMultiComponent, ...TuiDropdown],
})
export class TuiInputDateMultiModule {}
