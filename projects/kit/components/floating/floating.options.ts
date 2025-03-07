import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiFloatingOptions {
    readonly substrate: boolean;
}

export const TUI_FLOATING_DEFAULT_OPTIONS: TuiFloatingOptions = {
    substrate: false,
};

export const TUI_FLOATING_OPTIONS = tuiCreateToken(TUI_FLOATING_DEFAULT_OPTIONS);

export function tuiFloatingOptionsProvider(
    options: Partial<TuiFloatingOptions>,
): Provider {
    return tuiProvideOptions(TUI_FLOATING_OPTIONS, options, TUI_FLOATING_DEFAULT_OPTIONS);
}
