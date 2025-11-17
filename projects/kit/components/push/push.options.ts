import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiPositionOptions} from '@taiga-ui/core/directives/alert';

export interface TuiPushOptions extends TuiPositionOptions {
    readonly buttons: readonly string[];
    readonly heading: string;
    readonly icon: string;
    readonly iconColor: string;
    readonly image: string;
    readonly timestamp: number | string;
    readonly type: string;
}

export const TUI_PUSH_CONCURRENCY = tuiCreateToken<number>(5);
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
