import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';

export interface TuiCardOptions extends TuiAppearanceOptions {
    space: '' | 'compact' | 'normal';
}

export const TUI_CARD_DEFAULT_OPTIONS: TuiCardOptions = {
    appearance: '',
    space: 'normal',
};

export const [TUI_CARD_OPTIONS, tuiCardOptionsProvider] = tuiCreateOptions(
    TUI_CARD_DEFAULT_OPTIONS,
);
