import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiWrapperModule} from '../../../core';
import {TuiToolbarModule} from '../toolbar';
import {TuiEditorNewComponent} from './editor-new.component';

@NgModule({
    declarations: [TuiEditorNewComponent],
    imports: [CommonModule, TuiToolbarModule, TuiWrapperModule],
    exports: [TuiEditorNewComponent],
})
export class TuiEditorNewModule {}
