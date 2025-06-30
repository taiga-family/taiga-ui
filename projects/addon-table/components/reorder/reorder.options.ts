import type {Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {InjectionToken} from '@angular/core';

export interface TuiReorderOptions {
    readonly icons: {
        readonly drag: string;
        readonly hide: string;
        readonly show: string;
    };
}

export const TUI_REORDER_DEFAULT_OPTIONS: TuiReorderOptions = {
    icons: {
        hide: '@tui.eye-off',
        show: '@tui.eye',
        drag: '@tui.grip-vertical',
    },
};

export const TUI_REORDER_OPTIONS = new InjectionToken('TUI_REORDER_OPTIONS', {
    factory: () => TUI_REORDER_DEFAULT_OPTIONS,
});

export function tuiReorderOptionsProvider(options: Partial<TuiReorderOptions>): Provider {
    return tuiProvideOptions(TUI_REORDER_OPTIONS, options, TUI_REORDER_DEFAULT_OPTIONS);
}
