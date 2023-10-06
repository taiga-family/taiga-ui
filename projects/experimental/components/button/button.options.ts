import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';

export interface TuiButtonOptions {
    readonly appearance: string;
    readonly size: TuiSizeXL | TuiSizeXS;
}

export const TUI_BUTTON_DEFAULT_OPTIONS: TuiButtonOptions = {
    size: `l`,
    appearance: `primary`,
};

export const TUI_BUTTON_OPTIONS = tuiCreateToken(TUI_BUTTON_DEFAULT_OPTIONS);

export function tuiButtonOptionsProvider(options: Partial<TuiButtonOptions>): Provider {
    return tuiProvideOptions(TUI_BUTTON_OPTIONS, options, TUI_BUTTON_DEFAULT_OPTIONS);
}
