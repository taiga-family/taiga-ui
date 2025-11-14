import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
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

export const [TUI_RATING_OPTIONS, tuiRatingOptionsProvider] = tuiCreateOptions(
    TUI_RATING_DEFAULT_OPTIONS,
);
