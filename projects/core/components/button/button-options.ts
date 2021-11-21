import {InjectionToken} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core/types';

export interface ButtonOptions {
    readonly size: TuiSizeXS | TuiSizeXL;
    readonly appearance: TuiAppearance | string;
    readonly shape: 'square' | 'rounded' | null;
}

export const TUI_BUTTON_DEFAULT_OPTIONS: ButtonOptions = {
    size: 'l',
    shape: null,
    appearance: TuiAppearance.Primary,
};

export const TUI_BUTTON_OPTIONS = new InjectionToken<ButtonOptions>(
    'Default parameters for button component',
    {
        factory: () => TUI_BUTTON_DEFAULT_OPTIONS,
    },
);
