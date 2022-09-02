import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';
import type {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiButtonOptions {
    readonly size: TuiSizeXS | TuiSizeXL;
    readonly appearance:
        | keyof Record<TuiAppearance, string>
        | TuiAppearance
        | string
        | null;
    readonly shape: 'square' | 'rounded' | null;
}

export const TUI_BUTTON_DEFAULT_OPTIONS: TuiButtonOptions = {
    size: `l`,
    shape: null,
    appearance: TuiAppearance.Primary,
};

export const TUI_BUTTON_OPTIONS = new InjectionToken<TuiButtonOptions>(
    `Default parameters for button component`,
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
