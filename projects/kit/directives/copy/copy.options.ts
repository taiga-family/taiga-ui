import {tuiCreateOptions, type TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

export interface TuiCopyOptions {
    readonly icon: TuiStringHandler<TuiSizeL | TuiSizeS> | string;
}

export const [TUI_COPY_OPTIONS, tuiCopyOptionsProvider] =
    tuiCreateOptions<TuiCopyOptions>({
        icon: '@tui.copy',
    });
