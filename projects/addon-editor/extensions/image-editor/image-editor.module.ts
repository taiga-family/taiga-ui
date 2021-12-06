import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiPanModule} from '@taiga-ui/cdk';

import {TuiImageEditorComponent} from './image-editor.component';

@NgModule({
    imports: [CommonModule, TuiPanModule],
    declarations: [TuiImageEditorComponent],
    exports: [TuiImageEditorComponent],
})
export class TuiImageEditorModule {}
