import {InjectionToken, type Provider} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiRatingContext extends TuiContext<number> {
    readonly value: number;
    readonly filled: boolean;
}

export interface TuiRatingOptions {
    readonly icon: PolymorpheusContent<TuiRatingContext>;
    readonly max: number;
}

export const TUI_RATING_DEFAULT_OPTIONS: TuiRatingOptions = {
    icon: '@tui.star',
    max: 5,
};

export const TUI_RATING_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_RATING_OPTIONS' : '',
    {
        factory: () => TUI_RATING_DEFAULT_OPTIONS,
    },
);

export function tuiRatingOptionsProvider(options: Partial<TuiRatingOptions>): Provider {
    return tuiProvideOptions(TUI_RATING_OPTIONS, options, TUI_RATING_DEFAULT_OPTIONS);
}
