import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

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

export const [TUI_REORDER_OPTIONS, tuiReorderOptionsProvider] = tuiCreateOptions(
    TUI_REORDER_DEFAULT_OPTIONS,
);
