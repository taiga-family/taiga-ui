import {type Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {type TuiSizeS} from '@taiga-ui/core';

export interface TuiSliderOptions {
    readonly size: TuiSizeS;
    readonly trackColor: string;
}

export const TUI_SLIDER_DEFAULT_OPTIONS: TuiSliderOptions = {
    size: 'm',
    trackColor: 'var(--tui-base-03)',
};

/**
 * Default parameters for Slider component
 */
export const TUI_SLIDER_OPTIONS = tuiCreateToken(TUI_SLIDER_DEFAULT_OPTIONS);

export function tuiSliderOptionsProvider(options: Partial<TuiSliderOptions>): Provider {
    return tuiProvideOptions(TUI_SLIDER_OPTIONS, options, TUI_SLIDER_DEFAULT_OPTIONS);
}
