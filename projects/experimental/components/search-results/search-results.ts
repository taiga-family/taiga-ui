import {TuiSearchHistory} from './search-history.component';
import {TuiSearchHotkey} from './search-hotkey.directive';
import {TuiSearchResultsComponent} from './search-results.component';

/**
 * @deprecated moved to @taiga-ui/beaver
 */
export const TuiSearchResults = [
    TuiSearchHotkey,
    TuiSearchHistory,
    TuiSearchResultsComponent,
] as const;
