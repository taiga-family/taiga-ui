import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiEditLinkModule} from '@taiga-ui/addon-editor/components/edit-link';
import {
    TuiAlignContentModule,
    TuiCodeModule,
    TuiDetailsModule,
    TuiEditorToolGroup,
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
import {TuiFocusableModule, TuiItemDirective, TuiItemModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';

import {TuiToolbarComponent} from './toolbar.component';
import {TuiToolbarNavigationManagerDirective} from './toolbar-navigation-manager.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiHintModule,
        TuiFocusableModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiEditLinkModule,
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
        TuiItemModule,
        TuiEditorToolGroup,
    ],
    declarations: [TuiToolbarComponent, TuiToolbarNavigationManagerDirective],
    exports: [TuiToolbarComponent, TuiItemDirective],
})
export class TuiToolbarModule {}
