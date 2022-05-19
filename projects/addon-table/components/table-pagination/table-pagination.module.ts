import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {TuiTablePaginationComponent} from './table-pagination.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        TuiSvgModule,
    ],
    declarations: [TuiTablePaginationComponent],
    exports: [TuiTablePaginationComponent],
})
export class TuiTablePaginationModule {}
