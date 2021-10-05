import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule} from '@taiga-ui/cdk';
import {TuiLinkModule} from '@taiga-ui/core/components/link';
import {TuiPrimitiveSpinButtonModule} from '@taiga-ui/core/components/primitive-spin-button';
import {TuiMonthPipeModule} from '@taiga-ui/core/pipes';

import {TuiPrimitiveYearMonthPaginationComponent} from './primitive-year-month-pagination.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFocusableModule,
        TuiPrimitiveSpinButtonModule,
        TuiLinkModule,
        TuiMonthPipeModule,
    ],
    declarations: [TuiPrimitiveYearMonthPaginationComponent],
    exports: [TuiPrimitiveYearMonthPaginationComponent],
})
export class TuiPrimitiveYearMonthPaginationModule {}
