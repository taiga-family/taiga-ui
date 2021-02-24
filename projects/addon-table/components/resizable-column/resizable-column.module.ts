import {NgModule} from '@angular/core';
import {TuiResizableColumnComponent} from './resizable-column.component';
import {TuiResizableColumnDirective} from './resizable-column.directive';

/** @deprecated use `<th tuiTh [resizable]="true">` from {@link TuiTableModule} */
@NgModule({
    declarations: [TuiResizableColumnComponent, TuiResizableColumnDirective],
    exports: [TuiResizableColumnComponent, TuiResizableColumnDirective],
})
export class TuiResizableColumnModule {}
