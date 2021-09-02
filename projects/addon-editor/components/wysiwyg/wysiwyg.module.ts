import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiEditLinkModule} from '@taiga-ui/addon-editor/components/edit-link';
import {TuiWysiwygToolbarModule} from '@taiga-ui/addon-editor/components/wysiwyg-toolbar';
import {TuiTiptapEditorModule} from '@taiga-ui/addon-editor/directives';
import {TuiActiveZoneModule, TuiHoveredModule} from '@taiga-ui/cdk';
import {TuiScrollbarModule, TuiWrapperModule} from '@taiga-ui/core';
import {TuiDropdownSelectionModule} from '@taiga-ui/kit';
import {TuiWysiwygComponent} from './wysiwyg.component';

@NgModule({
    declarations: [TuiWysiwygComponent],
    imports: [
        CommonModule,
        TuiWysiwygToolbarModule,
        TuiWrapperModule,
        TuiHoveredModule,
        TuiScrollbarModule,
        TuiEditLinkModule,
        TuiActiveZoneModule,
        TuiDropdownSelectionModule,
        TuiTiptapEditorModule,
    ],
    exports: [TuiWysiwygComponent],
})
export class TuiWysiwygModule {}
