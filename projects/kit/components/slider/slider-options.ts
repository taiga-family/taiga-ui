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

/**
 * Default parameters for Slider component
 */
export const TUI_SLIDER_OPTIONS = new InjectionToken<TuiSliderOptions>(
    `[TUI_SLIDER_OPTIONS]`,
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
