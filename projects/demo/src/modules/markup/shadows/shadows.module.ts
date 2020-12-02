import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {ShadowsComponent} from './shadows.component';

@NgModule({
    imports: [
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ShadowsComponent)),
    ],
    declarations: [ShadowsComponent],
    exports: [ShadowsComponent],
})
export class ShadowsModule {}
