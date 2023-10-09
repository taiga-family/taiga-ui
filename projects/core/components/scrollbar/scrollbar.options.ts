import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiScrollbarOptions {
    readonly native: boolean;
}

export const TUI_SCROLLBAR_DEFAULT_OPTIONS: TuiScrollbarOptions = {
    native: false,
};

export const TUI_SCROLLBAR_OPTIONS = tuiCreateToken(TUI_SCROLLBAR_DEFAULT_OPTIONS);

export function tuiScrollbarOptionsProvider(
    options: Partial<TuiScrollbarOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_SCROLLBAR_OPTIONS,
        options,
        TUI_SCROLLBAR_DEFAULT_OPTIONS,
    );
}
