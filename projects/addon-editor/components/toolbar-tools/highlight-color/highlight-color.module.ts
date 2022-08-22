import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiPaletteModule} from '@taiga-ui/addon-editor/components/color-selector';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDescribedByModule,
    TuiDropdownModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {TuiHighlightColorComponent} from './highlight-color.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiPaletteModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiDropdownModule,
        TuiActiveZoneModule,
        TuiLetModule,
    ],
    declarations: [TuiHighlightColorComponent],
    exports: [TuiHighlightColorComponent],
})
export class TuiHighlightColorModule {}
