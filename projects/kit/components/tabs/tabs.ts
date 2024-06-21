import {TuiItem} from '@taiga-ui/cdk/directives/item';

import {TuiTab} from './tab.directive';
import {TuiTabsDirective} from './tabs.directive';
import {TuiTabsHorizontal} from './tabs-horizontal.directive';
import {TuiTabsVertical} from './tabs-vertical.directive';
import {TuiTabsWithMore} from './tabs-with-more.component';

export const TuiTabs = [
    TuiItem,
    TuiTab,
    TuiTabsDirective,
    TuiTabsHorizontal,
    TuiTabsVertical,
    TuiTabsWithMore,
] as const;
