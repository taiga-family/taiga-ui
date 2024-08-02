import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiAutoScaleOptions {
    readonly min: number;
    readonly max: number;
}

export const TUI_AUTO_SCALE_DEFAULT_OPTIONS: TuiAutoScaleOptions = {
    min: 0.625,
    max: 1.5,
};

export const TUI_AUTO_SCALE_OPTIONS = tuiCreateToken(TUI_AUTO_SCALE_DEFAULT_OPTIONS);

export function tuiAutoScaleOptionsProvider(
    options: Partial<TuiAutoScaleOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_AUTO_SCALE_OPTIONS,
        options,
        TUI_AUTO_SCALE_DEFAULT_OPTIONS,
    );
}
