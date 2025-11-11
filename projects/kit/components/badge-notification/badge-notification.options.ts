import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiBadgeNotificationOptions {
    readonly size: TuiSizeL | TuiSizeXS;
}

export const TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS: TuiBadgeNotificationOptions = {
    size: 'm',
};

export const [TUI_BADGE_NOTIFICATION_OPTIONS, tuiBadgeNotificationOptionsProvider] =
    tuiCreateOptions(TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
