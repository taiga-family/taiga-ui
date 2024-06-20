import {TuiItem} from '@taiga-ui/cdk/directives/item';

import {TuiItemsWithMoreComponent} from './items-with-more.component';
import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiMore} from './more.directive';

export const TuiItemsWithMore = [
    TuiItemsWithMoreComponent,
    TuiItemsWithMoreDirective,
    TuiMore,
    TuiItem,
] as const;
