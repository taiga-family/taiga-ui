import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiCellComponent} from './cell.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [TuiCellComponent],
    exports: [TuiCellComponent],
})
export class TuiCellModule {}
