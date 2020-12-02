import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {MarkdownModule} from 'ngx-markdown';
import {DocComponent} from './doc.component';

@NgModule({
    imports: [
        MarkdownModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(DocComponent)),
    ],
    declarations: [DocComponent],
    exports: [DocComponent],
})
export class DocModule {}
