import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';
import type {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiButtonOptions {
    readonly size: TuiSizeXL | TuiSizeXS;
    readonly appearance:
        | TuiAppearance
        | string
        | keyof Record<TuiAppearance, string>
        | null;
    readonly shape: 'rounded' | 'square' | null;
}

export const TUI_BUTTON_DEFAULT_OPTIONS: TuiButtonOptions = {
    size: `l`,
    shape: null,
    appearance: TuiAppearance.Primary,
};

/**
 * Default parameters for button component
 */
export const TUI_BUTTON_OPTIONS = new InjectionToken<TuiButtonOptions>(
    `[TUI_BUTTON_OPTIONS]`,
    {
        factory: () => TUI_BUTTON_DEFAULT_OPTIONS,
    },
);

export const tuiButtonOptionsProvider: (
    options: Partial<TuiButtonOptions>,
) => ValueProvider = (options: Partial<TuiButtonOptions>) => ({
    provide: TUI_BUTTON_OPTIONS,
    useValue: {...TUI_BUTTON_DEFAULT_OPTIONS, ...options},
});
