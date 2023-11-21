import {Provider} from '@angular/core';
import {tuiCreateToken, TuiPlatform, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiButtonCloseOptions {
    readonly size: 's' | 'xs';
    readonly appearance: string | 'close' | 'glass';
    readonly icons: Record<TuiPlatform, string> | string;
}

export const TUI_BUTTON_CLOSE_DEFAULT_OPTIONS: TuiButtonCloseOptions = {
    size: `s`,
    appearance: `close`,
    icons: `tuiIconClose`,
};

export const TUI_BUTTON_CLOSE_OPTIONS = tuiCreateToken(TUI_BUTTON_CLOSE_DEFAULT_OPTIONS);

export function tuiButtonCloseOptionsProvider(
    options: Partial<TuiButtonCloseOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_BUTTON_CLOSE_OPTIONS,
        options,
        TUI_BUTTON_CLOSE_DEFAULT_OPTIONS,
    );
}
