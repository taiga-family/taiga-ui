import {NgModule} from '@angular/core';

import {TuiCellComponent} from './cell.component';
import {TuiCellDirective} from './cell.directive';

@NgModule({
    declarations: [TuiCellComponent, TuiCellDirective],
    exports: [TuiCellComponent, TuiCellDirective],
})
export class TuiCellModule {}
