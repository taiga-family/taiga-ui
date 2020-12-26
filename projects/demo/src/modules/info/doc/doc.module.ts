import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {DocComponent} from './doc.component';

@NgModule({
    imports: [
        TuiLinkModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(DocComponent)),
    ],
    declarations: [DocComponent],
    exports: [DocComponent],
})
export class DocModule {}
