import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiCalendarModule, TuiLinkModule} from '@taiga-ui/core';
import {MarkdownModule} from 'ngx-markdown';
import {I18nComponent} from './i18n.component';

@NgModule({
    imports: [
        TuiCalendarModule,
        MarkdownModule,
        TuiLinkModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(I18nComponent)),
    ],
    declarations: [I18nComponent],
    exports: [I18nComponent],
})
export class I18nModule {}
