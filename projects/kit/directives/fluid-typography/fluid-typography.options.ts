import type {Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {InjectionToken} from '@angular/core';

export interface TuiFluidTypographyOptions {
    readonly min: number;
    readonly max: number;
}

export const TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS: TuiFluidTypographyOptions = {
    min: 0.625,
    max: 1.5,
};

export const TUI_FLUID_TYPOGRAPHY_OPTIONS = new InjectionToken(
    'TUI_FLUID_TYPOGRAPHY_OPTIONS',
    {
        factory: () => TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS,
    },
);

export function tuiFluidTypographyOptionsProvider(
    options: Partial<TuiFluidTypographyOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_FLUID_TYPOGRAPHY_OPTIONS,
        options,
        TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS,
    );
}
