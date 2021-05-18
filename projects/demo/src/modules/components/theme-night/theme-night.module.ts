import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {ExampleTuiThemeNightComponent} from './theme-night.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiThemeNightComponent)),
    ],
    declarations: [ExampleTuiThemeNightComponent],
    exports: [ExampleTuiThemeNightComponent],
})
export class ExampleTuiThemeNightModule {}
