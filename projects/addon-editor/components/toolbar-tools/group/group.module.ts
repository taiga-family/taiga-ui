import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiHintModule} from '@taiga-ui/core';

import {TuiEditorGroupToolComponent} from './group.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule, TuiHintModule],
    declarations: [TuiEditorGroupToolComponent],
    exports: [TuiEditorGroupToolComponent],
})
export class TuiEditorToolGroup {}
