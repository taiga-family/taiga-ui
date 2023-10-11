import {NgModule} from '@angular/core';

import {TuiCellComponent} from './cell.component';
import {TuiCellSlotDirective} from './cell-slot.directive';

@NgModule({
    declarations: [TuiCellComponent, TuiCellSlotDirective],
    exports: [TuiCellComponent, TuiCellSlotDirective],
})
export class TuiCellModule {}
