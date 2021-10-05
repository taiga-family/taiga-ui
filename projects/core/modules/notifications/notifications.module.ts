import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiNotificationAlertModule} from './notification-alert/notification-alert.module';
import {TuiNotificationsHostComponent} from './notifications-host/notifications-host.component';

// TODO: remove in ivy compilation
export const NOTIFICATIONS_HOST = TuiNotificationsHostComponent;

@NgModule({
    imports: [CommonModule, TuiNotificationAlertModule, TuiLetModule],
    declarations: [TuiNotificationsHostComponent],
    exports: [TuiNotificationsHostComponent],
    entryComponents: [TuiNotificationsHostComponent],
    providers: [
        {
            provide: TuiNotificationsHostComponent,
            useValue: NOTIFICATIONS_HOST,
        },
    ],
})
export class TuiNotificationsModule {}
