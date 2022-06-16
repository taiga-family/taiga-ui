import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiEditLinkModule} from '@taiga-ui/addon-editor/components/edit-link';
import {
    TuiToolbarNewModule,
    TuiToolbarToolDirective,
} from '@taiga-ui/addon-editor/components/toolbar-new';
import {TuiTiptapEditorModule} from '@taiga-ui/addon-editor/directives';
import {TuiActiveZoneModule, TuiHoveredModule, TuiLetModule} from '@taiga-ui/cdk';
import {TuiScrollbarModule, TuiWrapperModule} from '@taiga-ui/core';
import {TuiDropdownSelectionModule} from '@taiga-ui/kit';

import {TuiEditorNewComponent} from './editor-new.component';
import {TuiEditorPortalDirective} from './portal/editor-portal.directive';
import {TuiEditorPortalHostComponent} from './portal/editor-portal-host.component';

@NgModule({
    declarations: [
        TuiEditorNewComponent,
        TuiEditorPortalHostComponent,
        TuiEditorPortalDirective,
    ],
    imports: [
        CommonModule,
        TuiToolbarNewModule,
        TuiWrapperModule,
        TuiHoveredModule,
        TuiScrollbarModule,
        TuiEditLinkModule,
        TuiActiveZoneModule,
        TuiDropdownSelectionModule,
        TuiTiptapEditorModule,
        TuiLetModule,
    ],
    exports: [TuiEditorNewComponent, TuiToolbarToolDirective],
})
export class TuiEditorNewModule {}
