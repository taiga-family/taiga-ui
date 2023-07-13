import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiAppearance, TuiSizeL} from '@taiga-ui/core';

export interface TuiRadioOptions {
    readonly size: TuiSizeL;
    readonly appearances: Readonly<{
        unchecked: string;
        checked: string;
    }>;
}

/** Default values for the checkbox options. */
export const TUI_RADIO_DEFAULT_OPTIONS: TuiRadioOptions = {
    size: `m`,
    appearances: {
        unchecked: TuiAppearance.Outline,
        checked: TuiAppearance.Primary,
    },
};

/**
 * Default parameters for Radio component
 */
export const TUI_RADIO_OPTIONS = tuiCreateOptions(TUI_RADIO_DEFAULT_OPTIONS);

export function tuiRadioOptionsProvider(options: Partial<TuiRadioOptions>): Provider {
    return tuiProvideOptions(TUI_RADIO_OPTIONS, options, TUI_RADIO_DEFAULT_OPTIONS);
}
