import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiRatingOptions {
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<number>>;
    readonly max: number;
}

export const TUI_RATING_DEFAULT_OPTIONS: TuiRatingOptions = {
    icon: `tuiIconStarLarge`,
    max: 5,
};

export const TUI_RATING_OPTIONS = tuiCreateToken(TUI_RATING_DEFAULT_OPTIONS);

export function tuiRatingOptionsProvider(options: Partial<TuiRatingOptions>): Provider {
    return tuiProvideOptions(TUI_RATING_OPTIONS, options, TUI_RATING_DEFAULT_OPTIONS);
}
