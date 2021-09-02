import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {DisableAnimationComponent} from './disable-animation.component';

@NgModule({
    declarations: [DisableAnimationComponent],
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(DisableAnimationComponent)),
    ],
})
export class DisableAnimationModule {}
