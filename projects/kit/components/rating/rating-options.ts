import {InjectionToken} from '@angular/core';

export interface TuiRatingOptions {
    readonly min: number;
    readonly max: number;
    readonly iconNormal: string;
    readonly iconFilled: string;
}

export const TUI_RATING_DEFAULT_OPTIONS: TuiRatingOptions = {
    min: 0,
    max: 5,
    iconNormal: 'tuiIconStarLarge',
    iconFilled: 'tuiIconStarFilledLarge',
};

export const TUI_RATING_OPTIONS: InjectionToken<TuiRatingOptions> =
    new InjectionToken<TuiRatingOptions>('Default parameters for rating component', {
        factory: () => TUI_RATING_DEFAULT_OPTIONS,
    });
