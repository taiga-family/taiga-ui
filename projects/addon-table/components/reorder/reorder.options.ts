import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiReorderOptions {
    readonly icons: {
        readonly hide: string;
        readonly show: string;
        readonly drag: string;
    };
}

export const TUI_REORDER_DEFAULT_OPTIONS: TuiReorderOptions = {
    icons: {
        hide: `tuiIconEye`,
        show: `tuiIconEyeOff`,
        drag: `tuiIconDrag`,
    },
};

export const TUI_REORDER_OPTIONS = tuiCreateOptions(TUI_REORDER_DEFAULT_OPTIONS);

export function tuiReorderOptionsProvider(options: Partial<TuiReorderOptions>): Provider {
    return tuiProvideOptions(TUI_REORDER_OPTIONS, options, TUI_REORDER_DEFAULT_OPTIONS);
}
