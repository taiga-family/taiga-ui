import {CommonModule} from '@angular/common';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiCellDirective} from './directives/cell.directive';
import {TuiHeadDirective} from './directives/head.directive';
import {TuiRowDirective} from './directives/row.directive';
import {TuiTableDirective} from './directives/table.directive';
import {TuiTbodyComponent} from './tbody/tbody.component';
import {TuiTdComponent} from './td/td.component';
import {TuiThGroupComponent} from './th-group/th-group.component';
import {TuiThComponent} from './th/th.component';
import {TuiTheadComponent} from './thead/thead.component';
import {TuiTrComponent} from './tr/tr.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiMapperPipeModule, TuiSvgModule],
    declarations: [
        TuiTableDirective,
        TuiTbodyComponent,
        TuiTheadComponent,
        TuiThGroupComponent,
        TuiThComponent,
        TuiTdComponent,
        TuiTrComponent,
        TuiCellDirective,
        TuiHeadDirective,
        TuiRowDirective,
    ],
    exports: [
        TuiTableDirective,
        TuiTbodyComponent,
        TuiTheadComponent,
        TuiThGroupComponent,
        TuiThComponent,
        TuiTdComponent,
        TuiTrComponent,
        TuiCellDirective,
        TuiHeadDirective,
        TuiRowDirective,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TuiTableModule {}
