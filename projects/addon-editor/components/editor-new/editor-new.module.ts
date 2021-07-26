import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHoveredModule} from '../../../cdk';
import {TuiScrollbarModule, TuiWrapperModule} from '../../../core';
import {TuiDropdownSelectionModule} from '../../../kit';
import {TuiEditLinkModule} from '../edit-link';
import {TuiToolbarNewModule} from '../toolbar-new';
import {TuiEditorNewComponent} from './editor-new.component';

@NgModule({
    declarations: [TuiEditorNewComponent],
    imports: [
        CommonModule,
        TuiToolbarNewModule,
        TuiWrapperModule,
        TuiHoveredModule,
        TuiScrollbarModule,
        TuiEditLinkModule,
        TuiDropdownSelectionModule,
    ],
    exports: [TuiEditorNewComponent],
})
export class TuiEditorNewModule {}
