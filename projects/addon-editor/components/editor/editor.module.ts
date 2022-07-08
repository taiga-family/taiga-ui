import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiEditLinkModule} from '@taiga-ui/addon-editor/components/edit-link';
import {
    TuiEditorNewComponent,
    TuiEditorNewModule,
} from '@taiga-ui/addon-editor/components/editor-new';
import {TuiToolbarModule} from '@taiga-ui/addon-editor/components/toolbar';
import {TuiToolbarNewModule} from '@taiga-ui/addon-editor/components/toolbar-new';
import {TuiDesignModeModule} from '@taiga-ui/addon-editor/directives/design-mode';
import {
    TuiActiveZoneModule,
    TuiHoveredModule,
    TuiItemDirective,
    TuiLetModule,
} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiScrollbarModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiDropdownSelectionModule} from '@taiga-ui/kit';

import {TuiEditorComponent} from './editor.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiLetModule,
        TuiHoveredModule,
        TuiActiveZoneModule,
        TuiWrapperModule,
        TuiScrollbarModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiDropdownSelectionModule,
        TuiToolbarModule,
        TuiEditLinkModule,
        TuiDesignModeModule,
        TuiEditorNewModule,
        TuiToolbarNewModule,
    ],
    declarations: [TuiEditorComponent],
    exports: [TuiEditorComponent, TuiEditorNewComponent, TuiItemDirective],
})
export class TuiEditorModule {}
