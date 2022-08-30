import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiPaletteModule} from '@taiga-ui/addon-editor/components/color-selector';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {TuiTextColorComponent} from './text-color.component';

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
    ],
    declarations: [TuiTextColorComponent],
    exports: [TuiTextColorComponent],
})
export class TuiTextColorModule {}
