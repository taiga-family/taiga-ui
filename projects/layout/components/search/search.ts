import {TuiItem} from '@taiga-ui/cdk/directives/item';

import {TuiSearchComponent} from './search.component';
import {TuiSearchFiltersComponent} from './search-filters.component';

/**
 * @deprecated moved to @taiga-ui/beaver
 */
export const TuiSearch = [
    TuiSearchComponent,
    TuiSearchFiltersComponent,
    TuiItem,
] as const;
