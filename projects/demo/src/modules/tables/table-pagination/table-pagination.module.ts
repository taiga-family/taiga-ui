import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiTablePaginationModule} from '@taiga-ui/addon-table';
import {TuiTablePaginationExample1} from './examples/1';
import {ExampleTuiTablePaginationComponent} from './table-pagination.component';

@NgModule({
    imports: [
        CommonModule,
        TuiTablePaginationModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiTablePaginationComponent)),
    ],
    declarations: [ExampleTuiTablePaginationComponent, TuiTablePaginationExample1],
    exports: [ExampleTuiTablePaginationComponent],
})
export class ExampleTuiTablePaginationModule {}
