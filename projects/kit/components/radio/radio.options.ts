import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import {TuiAppearance} from '@taiga-ui/core';

export interface TuiRadioOptions {
    readonly appearances: Readonly<{
        checked: string;
        unchecked: string;
    }>;
    readonly size: TuiSizeL;
}

/** Default values for the checkbox options. */
export const TUI_RADIO_DEFAULT_OPTIONS: TuiRadioOptions = {
    size: 'm',
    appearances: {
        unchecked: TuiAppearance.Outline,
        checked: TuiAppearance.Primary,
    },
};

/**
 * Default parameters for Radio component
 */
export const TUI_RADIO_OPTIONS = tuiCreateToken(TUI_RADIO_DEFAULT_OPTIONS);

export function tuiRadioOptionsProvider(options: Partial<TuiRadioOptions>): Provider {
    return tuiProvideOptions(TUI_RADIO_OPTIONS, options, TUI_RADIO_DEFAULT_OPTIONS);
}
