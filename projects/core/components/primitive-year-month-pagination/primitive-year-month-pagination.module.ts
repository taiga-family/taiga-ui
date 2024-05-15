import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLinkDirective} from '@taiga-ui/core/components/link';
import {TuiPrimitiveSpinButtonModule} from '@taiga-ui/core/components/primitive-spin-button';
import {TuiMonthPipe} from '@taiga-ui/core/pipes';

import {TuiPrimitiveYearMonthPaginationComponent} from './primitive-year-month-pagination.component';

@NgModule({
    imports: [CommonModule, TuiPrimitiveSpinButtonModule, TuiLinkDirective, TuiMonthPipe],
    declarations: [TuiPrimitiveYearMonthPaginationComponent],
    exports: [TuiPrimitiveYearMonthPaginationComponent],
})
export class TuiPrimitiveYearMonthPaginationModule {}
