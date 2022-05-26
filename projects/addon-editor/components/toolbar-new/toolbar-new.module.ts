import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiEditLinkModule} from '@taiga-ui/addon-editor/components/edit-link';
import {
    TuiAlignContentModule,
    TuiCodeModule,
    TuiDetailsModule,
    TuiDetailsRemoveModule,
    TuiFontSizeModule,
    TuiFontStyleModule,
    TuiHighlightColorModule,
    TuiListConfigsModule,
    TuiTableCellColorModule,
    TuiTableCreateModule,
    TuiTableMergeCellsModule,
    TuiTableRowColumnManagerModule,
    TuiTextColorModule,
} from '@taiga-ui/addon-editor/components/toolbar-tools';
import {TuiFocusableModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDescribedByModule,
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
        TuiTableMergeCellsModule,
        TuiTableCellColorModule,
        TuiTableRowColumnManagerModule,
        TuiTableCreateModule,
        TuiFontSizeModule,
        TuiFontStyleModule,
        TuiAlignContentModule,
        TuiListConfigsModule,
        TuiTextColorModule,
        TuiHighlightColorModule,
        TuiCodeModule,
        TuiDetailsModule,
        TuiDetailsRemoveModule,
    ],
    declarations: [
        TuiToolbarNewComponent,
        TuiToolbarToolDirective,
        TuiToolbarNavigationManagerDirective,
    ],
    exports: [TuiToolbarNewComponent, TuiToolbarToolDirective],
})
export class TuiToolbarNewModule {}
