import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTabBarModule} from '@taiga-ui/addon-mobile';
import {TuiPortalModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiCheckboxLabeledModule} from '@taiga-ui/kit';

import {TuiTabBarExample1} from './examples/1';
import {TuiTabBarExample2} from './examples/2';
import {TuiTabBarExample3} from './examples/3';
import {ExampleTuiTabBarComponent} from './tab-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiNotificationModule,
        TuiCheckboxLabeledModule,
        TuiTabBarModule,
        TuiPortalModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTabBarComponent)),
    ],
    declarations: [
        ExampleTuiTabBarComponent,
        TuiTabBarExample1,
        TuiTabBarExample2,
        TuiTabBarExample3,
    ],
    exports: [ExampleTuiTabBarComponent],
})
export class ExampleTuiTabBarModule {}
