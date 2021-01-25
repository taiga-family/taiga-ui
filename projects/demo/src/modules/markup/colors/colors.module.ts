import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    generateRoutes,
    TUI_DOC_PAGE_MODULES,
    TuiDocCopyModule,
} from '@taiga-ui/addon-doc';
import {ColorsComponent} from './colors.component';
import {TableComponent} from './table/table.component';

@NgModule({
    imports: [
        CommonModule,
        ClipboardModule,
        TuiDocCopyModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ColorsComponent)),
    ],
    declarations: [ColorsComponent, TableComponent],
    exports: [ColorsComponent],
})
export class ColorsModule {}
