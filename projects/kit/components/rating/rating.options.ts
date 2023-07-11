import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiRatingOptions {
    readonly min: number;
    readonly max: number;
    readonly iconNormal: string;
    readonly iconFilled: string;
}

export const TUI_RATING_DEFAULT_OPTIONS: TuiRatingOptions = {
    min: 0,
    max: 5,
    iconNormal: `tuiIconStarLarge`,
    iconFilled: `tuiIconStarLarge`,
};

/**
 * Default parameters for Rating component
 */
export const TUI_RATING_OPTIONS = tuiCreateOptions(TUI_RATING_DEFAULT_OPTIONS);

export function tuiRatingOptionsProvider(options: Partial<TuiRatingOptions>): Provider {
    return tuiProvideOptions(TUI_RATING_OPTIONS, options, TUI_RATING_DEFAULT_OPTIONS);
}
