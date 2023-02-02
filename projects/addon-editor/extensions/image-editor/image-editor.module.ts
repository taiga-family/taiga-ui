import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiEditorResizableModule} from '@taiga-ui/addon-editor/components/editor-resizable';

import {TuiImageEditorComponent} from './image-editor.component';

@NgModule({
    imports: [CommonModule, TuiEditorResizableModule],
    declarations: [TuiImageEditorComponent],
    exports: [TuiImageEditorComponent],
})
export class TuiImageEditorModule {}
