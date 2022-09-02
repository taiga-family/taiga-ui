import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiSizeS} from '@taiga-ui/core';

export interface TuiSliderOptions {
    readonly size: TuiSizeS;
    readonly trackColor: string;
}

export const TUI_SLIDER_DEFAULT_OPTIONS: TuiSliderOptions = {
    size: `m`,
    trackColor: `var(--tui-base-03)`,
};

export const TUI_SLIDER_OPTIONS = new InjectionToken<TuiSliderOptions>(
    `Default parameters for Slider component`,
    {factory: () => TUI_SLIDER_DEFAULT_OPTIONS},
);

export function tuiSliderOptionsProvider(
    options: Partial<TuiSliderOptions>,
): ValueProvider {
    return {
        provide: TUI_SLIDER_OPTIONS,
        useValue: {...TUI_SLIDER_DEFAULT_OPTIONS, ...options},
    };
}
