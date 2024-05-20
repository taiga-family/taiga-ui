import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {ShadowsComponent} from './shadows.component';

@NgModule({
    imports: [TuiAddonDoc, RouterModule.forChild(tuiGenerateRoutes(ShadowsComponent))],
    declarations: [ShadowsComponent],
    exports: [ShadowsComponent],
})
export class ShadowsModule {}
