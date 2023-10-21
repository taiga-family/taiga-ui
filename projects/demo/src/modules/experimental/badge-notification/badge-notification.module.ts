import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiBadgeNotificationModule} from '@taiga-ui/experimental';

import {ExampleTuiBadgeNotificationComponent} from './badge-notification.component';
import {TuiBadgeNotificationExample1} from './examples/1';
import {TuiBadgeNotificationExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiBadgeNotificationModule,
        TuiNotificationModule,
        TuiPlatformModule,
        tuiGetDocModules(ExampleTuiBadgeNotificationComponent),
    ],
    declarations: [
        ExampleTuiBadgeNotificationComponent,
        TuiBadgeNotificationExample1,
        TuiBadgeNotificationExample2,
    ],
    exports: [ExampleTuiBadgeNotificationComponent],
})
export class ExampleTuiBadgeNotificationModule {}
