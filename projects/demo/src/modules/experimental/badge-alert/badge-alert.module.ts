import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {
    TuiLabelModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiBadgeAlertModule} from '@taiga-ui/experimental';

import {ExampleTuiBadgeAlertComponent} from './badge-alert.component';
import {TuiBadgeAlertExample1} from './examples/1';
import {TuiBadgeAlertExample2} from './examples/2';

@NgModule({
    imports: [
        TuiBadgeAlertModule,
        FormsModule,
        CommonModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBadgeAlertComponent)),
        TuiTextfieldControllerModule,
        TuiLabelModule,
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
