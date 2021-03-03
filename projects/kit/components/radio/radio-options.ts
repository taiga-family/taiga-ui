import {InjectionToken} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TuiSizeL} from '@taiga-ui/core/types';

export interface RadioOptions {
    readonly size: TuiSizeL;
    readonly appearances: Readonly<{
        unchecked: string;
        checked: string;
    }>;
}

/** Default values for the checkbox options. */
export const TUI_RADIO_DEFAULT_OPTIONS: RadioOptions = {
    size: 'm',
    appearances: {
        unchecked: TuiAppearance.Outline,
        checked: TuiAppearance.Primary,
    },
};

export const TUI_RADIO_OPTIONS = new InjectionToken<RadioOptions>(
    'Default parameters for radio component',
    {
        factory: () => TUI_RADIO_DEFAULT_OPTIONS,
    },
);
