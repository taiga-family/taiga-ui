import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

export interface TuiSliderOptions {
    readonly size: TuiSizeS;
    readonly trackColor: string;
    readonly thumbColor: string;
    readonly thumbHoverColor: string;
    readonly thumbActiveColor: string;
}

export const TUI_SLIDER_DEFAULT_OPTIONS: TuiSliderOptions = {
    size: `m`,
    trackColor: `var(--tui-base-03)`,
    thumbColor: `currentColor`,
    thumbHoverColor: `var(--tui-primary-hover)`,
    thumbActiveColor: `var(--tui-primary-active)`,
};

/**
 * Default parameters for Slider component
 */
export const TUI_SLIDER_OPTIONS = tuiCreateToken(TUI_SLIDER_DEFAULT_OPTIONS);

export function tuiSliderOptionsProvider(options: Partial<TuiSliderOptions>): Provider {
    return tuiProvideOptions(TUI_SLIDER_OPTIONS, options, TUI_SLIDER_DEFAULT_OPTIONS);
}
