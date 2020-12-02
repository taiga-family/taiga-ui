import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiModeModule, TuiWrapperModule} from '@taiga-ui/core';
import {ContainersComponent} from './containers.component';

@NgModule({
    imports: [
        TuiModeModule,
        TuiWrapperModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ContainersComponent)),
    ],
    declarations: [ContainersComponent],
    exports: [ContainersComponent],
})
export class ContainersModule {}
