import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiNotificationDefaultOptions
    extends Omit<TuiAlertOptions<unknown>, 'data'> {
    size: TuiSizeL | TuiSizeS;
}

/** @deprecated remove export */
export const STATUS_ICON = {
    info: `tuiIconInfo`,
    success: `tuiIconCheckCircle`,
    error: `tuiIconXCircle`,
    warning: `tuiIconAlertCircle`,
} as const;

/** Default values for the notification options. */
export const TUI_NOTIFICATION_DEFAULT_OPTIONS: TuiNotificationDefaultOptions = {
    autoClose: 3000,
    label: ``,
    status: `info`,
    hasCloseButton: true,
    icon: ({$implicit}) => STATUS_ICON[$implicit],
    size: `m`,
    hasIcon: true,
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
