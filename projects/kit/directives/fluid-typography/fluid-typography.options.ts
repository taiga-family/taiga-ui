import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiFluidTypographyOptions {
    readonly min: number;
    readonly max: number;
}

export const TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS: TuiFluidTypographyOptions = {
    min: 0.625,
    max: 1.25,
};

export const [TUI_FLUID_TYPOGRAPHY_OPTIONS, tuiFluidTypographyOptionsProvider] =
    tuiCreateOptions(TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS);
