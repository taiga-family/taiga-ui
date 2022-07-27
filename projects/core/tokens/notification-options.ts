import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiNotification} from '@taiga-ui/core/enums';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';

export interface TuiNotificationDefaultOptions
    extends Omit<TuiAlertOptions<unknown>, 'data'> {
    readonly defaultAutoCloseTime: number;
}

/**
 * @deprecated: remove in v3.0, use TuiNotificationDefaultOptions
 */
export type NotificationTokenOptions = TuiNotificationDefaultOptions;

/** Default values for the notification options. */
export const TUI_NOTIFICATION_DEFAULT_OPTIONS: TuiNotificationDefaultOptions = {
    autoClose: true,
    label: ``,
    status: TuiNotification.Info,
    hasIcon: true,
    hasCloseButton: true,
    defaultAutoCloseTime: 3000,
};

export const TUI_NOTIFICATION_OPTIONS = new InjectionToken<TuiNotificationDefaultOptions>(
    `Default parameters for notification alert component`,
    {
        factory: () => TUI_NOTIFICATION_DEFAULT_OPTIONS,
    },
);

export function tuiNotificationOptionsProvider(
    options: Partial<TuiNotificationDefaultOptions>,
): ValueProvider {
    return {
        provide: TUI_NOTIFICATION_OPTIONS,
        useValue: {...TUI_NOTIFICATION_DEFAULT_OPTIONS, ...options},
    };
}
