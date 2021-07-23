import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHoveredModule} from '../../../cdk';
import {TuiScrollbarModule, TuiWrapperModule} from '../../../core';
import {TuiDropdownSelectionModule} from '../../../kit';
import {TuiToolbarModule} from '../toolbar';
import {TuiEditorNewComponent} from './editor-new.component';

@NgModule({
    declarations: [TuiEditorNewComponent],
    imports: [
        CommonModule,
        TuiToolbarModule,
        TuiWrapperModule,
        TuiHoveredModule,
        TuiScrollbarModule,
        TuiDropdownSelectionModule,
    ],
    exports: [TuiEditorNewComponent],
})
export class TuiEditorNewModule {}
