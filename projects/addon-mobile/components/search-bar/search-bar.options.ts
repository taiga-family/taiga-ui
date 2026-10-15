import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiSearchBarOptions {
    /**
     * Icon for `tuiButtonX` inside the search bar,
     * `null` keeps the common close icon
     */
    readonly closeIcon: TuiHandler<'android' | 'ios' | 'web', string | null>;
}

export const TUI_SEARCH_BAR_DEFAULT_OPTIONS: TuiSearchBarOptions = {
    closeIcon: (platform) => (platform === 'android' ? '@tui.arrow-left' : null),
};

export const [TUI_SEARCH_BAR_OPTIONS, tuiSearchBarOptionsProvider] = tuiCreateOptions(
    TUI_SEARCH_BAR_DEFAULT_OPTIONS,
);
