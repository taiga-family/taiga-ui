import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiSelectOptionModule} from '@taiga-ui/legacy/components/select-option';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
    TuiValueAccessorModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputTimeComponent} from './input-time.component';
import {TuiInputTimeDirective} from './input-time.directive';
import {TuiNativeTimeComponent} from './native-time/native-time.component';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        TuiSelectOptionModule,
        TuiPrimitiveTextfieldModule,
        TuiValueAccessorModule,
        TuiTextfieldControllerModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiIcon,
        TuiAppearance,
        ...TuiDropdown,
        ...TuiDataList,
    ],
    declarations: [TuiInputTimeComponent, TuiNativeTimeComponent, TuiInputTimeDirective],
    exports: [
        TuiInputTimeComponent,
        TuiInputTimeDirective,
        ...TuiDropdown,
        ...TuiDataList,
    ],
})
export class TuiInputTimeModule {}
