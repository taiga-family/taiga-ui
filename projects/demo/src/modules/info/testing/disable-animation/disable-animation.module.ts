import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, TuiDocTabModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';

import {DisableAnimationComponent} from './disable-animation.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        TuiTabsModule,
        TuiDocTabModule,
        RouterModule.forChild(tuiGenerateRoutes(DisableAnimationComponent)),
    ],
    declarations: [DisableAnimationComponent],
})
export class DisableAnimationModule {}
