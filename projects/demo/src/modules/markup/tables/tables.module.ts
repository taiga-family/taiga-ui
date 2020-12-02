import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiCheckboxModule, TuiInputTagModule, TuiTagModule} from '@taiga-ui/kit';
import {TuiTablesExample1} from './examples/1';
import {TuiTablesExample2} from './examples/2';
import {TablesComponent} from './tables.component';

@NgModule({
    imports: [
        CommonModule,
        TuiCheckboxModule,
        TuiInputTagModule,
        TuiSvgModule,
        TuiTagModule,
        ReactiveFormsModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(TablesComponent)),
    ],
    declarations: [TablesComponent, TuiTablesExample1, TuiTablesExample2],
    exports: [TablesComponent],
})
export class TablesModule {}
