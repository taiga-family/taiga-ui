import {InjectionToken, ValueProvider} from '@angular/core';
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

export const TUI_RADIO_OPTIONS = new InjectionToken<TuiRadioOptions>(
    `[TUI_RADIO_OPTIONS]: Default parameters for radio component`,
    {
        factory: () => TUI_RADIO_DEFAULT_OPTIONS,
    },
);

export const tuiRadioOptionsProvider: (
    options: Partial<TuiRadioOptions>,
) => ValueProvider = (options: Partial<TuiRadioOptions>) => ({
    provide: TUI_RADIO_OPTIONS,
    useValue: {...TUI_RADIO_DEFAULT_OPTIONS, ...options},
});
