import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHintModule} from '@taiga-ui/core';

import {TuiTableMergeCellsComponent} from './table-merge-cells.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule, TuiHintModule, TuiLetModule],
    declarations: [TuiTableMergeCellsComponent],
    exports: [TuiTableMergeCellsComponent],
})
export class TuiTableMergeCellsModule {}
