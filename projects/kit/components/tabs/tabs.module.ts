import {NgModule} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk/directives/item';

import {TuiTab} from './tab.directive';
import {TuiTabs} from './tabs.directive';
import {TuiTabsHorizontal} from './tabs-horizontal.directive';
import {TuiTabsVertical} from './tabs-vertical.directive';
import {TuiTabsWithMore} from './tabs-with-more.component';

@NgModule({
    imports: [
        TuiItem,
        TuiTab,
        TuiTabs,
        TuiTabsHorizontal,
        TuiTabsVertical,
        TuiTabsWithMore,
    ],
    exports: [
        TuiTabsWithMore,
        TuiTabsHorizontal,
        TuiTabs,
        TuiTabsVertical,
        TuiTab,
        TuiItem,
    ],
})
export class TuiTabsModule {}
