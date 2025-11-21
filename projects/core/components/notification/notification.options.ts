import {InjectionToken} from '@angular/core';
import {type TuiNumberHandler, type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiPositionOptions} from '@taiga-ui/core/portals/alert';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiNotificationOptions<I = undefined>
    extends TuiAppearanceOptions,
        TuiPositionOptions {
    readonly icon: TuiStringHandler<string> | string;
    readonly size: TuiSizeL | TuiSizeS;
    readonly autoClose: TuiNumberHandler<string> | number;
    readonly closable: boolean;
    readonly label: string;
    readonly data: I;
}

const ICONS: Record<string, string> = {
    info: '@tui.info',
    positive: '@tui.circle-check',
    negative: '@tui.circle-x',
    warning: '@tui.circle-alert',
    neutral: '@tui.info',
};

export const TUI_NOTIFICATION_DEFAULT_OPTIONS: TuiNotificationOptions = {
    appearance: 'info',
    icon: (appearance) => ICONS[appearance] ?? '',
    size: 'l',
    data: undefined,
    autoClose: 3000,
    label: '',
    closable: true,
    block: 'start',
    inline: 'end',
};

export const [TUI_NOTIFICATION_OPTIONS, tuiNotificationOptionsProvider] =
    tuiCreateOptions(TUI_NOTIFICATION_DEFAULT_OPTIONS);

export const TUI_NOTIFICATION_CONCURRENCY = new InjectionToken(
    ngDevMode ? 'TUI_NOTIFICATION_CONCURRENCY' : '',
    {factory: () => 5},
);
