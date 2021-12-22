import {InjectionToken} from '@angular/core';

export interface RatingOptions {
    readonly max: number;
    readonly iconNormal: string;
    readonly iconFilled: string;
}

export const TUI_RATING_DEFAULT_OPTIONS: RatingOptions = {
    max: 5,
    iconNormal: 'tuiIconStarLarge',
    iconFilled: 'tuiIconStarFilledLarge',
};

export const TUI_RATING_OPTIONS: InjectionToken<RatingOptions> =
    new InjectionToken<RatingOptions>('Default parameters for rating component', {
        factory: () => TUI_RATING_DEFAULT_OPTIONS,
    });
