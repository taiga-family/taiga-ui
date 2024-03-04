import {type Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {type TuiSizeXL, type TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiButtonOptions {
    readonly appearance: TuiAppearance | string | null;
    readonly shape: 'rounded' | 'square' | null;
    readonly size: TuiSizeXL | TuiSizeXS;
}

export const TUI_BUTTON_DEFAULT_OPTIONS: TuiButtonOptions = {
    size: 'l',
    shape: null,
    appearance: TuiAppearance.Primary,
};

/**
 * Default parameters for button component
 */
export const TUI_BUTTON_OPTIONS = tuiCreateToken(TUI_BUTTON_DEFAULT_OPTIONS);

export function tuiButtonOptionsProvider(options: Partial<TuiButtonOptions>): Provider {
    return tuiProvideOptions(TUI_BUTTON_OPTIONS, options, TUI_BUTTON_DEFAULT_OPTIONS);
}
