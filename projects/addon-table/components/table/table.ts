import {TuiTableCaption} from './caption/caption.component';
import {TuiTableCell} from './directives/cell.directive';
import {TuiTableDirectionOrder} from './directives/direction-order.directive';
import {TuiTableHead} from './directives/head.directive';
import {TuiTableResized} from './directives/resized.directive';
import {TuiTableSortBy} from './directives/sort-by.directive';
import {TuiTableSortable} from './directives/sortable.directive';
import {TuiTableDirective} from './directives/table.directive';
import {TuiTableExpandContent} from './directives/table-expand-content.directive';
import {TuiTableExpandHeading} from './directives/table-expand-heading.directive';
import {TuiTableThead} from './directives/thead.directive';
import {TuiTableSortPipe} from './pipes/table-sort.pipe';
import {TuiTableTbody} from './tbody/tbody.component';
import {TuiTableTd} from './td/td.component';
import {TuiTableTh} from './th/th.component';
import {TuiTableThGroup} from './th-group/th-group.component';
import {TuiTableTr} from './tr/tr.component';

export const TuiTable = [
    TuiTableDirective,
    TuiTableCaption,
    TuiTableTbody,
    TuiTableThGroup,
    TuiTableTh,
    TuiTableTd,
    TuiTableTr,
    TuiTableCell,
    TuiTableHead,
    TuiTableSortBy,
    TuiTableSortable,
    TuiTableThead,
    TuiTableResized,
    TuiTableSortPipe,
    TuiTableDirectionOrder,
    TuiTableExpandHeading,
    TuiTableExpandContent,
] as const;
