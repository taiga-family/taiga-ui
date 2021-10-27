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
import {TuiTextColorComponent} from './text-color.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiDropdownControllerModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiColorSelectorModule,
        TuiActiveZoneModule,
        TuiLetModule,
    ],
    declarations: [TuiTextColorComponent],
    exports: [TuiTextColorComponent],
})
export class TuiTextColorModule {}
