import {InjectionToken} from '@angular/core';
import {TuiHintMode} from '@taiga-ui/core/enums';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface InputPasswordOptions {
    readonly hintMode: Readonly<TuiHintMode | null>;
    readonly icons: Readonly<{
        hide: (size: TuiSizeS | TuiSizeL) => string;
        show: (size: TuiSizeS | TuiSizeL) => string;
    }>;
}

/** Default values for the input password options. */
export const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS: InputPasswordOptions = {
    hintMode: null,
    icons: {
        hide: (size: TuiSizeS | TuiSizeL): string =>
            size === 's' ? 'tuiIconEyeClosed' : 'tuiIconHideLarge',
        show: (size: TuiSizeS | TuiSizeL): string =>
            size === 's' ? 'tuiIconEyeOpen' : 'tuiIconShowLarge',
    },
};

export const TUI_INPUT_PASSWORD_OPTIONS = new InjectionToken<InputPasswordOptions>(
    'Default parameters for input password component',
    {
        factory: () => TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
    },
);
