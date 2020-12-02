import {NgModule} from '@angular/core';
import {TuiResizableColumnComponent} from './resizable-column.component';
import {TuiResizableColumnDirective} from './resizable-column.directive';

@NgModule({
    declarations: [TuiResizableColumnComponent, TuiResizableColumnDirective],
    exports: [TuiResizableColumnComponent],
})
export class TuiResizableColumnModule {}
