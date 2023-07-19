import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {STATUS_ICONS} from '@taiga-ui/core/constants';
import {TuiNotification} from '@taiga-ui/core/enums';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiNotificationDefaultOptions
    extends Omit<TuiAlertOptions<unknown>, 'data'> {
    /** @deprecated Use {@link TuiNotificationDefaultOptions.icon} instead */
    readonly hasIcon: boolean;
    readonly defaultAutoCloseTime: number;
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiNotification>>;
}

/** Default values for the notification options. */
export const TUI_NOTIFICATION_DEFAULT_OPTIONS: TuiNotificationDefaultOptions = {
    autoClose: true,
    label: ``,
    status: TuiNotification.Info,
    hasIcon: true,
    hasCloseButton: true,
    defaultAutoCloseTime: 3000,
    icon: ({$implicit}) => STATUS_ICONS[$implicit],
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
