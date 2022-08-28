import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiCellDirective} from './directives/cell.directive';
import {TuiDirectionByOrderDirective} from './directives/direction-by-order.directive';
import {TuiHeadDirective} from './directives/head.directive';
import {TuiResizedDirective} from './directives/resized.directive';
import {TuiRowDirective} from './directives/row.directive';
import {TuiSortByDirective} from './directives/sort-by.directive';
import {TuiSortableDirective} from './directives/sortable.directive';
import {TuiTableDirective} from './directives/table.directive';
import {TuiTheadDirective} from './directives/thead.directive';
import {TuiTableSortPipe} from './pipes/table-sort.pipe';
import {TuiTbodyComponent} from './tbody/tbody.component';
import {TuiTdComponent} from './td/td.component';
import {TuiThComponent} from './th/th.component';
import {TuiThGroupComponent} from './th-group/th-group.component';
import {TuiTrComponent} from './tr/tr.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiMapperPipeModule, TuiSvgModule],
    declarations: [
        TuiTableDirective,
        TuiTbodyComponent,
        TuiThGroupComponent,
        TuiThComponent,
        TuiTdComponent,
        TuiTrComponent,
        TuiCellDirective,
        TuiHeadDirective,
        TuiRowDirective,
        TuiSortByDirective,
        TuiSortableDirective,
        TuiTheadDirective,
        TuiResizedDirective,
        TuiTableSortPipe,
        TuiDirectionByOrderDirective,
    ],
    exports: [
        TuiTableDirective,
        TuiTbodyComponent,
        TuiThGroupComponent,
        TuiThComponent,
        TuiTdComponent,
        TuiTrComponent,
        TuiCellDirective,
        TuiHeadDirective,
        TuiRowDirective,
        TuiSortByDirective,
        TuiSortableDirective,
        TuiTheadDirective,
        TuiTableSortPipe,
        TuiDirectionByOrderDirective,
    ],
})
export class TuiTableModule {}
