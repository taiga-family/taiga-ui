import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiEditLinkModule} from '@taiga-ui/addon-editor/components/edit-link';
import {TuiEditorSocketModule} from '@taiga-ui/addon-editor/components/editor-socket';
import {TuiToolbarModule} from '@taiga-ui/addon-editor/components/toolbar';
import {TuiTiptapEditorModule} from '@taiga-ui/addon-editor/directives';
import {TuiActiveZoneModule, TuiItemDirective, TuiLetModule} from '@taiga-ui/cdk';
import {TuiScrollbarModule, TuiWrapperModule} from '@taiga-ui/core';
import {TuiDropdownSelectionModule} from '@taiga-ui/kit';

import {TuiEditorComponent} from './editor.component';
import {TuiEditorPortalDirective} from './portal/editor-portal.directive';
import {TuiEditorPortalHostComponent} from './portal/editor-portal-host.component';

@NgModule({
    declarations: [
        TuiEditorComponent,
        TuiEditorPortalHostComponent,
        TuiEditorPortalDirective,
    ],
    imports: [
        CommonModule,
        TuiToolbarModule,
        TuiWrapperModule,
        TuiScrollbarModule,
        TuiEditLinkModule,
        TuiActiveZoneModule,
        TuiDropdownSelectionModule,
        TuiTiptapEditorModule,
        TuiEditorSocketModule,
        TuiLetModule,
    ],
    exports: [TuiEditorComponent, TuiItemDirective],
})
export class TuiEditorModule {}
