import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';

import {TuiNotificationAlertModule} from './notification-alert/notification-alert.module';
import {TuiNotificationsService} from './notifications.service';
import {TUI_NOTIFICATIONS_GROUP} from './notifications-group-token';
import {TuiNotificationsHostComponent} from './notifications-host/notifications-host.component';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiNotificationGroupComponent} from './notification-group/notification-group.component';
import {TuiNotificationItemComponent} from './notification-item/notification-item.component';

// TODO: remove in ivy compilation
export const NOTIFICATIONS_HOST = TuiNotificationsHostComponent;

@NgModule({
    imports: [CommonModule, TuiNotificationAlertModule, TuiLetModule, PolymorpheusModule],
    declarations: [
        TuiNotificationsHostComponent,
        TuiNotificationGroupComponent,
        TuiNotificationItemComponent,
    ],
    exports: [
        TuiNotificationsHostComponent,
        TuiNotificationGroupComponent,
        TuiNotificationItemComponent,
    ],
    entryComponents: [TuiNotificationsHostComponent],
    providers: [
        {
            provide: TuiNotificationsHostComponent,
            useValue: NOTIFICATIONS_HOST,
        },
        TuiNotificationsService,
        {
            provide: TUI_NOTIFICATIONS_GROUP,
            useExisting: TuiNotificationsService,
            multi: true,
        },
    ],
})
export class TuiNotificationsModule {
    static forFeature<T>(service: Type<T>): ModuleWithProviders<TuiNotificationsModule> {
        return {
            ngModule: TuiNotificationsModule,
            providers: [
                service,
                {
                    provide: TUI_NOTIFICATIONS_GROUP,
                    useExisting: service,
                    multi: true,
                },
            ],
        };
    }
}
