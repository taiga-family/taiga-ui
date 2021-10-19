import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
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
import {TuiColorEditModule} from './color-edit';
import {TuiColorPickerModule} from './color-picker';
import {TuiColorSelectorComponent} from './color-selector.component';
import {TuiLinearMultiPickerModule} from './linear-multi-picker';
import {TuiPaletteModule} from './palette';

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
