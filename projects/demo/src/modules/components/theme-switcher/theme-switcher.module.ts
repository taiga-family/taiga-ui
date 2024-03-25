import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiSwitchComponent} from '@taiga-ui/kit';

import {TuiThemeSwitcherExample1} from './examples/1';
import {ElderlyComponent} from './examples/elderly/elderly.component';
import {ExampleTuiThemeSwitcherComponent} from './theme-switcher.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSwitchComponent,
        TuiNotificationModule,
        TuiAddonDocModule,
        TuiLabelDirective,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiThemeSwitcherComponent)),
    ],
    declarations: [
        ExampleTuiThemeSwitcherComponent,
        TuiThemeSwitcherExample1,
        ElderlyComponent,
    ],
    exports: [ExampleTuiThemeSwitcherComponent],
})
export class ExampleTuiThemeSwitcherModule {}
