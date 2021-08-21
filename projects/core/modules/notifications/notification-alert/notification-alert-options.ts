import {InjectionToken} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface NotificationAlertOptions {
    readonly autoClose: boolean | number;
    readonly label: PolymorpheusContent<TuiContextWithImplicit<TuiNotification>>;
}

/** Default values for the toggle options. */
export const TUI_NOTIFICATION_ALERT_DEFAULT_OPTIONS: NotificationAlertOptions = {
    autoClose: 3000,
    label: '',
};

export const TUI_NOTIFICATION_ALERT_OPTIONS = new InjectionToken<NotificationAlertOptions>(
    'Default parameters for notification alert component',
    {
        factory: () => TUI_NOTIFICATION_ALERT_DEFAULT_OPTIONS,
    },
);
