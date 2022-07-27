import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiButtonOptions {
    readonly size: TuiSizeXS | TuiSizeXL;
    readonly appearance:
        | keyof Record<TuiAppearance, string>
        | TuiAppearance
        | string
        | null; // TODO: 3.0 need remove `null`
    readonly shape: 'square' | 'rounded' | null; // TODO: 3.0 need remove `null`
}

/**
 * @deprecated: use TuiButtonOptions instead
 * todo: remove in 3.0
 */
export type ButtonOptions = TuiButtonOptions;

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
