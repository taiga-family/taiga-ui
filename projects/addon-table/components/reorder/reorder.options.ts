import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiReorderOptions {
    readonly icons: {
        readonly drag: string;
        readonly hide: string;
        readonly show: string;
    };
}

export const TUI_REORDER_DEFAULT_OPTIONS: TuiReorderOptions = {
    icons: {
        hide: '@tui.eye',
        show: '@tui.eye-off',
        drag: '@tui.grip-vertical',
    },
};

export const TUI_REORDER_OPTIONS = tuiCreateToken(TUI_REORDER_DEFAULT_OPTIONS);

export function tuiReorderOptionsProvider(options: Partial<TuiReorderOptions>): Provider {
    return tuiProvideOptions(TUI_REORDER_OPTIONS, options, TUI_REORDER_DEFAULT_OPTIONS);
}
