import {InjectionToken, ValueProvider} from '@angular/core';

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
    iconFilled: `tuiIconStarFilledLarge`,
};

export const TUI_RATING_OPTIONS = new InjectionToken<TuiRatingOptions>(
    `[TUI_RATING_OPTIONS]: Default parameters for rating component`,
    {
        factory: () => TUI_RATING_DEFAULT_OPTIONS,
    },
);

export const tuiRatingOptionsProvider: (
    options: Partial<TuiRatingOptions>,
) => ValueProvider = (options: Partial<TuiRatingOptions>) => ({
    provide: TUI_RATING_OPTIONS,
    useValue: {...TUI_RATING_DEFAULT_OPTIONS, ...options},
});
