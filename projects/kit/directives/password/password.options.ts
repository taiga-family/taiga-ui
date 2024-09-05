import {tuiCreateOptions, type TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

export interface TuiPasswordOptions {
    readonly icons: Readonly<{
        hide: TuiStringHandler<TuiSizeL | TuiSizeS> | string;
        show: TuiStringHandler<TuiSizeL | TuiSizeS> | string;
    }>;
}

export const [TUI_PASSWORD_OPTIONS, tuiPasswordOptionsProvider] =
    tuiCreateOptions<TuiPasswordOptions>({
        icons: {
            hide: '@tui.eye-off',
            show: '@tui.eye',
        },
    });
