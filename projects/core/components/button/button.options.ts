import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiButtonOptions {
    readonly size: TuiSizeXL | TuiSizeXS;
    readonly appearance:
        | TuiAppearance
        | string
        | keyof Record<TuiAppearance, string>
        | null;
    readonly shape: 'rounded' | 'square' | null;
}

export const TUI_BUTTON_DEFAULT_OPTIONS: TuiButtonOptions = {
    size: `l`,
    shape: null,
    appearance: TuiAppearance.Primary,
};

/**
 * Default parameters for button component
 */
export const TUI_BUTTON_OPTIONS = tuiCreateOptions(TUI_BUTTON_DEFAULT_OPTIONS);

export function tuiButtonOptionsProvider(options: Partial<TuiButtonOptions>): Provider {
    return tuiProvideOptions(TUI_BUTTON_OPTIONS, options, TUI_BUTTON_DEFAULT_OPTIONS);
}
