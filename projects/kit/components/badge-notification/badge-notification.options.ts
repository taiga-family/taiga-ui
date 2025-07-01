import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiBadgeNotificationOptions {
    readonly size: TuiSizeL | TuiSizeXS;
}

export const TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS: TuiBadgeNotificationOptions = {
    size: 'm',
};

export const TUI_BADGE_NOTIFICATION_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_BADGE_NOTIFICATION_OPTIONS' : '',
    {
        factory: () => TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS,
    },
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
