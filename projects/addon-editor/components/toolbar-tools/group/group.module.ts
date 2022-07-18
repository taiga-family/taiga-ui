import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiDescribedByModule, TuiHintModule} from '@taiga-ui/core';

import {TuiEditorGroupToolComponent} from './group.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule, TuiHintModule, TuiDescribedByModule],
    declarations: [TuiEditorGroupToolComponent],
    exports: [TuiEditorGroupToolComponent],
})
export class TuiEditorToolGroup {}
