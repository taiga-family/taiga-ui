import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiResizableColumnModule} from '@taiga-ui/addon-table/components/resizable-column';
import {TuiResizableColumnExample1} from './examples/1';
import {ExampleTuiResizableColumnComponent} from './resizable-column.component';

@NgModule({
    imports: [
        CommonModule,
        TuiResizableColumnModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiResizableColumnComponent)),
    ],
    declarations: [ExampleTuiResizableColumnComponent, TuiResizableColumnExample1],
    exports: [ExampleTuiResizableColumnComponent],
})
export class ExampleTuiResizableColumnModule {}
