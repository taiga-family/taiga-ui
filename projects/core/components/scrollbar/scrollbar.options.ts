import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiScrollbarOptions {
    mode: 'always' | 'hover';
}

export const TUI_DEFAULT_SCROLLBAR_OPTIONS: TuiScrollbarOptions = {
    mode: 'always',
};

export const TUI_SCROLLBAR_OPTIONS = tuiCreateToken(TUI_DEFAULT_SCROLLBAR_OPTIONS);

export function tuiScrollbarOptionsProvider(
    options: Partial<TuiScrollbarOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_SCROLLBAR_OPTIONS,
        options,
        TUI_DEFAULT_SCROLLBAR_OPTIONS,
    );
}
