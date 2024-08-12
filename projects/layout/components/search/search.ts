import {TuiItem} from '@taiga-ui/cdk';

import {TuiSearchComponent} from './search.component';
import {TuiSearchFiltersComponent} from './search-filters.component';

export const TuiSearch = [
    TuiSearchComponent,
    TuiSearchFiltersComponent,
    TuiItem,
] as const;
