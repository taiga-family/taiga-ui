import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiIconComponent} from '@taiga-ui/core';
import {TuiChevronDirective} from '@taiga-ui/kit';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiCellDirective} from './directives/cell.directive';
import {TuiDirectionOrderDirective} from './directives/direction-order.directive';
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
    imports: [
        CommonModule,
        TuiIconComponent,
        TuiMapperPipe,
        TuiChevronDirective,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
    ],
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
        TuiDirectionOrderDirective,
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
        TuiDirectionOrderDirective,
    ],
})
export class TuiTable {}
