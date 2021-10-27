import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorSelectorModule} from '@taiga-ui/addon-editor/components/color-selector';
import {TuiEditLinkModule} from '@taiga-ui/addon-editor/components/edit-link';
import {
    TuiFontSizeModule,
    TuiFontStyleModule,
    TuiJustifyContentModule,
    TuiListConfigsModule,
    TuiTableCellColorModule,
    TuiTableCreateModule,
    TuiTableMergeCellsModule,
    TuiTableRowColumnManagerModule,
    TuiTextColorModule,
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
import {TuiToolbarNavigationManagerDirective} from './toolbar-navigation-manager.directive';
import {TuiToolbarNewComponent} from './toolbar-new.component';
import {TuiToolbarToolDirective} from './toolbar-tool.directive';

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
        TuiTableMergeCellsModule,
        TuiTableCellColorModule,
        TuiTableRowColumnManagerModule,
        TuiTableCreateModule,
        TuiFontSizeModule,
        TuiFontStyleModule,
        TuiJustifyContentModule,
        TuiListConfigsModule,
        TuiTextColorModule,
    ],
    declarations: [
        TuiToolbarNewComponent,
        TuiToolbarToolDirective,
        TuiToolbarNavigationManagerDirective,
    ],
    exports: [TuiToolbarNewComponent, TuiToolbarToolDirective],
})
export class TuiToolbarNewModule {}
