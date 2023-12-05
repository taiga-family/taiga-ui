import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {DisableAnimationComponent} from './disable-animation.component';
import {TuiTabsModule} from "@taiga-ui/kit";

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(tuiGenerateRoutes(DisableAnimationComponent)),
        TuiTabsModule,
    ],
    declarations: [DisableAnimationComponent],
})
export class DisableAnimationModule {}
