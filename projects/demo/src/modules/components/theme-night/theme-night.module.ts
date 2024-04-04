import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

import {ExampleTuiThemeNightComponent} from './theme-night.component';

@NgModule({
    imports: [
        TuiLinkDirective,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiThemeNightComponent)),
    ],
    declarations: [ExampleTuiThemeNightComponent],
    exports: [ExampleTuiThemeNightComponent],
})
export class ExampleTuiThemeNightModule {}
