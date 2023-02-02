import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiResizeModule, TuiResizerModule} from '@taiga-ui/cdk';

import {TuiEditorResizableComponent} from './editor-resizable.component';

@NgModule({
    imports: [CommonModule, TuiResizeModule, TuiResizerModule],
    declarations: [TuiEditorResizableComponent],
    exports: [TuiEditorResizableComponent],
})
export class TuiEditorResizableModule {}
