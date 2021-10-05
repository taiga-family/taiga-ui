import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorEditModule} from '@taiga-ui/addon-editor/components/color-edit';
import {TuiColorPickerModule} from '@taiga-ui/addon-editor/components/color-picker';
import {TuiLinearMultiPickerModule} from '@taiga-ui/addon-editor/components/linear-multi-picker';
import {TuiPaletteModule} from '@taiga-ui/addon-editor/components/palette';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDescribedByModule,
    TuiGroupModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {TuiColorSelectorComponent} from './color-selector.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiColorPickerModule,
        TuiLinearMultiPickerModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiSvgModule,
        TuiDataListModule,
        TuiActiveZoneModule,
        TuiColorEditModule,
        TuiGroupModule,
        TuiPaletteModule,
    ],
    declarations: [TuiColorSelectorComponent],
    exports: [TuiColorSelectorComponent],
})
export class TuiColorSelectorModule {}
