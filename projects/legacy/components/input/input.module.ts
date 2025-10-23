import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiLegacyDropdownOpenMonitorDirective} from '@taiga-ui/legacy/directives';

import {TuiInputComponent} from './input.component';
import {TuiInputDirective} from './input.directive';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/textfield TuiTextfield} (from @taiga-ui/core) instead
 */
@NgModule({
    imports: [
        CommonModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiPrimitiveTextfieldModule,
        null,
    ],
    declarations: [TuiInputComponent, TuiInputDirective],
    exports: [
        TuiInputComponent,
        TuiInputDirective,
        TuiTextfieldComponent,
        ...TuiDropdown,
    ],
})
export class TuiInputModule {}
