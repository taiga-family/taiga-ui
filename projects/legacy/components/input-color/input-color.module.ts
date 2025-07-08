import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiColorSelectorModule} from '@taiga-ui/legacy/components/color-selector';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives/textfield-controller';

import {TuiInputColorComponent} from './input-color.component';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-color TuiInputColor} (from @taiga-ui/kit) instead
 */
@NgModule({
    imports: [
        CommonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiColorSelectorModule,
        MaskitoDirective,
        ...TuiDropdown,
    ],
    declarations: [TuiInputColorComponent],
    exports: [TuiInputColorComponent, ...TuiDropdown],
})
export class TuiInputColorModule {}
