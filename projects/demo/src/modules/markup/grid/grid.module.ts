import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiGrid1} from './examples/1';
import {TuiGrid2} from './examples/2';
import {GridComponent} from './grid.component';

@NgModule({
    imports: [
        CommonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(GridComponent)),
    ],
    declarations: [GridComponent, TuiGrid1, TuiGrid2],
    exports: [GridComponent],
})
export class GridModule {}
