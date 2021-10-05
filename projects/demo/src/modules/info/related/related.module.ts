import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {RelatedComponent} from './related.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(RelatedComponent)),
    ],
    declarations: [RelatedComponent],
    exports: [RelatedComponent],
})
export class RelatedModule {}
