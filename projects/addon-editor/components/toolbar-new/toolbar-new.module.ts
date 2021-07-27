import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorSelectorModule} from '@taiga-ui/addon-editor/components/color-selector';
import {TuiEditLinkModule} from '@taiga-ui/addon-editor/components/edit-link';
import {TableSizeSelectorModule} from '@taiga-ui/addon-editor/components/table-size-selector';
import {
    TuiActiveZoneModule,
    TuiFocusableModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDescribedByModule,
    TuiDropdownControllerModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiToolbarNewComponent} from './toolbar-new.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHintModule,
        TuiFocusableModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiEditLinkModule,
        TuiDescribedByModule,
        TuiDataListModule,
        TuiColorSelectorModule,
        TuiActiveZoneModule,
        TuiRepeatTimesModule,
        TuiDropdownControllerModule,
        TableSizeSelectorModule,
    ],
    declarations: [TuiToolbarNewComponent],
    exports: [TuiToolbarNewComponent],
})
export class TuiToolbarNewModule {}
