import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTablePaginationModule} from '@taiga-ui/addon-table';

import {TuiTablePaginationExample1} from './examples/1';
import {TuiTablePaginationExample2} from './examples/2';
import {ExampleTuiTablePaginationComponent} from './table-pagination.component';

@NgModule({
    imports: [
        CommonModule,
        TuiTablePaginationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTablePaginationComponent)),
    ],
    declarations: [
        ExampleTuiTablePaginationComponent,
        TuiTablePaginationExample1,
        TuiTablePaginationExample2,
    ],
    exports: [ExampleTuiTablePaginationComponent],
})
export class ExampleTuiTablePaginationModule {}
