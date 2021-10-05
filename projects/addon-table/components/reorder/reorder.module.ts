import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiReorderComponent} from './reorder.component';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiPreventDefaultModule,
    ],
    declarations: [TuiReorderComponent],
    exports: [TuiReorderComponent],
})
export class TuiReorderModule {}
