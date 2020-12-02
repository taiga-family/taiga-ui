import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    generateRoutes,
    TUI_DOC_PAGE_MODULES,
    TuiDocCopyModule,
} from '@taiga-ui/addon-doc';
import {TypographyComponent} from './typography.component';

@NgModule({
    imports: [
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(TypographyComponent)),
        TuiDocCopyModule,
    ],
    declarations: [TypographyComponent],
    exports: [TypographyComponent],
})
export class TypographyModule {}
