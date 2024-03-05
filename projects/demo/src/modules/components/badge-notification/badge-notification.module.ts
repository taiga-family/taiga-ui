import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiExamplePipe} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiBadgeNotificationComponent} from '@taiga-ui/kit';

import {ExampleTuiBadgeNotificationComponent} from './badge-notification.component';
import {TuiBadgeNotificationExample1} from './examples/1';
import {TuiBadgeNotificationExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiBadgeNotificationComponent,
        TuiNotificationModule,
        TuiPlatformModule,
        tuiGetDocModules(ExampleTuiBadgeNotificationComponent),
        TuiExamplePipe,
    ],
    declarations: [
        ExampleTuiBadgeNotificationComponent,
        TuiBadgeNotificationExample1,
        TuiBadgeNotificationExample2,
    ],
    exports: [ExampleTuiBadgeNotificationComponent],
})
export class ExampleTuiBadgeNotificationModule {}
