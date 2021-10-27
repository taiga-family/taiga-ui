import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorSelectorModule} from '@taiga-ui/addon-editor/components/color-selector';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDescribedByModule,
    TuiDropdownControllerModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiHighlightColorComponent} from './highlight-color.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiColorSelectorModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiDropdownControllerModule,
        TuiActiveZoneModule,
        TuiLetModule,
    ],
    declarations: [TuiHighlightColorComponent],
    exports: [TuiHighlightColorComponent],
})
export class TuiHighlightColorModule {}
