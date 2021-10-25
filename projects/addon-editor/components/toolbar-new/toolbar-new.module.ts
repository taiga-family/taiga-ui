import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorSelectorModule} from '@taiga-ui/addon-editor/components/color-selector';
import {TuiEditLinkModule} from '@taiga-ui/addon-editor/components/edit-link';
import {
    TuiTableCellColorModule,
    TuiTableCreateModule,
    TuiTableMergeCellsModule,
    TuiTableRowColumnManagerModule,
} from '@taiga-ui/addon-editor/components/toolbar-tools';
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
import {TuiToolbarToolModule} from './toolbar-tool/toolbar-tool.module';

@NgModule({
    imports: [
        CommonModule,
        TuiToolbarToolModule,
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
        TuiTableMergeCellsModule,
        TuiTableCellColorModule,
        TuiTableRowColumnManagerModule,
        TuiTableCreateModule,
    ],
    declarations: [TuiToolbarNewComponent],
    exports: [TuiToolbarNewComponent],
})
export class TuiToolbarNewModule {}
