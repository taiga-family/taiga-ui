import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiStorageKeyFactory} from '@taiga-ui/core';

export const [TUI_SEARCH_RESULTS_OPTIONS, tuiSearchResultsOptionsProvider] =
    tuiCreateOptions({
        key: tuiStorageKeyFactory('search-history'),
        history: '@tui.clock',
        popular: '@tui.search',
        empty: '@tui.search',
        remove: '@tui.trash',
    });
