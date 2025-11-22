import {InjectionToken} from '@angular/core';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiPositionOptions} from '@taiga-ui/core/portals/alert';

export interface TuiPushOptions extends TuiPositionOptions {
    readonly buttons: readonly string[];
    readonly heading: string;
    readonly icon: string;
    readonly iconColor: string;
    readonly image: string;
    readonly timestamp: number | string;
    readonly type: string;
}

export const [TUI_PUSH_OPTIONS, tuiPushOptionsProvider] =
    tuiCreateOptions<TuiPushOptions>({
        heading: '',
        type: '',
        timestamp: '',
        image: '',
        icon: '',
        iconColor: '',
        buttons: [],
        block: 'end',
        inline: 'end',
    });

export const TUI_PUSH_CONCURRENCY = new InjectionToken(
    ngDevMode ? 'TUI_PUSH_CONCURRENCY' : '',
    {factory: () => 5},
);
