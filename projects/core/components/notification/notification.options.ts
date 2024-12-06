import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiNotificationOptions extends TuiAppearanceOptions {
    readonly icon: TuiStringHandler<string> | string;
    readonly size: TuiSizeL | TuiSizeS;
}

const ICONS: Record<string, string> = {
    info: '@tui.info',
    positive: '@tui.circle-check',
    negative: '@tui.circle-x',
    warning: '@tui.circle-alert',
    neutral: '@tui.info',
    /* TODO @deprecated remove in v5 */
    success: '@tui.circle-check',
    /* TODO @deprecated remove in v5 */
    error: '@tui.circle-x',
};

/** Default values for the notification options. */
export const TUI_NOTIFICATION_DEFAULT_OPTIONS: TuiNotificationOptions = {
    appearance: 'info',
    icon: (appearance) => ICONS[appearance] ?? '',
    size: 'l',
};

/**
 * Default parameters for notification alert component
 */
export const [TUI_NOTIFICATION_OPTIONS, tuiNotificationOptionsProvider] =
    tuiCreateOptions(TUI_NOTIFICATION_DEFAULT_OPTIONS);
