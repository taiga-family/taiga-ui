import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiActionModule, TuiIslandModule} from '@taiga-ui/kit';

import {RelatedComponent} from './related.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(RelatedComponent)),
        TuiIslandModule,
        TuiActionModule,
    ],
    declarations: [RelatedComponent],
    exports: [RelatedComponent],
})
export class RelatedModule {}
