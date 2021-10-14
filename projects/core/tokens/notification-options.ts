import {InjectionToken} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {TuiNotificationAutoClose} from '@taiga-ui/core/interfaces';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface NotificationTokenOptions {
    readonly autoClose: TuiNotificationAutoClose;
    readonly label: PolymorpheusContent<TuiContextWithImplicit<TuiNotification>>;
    readonly status: TuiNotification;
    readonly hasIcon: boolean;
    readonly hasCloseButton: boolean;
}

/** Default values for the notification options. */
export const TUI_NOTIFICATION_DEFAULT_OPTIONS: NotificationTokenOptions = {
    autoClose: true,
    label: '',
    status: TuiNotification.Info,
    hasIcon: true,
    hasCloseButton: true,
};

export const TUI_NOTIFICATION_OPTIONS = new InjectionToken<NotificationTokenOptions>(
    'Default parameters for notification alert component',
    {
        factory: () => TUI_NOTIFICATION_DEFAULT_OPTIONS,
    },
);
