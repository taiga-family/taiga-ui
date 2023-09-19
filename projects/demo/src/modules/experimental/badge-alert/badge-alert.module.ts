import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiBadgeAlertModule} from '@taiga-ui/experimental';

import {ExampleTuiBadgeAlertComponent} from './badge-alert.component';
import {TuiBadgeAlertExample1} from './examples/1';
import {TuiBadgeAlertExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiBadgeAlertModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBadgeAlertComponent)),
        TuiPlatformModule,
    ],
    declarations: [
        ExampleTuiBadgeAlertComponent,
        TuiBadgeAlertExample1,
        TuiBadgeAlertExample2,
    ],
    exports: [ExampleTuiBadgeAlertComponent],
})
export class ExampleTuiBadgeAlertModule {}
