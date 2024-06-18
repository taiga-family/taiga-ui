import {NgModule} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk';

import {TuiTabDirective} from './tab.directive';
import {TuiTabsDirective} from './tabs.directive';
import {TuiTabsHorizontalDirective} from './tabs-horizontal.directive';
import {TuiTabsVerticalDirective} from './tabs-vertical.directive';
import {TuiTabsWithMoreComponent} from './tabs-with-more.component';

@NgModule({
    imports: [
        TuiItem,
        TuiTabDirective,
        TuiTabsDirective,
        TuiTabsHorizontalDirective,
        TuiTabsVerticalDirective,
        TuiTabsWithMoreComponent,
    ],
    exports: [
        TuiTabsWithMoreComponent,
        TuiTabsHorizontalDirective,
        TuiTabsDirective,
        TuiTabsVerticalDirective,
        TuiTabDirective,
        TuiItem,
    ],
})
export class TuiTabsModule {}
