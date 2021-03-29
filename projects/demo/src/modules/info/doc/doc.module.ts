import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {DocComponent} from './doc.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(DocComponent)),
    ],
    declarations: [DocComponent],
    exports: [DocComponent],
})
export class DocModule {}
