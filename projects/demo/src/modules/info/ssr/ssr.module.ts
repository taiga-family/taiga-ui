import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {SsrComponent} from './ssr.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(SsrComponent)),
    ],
    declarations: [SsrComponent],
    exports: [SsrComponent],
})
export class SsrModule {}
