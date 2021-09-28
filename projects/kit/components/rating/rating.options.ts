import {InjectionToken} from '@angular/core';

export interface RatingOptions {
    readonly rateMax: number;
    readonly rateReadonly: boolean;
    readonly rateColor: string;
    readonly rateEmptyIcon: string;
    readonly rateSelectedIcon: string;
}

export const TUI_RATING_DEFAULT_OPTIONS: RatingOptions = {
    rateMax: 5,
    rateReadonly: false,
    rateColor: 'var(--tui-accent)',
    rateEmptyIcon: 'tuiIconStarLarge',
    rateSelectedIcon: 'tuiIconStarFilledLarge',
};

export const TUI_RATING_OPTIONS: InjectionToken<RatingOptions> =
    new InjectionToken<RatingOptions>('Default parameters for rating component', {
        factory: () => TUI_RATING_DEFAULT_OPTIONS,
    });
