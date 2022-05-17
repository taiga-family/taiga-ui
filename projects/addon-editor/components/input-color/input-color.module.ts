import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorSelectorModule} from '@taiga-ui/addon-editor/components/color-selector';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiHintControllerModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';

import {TuiInputColorComponent} from './input-color.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiHostedDropdownModule,
        TuiColorSelectorModule,
        TuiActiveZoneModule,
    ],
    declarations: [TuiInputColorComponent],
    exports: [TuiInputColorComponent],
})
export class TuiInputColorModule {}
