import {tuiCreateOptions} from '@taiga-ui/cdk';

export const [TUI_SEARCH_RESULTS_OPTIONS, tuiSearchResultsOptionsProvider] =
    tuiCreateOptions({
        key: 'taiga-search-history',
        history: '@tui.clock',
        popular: '@tui.search',
        empty: '@tui.search',
        remove: '@tui.trash',
    });
