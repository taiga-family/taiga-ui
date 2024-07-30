import type {Provider} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiNotificationOptions extends TuiAppearanceOptions {
    readonly icon: TuiStringHandler<string> | string;
    readonly size: TuiSizeL | TuiSizeS;
}

const ICONS: Record<string, string> = {
    info: '@tui.info',
    success: '@tui.circle-check',
    error: '@tui.circle-x',
    warning: '@tui.circle-alert',
    neutral: '@tui.info',
};

/** Default values for the notification options. */
export const TUI_NOTIFICATION_DEFAULT_OPTIONS: TuiNotificationOptions = {
    appearance: 'info',
    icon: (appearance) => ICONS[appearance],
    size: 'l',
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
