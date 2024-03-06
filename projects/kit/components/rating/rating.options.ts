import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiRatingOptions {
    readonly iconFilled: string;
    readonly iconNormal: string;
    readonly max: number;
    readonly min: number;
}

export const TUI_RATING_DEFAULT_OPTIONS: TuiRatingOptions = {
    min: 0,
    max: 5,
    iconNormal: 'tuiIconStarLarge',
    iconFilled: 'tuiIconStarLarge',
};

/**
 * Default parameters for Rating component
 */
export const TUI_RATING_OPTIONS = tuiCreateToken(TUI_RATING_DEFAULT_OPTIONS);

export function tuiRatingOptionsProvider(options: Partial<TuiRatingOptions>): Provider {
    return tuiProvideOptions(TUI_RATING_OPTIONS, options, TUI_RATING_DEFAULT_OPTIONS);
}
