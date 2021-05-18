import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {ShadowsComponent} from './shadows.component';

@NgModule({
    imports: [TuiAddonDocModule, RouterModule.forChild(generateRoutes(ShadowsComponent))],
    declarations: [ShadowsComponent],
    exports: [ShadowsComponent],
})
export class ShadowsModule {}
