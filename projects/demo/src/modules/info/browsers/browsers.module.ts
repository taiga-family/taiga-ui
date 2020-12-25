import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {BrowsersComponent} from './browsers.component';

@NgModule({
    imports: [
        TuiLinkModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(BrowsersComponent)),
    ],
    declarations: [BrowsersComponent],
    exports: [BrowsersComponent],
})
export class BrowsersModule {}
