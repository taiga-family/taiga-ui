import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';

import {TuiNotificationAlertModule} from './notification-alert/notification-alert.module';
import {TuiNotificationsHostComponent} from './notifications-host/notifications-host.component';

@NgModule({
    imports: [CommonModule, TuiNotificationAlertModule, TuiLetModule],
    declarations: [TuiNotificationsHostComponent],
    exports: [TuiNotificationsHostComponent],
    entryComponents: [TuiNotificationsHostComponent],
    providers: [
        {
            provide: TuiNotificationsHostComponent,
            useValue: TuiNotificationsHostComponent,
        },
    ],
})
export class TuiNotificationsModule {}
