import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiGroupModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {TuiColorEditModule} from './color-edit/color-edit.module';
import {TuiColorPickerModule} from './color-picker/color-picker.module';
import {TuiColorSelectorComponent} from './color-selector.component';
import {TuiLinearMultiPickerModule} from './linear-multi-picker/linear-multi-picker.module';
import {TuiPaletteModule} from './palette/palette.module';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiColorPickerModule,
        TuiLinearMultiPickerModule,
        TuiHintModule,
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
