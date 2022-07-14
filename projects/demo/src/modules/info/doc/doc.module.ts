import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {DocComponent} from './doc.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(DocComponent)),
    ],
    declarations: [DocComponent],
    exports: [DocComponent],
})
export class DocModule {}
