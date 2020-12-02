import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {MarkdownModule} from 'ngx-markdown';
import {ChangelogComponent} from './changelog.component';

@NgModule({
    imports: [
        MarkdownModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ChangelogComponent)),
    ],
    declarations: [ChangelogComponent],
    exports: [ChangelogComponent],
})
export class ChangelogModule {}
