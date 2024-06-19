import {TuiItem} from '@taiga-ui/cdk';

import {TuiItemsWithMoreComponent} from './items-with-more.component';
import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiMore} from './more.directive';

export const TuiItemsWithMore = [
    TuiItemsWithMoreComponent,
    TuiItemsWithMoreDirective,
    TuiMore,
    TuiItem,
] as const;
