import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiTablePaginationModule} from '@taiga-ui/addon-table';
import {TuiTablePaginationExample1} from './examples/1';
import {ExampleTuiTablePaginationComponent} from './table-pagination.component';

@NgModule({
    imports: [
        CommonModule,
        TuiTablePaginationModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiTablePaginationComponent)),
    ],
    declarations: [ExampleTuiTablePaginationComponent, TuiTablePaginationExample1],
    exports: [ExampleTuiTablePaginationComponent],
})
export class ExampleTuiTablePaginationModule {}
