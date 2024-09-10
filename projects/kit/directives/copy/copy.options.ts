import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiCopyOptions {
    readonly icon: TuiStringHandler<TuiSizeL | TuiSizeS> | string;
}

export const [TUI_COPY_OPTIONS, tuiCopyOptionsProvider] =
    tuiCreateOptions<TuiCopyOptions>({
        icon: '@tui.copy',
    });
