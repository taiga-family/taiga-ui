import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiRatingOptions {
    readonly icon: PolymorpheusContent<TuiContext<number>>;
    readonly max: number;
}

export const TUI_RATING_DEFAULT_OPTIONS: TuiRatingOptions = {
    icon: '@tui.star',
    max: 5,
};

export const TUI_RATING_OPTIONS = tuiCreateToken(TUI_RATING_DEFAULT_OPTIONS);

export function tuiRatingOptionsProvider(options: Partial<TuiRatingOptions>): Provider {
    return tuiProvideOptions(TUI_RATING_OPTIONS, options, TUI_RATING_DEFAULT_OPTIONS);
}
