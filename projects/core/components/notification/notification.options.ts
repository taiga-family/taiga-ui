import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export type TuiNotificationStatus = 'error' | 'info' | 'neutral' | 'success' | 'warning';

export interface TuiNotificationOptions {
    readonly status: TuiNotificationStatus;
    readonly icon: PolymorpheusContent<TuiContext<TuiNotificationStatus>>;
    readonly size: TuiSizeL | TuiSizeS;
}

const STATUS_ICON = {
    info: '@tui.info',
    success: '@tui.circle-check',
    error: '@tui.circle-x',
    warning: '@tui.circle-alert',
    neutral: '@tui.info',
} as const;

/** Default values for the notification options. */
export const TUI_NOTIFICATION_DEFAULT_OPTIONS: TuiNotificationOptions = {
    status: 'info',
    icon: ({$implicit}) => STATUS_ICON[$implicit],
    size: 'm',
};

/**
 * Default parameters for notification alert component
 */
export const TUI_NOTIFICATION_OPTIONS = tuiCreateToken(TUI_NOTIFICATION_DEFAULT_OPTIONS);

export function tuiNotificationOptionsProvider(
    options: Partial<TuiNotificationOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_NOTIFICATION_OPTIONS,
        options,
        TUI_NOTIFICATION_DEFAULT_OPTIONS,
    );
}
