import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {AbstractTuiNotificationsService} from './abstract.notifications';
import {TuiNotificationAlertModule} from './notification-alert/notification-alert.module';
import {TuiNotificationsService} from './notifications.service';
import {TuiNotificationsHostComponent} from './notifications-host/notifications-host.component';

// TODO: remove in ivy compilation
export const NOTIFICATIONS_HOST = TuiNotificationsHostComponent;

@NgModule({
    imports: [CommonModule, TuiNotificationAlertModule, TuiLetModule, PolymorpheusModule],
    declarations: [TuiNotificationsHostComponent],
    exports: [TuiNotificationsHostComponent],
    entryComponents: [TuiNotificationsHostComponent],
    providers: [
        {
            provide: TuiNotificationsHostComponent,
            useValue: NOTIFICATIONS_HOST,
        },
        {
            provide: AbstractTuiNotificationsService,
            useExisting: TuiNotificationsService,
        },
    ],
})
export class TuiNotificationsModule {}
