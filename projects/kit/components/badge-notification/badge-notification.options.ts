import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiBadgeNotificationOptions {
    readonly size: TuiSizeL | TuiSizeXS;
}

export const TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS: TuiBadgeNotificationOptions = {
    size: 'm',
};

export const TUI_BADGE_NOTIFICATION_OPTIONS = tuiCreateToken(
    TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS,
);

export function tuiBadgeNotificationOptionsProvider(
    options: Partial<TuiBadgeNotificationOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_BADGE_NOTIFICATION_OPTIONS,
        options,
        TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS,
    );
}
