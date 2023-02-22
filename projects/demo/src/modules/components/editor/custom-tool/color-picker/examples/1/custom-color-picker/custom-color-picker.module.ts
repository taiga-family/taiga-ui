import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiColorPickerModule,
    TuiColorSelectorModule,
    TuiPaletteModule,
} from '@taiga-ui/addon-editor';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {CustomColorPickerComponent} from './custom-color-picker.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiDropdownModule,
        TuiHintModule,
        TuiPaletteModule,
        TuiActiveZoneModule,
        TuiLetModule,
        TuiColorPickerModule,
        TuiColorSelectorModule,
    ],
    declarations: [CustomColorPickerComponent],
    exports: [CustomColorPickerComponent],
})
export class CustomColorPickerModule {}
