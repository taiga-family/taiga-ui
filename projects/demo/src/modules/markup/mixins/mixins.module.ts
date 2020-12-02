import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {MixinsComponent} from './mixins.component';

@NgModule({
    imports: [
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(MixinsComponent)),
    ],
    declarations: [MixinsComponent],
    exports: [MixinsComponent],
})
export class MixinsModule {}
