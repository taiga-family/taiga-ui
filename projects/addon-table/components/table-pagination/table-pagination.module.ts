import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTablePaginationComponent} from './table-pagination.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonDirective,
        TuiLinkModule,
        TuiDropdownModule,
        TuiDataListModule,
        TuiSvgModule,
        PolymorpheusModule,
    ],
    declarations: [TuiTablePaginationComponent],
    exports: [TuiTablePaginationComponent],
})
export class TuiTablePaginationModule {}
