import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';

export interface TuiNotificationDefaultOptions
    extends Omit<TuiAlertOptions<unknown>, 'data'> {
    readonly defaultAutoCloseTime: number;
}

/** Default values for the notification options. */
export const TUI_NOTIFICATION_DEFAULT_OPTIONS: TuiNotificationDefaultOptions = {
    autoClose: true,
    label: ``,
    status: TuiNotification.Info,
    hasIcon: true,
    hasCloseButton: true,
    defaultAutoCloseTime: 3000,
};

/**
 * Default parameters for notification alert component
 */
export const TUI_NOTIFICATION_OPTIONS = tuiCreateOptions(
    TUI_NOTIFICATION_DEFAULT_OPTIONS,
);

export function tuiNotificationOptionsProvider(
    options: Partial<TuiNotificationDefaultOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_NOTIFICATION_OPTIONS,
        options,
        TUI_NOTIFICATION_DEFAULT_OPTIONS,
    );
}
